import React from 'react';
import { Award, Users, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-16 text-gray-800">About Falcon Professional Academy</h1>
          
          {/* Mission Statement */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At Falcon Professional Academy, we are dedicated to shaping the future leaders of India's defence forces. 
              Our mission is to provide comprehensive training and guidance to aspiring candidates, helping them realize 
              their dreams of serving the nation through the armed forces.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: <Award className="w-8 h-8 text-green-600" />, stat: "1000+", label: "Selections" },
              { icon: <Users className="w-8 h-8 text-green-600" />, stat: "50+", label: "Expert Mentors" },
              { icon: <Target className="w-8 h-8 text-green-600" />, stat: "95%", label: "Success Rate" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{item.stat}</div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
          
          {/* History */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Journey</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Established in 2010, Falcon Professional Academy has grown from a small coaching center to one of 
              India's premier defence training institutes. Our journey has been marked by the success stories of 
              thousands of candidates who are now serving in various branches of the Indian Armed Forces.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We take pride in our comprehensive approach to training, which includes not just academic preparation 
              but also physical fitness, personality development, and leadership skills.
            </p>
          </div>
          
          {/* Team */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Team</h2>
            <p className="text-gray-600 leading-relaxed">
              Our team consists of experienced ex-servicemen, defence experts, and subject matter specialists who 
              bring their real-world experience to the classroom. This unique blend of expertise ensures that our 
              students receive the most practical and relevant training for their defence career aspirations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}