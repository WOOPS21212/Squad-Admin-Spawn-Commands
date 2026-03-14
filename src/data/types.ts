export type CategoryKey =
  | "tanks"
  | "ifv"
  | "wheeled"
  | "light"
  | "trucks"
  | "technicals"
  | "helicopters"
  | "boats"
  | "emplacements"
  | "deployables";

export interface VehicleCommand {
  v: string; // variant name
  c: string; // console command
}

export interface Vehicle {
  cat: CategoryKey;
  name: string;
  faction: string;
  cmds: VehicleCommand[];
  wiki?: string; // Squad wiki URL
}

export interface CategoryInfo {
  icon: string;
  name: string;
}
