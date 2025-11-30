import React from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./query/queryClient";

interface AppProvidersProps {
    children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    </BrowserRouter>
);
