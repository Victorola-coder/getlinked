import React from "react";
import SEO from "../../components/seo";

export default function Home() {
  return (
    <>
      <SEO />
      <Main>
        <Hero />
      </Main>
    </>
  );
}

const Hero = () => {
  return <section></section>;
};
