import {Route, Routes} from "react-router-dom";
import {AppInit} from "./AppInit.tsx";
import {Header, PageContent, PageWrapper} from "@/shared/ui";
import {HomePage, ProfilePage} from "@/pages";
import {BottomNavigation} from "@/widgets";

function App() {
    return (
        <PageWrapper>
            <AppInit/>
            <Header/>
            <PageContent>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                </Routes>
            </PageContent>
            <BottomNavigation/>
        </PageWrapper>
    )
}

export default App
