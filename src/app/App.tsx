import {AppInit} from "./AppInit.tsx";
import {BottomNavigation} from "@/widgets";
import {PageWrapper} from "@/shared/ui/PageWrapper";
import {Header} from "@/shared/ui/Header";
import {PageContent} from "@/shared/ui/PageContent";
import {AppRouter} from "@/app/providers/router/ui/AppRouter.tsx";

function App() {
    return (
        <PageWrapper>
            <AppInit/>
            <Header/>
            <PageContent>
                <AppRouter/>
            </PageContent>
            <BottomNavigation/>
        </PageWrapper>
    )
}

export default App
