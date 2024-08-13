import { Sparkles } from "lucide-react";
import img from "../../assets/img/iphone.png";

export default function Home() {
  return (
    <div className="flex h-[1000px] w-full flex-col justify-center bg-white bg-gradient-to-tl from-indigo-200/40 from-30% via-zinc-100 via-40% to-sky-800/30 to-100% p-4">
      <div className="flex w-full flex-col items-center justify-center gap-2 p-12">
        <h1 className="text-6xl font-light text-blue-950">
          Transform the Future with IA
        </h1>
        <h2 className="text-xl font-medium text-zinc-800">
          Discover how AI can revolutionize your business today.
        </h2>
      </div>
      <div className="relative h-full w-full">
        <div className="animate-iphone absolute left-2/4 top-2/4 z-10 w-[1000px] -translate-x-2/4 -translate-y-2/4">
          <img className="h-full w-full" src={img} alt="" />
        </div>

        <div className="absolute left-48 rounded-3xl bg-white/60 p-5 shadow-2xl shadow-zinc-100">
          <p className="bg-gradient-to-tl from-indigo-400 to-sky-600 bg-clip-text text-3xl font-bold text-transparent">
            +17.000 Users
          </p>
        </div>
        <div className="absolute bottom-40 right-48 rounded-3xl bg-white/60 p-5 shadow-2xl shadow-zinc-100">
          <p className="bg-gradient-to-tl from-indigo-400 to-sky-600 bg-clip-text text-3xl font-bold text-transparent">
            + Increase your productivity
          </p>
        </div>

        <div className="animate-profile absolute right-[400px] top-72 h-40 w-40 rounded-full bg-[url('https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover shadow-2xl"></div>
        <div className="animate-profile2 absolute left-[440px] top-12 h-40 w-40 rounded-full bg-[url('https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover shadow-2xl"></div>
        <div className="animate-profile3 absolute bottom-24 left-[400px] h-40 w-40 rounded-full bg-[url('https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover shadow-2xl"></div>
        <div className="animate-profile3 absolute right-[300px] top-4 h-40 w-40 rounded-full bg-[url('https://images.unsplash.com/photo-1508184964240-ee96bb9677a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover shadow-2xl"></div>

        <Sparkles
          strokeWidth={1.25}
          className="absolute left-2/4 top-2/4 z-10 h-14 w-14 -translate-x-2/4 -translate-y-2/4 text-indigo-700"
        />
        <div className="animate-expasion1 absolute left-2/4 top-2/4 z-0 flex h-[200px] w-[200px] -translate-x-2/4 -translate-y-2/4 items-center justify-center rounded-full border-l-[1px] border-t-[1px] border-white bg-gradient-to-t from-purple-300/45 to-sky-200/55"></div>
        <div className="animate-expasion2 absolute left-[50%] top-2/4 z-0 flex h-[400px] w-[400px] -translate-x-2/4 -translate-y-2/4 items-center justify-center rounded-full border-l-[1px] border-t-[1px] border-white bg-gradient-to-t from-purple-300/35 to-sky-200/55"></div>
        <div className="animate-expasion3 absolute left-[50%] top-2/4 z-0 flex h-[600px] w-[600px] -translate-x-2/4 -translate-y-2/4 items-center justify-center rounded-full border-l-[1px] border-t-[1px] border-white bg-gradient-to-t from-zinc-300/45 to-zinc-200/55"></div>
      </div>
    </div>
  );
}
