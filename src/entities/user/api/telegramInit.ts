import type {TelegramUser} from '../model/types';
import {devMockUser, isDev} from "@/shared/config/devMode";

/**
 * Возвращает Telegram.initDataUnsafe.user (если доступен) или null.
 * НЕ выполняет валидацию подписи. Для проверки подписи отправляйте initData на backend.
 */
export const readTelegramUserFromWindow = (): TelegramUser | null => {
    const tg = window?.Telegram?.WebApp;

    if (isDev) {
        return devMockUser;
    }

    return tg?.initDataUnsafe?.user ?? null;
};
