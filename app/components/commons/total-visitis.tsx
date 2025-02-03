import { TrendingUp } from "lucide-react";

export default function TotalVisits() {
  return (
    <div className="w-min whitespace-nowrap flex gap-5 items-center border-primary bg-background-secondary px-8 py-3 rounded-xl shadow-lg">
      <span className="font-bold text-white"> Total de visitas</span>
      <div className="flex items-center gap-2 text-accent-green">
        <span className="text-3xl font-bold">140</span>
        <TrendingUp />
      </div>
      {/* <div className="gap-2 flex items-center ">
        <button>Portal</button>
        <button>Sair</button>
      </div> */}
    </div>
  );
}
