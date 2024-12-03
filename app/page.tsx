import Image from "next/image";
import profile_image from "../public/images/profile.png";
import Card from "./components/molecules/Card";

export default function Home() {
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
            <p className="text-base md:text-lg text-gray-600">
              I’m a creative and dedicated Full Stack Developer based in
              [Location], specializing in both front-end and back-end
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
        <section className="flex flex-row justify-between items-center bg-white p-6 pt-32">
          <div className="flex flex-col justify-center  items-center">
            <h1>About Me</h1>
            <p>My Introduction</p>
            <div className="flex flex-row">
              {/* Image of section */}
              <div className="flex mt-6 justify-center">
                <Image
                  className="h-80 w-64"
                  src={profile_image}
                  alt="My picture"
                />
              </div>
              {/* Content like text of section */}
              <div className="">
                <h1>ff</h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
