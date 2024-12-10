interface EducationProps {
  degree: string;
  school: string;
  period: string;
}

export function Education({ degree, school, period }: EducationProps) {
  return (
    <div className="relative pl-10 group">
      <div className="absolute left-[10px] top-[6px] -translate-x-1/2 w-4 h-4 bg-white border rounded-full border-gray-950 transition-transform duration-300 ease-in-out group-hover:scale-105 z-20"></div>
      <div className="space-y-1 sm:space-y-2">
        <h3 className="text-subtitle font-ubuntubold sm:text-lg text-foreground">
          {degree}
        </h3>
        <p className="text-h1 text-gray-900 font-ubunturegular sm:text-sm text-muted-foreground/80 bg-gray-300 p-1 px-3 rounded-lg inline-block">
          {period}
        </p>
        <p className="text-title font-ubunturegular sm:text-base text-muted-foreground opacity-50 italic">
          {school}
        </p>
      </div>
    </div>
  );
}
