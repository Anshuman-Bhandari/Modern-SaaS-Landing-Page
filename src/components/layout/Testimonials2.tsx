"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial:
      'ADmyBRAND has completely transformed our marketing strategy. The AI-powered insights have helped us increase our conversion rates by 300% in just 6 months.',
    by: 'Sarah Johnson, Marketing Director at TechFlow Inc.',
    imgSrc: 'https://i.pravatar.cc/150?img=1',
  },
  {
    tempId: 1,
    testimonial:
      'As a startup, we needed a solution that could scale with us. ADmyBRAND not only met our expectations but exceeded them.',
    by: 'Michael Chen, CEO at StartupXYZ',
    imgSrc: 'https://i.pravatar.cc/150?img=2',
  },
  {
    tempId: 2,
    testimonial:
      "The precision targeting and automation capabilities are game-changing. We've seen a 250% increase in email engagement and a 180% boost in revenue.",
    by: 'Emily Rodriguez, Digital Marketing Manager at Global Retail Co.',
    imgSrc: 'https://i.pravatar.cc/150?img=3',
  },
  {
    tempId: 3,
    testimonial:
      'The enterprise features are exactly what we needed. The team collaboration tools, advanced security, and custom integrations have made our marketing operations seamless.',
    by: 'David Thompson, VP of Marketing at Enterprise Solutions',
    imgSrc: 'https://i.pravatar.cc/150?img=4',
  },
  {
    tempId: 4,
    testimonial:
      'ADmyBRAND has become an essential part of our client services. The white-label options and advanced reporting help us deliver exceptional results to our clients.',
    by: 'Lisa Wang, Founder at Creative Agency',
    imgSrc: 'https://i.pravatar.cc/150?img=5',
  },
  {
  tempId: 5,
    testimonial:
        "ADmyBRAND's automation workflows have streamlined our campaigns. We’re able to launch personalized ads across channels in minutes. It’s a huge time-saver for our team.",
    by: 'Nina Patel, Head of Growth at BrightEdge Media',
    imgSrc: 'https://i.pravatar.cc/150?img=6',
    },
    {
    tempId: 6,
    testimonial:
        "Our ROI has improved significantly since adopting ADmyBRAND. The data-backed decisions we now make have led to a 3x return on our ad spend.",
    by: 'Aaron Wright, Marketing Lead at FinTechPro',
    imgSrc: 'https://i.pravatar.cc/150?img=7',
    },
    {
    tempId: 7,
    testimonial:
        "Using ADmyBRAND was a game-changer during our product launch. We reached the right audience faster and generated over 20,000 sign-ups within 2 weeks.",
    by: 'Jasmine Lee, Product Manager at AppNova',
    imgSrc: 'https://i.pravatar.cc/150?img=8',
    },
    {
    tempId: 8,
    testimonial:
        "From campaign planning to performance reporting, everything is simplified. We no longer need 5 different tools—ADmyBRAND does it all.",
    by: 'Carlos Mendes, CMO at GlobalReach Corp.',
    imgSrc: 'https://i.pravatar.cc/150?img=9',
    },
    {
    tempId: 9,
    testimonial:
        "We were impressed by how quickly we could onboard and see results. The AI suggestions are surprisingly accurate and practical.",
    by: 'Priya Desai, VP Digital at Quantum Solutions',
    imgSrc: 'https://i.pravatar.cc/150?img=10',
    },
    {
    tempId: 10,
    testimonial:
        "The analytics dashboard alone is worth it. We get real-time insights on every campaign, helping us adjust strategy on the fly.",
    by: 'Jonathan Kim, Campaign Analyst at BlueSky Group',
    imgSrc: 'https://i.pravatar.cc/150?img=11',
    },
    {
    tempId: 11,
    testimonial:
        "ADmyBRAND is a blessing for small agencies. We deliver professional campaigns with enterprise-level sophistication—and our clients love the results.",
    by: 'Sneha Roy, Co-founder of SparkCreative',
    imgSrc: 'https://i.pravatar.cc/150?img=12',
    },
    {
    tempId: 12,
    testimonial:
        "Excellent support team and an ever-improving platform. We’ve seen the product evolve rapidly with features we actually requested.",
    by: 'Lucas Martin, Operations Lead at Visionary Marketing',
    imgSrc: 'https://i.pravatar.cc/150?img=13',
    },
    {
    tempId: 13,
    testimonial:
        "I’ve tried dozens of tools—nothing matches ADmyBRAND in terms of usability and ROI. It’s perfect for our B2B marketing needs.",
    by: 'Rachel Green, Senior Marketer at BizSolutions Inc.',
    imgSrc: 'https://i.pravatar.cc/150?img=14',
    },
    {
    tempId: 14,
    testimonial:
        "The campaign automation is intelligent, not generic. We target users based on behavior and intent—this has doubled our lead quality.",
    by: 'Mohammed Ali, CRM Manager at SynerTech',
    imgSrc: 'https://i.pravatar.cc/150?img=15',
    },
    {
    tempId: 15,
    testimonial:
        "The seamless integration with our CRM saved weeks of development time. It just works out of the box.",
    by: 'Linda Carter, IT Manager at Velocity Partners',
    imgSrc: 'https://i.pravatar.cc/150?img=16',
    },
    {
    tempId: 16,
    testimonial:
        "From onboarding to execution, ADmyBRAND delivers. Our team was able to run highly targeted LinkedIn ads with zero prior experience.",
    by: 'Omar Farooq, Head of Enterprise Sales at Altura Systems',
    imgSrc: 'https://i.pravatar.cc/150?img=17',
    },
    {
    tempId: 17,
    testimonial:
        "Finally, a platform that understands agencies. Their white-label dashboards are a big hit with our clients.",
    by: 'Julia Mehta, Account Director at BrandForge',
    imgSrc: 'https://i.pravatar.cc/150?img=18',
    },
    {
    tempId: 18,
    testimonial:
        "Even our non-technical teammates use ADmyBRAND daily. It’s intuitive, powerful, and built for collaboration.",
    by: 'Daniel Okafor, Project Coordinator at LoopLogic',
    imgSrc: 'https://i.pravatar.cc/150?img=19',
    },
    {
    tempId: 19,
    testimonial:
        "The custom reporting features helped us close a major client. We were able to showcase performance with real-time, branded dashboards.",
    by: 'Isabella Tran, Client Success Manager at Zenith Studios',
    imgSrc: 'https://i.pravatar.cc/150?img=20',
    },

];


interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
        <div
        onClick={() => handleMove(position)}
        className={cn(
            "absolute left-1/2 top-1/2 cursor-pointer border-2 mt-8 p-8 transition-all duration-500 ease-in-out rounded-xl",
            isCenter
            ? "z-10 bg-black text-white border-none"
            : "z-0 bg-white text-black border border-gray-300 hover:border-primary/50"
        )}
        style={{
            width: cardSize,
            height: cardSize,
            clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
            transform: `
            translate(-50%, -50%) 
            translateX(${(cardSize / 1.5) * position}px)
            translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
            rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
            `,
            boxShadow: isCenter
            ? "0px 12px 20px rgba(0,0,0,0.3)"
            : "0px 4px 8px rgba(0,0,0,0.1)"
        }}
        >

      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <Image
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        width={48}
        height={56}
        className="mb-4 h-14 w-12 bg-muted object-cover object-top"
        style={{
            boxShadow: "3px 3px 0px hsl(var(--background))"
        }}
        />

      <h3 className={cn(
        "text-base sm:text-xl font-medium",
        isCenter ? "text-primary-foreground" : "text-foreground"
      )}>
        &rdquo;{testimonial.testimonial}&rdquo;
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
        const { matches } = window.matchMedia("(min-width: 640px)");
        setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    }, []);


  return (
    <div
      className="relative w-full overflow-hidden bg-muted/30"
      style={{ height: 600 }}
    >
        <div className=''>
            <h1 className='text-center text-5xl font-semibold'>
                Experiences that Speak
            </h1>
        </div>
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};