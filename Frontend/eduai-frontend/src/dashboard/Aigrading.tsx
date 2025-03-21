import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, UploadCloud } from "lucide-react";
import { Toaster, toast } from "sonner";
// import ResultPage from "./ResultPage";
import ResultPage from "@/pages/ResultPage";

export default function AIPoweredGrading() {
  const [subject, setSubject] = useState("");
  const [paperType, setPaperType] = useState("");
  const [files, setFiles] = useState({ mcq: null, questionPaper: null, answerSheet: null });
  const [showResult, setShowResult] = useState(false);
  const [gradingResult, setGradingResult] = useState({ correct: 7, incorrect: 3 }); // Simulated result

  const handleFileChange = (event, fileType) => {
    setFiles((prev) => ({ ...prev, [fileType]: event.target.files[0] }));
  };

  const handleSubmit = () => {
    if (!subject || !paperType) {
      toast.error("Please select a subject and paper type before uploading.");
      return;
    }

    if (paperType === "MCQ" && !files.mcq) {
      toast.error("Please upload the MCQ attempt sheet.");
      return;
    }
    if ((paperType === "Text-Based" || paperType === "Both") && (!files.questionPaper || !files.answerSheet)) {
      toast.error("Please upload both the question paper and answer sheet.");
      return;
    }

    toast.success("Grading in progress... 🔍 AI is analyzing the assignment.");
    setTimeout(() => {
      toast.success("Grading complete! 🎉");
      setShowResult(true);
    }, 3000);
  };

  if (showResult) {
    return <ResultPage correct={gradingResult.correct} incorrect={gradingResult.incorrect} />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-6">
      <Card className="w-full max-w-xl bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-6">
        <CardHeader className="flex items-center space-x-3">
          <Sparkles className="w-6 h-6 text-yellow-500" />
          <CardTitle className="text-xl font-semibold">AI-Powered Grading</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-gray-600 text-sm">Supported formats: PDF, DOCX, TXT. Max file size: 20MB.</p>

          {/* Subject Selection */}
          <select 
            className="p-2 border border-gray-300 rounded-md focus:border-blue-500"
            value={subject} 
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="">Select Subject</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
            <option value="History">History</option>
          </select>

          {/* Paper Type Selection */}
          <select 
            className="p-2 border border-gray-300 rounded-md focus:border-blue-500"
            value={paperType} 
            onChange={(e) => setPaperType(e.target.value)}
          >
            <option value="">Select Paper Type</option>
            <option value="MCQ">MCQ Based</option>
            <option value="Text-Based">Text Based</option>
            <option value="Both">Both</option>
          </select>

          {/* File Upload Fields */}
          {paperType === "MCQ" && (
            <label className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-blue-500 transition">
              <input type="file" className="hidden" onChange={(e) => handleFileChange(e, "mcq")} />
              <UploadCloud className="w-10 h-10 text-gray-500 mx-auto" />
              <p className="mt-2 text-gray-600">Upload MCQ Attempt Sheet</p>
              {files.mcq && <p className="text-sm text-blue-600 mt-2">{files.mcq.name}</p>}
            </label>
          )}
          {(paperType === "Text-Based" || paperType === "Both") && (
            <>
              <label className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-blue-500 transition">
                <input type="file" className="hidden" onChange={(e) => handleFileChange(e, "questionPaper")} />
                <UploadCloud className="w-10 h-10 text-gray-500 mx-auto" />
                <p className="mt-2 text-gray-600">Upload Question Paper</p>
                {files.questionPaper && <p className="text-sm text-blue-600 mt-2">{files.questionPaper.name}</p>}
              </label>
              <label className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-blue-500 transition">
                <input type="file" className="hidden" onChange={(e) => handleFileChange(e, "answerSheet")} />
                <UploadCloud className="w-10 h-10 text-gray-500 mx-auto" />
                <p className="mt-2 text-gray-600">Upload Answer Sheet</p>
                {files.answerSheet && <p className="text-sm text-blue-600 mt-2">{files.answerSheet.name}</p>}
              </label>
            </>
          )}

          {/* Submit Button */}
          <Button variant="primary" className="w-full bg-blue-600 hover:bg-blue-700 transition" onClick={handleSubmit}>
            📄 Grade Assignment
          </Button>
        </CardContent>
      </Card>
      <Toaster position="top-right" richColors />
    </div>
  );
}
