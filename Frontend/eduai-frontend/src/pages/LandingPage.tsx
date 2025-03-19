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

// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const features = [
    {
      title: "AI-powered Grading",
      description:
        "Grade assignments automatically with advanced AI technology",
      icon: "fa-robot",
    },
    {
      title: "Personalized Feedback",
      description: "Provide detailed, constructive feedback for each student",
      icon: "fa-comments",
    },
    {
      title: "Assessment Tools",
      description: "Comprehensive tools for various assessment types",
      icon: "fa-check-square",
    },
    {
      title: "Analytics Dashboard",
      description: "Track student progress with detailed analytics",
      icon: "fa-chart-line",
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
              {/* <FontAwesomeIcon icon="fa-solid fa-graduation-cap" /> */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9l0 28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5l0-24.6c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"/></svg>
                <i className="fas fa-graduation-cap text-2xl text-blue-600"></i>
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
                icon: "fa-upload",
                title: "Upload Assignments",
                description: "Simply upload student assignments in any format",
              },
              {
                icon: "fa-magic",
                title: "AI Processing",
                description:
                  "Our AI analyzes and grades assignments automatically",
              },
              {
                icon: "fa-check-circle",
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
                  <i className={`fas ${step.icon} text-2xl text-blue-600`}></i>
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
                  <i
                    className={`fas ${feature.icon} text-xl text-blue-600`}
                  ></i>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      {/* <div id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Leading Educators
            </h2>
            <p className="text-xl text-gray-600">
              See what educators are saying about EduAI
            </p>
          </div>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.content}</p>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div> */}
      
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
                <i className="fas fa-graduation-cap text-2xl"></i>
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
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <i className="fab fa-github text-xl"></i>
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
