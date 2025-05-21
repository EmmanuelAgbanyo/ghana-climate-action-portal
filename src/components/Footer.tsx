
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ghana-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Climate Information Centre</h3>
            <p className="mb-4">
              Educating about Ghana's climate challenges, promoting adaptation campaigns, 
              and emphasizing the importance of resilient leadership.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-ghana-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-ghana-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-ghana-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-ghana-gold transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-ghana-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-ghana-gold transition-colors">About</Link></li>
              <li><Link to="/climate-info" className="hover:text-ghana-gold transition-colors">Climate Information</Link></li>
              <li><Link to="/adaptation" className="hover:text-ghana-gold transition-colors">Adaptation Campaigns</Link></li>
              <li><Link to="/leadership" className="hover:text-ghana-gold transition-colors">Resilient Leadership</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="hover:text-ghana-gold transition-colors">Blog</Link></li>
              <li><a href="#" className="hover:text-ghana-gold transition-colors">Ghana's NDCs</a></li>
              <li><a href="#" className="hover:text-ghana-gold transition-colors">Climate Policies</a></li>
              <li><a href="#" className="hover:text-ghana-gold transition-colors">Research Papers</a></li>
              <li><Link to="/contact" className="hover:text-ghana-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates on climate action in Ghana.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full text-gray-800 rounded-l-md focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-ghana-gold text-ghana-green px-4 py-2 rounded-r-md hover:bg-yellow-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p>
            © {currentYear} Climate Information Centre - Ghana. By Youth Path Organisation - YPO. 
            Designed by Emmanuel Agbanyo.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
