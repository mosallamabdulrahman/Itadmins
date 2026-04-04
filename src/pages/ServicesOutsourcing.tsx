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

export function ServicesOutsourcing() {
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
              Outsourcing Services
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Access top-tier IT talent and specialized skills to augment your team and accelerate project delivery.
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
                  Our IT outsourcing services provide you with flexible access to highly skilled professionals. Whether you need short-term expertise for a specific project or long-term team augmentation, we have the resources to meet your requirements.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6">
                <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white">Benefits of Outsourcing with Us</h3>
                <ul className="space-y-4">
                  {[
                    "Access to a wide pool of certified IT professionals.",
                    "Cost-effective scaling of your IT capabilities.",
                    "Reduced time-to-market for critical projects.",
                    "Flexibility to adapt to changing business needs.",
                    "Focus on your core business objectives while we handle the tech."
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
                  src="/public/images/Outsourcing Services.webp" 
                  alt="IT Professionals Working" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8 rounded-3xl bg-zinc-950 text-white border border-zinc-800">
                <h4 className="text-2xl font-heading font-bold mb-4">Looking for Talent?</h4>
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  Tell us about your project requirements and we'll match you with the right IT professionals from our team.
                </p>
                <Button asChild size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white border-none">
                  <Link to="/contact">
                    Request Resources
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
