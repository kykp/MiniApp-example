import {useEffect} from "react";
import {useUserStore} from "@/entities/user/model/store.ts";
import {readTelegramUserFromWindow} from "@/entities/user/api/telegramInit.ts";

export const useTelegramInit = () => {
    const setFromTelegramUser = useUserStore((s) => s.setFromTelegramUser);

    useEffect(() => {
        const tg = window?.Telegram?.WebApp;

        // если WebApp доступен — сразу читаем user
        const maybeUser = readTelegramUserFromWindow();

        console.log('maybeUser', maybeUser)
        if (maybeUser) {
            setFromTelegramUser(maybeUser);
        }

        // signal Telegram that UI готова (безопасно вызывать если tg есть)
        if (tg?.ready) {
            try { tg.ready(); } catch { /* молча */ }
        }
    }, [setFromTelegramUser]);
};
