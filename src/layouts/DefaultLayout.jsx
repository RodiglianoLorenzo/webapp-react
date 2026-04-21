import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

export default function DefaultLayout() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <AppHeader />
            <main className="flex-grow-1">
                <Outlet />
            </main>
            <AppFooter />
        </div>
    );
}