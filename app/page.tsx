import Image from "next/image";
import profile_image from "../public/images/profile.png";
import Card from "./components/molecules/Card";
import {
  CompleteIcon,
  ExperienceIcon,
  SupportIcon,
} from "./components/atoms/Icon";
import { useEffect, useState } from "react";

export default function Home() {
  if (typeof window == "undefined") {
    console.log(`=== Application is running on Server Side ===`);
  } else {
    alert("=== Application is running on Client Side ===");
  }

  if (process.browser) {
    console.log("Variant 2: Application is on client side");
  } else {
    console.log("Variant 2: Application is on server side");
  }

  return (
    <div className="w-full flex justify-center !2xl:px-2 !xl:px-2 !lg:px-2 !md:px-2 !sm:px-2">
      <main className="font-ubuntulight w-ful">
        <section className="flex flex-row justify-between items-center bg-white p-6 pt-32">
          {/* Text Section */}
          <div className="flex flex-col md:w-1/2 space-y-4 md:space-y-6">
            <div className="flex items-center space-x-3 font-ubuntubold text-xl">
              <h1 className="text-3xl md:text-4xl">Mab Sothea</h1>
              <span className="text-3xl">👋</span>
            </div>
            <h2 className="text-xl md:text-2xl font-ubuntubold text-gray-700">
              Full Stack Developer
            </h2>
            <p className="font-ubuntulight text-title text-gray-600">
              I’m a creative and dedicated <strong>Full Stack</strong> Developer
              based in [Location], specializing in both front-end and back-end
              development. Passionate about building efficient, user-friendly
              web applications and delivering exceptional results.
            </p>
          </div>
          {/* Image Section */}
          <div className="mt-6 md:mt-0 md:w-1/3 flex justify-center">
            <Image className="h-80 w-64" src={profile_image} alt="My picture" />
          </div>
        </section>
        {/* Section - About */}
        <section className="flex flex-row justify-between items-center p-6 pt-32 w-full">
          <div className="flex flex-col justify-center  items-center w-full">
            <h1 className="text-h1 font-ubuntubold">About Me</h1>
            <p className="text-subtitle font-ubunturegular">My Introduction</p>
            <div className="flex flex-row w-full">
              {/* Image of section */}
              <div className="flex mt-6 justify-center w-full">
                <Image
                  className="h-80 w-64"
                  src={profile_image}
                  alt="My picture"
                />
              </div>
              {/* Content like text of section */}
              <div className="w-full pt-4">
                {/* Card */}
                <div className="flex flex-row justify-between">
                  <Card
                    image={
                      <ExperienceIcon
                        width={32}
                        height={32}
                        className="text-blue-500"
                      />
                    }
                    title="Experience"
                    description="2+ Years"
                  />
                  <Card
                    image={
                      <CompleteIcon
                        width={32}
                        height={32}
                        className="text-blue-500"
                      />
                    }
                    title="Experience"
                    description="2+ Years"
                  />
                  <Card
                    image={
                      <SupportIcon
                        width={32}
                        height={32}
                        className="text-blue-500"
                      />
                    }
                    title="Experience"
                    description="2+ Years"
                  />
                </div>
                <h1>hello</h1>
                {/* Text context */}
                <div className="flex flex-col pt-4 font-ubuntulight text-title w-full">
                  <p className="text-justify text-base leading-relaxed break-words">
                    Hello, I&apos;m <strong>Mab Sothea</strong>, a passionate
                    Full Stack Developer with over 8+ years of experience in
                    creating impact web solutions. I specialize in crafting
                    user-centric web applications with a focus on UI/UX design,
                    robust back-end development, and seamless integrations.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Experience:</strong> 8+ Years of expertise in
                      delivering end-to-end solutions for clients across
                      industries.
                    </li>
                    <li>
                      <strong>Projects Completed:</strong> Successfully
                      developed and delivered 48+ projects, tailored to meet
                      client needs with precision.
                    </li>
                    <li>
                      <strong>Support:</strong> Dedicated to providing 24/7
                      online support, ensuring every project runs smoothly.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
