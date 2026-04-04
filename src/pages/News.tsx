import { motion } from "motion/react";
import { ArrowRight, Calendar, User } from "lucide-react";
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

const newsArticles = [
  {
    id: 1,
    title: "IT ADMINZ Partners with Global Tech Leader to Expand Cloud Offerings",
    excerpt: "We are excited to announce a new strategic partnership that will significantly enhance our cloud computing solutions for enterprise clients.",
    date: "October 15, 2023",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    category: "Partnerships"
  },
  {
    id: 2,
    title: "Cybersecurity Trends for 2024: What Businesses Need to Know",
    excerpt: "Our security experts analyze the emerging threats and outline the essential strategies organizations must adopt to protect their data.",
    date: "September 28, 2023",
    author: "Security Team",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    category: "Insights"
  },
  {
    id: 3,
    title: "Successful Implementation of Core Banking System at Major Financial Institution",
    excerpt: "Read about how our team successfully deployed a complex core banking solution, ensuring zero downtime and enhanced performance.",
    date: "August 12, 2023",
    author: "Project Management",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    category: "Case Studies"
  },
  {
    id: 4,
    title: "IT ADMINZ Recognized as Top Systems Integrator in the Region",
    excerpt: "We are honored to receive this prestigious award recognizing our commitment to excellence and customer satisfaction.",
    date: "July 05, 2023",
    author: "Admin",
    image: "/public/images/A Strategic Alliance Fortified.jpg",
    category: "Awards"
  }
];

export function News() {
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
            <motion.h1 variants={fadeInUp} className="text-sm font-semibold tracking-widest text-red-600 uppercase">News & Insights</motion.h1>
            <motion.h2 variants={fadeInUp} className="text-5xl sm:text-6xl font-heading font-bold text-zinc-900 dark:text-white leading-tight">
              Latest Updates from IT ADMINZ
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Stay informed about our latest company news, industry insights, and technological advancements.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
          >
            {newsArticles.map((article) => (
              <motion.article 
                key={article.id}
                variants={fadeInUp}
                className="group flex flex-col bg-white dark:bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[16/9] overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-10 bg-red-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    {article.category}
                  </div>
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {article.date}</span>
                    <span className="flex items-center gap-1"><User className="h-4 w-4" /> {article.author}</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-red-600 transition-colors">
                    <Link to={`/news/${article.id}`}>{article.title}</Link>
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8 flex-grow">
                    {article.excerpt}
                  </p>
                  <Link 
                    to={`/news/${article.id}`} 
                    className="inline-flex items-center text-sm font-bold text-zinc-900 dark:text-white hover:text-red-600 dark:hover:text-red-500 transition-colors mt-auto"
                  >
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
