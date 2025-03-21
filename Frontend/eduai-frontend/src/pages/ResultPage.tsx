import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const ResultPage: React.FC<{ correct: number; incorrect: number }> = ({ correct, incorrect }) => {
  const data = [
    { name: 'Correct', value: correct },
    { name: 'Incorrect', value: incorrect },
  ];

  const COLORS = ['#4CAF50', '#FF5722'];
  const total = correct + incorrect;
  const percentage = total > 0 ? ((correct / total) * 100).toFixed(2) : '0';

  const getFeedback = () => {
    const score = parseFloat(percentage);
    if (score >= 90) return "Excellent! 🎉";
    if (score >= 75) return "Good Job 👍";
    if (score >= 50) return "Needs Improvement 🧐";
    return "Try Again 😢";
  };

  return (
    <div className="p-6 space-y-6 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100">
      <Card className="w-full max-w-2xl shadow-xl border border-blue-100 bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Grading Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center justify-around gap-6">
            <div className="w-full md:w-1/2 h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center space-y-3">
              <p className="text-lg font-semibold text-green-600">✅ Correct Answers: {correct}</p>
              <p className="text-lg font-semibold text-red-500">❌ Incorrect Answers: {incorrect}</p>
              <p className="text-xl font-bold text-blue-700 mt-2">Score: {percentage}%</p>
              <p className="text-md italic text-gray-600">Feedback: {getFeedback()}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultPage;
