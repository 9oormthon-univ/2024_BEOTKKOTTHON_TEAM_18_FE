import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type TokenStore = {
  token: string | null;
  setToken: (token: string) => void;
  removeToken: () => void;
};

const tokenStore = create(
  persist<TokenStore>(
    (set) => ({
      token: null,
      setToken: (token: string) => set({ token }),
      removeToken: () => set({ token: null })
    }),
    {
      name: 'token-storage'
    }
  )
);

export default tokenStore;
