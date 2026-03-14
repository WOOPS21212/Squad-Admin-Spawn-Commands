"use client";

import { Vehicle } from "@/data/types";
import { CATEGORIES } from "@/data/categories";
import { VEHICLE_IMAGES } from "@/data/images";
import { WIKI_URLS } from "@/data/wiki";
import CommandRow from "./CommandRow";

interface VehicleCardProps {
  vehicle: Vehicle;
  hidden: boolean;
}

export default function VehicleCard({ vehicle, hidden }: VehicleCardProps) {
  const imageUrl = VEHICLE_IMAGES[vehicle.name];
  const wikiUrl = vehicle.wiki ?? WIKI_URLS[vehicle.name];
  const cat = CATEGORIES[vehicle.cat];

  if (hidden) return null;

  return (
    <article className="rounded-2xl bg-[#161b22] border border-[#30363d] overflow-hidden hover:border-[#484f58] transition-colors">
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] w-full">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={vehicle.name}
            loading="lazy"
            className="absolute inset-0 size-full object-cover bg-[#0d1117]"
          />
        ) : (
          <div className="absolute inset-0 size-full bg-[#0d1117] flex items-center justify-center text-5xl opacity-20">
            {cat?.icon ?? "?"}
          </div>
        )}
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-x-3 text-xs">
          <span className="text-[#8b949e]">{cat?.icon} {cat?.name}</span>
          <span className="rounded-full bg-[#1f2937]/60 px-3 py-1 font-medium text-[#58a6ff]">
            {vehicle.faction}
          </span>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-white">
          {vehicle.name}
        </h3>
        <div className="mt-1 flex items-center gap-3 text-xs text-[#8b949e]">
          <span>{vehicle.cmds.length} variant{vehicle.cmds.length > 1 ? "s" : ""}</span>
          {wikiUrl && (
            <a
              href={wikiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#58a6ff] hover:underline"
            >
              Wiki →
            </a>
          )}
        </div>

        {/* Commands */}
        <div className="mt-3 flex flex-col gap-1.5 border-t border-white/10 pt-3">
          {vehicle.cmds.map((cmd, i) => (
            <CommandRow key={i} cmd={cmd} />
          ))}
        </div>
      </div>
    </article>
  );
}
