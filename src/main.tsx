import ReactDOM from 'react-dom/client';

import './app/styles/fonts.css';
import './app/styles/variables.css';
import './app/styles/global.css';

import { AppProviders } from '@/app/providers/AppProviders';
import App from "@/app/App.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AppProviders>
        <App />
    </AppProviders>
);
