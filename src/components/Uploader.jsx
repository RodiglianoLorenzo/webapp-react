import { ClipLoader } from "react-spinners";

export default function Uploader() {
    return (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75 z-3">
            <div className="text-center">
                <div
                    className="spinner-border text-light"
                    style={{ width: "3.5rem", height: "3.5rem" }}
                    role="status"
                >
                    <span className="visually-hidden">Caricamento...</span>
                </div>
                <p className="text-white mt-3 fw-semibold fs-6 text-uppercase letter-spacing-1">
                    Loading...
                </p>
            </div>
        </div>
    );
}