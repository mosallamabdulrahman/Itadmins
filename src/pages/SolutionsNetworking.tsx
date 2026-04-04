import { motion } from "motion/react";
import { Network, CheckCircle2, ArrowRight, Wifi, Shield, Server } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Link } from "react-router-dom";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-50px" },
  transition: { staggerChildren: 0.1 }
};

export function SolutionsNetworking() {
  return (
    <div className="flex flex-col w-full overflow-hidden pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-zinc-950 border-b border-zinc-900">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-red-900/20 blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-3xl space-y-6"
            initial="initial"
            animate="whileInView"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp} className="text-sm font-semibold tracking-widest text-red-500 uppercase">Our Solutions</motion.h1>
            <motion.h2 variants={fadeInUp} className="text-5xl sm:text-6xl font-heading font-bold text-white leading-tight">
              Networking Solutions
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-zinc-400 leading-relaxed">
              High-performance, secure, and reliable network infrastructures to connect your business seamlessly.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column - Text */}
            <motion.div 
              className="lg:col-span-7 space-y-12"
              initial="initial"
              whileInView="whileInView"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  A robust network is the backbone of any modern enterprise. We design, implement, and manage advanced networking solutions that ensure fast, secure, and uninterrupted connectivity across your organization, from local area networks (LAN) to wide area networks (WAN) and wireless environments.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-8">
                <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white">Core Components</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Enterprise Routing & Switching", desc: "High-speed data transfer and intelligent traffic management.", icon: Network },
                    { title: "Wireless Networking", desc: "Secure and reliable Wi-Fi coverage for modern workspaces.", icon: Wifi },
                    { title: "Network Security", desc: "Firewalls, VPNs, and intrusion prevention systems.", icon: Shield },
                    { title: "Software-Defined Networking (SDN)", desc: "Agile and centrally managed network infrastructure.", icon: Server }
                  ].map((area, i) => (
                    <div key={i} className="flex flex-col gap-4 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white dark:bg-zinc-900 text-red-600 shadow-sm">
                        <area.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-zinc-900 dark:text-white mb-2">{area.title}</h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">{area.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white">Benefits</h3>
                <ul className="space-y-4">
                  {[
                    "Enhanced connectivity and collaboration.",
                    "Improved network performance and reduced latency.",
                    "Robust security against internal and external threats.",
                    "Simplified network management and troubleshooting.",
                    "Scalability to accommodate future growth."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-lg text-zinc-600 dark:text-zinc-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Right Column - Sidebar */}
            <motion.div 
              className="lg:col-span-5 space-y-8 sticky top-32"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-zinc-100 dark:bg-zinc-900">
                <img 
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop" 
                  alt="Network Cables" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white mb-4">Optimize Your Network</h4>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                  Contact our networking experts to design a solution that meets your performance and security requirements.
                </p>
                <Button asChild size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white border-none">
                  <Link to="/contact">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
