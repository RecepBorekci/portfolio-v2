import { Stat } from "../types/portfolio";

interface StatPairProps {
  stat: Stat;
}

export default function StatPair({ stat }: StatPairProps) {
  const { label, points } = stat;

  return (
    <div className="flex flex-col items-center font-orbitron">
      <span className="font-medium text-gray-600 text-[1.2em]">{label}</span>
      <span className="font-bold text-gray-800 text-[1.5em]">{points}</span>
    </div>
  );
}
