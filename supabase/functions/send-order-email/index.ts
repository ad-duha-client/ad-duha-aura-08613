import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.81.0";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface OrderEmailRequest {
  orderId: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { orderId }: OrderEmailRequest = await req.json();
    
    console.log("Processing order email for:", orderId);

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch order details
    const { data: order, error: orderError } = await supabase
      .from("orders")
      .select("*")
      .eq("id", orderId)
      .single();

    if (orderError || !order) {
      console.error("Error fetching order:", orderError);
      throw new Error("Order not found");
    }

    // Fetch user profile
    const { data: profile } = await supabase
      .from("profiles")
      .select("email, full_name")
      .eq("id", order.user_id)
      .single();

    // Fetch shipping address
    const { data: address } = await supabase
      .from("addresses")
      .select("*")
      .eq("id", order.shipping_address_id)
      .single();

    // Fetch order items
    const { data: orderItems, error: itemsError } = await supabase
      .from("order_items")
      .select("*")
      .eq("order_id", orderId);

    if (itemsError) {
      console.error("Error fetching order items:", itemsError);
      throw new Error("Failed to fetch order items");
    }

    const customerEmail = profile?.email;
    const customerName = profile?.full_name || "Customer";
    const shippingAddress = address;

    // Build order items HTML
    const itemsHtml = orderItems
      ?.map(
        (item) => `
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #eee;">${item.product_name}</td>
          <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
          <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right;">₹${item.product_price.toFixed(2)}</td>
          <td style="padding: 12px; border-bottom: 1px solid #eee; text-align: right;">₹${item.subtotal.toFixed(2)}</td>
        </tr>
      `
      )
      .join("");

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">Order Confirmation</h1>
            <p style="margin: 10px 0 0; font-size: 16px;">Thank you for your order!</p>
          </div>
          
          <div style="background: #fff; padding: 30px; border: 1px solid #eee; border-top: none; border-radius: 0 0 10px 10px;">
            <p style="font-size: 16px; margin-bottom: 20px;">Dear ${customerName},</p>
            
            <p style="font-size: 14px; color: #666;">We've received your order and will process it shortly. Here are your order details:</p>
            
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 5px 0;"><strong>Order Number:</strong> ${order.order_number}</p>
              <p style="margin: 5px 0;"><strong>Order Date:</strong> ${new Date(order.created_at).toLocaleDateString()}</p>
              <p style="margin: 5px 0;"><strong>Payment Method:</strong> ${order.payment_method || "Cash on Delivery"}</p>
            </div>

            ${shippingAddress ? `
            <h3 style="color: #667eea; margin-top: 25px;">Shipping Address</h3>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 10px 0;">
              <p style="margin: 5px 0;">${shippingAddress.full_name}</p>
              <p style="margin: 5px 0;">${shippingAddress.address_line1}</p>
              ${shippingAddress.address_line2 ? `<p style="margin: 5px 0;">${shippingAddress.address_line2}</p>` : ''}
              <p style="margin: 5px 0;">${shippingAddress.city}, ${shippingAddress.state || ''} ${shippingAddress.postal_code}</p>
              <p style="margin: 5px 0;">${shippingAddress.country}</p>
              <p style="margin: 5px 0;"><strong>Phone:</strong> ${shippingAddress.phone}</p>
            </div>
            ` : ''}

            <h3 style="color: #667eea; margin-top: 25px;">Order Items</h3>
            <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
              <thead>
                <tr style="background: #f9f9f9;">
                  <th style="padding: 12px; text-align: left; border-bottom: 2px solid #667eea;">Product</th>
                  <th style="padding: 12px; text-align: center; border-bottom: 2px solid #667eea;">Qty</th>
                  <th style="padding: 12px; text-align: right; border-bottom: 2px solid #667eea;">Price</th>
                  <th style="padding: 12px; text-align: right; border-bottom: 2px solid #667eea;">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
            </table>

            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <div style="display: flex; justify-content: space-between; margin: 5px 0;">
                <span>Subtotal:</span>
                <span><strong>₹${order.subtotal.toFixed(2)}</strong></span>
              </div>
              <div style="display: flex; justify-content: space-between; margin: 5px 0;">
                <span>Shipping:</span>
                <span><strong>₹${order.shipping_cost.toFixed(2)}</strong></span>
              </div>
              <div style="display: flex; justify-content: space-between; margin: 5px 0;">
                <span>Tax:</span>
                <span><strong>₹${order.tax.toFixed(2)}</strong></span>
              </div>
              <hr style="border: none; border-top: 2px solid #667eea; margin: 10px 0;">
              <div style="display: flex; justify-content: space-between; margin: 10px 0; font-size: 18px;">
                <span><strong>Total:</strong></span>
                <span style="color: #667eea;"><strong>₹${order.total.toFixed(2)}</strong></span>
              </div>
            </div>

            <p style="font-size: 14px; color: #666; margin-top: 30px;">
              If you have any questions about your order, please don't hesitate to contact us.
            </p>

            <p style="font-size: 14px; color: #666; margin-top: 20px;">
              Best regards,<br>
              <strong>Ad-Duha Team</strong>
            </p>
          </div>

          <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
            <p>This is an automated email. Please do not reply directly to this message.</p>
          </div>
        </body>
      </html>
    `;

    // Send email to customer
    if (customerEmail) {
      const customerEmailResponse = await resend.emails.send({
        from: "Ad-Duha <onboarding@resend.dev>",
        to: [customerEmail],
        subject: `Order Confirmation - ${order.order_number}`,
        html: emailHtml,
      });
      console.log("Customer email sent:", customerEmailResponse);
    }

    // Send email to admin
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 28px;">New Order Received</h1>
            <p style="margin: 10px 0 0; font-size: 16px;">Order #${order.order_number}</p>
          </div>
          
          <div style="background: #fff; padding: 30px; border: 1px solid #eee; border-top: none; border-radius: 0 0 10px 10px;">
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 5px 0;"><strong>Customer:</strong> ${customerName}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> ${customerEmail}</p>
              <p style="margin: 5px 0;"><strong>Order Number:</strong> ${order.order_number}</p>
              <p style="margin: 5px 0;"><strong>Order Date:</strong> ${new Date(order.created_at).toLocaleDateString()}</p>
              <p style="margin: 5px 0;"><strong>Total:</strong> ₹${order.total.toFixed(2)}</p>
            </div>

            ${shippingAddress ? `
            <h3 style="color: #667eea; margin-top: 25px;">Shipping Address</h3>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 10px 0;">
              <p style="margin: 5px 0;">${shippingAddress.full_name}</p>
              <p style="margin: 5px 0;">${shippingAddress.address_line1}</p>
              ${shippingAddress.address_line2 ? `<p style="margin: 5px 0;">${shippingAddress.address_line2}</p>` : ''}
              <p style="margin: 5px 0;">${shippingAddress.city}, ${shippingAddress.state || ''} ${shippingAddress.postal_code}</p>
              <p style="margin: 5px 0;">${shippingAddress.country}</p>
              <p style="margin: 5px 0;"><strong>Phone:</strong> ${shippingAddress.phone}</p>
            </div>
            ` : ''}

            <h3 style="color: #667eea; margin-top: 25px;">Order Items</h3>
            <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
              <thead>
                <tr style="background: #f9f9f9;">
                  <th style="padding: 12px; text-align: left; border-bottom: 2px solid #667eea;">Product</th>
                  <th style="padding: 12px; text-align: center; border-bottom: 2px solid #667eea;">Qty</th>
                  <th style="padding: 12px; text-align: right; border-bottom: 2px solid #667eea;">Price</th>
                  <th style="padding: 12px; text-align: right; border-bottom: 2px solid #667eea;">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                ${itemsHtml}
              </tbody>
            </table>
          </div>
        </body>
      </html>
    `;

    const adminEmailResponse = await resend.emails.send({
      from: "Ad-Duha <onboarding@resend.dev>",
      to: ["ad-duha-client@proton.me"],
      subject: `New Order - ${order.order_number}`,
      html: adminEmailHtml,
    });
    console.log("Admin email sent:", adminEmailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-order-email function:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
