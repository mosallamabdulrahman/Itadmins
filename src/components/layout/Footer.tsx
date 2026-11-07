import { Link } from "react-router-dom";
import { Facebook, Linkedin, Mail, Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Contact */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-35 lg:w-36 h-10">
                  <img className="w-full" src={`${import.meta.env.BASE_URL}images/logo-white.png`} alt="ITADMINZ" />
              </div>
            </Link>
            </div>
            
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              Driving the evolution of information technology through continuous innovation and effective application of technology.
            </p>

            <div className="space-y-4 text-sm text-zinc-300">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-red-500" />
                <p>9h/5 Taqseem EL-Laselky, EL-Nasr St.,<br />Maadi, Cairo – Egypt.</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-red-500" />
                <p>+201142202667</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-red-500" />
                <p>info@itadminz.com</p>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-heading font-bold">Quick links</h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><Link to="/about/introduction" className="hover:text-white hover:translate-x-1 transition-all inline-block">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white hover:translate-x-1 transition-all inline-block">Services</Link></li>
              <li><Link to="/solutions" className="hover:text-white hover:translate-x-1 transition-all inline-block">Solutions</Link></li>
              <li><Link to="/news" className="hover:text-white hover:translate-x-1 transition-all inline-block">News & Insights</Link></li>
              <li><Link to="/contact" className="hover:text-white hover:translate-x-1 transition-all inline-block">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-lg font-heading font-bold">Our Services</h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li><Link to="/services/consultancy" className="hover:text-white hover:translate-x-1 transition-all inline-block">Consultancy Services</Link></li>
              <li><Link to="/services/implementation" className="hover:text-white hover:translate-x-1 transition-all inline-block">Implementation Services</Link></li>
              <li><Link to="/services/outsourcing" className="hover:text-white hover:translate-x-1 transition-all inline-block">Outsourcing Services</Link></li>
              <li><Link to="/services/support" className="hover:text-white hover:translate-x-1 transition-all inline-block">Support/Managed Services</Link></li>
            </ul>
          </div>

          {/* Subscribe Now */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-lg font-heading font-bold">Subscribe Now</h3>
            <p className="text-sm text-zinc-400">Sign up to receive the latest articles and insights.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                  required
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
            <div className="flex items-center gap-3 pt-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 hover:bg-red-600 hover:text-white transition-all">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 hover:bg-red-600 hover:text-white transition-all">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 hover:bg-red-600 hover:text-white transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500 text-center md:text-left">
            Copyright ©2022 ITADMINZ. Designed & Developed by <a href="https://mosalam.com/" target="_blank" className="text-zinc-300 font-semibold transition-colors hover:text-red-500">Mosalam</a>
          </p>
          <div className="flex items-center gap-6 text-xs text-zinc-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
