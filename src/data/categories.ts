import { CategoryKey, CategoryInfo } from "./types";

export const CATEGORIES: Record<CategoryKey, CategoryInfo> = {
  // Vehicle / Spawn categories
  tanks: { icon: "🔱", name: "Main Battle Tanks", description: "The heaviest armored vehicles in Squad. These are the big guns -- one or two per team, usually requiring a crewman kit to operate." },
  ifv: { icon: "⚔️", name: "IFVs / APCs", description: "Infantry Fighting Vehicles and Armored Personnel Carriers. These carry troops AND have serious firepower -- autocannons, ATGMs, or both." },
  wheeled: { icon: "🛡️", name: "Wheeled Armor", description: "Fast armored vehicles on wheels instead of tracks. Good for scouting, flanking, and getting around the map quickly while still having some protection." },
  light: { icon: "🚙", name: "Light Vehicles", description: "Jeeps, MRAPs, and other light transport with mounted weapons. Great for getting squads into position fast, but don't expect them to survive a tank shell." },
  trucks: { icon: "🚛", name: "Trucks / Logistics", description: "Transport and logistics trucks. Logi trucks carry build supplies and ammo to FOBs -- they're the backbone of your team's spawning and resupply." },
  technicals: { icon: "💥", name: "Technicals / Artillery", description: "Pickup trucks with heavy weapons bolted on, plus rocket artillery. Insurgent and militia factions rely on these instead of proper military vehicles." },
  helicopters: { icon: "🚁", name: "Helicopters", description: "Transport helicopters for moving troops and supplies across the map fast. Some have door gunners for suppression." },
  boats: { icon: "🚤", name: "Boats", description: "Rigid-hull inflatable boats (RHIBs) for crossing rivers and coastal maps. Various mounted weapon options." },
  emplacements: { icon: "🎯", name: "Emplacements", description: "Stationary weapons like TOW missiles, mortars, and anti-air guns. These are built at FOBs and pack serious firepower from a fixed position." },
  deployables: { icon: "🏗️", name: "FOBs / HABs / Deployables", description: "Forward Operating Bases, spawn bunkers, ammo crates, and repair stations. These are the structures your team builds to hold territory and keep fighting." },
  // Admin command categories
  player: { icon: "👤", name: "Player Management", description: "Commands for dealing with individual players. Kick removes them from the server, ban prevents them from coming back, and warn sends them a private message on their screen." },
  match: { icon: "⏱️", name: "Match Control", description: "Control the current match. Change which map/layer is playing, restart the round, pause the game, or broadcast a message to everyone on the server." },
  team: { icon: "👥", name: "Team & Squad Management", description: "Move players between teams, break up squads, or remove someone from their squad. Useful for balancing teams or dealing with locked 1-man squads." },
  server: { icon: "⚙️", name: "Server Settings", description: "Change server settings on the fly. Set a password to lock the server, limit player count, or change the game speed (great for testing or events)." },
  gameplay: { icon: "🎮", name: "Gameplay Overrides", description: "Override normal gameplay rules. Unlock all kits regardless of squad size, allow placing deployables anywhere, or disable vehicle claiming. Only works on unlicensed servers." },
  demo: { icon: "🎥", name: "Demo & Recording", description: "Record gameplay demos for reviewing incidents or creating content. Useful for catching cheaters or documenting rule violations." },
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
