export type TelegramUser = {
    id: number;
    is_bot?: boolean;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    is_premium?: boolean;
    // поля WebApp могут содержать дополнительные флаги
    [key: string]: unknown;
};

export type UserProfile = {
    id: number;
    username?: string | null;
    isPremium?: boolean;
};
