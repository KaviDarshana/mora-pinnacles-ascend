
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/342f2bf0-8e38-401f-b4b4-99a4b8e2507a.png" 
                alt="Mora Pinnacles Logo" 
                className="h-10 w-auto mr-2" 
              />
              <span className="text-xl font-serif font-bold text-primary hidden sm:block">
                Mora Pinnacles
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link to="/courses" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Courses
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-primary font-medium transition-colors">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/about" className="w-full">About Us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/blog" className="w-full">Blog</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link to="/register">
              <Button>Register</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" onClick={toggleMenu} size="icon">
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary font-medium px-4 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/courses" 
                className="text-gray-700 hover:text-primary font-medium px-4 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-primary font-medium px-4 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-primary font-medium px-4 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-primary font-medium px-4 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <hr className="my-2" />
              <div className="flex space-x-2 px-4">
                <Link to="/login" className="w-full" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full">Log In</Button>
                </Link>
                <Link to="/register" className="w-full" onClick={() => setIsOpen(false)}>
                  <Button className="w-full">Register</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
