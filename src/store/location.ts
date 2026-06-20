import { locations } from "#constants";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const DEFAULT_LOCATION = locations?.work;

type state = {
    activeLocation: typeof DEFAULT_LOCATION | null;
}

const useLocationStore = create(immer((set) => ({
    activeLocation: DEFAULT_LOCATION,
    setActiveLocation: (location: typeof DEFAULT_LOCATION | null = null) => set((state: state) => {
        state.activeLocation = location
    }),
    resetActiveLcoation: () => set((state: state) => {
        state.activeLocation = DEFAULT_LOCATION
    })
})))

export default useLocationStore;