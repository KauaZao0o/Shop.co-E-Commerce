/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/app/_components/ui/button";
import BrandSection from "@/app/_components/BrandSection";
import CategoryCard from "@/app/_components/CategoryCard";
import TestimonialCarousel from "@/app/_components/TestimonialsCarousel";
import SignUpBanner from "@/app/_components/Sign-upBanner";
import Navbar from "@/app/_components/Navbar";
import Newsletter from "@/app/_components/NewsletterSection";
import TopSelling from "./_components/TopSellingSection";
import NewArrivals from "./_components/NewArrivals";

export default function Home() {
  return (
    <div>
      <SignUpBanner />
      <Navbar />

      <main className="flex-1">
      {/* Hero Banner */}
      <section className="relative bg-[url(/casal-da-moda-posando-foto-inteira.png)] bg-contain bg-right bg-no-repeat bg-[#F2F0F1] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
            {/* Conteúdo do Banner (Texto e Botão) */}
            <div className="space-y-6">
              <h1 className="text-3xl font-integralcf-bold tracking-tight text-black md:text-5xl">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="text-gray-600 md:text-lg font-satoshi-regular">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater
                to your sense of style.
              </p>
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 font-satoshi-medium rounded-full"
              >
                Shop Now
              </Button>

              {/* Estatísticas */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-gray-200">
                <div className="text-center">
                  <h2 className="text-2xl font-satoshi-bold text-black">200+</h2>
                  <p className="text-sm text-muted-foreground font-satoshi-regular">
                    International Brands
                  </p>
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-satoshi-bold text-black">2,000+</h2>
                  <p className="text-sm text-muted-foreground font-satoshi-regular">
                    High-Quality Products
                  </p>
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-satoshi-bold text-black">30,000+</h2>
                  <p className="text-sm text-muted-foreground font-satoshi-regular">
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>

            {/* Espaço para a imagem de fundo (mantido à direita) */}
            <div className="relative">
              <div className="absolute -top-6 left-10 w-12 h-12 rounded-full transform">
                {/* <img src="/vector-direita.svg" alt="" /> */}
              </div>
              <div className="absolute bottom-20 -right-10 w-20 h-20 rounded-full transform">
                {/* <img src="/vector-esquerda.svg" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Brand Section */}
        <BrandSection />

        {/* New Arrivals */}
        <NewArrivals />

        {/* Top Selling */}
        <TopSelling />


{/* Browse by Dress Style */}
<section className="dress-style-section py-20 bg-gray-50 text-center">
  <div className="dress-style-container bg-[#F0F0F0] rounded-[20px] p-2 mx-auto max-w-7xl shadow-lg">
    <h2 className="text-2xl text-black font-integralcf-bold mb-8 md:text-3xl">
      BROWSE BY DRESS STYLE
    </h2>

    <div className="dress-style-grid grid grid-cols-2 gap-4">
      {/* Casual */}
      <Link href="/casual" className="dress-style-card casual flex justify-center items-center rounded-lg">
        <img
          src="/DressStyles/casual.png"
          alt="Casual"
          className="w-[55%] h-full object-cover rounded-lg"
        />
      </Link>

      {/* Formal */}
      <Link href="/formal" className="dress-style-card formal flex justify-center items-center rounded-lg">
        <img
          src="/DressStyles/formal.png"
          alt="Formal"
          className="w-[95%] h-full ml-[-46%] object-cover rounded-lg"
        />
      </Link>

      {/* Party */}
      <Link href="/party" className="dress-style-card party flex justify-center items-center rounded-lg">
        <img
          src="/DressStyles/party.png"
          alt="Party"
          className="w-[95%] h-[80%] ml-[31%] object-cover rounded-lg"
        />
      </Link>

      {/* Gym */}
      <Link href="/gym" className="dress-style-card gym flex justify-center items-center rounded-lg">
        <img
          src="/DressStyles/gym.png"
          alt="Gym"
          className="w-[64%] h-[80%] mr-[15%] object-cover rounded-lg"
        />
      </Link>
    </div>
  </div>
</section>


        {/* Testimonials */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl text-black font-bold md:text-3xl">
                OUR HAPPY CUSTOMERS
              </h2>
            </div>

            <TestimonialCarousel />
          </div>
        </section>

        {/* Newsletter */}
        <Newsletter />
      </main>

      <footer className="bg-gray-100">
        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <div className="md:col-span-2">
              <h3 className="text-xl font-integralcf-bold mb-4 text-black">SHOP.CO</h3>
              <p className="text-gray-600 mb-6 font-satoshi-regular">
                We have clothes that suits your style and which you&apos;re
                proud to wear. From women to men.
              </p>
              <div className="flex space-x-4">
                {/* Social Icons */}
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#000"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#000"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="hover:fill-white"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#000"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#000"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Seções à esquerda (Company, Help, FAQ) */}
              <div className="flex flex-col md:flex-row">
                {/* Company */}
                <div className="mr-24">
                  <h3 className="text-lg font-bold mb-4 text-black font-satoshi-medium">COMPANY</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-gray-600 hover:text-black font-satoshi-regular">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-600 hover:text-black font-satoshi-regular">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-600 hover:text-black font-satoshi-regular">
                        Works
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-600 hover:text-black font-satoshi-regular">
                        Career
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Help */}
                <div className="mr-24">
                  <h3 className="text-lg font-bold mb-4 text-black font-satoshi-medium">HELP</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-gray-600 hover:text-black font-satoshi-regular">
                        Customer Support
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-600 hover:text-black font-satoshi-regular">
                        Delivery Details
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-600 hover:text-black font-satoshi-regular">
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-600 hover:text-black font-satoshi-regular">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* FAQ */}
                <div className="mr-24">
                  <h3 className="text-lg font-bold mb-4 text-black font-satoshi-medium">FAQ</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-gray-600 hover:text-black font-satoshi-regular">
                        Account
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-600 hover:text-black font-satoshi-regular">
                        Manage Deliveries
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-600 hover:text-black font-satoshi-regular">
                        Orders
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-600 hover:text-black font-satoshi-Regular">
                        Payment
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Resources (à direita) */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-black font-satoshi-medium">RESOURCES</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-black font-satoshi-regular">
                      Free eBooks
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-black font-satoshi-regular">
                      Development Tutorial
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-black font-satoshi-regular">
                      How to - Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 hover:text-black font-satoshi-regular">
                      Youtube Playlist
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 mb-4 md:mb-0">
                Shop.co © 2000-2023, All Rights Reserved
              </p>
              <div className="flex space-x-4">
                <Image src="/Cards/visa.png" alt="Visa" width={40} height={30} />
                <Image
                  src="/Cards/master.png"
                  alt="MasterCard"
                  width={40}
                  height={30}
                />
                <Image src="/Cards/paypal.png" alt="PayPal" width={40} height={30} />
                <Image src="/Cards/apple.png" alt="ApplePay" width={40} height={30} />
                <Image src="/Cards/gpay.png" alt="GooglePay" width={40} height={30} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}