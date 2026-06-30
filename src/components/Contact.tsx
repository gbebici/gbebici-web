"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import formSchema from "@/lib/validations/form";
import type { FormSchemaData } from "@/lib/validations/form";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";

// [Mantido idêntico conforme solicitado]
const WhatsAppIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Contact = () => {
  const router = useRouter();
  const form = useForm<FormSchemaData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: FormSchemaData) => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({ event: "form_submission", formType: "contact_form", timestamp: new Date().toISOString() });
    }
    try {
      const response = await fetch(`/api/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.status === 429) {
        router.push('/rate-limit');
        toast.error("You've reached the limit. Please try WhatsApp.");
        form.reset();
        return;
      }
      if (response.ok) {
        router.push('/thank-you');
        form.reset();
      } else {
        toast.error("Failed to send message. Please try WhatsApp.");
      }
    } catch {
      toast.error("An error occurred. Please try WhatsApp.");
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Gabriel, I'd like to talk about my music project!");
    window.open(`https://wa.me/5527995096289?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="min-h-dvh flex flex-col justify-center py-8 px-4 sm:px-6 relative">
      <div className="absolute top-10 right-0 overflow-hidden pointer-events-none select-none z-0">
        <span className="font-display text-[25vw] font-extrabold text-foreground/[0.015] leading-none">
          LET'S
        </span>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 md:mb-12">
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase text-primary mb-2">Let's Connect</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold">
            START YOUR<br /> <span className="text-muted-foreground">PROJECT</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
          {/* WhatsApp CTA */}
          <div className="flex flex-col h-full">
            <div className="p-6 md:p-8 bg-secondary/30 rounded-lg text-center h-full flex flex-col justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                <WhatsAppIcon />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quick Chat</h3>
              <p className="text-xs text-muted-foreground mb-6">Direct line for faster responses</p>
              <button onClick={handleWhatsAppClick} className="btn-whatsapp w-full text-xs md:text-sm py-3 px-4 flex items-center justify-center gap-2">
                <WhatsAppIcon /> Let's talk about your demo
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8 bg-secondary/30 rounded-lg space-y-4">
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-mono text-[10px] uppercase">Name</FormLabel>
                  <FormControl>
                    <input {...field} className="w-full px-3 py-2 bg-background/50 rounded text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="Your name" />
                  </FormControl>
                </FormItem>
              )} />
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-mono text-[10px] uppercase">Email</FormLabel>
                  <FormControl>
                    <input {...field} type="email" className="w-full px-3 py-2 bg-background/50 rounded text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="example@email.com" />
                  </FormControl>
                </FormItem>
              )} />
              <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-mono text-[10px] uppercase">Details</FormLabel>
                  <FormControl>
                    <textarea {...field} rows={3} className="w-full px-3 py-2 bg-background/50 rounded text-sm focus:ring-1 focus:ring-primary outline-none resize-none" placeholder="Tell me about your project..." />
                  </FormControl>
                </FormItem>
              )} />
              <button type="submit" disabled={isSubmitting} className="w-full btn-premium py-3 text-sm flex items-center justify-center gap-2">
                {isSubmitting ? "Sending..." : <><Send className="w-3 h-3" /> Send Message</>}
              </button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;