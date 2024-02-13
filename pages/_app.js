import Head from "next/head";
import "../lib/styles/main.css";
import Header from "../lib/components/Header";
import SideNav from "../lib/components/SideNav";
import { UserProvider } from "../lib/context/userContext";

const App = ({ Component }) => {
    return (
        <UserProvider>
            <main className="flex flex-col w-screen h-screen bg-[#4360b50e] overflow-hidden">
                <Header />
                <div className="flex gap-2 w-full">
                    <SideNav />
                    <Component />
                </div>
            </main>
        </UserProvider>
    );
};

export default App;
