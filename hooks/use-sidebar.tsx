import { create } from "zustand";

interface SidebarStore {
  isSidebarOpen: boolean;
  toggleSidebar: (state: boolean) => void;
}

export const useSidebar = create<SidebarStore>((set, get) => ({
  isSidebarOpen: false,
  toggleSidebar: (toggleState: boolean) => {
    set(() => ({
      isSidebarOpen: toggleState ? toggleState : !get().isSidebarOpen,
    }));
  },
}));
