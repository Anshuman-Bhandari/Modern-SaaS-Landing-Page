import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  Zap, 
  Shield, 
  Users, 
  Target,
  Globe,
  Clock,
  TrendingUp
} from 'lucide-react';
import Card from '../ui/Card';
import Container from '../ui/Container';
import { ContainerScroll } from '../ui/container-scroll-animation';

const Features: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms provide deep insights into your audience behavior and campaign performance.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Dashboard',
      description: 'Monitor your marketing campaigns in real-time with beautiful, interactive dashboards and customizable widgets.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Set up intelligent automation rules that trigger personalized campaigns based on user behavior and preferences.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance, end-to-end encryption, and advanced threat protection.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless team collaboration with role-based permissions, real-time editing, and comprehensive audit trails.',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Reach your ideal audience with advanced segmentation, behavioral targeting, and predictive analytics.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Globe,
      title: 'Multi-Channel Marketing',
      description: 'Manage campaigns across email, social media, SMS, and web push notifications from a single platform.',
      color: 'from-teal-500 to-blue-500',
    },
    {
      icon: Clock,
      title: 'Smart Scheduling',
      description: 'AI-powered scheduling that automatically sends messages at the optimal time for each recipient.',
      color: 'from-violet-500 to-purple-500',
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Continuous A/B testing and optimization to maximize your ROI and campaign effectiveness.',
      color: 'from-orange-500 to-red-500',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="features" className="bg-gradient-to-br from-gray-50 to-white">


  
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold">
                  Everything you need to{' '}
                  <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    scale your brand
                  </span>
                </h1>
              </>
            }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card variant="glass" className="h-full p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                      <feature.icon size={24} className="text-white" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-700 font-medium text-xs inline-flex items-center group"
                      >
                        Learn more
                        <svg
                          className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </ContainerScroll>
      </div>







      <Container>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to transform your marketing?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of brands that have already revolutionized their marketing 
              strategy with ADmyBRANDs powerful platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Features; 