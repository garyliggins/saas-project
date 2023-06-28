import Meta from "../components/Meta";
import Navbar from "../components/Navbar";

export default function AppLayout({children}) {
    return (
        <>
        <Meta></Meta>
        <Navbar></Navbar>
        {children}
        </>
    )
}
