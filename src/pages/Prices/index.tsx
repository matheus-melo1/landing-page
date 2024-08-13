import ProPlan from "../../components/Plans/ProPlan";
import StarterPlan from "../../components/Plans/StarterPlan";
import TitlePlans from "../../components/Plans/Title";

export default function Prices() {
  return (
    <div className="font-inter relative flex h-screen w-full items-center justify-center gap-8 bg-white bg-gradient-to-r from-zinc-100 from-30% via-zinc-200 to-sky-100 to-100%">
      <TitlePlans />
      <StarterPlan />
      <ProPlan />
      <div className="absolute top-24 h-[800px] w-[800px] rounded-full border-t-[1px] border-l-[1px] border-white/70 bg-gradient-to-t from-transparent to-zinc-100/50">
        <div className="absolute left-2/4 -translate-x-2/4 text-blue-950 -top-4 flex gap-2 bg-white py-2 px-5 rounded-full">
          <span className="font-bold">Monthly</span>
          <span>/</span>
          <span className="font-medium">Yearly</span>
        </div>
      </div>
    </div>
  );
}
