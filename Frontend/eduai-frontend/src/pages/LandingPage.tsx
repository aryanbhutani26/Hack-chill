// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { 
  GraduationCap, 
  // Robot, 
  MessageSquare, 
  CheckSquare, 
  LineChart, 
  Upload, 
  Wand2, 
  CheckCircle, 
  Twitter, 
  Linkedin, 
  Github 
} from "lucide-react";
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const features = [
    {
      title: "AI-powered Grading",
      description:
        "Grade assignments automatically with advanced AI technology",
      // icon: <Robot className="text-blue-600" />,
      icon: <MessageSquare className="text-blue-600" />,
    },
    {
      title: "Personalized Feedback",
      description: "Provide detailed, constructive feedback for each student",
      icon: <MessageSquare className="text-blue-600" />,
    },
    {
      title: "Assessment Tools",
      description: "Comprehensive tools for various assessment types",
      icon: <CheckSquare className="text-blue-600" />,
    },
    {
      title: "Analytics Dashboard",
      description: "Track student progress with detailed analytics",
      icon: <LineChart className="text-blue-600" />,
    },
  ];
  const testimonials = [
    {
      name: "Dr. Emily Richardson",
      role: "Professor of Computer Science, Stanford University",
      content:
        "EduAI has revolutionized my grading process. What used to take hours now takes minutes, and the feedback quality is consistently high.",
      image:
        "https://public.readdy.ai/ai/img_res/dd0d26e3fe503fbe72f12cd82f6234ec.jpg",
    },
    {
      name: "Prof. James Anderson",
      role: "Mathematics Department Head, MIT",
      content:
        "The automated grading system is incredibly accurate and has saved our department countless hours. The analytics provide valuable insights into student performance.",
      image:
        "https://public.readdy.ai/ai/img_res/752e9b73e1beb7baea45d5505c61975f.jpg",
    },
    {
      name: "Dr. Sarah Thompson",
      role: "Biology Instructor, Harvard University",
      content:
        "EduAI has transformed how I provide feedback to my students. The personalized comments help students understand their mistakes and improve.",
      image:
        "https://public.readdy.ai/ai/img_res/0e18b7b1dd2ff3819b47a888c8eb69bf.jpg",
    },
  ];
  return (
    <div className="min-h-[1024px] w-full bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[600px] w-full overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1e3a8a, #2563eb, #3b82f6, #60a5fa)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent">
          <div className="mx-auto max-w-7xl">
            {/* Navigation */}
            <nav className="flex items-center justify-between p-6">
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">EduAI</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#features")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  href="#features"
                  className="text-gray-600 hover:text-blue-600 cursor-pointer"
                >
                  Features
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#how-it-works")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  href="#how-it-works"
                  className="text-gray-600 hover:text-blue-600 cursor-pointer"
                >
                  How it Works
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#pricing")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  href="#pricing"
                  className="text-gray-600 hover:text-blue-600 cursor-pointer"
                >
                  Pricing
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#testimonials")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  href="#testimonials"
                  className="text-gray-600 hover:text-blue-600 cursor-pointer"
                >
                  Testimonials
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" className="!rounded-button">
                  Login
                </Button>
                <Button className="bg-blue-600 text-white hover:bg-blue-700 !rounded-button">
                  Sign Up Free
                </Button>
              </div>
            </nav>
            {/* Hero Content */}
            <div className="mt-20 px-6">
              <div className="max-w-2xl">
                <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Transform Education with AI-Powered Grading
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Save hours of grading time while providing detailed,
                  personalized feedback to every student. Let AI handle the
                  routine, so you can focus on what matters most - teaching.
                </p>
                <div className="flex space-x-4">
                  <Link to="/signup">
                    <Button className="bg-blue-600 text-white hover:bg-blue-700 !rounded-button text-lg px-8 py-6">
                      Try EduAI Free
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="!rounded-button text-lg px-8 py-6"
                  >
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How It Works Section */}
      <div id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How EduAI Works
            </h2>
            <p className="text-xl text-gray-600">
              Three simple steps to transform your grading process
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Upload className="text-blue-600" />,
                title: "Upload Assignments",
                description: "Simply upload student assignments in any format",
              },
              {
                icon: <Wand2 className="text-blue-600" />,
                title: "AI Processing",
                description:
                  "Our AI analyzes and grades assignments automatically",
              },
              {
                icon: <CheckCircle className="text-blue-600" />,
                title: "Review & Publish",
                description:
                  "Review AI-generated feedback and publish with one click",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Features for Educators
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to streamline your grading process
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      
<div id="testimonials" className="py-20 bg-gray-50">
  <div className="max-w-4xl mx-auto px-6">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Educators</h2>
      <p className="text-xl text-gray-600">See what educators are saying about EduAI</p>
    </div>
    <Carousel className="relative">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="p-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 mx-auto rounded-full object-cover mb-4" />
              <h4 className="font-semibold text-lg">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
              <p className="text-gray-700 mt-4">{testimonial.content}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-[-50px] top-1/2 transform -translate-y-1/2" />
      <CarouselNext className="absolute right-[-50px] top-1/2 transform -translate-y-1/2" />
    </Carousel>
  </div>
</div>;
      {/* FAQ Section */}
      <div className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about EduAI
            </p>
          </div>
          <Accordion type="single" collapsible>
            {[
              {
                question: "How accurate is the AI grading system?",
                answer:
                  "Our AI grading system achieves over 95% accuracy when compared to human graders. The system is continuously learning and improving through machine learning algorithms.",
              },
              {
                question: "What types of assignments can EduAI grade?",
                answer:
                  "EduAI can grade multiple choice questions, essays, code assignments, and even mathematical problems. The system supports various file formats including PDF, DOC, and plain text.",
              },
              {
                question: "How secure is my data?",
                answer:
                  "We take data security seriously. All data is encrypted both in transit and at rest, and we comply with FERPA and other educational privacy standards.",
              },
              {
                question: "Can I customize the grading criteria?",
                answer:
                  "Yes, you can fully customize grading rubrics and criteria to match your specific needs and requirements.",
              },
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6" />
                <span className="text-xl font-bold">EduAI</span>
              </div>
              <p className="text-gray-400">
                Transforming education through AI-powered grading and feedback
                solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector("#features")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    href="#features"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector("#pricing")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    href="#pricing"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector("#testimonials")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    href="#testimonials"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button className="!rounded-button whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EduAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default LandingPage;
