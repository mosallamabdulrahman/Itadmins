import { motion } from "motion/react";
import { Handshake, Globe, ShieldCheck, Award } from "lucide-react";

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

const partners = [
  { name: "Cisco", category: "Networking & Security" },
  { name: "VMware", category: "Virtualization & Cloud" },
  { name: "Microsoft", category: "Enterprise Software" },
  { name: "SAP", category: "Business Processes" },
  { name: "Symantec", category: "Cybersecurity" },
  { name: "Veritas", category: "Data Management" },
  { name: "Fortinet", category: "Network Security" },
  { name: "F5", category: "Application Delivery" },
  { name: "Legrand", category: "Infrastructure" },
  { name: "Milestone", category: "Video Management" },
  { name: "Axis Communications", category: "Network Video" },
  { name: "Smart Stream", category: "Financial Solutions" }
];

export function Partners() {
  return (
    <div className="flex flex-col w-full overflow-hidden pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-zinc-50 dark:bg-zinc-900/20 border-b border-zinc-100 dark:border-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl space-y-6"
            initial="initial"
            animate="whileInView"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp} className="text-sm font-semibold tracking-widest text-red-600 uppercase">Our Network</motion.h1>
            <motion.h2 variants={fadeInUp} className="text-5xl sm:text-6xl font-heading font-bold text-zinc-900 dark:text-white leading-tight">
              Strategic Partnerships
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Collaborating with global technology leaders to deliver best-in-class solutions to our clients.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { icon: Globe, title: "Global Reach", desc: "Access to worldwide technologies and support networks." },
              { icon: ShieldCheck, title: "Certified Expertise", desc: "Our team holds top-tier certifications from all our partners." },
              { icon: Award, title: "Premium Solutions", desc: "Delivering only the most reliable and innovative products." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 dark:bg-red-900/10 text-red-600 mx-auto mb-6">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-heading font-bold text-zinc-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Partners Grid */}
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16 space-y-4"
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
          >
            <motion.h3 variants={fadeInUp} className="text-3xl font-heading font-bold text-zinc-900 dark:text-white">Our Technology Partners</motion.h3>
            <motion.p variants={fadeInUp} className="text-zinc-600 dark:text-zinc-400">
              We carefully select our partners to ensure we provide comprehensive and cutting-edge solutions.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
          >
            {partners.map((partner, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center justify-center p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-red-500/50 transition-colors group"
              >
                <Handshake className="h-8 w-8 text-zinc-400 group-hover:text-red-600 transition-colors mb-4" />
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white text-center mb-1">{partner.name}</h4>
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 text-center uppercase tracking-wider">{partner.category}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
