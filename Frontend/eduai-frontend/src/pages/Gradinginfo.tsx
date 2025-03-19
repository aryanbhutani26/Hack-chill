import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const GradingInfo: React.FC = () => {
  const [formData, setFormData] = useState({
    subject: '',
    gradingFormat: '',
    role: '',
    departmentName: '',
    teachingExperience: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to Dashboard page
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[1024px] w-full bg-white">
      <nav className="flex items-center justify-between p-6 border-b">
        <div className="flex items-center space-x-2">
          <i className="fas fa-graduation-cap text-2xl text-blue-600"></i>
          <span className="text-xl font-bold text-gray-900">EduAI</span>
        </div>
        <a href="/" className="text-gray-600 hover:text-blue-600">
          <i className="fas fa-arrow-left mr-2"></i>
          Back to Home
        </a>
      </nav>

      <div className="flex min-h-[calc(100vh-80px)]">
        <div className="w-2/5 bg-blue-50 p-12" style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=modern abstract educational technology pattern with soft blue gradient overlay, featuring geometric shapes and floating particles, perfect for AI education platform background&width=576&height=1024&seq=5&orientation=portrait&flag=dba33ba3999fba771e01d96d4f31eccf)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div className="bg-white/90 p-8 rounded-lg backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Grading Information</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-book text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Subject</h3>
                  <p className="text-gray-600">Specify the subject for grading</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-chart-bar text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Grading System</h3>
                  <p className="text-gray-600">Choose the grading system used</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-info-circle text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Additional Info</h3>
                  <p className="text-gray-600">Provide any additional information</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-3/5 p-12">
          <div className="max-w-xl mx-auto">
            <div className="flex justify-between mb-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${3 >= i ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {i}
                  </div>
                  {i < 3 && <div className={`w-60 h-1 ${3 > i ? 'bg-blue-600' : 'bg-gray-200'}`}></div>}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="gradingFormat">Preferred Grading Format</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, gradingFormat: value }))}>
                    <SelectTrigger className="mt-1 w-full">
                      <SelectValue placeholder="Select grading format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="numerical">Numerical</SelectItem>
                      <SelectItem value="letter-grades">Letter Grades</SelectItem>
                      <SelectItem value="comments-based">Comments-based</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="role">Your Role in Institution</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}>
                    <SelectTrigger className="mt-1 w-full">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professor">Professor</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="teaching-assistant">Teaching Assistant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="departmentName">Department Name</Label>
                  <Input
                    id="departmentName"
                    name="departmentName"
                    type="text"
                    value={formData.departmentName}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="teachingExperience">Years of Teaching Experience</Label>
                  <Input
                    id="teachingExperience"
                    name="teachingExperience"
                    type="number"
                    value={formData.teachingExperience}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 !rounded-button">
                Submit Grading Info
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GradingInfo;