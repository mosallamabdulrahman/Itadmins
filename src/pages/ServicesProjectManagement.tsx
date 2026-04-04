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

export function ServicesProjectManagement() {
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
              Project Management
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Delivering complex IT initiatives on time, within budget, and to the highest quality standards.
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
                  Our certified project managers utilize proven methodologies (Agile, Waterfall, Hybrid) to oversee your IT projects from inception to completion. We ensure clear communication, risk mitigation, and strict adherence to project goals.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white">Project Management Expertise</h3>
                <ul className="space-y-4">
                  {[
                    "End-to-End Project Lifecycle Management",
                    "Risk Assessment & Mitigation Strategies",
                    "Resource Allocation & Budget Control",
                    "Stakeholder Communication & Reporting",
                    "Quality Assurance & Post-Implementation Review"
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
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop" 
                  alt="Project Management" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8 rounded-3xl bg-zinc-950 text-white border border-zinc-800">
                <h4 className="text-2xl font-heading font-bold mb-4">Ensure Project Success</h4>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  Partner with our experienced project managers to guarantee the successful delivery of your IT initiatives.
                </p>
                <Button asChild size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white border-none">
                  <Link to="/contact">
                    Hire a Project Manager
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
