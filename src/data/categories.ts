import { CategoryKey, CategoryInfo } from "./types";

export const CATEGORIES: Record<CategoryKey, CategoryInfo> = {
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
};

export const CATEGORY_ORDER: CategoryKey[] = [
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
];
