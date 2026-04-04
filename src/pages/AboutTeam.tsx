import { motion } from "motion/react";
import { Award, CheckCircle2, GraduationCap, ShieldCheck } from "lucide-react";

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

const qualifications = [
  {
    title: "Cisco",
    items: ["CCIE", "CCNP", "CCNA", "CCDA", "CCDP", "CCIP", "CCSP", "CCVP"],
    icon: ShieldCheck
  },
  {
    title: "VMware",
    items: ["VCP", "VCAP", "VCDX"],
    icon: ShieldCheck
  },
  {
    title: "Microsoft",
    items: ["MCSE", "MCSA", "MCITP", "MCTS", "MCPD"],
    icon: ShieldCheck
  },
  {
    title: "Other Partners",
    items: ["SAP", "Symantec", "Smart Stream", "Veritas", "Fortinet", "F5", "Legrand", "Milestone", "Axis Communications"],
    icon: ShieldCheck
  }
];

export function AboutTeam() {
  return (
    <div className="flex flex-col w-full overflow-hidden pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-zinc-950 border-b border-zinc-900">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-red-900/20 blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-3xl space-y-6"
            initial="initial"
            animate="whileInView"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp} className="text-sm font-semibold tracking-widest text-red-500 uppercase">Our Team</motion.h1>
            <motion.h2 variants={fadeInUp} className="text-5xl sm:text-6xl font-heading font-bold text-white leading-tight">
              Expertise that drives <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">excellence.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-zinc-400 leading-relaxed">
              We are distinguished by providing team works that have accredited certificates in many important specializations.
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
              className="lg:col-span-5 space-y-12 sticky top-32"
              initial="initial"
              whileInView="whileInView"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="space-y-6">
                <div className="inline-flex items-center justify-center p-3 bg-red-50 dark:bg-red-900/10 rounded-2xl mb-4">
                  <GraduationCap className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-zinc-900 dark:text-white">Certified Professionals</h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Our team consists of highly qualified engineers and consultants who hold top-tier certifications from industry-leading technology providers. This ensures that we deliver solutions based on best practices and the latest technological advancements.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                <Award className="h-10 w-10 text-red-600 mb-6" />
                <h4 className="text-xl font-heading font-bold text-zinc-900 dark:text-white mb-4">Continuous Learning</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  We invest heavily in the continuous education and certification of our staff to maintain our competitive edge and provide our clients with the most innovative and secure solutions available.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Certifications Grid */}
            <motion.div 
              className="lg:col-span-7"
              initial="initial"
              whileInView="whileInView"
              variants={staggerContainer}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {qualifications.map((qual, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    className="p-8 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-white group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <qual.icon className="h-6 w-6" />
                      </div>
                      <h4 className="text-xl font-heading font-bold text-zinc-900 dark:text-white">{qual.title}</h4>
                    </div>
                    <ul className="space-y-3">
                      {qual.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                          <CheckCircle2 className="h-5 w-5 text-red-500 shrink-0" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="rounded-3xl overflow-hidden aspect-[21/9] bg-zinc-100 dark:bg-zinc-900 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
              alt="Team Collaboration" 
              className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent flex items-end p-12">
              <h3 className="text-3xl font-heading font-bold text-white max-w-2xl">
                Collaborative expertise delivering comprehensive IT solutions.
              </h3>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
