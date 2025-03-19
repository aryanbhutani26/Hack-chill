import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from 'react-router-dom';

const InstitutionInfo: React.FC = () => {
  const [formData, setFormData] = useState({
    institutionType: '',
    numberOfStudents: '',
    institutionEmail: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/grading-info'); // Navigate to GradingInfo page
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Start Your Journey with EduAI</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-clock text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">14-Day Free Trial</h3>
                  <p className="text-gray-600">Experience all premium features without any commitment</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-infinity text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Unlimited Grading</h3>
                  <p className="text-gray-600">Grade as many assignments as you need during the trial</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-credit-card text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">No Credit Card Required</h3>
                  <p className="text-gray-600">Start your trial without any payment information</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-100 rounded-lg">
              <p className="text-gray-700 italic">
                "EduAI has completely transformed how I manage assignments. The time saved on grading allows me to focus more on actual teaching and student interaction."
              </p>
              <div className="mt-4 flex items-center">
                <img 
                  src="https://public.readdy.ai/ai/img_res/3efc21b426f6dced4ba8780a4d3f7617.jpg"
                  alt="Dr. Rebecca Chen"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold">Dr. Rebecca Chen</p>
                  <p className="text-sm text-gray-600">Professor of Education, Yale University</p>
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
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${2 >= i ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {i}
                  </div>
                  {i < 3 && <div className={`w-60 h-1 ${2 > i ? 'bg-blue-600' : 'bg-gray-200'}`}></div>}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="institutionType">Institution Type</Label>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, institutionType: value }))}>
                    <SelectTrigger className="mt-1 w-full opacity-100 bg-white">
                      <SelectValue placeholder="Select institution type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="school">School</SelectItem>
                      <SelectItem value="college">College</SelectItem>
                      <SelectItem value="university">University</SelectItem>
                      <SelectItem value="training-center">Training Center</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="numberOfStudents">Number of Students</Label>
                  <Input
                    id="numberOfStudents"
                    name="numberOfStudents"
                    type="number"
                    required
                    value={formData.numberOfStudents}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="institutionEmail">Institution Email</Label>
                  <Input
                    id="institutionEmail"
                    name="institutionEmail"
                    type="email"
                    required
                    value={formData.institutionEmail}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 !rounded-button">
                Submit Institution Info
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstitutionInfo;