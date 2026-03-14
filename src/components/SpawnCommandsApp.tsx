"use client";

import { useState } from "react";
import { CategoryKey } from "@/data/types";
import { CATEGORY_ORDER } from "@/data/categories";
import { VEHICLES } from "@/data/vehicles";
import { ADMIN_COMMANDS } from "@/data/admin-commands";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import CategorySection from "./CategorySection";
import Toast from "./Toast";

const ALL_ITEMS = [...VEHICLES, ...ADMIN_COMMANDS];

export default function SpawnCommandsApp() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<CategoryKey | "all">("all");

  const itemsByCategory = CATEGORY_ORDER.map((catKey) => ({
    catKey,
    vehicles: ALL_ITEMS.filter((v) => v.cat === catKey),
  })).filter((group) => group.vehicles.length > 0);

  return (
    <>
      <SearchBar value={search} onChange={setSearch} />
      <FilterBar active={activeFilter} onChange={setActiveFilter} />
      {itemsByCategory.map(({ catKey, vehicles }) => (
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
