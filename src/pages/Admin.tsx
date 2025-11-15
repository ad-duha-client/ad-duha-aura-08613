import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Tag, ShoppingCart } from "lucide-react";

const Admin = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/admin/products">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <Package className="w-12 h-12 mb-2 text-primary" />
                  <CardTitle>Products</CardTitle>
                  <CardDescription>Manage product catalog</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Create, edit, and delete products
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/admin/categories">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <Tag className="w-12 h-12 mb-2 text-primary" />
                  <CardTitle>Categories</CardTitle>
                  <CardDescription>Manage product categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Create, edit, and delete categories
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/admin/orders">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <ShoppingCart className="w-12 h-12 mb-2 text-primary" />
                  <CardTitle>Orders</CardTitle>
                  <CardDescription>Manage customer orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    View and update order status
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
