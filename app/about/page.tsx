import Image from "next/image";
import React from "react";
import profile from "../../public/images/profile.png";
import { PlayIcon } from "../components/atoms/Icon";

const About = () => {
  return (
    <div className="flex flex-col h-screen justify-start items-start space-y-8 w-full">
      <div className="flex flex-col w-full justify-center items-center">
        <h2 className="flex text-h3 font-ubuntubold uppercase underline underline-offset-4">About me</h2>
      </div>
      <div className="flex flex-row w-full space-x-4">
        {/* Image */}
        <Image
            src={profile}
            alt="My profile"
            className="w-[200px] h-[250px]"
          />
        {/* My information */}
        <div className="flex w-full flex-col space-y-4">
          <h1 className="flex text-h4 opacity-50 font-ubuntubold">
            My personal information
          </h1>
          <div className="grid grid-cols-2 gap-y-3">
              <div className="flex flex-row justify-start items-center space-x-1">
                {/* Icon */}
                <PlayIcon width={14} height={14} className="text-gray-900" />
                {/* Text label */}
                <div className="flex flex-row space-x-4">
                  <h2 className="font-ubuntubold">Name: </h2>
                  <h3>Mab Sothea</h3>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center space-x-1">
                {/* Icon */}
                <PlayIcon width={14} height={14} className="text-gray-900" />
                {/* Text label */}
                <div className="flex flex-row space-x-4">
                  <h2 className="font-ubuntubold">Nickname: </h2>
                  <h3>Small Dev</h3>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center space-x-1">
                {/* Icon */}
                <PlayIcon width={14} height={14} className="text-gray-900" />
                {/* Text label */}
                <div className="flex flex-row space-x-4">
                  <h2 className="font-ubuntubold">Birthday: </h2>
                  <h3>15-Feb-2002</h3>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center space-x-1">
                {/* Icon */}
                <PlayIcon width={14} height={14} className="text-gray-900" />
                {/* Text label */}
                <div className="flex flex-row space-x-4">
                  <h2 className="font-ubuntubold">Phone: </h2>
                  <h3>+855 16 217 904</h3>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center space-x-1">
                {/* Icon */}
                <PlayIcon width={14} height={14} className="text-gray-900" />
                {/* Text label */}
                <div className="flex flex-row space-x-4">
                  <h2 className="font-ubuntubold">City: </h2>
                  <h3>Phnom Penh, Cambodia</h3>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center space-x-1">
                {/* Icon */}
                <PlayIcon width={14} height={14} className="text-gray-900" />
                {/* Text label */}
                <div className="flex flex-row space-x-4">
                  <h2 className="font-ubuntubold">Age: </h2>
                  <h3>21</h3>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center space-x-1">
                {/* Icon */}
                <PlayIcon width={14} height={14} className="text-gray-900" />
                {/* Text label */}
                <div className="flex flex-row space-x-4">
                  <h2 className="font-ubuntubold">Email: </h2>
                  <h3>sotheamab002@gmail.com</h3>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center space-x-1">
                {/* Icon */}
                <PlayIcon width={14} height={14} className="text-gray-900" />
                {/* Text label */}
                <div className="flex flex-row space-x-4">
                  <h2 className="font-ubuntubold">Freelance: </h2>
                  <h3>Unvailable</h3>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
