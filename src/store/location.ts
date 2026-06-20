import { locations } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { Location } from "#/types";

const DEFAULT_LOCATION: Location | null = locations?.work ?? null;

type state = {
    activeLocation: Location | null;
    setActiveLocation: (location?: Location | null) => void;
    resetActiveLcoation: () => void;
}

const useLocationStore = create<state>()(immer((set) => ({
    activeLocation: DEFAULT_LOCATION,
    setActiveLocation: (location: Location | null = null) => set((state) => {
        state.activeLocation = location
    }),
    resetActiveLcoation: () => set((state) => {
        state.activeLocation = DEFAULT_LOCATION
    })
})))

export default useLocationStore;