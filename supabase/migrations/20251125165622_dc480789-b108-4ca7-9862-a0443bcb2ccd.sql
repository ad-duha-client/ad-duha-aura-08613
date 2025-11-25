-- Create a function to send order email notification
create or replace function public.send_order_email_notification()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  request_id bigint;
  function_url text;
  service_role_key text;
begin
  -- Set the edge function URL (project specific)
  function_url := 'https://khpsqskwtextrwkchgyp.supabase.co/functions/v1/send-order-email';
  
  -- Service role key for authentication (project specific)
  service_role_key := 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtocHNxc2t3dGV4dHJ3a2NoZ3lwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjgzODQ1NCwiZXhwIjoyMDc4NDE0NDU0fQ.TYkLnbpcxzrqU9A-J6j5gZyVQ0G3VQdSxGVvEw1h-xE';
  
  -- Make async HTTP request to edge function
  select net.http_post(
    url := function_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || service_role_key
    ),
    body := jsonb_build_object('orderId', NEW.id::text)
  ) into request_id;
  
  -- Log the request
  raise log 'Order email notification triggered for order: %, request_id: %', NEW.order_number, request_id;
  
  return NEW;
end;
$$;

-- Create trigger to send email after order insert
drop trigger if exists on_order_created on orders;
create trigger on_order_created
  after insert on orders
  for each row
  execute function send_order_email_notification();