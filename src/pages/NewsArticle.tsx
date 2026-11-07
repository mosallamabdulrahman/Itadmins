import { motion } from "motion/react";
import { ArrowRight, Calendar, User, ChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/src/components/ui/button";

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

// Mock data for the article
const articleData = {
  id: 1,
  title: "IT ADMINZ Partners with Global Tech Leader to Expand Cloud Offerings",
  content: `
    <p>We are thrilled to announce a strategic partnership with a leading global technology provider. This collaboration marks a significant milestone in our commitment to delivering cutting-edge cloud solutions to our enterprise clients.</p>
    
    <h3>Expanding Our Capabilities</h3>
    <p>Through this partnership, IT ADMINZ will integrate advanced cloud infrastructure and platform services into our existing portfolio. This will enable us to offer more robust, scalable, and secure cloud environments tailored to the specific needs of various industries.</p>
    
    <ul>
      <li>Enhanced scalability for growing businesses.</li>
      <li>Improved security protocols and compliance measures.</li>
      <li>Access to advanced analytics and machine learning tools.</li>
    </ul>

    <h3>What This Means for Our Clients</h3>
    <p>Our clients can expect a seamless transition and immediate access to these new capabilities. Our certified engineers are already trained and ready to assist in migrating and optimizing workloads on the new platform.</p>
    
    <p>We believe this partnership will empower our clients to accelerate their digital transformation journeys and achieve greater operational efficiency.</p>
  `,
  date: "October 15, 2023",
  author: "Admin",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  category: "Partnerships"
};

export function NewsArticle() {
  const { id } = useParams();
  // In a real app, you would fetch the article data based on the ID
  const article = articleData;

  return (
    <div className="flex flex-col w-full overflow-hidden pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-zinc-950 border-b border-zinc-900">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-red-900/20 blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl space-y-6"
            initial="initial"
            animate="whileInView"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 text-sm font-semibold tracking-widest text-red-500 uppercase">
              <Link to="/news" className="flex items-center hover:text-white transition-colors">
                <ChevronLeft className="h-4 w-4 mr-1" /> Back to News
              </Link>
              <span>•</span>
              <span>{article.category}</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight">
              {article.title}
            </motion.h1>
            <motion.div variants={fadeInUp} className="flex items-center gap-6 text-zinc-400 pt-4">
              <span className="flex items-center gap-2"><Calendar className="h-5 w-5" /> {article.date}</span>
              <span className="flex items-center gap-2"><User className="h-5 w-5" /> {article.author}</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="rounded-3xl overflow-hidden aspect-video bg-zinc-100 dark:bg-zinc-900 mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div 
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-red-600 hover:prose-a:text-red-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <motion.div 
              className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button asChild variant="outline" className="border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900">
                <Link to="/news">
                  <ChevronLeft className="mr-2 h-4 w-4" /> Previous Article
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900">
                <Link to="/news">
                  Next Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
