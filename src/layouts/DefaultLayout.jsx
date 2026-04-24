import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { useLoader } from '../context/Contextuploader';
import Contextuploader from '../components/Uploader';

export default function DefaultLayout() {

    const { Loading } = useLoader();

    return (
        <div className="d-flex flex-column min-vh-100">
            <AppHeader />
            {Loading && <Uploader />}
            <main className="flex-grow-1">
                <Outlet />
            </main>
            <AppFooter />
        </div>
    );
}