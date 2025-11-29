export const isDev = import.meta.env.DEV;

export const devMockUser = isDev
    ? {
        id: 123456,
        first_name: "Dev",
        username: "dev_user",
    }
    : null;
