import { ArrowDown } from "lucide-react";
import Card from "../../components/AboutComponents/Card";
import Graphic from "../../components/AboutComponents/Graphic";
import Image from "../../components/AboutComponents/image";
import Message from "../../components/AboutComponents/Message";

export default function About() {
  return (
    <div className="relative flex h-[1000px] w-full items-center justify-center gap-20 bg-white bg-gradient-to-tl from-zinc-100/80 from-30% via-zinc-100 via-40% to-zinc-300/30 to-100%">
      <div className="transparent absolute top-0 h-full w-full">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(136,183,255,0.71)] opacity-50 blur-[200px]"></div>
      </div>
      <div className="flex w-[800px] flex-col gap-8">
        <span className="text-lg font-medium text-sky-900">
          Powered by ChatGPT 4
        </span>
        <h1 className="text-6xl font-semibold text-slate-800">
          The Only AI For Respond To Your Messages
        </h1>
        <h3 className="p-1 text-slate-700">
          Artificial Intelligence (AI) transforms industries by automating
          tasks, enhancing decision-making with data insights, and personalizing
          user experiences. It boosts productivity, reduces costs, and enables
          predictive analytics for better planning. AI provides a competitive
          edge by optimizing resources and improving customer satisfaction,
          driving innovation and efficiency across various sectors globally.
        </h3>
        <a className="flex w-[207px] cursor-pointer items-center justify-around gap-3 rounded-full bg-indigo-500 p-1 text-white">
          <span className="cursor-pointer p-2 text-lg">See our plans</span>
          <span className="flex cursor-pointer items-center justify-center rounded-full bg-white p-2 text-zinc-800">
            <ArrowDown className="h-6 w-6" strokeWidth={1.25} />
          </span>
        </a>
      </div>
      <div className="group relative h-full w-[600px]">
        <Card />
        <Graphic />
        <Image />
        <Message />
      </div>
    </div>
  );
}
