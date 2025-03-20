// // The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

// import React, { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Checkbox } from "@/components/ui/checkbox";
// import { useNavigate } from 'react-router-dom';

// const App: React.FC = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     password: '',
//     institution: '',
//     role: '',
//     agreeToTerms: false
//   });

//   const [step, setStep] = useState(1);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const navigate = useNavigate();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (step < 3) {
//       setStep(step + 1);
//       navigate('/institution-info'); // Navigate to InstitutionInfo page
//     }
//   };

//   return (
//     <div className="min-h-[1024px] w-full bg-white">
//       <nav className="flex items-center justify-between p-6 border-b">
//         <div className="flex items-center space-x-2">
//           <i className="fas fa-graduation-cap text-2xl text-blue-600"></i>
//           <span className="text-xl font-bold text-gray-900">EduAI</span>
//         </div>
//         <a href="https://readdy.ai/home/760b47a9-2e54-4094-aa8e-a339395ce0a4/d43eb456-dce9-4b0f-a1dd-a4c69917b660" data-readdy="true" className="text-gray-600 hover:text-blue-600">
//           <i className="fas fa-arrow-left mr-2"></i>
//           Back to Home
//         </a>
//       </nav>

//       <div className="flex min-h-[calc(100vh-80px)]">
//         <div className="w-2/5 bg-blue-50 p-12" style={{
//           backgroundImage: 'url(https://readdy.ai/api/search-image?query=modern abstract educational technology pattern with soft blue gradient overlay, featuring geometric shapes and floating particles, perfect for AI education platform background&width=576&height=1024&seq=5&orientation=portrait&flag=dba33ba3999fba771e01d96d4f31eccf)',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}>
//           <div className="bg-white/90 p-8 rounded-lg backdrop-blur-sm">
//             <h2 className="text-3xl font-bold text-gray-900 mb-8">Start Your Journey with EduAI</h2>
//             <div className="space-y-6">
//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
//                   <i className="fas fa-clock text-blue-600 text-xl"></i>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg mb-2">14-Day Free Trial</h3>
//                   <p className="text-gray-600">Experience all premium features without any commitment</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
//                   <i className="fas fa-infinity text-blue-600 text-xl"></i>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg mb-2">Unlimited Grading</h3>
//                   <p className="text-gray-600">Grade as many assignments as you need during the trial</p>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
//                   <i className="fas fa-credit-card text-blue-600 text-xl"></i>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-lg mb-2">No Credit Card Required</h3>
//                   <p className="text-gray-600">Start your trial without any payment information</p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-12 p-6 bg-blue-100 rounded-lg">
//               <p className="text-gray-700 italic">
//                 "EduAI has completely transformed how I manage assignments. The time saved on grading allows me to focus more on actual teaching and student interaction."
//               </p>
//               <div className="mt-4 flex items-center">
//                 <img 
//                   src="https://public.readdy.ai/ai/img_res/3efc21b426f6dced4ba8780a4d3f7617.jpg"
//                   alt="Dr. Rebecca Chen"
//                   className="w-12 h-12 rounded-full object-cover mr-4"
//                 />
//                 <div>
//                   <p className="font-semibold">Dr. Rebecca Chen</p>
//                   <p className="text-sm text-gray-600">Professor of Education, Yale University</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-3/5 p-12">
//           <div className="max-w-xl mx-auto">
//             <div className="flex justify-between mb-8">
//               {[1, 2, 3].map((i) => (
//                 <div key={i} className="flex items-center">
//                   <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= i ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
//                     {i}
//                   </div>
//                   {i < 3 && <div className={`w-60 h-1 ${step > i ? 'bg-blue-600' : 'bg-gray-200'}`}></div>}
//                 </div>
//               ))}
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="space-y-4 mb-8">
//                 <Button type="button" variant="outline" className="w-full !rounded-button" onClick={() => {}}>
//                   <i className="fab fa-google mr-2"></i>
//                   Sign up with Google
//                 </Button>
//                 <Button type="button" variant="outline" className="w-full !rounded-button" onClick={() => {}}>
//                   <i className="fab fa-microsoft mr-2"></i>
//                   Sign up with Microsoft
//                 </Button>
//               </div>

//               <div className="relative">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-gray-300"></div>
//                 </div>
//                 <div className="relative flex justify-center text-sm">
//                   <span className="px-2 bg-white text-gray-500">Or continue with email</span>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <div>
//                   <Label htmlFor="fullName">Full Name</Label>
//                   <Input
//                     id="fullName"
//                     name="fullName"
//                     type="text"
//                     required
//                     value={formData.fullName}
//                     onChange={handleInputChange}
//                     className="mt-1"
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="email">Email Address</Label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="mt-1"
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="password">Password</Label>
//                   <Input
//                     id="password"
//                     name="password"
//                     type="password"
//                     required
//                     value={formData.password}
//                     onChange={handleInputChange}
//                     className="mt-1"
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="institution">Institution Name</Label>
//                   <Input
//                     id="institution"
//                     name="institution"
//                     type="text"
//                     required
//                     value={formData.institution}
//                     onChange={handleInputChange}
//                     className="mt-1"
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="role">Role</Label>
//                   <Select onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}>
//                     <SelectTrigger className="mt-1">
//                       <SelectValue placeholder="Select your role" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="teacher">Teacher</SelectItem>
//                       <SelectItem value="professor">Professor</SelectItem>
//                       <SelectItem value="administrator">Administrator</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div className="flex items-center space-x-2">
//                   <Checkbox
//                     id="terms"
//                     checked={formData.agreeToTerms}
//                     onCheckedChange={(checked) => 
//                       setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))
//                     }
//                   />
//                   <label htmlFor="terms" className="text-sm text-gray-600">
//                     I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
//                   </label>
//                 </div>
//               </div>

//               <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 !rounded-button">
//                 Create Account
//               </Button>

//               <p className="text-center text-sm text-gray-600">
//                 Already have an account?{' '}
//                 <a href="#" className="text-blue-600 hover:underline">Sign in</a>
//               </p>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



//  Supabase integration
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient"; // Import Supabase client
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const SignupForm: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    institution: "",
    role: "",
    agreeToTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      alert("You must agree to the terms.");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          fullName: formData.fullName,
          institution: formData.institution,
          role: formData.role,
        },
      },
    });

    if (error) {
      alert(error.message);
      return;
    }

    console.log("User signed up successfully!");
    setStep(step + 1);
    navigate("/institution-info"); // Navigate after signup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-400 to-white">

    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-semibold mb-4">Create Your Account</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
        <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-sm text-blue-600"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <Input type="text" name="institution" value={formData.institution} onChange={handleChange} placeholder="Institution Name" required />
        <Input type="text" name="role" value={formData.role} onChange={handleChange} placeholder="Your Role (e.g., Student, Educator)" required />

       <div className="flex items-center">
  <Checkbox
    id="terms"
    checked={formData.agreeToTerms}
    onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked })}
  />
  <label htmlFor="terms" className="ml-2 text-sm cursor-pointer">
    I agree to the Terms and Conditions
  </label>
</div>


        <Button type="submit" className="w-full">Sign Up</Button>
      </form>
    </div>
    </div>
  );
};

export default SignupForm;
