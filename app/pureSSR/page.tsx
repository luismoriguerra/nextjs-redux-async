import Image from "next/image";

import { store } from "@/app/store";
import SSRPokemonTable from "../components/SSRPokemonTable";
import { setStartupPokemon } from "../store/searchSlice";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/search?");
  const data = await response.json();

  store.dispatch(setStartupPokemon(data));

  return (
    <main>
      <SSRPokemonTable />
    </main>
  );
}
