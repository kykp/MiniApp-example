import { Routes, Route } from "react-router-dom";
import { ROUTES } from "@/shared/config/routes";
import { HomePage } from "@/pages/HomePage";
import { ProfilePage } from "@/pages/ProfilePage";
import { TrackPage } from "@/pages/TrackPage";

export const AppRouter = () => (
    <Routes>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.profile} element={<ProfilePage />} />
        <Route path={ROUTES.track} element={<TrackPage />} />
    </Routes>
);
