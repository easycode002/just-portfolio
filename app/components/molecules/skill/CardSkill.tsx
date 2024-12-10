import React from "react";
import { SkillProps } from "@/types/skill";

export const CardSkill:React.FC<SkillProps> = ({name,image,alt}) => {
  return (
    <div className="flex flex-col justify-center items-center w-[93px] h-[80px] rounded-lg space-y-1 border-[1px] border-gray-900 hover:scale-105 hover:ring-1 hover:border-none hover:ring-blue-500 duration-150 ease-in-out">
      {image}
      <p className="text-text font-ubuntulight">{name}</p>
    </div>
  );
};
