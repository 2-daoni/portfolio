import { twMerge } from "tailwind-merge";

const Subject = (subject: string, color?: string) => {
  return (
    <div className="flex items-center gap-2">
      <div className={twMerge("w-2 h-2 rounded-full bg-blue-300", color)} />
      {subject}
    </div>
  );
};

export default Subject;
