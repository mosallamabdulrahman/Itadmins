import { motion } from "motion/react";
import { Building2, Landmark, Factory, Briefcase, CheckCircle2, Users, Globe, Award } from "lucide-react";

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

const sectors = [
  { name: "Banking & Finance", icon: Landmark },
  { name: "Government", icon: Building2 },
  { name: "Oil and Gas", icon: Factory },
  { name: "Telecommunications", icon: Globe },
  { name: "General Business", icon: Briefcase },
  { name: "Public Sectors", icon: Users }
];

export function Customers() {
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
            <motion.h1 variants={fadeInUp} className="text-sm font-semibold tracking-widest text-red-600 uppercase">Our Customers</motion.h1>
            <motion.h2 variants={fadeInUp} className="text-5xl sm:text-6xl font-heading font-bold text-zinc-900 dark:text-white leading-tight">
              Trusted by Industry Leaders
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We are proud to serve a diverse range of clients across various sectors, delivering solutions that drive their success.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16 space-y-4"
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
          >
            <motion.h3 variants={fadeInUp} className="text-3xl font-heading font-bold text-zinc-900 dark:text-white">Sectors We Serve</motion.h3>
            <motion.p variants={fadeInUp} className="text-zinc-600 dark:text-zinc-400">
              Our expertise spans across multiple industries, allowing us to understand unique challenges and deliver tailored solutions.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
          >
            {sectors.map((sector, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-50 dark:bg-zinc-900 text-zinc-400 group-hover:text-red-600 group-hover:bg-red-50 dark:group-hover:bg-red-900/10 transition-colors mb-4">
                  <sector.icon className="h-8 w-8" />
                </div>
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white text-center">{sector.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-12"
              initial="initial"
              whileInView="whileInView"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="space-y-6">
                <h3 className="text-4xl font-heading font-bold">Why Customers Choose Us</h3>
                <p className="text-xl text-zinc-400 leading-relaxed">
                  We build long-term partnerships based on trust, reliability, and a commitment to excellence.
                </p>
              </motion.div>

              <motion.ul variants={fadeInUp} className="space-y-6">
                {[
                  "Proven track record of successful implementations.",
                  "Highly certified and experienced technical team.",
                  "Strategic partnerships with global technology leaders.",
                  "Commitment to quality and customer satisfaction.",
                  "Comprehensive support and managed services."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
                    <span className="text-lg text-zinc-300">{item}</span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-3xl overflow-hidden aspect-square bg-zinc-900 border border-zinc-800">
                <img 
                  src="https://i.postimg.cc/bJBvBGzT/data-center.webp" 
                  alt="Business Meeting" 
                  className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Stat */}
              <div className="absolute -bottom-8 -left-8 bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20 text-red-600">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-heading font-bold text-zinc-900 dark:text-white">100+</div>
                    <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Enterprise Clients</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
