"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center space-y-6 p-8 bg-secondary/30 rounded-2xl border border-border"
      >
        <div className="flex justify-center">
          <CheckCircle className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-3xl font-bold font-display">Message Sent!</h1>
        <p className="text-muted-foreground">
          Thanks for reaching out, Gabriel will get back to you soon to talk about your music project.
        </p>
        <Link 
          href="/" 
          className="inline-block w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}