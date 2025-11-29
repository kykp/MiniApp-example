declare global {
    interface Window {
        Telegram?: {
            WebApp?: {
                initData?: string;
                initDataUnsafe?: {
                    query_id?: string;
                    user?: {
                        id: number;
                        is_bot?: boolean;
                        first_name: string;
                        last_name?: string;
                        username?: string;
                        language_code?: string;
                        is_premium?: boolean;
                        [key: string]: unknown;
                    };
                    auth_date?: number;
                    [key: string]: unknown;
                };
                ready?: () => void;
                // другие методы WebApp (close, openLink, etc.) можно добавить при необходимости
                [key: string]: unknown;
            };
        };
    }
}

export {};
