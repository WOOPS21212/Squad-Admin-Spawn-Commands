"use client";

import { Vehicle, CategoryKey } from "@/data/types";
import { CATEGORIES } from "@/data/categories";
import VehicleCard from "./VehicleCard";

interface CategorySectionProps {
  catKey: CategoryKey;
  vehicles: Vehicle[];
  search: string;
  activeFilter: CategoryKey | "all";
}

function matchesSearch(vehicle: Vehicle, query: string): boolean {
  if (!query) return true;
  const haystack = `${vehicle.name} ${vehicle.faction} ${vehicle.cmds.map((c) => c.v).join(" ")}`.toLowerCase();
  return haystack.includes(query);
}

export default function CategorySection({
  catKey,
  vehicles,
  search,
  activeFilter,
}: CategorySectionProps) {
  if (activeFilter !== "all" && activeFilter !== catKey) return null;

  const query = search.toLowerCase().trim();
  const visibleVehicles = vehicles.filter((v) => matchesSearch(v, query));

  if (visibleVehicles.length === 0) return null;

  const cat = CATEGORIES[catKey];

  return (
    <div className="max-w-[1200px] mx-auto mb-10">
      <div className="mb-4 pb-3 border-b border-[#30363d]">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">{cat.icon}</span>
          <span className="text-lg font-semibold">{cat.name}</span>
          <span className="text-xs bg-[#2d333b] text-[#8b949e] px-2 py-0.5 rounded-full">
            {visibleVehicles.length}
          </span>
        </div>
        {cat.description && (
          <p className="mt-1.5 text-sm text-[#8b949e] max-w-2xl leading-relaxed">
            {cat.description}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {vehicles.map((vehicle, i) => (
          <VehicleCard
            key={`${vehicle.name}-${vehicle.faction}-${i}`}
            vehicle={vehicle}
            hidden={!matchesSearch(vehicle, query)}
          />
        ))}
      </div>
    </div>
  );
}
