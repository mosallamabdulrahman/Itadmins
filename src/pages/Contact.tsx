import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export function Contact() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Header Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="space-y-4 mb-16">
          <h1 className="text-sm font-semibold tracking-wider text-red-700 uppercase">IT ADMINZ Smart Solution</h1>
          <h2 className="text-4xl sm:text-5xl font-bold text-red-700">Get In Touch</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold tracking-wider text-red-700 uppercase">Get In Touch</h3>
              <h4 className="text-3xl font-bold text-zinc-900 dark:text-white">Let's help you</h4>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-medium text-red-700">Full Name</label>
                  <input 
                    type="text" 
                    id="fullName" 
                    className="w-full px-4 py-3 rounded-md bg-zinc-50 dark:bg-zinc-900 border-none focus:ring-2 focus:ring-red-700 text-zinc-900 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-red-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-md bg-zinc-50 dark:bg-zinc-900 border-none focus:ring-2 focus:ring-red-700 text-zinc-900 dark:text-white"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="mobile" className="text-sm font-medium text-red-700">Mobile</label>
                <input 
                  type="tel" 
                  id="mobile" 
                  className="w-full px-4 py-3 rounded-md bg-zinc-50 dark:bg-zinc-900 border-none focus:ring-2 focus:ring-red-700 text-zinc-900 dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-red-700">Message</label>
                <textarea 
                  id="message" 
                  rows={6}
                  className="w-full px-4 py-3 rounded-md bg-zinc-50 dark:bg-zinc-900 border-none focus:ring-2 focus:ring-red-700 text-zinc-900 dark:text-white resize-none"
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full">
                Get Free Consultation
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 lg:pl-12">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold tracking-wider text-red-700 uppercase">Contact Us</h3>
              <h4 className="text-3xl font-bold text-zinc-900 dark:text-white">Catch us for help</h4>
            </div>

            <div className="space-y-8 pt-4">
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-700 text-white shadow-md">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-red-700">Phone Number</p>
                  <p className="text-lg font-semibold text-zinc-900 dark:text-white">0114 220 266 7</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-700 text-white shadow-md">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-red-700">Email Address</p>
                  <p className="text-lg font-semibold text-zinc-900 dark:text-white">info@itadminz.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-700 text-white shadow-md">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-red-700">Address</p>
                  <p className="text-lg font-semibold text-zinc-900 dark:text-white leading-relaxed">
                    9h/5 Taqseem EL-Laselky, EL-Nasr St.,<br />
                    Maadi, Cairo - Egypt
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Button size="lg" className="w-full sm:w-auto rounded-full px-8 gap-2">
                  Get Right Direction <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[500px] bg-zinc-100 dark:bg-zinc-900 relative">
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
          alt="Map" 
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-zinc-950 via-transparent to-transparent"></div>
      </section>
    </div>
  );
}
