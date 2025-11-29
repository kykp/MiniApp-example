import { create } from 'zustand';
import { UserProfile, TelegramUser } from './types';

type UserState = {
    profile: UserProfile | null;
    setFromTelegramUser: (u: TelegramUser) => void;
    clear: () => void;
};

export const useUserStore = create<UserState>((set) => ({
    profile: null,
    setFromTelegramUser: (u) =>
        set({
            profile: {
                id: u.id,
                username: u.username ?? null,
                isPremium: Boolean(u.is_premium),
            },
        }),
    clear: () => set({ profile: null }),
}));
