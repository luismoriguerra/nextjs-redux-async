import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SearchState {
  search: string;
  startupPokemon: any[];
}

const initialState: SearchState = {
  search: "",
  startupPokemon: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setStartupPokemon: (state, action: PayloadAction<any[]>) => {
      state.startupPokemon = action.payload;
    },
  },
});

export const { setSearch, setStartupPokemon } = searchSlice.actions;
export default searchSlice.reducer;
