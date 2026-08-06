import React from "react";
import { Link, useLocation } from "react-router-dom";
import { paieMenu } from "../assets/data/paieMenu";

const PAIESubNav = () => {
  const location = useLocation();

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-30 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-1 py-2 min-w-max">
          <Link
            to="/paie"
            className={`font-ubuntu font-semibold text-sm px-4 py-2.5 rounded-md whitespace-nowrap transition-colors ${
              location.pathname === "/paie"
                ? "bg-primary text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Visão Geral
          </Link>

          {paieMenu.map((item) => {
            const path = `/paie/${item.slug}`;
            const isActive = location.pathname === path;
            return (
              <Link
                key={item.slug}
                to={path}
                className={`font-ubuntu font-semibold text-sm px-4 py-2.5 rounded-md whitespace-nowrap transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default PAIESubNav;
