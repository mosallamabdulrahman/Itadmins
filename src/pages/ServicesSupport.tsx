import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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

export function ServicesSupport() {
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
            <motion.h1 variants={fadeInUp} className="text-sm font-semibold tracking-widest text-red-600 uppercase">Our Services</motion.h1>
            <motion.h2 variants={fadeInUp} className="text-5xl sm:text-6xl font-heading font-bold text-zinc-900 dark:text-white leading-tight">
              Support & Managed Services
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Proactive IT management and responsive support to keep your business running smoothly 24/7.
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
                  Our comprehensive support and managed services ensure that your IT infrastructure is always available, secure, and performing optimally. We act as an extension of your team, providing proactive monitoring and rapid issue resolution.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white">Service Features</h3>
                <ul className="space-y-4">
                  {[
                    "24/7 Proactive Monitoring & Alerting",
                    "Helpdesk & Technical Support (L1/L2/L3)",
                    "Patch Management & System Updates",
                    "Backup Monitoring & Disaster Recovery Testing",
                    "Regular Performance Reporting & Reviews"
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
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                  alt="IT Support Team" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8 rounded-3xl bg-zinc-950 text-white border border-zinc-800">
                <h4 className="text-2xl font-heading font-bold mb-4">Need Reliable Support?</h4>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  Discover how our managed services can reduce downtime and free up your internal resources.
                </p>
                <Button asChild size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white border-none">
                  <Link to="/contact">
                    Get Support Plan
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
