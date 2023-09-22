import React from "react";
import SEO from "../../components/seo";
import { Atom, Button, Container } from "../../components";
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
        <Intro />
        <Rules />
        <Judging />
      </main>
    </>
  );
}

const Hero = () => {
  return (
    <>
      <Container className="!px-4 flex items-center justify-center lg:justify-end relative">
        <img
          src="./icons/star.png"
          className="object-cover transform -translate-x-[650px]"
        />
        <img
          src="/images/purple-lens-flare-left.svg"
          alt="purple lens flare"
          className="hidden lg:block absolute pointer-events-none lg:top-[-300px] lg:left-[-100px] mix-blend-hard-light"
        />
        <img
          src="/images/purple-lens-flare-left.svg"
          alt="purple lens flare"
          className="hidden lg:block absolute pointer-events-none top-[-100px] left-[600px] mix-blend-hard-light"
        />
        <h1 className="font-bold italic py-6 lg:text-[36px] font-mon text-white relative z-2 text-center lg:text-right">
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
      <div className="border-b-[1px] border-[#ffffff2e]">
        <Container className="grid lg:grid-cols-2 pt-8 lg:pt-24 !px-0 lg:!pl-12">
          <header className="grid place-items-center lg:place-items-start px-[30px] lg:px-0 lg:flex flex-col gap-5 pb-8">
            <img
              src="/images/purple-lens-flare-left.svg"
              alt="purple lens flare"
              className="w-[616px] h-[563px] lg:hidden absolute pointer-events-none top-[-8%] left-[-8%] mix-blend-hard-light"
            />
            <div className="grid place-items-center text-center font-clashbold lg:text-left lg:block text-white text-[32px] lg:text-[80px] font-bold lg:leading-[98px] relative z-2">
              <h1>getlinked Tech</h1>
              <h1>
                Hackathon&nbsp;
                <span className="relative text-[#D434FE] inline-block text-primary">
                  1.0
                  <img
                    src="/icons/chain.svg"
                    alt="chain"
                    className="inline-block mb-2 lg:mb-0 lg:absolute w-[32px] h-[32px] lg:w-auto lg:h-auto top-[5px] left-[120px]"
                  />
                  <img
                    src="/icons/fire.svg"
                    alt="chain"
                    className="inline-block mb-2 lg:mb-0 lg:absolute top-[20px] w-[22px] h-[22px] lg:w-auto lg:h-auto left-[205px]"
                  />
                </span>
              </h1>
            </div>
            <p className="text-[13px] lg:text-[20px] lg:mb-5 font-mon text-white text-center lg:text-left max-w-[264px] lg:max-w-[522px] relative z-2">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <Link to="/register" className="relative z-2">
              <Button className="text-base font-normal leading-normal font-mon">
                Register
              </Button>
            </Link>
            <div className="relative flex gap-4 pt-5 text-white lg:gap-6 z-2">
              <div className="flex">
                <h1 className="font-uni text-[48px] lg:text-[64px]">00</h1>
                <span className="text-[14px] font-mon pb-2 lg:pb-4 inline-block self-end mb-2">
                  H
                </span>
              </div>
              <div className="flex">
                <h1 className="font-uni text-[48px] lg:text-[64px]">00</h1>
                <span className="text-[14px] font-mon pb-2 lg:pb-4 inline-block self-end mb-2">
                  M
                </span>
              </div>
              <div className="flex">
                <h1 className="font-uni text-[48px] lg:text-[64px]">00</h1>
                <span className="text-[14px] font-mon pb-2 lg:pb-4 inline-block self-end mb-2">
                  S
                </span>
              </div>
            </div>
          </header>
          <figure className="relative overflow-y-hidden">
            <img src="/images/planet.svg" alt="Planet" className="absolute" />
            <img
              src="/images/man-vr.svg"
              alt="Man - Virtual Reality"
              className="w-full h-full overflow-hidden px-7"
            />
          </figure>
        </Container>
      </div>
    </>
  );
};

const Intro = () => {
  return (
    <>
      <Container className="mt-[30px] px-[77px] flex flex-col items-center justify-between md:mt-[90px] lg:mt-[193px] pb-4 md:pb-10 md:space-x-[50px] lg:space-x-[100px] md:flex md:flex-row md:justify-center">
        <figure>
          <img
            src="./images/bigidea.svg"
            alt="idea💡"
            className="object-cover"
            draggable={false}
          />
        </figure>
        <div className="mt-12 md:mt-0">
          <h3 className="text-[20px] mx-auto md:mx-0 leading-[26.6px] text-center max-w-[249px] text-white font-clashbold md:leading-[27px] md:text-[22px] font-semibold lg:text-[32px] md:max-w-[500px] md:text-left lg:max-w-[398px]">
            Introduction to getlinked{" "}
            <span className="text-[#D434FE]">tech Hackathon 1.0</span>
          </h3>
          <p className="text-xs mt-2 leading-[27.5px] max-w-[321px] text-center font-normal font-mon text-white md:mt-4 md:leading-[27.5px] md:text-sm md:text-left md:max-w-[535px]">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </Container>
      <div className="w-full h-[1px] bg-line"></div>
    </>
  );
};

const Rules = () => {
  return (
    <>
      <Atom className="flex-col-reverse mt-0">
        <div className="relative mt-12 md:mt-0">
          <img
            src="./images/purple-lens-flare-left.svg"
            alt="purple lens flare"
            className="w- absolute w-[1037px] h-[948px] pointer-events-none top-[-420px] left-[20px] mix-blend-hard-light hidden lg:block"
          />

          <h3 className="text-[20px] mx-auto md:mx-0 leading-[26.6px] text-center max-w-[249px] text-white font-clashbold md:leading-[27px] md:text-[22px] font-semibold lg:text-[32px] md:max-w-[500px] md:text-left lg:leading-[1] lg:max-w-[170px]">
            Rules and {""}
            <span className="text-[#D434FE]">Guildlines</span>
          </h3>
          <p className="text-xs mt-2 leading-[27.5px] max-w-[321px] text-center font-normal font-mon text-white md:mt-4 md:leading-[27.5px] md:text-sm md:text-left md:max-w-[535px]">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        <figure className="relative">
          <img
            src="./images/rules.svg"
            alt="Rules and Guidelines"
            className="relative z-20"
          />
          <img
            src="./images/purple-lens-flare-left.svg"
            alt="purple lens flare"
            className="w- absolute w-[1037px]h-[948px] pointer-events-none top-[20px] right-[-350px] mix-blend-hard-light hidden lg:block"
          />
        </figure>
      </Atom>
      <div className="w-full h-[1px] bg-line"></div>
    </>
  );
};

const Judging = () => {
  return (
    <>
      <Atom className={`pb-3 md:p-10`}>
        <figure className="relative flex items-center">
          <img
            src="/images/attributes.svg"
            alt="Judging Criteria Key attributes"
            className="relative z-2"
          />
          <img
            src="/images/purple-lens-flare-left.svg"
            alt="purple lens flare"
            className="absolute w-[1037px]h-[948px] pointer-events-none top-[-150px] lg:top-[150px] left-[-100px] mix-blend-hard-light  lg:block"
          />
        </figure>
        <div className="mt-12 md:mt-0">
          <h3 className="text-[20px] mx-auto md:mx-0 leading-[26.6px] text-center max-w-[249px] text-white font-clashbold md:leading-[27px] md:text-[22px] font-semibold lg:text-[32px] md:max-w-[500px] md:text-left lg:max-w-[267px]">
            Judging Criteria{" "}
            <span className="text-[#D434FE]">Key attributes</span>
          </h3>
          <p className="text-xs mt-2 leading-[27.5px] max-w-[321px] text-center font-normal font-mon text-white md:mt-5 md:leading-[27.5px] md:text-sm md:text-left md:max-w-[533px]">
            <span className="text-[#FF26B9] font-bold">
              Innovation and Creativity:
            </span>{" "}
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
          <p className="text-xs mt-2 leading-[27.5px] max-w-[321px] text-center font-normal font-mon text-white md:mt-5 md:leading-[27.5px] md:text-sm md:text-left md:max-w-[533px]">
            <span className="text-[#FF26B9] font-bold"> Functionality:</span>{" "}
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </p>
          <p className="text-xs mt-2 leading-[27.5px] max-w-[321px] text-center font-normal font-mon text-white md:mt-5 md:leading-[27.5px] md:text-sm md:text-left md:max-w-[533px]">
            <span className="text-[#FF26B9] font-bold">
              Impact and Relevance:
            </span>{" "}
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
          <p className="text-xs mt-2 leading-[27.5px] max-w-[321px] text-center font-normal font-mon text-white md:mt-5 md:leading-[27.5px] md:text-sm md:text-left md:max-w-[533px]">
            <span className="text-[#FF26B9] font-bold">
              Technical Complexity:
            </span>{" "}
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>
          <p className="text-xs mt-2 leading-[27.5px] max-w-[321px] text-center font-normal font-mon text-white md:mt-5 md:leading-[27.5px] md:text-sm md:text-left md:max-w-[533px]">
            <span className="text-[#FF26B9] font-bold">
              Adherence to Hackathon Rules:
            </span>{" "}
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </p>
          <Button className="mt-12">Read More</Button>
        </div>
      </Atom>
      <div className="w-full h-[1px] bg-line"></div>
    </>
  );
};
