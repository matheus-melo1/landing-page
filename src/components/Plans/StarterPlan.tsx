import { ArrowUpRight, Hourglass } from "lucide-react";
import Benefits from "./Benefits";

export default function StarterPlan() {
  return (
    <div className="font-inter relative z-10 flex h-[550px] w-[440px] shadow-2xl flex-col items-center gap-8 rounded-[35px] bg-zinc-200 bg-gradient-to-br from-purple-300/35 to-sky-200/35 px-6 pb-20 pt-8 text-slate-800">
      <div className="flex flex-col items-center justify-center gap-4">
        <div>
          <Hourglass className="h-10 w-10" />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-4xl font-extralight">Starter Plan</p>
          <p className="text-lg font-medium">Price $12 per unit per month</p>
        </div>
      </div>
      <div className="flex items-end gap-2">
        <span className="text-5xl">$12</span>
        <span className="text-xl font-medium">/ month</span>
      </div>
      <div className="h-[2px] w-full bg-slate-400">
        <span className="invisible">a</span>
      </div>
      <div className="flex w-full flex-col justify-start gap-6 capitalize">
        <Benefits title={"like new posts"} desc={"10.000"} />
        <Benefits title={"ChatGPT 4.0 Integration"} desc={"Yes"} />
        <Benefits title={"Repost Products"} desc={"9.990"} />
        <Benefits title={"promote viral advertising"} desc={"basic plan"} />
      </div>
      <button className="group absolute -bottom-8 rounded-full bg-slate-700 p-5 text-white">
        <ArrowUpRight className="h-8 w-8 duration-200 group-hover:-translate-y-[3px] group-hover:translate-x-[3px]" />
      </button>
    </div>
  );
}
