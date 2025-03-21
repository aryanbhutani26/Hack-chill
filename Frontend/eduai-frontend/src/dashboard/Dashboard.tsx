
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Toaster, toast } from "sonner";
import { LayoutDashboard, BarChart3, Settings, Users, Menu, Activity, DollarSign, UserCheck, Bell, ClipboardList, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Analytics from './Analytics'; // Import the Analytics component

const features = [
  { name: "Overview", icon: <LayoutDashboard className="w-5 h-5" />, content: "Dashboard overview with insights." },
  { name: "Analytics", icon: <BarChart3 className="w-5 h-5" />, content: "Detailed reports and performance tracking." },
  { name: "Users", icon: <Users className="w-5 h-5" />, content: "Manage user access and roles." },
  { name: "Tasks", icon: <ClipboardList className="w-5 h-5" />, content: "Manage and track assigned tasks." },
  { name: "Notifications", icon: <Bell className="w-5 h-5" />, content: "View latest updates and alerts." },
  { name: "Settings", icon: <Settings className="w-5 h-5" />, content: "Customize your dashboard preferences." }
];

// Sample Data for Charts
const chartData = [
  { month: "Jan", users: 100, revenue: 5000 },
  { month: "Feb", users: 200, revenue: 7000 },
  { month: "Mar", users: 300, revenue: 11000 },
  { month: "Apr", users: 500, revenue: 15000 },
];

export default function Dashboard() {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    toast.success("🎉 Welcome to your dashboard! Explore your features now.");
  }, []);

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -100 }} 
        animate={{ x: sidebarOpen ? 0 : -250 }} 
        transition={{ duration: 0.3 }} 
        className={`fixed md:relative md:w-64 bg-white dark:bg-gray-800 shadow-md p-4 space-y-4 border-r z-50 ${sidebarOpen ? "w-64" : "w-0 md:w-64"}`}
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">EduAI Dashboard</h2>
        <nav className="space-y-2">
          {features.map((feature) => (
            <Button
              key={feature.name}
              variant={selectedFeature.name === feature.name ? "default" : "ghost"}
              className="w-full flex gap-2 justify-start"
              onClick={() => {
                setSelectedFeature(feature);
                toast.info(`📌 ${feature.name} loaded successfully!`);
              }}
            >
              {feature.icon} {feature.name}
            </Button>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between">
          <Button className="md:hidden" variant="ghost" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="w-6 h-6" />
          </Button>
          <h1 className="text-2xl font-bold text-white dark:text-white">{selectedFeature.name}</h1>
        </div>

        <motion.div
          key={selectedFeature.name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Render Analytics Component */}
          {selectedFeature.name === "Analytics" && <Analytics />}

          {/* Dashboard Overview */}
          {selectedFeature.name === "Overview" && (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <Card>
                  <CardHeader><CardTitle>Total Users</CardTitle></CardHeader>
                  <CardContent className="flex items-center gap-2 text-xl font-semibold">
                    <UserCheck className="w-6 h-6 text-blue-600" /> 1,200+
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader><CardTitle>Active Sessions</CardTitle></CardHeader>
                  <CardContent className="flex items-center gap-2 text-xl font-semibold">
                    <Activity className="w-6 h-6 text-green-600" /> 320
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader><CardTitle>Revenue</CardTitle></CardHeader>
                  <CardContent className="flex items-center gap-2 text-xl font-semibold">
                    <DollarSign className="w-6 h-6 text-yellow-600" /> $24,000
                  </CardContent>
                </Card>
              </div>

              {/* Chart Section */}
              <div className="mt-6">
                <Card>
                  <CardHeader><CardTitle>Growth Analytics</CardTitle></CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="users" stroke="#8884d8" />
                        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </>
          )}

          {/* Users Section */}
          {selectedFeature.name === "Users" && (
            <Card className="mt-6">
              <CardHeader><CardTitle>User Management</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>👤 John Doe - Admin</li>
                  <li>👤 Alice Smith - Editor</li>
                  <li>👤 Robert Brown - Viewer</li>
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Notifications Section */}
          {selectedFeature.name === "Notifications" && (
            <Card className="mt-6">
              <CardHeader><CardTitle>Recent Alerts</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>⚠ Server maintenance scheduled at 11 PM.</li>
                  <li>✅ New feature update released!</li>
                  <li>📢 System downtime reported.</li>
                </ul>
              </CardContent>
            </Card>
          )}

          {/* Placeholder for other sections */}
          {selectedFeature.name !== "Overview" && selectedFeature.name !== "Users" && selectedFeature.name !== "Notifications" && selectedFeature.name !== "Analytics" && (
            <Card className="mt-4">
              <CardHeader><CardTitle>{selectedFeature.name}</CardTitle></CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{selectedFeature.content}</p>
                <Button className="mt-4" onClick={() => toast(`${selectedFeature.name} feature explored! 🎯`)}>Show Notification</Button>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </main>

      <Toaster position="top-right" richColors />
    </div>
  );
}
