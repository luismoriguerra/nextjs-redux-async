import Image from "next/image";

import { store } from "@/app/store";
import { setStartupPokemon } from "./store/searchSlice";
import SSRPokemonTable from "./components/SSRPokemonTable";
import Provider from "./components/Provider";
import SearchInput from "./components/SearchInput";
import Preloader from "./store/Preloader";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/search");
  const data: any[] = await response.json();

  // This only works on Server side and for SSR Pokemon table
  store.dispatch(setStartupPokemon(data));

  return (
    <main>
      {/* Any data tha is pass from Server to Client is serialized */}
      {/* Preload components will load pre data in store on client rendering */}
      <Preloader pokemons={data} />
      <Provider>
        {/* <SSRPokemonTable /> */}
        <SearchInput />
      </Provider>
    </main>
  );
}
