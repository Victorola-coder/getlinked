import { Link } from "react-router-dom";
import { socialLinks } from "../data/link";
import Container from "./container";

export default function Footer() {
  return (
    <footer className="pt-[70px] pb-[40px] bg-[#100B20]">
      <Container>
        <div className="w-full max-w-[1086px] mx-auto flex flex-col md:flex-row gap-[40px] justify-between">
          <div className="w-full max-w-[412px]">
            <Link to="/">
              <img
                src="/getlinked.svg"
                alt="GetLinked logo"
                className="w-[72px] h-[18px] lg:w-[171px] lg:h-[44px]"
              />
            </Link>
            <p className="text-white pt-2 text-[12px] leading-[20px]">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <div className="flex gap-2 text-white text-[12px] pt-16">
              <p>Terms of Use</p>
              <div className="h-[17px] rounded-[2px] w-[2px] bg-primary"></div>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-x-2 gap-y-10 w-full max-w-[500px]">
            <div className="flex flex-col gap-[15px]">
              <h1 className="text-[14px] font-semibold text-primary">
                Useful Links
              </h1>
              <p className="text-white text-[12px]">Overview</p>
              <p className="text-white text-[12px]">Timeline</p>
              <p className="text-white text-[12px]">FAQs</p>
              <p className="text-white text-[12px]">Register</p>
              <div className="text-primary text-[12px] flex gap-2 item items-center">
                Follow us{" "}
                <div className="flex items-center gap-4">
                  {socialLinks.map((data) => (
                    <a key={data.id} href={data.link}>
                      {data.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[22px]">
              <h1 className="text-[14px] font-semibold text-primary">
                Contact Us
              </h1>
              <div className="flex gap-4 text-white items-center text-[12px]">
                <img
                  src="/icons/phone.svg"
                  alt="contact"
                  className="w-[12px] h-[12px] self start"
                />
                <a href="tel:+2346707653444">+234 6707653444</a>
              </div>
              <div className="flex gap-4 text-white text-[12px]">
                <img
                  src="/icons/location.svg"
                  alt="contact"
                  className="w-[12px] h-[12px] self start"
                />
                <p className="max-w-[89px] leading-[18px]">
                  27,Alara Street Yaba 100012 Lagos State
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-white mt-[70px] text-[12px]">
          All rights reserved. &copy; getlinked Ltd.
        </p>
      </Container>
    </footer>
  );
}
