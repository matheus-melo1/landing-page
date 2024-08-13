import { Type } from "lucide-react";

export default function Graphic() {
  return (
    <div className="absolute -right-28 top-12 flex flex-col gap-5 rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-50 p-6 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] duration-200 group-hover:-top-8">
      <div className="absolute -left-6 -top-6 rounded-full bg-zinc-900 p-3 text-white">
        <Type />
      </div>
      <div className="flex items-center gap-2">
        <p className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tl from-indigo-500 to-sky-600 p-5 text-xl font-medium text-white">
          M
        </p>
        <div>
          <p className="font-semibold">Matheus</p>
          <span className="text-sm text-zinc-500">
            How are you doing my friend?
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 rounded-xl bg-zinc-900 p-4">
        <div className="flex flex-col gap-1">
          <span className="text-base text-zinc-400">45 New Message</span>
          <p className="font-semibold text-white">
            All Answered 40 Messages This Week!
          </p>
        </div>
        <span className="text-3xl">🎉</span>
      </div>
      <div className="flex flex-col gap-5 rounded-2xl bg-zinc-100 p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <div className="flex w-full items-center justify-between">
          <p className="font-bold text-zinc-950">Report</p>
          <p className="font-medium text-zinc-400">Mar 21-Apr 20</p>
        </div>
        <div className="flex items-end justify-between gap-3">
          <div className="h-[90px] w-[9px] rounded-t-full bg-zinc-300"></div>
          <div className="h-[70px] w-[9px] rounded-t-full bg-zinc-300"></div>
          <div className="h-[110px] w-[9px] rounded-t-full bg-zinc-300"></div>
          <div className="h-[95px] w-[9px] rounded-t-full bg-zinc-300"></div>
          <div className="h-[105px] w-[9px] rounded-t-full bg-zinc-300"></div>
          <div className="h-[100px] w-[9px] rounded-t-full bg-zinc-300"></div>
          <div className="h-[50px] w-[9px] rounded-t-full bg-zinc-300"></div>
          <div className="h-[108px] w-[9px] rounded-t-full bg-zinc-300"></div>
          <div className="h-[130px] w-[9px] rounded-t-full bg-zinc-300"></div>
          <div className="h-[140px] w-[9px] rounded-t-full bg-gradient-to-t from-indigo-600/40 to-sky-500/30"></div>
          <div className="h-[125px] w-[9px] rounded-t-full bg-zinc-300"></div>
        </div>
      </div>
    </div>
  );
}
