import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Image from "next/image";
import { Boxes } from "../ui/background-boxes";

const Hero: React.FC = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "powerful",
      "automated",
      "insightful",
      "scalable",
      "AI-driven"
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div>

    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <section className="w-full bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Container>
        <div className="flex gap-8 py-20 lg:py-30 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4 relative z-10">
              Read our SaaS success story <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-blue-600">ADmyBRAND is your</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
                &nbsp;
                <br />
                marketing platform
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-gray-600 max-w-2xl text-center">
              Supercharge your brand with ADmyBRAND’s all-in-one SaaS marketing suite. Automate campaigns, gain actionable insights, and scale your business with AI-powered tools designed for modern marketers.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4 relative z-10" variant="outline">
              Book a strategy call <PhoneCall className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-4 relative z-10">
              Start Free Trial <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
    </div>

    <section className="bg-white py-12 text-center border-t border-gray-200">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
        Manage end-to-end Marketing on your App.{' '}
        <span className="text-blue-800 font-bold">Download the ADify App</span>
      </h2>

      <div className="flex justify-center items-center gap-4 flex-wrap">
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/googleplay.svg"
            alt="Get it on Google Play"
            width={160}
            height={50}
            className="hover:scale-105 transition-transform duration-200"
          />
        </a>
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/appstore.svg"
            alt="Available on the App Store"
            width={160}
            height={50}
            className="hover:scale-105 transition-transform duration-200"
          />
        </a>
      </div>
    </section>

  </div>
    
  );
};

export default Hero; 

