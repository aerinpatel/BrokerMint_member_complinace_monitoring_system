import React from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

interface PricingProps {
  onFreeTrialClick: () => void;
}

const plans = [
  {
    name: 'Starter',
    price: '₹15,000',
    period: 'per month',
    description: 'Perfect for small brokers getting started with compliance automation',
    features: [
      'Basic AI surveillance',
      'eKYC verification (up to 100/month)',
      'SEBI/RBI rule tracking',
      'Standard reporting',
      'Email support',
      'Mobile app access'
    ],
    popular: false,
    cta: 'Start Free Trial'
  },
  {
    name: 'Professional',
    price: '₹35,000',
    period: 'per month',
    description: 'Comprehensive solution for medium-sized brokers with advanced needs',
    features: [
      'Advanced AI surveillance',
      'Unlimited eKYC verification',
      'Real-time monitoring',
      'Blockchain audit trails',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'Multi-user access'
    ],
    popular: true,
    cta: 'Start Free Trial'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'Tailored solution for large brokers with specific requirements',
    features: [
      'Full AI/ML suite',
      'White-label solution',
      'Custom compliance rules',
      'Dedicated account manager',
      'On-premise deployment',
      'SLA guarantees',
      'Custom training',
      'API access'
    ],
    popular: false,
    cta: 'Contact Sales'
  }
];

export default function Pricing({ onFreeTrialClick }: PricingProps) {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your brokerage size and compliance needs. 
            All plans include our core features with no hidden costs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </span>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">/{plan.period}</span>
                </div>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
                onClick={plan.name === 'Enterprise' ? 
                  () => window.dispatchEvent(new CustomEvent('openDemoModal')) : 
                  onFreeTrialClick
                }>
                  <span>{plan.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                
                <div className="mt-8">
                  <h4 className="font-semibold text-gray-900 mb-4">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">30-Day Free Trial</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Try BrokerMint risk-free for 30 days. No setup fees, no contracts, and full access to all features. 
            See how AI-powered compliance can transform your brokerage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onFreeTrialClick}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start Free Trial
            </button>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('openDemoModal'))}
              className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}