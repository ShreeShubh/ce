"use client"
import Header from "@/components/Header/Header"
import Services from "@/components/Services/Services"
import Link from "next/link"
import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const Page = () => {
  useEffect(() => {
    AOS.init()
  })

  return (
    <>
      <div
        className="h-[400px] md:h-[700px] bg-center bg-[url('/webBanner/banner08.jpg')] bg-cover mb-16"
        data-aos="fade-down"
      >
        <Header />
      </div>
      <div className="flex justify-end relative">
        <Link href="contact-us">
          <button className="px-6 py-3 rounded-l-xl text-white bg-ce-green text-xl fixed top-40 right-0 z-50">
            Contact Us
          </button>
        </Link>
      </div>

      <div className="-mt-24 mb-16">
        <div className="max-w-screen-xl mx-auto px-24 flex flex-col gap-6">
          <div className="flex flex-col items-center gap-3">
            <h1
              className="text-2xl sm:text-3xl lg:text-[40px] text-ce-brown text-center font-semibold z-50"
              data-aos="fade-up"
            >
              Services
            </h1>
            <div className="border-2 border-ce-red w-20 mb-2" />
          </div>
        </div>
      </div>
      <Services />
    </>
  )
}

export default Page
