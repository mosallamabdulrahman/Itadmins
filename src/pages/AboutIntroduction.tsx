import { motion } from "motion/react";
import { Check, Trophy, Users, Globe, Award } from "lucide-react";

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

export function AboutIntroduction() {
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
            <motion.h1 variants={fadeInUp} className="text-sm font-semibold tracking-widest text-red-600 uppercase">About ITADMINZ</motion.h1>
            <motion.h2 variants={fadeInUp} className="text-5xl sm:text-6xl font-heading font-bold text-zinc-900 dark:text-white leading-tight">
              Pioneering Smart Solutions Since 2008
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We are a leading systems integrator adding value to the Egyptian information technology market through innovation and expertise.
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
              className="lg:col-span-6 space-y-16"
              initial="initial"
              whileInView="whileInView"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800">
                    <Globe className="h-6 w-6" />
                  </div>
                </div>
                <div className="space-y-3 pt-2">
                  <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white">Serving Customers Globally</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    TI Adminz has been able to serve its customers in different industry sectors such as banking, financial services, Government, Oil and Gas, Telecommunications, General Business, and public sectors.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800">
                    <Award className="h-6 w-6" />
                  </div>
                </div>
                <div className="space-y-3 pt-2">
                  <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white">Our Major Services</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Our software and hardware solutions include TI systems, Security, Networking, Extra Low Voltage, and business continuity solutions in addition to content and business process management, analytics.
                  </p>
                  <div className="p-6 mt-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      We are distinguished by providing team works that have accredited certificates in many important specializations, for example not for limited: Cisco, VMware, SAP, Symantec, Smart Stream, Veritas, Fortinet, F5, Legrand, Milestone, and Axis Communications.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Images */}
            <motion.div 
              className="lg:col-span-6 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-12">
                  <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-zinc-100 dark:bg-zinc-900">
                    <img 
                      src="/public/images/data-center.avif" 
                      alt="IT Professionals" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-zinc-100 dark:bg-zinc-900">
                    <img 
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                      alt="Tech Team" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating Experience Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-950 text-white p-8 rounded-3xl text-center shadow-2xl border border-zinc-800 min-w-[200px]">
                <Trophy className="h-8 w-8 mx-auto mb-4 text-red-500" />
                <div className="text-5xl font-heading font-bold mb-2">15</div>
                <div className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="order-2 lg:order-1 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-3xl overflow-hidden aspect-video bg-zinc-900 border border-zinc-800">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Strategy Planning" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div 
              className="order-1 lg:order-2 space-y-12"
              initial="initial"
              whileInView="whileInView"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="space-y-6">
                <h3 className="text-4xl font-heading font-bold">The Strategy</h3>
                <p className="text-xl text-zinc-400 leading-relaxed font-light italic border-l-4 border-red-600 pl-6">
                  "To be part of the growth of information technology" Based on customer satisfaction, innovation, and effective use of technology To achieve this, we employ the best elements.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-8">
                <div className="space-y-4">
                  <h4 className="text-2xl font-heading font-bold flex items-center gap-3">
                    <Users className="h-6 w-6 text-red-500" />
                    IT ADMINZ Membership
                  </h4>
                  <p className="text-zinc-400 leading-relaxed">
                    The company is interested in following developments in all information technology organizations to be always aware of everything new, because our main goal is to provide the highest level of services that can be reached, and thus we are an active member in that fields.
                  </p>
                </div>
                
                <ul className="grid grid-cols-1 gap-4">
                  {[
                    "Information Technology Industry Authority- ITIDA.",
                    "Chamber of Information Technology Industry-CIT.",
                    "Telecommunications Association for Electronics and Software - Etisal.",
                    "Egyptian Exporters Association - Expo Link.",
                    "Egyptian General Petroleum Corporation (EGPC)."
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/10 text-red-500 shrink-0">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium text-zinc-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customers Field */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <motion.div 
            className="space-y-4 max-w-2xl mx-auto"
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-sm font-semibold tracking-widest text-red-600 uppercase">About Company</motion.h2>
            <motion.h3 variants={fadeInUp} className="text-4xl font-heading font-bold text-zinc-900 dark:text-white">Wide range of customers field</motion.h3>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {['IBM', 'DELL', 'vmware', 'VERITAS', 'RedHat'].map((partner, i) => (
              <div key={i} className="text-3xl font-heading font-bold text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-default">
                {partner}
              </div>
            ))}
          </motion.div>
          
          <motion.div 
            className="inline-flex items-center gap-4 bg-zinc-50 dark:bg-zinc-900/50 px-6 py-4 rounded-full border border-zinc-200 dark:border-zinc-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Check className="h-5 w-5 text-red-600" />
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Egyptian General Petroleum Corporation (EGPC).</span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
