"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Contact() {

  return (
    <section id="contact" className="py-20  bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="h-full bg-gray-600 w-96">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-black">kunalssharma0802@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-black">+91 9870987366</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-black">Dharwad, India</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center  pt-6 ">
                  <div>
                    <h4 className="ont-semibold text-lg flex justify-center text-black  mb-4">
                      Follow Me
                    </h4>
                    <div className="flex justify-center gap-10">
                      <Button variant="ghost" size="icon" asChild>
                        <Link
                          href="https://github.com/Kunal-Sharma816"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <Link
                          href="https://www.linkedin.com/in/kunal-sharma-239074303/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href="kunalssharma0802@gmail.com">
                          <Mail className="h-5 w-5" />
                          <span className="sr-only">Email</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
