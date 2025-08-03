import React from 'react';
import { Brain, Shield, Eye, FileText, Clock, Lock, BarChart3, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Surveillance',
    description: 'Machine learning algorithms analyze trading patterns in real-time to detect suspicious activities and compliance breaches automatically.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Shield,
    title: 'eKYC Verification',
    description: 'Automated Know Your Customer verification with AI-driven document analysis and identity validation for streamlined onboarding.',
    color: 'from-blue-500 to-teal-500'
  },
  {
    icon: Eye,
    title: 'Real-time Monitoring',
    description: '24/7 continuous monitoring of trading activities, client behavior, and regulatory compliance across all market operations.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: FileText,
    title: 'SEBI/RBI Tracking',
    description: 'Automatic tracking and updates of regulatory changes from SEBI and RBI with intelligent deadline management and alerts.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Clock,
    title: 'Smart Reminders',
    description: 'AI-driven deadline reminders and compliance alerts ensure you never miss critical regulatory requirements.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Lock,
    title: 'Blockchain Audit Trail',
    description: 'Immutable blockchain-based audit trails provide transparent and tamper-proof compliance records for regulatory reviews.',
    color: 'from-teal-500 to-cyan-500'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Comprehensive reporting and analytics dashboard with insights into compliance performance and risk assessment.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Users,
    title: 'Multi-user Management',
    description: 'Role-based access control with multi-user support for compliance teams and management oversight.',
    color: 'from-rose-500 to-pink-500'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Compliance Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to maintain regulatory compliance, detect risks, 
            and protect your brokerage from penalties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Compliance?</h3>
          <p className="text-blue-100 mb-6">
            Join hundreds of brokers who have already automated their compliance monitoring
          </p>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('openDemoModal'))}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
}