import React from "react";
import SEO from "../../components/seo";
import { Button, Container } from "../../components";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="GetLinked pre Hackathon Project"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <main>
        <Hero />
      </main>
    </>
  );
}

const Hero = () => {
  return (
    <section>
      <div className="flex items-center ml-10 mr-[55px] mt-[32px]">
        <img
          src="./icons/star.png"
          className="object-cover transform translate-x-10"
        />
        <Container className="!px-4 flex justify-center lg:justify-end relative">
          <img
            src="./images/purple-lens-flare-left.svg"
            alt="purple lens flare"
            className="hidden lg:block absolute pointer-events-none lg:top-[-300px] lg:left-[-100px] mix-blend-hard-light"
          />
          <figure>
            <img
              src="./images/purple-lens-flare-left.svg"
              alt="purple lens flare"
              className="hidden lg:block absolute pointer-events-none top-[-100px] left-[600px] mix-blend-hard-light"
            />
          </figure>
          <h1 className="font-bold italic font-mon py-6 lg:text-[36px] text-white relative z-2 text-center lg:text-right">
            Igniting a Revolution in{" "}
            <span className="relative">
              HR Innovation{" "}
              <img
                src="/images/curved-line.svg"
                className="bottom-[-10px] lg:bottom-[-15px] left-[2px] absolute"
              />
            </span>
          </h1>
        </Container>
      </div>
      <div>
        <Container>
          <img
            src="./images/purple-lens-flare-left.svg"
            alt="purple lens flare"
            className="w-[616px] h-[563px] lg:hidden absolute pointer-events-none top-[-8%] left-[-8%] mix-blend-hard-light"
          />

          <h1 className="text-white font-clashbold md:text-[80px] font-semibold leading-none max-w-[597px] relatives z-20s">
            getlinked Tech Hackathon&nbsp;
            <span className="text-[#D434FE] relative inline-block text-primary">
              1.0
              <img
                src="./icons/chain.svg"
                alt="chain"
                draggable={false}
                className="inline-block mb-2 lg:mb-0 lg:absolute w-[32px] h-[32px] lg:w-auto lg:h-auto top-[5px] left-[120px]"
              />
              <img
                src="./icons/fire.svg"
                draggable={false}
                alt="chain"
                className="inline-block mb-2 lg:mb-0 lg:absolute top-[20px] w-[22px] h-[22px] lg:w-auto lg:h-auto left-[205px]"
              />
            </span>
          </h1>
          <p className="md:mt-[8px] md:text-[20px] font-normal md:leading-[33px] font-mon text-white md:max-w-[522px] ">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Link to="/register" className="relatives z-2s">
            <Button className="text-base leading-normal text-white font-mon mt-[41px]">
              Register
            </Button>
          </Link>
        </Container>
      </div>
    </section>
  );
};
