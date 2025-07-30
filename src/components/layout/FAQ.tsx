'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Container from '../ui/Container';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does ADmyBRAND\'s AI technology work?',
      answer: 'Our AI technology uses advanced machine learning algorithms to analyze customer behavior patterns, predict optimal send times, personalize content, and continuously optimize your campaigns for maximum engagement and conversion rates.',
    },
    {
      question: 'What makes ADmyBRAND different from other marketing platforms?',
      answer: 'ADmyBRAND combines cutting-edge AI technology with intuitive design, comprehensive automation capabilities, and enterprise-grade security. Our platform offers real-time analytics, precision targeting, and seamless team collaboration that scales with your business.',
    },
    {
      question: 'Can I integrate ADmyBRAND with my existing tools?',
      answer: 'Yes! ADmyBRAND offers extensive integration capabilities with popular CRM systems, e-commerce platforms, analytics tools, and custom APIs. Our development team can also create custom integrations for your specific needs.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer comprehensive support including 24/7 live chat, email support, video tutorials, and dedicated account managers for enterprise customers. Our average response time is under 2 hours.',
    },
    {
      question: 'Is my data secure with ADmyBRAND?',
      answer: 'Absolutely. We implement bank-level security with SOC 2 compliance, end-to-end encryption, regular security audits, and GDPR compliance. Your data is stored in secure, redundant cloud infrastructure.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time with no penalties or hidden fees. We believe in transparent pricing and flexible terms that work for your business.',
    },
    {
      question: 'Do you offer a free trial?',
      answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can upgrade to a paid plan anytime during or after the trial.',
    },
    {
      question: 'What if I need more than the standard features?',
      answer: 'We offer custom enterprise solutions with dedicated account managers, custom integrations, white-label options, and advanced security features. Contact our sales team for a personalized demo.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 rounded-full px-4 py-2 mb-6">
            <HelpCircle size={16} />
            <span className="text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about ADmyBRAND. Can't find the answer you're looking for? 
            Please chat to our friendly team.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={20} className="text-gray-500 flex-shrink-0" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Please chat to our friendly team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Support
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

export default FAQ; 