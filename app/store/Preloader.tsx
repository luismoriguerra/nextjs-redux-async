"use client";

import { useRef } from "react";
import { store } from ".";
import { setStartupPokemon } from "./searchSlice";

function Preloader({ pokemons }: { pokemons: any[] }) {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setStartupPokemon(pokemons));
    loaded.current = true;
  }

  return null;
}

export default Preloader;
