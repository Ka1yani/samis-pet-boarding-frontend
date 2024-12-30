import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PawPrint, Menu, X } from "lucide-react";
import { ThemeToggle } from "../shared/ThemeToggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    location.pathname === "/"
      ? document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
      : navigate("/");
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm fixed w-full top-0 z-50 transition-colors">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div
          className="flex items-center cursor-pointer unselectable"
          onClick={handleLogoClick}
        >
          <PawPrint className="h-8 w-8 text-purple-600" />
          <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
            Sami's Pet Boarding
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#booking">Book Now</NavLink>
          <NavLink href="#reviews">Reviews</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <ThemeToggle />
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
            Sign In
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
            <MobileNavLink href="#home">Home</MobileNavLink>
            <MobileNavLink href="#services">Services</MobileNavLink>
            <MobileNavLink href="#booking">Book Now</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
            <button className="w-full text-left block px-3 py-2 text-white bg-purple-600 rounded-md">
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="block px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
    >
      {children}
    </a>
  );
}