import { Stat } from '../types/portfolio';

interface StatPairProps {
  stat: Stat;
}

export default function StatPair({ stat }: StatPairProps) {
  const { label, points } = stat;

  return (
    <div className="font-orbitron flex flex-col items-center">
      <span className="text-[1.2em] font-medium text-gray-600">{label}</span>
      <span className="text-[1.5em] font-bold text-gray-800">{points}</span>
    </div>
  );
}
