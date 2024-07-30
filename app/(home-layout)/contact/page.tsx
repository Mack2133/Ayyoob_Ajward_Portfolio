"use client"

import { SubmitHandler, set, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import "./contact.css"
import { Toaster, toast } from 'sonner'
import emailjs from '@emailjs/browser';
import SocialMediaIcons from "@/components/social-media-handles";
import { Separator } from "@/components/ui/separator";

export default function ContactPage() {

  const [emailStatus, setEmailStatus] = useState<string | null>(null);

  useEffect(() => {
    if (emailStatus === "success") {
      toast.success('Email sent successfully')
    }

    if (emailStatus === "error") {
      toast.error('Error sending email')
    }
  }, [emailStatus]);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "Hi there! I would like to know more about you.",
    },
  });

  const onSubmit : SubmitHandler <IFormInput> =async (data: any) => {

    const serviceId = "service_4g9e03l";
    const templateId = "template_bijdsdj";
    const publicKey = "kFg-904JjLdAhpCr8";

    const templateParams = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setEmailStatus("success");
      setTimeout(() => {
        setEmailStatus(null);
      },3000)
    } catch (error) {
      setEmailStatus("error");
      console.error("Error sending email:", error);
    }
    
  };

  return (
    <div className="pt-12 w-full" >
      <div className="self-start pb-6 max-sm:pb-2">
        <h1 className="text-3xl font-bold text-zinc-100">Contact Me </h1>
      </div>
      <div className="w-full border-none rounded-lg bg-none md:border-zinc-800 md:w-[650px] backdrop:blur-md opacity-85 md:border-1 ">
        <form onSubmit={handleSubmit(onSubmit)} >
          <Toaster 
          position="top-right"
          />
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-lg font-medium text-zinc-400"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              // name="name"
              className="w-full px-4 py-2 border rounded-md bg-zinc-800 focus:outline-none focus:ring-zinc-700 focus:border-zinc-700"
              {...register("name", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-zinc-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              // name="email"
              className="w-full px-4 py-2 border rounded-md bg-zinc-800 focus:outline-none focus:ring-zinc-700 focus:border-zinc-700"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+\.\S+$/i,
              })}
            />
            {errors.email && (
              <p className="text-red-400">Please enter a valid email address</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block mb-2 text-lg font-medium text-zinc-400"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              // name="phone"
              className="w-full px-4 py-2 border rounded-md autofill:bg-zinc-800 bg-zinc-800 focus:outline-none focus:ring-zinc-700 focus:border-zinc-700"
              {...register("phone", {
                required: true,
                pattern: /^(?:0|\d{10})$/,
              })}
            />
            {errors.phone && (
              <p className="text-red-400 ">Please enter a valid phone number</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 text-lg font-medium text-zinc-400"
            >
              Message
            </label>
            <textarea
              id="message"
              // name="message" // 
              rows={8}
              className="w-full px-4 py-2 border rounded-md bg-zinc-800 autofill:bg-zinc-800 focus:outline-none focus:ring-zinc-700 focus:border-zinc-700"
              {...register("message")}
            ></textarea>
          </div>
          <Button
            disabled={isSubmitting}
            type="submit"
            className="w-full px-5"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
      {/* <hr className="w-full px-5 mt-5 border md:hidden border-zinc-700"/> */}
      <div className="w-full h-5 flex items-center justify-center pt-7">
        <Separator className="w-full bg-zinc-700"/>
      </div>
      <div className="flex flex-col w-full py-5">
        <SocialMediaIcons />
      </div>
    </div>
  );
}
