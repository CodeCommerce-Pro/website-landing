import React from "react"
import logo from "./logo.svg"
import company from "./company.svg"
import FloatingBlock from "./components/FloatingBlock"
import "./App.css"
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { TelegramIcon, Linkedin01Icon } from "hugeicons-react";
import { Link } from "react-router"

function App() {
  
  const onLetsTalk = () => {
    window.open("https://t.me/Sofia_Leuszewa");
  }
  
  return (
    <div className="w-full ">
      <div className="flex flex-col w-auto">
        <div className="w-full  bg-ccp-pink px-ccp">
          <div className="w-full  ">
            <div className="flex flex-col items-start h-20 md:h-28 py-8">
              <div className="flex flex-row h-9 md:h-12 gap-4">
                <div className="flex w-9 md:w-12">
                  <img src={logo} alt="codecommerce-pro logo" />
                </div>
                <div className="flex h-full">
                  <img src={company} className="aspect-[371/100] h-full" alt="codecommerce-pro" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-full  pt-[25px] pb-[70px]">
            <div className="absolute lg:left-64 overflow-hidden right-0 opacity-10 top-14  w-[328px] h-[328px] md:w-[584px] md:h-[584px] lg:w-[866px] lg:h-[866px]">
              <img className="absolute left-[calc(10%)] lg:left-0 w-full h-full" src={logo} alt="codecommerce-pro logo" />
            </div>
            <div className="flex flex-col space-y-[80px]  md:pt-32">
              <div className="text-white text-3xl md:text-ccp5xl lg:max-w-[768px]">
                <p>Customer loyalty isn't luck.
                  It's tech, built right.</p>
              </div>
              <div className="w-full md:w-fit">
                <button className="px-8 py-5 text-lg bg-white rounded-[500px] leading-tight w-full"
                            onClick={onLetsTalk}>
                  Let's talk
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-red  px-ccp py-14 md:py-44 space-y-6 md:space-y-14 text-left">
          <p className="text-xl md:text-3xl text-ccp-pink font-bold  text-wrap">
            From browsing to buying—we build the tech that turns shoppers into loyal customers
          </p>
          <div className="flex flex-col lg:flex-row lg:space-x-10">
            <FloatingBlock>
              <p className="text-ccp-pink text-xl ">PULSE</p>
              <p className="text-smcpp">
                We are a new-generation technology partner built for the modern eCommerce and affiliate landscape. Agile, focused, and innovation-led, we deliver performance-driven solutions that help brands scale faster, monetize smarter, and create frictionless customer experiences.
              </p>
            </FloatingBlock>
            <FloatingBlock>
              <p className="text-ccp-pink text-xl">POWER</p>
              <p className="text-smcpp">
                Our products are designed for impact—from custom browser extensions and cashback platforms to loyalty systems, coupon engines, deal aggregators, and price comparison tools. Every solution is built to be secure, scalable, and strategically aligned with business goals.
              </p>
            </FloatingBlock>
            <FloatingBlock>
              <p className="text-ccp-pink text-xl">IMPACT</p>
              <p className="text-smcpp">
                Our mission is simple: help businesses attract, convert, and retain customers through smarter technology. Whether you're expanding affiliate revenue or building next-gen shopping experiences, we provide the infrastructure to turn ambition into outcomes.
              </p>
            </FloatingBlock>
          </div>

        </div>
        <div className="bg-ccp-light-pink w-full px-ccp  py-14 md:py-44  ">
          <div className="flex flex-col md:flex-row  justify-center items-baseline space-y-10 md:space-x-20">
            <p className="text-lgcpp md:text-3xl text-ccp-pink font-bold   text-wrap">
              Let’s connect and explore how our tailored tech solutions can accelerate your conversion success          </p>
            <button className="px-8 py-5 text-lg bg-ccp-pink text-white rounded-[500px] leading-tight text-nowrap"
            onClick={onLetsTalk}>
              Let's talk
            </button>
          </div>
        </div>
        <div id="footer" className="bg-ccp-pink py-16 md:py-8 px-ccp">
          <div className="flex flex-col items-start h-20 md:h-28">
            <div className="flex flex-row h-8 md:h-11 gap-4">
              <div className="flex w-8 md:w-11">
                <img src={logo} alt="codecommerce-pro logo" />
              </div>
              <div className="flex h-full">
                <img src={company} className="aspect-[371/100] h-full" alt="codecommerce-pro" />
              </div>
            </div>
          </div>
          <div id="contactStrip" className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col text-white space-y-2">
                <Link
                className="flex flex-row"
                to="#"
                onClick={(e) => {
                  window.location.href = "mailto:hello@codecommerce.pro";
                  e.preventDefault()
                }}>
              <div className="flex flex-row space-x-1 items-center">
                <EnvelopeIcon className="h-4 w-4 align-text-bottom" />
                <p>
                  hello@codecommerce.pro
                </p>
              </div>
                </Link>
                <Link
                to="https://t.me/Sofia_Leuszewa"
                >
              <div className="flex flex-row  space-x-1 items-center">
                
                <TelegramIcon className="h-4 w-4 align-text-bottom" />
                <p>
                  +44 7749 738222
                </p>
              </div>
                </Link>
                <Link
                to="#"
                onClick={(e) => {
                  window.location.href = "phoneto:+35797459880"
                  e.preventDefault()
                }}
                >
                  <div className="flex flex-row  space-x-1 items-center">
                <PhoneIcon className="h-4 w-4 align-text-bottom" />
                <p>
                  +357 97 459880
                </p>
              </div>
                </Link>
            </div>
            <div className="flex flex-col py-8 items-end text-right space-y-2 text-white text-sm">
              <Link
              to="https://www.linkedin.com/company/codecommerce-pro"
              >
              <Linkedin01Icon className="w-6" />
              </Link>
              <div className="opacity-50">
                <p>
                  CodeCommerce Pro
                </p>
                <p>
                  © 2025 All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
