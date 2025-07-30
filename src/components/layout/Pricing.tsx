import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Container from '../ui/Container';


const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  // Adjusted prices for INR (approximate conversion)
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      monthlyPrice: 999,      // ~₹999/month
      annualPrice: 799,       // ~₹799/month (billed annually)
      features: [
        'Up to 1,000 contacts',
        'Basic email campaigns',
        'Standard templates',
        'Email support',
        'Basic analytics',
        'Mobile app access',
      ],
      notIncluded: [
        'Advanced automation',
        'A/B testing',
        'Priority support',
        'Custom integrations',
        'Advanced reporting',
        'Dedicated account manager',
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600',
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and marketing teams',
      monthlyPrice: 3499,     // ~₹3499/month
      annualPrice: 2799,      // ~₹2799/month (billed annually)
      features: [
        'Up to 10,000 contacts',
        'Advanced email campaigns',
        'Custom templates',
        'Priority support',
        'Advanced analytics',
        'A/B testing',
        'Automation workflows',
        'API access',
        'Custom integrations',
        'Advanced reporting',
      ],
      notIncluded: [
        'Dedicated account manager',
        'Custom onboarding',
        'White-label options',
        'Advanced security features',
      ],
      popular: true,
      color: 'from-blue-500 to-purple-600',
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with complex needs',
      monthlyPrice: 9999,     // ~₹9999/month
      annualPrice: 8499,      // ~₹8499/month (billed annually)
      features: [
        'Unlimited contacts',
        'All Professional features',
        'Dedicated account manager',
        'Custom onboarding',
        'White-label options',
        'Advanced security features',
        'Custom integrations',
        '24/7 phone support',
        'Advanced compliance',
        'Custom reporting',
        'Team collaboration tools',
        'Advanced automation',
      ],
      notIncluded: [],
      popular: false,
      color: 'from-purple-500 to-pink-600',
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100/10 text-blue-300 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            <span className="text-sm font-medium">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose the perfect{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              plan for your business
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-200 ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <motion.div
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: isAnnual ? 32 : 4 }}
                transition={{ duration: 0.2 }}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
              <span className="ml-1 text-green-400 text-xs">(Save 20%)</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <Card
                variant="glass"
                className={`h-full p-8 ${
                  plan.popular
                    ? 'border-2 border-blue-500/50 bg-white/10'
                    : 'border border-white/20'
                }`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold">
                      ₹{isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-300">/month</span>
                  </div>
                  
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    size="lg"
                    className="w-full"
                  >
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </Button>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg mb-4">Whats included:</h4>
                  
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <Check size={16} className="text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <h4 className="font-semibold text-lg mb-4 mt-6">Not included:</h4>
                      {plan.notIncluded.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <X size={16} className="text-gray-500 flex-shrink-0" />
                          <span className="text-gray-500 text-sm">{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">
              Need a custom plan?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact our sales team for custom pricing and features tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Contact Sales
              </Button>
              <Button variant="outline" size="lg">
                View All Features
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Pricing;