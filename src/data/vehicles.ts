import { Vehicle } from "./types";

export const VEHICLES: Vehicle[] = [
  // ── Main Battle Tanks ──────────────────────────────────────
  { cat: "tanks", name: "M1A2 Abrams", faction: "US Army", cmds: [
    { v: "Desert", c: "AdminCreateVehicle /Game/vehicles/M1A2/BP_M1A2.BP_M1A2_C" },
    { v: "Woodland", c: "AdminCreateVehicle /Game/vehicles/M1A2/BP_M1A2_woodland.BP_M1A2_woodland_C" },
  ]},
  { cat: "tanks", name: "M1A1 Abrams", faction: "USMC / AUS", cmds: [
    { v: "USMC Desert", c: "AdminCreateVehicle /Game/Vehicles/M1A1_USMC/BP_M1A1_USMC.BP_M1A1_USMC_C" },
    { v: "USMC Woodland", c: "AdminCreateVehicle /Game/Vehicles/M1A1_USMC/BP_M1A1_USMC_Woodland.BP_M1A1_USMC_Woodland_C" },
    { v: "Australian", c: "AdminCreateVehicle /Game/vehicles/AUS_M1A1/BP_AUS_M1A1.BP_AUS_M1A1_C" },
  ]},
  { cat: "tanks", name: "Leopard 2A6M", faction: "CAF / UK", cmds: [
    { v: "Desert", c: "AdminCreateVehicle /Game/Vehicles/Leopard2/BP_2A6_Desert.BP_2A6_Desert_C" },
    { v: "Woodland", c: "AdminCreateVehicle /Game/Vehicles/Leopard2/BP_2A6_Woodland.BP_2A6_Woodland_C" },
    { v: "Desert Cage", c: "AdminCreateVehicle /Game/Vehicles/Leopard2/BP_2A6_Desert_Cage.BP_2A6_Desert_Cage_C" },
    { v: "Woodland Cage", c: "AdminCreateVehicle /Game/Vehicles/Leopard2/BP_2A6_Woodland_Cage.BP_2A6_Woodland_Cage_C" },
  ]},
  { cat: "tanks", name: "FV4034 Challenger 2", faction: "UK", cmds: [
    { v: "Desert", c: "AdminCreateVehicle /Game/vehicles/FV4034/BP_FV4034.BP_FV4034_C" },
    { v: "Woodland", c: "AdminCreateVehicle /Game/vehicles/FV4034/BP_FV4034_woodland.BP_FV4034_woodland_C" },
  ]},
  { cat: "tanks", name: "T-72B3", faction: "Russia", cmds: [
    { v: "Desert", c: "AdminCreateVehicle /Game/vehicles/T72B3/BP_T72B3_Desert.BP_T72B3_Desert_C" },
    { v: "Woodland", c: "AdminCreateVehicle /Game/vehicles/T72B3/BP_T72B3.BP_T72B3_C" },
  ]},
  { cat: "tanks", name: "T-62", faction: "INS / MIL / MEA", cmds: [
    { v: "Militia", c: "AdminCreateVehicle /Game/vehicles/T62/BP_T62_MIL.BP_T62_MIL_C" },
    { v: "Insurgents", c: "AdminCreateVehicle /Game/vehicles/T62/BP_T62.BP_T62_C" },
    { v: "MEA", c: "AdminCreateVehicle /Game/vehicles/T62/BP_T62_MEA.BP_T62_MEA_C" },
  ]},
  { cat: "tanks", name: "T-72S", faction: "MEA", cmds: [
    { v: "MEA", c: "AdminCreateVehicle /Game/vehicles/T72AV/BP_T72AV_MEA.BP_T72AV_MEA_C" },
  ]},
  { cat: "tanks", name: "ZTZ-99A", faction: "PLA (China)", cmds: [
    { v: "Woodland", c: "AdminCreateVehicle /Game/Vehicles/ZTZ99/BP_ZTZ99.BP_ZTZ99_C" },
    { v: "Desert", c: "AdminCreateVehicle /Game/Vehicles/ZTZ99/BP_ZTZ99_Desert.BP_ZTZ99_Desert_C" },
    { v: "Woodland Cage", c: "AdminCreateVehicle /Game/Vehicles/ZTZ99/BP_ZTZ99_wCage.BP_ZTZ99_wCage_C" },
    { v: "Desert Cage", c: "AdminCreateVehicle /Game/Vehicles/ZTZ99/BP_ZTZ99_Desert_wCage.BP_ZTZ99_Desert_wCage_C" },
  ]},

  // ── IFVs / APCs ────────────────────────────────────────────
  { cat: "ifv", name: "M2A3 Bradley", faction: "US Army", cmds: [
    { v: "Desert", c: "AdminCreateVehicle /Game/vehicles/BFV/BP_BFV.BP_BFV_C" },
    { v: "Woodland", c: "AdminCreateVehicle /Game/Vehicles/BFV/BP_BFV_Woodland.BP_BFV_Woodland_C" },
  ]},
  { cat: "ifv", name: "FV510 Warrior", faction: "UK", cmds: [
    { v: "Desert", c: "AdminCreateVehicle /Game/vehicles/FV510/BP_FV510.BP_FV510_C" },
    { v: "Woodland", c: "AdminCreateVehicle /Game/vehicles/FV510/BP_FV510_Woodland.BP_FV510_Woodland_C" },
    { v: "Up-Armoured Desert", c: "AdminCreateVehicle /Game/vehicles/FV510/BP_FV510UA.BP_FV510UA_C" },
    { v: "Up-Armoured Woodland", c: "AdminCreateVehicle /Game/vehicles/FV510/BP_FV510UA_Woodland.BP_FV510UA_Woodland_C" },
  ]},
  { cat: "ifv", name: "FV520 CTAS40", faction: "UK", cmds: [
    { v: "Desert", c: "AdminCreateVehicle /Game/Vehicles/FV510_40mm/BP_FV510UA_CTAS40.BP_FV510UA_CTAS40_C" },
    { v: "Woodland", c: "AdminCreateVehicle /Game/Vehicles/FV510_40mm/BP_FV510UA_CTAS40_Woodland.BP_FV510UA_CTAS40_Woodland_C" },
  ]},
  { cat: "ifv", name: "BMP-1", faction: "INS / MIL / MEA", cmds: [
    { v: "Militia", c: "AdminCreateVehicle /Game/vehicles/BMP-1/BP_BMP1_MIL.BP_BMP1_MIL_C" },
    { v: "Insurgents", c: "AdminCreateVehicle /Game/vehicles/BMP-1/BP_BMP1_INS.BP_BMP1_INS_C" },
    { v: "MEA", c: "AdminCreateVehicle /Game/vehicles/BMP-1/BP_BMP1_MEA.BP_BMP1_MEA_C" },
    { v: "ZU-23 Militia", c: "AdminCreateVehicle /Game/vehicles/BMP-1/BP_BMP1_MIL_ZU23.BP_BMP1_MIL_ZU23_C" },
  ]},
  { cat: "ifv", name: "BMP-2", faction: "Russia / MEA", cmds: [
    { v: "Woodland", c: "AdminCreateVehicle /Game/vehicles/BMP-2/BP_BMP2.BP_BMP2_C" },
    { v: "Desert", c: "AdminCreateVehicle /Game/vehicles/BMP-2/BP_BMP2_Desert.BP_BMP2_Desert_C" },
    { v: "MEA", c: "AdminCreateVehicle /Game/vehicles/BMP-2/BP_BMP2_MEA.BP_BMP2_MEA_C" },
  ]},
  { cat: "ifv", name: "ZBD-04A", faction: "PLA (China)", cmds: [
    { v: "Woodland", c: "AdminCreateVehicle /Game/Vehicles/ZBD04A/BP_ZBD04A.BP_ZBD04A_C" },
    { v: "Desert", c: "AdminCreateVehicle /Game/Vehicles/ZBD04A/BP_ZBD04A_Desert.BP_ZBD04A_Desert_C" },
  ]},
  { cat: "ifv", name: "BMD-4M", faction: "Russia (VDV)", cmds: [
    { v: "Woodland", c: "AdminCreateVehicle /Game/Vehicles/BMD-4M/BP_BMD4M.BP_BMD4M_C" },
    { v: "Desert", c: "AdminCreateVehicle /Game/Vehicles/BMD-4M/BP_BMD4M_Desert.BP_BMD4M_Desert_C" },
  ]},
  { cat: "ifv", name: "Sprut-SDM1", faction: "Russia (VDV)", cmds: [
    { v: "Woodland", c: "AdminCreateVehicle /Game/Vehicles/Sprut-SDM1/BP_Sprut.BP_Sprut_C" },
    { v: "Desert", c: "AdminCreateVehicle /Game/Vehicles/Sprut-SDM1/BP_Sprut_Desert.BP_Sprut_Desert_C" },
  ]},
  { cat: "ifv", name: "AAVP7A1", faction: "USMC", cmds: [
    { v: "Desert", c: "AdminCreateVehicle /Game/Vehicles/AAVP7A1/BP_AAVP7A1.BP_AAVP7A1_C" },
    { v: "Woodland", c: "AdminCreateVehicle /Game/Vehicles/AAVP7A1/BP_AAVP7A1_Woodland.BP_AAVP7A1_Woodland_C" },
    { v: "Logi Desert", c: "AdminCreateVehicle /Game/Vehicles/AAVP7A1/BP_AAVP7A1_Logi.BP_AAVP7A1_Logi_C" },
  ]},

  // ── Wheeled Armor ──────────────────────────────────────────
  { cat: "wheeled", name: "M1126 Stryker", faction: "US Army", cmds: [
    { v: "CROWS Desert", c: "AdminCreateVehicle /Game/Vehicles/M1126/BP_M1126.BP_M1126_C" },
    { v: "CROWS Woodland", c: "AdminCreateVehicle /Game/Vehicles/M1126/BP_M1126_Woodland.BP_M1126_Woodland_C" },
    { v: "M240 Desert", c: "AdminCreateVehicle /Game/Vehicles/M1126/BP_M1126_M240.BP_M1126_M240_C" },
    { v: "M240 Woodland", c: "AdminCreateVehicle /game/vehicles/M1126/BP_M1126_M240_Woodland.BP_M1126_M240_Woodland_C" },
  ]},
  { cat: "wheeled", name: "LAV-25A2", faction: "USMC", cmds: [
    { v: "Desert", c: "AdminCreateVehicle /Game/Vehicles/LAV25/BP_LAV25.BP_LAV25_C" },
    { v: "Woodland", c: "AdminCreateVehicle /Game/Vehicles/LAV25/BP_LAV25_Woodland.BP_LAV25_Woodland_C" },
  ]},
  { cat: "wheeled", name: "LAV 6.0", faction: "CAF", cmds: [
    { v: "Desert", c: "AdminCreateVehicle /Game/Vehicles/LAV6/BP_LAV6_Desert.BP_LAV6_Desert_C" },
    { v: "Woodland", c: "AdminCreateVehicle /Game/Vehicles/LAV6/BP_LAV6_Woodland.BP_LAV6_Woodland_C" },
  ]},
  { cat: "wheeled", name: "ASLAV", faction: "Australia", cmds: [
    { v: "Default", c: "AdminCreateVehicle /Game/vehicles/ASLAV/BP_ASLAV.BP_ASLAV_C" },
  ]},
  { cat: "wheeled", name: "BTR-80", faction: "Russia / INS / MIL", cmds: [
    { v: "RUS Desert", c: "AdminCreateVehicle /Game/Vehicles/BTR80/BP_BTR80_RUS_Desert.BP_BTR80_RUS_Desert_C" },
    { v: "RUS Woodland", c: "AdminCreateVehicle /Game/Vehicles/BTR80/BP_BTR80_RUS.BP_BTR80_RUS_C" },
    { v: "Militia", c: "AdminCreateVehicle /Game/Vehicles/BTR80/BP_BTR80_Militia.BP_BTR80_Militia_C" },
    { v: "Insurgents", c: "AdminCreateVehicle /Game/Vehicles/BTR80/BP_BTR80_INS.BP_BTR80_INS_C" },
  ]},
  { cat: "wheeled", name: "BTR-82A", faction: "Russia", cmds: [
    { v: "Desert", c: "AdminCreateVehicle /Game/Vehicles/BTR80/82A/BP_BTR82A_RUS_Desert.BP_BTR82A_RUS_Desert_C" },
    { v: "Woodland", c: "AdminCreateVehicle /Game/Vehicles/BTR80/82A/BP_BTR82A_RUS.BP_BTR82A_RUS_C" },
  ]},
  { cat: "wheeled", name: "FV107 Scimitar", faction: "UK", cmds: [
    { v: "Desert", c: "AdminCreateVehicle /Game/Vehicles/FV107/BP_FV107.BP_FV107_C" },
    { v: "Woodland", c: "AdminCreateVehicle /Game/Vehicles/FV107/BP_FV107_Woodland.BP_FV107_Woodland_C" },
  ]},
  { cat: "wheeled", name: "BRDM-2", faction: "Russia / INS / MIL / MEA", cmds: [
    { v: "RUS Desert", c: "AdminCreateVehicle /Game/Vehicles/BRDM-2/BP_BRDM-2_RUS_Desert.BP_BRDM-2_RUS_Desert_C" },
    { v: "RUS Woodland", c: "AdminCreateVehicle /Game/Vehicles/BRDM-2/BP_BRDM-2_RUS.BP_BRDM-2_RUS_C" },
    { v: "Spandrel RUS", c: "AdminCreateVehicle /game/vehicles/BRDM-2/BP_BRDM-2_Spandrel_RUS.BP_BRDM-2_Spandrel_RUS_C" },
    { v: "Militia", c: "AdminCreateVehicle /Game/Vehicles/BRDM-2/BP_BRDM-2.BP_BRDM-2_C" },
    { v: "MEA", c: "AdminCreateVehicle /game/vehicles/BRDM-2/BP_BRDM-2_MEA.BP_BRDM-2_MEA_C" },
  ]},
  { cat: "wheeled", name: "ZBL-08", faction: "PLA (China)", cmds: [
    { v: "Woodland", c: "AdminCreateVehicle /Game/Vehicles/ZBL08/BP_ZBL08.BP_ZBL08_C" },
    { v: "Desert", c: "AdminCreateVehicle /Game/Vehicles/ZBL08/BP_ZBL08_Desert.BP_ZBL08_Desert_C" },
    { v: "HJ-73C Woodland", c: "AdminCreateVehicle /Game/Vehicles/ZBL08/BP_ZBL08_HJ73C.BP_ZBL08_HJ73C_C" },
  ]},

  // ── Light Vehicles ─────────────────────────────────────────
  { cat: "light", name: "M-ATV", faction: "US / USMC", cmds: [
    { v: "CROWS Desert", c: "AdminCreateVehicle /Game/Vehicles/MATV/BP_MATV_CROWS.BP_MATV_CROWS_C" },
    { v: "CROWS Woodland", c: "AdminCreateVehicle /Game/Vehicles/MATV/BP_MATV_CROWS_Woodland.BP_MATV_CROWS_Woodland_C" },
    { v: "TOW Desert", c: "AdminCreateVehicle /game/vehicles/MATV/BP_MATV_TOW.BP_MATV_TOW_C" },
    { v: "TOW Woodland", c: "AdminCreateVehicle /game/vehicles/MATV/BP_MATV_TOW_Woodland.BP_MATV_TOW_Woodland_C" },
    { v: "USMC M2", c: "AdminCreateVehicle /Game/Vehicles/MATV/BP_MATV_USMC.BP_MATV_USMC_C" },
  ]},
  { cat: "light", name: "HMMWV M1151", faction: "USMC / INS", cmds: [
    { v: "Armoured Desert", c: "AdminCreateVehicle /Game/Vehicles/M1151/BP_M1151.BP_M1151_C" },
    { v: "Armoured Woodland", c: "AdminCreateVehicle /Game/Vehicles/M1151/BP_M1151_Woodland.BP_M1151_Woodland_C" },
    { v: "CROWS Desert", c: "AdminCreateVehicle /Game/Vehicles/M1151/BP_M1151_CROWS.BP_M1151_CROWS_C" },
    { v: "INS DShK", c: "AdminCreateVehicle /Game/Vehicles/M1151/BP_M1151_Technical.BP_M1151_Technical_C" },
  ]},
  { cat: "light", name: "TAPV", faction: "CAF", cmds: [
    { v: "M2 Woodland", c: "AdminCreateVehicle /Game/Vehicles/TAPV/BP_TAPV.BP_TAPV_C" },
    { v: "M2 Desert", c: "AdminCreateVehicle /Game/Vehicles/TAPV/BP_TAPV_Desert.BP_TAPV_Desert_C" },
  ]},
  { cat: "light", name: "LPPV Foxhound", faction: "UK", cmds: [
    { v: "Desert", c: "AdminCreateVehicle /Game/vehicles/LPPV/BP_LPPV.BP_LPPV_C" },
    { v: "Woodland", c: "AdminCreateVehicle /Game/Vehicles/LPPV/BP_LPPV_Woodland.BP_LPPV_Woodland_C" },
    { v: "RWS Desert", c: "AdminCreateVehicle /Game/Vehicles/LPPV/BP_LPPV_M2RWS.BP_LPPV_M2RWS_C" },
  ]},
  { cat: "light", name: "PMV Bushmaster", faction: "Australia", cmds: [
    { v: "MAG-58", c: "AdminCreateVehicle /Game/Vehicles/PMV/BP_PMV_Mag58.BP_PMV_Mag58_C" },
    { v: "MAG-58 x3", c: "AdminCreateVehicle /Game/Vehicles/PMV/BP_PMV_Mag58x3.BP_PMV_Mag58x3_C" },
    { v: "RWS", c: "AdminCreateVehicle /Game/Vehicles/PMV/BP_PMV_RWS.BP_PMV_RWS_C" },
  ]},
  { cat: "light", name: "Tigr-M", faction: "Russia", cmds: [
    { v: "Kord Desert", c: "AdminCreateVehicle /Game/Vehicles/Tigr/BP_Tigr_Desert.BP_Tigr_Desert_C" },
    { v: "Kord Woodland", c: "AdminCreateVehicle /Game/Vehicles/Tigr/BP_Tigr.BP_Tigr_C" },
    { v: "RWS Desert", c: "AdminCreateVehicle /Game/Vehicles/Tigr/BP_Tigr_RWS_Desert.BP_Tigr_RWS_Desert_C" },
    { v: "RWS Woodland", c: "AdminCreateVehicle /Game/Vehicles/Tigr/BP_Tigr_RWS.BP_Tigr_RWS_C" },
  ]},
  { cat: "light", name: "Safir Jeep", faction: "MEA", cmds: [
    { v: "Logistics", c: "AdminCreateVehicle /game/vehicles/Safir/BP_Safir.BP_Safir_C" },
    { v: "MG3", c: "AdminCreateVehicle /game/vehicles/Safir/BP_Safir_MG3.BP_Safir_MG3_C" },
    { v: "Kornet ATGM", c: "AdminCreateVehicle /game/vehicles/Safir/BP_Safir_Kornet.BP_Safir_Kornet_C" },
  ]},
  { cat: "light", name: "CSK-131", faction: "PLA (China)", cmds: [
    { v: "RWS Woodland", c: "AdminCreateVehicle /Game/Vehicles/CSK131/BP_CSK131_RWS.BP_CSK131_RWS_C" },
    { v: "RWS Desert", c: "AdminCreateVehicle /Game/Vehicles/CSK131/BP_CSK131_RWS_Desert.BP_CSK131_RWS_Desert_C" },
    { v: "HJ-8 ATGM", c: "AdminCreateVehicle /Game/Vehicles/CSK131/BP_CSK131_HJ-8ATGM.BP_CSK131_HJ-8ATGM_C" },
  ]},
  { cat: "light", name: "LUV-A1 Gator", faction: "US Army", cmds: [
    { v: "Transport", c: "AdminCreateVehicle /Game/Vehicles/M-Gator/BP_M-Gator_Transport.BP_M-Gator_Transport_C" },
    { v: "Logistics", c: "AdminCreateVehicle /Game/Vehicles/M-Gator/BP_M-Gator_Logistics.BP_M-Gator_Logistics_C" },
  ]},
  { cat: "light", name: "Minsk Motorbike", faction: "INS / MIL", cmds: [
    { v: "Red", c: "AdminCreateVehicle /Game/Vehicles/Minsk_motorbike/BP_minsk.BP_minsk_C" },
    { v: "Black", c: "AdminCreateVehicle /Game/Vehicles/Minsk_motorbike/BP_Minsk_black.BP_Minsk_black_C" },
    { v: "Blue", c: "AdminCreateVehicle /Game/Vehicles/Minsk_motorbike/BP_Minsk_blue.BP_Minsk_blue_C" },
  ]},

  // ── Trucks / Logistics ─────────────────────────────────────
  { cat: "trucks", name: "M939 Truck", faction: "US / USMC", cmds: [
    { v: "Transport Desert", c: "AdminCreateVehicle /Game/Vehicles/US_Util_Truck/BP_US_Util_Desert.BP_US_Util_Desert_C" },
    { v: "Logi Desert", c: "AdminCreateVehicle /Game/Vehicles/US_Util_Truck/BP_US_Util_Desert_Logi.BP_US_Util_Desert_Logi_C" },
    { v: "Transport Woodland", c: "AdminCreateVehicle /Game/Vehicles/US_Util_Truck/BP_US_Util_Woodland.BP_US_Util_Woodland_C" },
    { v: "Logi Woodland", c: "AdminCreateVehicle /Game/Vehicles/US_Util_Truck/BP_US_Util_Woodland_Logi.BP_US_Util_Woodland_Logi_C" },
  ]},
  { cat: "trucks", name: "MAN HX60", faction: "UK / AUS", cmds: [
    { v: "UK Transport", c: "AdminCreateVehicle /game/vehicles/British_Util_Truck/BP_Brit_Util_Truck.BP_Brit_Util_Truck_C" },
    { v: "UK Logi", c: "AdminCreateVehicle /game/vehicles/British_Util_Truck/BP_Brit_Util_Truck_Logi.BP_Brit_Util_Truck_Logi_C" },
    { v: "AUS Transport", c: "AdminCreateVehicle /Game/Vehicles/AUS_Utility_Truck/BP_Aussie_Util_Truck.BP_Aussie_Util_Truck_C" },
    { v: "AUS Logi", c: "AdminCreateVehicle /Game/Vehicles/AUS_Utility_Truck/BP_Aussie_Util_Truck_Logi.BP_Aussie_Util_Truck_Logi_C" },
  ]},
  { cat: "trucks", name: "MSVS Truck", faction: "CAF", cmds: [
    { v: "Transport Desert", c: "AdminCreateVehicle /Game/Vehicles/CAF_Utility_Truck/BP_CAF_Util_Desert.BP_CAF_Util_Desert_C" },
    { v: "Logi Woodland", c: "AdminCreateVehicle /Game/Vehicles/CAF_Utility_Truck/BP_CAF_Util_Woodland_Logi.BP_CAF_Util_Woodland_Logi_C" },
  ]},
  { cat: "trucks", name: "Ural 4320", faction: "Russia / MEA", cmds: [
    { v: "RUS Woodland", c: "AdminCreateVehicle /Game/Vehicles/Ural4320/BP_Ural_4320.BP_Ural_4320_C" },
    { v: "RUS Logi Woodland", c: "AdminCreateVehicle /Game/Vehicles/Ural4320/BP_Ural_4320_logi.BP_Ural_4320_logi_C" },
    { v: "MEA Transport", c: "AdminCreateVehicle /Game/Vehicles/Ural4320/BP_Ural_4320_MEA.BP_Ural_4320_MEA_C" },
    { v: "MEA Logi", c: "AdminCreateVehicle /Game/Vehicles/Ural4320/BP_Ural_4320_logi_MEA.BP_Ural_4320_logi_MEA_C" },
  ]},
  { cat: "trucks", name: "Kamaz 5350", faction: "Russia", cmds: [
    { v: "Transport Woodland", c: "AdminCreateVehicle /Game/Vehicles/Kamaz_5350/BP_Kamaz_5350.BP_Kamaz_5350_C" },
    { v: "Logi Woodland", c: "AdminCreateVehicle /Game/Vehicles/Kamaz_5350/BP_Kamaz_5350_Logi.BP_Kamaz_5350_Logi_C" },
    { v: "Transport Desert", c: "AdminCreateVehicle /Game/Vehicles/Kamaz_5350/BP_Kamaz_5350_Desert.BP_Kamaz_5350_Desert_C" },
    { v: "Logi Desert", c: "AdminCreateVehicle /Game/Vehicles/Kamaz_5350/BP_Kamaz_5350_Logi_Desert.BP_Kamaz_5350_Logi_Desert_C" },
  ]},
  { cat: "trucks", name: "Ural 375D", faction: "INS / MIL", cmds: [
    { v: "MIL Transport", c: "AdminCreateVehicle /Game/Vehicles/Ural375/BP_Ural_375_Mil.BP_Ural_375_Mil_C" },
    { v: "MIL Logi", c: "AdminCreateVehicle /Game/Vehicles/Ural375/BP_Ural_375_Logi_Mil.BP_Ural_375_Logi_Mil_C" },
    { v: "INS Transport", c: "AdminCreateVehicle /Game/Vehicles/Ural375/BP_Ural_375_INS.BP_Ural_375_INS_C" },
    { v: "INS Logi", c: "AdminCreateVehicle /Game/Vehicles/Ural375/BP_Ural_375_Logi_INS.BP_Ural_375_Logi_INS_C" },
    { v: "MIL ZU-23", c: "AdminCreateVehicle /Game/Vehicles/Ural375/BP_Ural_375_ZU23_MIL.BP_Ural_375_ZU23_MIL_C" },
  ]},
  { cat: "trucks", name: "CTM-131", faction: "PLA (China)", cmds: [
    { v: "Logi Woodland", c: "AdminCreateVehicle /Game/Vehicles/CTM131_Truck/BP_CTM131_Logistic.BP_CTM131_Logistic_C" },
    { v: "Logi Desert", c: "AdminCreateVehicle /Game/Vehicles/CTM131_Truck/BP_CTM131_Logistic_Desert.BP_CTM131_Logistic_Desert_C" },
    { v: "12.7mm Woodland", c: "AdminCreateVehicle /Game/Vehicles/CTM131_Truck/BP_CTM131_QJZ89.BP_CTM131_QJZ89_C" },
  ]},

  // ── Technicals / Artillery ─────────────────────────────────
  { cat: "technicals", name: "Technical (Old)", faction: "Insurgents", cmds: [
    { v: "DShK", c: "AdminCreateVehicle /Game/Vehicles/Technical/BP_Technical_Dshk_INS.BP_Technical_Dshk_INS_C" },
    { v: "DShK Armoured", c: "AdminCreateVehicle /Game/Vehicles/Technical/BP_Technical_Dshk_INS_Armoured.BP_Technical_Dshk_INS_Armoured_C" },
    { v: "SPG-9", c: "AdminCreateVehicle /Game/Vehicles/Technical/BP_Technical_SPG9_INS.BP_Technical_SPG9_INS_C" },
    { v: "UB-32 Rockets", c: "AdminCreateVehicle /Game/Vehicles/Technical/BP_Technical_UB32_INS.BP_Technical_UB32_INS_C" },
    { v: "Transport", c: "AdminCreateVehicle /Game/Vehicles/Technical/BP_Technical_Transport_INS.BP_Technical_Transport_INS_C" },
    { v: "Logi", c: "AdminCreateVehicle /Game/Vehicles/Technical/BP_Technical_Logi_INS.BP_Technical_Logi_INS_C" },
  ]},
  { cat: "technicals", name: "Technical (Old)", faction: "Militia", cmds: [
    { v: "DShK", c: "AdminCreateVehicle /Game/Vehicles/Technical/BP_Technical_Dshk_MIL.BP_Technical_Dshk_MIL_C" },
    { v: "UB-32 Rockets", c: "AdminCreateVehicle /Game/Vehicles/Technical/BP_Technical_UB32_MIL.BP_Technical_UB32_MIL_C" },
    { v: "Transport", c: "AdminCreateVehicle /Game/Vehicles/Technical/BP_Technical_Transport_MIL.BP_Technical_Transport_MIL_C" },
    { v: "Logi", c: "AdminCreateVehicle /Game/Vehicles/Technical/BP_Technical_Logi_MIL.BP_Technical_Logi_MIL_C" },
  ]},
  { cat: "technicals", name: "Technical (New)", faction: "Insurgents", cmds: [
    { v: "M2 HMG", c: "AdminCreateVehicle /Game/Vehicles/Technical2Seater/BP_Technical2Seater_White_M2.BP_Technical2Seater_White_M2_C" },
    { v: "DShK", c: "AdminCreateVehicle /Game/Vehicles/Technical2Seater/BP_Technical2Seater_White_Dshk.BP_Technical2Seater_White_Dshk_C" },
    { v: "ZU-23 AA", c: "AdminCreateVehicle /Game/Vehicles/Technical2Seater/BP_Technical2Seater_White_ZU23.BP_Technical2Seater_White_ZU23_C" },
    { v: "UB-32 Rockets", c: "AdminCreateVehicle /Game/Vehicles/Technical2Seater/BP_Technical2Seater_White_UB32.BP_Technical2Seater_White_UB32_C" },
    { v: "BMP-1 Turret", c: "AdminCreateVehicle /Game/Vehicles/Technical2Seater/BP_Technical2Seater_White_BMP1.BP_Technical2Seater_White_BMP1_C" },
    { v: "Mortar", c: "AdminCreateVehicle /Game/Vehicles/Technical2Seater/BP_Technical2Seater_White_Mortar.BP_Technical2Seater_White_Mortar_C" },
  ]},
  { cat: "technicals", name: "Technical (New)", faction: "Militia", cmds: [
    { v: "M2 HMG", c: "AdminCreateVehicle /Game/Vehicles/Technical2Seater/BP_Technical2Seater_Camo_M2.BP_Technical2Seater_Camo_M2_C" },
    { v: "SPG-9", c: "AdminCreateVehicle /Game/Vehicles/Technical2Seater/BP_Technical2Seater_Camo_SPG9.BP_Technical2Seater_Camo_SPG9_C" },
    { v: "ZU-23 AA", c: "AdminCreateVehicle /Game/Vehicles/Technical2Seater/BP_Technical2Seater_Camo_ZU23.BP_Technical2Seater_Camo_ZU23_C" },
    { v: "UB-32 Rockets", c: "AdminCreateVehicle /Game/Vehicles/Technical2Seater/BP_Technical2Seater_Camo_UB32.BP_Technical2Seater_Camo_UB32_C" },
  ]},
  { cat: "technicals", name: "BM-21 Grad MLRS", faction: "INS / MIL", cmds: [
    { v: "Militia", c: "AdminCreateVehicle /Game/Vehicles/BM21Grad/BP_BM21Grad_MIL.BP_BM21Grad_MIL_C" },
    { v: "Insurgents", c: "AdminCreateVehicle /Game/Vehicles/BM21Grad/BP_BM21Grad_INS.BP_BM21Grad_INS_C" },
  ]},

  // ── Helicopters ────────────────────────────────────────────
  { cat: "helicopters", name: "UH-60M Blackhawk", faction: "US / AUS", cmds: [
    { v: "US", c: "AdminCreateVehicle /Game/Vehicles/UH60M/BP_UH60.BP_UH60_C" },
    { v: "Australian", c: "AdminCreateVehicle /Game/Vehicles/AUS_UH60M/BP_UH60_AUS.BP_UH60_AUS_C" },
  ]},
  { cat: "helicopters", name: "UH-1Y Venom", faction: "USMC", cmds: [
    { v: "Default", c: "AdminCreateVehicle /Game/Vehicles/UH1Y/BP_UH1Y.BP_UH1Y_C" },
  ]},
  { cat: "helicopters", name: "UH-1H Huey", faction: "Various", cmds: [
    { v: "Desert", c: "AdminCreateVehicle /Game/Vehicles/UH1H/BP_UH1H_Desert.BP_UH1H_Desert_C" },
    { v: "Turkish", c: "AdminCreateVehicle /Game/Vehicles/UH1H/BP_UH1H.BP_UH1H_C" },
  ]},
  { cat: "helicopters", name: "MI-8", faction: "Russia", cmds: [
    { v: "Standard", c: "AdminCreateVehicle /Game/Vehicles/MI8/BP_MI8.BP_MI8_C" },
    { v: "VDV", c: "AdminCreateVehicle /Game/Vehicles/MI8/BP_MI8_VDV.BP_MI8_VDV_C" },
  ]},
  { cat: "helicopters", name: "MI-17", faction: "MEA / CAF", cmds: [
    { v: "MEA", c: "AdminCreateVehicle /Game/Vehicles/MI17_MEA/BP_MI17_MEA.BP_MI17_MEA_C" },
    { v: "CAF (CH-178)", c: "AdminCreateVehicle /Game/Vehicles/MI17_MEA/BP_CH178.BP_CH178_C" },
  ]},
  { cat: "helicopters", name: "SA330 Puma", faction: "UK", cmds: [
    { v: "Default", c: "AdminCreateVehicle /Game/Vehicles/SA330/BP_SA330.BP_SA330_C" },
  ]},
  { cat: "helicopters", name: "MRH-90", faction: "Australia", cmds: [
    { v: "MAG-58", c: "AdminCreateVehicle /Game/Vehicles/MRH90/BP_MRH90_Mag58.BP_MRH90_Mag58_C" },
  ]},
  { cat: "helicopters", name: "CH-146 Griffon", faction: "CAF", cmds: [
    { v: "Default", c: "AdminCreateVehicle /Game/Vehicles/CH146/BP_CH146.BP_CH146_C" },
  ]},
  { cat: "helicopters", name: "Z-8G", faction: "PLA (China)", cmds: [
    { v: "Default", c: "AdminCreateVehicle /Game/Vehicles/Z8G/BP_Z8G.BP_Z8G_C" },
  ]},

  // ── Boats ──────────────────────────────────────────────────
  { cat: "boats", name: "RHIB Boat", faction: "Various", cmds: [
    { v: "Transport", c: "AdminCreateVehicle /Game/Vehicles/RHIB/BP_RHIB_Transport.BP_RHIB_Transport_C" },
    { v: "US M240", c: "AdminCreateVehicle /Game/Vehicles/RHIB/BP_RHIB_US_M240.BP_RHIB_US_M240_C" },
    { v: "US M2 HMG", c: "AdminCreateVehicle /Game/Vehicles/RHIB/BP_RHIB_US_M2.BP_RHIB_US_M2_C" },
    { v: "RUS PKP", c: "AdminCreateVehicle /Game/Vehicles/RHIB/BP_RHIB_RUS_PKP.BP_RHIB_RUS_PKP_C" },
    { v: "MEA MG3", c: "AdminCreateVehicle /Game/Vehicles/RHIB/BP_RHIB_MEA_MG3.BP_RHIB_MEA_MG3_C" },
    { v: "PLA QJZ-89", c: "AdminCreateVehicle /Game/Vehicles/RHIB/BP_RHIB_QJZ89.BP_RHIB_QJZ89_C" },
  ]},

  // ── Emplacements ───────────────────────────────────────────
  { cat: "emplacements", name: "BGM-71 TOW", faction: "US", cmds: [
    { v: "Tripod", c: "AdminCreateDeployable /Game/Gameplay/Deployables/Emplacements/BP_BGM71TOW_Tripod_USA.BP_BGM71TOW_Tripod_USA_C" },
  ]},
  { cat: "emplacements", name: "SPG-9 Recoilless", faction: "Various", cmds: [
    { v: "Tripod", c: "AdminCreateDeployable /Game/Gameplay/Deployables/Emplacements/BP_SPG9_Tripod.BP_SPG9_Tripod_C" },
  ]},
  { cat: "emplacements", name: "ZU-23 Anti-Air", faction: "Various", cmds: [
    { v: "Emplacement", c: "AdminCreateDeployable /Game/Gameplay/Deployables/Emplacements/BP_ZU-23_Emplacement.BP_ZU-23_Emplacement_C" },
  ]},
  { cat: "emplacements", name: "DShK HMG", faction: "Various", cmds: [
    { v: "Default", c: "AdminCreateDeployable /Game/Gameplay/Deployables/Emplacements/BP_DShK.BP_DShK_C" },
  ]},
  { cat: "emplacements", name: "M252 Mortar", faction: "US", cmds: [
    { v: "Default", c: "AdminCreateDeployable /Game/Gameplay/Deployables/Emplacements/BP_m252mortar_Deployable.BP_m252mortar_Deployable_C" },
  ]},
  { cat: "emplacements", name: "2B14 Mortar", faction: "Russia", cmds: [
    { v: "Default", c: "AdminCreateDeployable /Game/Gameplay/Deployables/Emplacements/BP_2b14podnosmortar_Deployable.BP_2b14podnosmortar_Deployable_C" },
  ]},
  { cat: "emplacements", name: "Hell Cannon", faction: "Insurgents", cmds: [
    { v: "Default", c: "AdminCreateDeployable /Game/Vehicles/Emplaced_HellCannon/BP_Emplaced_HellCannon_Deployable.BP_Emplaced_HellCannon_Deployable_C" },
  ]},
  { cat: "emplacements", name: "HJ-8 ATGM", faction: "PLA (China)", cmds: [
    { v: "Default", c: "AdminCreateDeployable /Game/Vehicles/Emplaced_HJ-8ATGM/BP_HJ-8ATGM_Deployable.BP_HJ-8ATGM_Deployable_C" },
  ]},

  // ── FOBs / HABs / Deployables ──────────────────────────────
  { cat: "deployables", name: "FOB Radio", faction: "Various", cmds: [
    { v: "US Woodland", c: "AdminCreateDeployable /Game/Gameplay/Deployables/Radios/USA/BP_FOBRadio_Woodland.BP_FOBRadio_Woodland_C" },
    { v: "Russia", c: "AdminCreateDeployable /Game/Gameplay/Deployables/Radios/RUS/BP_FOBRadio_RUS.BP_FOBRadio_RUS_C" },
    { v: "INS", c: "AdminCreateDeployable /Game/Gameplay/Deployables/Radios/INS/BP_FobRadio_INS.BP_FobRadio_INS_C" },
    { v: "MEA", c: "AdminCreateDeployable /Game/Gameplay/Deployables/Radios/MEA/BP_FOBRadio_MEA.BP_FOBRadio_MEA_C" },
    { v: "Militia/IMF", c: "AdminCreateDeployable /Game/Gameplay/Deployables/Radios/IMF/BP_FOBRadio_IMF.BP_FOBRadio_IMF_C" },
  ]},
  { cat: "deployables", name: "HAB Spawn Bunker", faction: "Various", cmds: [
    { v: "US Desert", c: "AdminCreateDeployable /Game/Gameplay/Deployables/HABs/USA/US_Hab_Desert.US_Hab_Desert_C" },
    { v: "US Forest", c: "AdminCreateDeployable /Game/Gameplay/Deployables/HABs/USA/US_Hab_Forest.US_Hab_Forest_C" },
    { v: "RUS Woodland", c: "AdminCreateDeployable /Game/Gameplay/Deployables/HABs/RUS/Rus_Hab_Woodland.Rus_Hab_Woodland_C" },
    { v: "INS", c: "AdminCreateDeployable /Game/Gameplay/Deployables/HABs/Ins/INS_Hab.INS_Hab_C" },
    { v: "Militia", c: "AdminCreateDeployable /Game/Gameplay/Deployables/HABs/Mil/Mil_hab.Mil_hab_C" },
    { v: "MEA", c: "AdminCreateDeployable /Game/Gameplay/Deployables/HABs/MEA/MEA_Hab.MEA_Hab_C" },
  ]},
  { cat: "deployables", name: "Ammo Crate", faction: "Various", cmds: [
    { v: "US", c: "AdminCreateDeployable /Game/Gameplay/Deployables/Ammocrates/BP_Ammocrate.BP_Ammocrate_C" },
    { v: "Russia", c: "AdminCreateDeployable /Game/Gameplay/Deployables/Ammocrates/BP_rus_Ammocrate.BP_rus_Ammocrate_C" },
    { v: "INS", c: "AdminCreateDeployable /Game/Gameplay/Deployables/Ammocrates/BP_InsurgentAmmocrate.BP_InsurgentAmmocrate_C" },
    { v: "UK", c: "AdminCreateDeployable /Game/Gameplay/Deployables/Ammocrates/BP_Ammocrate_GB.BP_Ammocrate_GB_C" },
  ]},
  { cat: "deployables", name: "Repair Station", faction: "Various", cmds: [
    { v: "US", c: "AdminCreateDeployable /Game/Gameplay/Deployables/RepairStations/USA/BP_vehicle_repair.BP_vehicle_repair_C" },
    { v: "RUS Woodland", c: "AdminCreateDeployable /Game/Gameplay/Deployables/RepairStations/RUS/BP_vehicle_repair_Rus.BP_vehicle_repair_Rus_C" },
    { v: "Heli Pad", c: "AdminCreateDeployable /Gameplay/Deployables/HeliRepairPad/BP_helicopter_repair_pad.BP_helicopter_repair_pad_C" },
  ]},
  { cat: "deployables", name: "Tank Trap", faction: "Universal", cmds: [
    { v: "Hedgehog", c: "AdminCreateDeployable /Game/Gameplay/Deployables/HedgehogTank_Trap/BP_HedgehogTankTrap.BP_HedgehogTankTrap_C" },
  ]},
];
