import React from "react"
import logo from "./logo.svg"
import company from "./company.svg"
import FloatingBlock from "./components/FloatingBlock"
import "./App.css"

function App() {
  return (
    <div className="w-full">
      <div className="flex flex-col w-auto">
        <div className="w-full  bg-ccp-pink">
          <div className="w-full ">
            <div className="flex flex-col items-start h-28 gap-2.5 py-8 px-36">
              <div className="flex flex-row h-12 gap-2.5">
                <div className="flex w-12">
                  <img src={logo} alt="codecommerce-pro logo" />
                </div>
                <div className="flex ">
                  <img src={company} alt="codecommerce-pro" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full px-40 pb-20 space-y-28">
            <div className="absolute opacity-10 w-[866px] h-[866px] top-[105px] left-[262px] right-auto bottom-auto">
              <img className="w-full h-full" src={logo} alt="codecommerce-pro logo" />
            </div>

            <div className="text-white  text-6xl">
              <p className="">Customer loyalty isn't luck.</p>
              <p>It's tech, built right.</p>
            </div>
            <div className="">
              <button className="px-8 py-5 text-lg bg-white rounded-[500px] leading-tight">
                Let's talk
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-red px-40 pt-44 pb-48 space-y-14 text-left">
          <p className="text-3xl text-ccp-pink font-bold  text-wrap">
            From browsing to buying—we build the tech that turns shoppers into loyal customers
          </p>
          <div className="flex flex-row space-x-10">
            <FloatingBlock>
              <p className="text-ccp-pink text-xl ">PULSE</p>
              <p>
                We are a new-generation technology partner built for the modern eCommerce and affiliate landscape. Agile, focused, and innovation-led, we deliver performance-driven solutions that help brands scale faster, monetize smarter, and create frictionless customer experiences.
              </p>
            </FloatingBlock>
            <FloatingBlock>
              <p className="text-ccp-pink text-xl">POWER</p>
              <p>
                Our products are designed for impact—from custom browser extensions and cashback platforms to loyalty systems, coupon engines, deal aggregators, and price comparison tools. Every solution is built to be secure, scalable, and strategically aligned with business goals.
              </p>
            </FloatingBlock>
            <FloatingBlock>
              <p className="text-ccp-pink text-xl">IMPACT</p>
              <p>
                Our mission is simple: help businesses attract, convert, and retain customers through smarter technology. Whether you're expanding affiliate revenue or building next-gen shopping experiences, we provide the infrastructure to turn ambition into outcomes.
              </p>
            </FloatingBlock>
          </div>

        </div>
        <div className="bg-ccp-light-pink w-full px-40 pt-44 pb-48 ">
          <div className="flex flex-row items-center justify-center space-x-20">


            <p className="text-3xl text-ccp-pink font-bold  text-wrap">
              Let’s connect and explore how our tailored tech solutions can accelerate your conversion success          </p>

            <button className="px-8 py-5 text-lg bg-ccp-pink text-white rounded-[500px] leading-tight text-nowrap">
              Let's talk
            </button>
          </div>
        </div>
        <div id="footer" className="bg-ccp-pink py-8 px-36">
          <div className="flex flex-col items-start h-28 gap-2.5 ">
            <div className="flex flex-row h-12 gap-2.5">
              <div className="flex w-12">
                <img src={logo} alt="codecommerce-pro logo" />
              </div>
              <div className="flex ">
                <img src={company} alt="codecommerce-pro" />
              </div>
            </div>
          </div>
          <div id="contactStrip" className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p>
                hello@codecommerce.pro
              </p>
              <p>
                +44 7749 738222
              </p>
              <p>
                +357 97 459880
              </p>
            </div>
          <div>
            <p>
              CodeCommerce Pro </p><p>
 © 2025 All Rights Reserved
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
