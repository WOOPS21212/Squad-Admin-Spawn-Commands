import { Vehicle } from "./types";

// Admin commands reuse the Vehicle interface:
// name = command name, faction = syntax hint, cmds = usage examples
export const ADMIN_COMMANDS: Vehicle[] = [
  // ── Player Management ────────────────────────────────────
  { cat: "player", name: "AdminKick", faction: "Syntax: AdminKick <Name|SteamID> <Reason>", cmds: [
    { v: "By Name", c: "AdminKick PlayerName Teamkilling" },
    { v: "By Steam ID", c: "AdminKick 76561198012345678 Teamkilling" },
  ]},
  { cat: "player", name: "AdminKickById", faction: "Syntax: AdminKickById <PlayerID> <Reason>", cmds: [
    { v: "Example", c: "AdminKickById 3 Teamkilling" },
  ]},
  { cat: "player", name: "AdminBan", faction: "Syntax: AdminBan <Name|SteamID> <Length> <Reason>", cmds: [
    { v: "Permanent", c: "AdminBan PlayerName 0 Cheating" },
    { v: "1 Day", c: "AdminBan PlayerName 1d Toxicity" },
    { v: "1 Week", c: "AdminBan PlayerName 1w Teamkilling" },
    { v: "1 Month", c: "AdminBan PlayerName 1m Repeated offenses" },
  ]},
  { cat: "player", name: "AdminBanById", faction: "Syntax: AdminBanById <PlayerID> <Length> <Reason>", cmds: [
    { v: "Permanent", c: "AdminBanById 3 0 Cheating" },
    { v: "1 Day", c: "AdminBanById 3 1d Toxicity" },
  ]},
  { cat: "player", name: "AdminWarn", faction: "Syntax: AdminWarn <Name|SteamID> <Reason>", cmds: [
    { v: "By Name", c: "AdminWarn PlayerName Stop teamkilling" },
    { v: "By Steam ID", c: "AdminWarn 76561198012345678 Stop teamkilling" },
  ]},
  { cat: "player", name: "AdminWarnById", faction: "Syntax: AdminWarnById <PlayerID> <Reason>", cmds: [
    { v: "Example", c: "AdminWarnById 3 Stop teamkilling" },
  ]},

  // ── Match Control ────────────────────────────────────────
  { cat: "match", name: "AdminChangeLayer", faction: "Syntax: AdminChangeLayer <LayerName>", cmds: [
    { v: "Yehorivka AAS", c: "AdminChangeLayer Yehorivka_AAS_v1" },
    { v: "Al Basrah RAAS", c: "AdminChangeLayer Al_Basrah_RAAS_v1" },
    { v: "Fallujah Invasion", c: "AdminChangeLayer Fallujah_Invasion_v1" },
    { v: "Narva RAAS", c: "AdminChangeLayer Narva_RAAS_v1" },
    { v: "Gorodok AAS", c: "AdminChangeLayer Gorodok_AAS_v1" },
  ]},
  { cat: "match", name: "AdminSetNextLayer", faction: "Syntax: AdminSetNextLayer <LayerName>", cmds: [
    { v: "Yehorivka AAS", c: "AdminSetNextLayer Yehorivka_AAS_v1" },
    { v: "Skorpo RAAS", c: "AdminSetNextLayer Skorpo_RAAS_v1" },
    { v: "Chora TC", c: "AdminSetNextLayer Chora_TC_v1" },
  ]},
  { cat: "match", name: "AdminRestartMatch", faction: "No parameters", cmds: [
    { v: "Restart", c: "AdminRestartMatch" },
  ]},
  { cat: "match", name: "AdminEndMatch", faction: "No parameters", cmds: [
    { v: "End Match", c: "AdminEndMatch" },
  ]},
  { cat: "match", name: "AdminPauseMatch", faction: "No parameters", cmds: [
    { v: "Pause", c: "AdminPauseMatch" },
  ]},
  { cat: "match", name: "AdminUnpauseMatch", faction: "No parameters", cmds: [
    { v: "Unpause", c: "AdminUnpauseMatch" },
  ]},
  { cat: "match", name: "AdminBroadcast", faction: "Syntax: AdminBroadcast <Message>", cmds: [
    { v: "Warning", c: "AdminBroadcast Server restart in 5 minutes" },
    { v: "Rules", c: "AdminBroadcast No intentional teamkilling. Report to admins." },
  ]},

  // ── Team & Squad Management ──────────────────────────────
  { cat: "team", name: "AdminForceTeamChange", faction: "Syntax: AdminForceTeamChange <PlayerName>", cmds: [
    { v: "By Name", c: "AdminForceTeamChange PlayerName" },
  ]},
  { cat: "team", name: "AdminForceTeamChangeById", faction: "Syntax: AdminForceTeamChangeById <PlayerID>", cmds: [
    { v: "By ID", c: "AdminForceTeamChangeById 3" },
  ]},
  { cat: "team", name: "AdminDisbandSquad", faction: "Syntax: AdminDisbandSquad <Team> <SquadIndex>", cmds: [
    { v: "Team 1 Squad 1", c: "AdminDisbandSquad 1 1" },
    { v: "Team 2 Squad 3", c: "AdminDisbandSquad 2 3" },
  ]},
  { cat: "team", name: "AdminRemovePlayerFromSquad", faction: "Syntax: AdminRemovePlayerFromSquad <PlayerName>", cmds: [
    { v: "By Name", c: "AdminRemovePlayerFromSquad PlayerName" },
  ]},
  { cat: "team", name: "AdminDemoteCommander", faction: "Syntax: AdminDemoteCommander <PlayerName>", cmds: [
    { v: "By Name", c: "AdminDemoteCommander PlayerName" },
  ]},

  // ── Server Settings ──────────────────────────────────────
  { cat: "server", name: "AdminSetMaxNumPlayers", faction: "Syntax: AdminSetMaxNumPlayers <Number>", cmds: [
    { v: "100 Players", c: "AdminSetMaxNumPlayers 100" },
    { v: "80 Players", c: "AdminSetMaxNumPlayers 80" },
    { v: "40 Players", c: "AdminSetMaxNumPlayers 40" },
  ]},
  { cat: "server", name: "AdminSetServerPassword", faction: "Syntax: AdminSetServerPassword <Password>", cmds: [
    { v: "Set Password", c: 'AdminSetServerPassword mypassword123' },
    { v: "Remove Password", c: 'AdminSetServerPassword ""' },
  ]},
  { cat: "server", name: "AdminSlomo", faction: "Syntax: AdminSlomo <TimeDilation>", cmds: [
    { v: "Slow (10%)", c: "AdminSlomo 0.1" },
    { v: "Half Speed", c: "AdminSlomo 0.5" },
    { v: "Normal", c: "AdminSlomo 1.0" },
    { v: "Double Speed", c: "AdminSlomo 2.0" },
    { v: "5x Speed", c: "AdminSlomo 5.0" },
  ]},

  // ── Gameplay Overrides ───────────────────────────────────
  { cat: "gameplay", name: "AdminAllKitsAvailable", faction: "Syntax: AdminAllKitsAvailable <0|1>", cmds: [
    { v: "Enable", c: "AdminAllKitsAvailable 1" },
    { v: "Disable", c: "AdminAllKitsAvailable 0" },
  ]},
  { cat: "gameplay", name: "AdminAlwaysValidPlacement", faction: "Syntax: AdminAlwaysValidPlacement <0|1>", cmds: [
    { v: "Enable", c: "AdminAlwaysValidPlacement 1" },
    { v: "Disable", c: "AdminAlwaysValidPlacement 0" },
  ]},
  { cat: "gameplay", name: "AdminDisableVehicleClaiming", faction: "Syntax: AdminDisableVehicleClaiming <0|1>", cmds: [
    { v: "Disable Claiming", c: "AdminDisableVehicleClaiming 1" },
    { v: "Enable Claiming", c: "AdminDisableVehicleClaiming 0" },
  ]},

  // ── Demo & Recording ─────────────────────────────────────
  { cat: "demo", name: "AdminDemoRec", faction: "Syntax: AdminDemoRec <FileName>", cmds: [
    { v: "Record", c: "AdminDemoRec my_recording" },
  ]},
  { cat: "demo", name: "AdminDemoPlay", faction: "Syntax: AdminDemoPlay <FileName>", cmds: [
    { v: "Play", c: "AdminDemoPlay my_recording" },
  ]},
  { cat: "demo", name: "AdminDemoStop", faction: "No parameters", cmds: [
    { v: "Stop", c: "AdminDemoStop" },
  ]},
];
