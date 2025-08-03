import React from 'react';
import { DollarSign, Clock, Shield, TrendingUp, Users, Zap } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Cost-Effective Solution',
    description: 'Up to 80% cost reduction compared to traditional enterprise compliance systems',
    stats: '80% Cost Savings'
  },
  {
    icon: Clock,
    title: 'Time Efficiency',
    description: 'Automated processes reduce manual compliance work by 90%, freeing up your team',
    stats: '90% Time Saved'
  },
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'Proactive monitoring and alerts help prevent regulatory violations before they occur',
    stats: '98% Risk Reduction'
  },
  {
    icon: TrendingUp,
    title: 'Business Growth',
    description: 'Focus on core business activities while compliance runs automatically in the background',
    stats: '150% ROI'
  },
  {
    icon: Users,
    title: 'Easy Implementation',
    description: 'Plug-and-play integration with existing systems, no disruption to current operations',
    stats: '24hrs Setup'
  },
  {
    icon: Zap,
    title: 'Real-time Insights',
    description: 'Instant compliance status updates and actionable insights for better decision making',
    stats: 'Live Updates'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose BrokerMint?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your compliance operations and unlock business growth with our 
            intelligent automation platform designed for Indian brokers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                  {benefit.stats}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gradient-to-r from-blue-900 to-teal-900 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
            
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Trusted by Growing Brokers
                </h3>
                <p className="text-blue-100 mb-6">
                  Join the community of forward-thinking brokers who have chosen 
                  BrokerMint to secure their compliance future.
                </p>
                <button 
                  onClick={() => window.dispatchEvent(new CustomEvent('openFreeTrialModal'))}
                  className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Join the Community
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-200">500+</div>
                  <div className="text-sm text-blue-100">Active Brokers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-300">₹50Cr+</div>
                  <div className="text-sm text-blue-100">Penalties Prevented</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-yellow-300">24/7</div>
                  <div className="text-sm text-blue-100">Support</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-teal-300">99.9%</div>
                  <div className="text-sm text-blue-100">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}