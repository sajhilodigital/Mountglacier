"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Users, DollarSign, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardAdmin() {
  const stats = [
    {
      title: "Total Users",
      value: "2,847",
      change: "+12%",
      icon: <Users className="h-6 w-6 text-blue-600" />,
      bg: "from-blue-50 to-blue-100",
    },
    {
      title: "Total Orders",
      value: "1,429",
      change: "+8%",
      icon: <ShoppingCart className="h-6 w-6 text-purple-600" />,
      bg: "from-purple-50 to-purple-100",
    },
    {
      title: "Revenue",
      value: "$45,231",
      change: "+23%",
      icon: <DollarSign className="h-6 w-6 text-green-600" />,
      bg: "from-green-50 to-green-100",
    },
    {
      title: "Support Tickets",
      value: "73",
      change: "-5%",
      icon: <MessageSquare className="h-6 w-6 text-gray-600" />,
      bg: "from-gray-50 to-gray-100",
    },
  ];

  const orders = [
    { id: "#ORD-001", name: "John Doe", price: "$299.99", status: "Delivered" },
    {
      id: "#ORD-002",
      name: "Jane Smith",
      price: "$149.99",
      status: "Processing",
    },
    {
      id: "#ORD-003",
      name: "Mike Johnson",
      price: "$79.99",
      status: "Shipped",
    },
    {
      id: "#ORD-004",
      name: "Sarah Wilson",
      price: "$199.99",
      status: "Pending",
    },
  ];

  const users = [
    { name: "Alice Cooper", email: "alice@example.com", time: "2h ago" },
    { name: "Bob Martin", email: "bob@example.com", time: "5h ago" },
    { name: "Carol Davis", email: "carol@example.com", time: "1d ago" },
    { name: "David Brown", email: "david@example.com", time: "2d ago" },
  ];

  return (
    <main className="flex-1 p-4 sm:p-6 overflow-y-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Welcome Admin 👋</h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Here’s what’s happening in your place today
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card
              className={`bg-gradient-to-br ${stat.bg} rounded-2xl shadow-md`}
            >
              <CardHeader className="flex items-center justify-between pb-2">
                <CardTitle className="text-sm text-gray-600 font-medium">
                  {stat.title}
                </CardTitle>
                <div className="p-2 bg-white rounded-full shadow-sm">
                  {stat.icon}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl sm:text-3xl font-bold">
                  {stat.value}
                </div>
                <p
                  className={`text-sm ${
                    stat.change.startsWith("-")
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Orders & Users */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Orders */}
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Recent Orders
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 overflow-x-auto">
            {orders.map((order, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b pb-3 min-w-[280px]"
              >
                <div>
                  <p className="font-semibold text-gray-800">{order.id}</p>
                  <p className="text-sm text-gray-500">{order.name}</p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="font-semibold text-gray-800">{order.price}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium mt-1 ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Processing"
                        ? "bg-yellow-100 text-yellow-700"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
            <Button variant="default" className="w-full rounded-xl mt-3">
              View All Orders
            </Button>
          </CardContent>
        </Card>

        {/* Users */}
        <Card className="rounded-2xl shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              Recent Users
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 overflow-x-auto">
            {users.map((user, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b pb-3 min-w-[280px]"
              >
                <div>
                  <p className="font-semibold text-gray-800">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
                <p className="text-xs text-gray-400">{user.time}</p>
              </div>
            ))}
            <Button variant="default" className="w-full rounded-xl mt-3">
              View All Users
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
