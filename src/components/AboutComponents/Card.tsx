import { ChevronRight, Images, XIcon } from "lucide-react";

export default function Card() {
  const img: string =
    "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="absolute bottom-56 left-24 z-10 flex w-[340px] flex-col rounded-3xl shadow-2xl duration-200 group-hover:left-12">
      <div className="relative h-[300px] w-full">
        <img className="h-full w-full rounded-t-3xl" src={img} alt="" />
        <span className="absolute right-4 top-4 rounded-full bg-white/40 p-1 text-white">
          <XIcon />
        </span>
      </div>
      <div className="flex flex-col gap-6 rounded-b-3xl bg-gradient-to-br from-zinc-200 to-zinc-100 p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <p className="mb-1 text-2xl font-bold">Ben Timona</p>
            <span className="text-sm">Hey there!</span>
            <span className="text-sm">I want to ask you a question...</span>
          </div>
          <button className="h-12 rounded-full bg-indigo-500 px-4 py-2 text-white">
            Answer
          </button>
        </div>
        <div className="h-[2px] w-full bg-slate-300"></div>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <Images className="h-8 w-8" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-zinc-600">
                1 Message
              </span>
              <span className="font-semibold text-zinc-950">09 Jun 2024</span>
            </div>
          </div>
          <button className="flex items-center gap-1 text-sm text-zinc-600">
            View details <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
