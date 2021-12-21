import Head from "next/head"
import Jumbotron from "../components/Jumbotron/Jumbotron";
import DefaultLayout from "../layouts/Default";

const Home = () => {
    return (
        <>
            <Head>
                <title>NextJS Essentials</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DefaultLayout>
                <Jumbotron/>
            </DefaultLayout>
        </>
    );
}

export default Home;