"use client";

import { useState } from "react";
import { CategoryKey } from "@/data/types";
import { CATEGORY_ORDER } from "@/data/categories";
import { VEHICLES } from "@/data/vehicles";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import CategorySection from "./CategorySection";
import Toast from "./Toast";

export default function SpawnCommandsApp() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<CategoryKey | "all">("all");

  const vehiclesByCategory = CATEGORY_ORDER.map((catKey) => ({
    catKey,
    vehicles: VEHICLES.filter((v) => v.cat === catKey),
  })).filter((group) => group.vehicles.length > 0);

  return (
    <>
      <SearchBar value={search} onChange={setSearch} />
      <FilterBar active={activeFilter} onChange={setActiveFilter} />
      {vehiclesByCategory.map(({ catKey, vehicles }) => (
        <CategorySection
          key={catKey}
          catKey={catKey}
          vehicles={vehicles}
          search={search}
          activeFilter={activeFilter}
        />
      ))}
      <Toast />
    </>
  );
}
