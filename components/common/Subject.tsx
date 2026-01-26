import { twMerge } from "tailwind-merge";

const Subject = (subject: string, color?: string, className?: string) => {
  return (
    <div className={twMerge("flex items-center gap-2 font-medium text-[14px]", className)}>
      <div className={twMerge("w-2 h-2 rounded-full bg-blue-300", color)} />
      {subject}
    </div>
  );
};

export default Subject;
