import React from 'react';
import { BookOpen, Users, Clock } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      title: "NDA Preparation",
      description: "Comprehensive preparation for National Defence Academy examination including mathematics, general ability test, and SSB interview.",
      duration: "12 months",
      batchSize: "30 students",
      features: ["Daily Mock Tests", "Physical Training", "SSB Interview Preparation"]
    },
    {
      title: "CDS Coaching",
      description: "Complete coaching program for Combined Defence Services examination covering all subjects and interview preparation.",
      duration: "6 months",
      batchSize: "25 students",
      features: ["Subject Expert Faculty", "Weekly Assessments", "Interview Guidance"]
    },
    {
      title: "AFCAT Training",
      description: "Specialized training for Air Force Common Admission Test with focus on all required subjects and interview preparation.",
      duration: "4 months",
      batchSize: "25 students",
      features: ["Mock Tests", "Personality Development", "Group Discussions"]
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Courses</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{course.title}</h2>
                <p className="text-gray-600 mb-6">{course.description}</p>
                
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-700">{course.duration}</span>
                </div>
                
                <div className="flex items-center mb-6">
                  <Users className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-700">{course.batchSize}</span>
                </div>
                
                <div className="space-y-2">
                  {course.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center">
                      <BookOpen className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="mt-8 w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}