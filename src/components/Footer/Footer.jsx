import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const linkSections = [
    {
      title: "Company",
      links: ["Home", "Our Mission", "About", "Contact Us"],
    },
    {
      title: "Services",
      links: [
        "Create Support Ticket",
        "Track Ticket Progress",
        "Update Ticket Status",
        "Resolve Customer Issues",
      ],
    },
    {
      title: "Information",
      links: [
        "Privacy Policy",
        "Customer Support",
        "Help Center",
      ],
    },
    {
      title: "Follow Us",
      links: [
        { name: "Instagram", icon: FaInstagram },
        { name: "Twitter", icon: FaTwitter },
        { name: "Facebook", icon: FaFacebook },
        { name: "YouTube", icon: FaYoutube },
      ],
    },
  ];

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-black text-white">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30">
        
        {/* Left Section */}
        <div>
          <h1 className="font-bold text-lg">CS — Ticket System</h1>

          <p className="max-w-md mt-6 text-gray-400 text-sm">
            CS Ticket System is a platform designed to help teams manage
            customer support requests efficiently. Users can create support
            tickets, track their progress, and update the status until the
            issue is resolved. The system helps organize customer problems,
            improve response time, and ensure every customer request is handled
            properly.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {linkSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base md:mb-5 mb-2">
                {section.title}
              </h3>

              <ul className="text-sm space-y-2 text-gray-400">
                {section.links.map((link, i) => {
                  // Normal text links
                  if (typeof link === "string") {
                    return (
                      <li key={i}>
                        <a href="#" className="hover:text-white transition">
                          {link}
                        </a>
                      </li>
                    );
                  }

                  // Social links with icons
                  const Icon = link.icon;

                  return (
                    <li key={i} className="flex items-center gap-2">
                      <Icon className="text-lg" />
                      <a href="#" className="hover:text-white transition">
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <p className="py-4 text-center text-sm text-gray-500">
        Copyright 2025 © CS Ticket System. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;