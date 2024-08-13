import { CircleDashed } from "lucide-react";

interface Infos {
  title: string;
  desc: string;
}

export default function Benefits({ title, desc }: Infos) {
  return (
    <div className="flex w-full items-center justify-between gap-3">
      <p className="flex items-center gap-3">
        <CircleDashed className="text-slate-500" />
        {title}
      </p>
      <span className="text-slate-400">{desc}</span>
    </div>
  );
}
