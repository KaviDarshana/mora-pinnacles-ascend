
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/342f2bf0-8e38-401f-b4b4-99a4b8e2507a.png" 
                alt="Mora Pinnacles Logo" 
                className="h-12 w-auto mr-2" 
              />
            </Link>
            <p className="mt-4 text-gray-300">
              Reaching Heights, Always Together
            </p>
            <div className="mt-4 flex space-x-4">             
              <a href="https://www.facebook.com/profile.php?id=61575101191593" target="_blank" 
              rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <img src="/Icons/Facebook.png" alt="MP Facebook" aria-hidden="true" className="h-6 w-6" />
              </a>
              
              <a href="https://www.instagram.com/mora_pinnacles/" target="_blank" 
              rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <img src="/Icons/Instagram.png" alt="MP Instagram" aria-hidden="true" className="h-6 w-6" />
              </a>
              
              <a href="https://x.com/MoraPinnacles" target="_blank" 
              rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <span className="sr-only">MP X</span>
                <img src="/Icons/X.png" alt="MP X" aria-hidden="true" className="h-6 w-6" />
              </a>
              
              <a href="https://www.linkedin.com/company/106771061/" target="_blank" 
              rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <img src="/Icons/Linkedin.png" alt="MP Linkedin" aria-hidden="true" className="h-6 w-6" />
              </a>

              <a href="https://www.tiktok.com/@mora_pinnacles?lang=en" target="_blank" 
              rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <span className="sr-only">TikTok</span>
                <img src="/Icons/Tiktok.png" alt="MP TikTok" aria-hidden="true" className="h-6 w-6" />
              </a>

              <a href="https://www.youtube.com/channel/UCDP2XInNXO8FsETrlWsotwA" target="_blank" 
              rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <span className="sr-only">YouTube</span>
                <img src="/Icons/Youtube.png" alt="MP TikTok" aria-hidden="true" className="h-6 w-6" />
              </a>


            </div>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Courses</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/student-support" className="text-gray-300 hover:text-white transition-colors">Student Support</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block">Email:</span>
                <a href="mailto:bituom23s2@gmail.com" className="hover:text-white transition-colors">bituom23s2@gmail.com</a>
              </li>
              <li className="text-gray-300">
                <span className="block">Phone:</span>
                <a href="tel:+94705820870" className="hover:text-white transition-colors">+94 70 5820 870</a>
              </li>
              <li className="text-gray-300">
                <span className="block">Address:</span>
                <address className="not-italic">
                  123 Education Street<br />
                  Learning City, LC 12345
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-300 text-center">
            &copy; {currentYear} Mora Pinnacles. All rights reserved. Reaching Heights, Always Together.
          </p>
        </div>
      </div>
    </footer>
  );
}
