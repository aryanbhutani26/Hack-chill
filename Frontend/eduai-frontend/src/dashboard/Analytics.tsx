
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell } from "recharts";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, BarChart3 } from "lucide-react";
import { Toaster, toast } from "sonner";
import { useEffect, useState } from "react";
import AIPoweredGrading from './Aigrading'; // Import AIPoweredGrading component

const analyticsFeatures = [
  { name: "AI-Powered Grading", icon: <Sparkles className="w-6 h-6 text-blue-600" />, description: "Instantly grade assignments with AI-driven feedback." },
  { name: "Performance Insights", icon: <TrendingUp className="w-6 h-6 text-green-600" />, description: "Track student performance over time with smart analytics." },
  { name: "Trends & Comparisons", icon: <BarChart3 className="w-6 h-6 text-purple-600" />, description: "Compare scores and trends to identify improvement areas." },
];

// Sample data
const performanceData = [
  { month: "Jan", score: 50 },
  { month: "Feb", score: 60 },
  { month: "Mar", score: 75 },
  { month: "Apr", score: 90 },
  { month: "May", score: 85 },
];

const scoreDistributionData = [
  { name: "Excellent", value: 50 },
  { name: "Good", value: 40 },
  { name: "Average", value: 30 },
  { name: "Below Average", value: 20 },
];

const COLORS = ["#4CAF50", "#FFC107", "#FF5722", "#607D8B"];

export default function Analytics() {
  const [showGrading, setShowGrading] = useState(false); // State to manage grading component display

  useEffect(() => {
    toast.success("Welcome to Analytics! 📊 Gain powerful insights now.");
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-400 to-white">

    <div className="p-6 space-y-6">
      {/* Feature Highlights */}
      {!showGrading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {analyticsFeatures.map((feature) => (
            <Card
              key={feature.name}
              className="shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
              onClick={() => {
                if (feature.name === "AI-Powered Grading") {
                  setShowGrading(true); // Show grading component
                }
              }}
            >
              <CardHeader className="flex items-center gap-4">
                {feature.icon}
                <CardTitle>{feature.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Conditional Rendering of AIPoweredGrading */}
      {showGrading && <AIPoweredGrading />}

      {/* Charts & Visuals */}
      {!showGrading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Line Chart */}
          <Card className="shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <CardHeader>
              <CardTitle>Overall Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <LineChart width={400} height={250} data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card className="shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <CardHeader>
              <CardTitle>Score Distribution</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <PieChart width={400} height={250}>
                <Pie data={scoreDistributionData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
                  {scoreDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Actions */}
      {!showGrading && (
        <div className="flex justify-end mt-4">
          <Button variant="primary" onClick={() => toast("Generating detailed report...")}>Generate Report</Button>
        </div>
      )}

      <Toaster position="top-right" richColors />
    </div>
    </div>
  );
}
