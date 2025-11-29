import React from 'react';
import { useTelegramInit } from '@/entities/user/hooks/useTelegramInit';

/**
 * Компонент, который должен быть вставлен в корень приложения
 * инициализирует состояние пользователя из Telegram.WebApp.
 */
export const AppInit: React.FC = () => {
    useTelegramInit();
    return null;
};
