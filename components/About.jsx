"use client";
import { useEffect, useState, useRef } from "react";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

// 🔹 CountUp Hook (runs when "start" becomes true)
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return; // only start when "start" is true

    let startValue = 0;
    const increment = target / (duration / 16); // ~60fps
    const step = () => {
      startValue += increment;
      if (startValue < target) {
        setCount(Math.floor(startValue));
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

export default function About() {
  const [startCount, setStartCount] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    {
      icon: <Users size={28} />,
      number: 500,
      label: "Happy Customers",
      suffix: "+",
    },
    {
      icon: <Award size={28} />,
      number: 10,
      label: "Years Experience",
      suffix: "+",
    },
    {
      icon: <CheckCircle size={28} />,
      number: 1000,
      label: "Projects Completed",
      suffix: "+",
    },
    {
      icon: <Clock size={28} />,
      number: 24,
      label: "Customer Support",
      suffix: "/7",
    },
  ];

  // 🔹 Intersection Observer to detect when stats are visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 } // 30% of section visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-1 sm:py-4 lg:py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* About Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6 text-center md:text-left lg:text-left">
              About Bharath Painters
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 lg:mb-6 text-justify">
              With over 10 years of experience in the home services industry,
              we've built our reputation on delivering exceptional quality and
              customer satisfaction. Our team of licensed professionals is
              committed to transforming your home with reliable, efficient, and
              affordable services.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 lg:mb-8 text-justify">
              From small repairs to complete home renovations, we handle every
              project with the same level of care and attention to detail. We
              use only the finest materials and latest techniques to ensure
              lasting results that exceed your expectations.
            </p>

            <div className="space-y-3 lg:space-y-4">
              {[
                "Licensed & Insured Professionals",
                "Free Estimates & Consultations",
                "100% Satisfaction Guarantee",
                "Eco-Friendly Materials Available",
                "Emergency Services Available",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 lg:space-x-3"
                >
                  <CheckCircle
                    className="text-green-500 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-700 text-sm sm:text-base lg:text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Professional team at work"
              className="rounded-lg shadow-lg lg:shadow-xl max-h-fit object-cover sm:ml-24"
            />
            <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:left-8 bg-blue-600 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg shadow-md lg:shadow-lg">
              <p className="text-lg sm:text-xl lg:text-2xl font-bold">
                10+ Years
              </p>
              <p className="text-xs sm:text-sm">of Excellence</p>
            </div>
          </div>
        </div>

        {/* Stats Section with Animation */}
        <div ref={statsRef} className="mt-8 lg:mt-12 mb-2 ">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            {stats.map((stat, index) => {
              const count = useCountUp(stat.number, 2000, startCount);
              return (
                <div key={index} className="text-center">
                  <div className="text-blue-600 mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 lg:mb-2">
                    {count}
                    {stat.suffix}
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base text-gray-600">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
