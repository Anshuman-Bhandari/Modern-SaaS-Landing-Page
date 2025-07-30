'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import Button from '../ui/Button';
import { useRouter } from 'next/navigation';

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.1 }}
        className="cursor-pointer text-gray-700 hover:opacity-[0.9] font-medium"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-2xl"
              >
                <motion.div
                  layout
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-gray-200 bg-white shadow-lg flex justify-center space-x-8 px-8 py-4"
    >
      {children}
    </nav>
  );
};

const HoveredLink = ({children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
    >
      {children}
    </a>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const router = useRouter();

  const navItems = [
    { 
      name: 'Features', 
      href: '#features',
      dropdown: [
        { title: 'AI Analytics', href: '#features' },
        { title: 'Automation', href: '#features' },
        { title: 'Integrations', href: '#features' },
      ]
    },
    { 
      name: 'Pricing', 
      href: '#pricing',
      dropdown: [
        { title: 'Starter Plan', href: '#pricing' },
        { title: 'Professional', href: '#pricing' },
        { title: 'Enterprise', href: '#pricing' },
      ]
    },
    { 
      name: 'Resources', 
      href: '#',
      dropdown: [
        { title: 'Documentation', href: '#' },
        { title: 'Blog', href: '#' },
        { title: 'Support', href: '#' },
      ]
    },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 bg-zinc-300 shadow-lg border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Image
              src="/images/web_logo.svg"
              alt="ADmyBRAND Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <Menu setActive={setActive}>
              {navItems.map((item) => (
                <MenuItem
                  key={item.name}
                  setActive={setActive}
                  active={active}
                  item={item.name}
                >
                  {item.dropdown && (
                    <div className="grid grid-cols-1 gap-4">
                      {item.dropdown.map((dropdownItem) => (
                        <HoveredLink key={dropdownItem.title} href={dropdownItem.href}>
                          <div className="flex flex-col">
                            <h4 className="text-lg font-semibold text-gray-900">
                              {dropdownItem.title}
                            </h4>
                          </div>
                        </HoveredLink>
                      ))}
                    </div>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => router.push('/')}>
              Sign In
            </Button>
            <Button variant="primary" size="sm" onClick={() => router.push('/')}>
              Get Started
            </Button>
          </div>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <X size={24} className="rotate-45" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-100 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="hidden md:flex items-center space-x-4">
                <Button variant="ghost" size="sm" onClick={() => router.push('/')}>
                  Sign In
                </Button>
                <Button variant="primary" size="sm" onClick={() => router.push('/')}>
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;