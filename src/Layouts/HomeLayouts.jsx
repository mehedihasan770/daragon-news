import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/HomLayout/LeftAside";
import RightAside from "../Components/HomLayout/RightAside";

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto my-3">
                    <LatestNews></LatestNews>
                </section>
                <nav className="w-11/12 mx-auto my-3">
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-20">
                <aside className="col-span-3 sticky top-2 h-fit">
                    <LeftAside></LeftAside>
                </aside>
                <section className="col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="col-span-3 col-span-3 sticky top-2 h-fit">
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;