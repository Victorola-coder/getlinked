import React from "react";
import SEO from "../../components/seo";
import { Atom, Button, Container } from "../../components";
import { Disclosure, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { faqsData } from "../../data/data";
import Timeline from "./timeline";

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
        <Faqs />
        <Timeline />
        <Prizes />
        <Partners />
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
              draggable={false}
              className="w-[616px] h-[563px] lg:hidden absolute pointer-events-none top-[-8%] left-[-8%] mix-blend-hard-light"
            />
            <div className="grid place-items-center text-center font-clashbold lg:text-left lg:block text-white text-[32px] lg:text-[80px] font-bold lg:leading-[98px] relative z-2">
              <h1>getlinked Tech</h1>
              <h1>
                Hackathon&nbsp;
                <span className="relative text-[#D434FE] inline-block">
                  1.0
                  <img
                    src="/icons/chain.svg"
                    alt="chain"
                    draggable={false}
                    className="inline-block mb-2 lg:mb-0 lg:absolute w-[32px] h-[32px] lg:w-auto lg:h-auto top-[5px] left-[120px]"
                  />
                  <img
                    src="/icons/fire.svg"
                    alt="fire"
                    draggable={false}
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
            <img
              src="/images/planet.svg"
              draggable={false}
              alt="Planet"
              className="absolute"
            />
            <img
              src="/images/man-vr.svg"
              alt="Man - Virtual Reality"
              draggable={false}
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
            draggable={false}
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
            draggable={false}
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
      <Atom className={`md:items-start pb-3 md:p-10`}>
        <figure className="relative flex items-center">
          <img
            src="/images/attributes.svg"
            alt="Judging Criteria Key attributes"
            className="relative z-2"
            draggable={false}
          />
          <img
            src="/images/purple-lens-flare-left.svg"
            alt="purple lens flare"
            className="absolute w-[1037px]h-[948px] pointer-events-none top-[-150px] lg:top-[150px] left-[-100px] mix-blend-hard-light  lg:block"
          />
        </figure>
        <div className="mt-12 md:mt-0">
          <h3 className="text-[20px] mx-auto md:mx-0 leading-[26.6px] text-center max-w-[249px] text-white font-clashbold md:leading-[27px] md:text-[22px] lg:leading-[1] font-semibold lg:text-[32px] md:max-w-[500px] md:text-left lg:max-w-[267px]">
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
          <Button className="block mx-auto md:mx-0 mt-2 w-[172px] md:mt-12 text-[12px] font-mon ">
            Read More
          </Button>
        </div>
      </Atom>
      <div className="w-full h-[1px] bg-line"></div>
    </>
  );
};

const Faqs = () => {
  return (
    <>
      <Atom>
        <div className="flex gap-[24px] pb-14 flex-col lg:flex-row">
          <div className="w-full lg:max-w-[427px] pt-24">
            <header className="relative grid text-center text-white pb-14 lg:block lg:text-left">
              <h1 className="relative z-2 text-[32px] font-clashbold font-bold">
                Frequently Ask <span className="text-[#D434FE]">Question</span>
              </h1>

              <p className="pt-2 font-mon mx-auto block lg:mx-0 leading-[27.5px] max-w-[342px] text-[14px]">
                We got answers to the questions that you might want to ask about
                getlinked Hackathon 1.0
              </p>
            </header>
            <div>
              {faqsData.map((faq) => (
                <Disclosure key={faq.id}>
                  {({ open }) => (
                    <div className="mb-5">
                      <Disclosure.Button className="flex w-full  justify-between border-b-[1px] border-[#D434FE] py-2 text-left">
                        <span className="text-white font-mon leading-[27.5px] max-w-[390px] text-[14px]">
                          {faq.title}
                        </span>
                        <span
                          className={`self-end  ${
                            open ? "rotate-180" : "-rotate-180"
                          } transition text-[#D434FE]`}
                        >
                          {open ? (
                            <span className="text-[#D434FE] font-mon !text-[28px] font-normal leading-[27.5px]">
                              {" "}
                              -
                            </span>
                          ) : (
                            <span className="text-[#D434FE] font-mon !text-[20px] font-normal leading-[27.5px]">
                              {" "}
                              +
                            </span>
                          )}
                        </span>
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="text-left px-2 py-2 font-mon leading-[27.5px] max-w-[390px] text-[13px] text-white text-opacity-80">
                          {faq.content}
                        </Disclosure.Panel>
                      </Transition>
                    </div>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
          <div className="flex gap-[24px] flex-col lg:flex-col items-center">
            <div className="flex items-start space-x-16">
              <h6 className="font-tom text-[#A866FD] lg:mt-10 text-[40px]  lg:text-[96px] font-medium leading-[27px] ">
                ?
              </h6>
              <h4 className="font-tom text-[#D434FE] text-[64px]  lg:text-[128px] font-medium leading-[27px] ">
                ?
              </h4>
              <h6 className="font-tom text-[#A866FD] text-[64px]  lg:mt-10 lg:text-[96px] font-medium leading-[27px] ">
                ?
              </h6>
            </div>
            <figure className="flex-1">
              <img src="./images/faqs.svg" alt="Faqs" />
            </figure>
          </div>
        </div>
      </Atom>
      <div className="w-full h-[1px] bg-line"></div>
    </>
  );
};

const Prizes = () => {
  return (
    <>
      <Atom>
        <div>
          <h3 className="justify-left text-[20px] mx-auto md:mx-0 leading-[26.6px] text-center max-w-[249px] text-white font-clashbold md:leading-[27px] md:text-[22px] lg:leading-[1] font-semibold lg:text-[32px] md:max-w-[500px] md:text-left lg:max-w-[267px]">
            Prizes and {""}
            <span className="text-[#D434FE]">Rewards</span>
          </h3>
          <p className="text-xs mt-2 leading-[27.5px] max-w-[321px] text-center font-normal font-mon text-white md:mt-5 md:leading-[27.5px] md:text-sm md:text-left md:max-w-[401px]">
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
      </Atom>
      <Atom className="relative pb-10">
        <img
          src="./images/purple-lens-flare-left.svg"
          alt="purple lens flare"
          className="absolute pointer-events-none left-[-40px] sm:left-[-100px] sm:top-[-100px] mix-blend-hard-light"
        />
        <img
          src="./images/purple-lens-flare-right.svg"
          alt="purple lens flare"
          className="absolute pointer-events-none bottom-[-50px] min-[425px]:bottom-[-200px] right-[-200px] min-[425px]:right-[-300px] lg:right-[-600px] lg:bottom-[-400px] mix-blend-hard-light"
        />
        {/* <header className="relative grid text-center text-white lg:hidden">
          <h1 className="relative z-2 text-[32px] font-clashbold font-bold">
            Prizes and{" "}
          </h1>
          <h1 className="text-[#D434FE] relative z-2 text-[32px] font-clashbold font-bold">
            Rewards
          </h1>
          <p className="pt-2">
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </header> */}
        <div className="flex flex-col lg:flex-row gap-[37px]">
          <figure className="relative grid place-items-center">
            <img
              src="./images/trophy.svg"
              className="max-w-[400px] lg:max-w-max"
              alt="Trophy"
            />
          </figure>
          <div className="flex-1">
            {/* <header className="relative hidden text-left text-white lg:block pl-14 pb-14">
              <h1 className="relative z-2 text-[32px] font-clashbold font-bold">
                Prizes and{" "}
              </h1>
              <h1 className="text-[#D434FE] relative z-2 text-[32px] font-clashbold font-bold">
                Rewards
              </h1>
              <p className="pt-2">
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </header> */}
            <section className="flex w-full gap-3 pt-20 mx-auto lg:gap-5 lg:pt-56 max-w-max lg:max-w-full lg:mx-auto-0">
              <div className="flex flex-1  px-2 text-center bg-win border-[#D434FE] border-[1px] rounded-[8px] w-[90px] lg:w-[212px] h-[125px] pb-[22px] lg:h-[296px] relative">
                <img
                  src="./images/silver-medal.svg"
                  alt="Silver medal"
                  className="absolute top-[-45px] left-[50%] translate-x-[-50%]"
                />
                <div className="self-end w-full text-center text-white">
                  <h3 className="font-bold text-[12px] lg:text-[32px]">2nd</h3>
                  <h2 className="font-semibold text-[12px] lg:text-[24px]">
                    Runner
                  </h2>
                  <h1 className="text-[14px] text-[#D434FE] font-bold lg:pt-2">
                    N300,000
                  </h1>
                </div>
              </div>
              <div className="relative grid place-items-center max-w-max overflow-hidde bg-winn w-[125px] lg:w-[296px]">
                <img
                  src="./images/gold-medal.svg"
                  alt="Gold medal"
                  className="absolute top-[-60px] lg:top-[-40%] left-[50%] translate-x-[-50%] block"
                />
                <div className="flex px-2 text-center border-[#D434FE] border-[1px] rounded-[8px] w-[90px] lg:w-[212px] h-[147px] lg:h-[347px] pb-[22px]">
                  <div className="self-end w-full text-center text-white">
                    <h3 className="font-bold text-[12px] lg:text-[32px]">
                      1st
                    </h3>
                    <h2 className="font-semibold text-[12px] lg:text-[24px]">
                      Runner
                    </h2>
                    <h1 className="text-[14px] text-[#903AFF] font-bold lg:pt-2">
                      N400,000
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 bg-win px-2 text-center border-[#D434FE] border-[1px] rounded-[8px] w-[90px] lg:w-[212px] h-[125px] lg:h-[296px] pb-[22px] relative">
                <img
                  src="/images/bronze-medal.svg"
                  alt="Bronze medal"
                  className="absolute top-[-45px] left-[50%] translate-x-[-50%]"
                />
                <div className="self-end w-full text-center text-white">
                  <h3 className="font-bold text-[12px] lg:text-[32px]">3rd</h3>
                  <h2 className="font-semibold text-[12px] lg:text-[24px]">
                    Runner
                  </h2>
                  <h1 className="text-[14px] text-[#D434FE] font-bold lg:pt-2">
                    N150,000
                  </h1>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Atom>
      {/* <div className="w-full h-[1px] bg-line"></div> */}
    </>
  );
};

const Partners = () => {
  return (
    <div className="bg-[#110b20] py-[74px] border-b-[1px] border-b-[#FFFFFF2E]">
      <Container className="relative py-20">
        <img
          src="/images/purple-lens-flare-left.svg"
          alt="purple lens flare"
          className="absolute pointer-events-none mix-blend-hard-light top-[-10%] left-[-40%] md:top-[-300px] md:left-[-400px]"
        />
        <img
          src="/images/purple-lens-flare-right.svg"
          alt="purple lens flare"
          className="absolute pointer-events-none mix-blend-hard-light bottom-[-20%] right-[-50%] min-[480px]:bottom-[-400px] lg:right-[-600px]"
        />
        <header className="relative text-center text-white mb-14">
          <h1 className="relative z-2 text-[32px] font-clashbold  font-bold">
            Partners and Sponsors{" "}
          </h1>
          <p className="pt-2 text-[14px] font-mon mx-auto w-full max-w-[452px] ">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </header>
        <div className="w-full max-w-[1255px] mx-auto py-20 lg:py-32 rounded-[2px] lg:rounded-[2px] border-[1px] bg-partner border-[#D434FE]">
          <div className="w-full max-w-[240px] lg:max-w-[898px] mx-auto grid grid-cols-3 relative z-10">
            <div className="p-5 grid place-items-center border-b-[2px] lg:border-b-[4px] border-[#D434FE] relative before:content-[''] before:w-[25px] before:h-[25px] lg:before:w-[50px] lg:before:h-[50px] before:absolute before:bottom-[-12.25px] before:right-[-12.25px] lg:before:bottom-[-25px] lg:before:right-[-25px] before:bg-[#110b20]">
              <img
                src="/images/liberty.svg"
                alt="Liberty"
                className="w-[30px] h-[30px] lg:w-auto lg:h-auto"
              />
            </div>
            <div className="p-5 grid place-items-center border-b-[2px] lg:border-b-[4px] border-[#D434FE] border-l-[2px] lg:border-l-[4px]  border-r-[2px] lg:border-r-[4px]">
              <img
                src="/images/libertypay.svg"
                alt="Liberty"
                className="w-[56px] lg:w-auto lg:h-auto"
              />
            </div>
            <div className="p-5 grid place-items-center border-b-[2px] lg:border-b-[4px] border-[#D434FE] relative before:content-[''] before:w-[25px] before:h-[25px] lg:before:w-[50px] lg:before:h-[50px] before:absolute before:bottom-[-12.25px] before:left-[-12.25px] lg:before:bottom-[-25px] lg:before:left-[-25px] before:bg-[#110b20]">
              <img
                src="./images/winwise.svg"
                alt="Winwise"
                className="w-[34px] h-[30px] lg:w-auto lg:h-auto"
              />
            </div>
            <div className="grid p-5 place-items-center">
              <img
                src="/images/wisper.svg"
                alt="Wisper"
                className="w-[39px] lg:w-auto lg:h-auto"
              />
            </div>
            <div className="p-5 grid place-items-center border-l-[2px] lg:border-l-[4px] border-r-[2px] lg:border-r-[4px] border-[#D434FE]">
              <img
                src="./images/paybox.svg"
                alt="Paybox"
                className="w-[54px] h-[30px] lg:w-auto lg:h-auto"
              />
            </div>
            <div className="grid p-5 place-items-center">
              <img
                src="/images/vizual-plus.svg"
                alt="Vizual Plus"
                className="w-[69px] h-[30px] lg:w-auto lg:h-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
