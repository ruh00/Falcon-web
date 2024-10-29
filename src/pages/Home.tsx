import React from 'react';
import { ChevronRight, Target, Trophy, Users, BookOpen, Medal, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Shape Your Future in Defence Services
              </h1>
              <p className="text-xl mb-8">
                Premier coaching institute for NDA, CDS, AFCAT, and SSB preparations
              </p>
              <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition duration-300 flex items-center">
                Join Now <ChevronRight className="ml-2" />
              </button>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img 
                src="https://images.unsplash.com/photo-1490822180406-880c226c150b?auto=format&fit=crop&q=80"
                alt="Military Training"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Why Choose Falcon Academy</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <Target className="w-10 h-10 text-green-600" />, title: "Focused Approach", desc: "Specialized training modules designed for defence examinations" },
              { icon: <Trophy className="w-10 h-10 text-green-600" />, title: "Proven Track Record", desc: "Consistent success rate in defence selections" },
              { icon: <Users className="w-10 h-10 text-green-600" />, title: "Expert Mentors", desc: "Guidance from ex-servicemen and defence experts" },
              { icon: <BookOpen className="w-10 h-10 text-green-600" />, title: "Comprehensive Study Material", desc: "Updated course materials and mock tests" },
              { icon: <Medal className="w-10 h-10 text-green-600" />, title: "Physical Training", desc: "Professional physical and SSB training" },
              { icon: <Shield className="w-10 h-10 text-green-600" />, title: "Personality Development", desc: "Holistic approach to candidate development" }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}