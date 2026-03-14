import { CategoryKey, CategoryInfo } from "./types";

export const CATEGORIES: Record<CategoryKey, CategoryInfo> = {
  // Vehicle / Spawn categories
  tanks: { icon: "🔱", name: "Main Battle Tanks" },
  ifv: { icon: "⚔️", name: "IFVs / APCs" },
  wheeled: { icon: "🛡️", name: "Wheeled Armor" },
  light: { icon: "🚙", name: "Light Vehicles" },
  trucks: { icon: "🚛", name: "Trucks / Logistics" },
  technicals: { icon: "💥", name: "Technicals / Artillery" },
  helicopters: { icon: "🚁", name: "Helicopters" },
  boats: { icon: "🚤", name: "Boats" },
  emplacements: { icon: "🎯", name: "Emplacements" },
  deployables: { icon: "🏗️", name: "FOBs / HABs / Deployables" },
  // Admin command categories
  player: { icon: "👤", name: "Player Management" },
  match: { icon: "⏱️", name: "Match Control" },
  team: { icon: "👥", name: "Team & Squad Management" },
  server: { icon: "⚙️", name: "Server Settings" },
  gameplay: { icon: "🎮", name: "Gameplay Overrides" },
  demo: { icon: "🎥", name: "Demo & Recording" },
};

export const CATEGORY_ORDER: CategoryKey[] = [
  // Vehicles
  "tanks",
  "ifv",
  "wheeled",
  "light",
  "trucks",
  "technicals",
  "helicopters",
  "boats",
  "emplacements",
  "deployables",
  // Admin commands
  "player",
  "match",
  "team",
  "server",
  "gameplay",
  "demo",
];
