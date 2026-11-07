import { motion } from "motion/react";
import { Server, CheckCircle2, ArrowRight, Database, Cloud, Shield } from "lucide-react";
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

export function SolutionsITSystems() {
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
              IT Systems
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-zinc-400 leading-relaxed">
              Robust, scalable, and secure IT infrastructure solutions designed to support your core business operations.
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
                  We provide end-to-end IT systems solutions, from initial design and sizing to procurement, implementation, and ongoing support. Our solutions are built on industry-leading hardware and software platforms to ensure maximum reliability and performance.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-8">
                <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white">Core Components</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Servers & Storage", desc: "High-performance computing and scalable storage solutions.", icon: Server },
                    { title: "Virtualization", desc: "Server and desktop virtualization for resource optimization.", icon: Cloud },
                    { title: "Backup & Recovery", desc: "Comprehensive data protection and disaster recovery.", icon: Database },
                    { title: "Endpoint Security", desc: "Securing devices and data across your organization.", icon: Shield }
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
                    "Increased operational efficiency and productivity.",
                    "Enhanced data security and compliance.",
                    "Scalable infrastructure that grows with your business.",
                    "Reduced total cost of ownership (TCO).",
                    "High availability and minimized downtime."
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
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" 
                  alt="Server Rack" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                <h4 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white mb-4">Upgrade Your Infrastructure</h4>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                  Let us help you design and implement an IT system that meets your current needs and future goals.
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
