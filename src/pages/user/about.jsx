import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../../components/user/navbar/navbar";
import { Helmet } from "react-helmet";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
    });
  }, []);

  const SectionCard = ({ title, children, className = "", dataAos = "" }) => (
    <div
      data-aos={dataAos}
      className={`bg-white rounded-3xl p-8 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg ${className}`}
      style={{
        background: "linear-gradient(145deg, #ffffff 0%, #e0f7fa 100%)",
      }}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-300 pb-2">
        {title}
      </h2>
      {children}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>About Us | SaiFashionZone</title>
        <meta name="description" content="Learn about SaiFashionZone's journey, vision, and mission." />
      </Helmet>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
              About Our Company
            </h1>
            <p className="text-gray-700 text-2xl font-semibold">
              Empowering Connections, Inspiring Growth
            </p>
          </div>

          {/* About Sections */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <SectionCard title="About Our Company" dataAos="fade-up">
              <p className="text-gray-700 mb-4 leading-relaxed">
                At SaiFashionZone, we are more than just a company. We are a community dedicated to creating meaningful connections and providing exceptional experiences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our journey is driven by passion, innovation, and a commitment to understanding and meeting the unique needs of our clients.
              </p>
            </SectionCard>

            <SectionCard title="Why Choose Us?" dataAos="fade-up">
              <p className="text-gray-700 mb-4 leading-relaxed">
                We stand out through our personalized approach, cutting-edge solutions, and unwavering dedication to customer satisfaction.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our team brings together diverse expertise, creative thinking, and a genuine passion for delivering excellence.
              </p>
            </SectionCard>

            <SectionCard title="Objectives" dataAos="fade-up" className="lg:col-span-2">
              <ul className="text-gray-700 leading-relaxed list-disc list-inside space-y-3">
                <li>Drive innovation that transforms customer experiences</li>
                <li>Foster a culture of continuous learning and growth</li>
                <li>Create sustainable solutions that make a real difference</li>
                <li>Build long-lasting relationships based on trust and mutual respect</li>
                <li>Continuously push the boundaries of what's possible</li>
              </ul>
            </SectionCard>

            <SectionCard title="Vision" dataAos="fade-up">
              <p className="text-gray-700 leading-relaxed">
                To be the leading platform that connects people, inspires innovation, and creates transformative experiences that empower individuals and businesses.
              </p>
            </SectionCard>

            <SectionCard title="Mission" dataAos="fade-up">
              <p className="text-gray-700 leading-relaxed">
                Our mission is to leverage technology and human-centric design to solve complex challenges, create meaningful connections, and drive positive change in the world.
              </p>
            </SectionCard>
          </div>

          {/* Image Section */}
          <div className="mt-20 text-center">
            <img
              src="/assets/bg-shop.png"
              alt="SaiFashionZone Team"
              className="rounded-2xl shadow-2xl mx-auto max-w-4xl h-auto transform transition duration-500 hover:scale-[1.02] hover:rotate-3"
            />
          </div>

          {/* Footer Text */}
          <div className="text-center mt-20 bg-white rounded-3xl p-10 shadow-lg">
            <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
              Join Our Journey
            </h2>
            <p className="text-gray-700 text-xl max-w-3xl mx-auto">
              At SaiFashionZone, every interaction is an opportunity to inspire, connect, and grow. We invite you to be part of our story.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
