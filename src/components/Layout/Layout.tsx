import { HeaderComponent } from "../Header/HeaderComponent";
import { FooterComponent } from "../FooterComponent/FooterComponent";
import { Outlet } from "react-router-dom";

export const LayoutComponent = () => {
    return (
        <div>
            <HeaderComponent />

            <Outlet />

            <FooterComponent />
        </div>
    );
};
