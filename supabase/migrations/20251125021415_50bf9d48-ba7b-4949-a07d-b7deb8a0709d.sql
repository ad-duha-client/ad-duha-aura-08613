-- Drop the existing trigger and function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Create updated function that handles phone numbers and checks for admin emails
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
DECLARE
  admin_emails TEXT[] := ARRAY['satyambhasinjims@proton.me', 'ad-duha-admin1234@proton.me'];
BEGIN
  -- Insert into profiles with phone
  INSERT INTO public.profiles (id, email, full_name, phone)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name'),
    NEW.raw_user_meta_data->>'phone'
  );
  
  -- Check if email is in admin list
  IF NEW.email = ANY(admin_emails) THEN
    -- Assign admin role
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'admin');
  ELSE
    -- Assign regular user role
    INSERT INTO public.user_roles (user_id, role)
    VALUES (NEW.id, 'user');
  END IF;
  
  RETURN NEW;
END;
$$;

-- Recreate the trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();