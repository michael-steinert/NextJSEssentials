import Navbar from "../components/Navbar/Navbar";

const DefaultLayout = ({children}) => {

    return (
        <>
            <Navbar/>
            <main>
                {children}
            </main>
        </>
    );
}

export default DefaultLayout;