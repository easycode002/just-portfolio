interface SkillBarProps {
  name: string;
  percentage: number;
}

export function SkillBar({ name, percentage }: SkillBarProps) {
  return (
    <div className="mt-2 ">
      <div className="flex justify-between items-center">
        <span className="text-subtitle font-ubuntulight text-foreground">{name}</span>
        <span className="text-sm font-medium text-muted-foreground">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-100 h-4">
        <div
          className="!bg-primary h-4 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
