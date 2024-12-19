import { create } from "zustand";

type TtaskStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const taskStore = create<TtaskStore>((set) => ({
  count: 0,
  increment: () => set((store) => ({ count: store.count + 1 })),
  decrement: () => set((store) => ({ count: store.count - 1 })),
  reset: () => set({ count: 0 }),
}));
