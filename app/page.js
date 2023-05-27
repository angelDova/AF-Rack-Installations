import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import Head from "next/head";
import Image from "next/image";
import { SliderData } from "@/components/SliderData";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Hero
        heading="AF Rack Installations"
        message="Family owned and operated for over 15 years!"
      />
      <Slider slides={SliderData} />
      <Services />
    </div>
  );
}
