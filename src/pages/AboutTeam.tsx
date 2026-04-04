import { motion } from "motion/react";
import { Code, Megaphone, Server, Briefcase, Palette, Headset } from "lucide-react";

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

const specializations = [
  {
    title: "Software Development",
    desc: "Our team includes certified specialists in areas like application development, web programming, mobile app development, and software engineering. They are skilled in a range of programming languages and frameworks.",
    icon: Code
  },
  {
    title: "Digital Marketing",
    desc: "We have certified experts in search engine optimization (SEO), social media marketing, content creation, and digital advertising. They help enterprises elevate their online presence and reach target audiences effectively.",
    icon: Megaphone
  },
  {
    title: "IT Infrastructure",
    desc: "Our certified professionals manage a variety of IT infrastructure services, including network administration, cloud computing, data center operations, and technical support. They ensure reliable and secure IT systems.",
    icon: Server
  },
  {
    title: "Business Consulting",
    desc: "Our certified business analysts and consultants provide advisory services to help enterprises improve operations, enhance productivity, and achieve their strategic objectives. Areas of expertise include process optimization, change management, and organizational development.",
    icon: Briefcase
  },
  {
    title: "Creative Services",
    desc: "Certified specialists in graphic design, web design, interior design, and photography services allow us to deliver end-to-end solutions for branding, visual identity, and content production.",
    icon: Palette
  },
  {
    title: "Customer Support",
    desc: "Certified customer service representatives staff our help desks and provide technical support, client onboarding, and account management to ensure a positive customer experience.",
    icon: Headset
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

      {/* Intro Section */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-12"
              initial="initial"
              whileInView="whileInView"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="relative pl-8 border-l-4 border-red-600">
                <h3 className="text-3xl font-heading font-bold text-zinc-900 dark:text-white mb-4">Staff Qualifications</h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  All members of our company's staff hold official certifications in the specific service fields they provide.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative pl-8 border-l-4 border-red-600">
                <h3 className="text-3xl font-heading font-bold text-zinc-900 dark:text-white mb-4">Areas of Specialization</h3>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Our team covers the following areas of specialization:
                </p>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -inset-4 bg-zinc-100 dark:bg-zinc-900 rounded-[2.5rem] -z-10 transform rotate-3"></div>
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img 
                  src="../images/about-team.jpg" 
                  alt="Professional Team" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specializations Grid */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/20 border-t border-zinc-100 dark:border-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-20"
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
          >
            <motion.p variants={fadeInUp} className="text-lg text-zinc-600 dark:text-zinc-400">
              More detail on the key areas of specialization covered by the staff at this company:
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializations.map((spec, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-sm hover:shadow-xl border border-zinc-200 dark:border-zinc-800 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 dark:bg-red-900/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                
                <div className="w-14 h-14 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 mb-8 group-hover:scale-110 transition-transform duration-500">
                  <spec.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                
                <h4 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-red-600 transition-colors">
                  {spec.title}
                </h4>
                
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {spec.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
