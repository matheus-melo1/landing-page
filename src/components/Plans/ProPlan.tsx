import { ArrowUpRight, Webhook } from "lucide-react";
import Benefits from "./Benefits";

export default function ProPlan() {
  return (
    <div className="relative z-10 flex h-[600px] w-[420px] translate-y-14 flex-col items-center gap-8 rounded-[35px] bg-gradient-to-br from-zinc-200 to-zinc-100 px-6 pb-20 pt-8 font-inter text-slate-800 shadow-2xl">
      <div className="flex flex-col items-center justify-center gap-4">
        <div>
          <Webhook className="h-10 w-10" />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-4xl font-extralight">Pro Version</p>
          <p className="text-lg font-medium">We can negotiate separately</p>
        </div>
      </div>
      <div className="flex items-end gap-2">
        <span className="text-5xl">Business</span>
      </div>
      <div className="h-[2px] w-full bg-slate-400">
        <span className="invisible">a</span>
      </div>
      <div className="flex w-full flex-col justify-start gap-6 capitalize">
        <Benefits title={"like new posts"} desc={"unlimited"} />
        <Benefits title={"ChatGPT 4.0 Integration"} desc={"Yes"} />
        <Benefits title={"Repost Products"} desc={"unlimited"} />
        <Benefits title={"promote viral advertising"} desc={"pro plus"} />
      </div>
      <button className="group rounded-full border-[1px] border-zinc-300 p-5 text-slate-800 duration-200 hover:border-slate-500">
        <ArrowUpRight className="h-8 w-8 duration-200 group-hover:-translate-y-[3px] group-hover:translate-x-[3px]" />
      </button>
    </div>
  );
}
