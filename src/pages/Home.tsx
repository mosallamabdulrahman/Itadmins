import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Monitor, Settings, Shield, Server, Network, Database, CheckCircle2, ChevronRight, Check } from "lucide-react";
import { Button } from "@/src/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.1 }
};

export function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-14 overflow-hidden bg-white dark:bg-zinc-950">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-red-600 opacity-20 blur-[100px]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Column - Text */}
            <motion.div className="space-y-8 text-left" initial="initial" animate="whileInView" variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800">
                <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse"></span>
                <span className="text-xs font-semibold tracking-wide text-zinc-900 dark:text-zinc-300 uppercase">
                  Specialized IT Services Tailored For You
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold tracking-tighter text-zinc-900 dark:text-white leading-[1.1]">
                Enterprise Grade <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800 dark:from-red-500 dark:to-red-700">
                  IT Solutions.
                </span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
                Empowering businesses with cutting-edge technology, seamless integration, and robust infrastructure to drive growth and innovation.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-start gap-4 pt-4">
                <Button size="lg" asChild className="rounded-full px-8 h-14 text-base bg-red-600 text-white hover:bg-red-700 dark:bg-red-600 dark:text-white dark:hover:bg-red-700 shadow-lg shadow-red-600/20 transition-all hover:scale-105">
                  <Link to="/services">Explore Services</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-full px-8 h-14 text-base border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all hover:scale-105 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm">
                  <Link to="/contact">Book Consultation</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Image & Animations */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1, ease: "easeOut" }} 
              className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full flex items-center justify-center mt-12 lg:mt-0"
            >
              {/* Orbit Animations */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Outer Orbit */}
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[100%] h-[100%] sm:w-[110%] sm:h-[110%] lg:w-[120%] lg:h-[120%] rounded-full border border-dashed border-zinc-300 dark:border-zinc-700/50"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-zinc-400 dark:bg-zinc-600"></div>
                </motion.div>
                
                {/* Inner Orbit */}
                <motion.div 
                  animate={{ rotate: -360 }} 
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[75%] h-[75%] sm:w-[80%] sm:h-[80%] rounded-full border border-zinc-200 dark:border-zinc-800"
                >
                  <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-red-600 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                </motion.div>
              </div>

              {/* Main Image */}
              <div className="relative w-[60%] h-[60%] sm:w-[65%] sm:h-[65%] rounded-full overflow-hidden border-8 border-white dark:border-zinc-900 shadow-2xl z-10">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                  alt="Tech Planet" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent mix-blend-overlay"></div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[15%] right-[5%] sm:right-[10%] z-20 bg-white dark:bg-zinc-800 p-3 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-700"
              >
                <Shield className="w-6 h-6 text-red-600" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[20%] left-[0%] sm:left-[5%] z-20 bg-white dark:bg-zinc-800 p-3 rounded-2xl shadow-xl border border-zinc-100 dark:border-zinc-700"
              >
                <Server className="w-6 h-6 text-red-600" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="py-16 border-y border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/20 overflow-hidden">
        <div className="container mx-auto px-4 mb-10 text-center">
          <p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">Technologies We Use</p>
        </div>
        <div className="relative flex w-full overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-24 px-12">
            {[
              { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
              { name: 'IBM', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
              { name: 'Cisco', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
              { name: 'VMware', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg' },
              { name: 'SAP', url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
              { name: 'Dell', url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg' },
              { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
              { name: 'IBM', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
              { name: 'Cisco', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
              { name: 'VMware', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg' },
              { name: 'SAP', url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
              { name: 'Dell', url: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg' },
            ].map((partner, i) => (
              <div key={i} className="flex items-center justify-center w-32 h-16">
                <img 
                  src={partner.url} 
                  alt={partner.name} 
                  className="max-h-full max-w-full object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer dark:brightness-200 dark:hover:brightness-100" 
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div className="lg:col-span-5 space-y-8" initial="initial" whileInView="whileInView" variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="space-y-4">
                <h2 className="text-sm font-semibold tracking-widest text-red-600 uppercase">About IT ADMINZ</h2>
                <h3 className="text-4xl sm:text-5xl font-heading font-bold text-zinc-900 dark:text-white leading-tight">
                  Driving the evolution of information technology.
                </h3>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We are committed to delivering exceptional customer experiences through continuous innovation and the effective application of technology. To accomplish this, we leverage the industry's top talent and resources.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Button variant="link" asChild className="p-0 h-auto text-red-600 hover:text-red-700 font-semibold text-base group">
                  <Link to="/about/introduction" className="flex items-center">
                    Discover our story <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div className="lg:col-span-7 relative" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-zinc-100 dark:bg-zinc-900">
                    <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" alt="Server Infrastructure" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-zinc-100 dark:bg-zinc-900">
                    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" alt="IT Professionals" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-2xl border border-zinc-100 dark:border-zinc-800 text-center min-w-[160px]">
                <div className="text-4xl font-heading font-bold text-red-600 mb-1">15+</div>
                <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Years Exp.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center max-w-2xl mx-auto mb-16 space-y-4" initial="initial" whileInView="whileInView" variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="text-sm font-semibold tracking-widest text-red-600 uppercase">Services</motion.h2>
            <motion.h3 variants={fadeInUp} className="text-4xl font-heading font-bold text-zinc-900 dark:text-white">What we transform in real life</motion.h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                title: "Implementation Services",
                icon: <Settings className="h-10 w-10" strokeWidth={1.5} />,
                items: ["Solution architecture", "Data migration", "User training"]
              },
              {
                title: "Support/Managed Services",
                icon: <Shield className="h-10 w-10" strokeWidth={1.5} />,
                items: ["Continuous monitoring", "maintenance", "optimization"]
              },
              {
                title: "Consultancy Services",
                icon: <Monitor className="h-10 w-10" strokeWidth={1.5} />,
                items: ["Align IT Strategy", "Deep Client Analysis", "Tailored IT Solutions"]
              },
              {
                title: "Outsourcing Services",
                icon: <Network className="h-10 w-10" strokeWidth={1.5} />,
                items: ["Skilled Talent Pool", "Seamless Operations", "Client-Focused Growth"]
              },
              {
                title: "Planning & Design",
                icon: <Database className="h-10 w-10" strokeWidth={1.5} />,
                items: ["Tailored IT Solutions", "Optimize IT Investments", "IT as Business Enabler"]
              },
              {
                title: "Project Management",
                icon: <CheckCircle2 className="h-10 w-10" strokeWidth={1.5} />,
                items: ["Proven Project Delivery", "Risk Management", "Success Through Expertise"]
              },
              {
                title: "Specialized IT Services",
                icon: <Server className="h-10 w-10" strokeWidth={1.5} />,
                items: ["Expertise", "Solutions", "Focus"]
              },
              {
                title: "Development Services",
                icon: <Monitor className="h-10 w-10" strokeWidth={1.5} />,
                items: ["Web Portals", "Software Development", "Mobile Applications"]
              }
            ].map((service, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-zinc-100 dark:border-zinc-800 hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
                  <div className="text-red-600 mb-6">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-heading font-bold text-red-600 mb-8">{service.title}</h4>
                  <ul className="space-y-4 flex-grow">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center justify-between text-sm font-medium text-zinc-900 dark:text-zinc-300">
                        <span>{item}</span>
                        <Check className="h-4 w-4 text-red-500 flex-shrink-0 ml-4" strokeWidth={2} />
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-sm font-semibold tracking-widest text-red-600 uppercase">Solutions</h2>
              <h3 className="text-4xl font-heading font-bold text-zinc-900 dark:text-white">Solutions We Offer</h3>
              <p className="text-zinc-600 dark:text-zinc-400">Comprehensive enterprise solutions designed to scale and secure your infrastructure.</p>
            </div>
            
            <div className="lg:col-span-8 space-y-6">
              <Link to="/solutions/it-systems" className="group block p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <Server className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white mb-2">IT Systems</h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">Disaster Recovery • Integrated Infrastructure • Cloud Computing</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                </div>
              </Link>

              <Link to="/solutions/networking" className="group block p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <Network className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white mb-2">Networking</h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">Enterprise Switching • Integrated Comms • Traffic Engineering</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                </div>
              </Link>

              <Link to="/solutions/data-center" className="group block p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-white group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <Database className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white mb-2">Data Center Preparation</h4>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">Custom Builds • All-inclusive Solutions • Uptime Optimization</p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center group-hover:border-red-600 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-32 bg-zinc-50 dark:bg-zinc-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <h2 className="text-sm font-semibold tracking-widest text-red-600 uppercase">News & Insights</h2>
              <h3 className="text-4xl font-heading font-bold text-zinc-900 dark:text-white">Articles from resource library</h3>
            </div>
            <Button variant="outline" asChild className="rounded-full">
              <Link to="/news">View All News</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/news/1" className="group block">
              <div className="relative h-[240px] rounded-3xl overflow-hidden mb-6">
                <img src="/public/images/A Strategic Alliance Fortified.jpg" alt="Business handshake" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm text-zinc-900 dark:text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm">Uncategorized</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wider">
                  <span>Adminz</span><span className="w-1 h-1 rounded-full bg-red-600"></span><span>August 5, 2024</span>
                </div>
                <h4 className="text-xl font-heading font-bold text-zinc-900 dark:text-white group-hover:text-red-600 transition-colors line-clamp-2">A Strategic Alliance Fortified</h4>
              </div>
            </Link>

            <Link to="/news/2" className="group block">
              <div className="relative h-[240px] rounded-3xl overflow-hidden mb-6">
                <img src="/public/images/Partners with Global.jpg" alt="Tech conference" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm text-zinc-900 dark:text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm">Uncategorized</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wider">
                  <span>Adminz</span><span className="w-1 h-1 rounded-full bg-red-600"></span><span>August 5, 2024</span>
                </div>
                <h4 className="text-xl font-heading font-bold text-zinc-900 dark:text-white group-hover:text-red-600 transition-colors line-clamp-2">ITAdmins to Showcase Cutting-Edge Security Solutions at it-sa</h4>
              </div>
            </Link>

            <Link to="/news/3" className="group block">
              <div className="relative h-[240px] rounded-3xl overflow-hidden mb-6">
                <img src="/public/images/The Future of Enterprise Cloud Architecture.jpg" alt="IT Professionals" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm text-zinc-900 dark:text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm">Technology</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 font-medium uppercase tracking-wider">
                  <span>Adminz</span><span className="w-1 h-1 rounded-full bg-red-600"></span><span>July 12, 2024</span>
                </div>
                <h4 className="text-xl font-heading font-bold text-zinc-900 dark:text-white group-hover:text-red-600 transition-colors line-clamp-2">The Future of Enterprise Cloud Architecture</h4>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
