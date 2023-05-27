import Hero from "@/components/Hero";
import React from "react";

const page = () => {
  return (
    <div className="text-center">
      <Hero
        heading="About Us"
        message="Here we will write a little bit about ourselves to show the world who we are. A Family owned and operated company..."
      />
    </div>
  );
};

export default page;
