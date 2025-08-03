import React from 'react';
import { AlertTriangle, Target, CheckCircle } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            The Compliance Challenge
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Small and medium-sized brokers face increasing compliance requirements 
            but lack the resources for expensive enterprise solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-6 w-6 text-red-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">The Problem</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Complex and evolving compliance requirements</li>
                    <li>• Manual monitoring leads to human errors</li>
                    <li>• High costs of enterprise compliance solutions</li>
                    <li>• Limited resources for dedicated compliance teams</li>
                    <li>• Risk of regulatory penalties and market suspension</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
              <div className="flex items-start space-x-4">
                <Target className="h-6 w-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Goal</h3>
                  <p className="text-gray-600">
                    Create a low-cost, AI-powered compliance platform that levels the playing field, 
                    enabling small and medium brokers to maintain regulatory compliance without 
                    breaking the bank or compromising on quality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-teal-600 p-8 rounded-2xl text-white">
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="h-8 w-8 text-green-300" />
              <h3 className="text-2xl font-bold">BrokerMint Solution</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-300 rounded-full mt-2"></div>
                <p>AI-powered surveillance and anomaly detection</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-300 rounded-full mt-2"></div>
                <p>Automated SEBI/RBI rule tracking and updates</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-300 rounded-full mt-2"></div>
                <p>Blockchain-secured audit trails and records</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-300 rounded-full mt-2"></div>
                <p>Cloud-based accessibility and scalability</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-300 rounded-full mt-2"></div>
                <p>Cost-effective pricing for SME brokers</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <p className="font-semibold">Result:</p>
              <p className="text-sm mt-1">80% reduction in compliance costs while achieving 98% regulatory adherence rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}