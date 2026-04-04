import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, Menu, X, ChevronDown, Search, Grid, ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "About",
    path: "/#about-section",
    sublinks: [
      { name: "Introduction", path: "/about/introduction" },
      { name: "Team", path: "/about/team" },
    ],
  },
  {
    name: "Services",
    path: "/services",
    sublinks: [
      { name: "Implementation Services", path: "/services/implementation" },
      { name: "Support/Managed Services", path: "/services/support" },
      { name: "Consultancy Services", path: "/services/consultancy" },
      { name: "Outsourcing Services", path: "/services/outsourcing" },
      { name: "Planning & Design Services", path: "/services/planning" },
      { name: "Project Management", path: "/services/project-management" },
      { name: "Specialized IT Services", path: "/services/specialized" },
      { name: "Development", path: "/services/development" },
    ],
  },
  {
    name: "Solutions",
    path: "/solutions",
    sublinks: [
      { name: "IT Systems", path: "/solutions/it-systems" },
      { name: "Networking", path: "/solutions/networking" },
      { name: "Data Center Preparation", path: "/solutions/data-center" },
    ],
  },
  { name: "News", path: "/news" },
  { name: "Partners", path: "/partners" },
  { name: "Customers", path: "/customers" },
  { name: "Contact us", path: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setIsSearchOpen(false);
  }, [location.pathname]);


useEffect(() => {
  if (location.hash) {
    const element = document.getElementById(location.hash.slice(1));
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  } else {
    window.scrollTo({ top: 0, behavior: "instant" });
  }
}, [location]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300 ease-in-out border-b",
          isScrolled
            ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-zinc-200/50 dark:border-zinc-800/50 shadow-sm py-3"
            : "bg-white dark:bg-zinc-950 border-transparent py-5"
        )}
      >
        <div className=" mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-35 lg:w-36 h-10">
                  <img className="w-full" src="./images/logo.png" alt="logo" />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium transition-all rounded-full",
                      location.pathname === link.path || location.pathname.startsWith(link.path + "/")
                        ? "text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-900"
                        : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
                    )}
                  >
                    {link.name}
                    {link.sublinks && <ChevronDown className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />}
                  </Link>

                  {/* Mega Menu style dropdown */}
                  {link.sublinks && (
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[400px]"
                        >
                          <div className="rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl p-3 shadow-2xl">
                            <div className="grid grid-cols-1 gap-1">
                              {link.sublinks.map((sublink) => (
                                <Link
                                  key={sublink.name}
                                  to={sublink.path}
                                  className={cn(
                                    "group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all",
                                    location.pathname === sublink.path
                                      ? "bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white"
                                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white"
                                  )}
                                >
                                  {sublink.name}
                                  <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-red-600" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <div className="hidden lg:flex items-center relative">
                <div 
                  className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out flex items-center",
                    isSearchOpen ? "w-48 opacity-100 mr-2" : "w-0 opacity-0 mr-0"
                  )}
                >
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full bg-zinc-100 dark:bg-zinc-900 border-none rounded-full px-4 py-2 text-sm outline-none dark:text-white"
                  />
                </div>
                <button 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors z-10"
                >
                  {isSearchOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
                </button>
              </div>
              
              <Button asChild className="hidden lg:flex rounded-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 shadow-none">
                <Link to="/contact">Consultation</Link>
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-zinc-950/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white dark:bg-zinc-950 shadow-2xl lg:hidden overflow-y-auto border-l border-zinc-200 dark:border-zinc-800"
            >
              <div className="flex items-center justify-between p-6 border-b border-zinc-100 dark:border-zinc-900">
                <div className="flex items-center gap-2">
                  <div className="relative flex items-center justify-center w-8 h-8">
                    <div className="absolute inset-0 bg-red-700 transform -skew-x-12 rounded-sm"></div>
                    <span className="relative text-white font-heading font-bold text-lg">Z</span>
                  </div>
                  <span className="text-lg font-heading font-bold text-zinc-900 dark:text-white tracking-tight">
                    ITADMINZ
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.sublinks ? (
                      <MobileNavAccordion link={link} location={location} />
                    ) : (
                      <Link
                        to={link.path}
                        className={cn(
                          "block rounded-xl px-4 py-3.5 text-sm font-medium transition-colors",
                          location.pathname === link.path
                            ? "bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white"
                            : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:text-zinc-900 dark:hover:text-white"
                        )}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-6 mt-4 bg-zinc-50 dark:bg-zinc-900/50 space-y-4">
                <Button asChild className="w-full rounded-full bg-red-700 hover:bg-red-800 text-white shadow-none">
                  <Link to="/contact">Get Consultation</Link>
                </Button>
                <div className="space-y-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <Phone className="h-4 w-4 text-red-600" />
                    +201142202667
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                    <Mail className="h-4 w-4 text-red-600" />
                    info@itadminz.com
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileNavAccordion({ link, location }: { link: any; location: any }) {
  const [isOpen, setIsOpen] = useState(
    location.pathname.startsWith(link.path + "/")
  );

  return (
    <div className="rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex w-full items-center justify-between px-4 py-3.5 text-sm font-medium transition-colors",
          location.pathname.startsWith(link.path + "/")
            ? "text-zinc-900 dark:text-white"
            : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 hover:text-zinc-900 dark:hover:text-white"
        )}
      >
        {link.name}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-2 px-2 space-y-1 border-l-2 border-zinc-100 dark:border-zinc-800 ml-4">
              {link.sublinks.map((sublink: any) => (
                <Link
                  key={sublink.name}
                  to={sublink.path}
                  className={cn(
                    "block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors",
                    location.pathname === sublink.path
                      ? "text-red-600 dark:text-red-500 bg-red-50 dark:bg-red-950/30"
                      : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
                  )}
                >
                  {sublink.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
