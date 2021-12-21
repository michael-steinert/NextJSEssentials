import Navbar from "../../components/Navbar/Navbar";
import {useEffect, useState} from "react";
import Card from "../../components/Card/Card";
import DefaultLayout from "../../layouts/Default";
import Head from "next/head";

const Index = () => {
    const [cats, setCats] = useState([]);

    const fetchCats = async () => {
        /* Using the built-in Fetch Function */
        const response = await fetch("/api/cats");
        const data = await response.json();
        setCats(data);
    }

    useEffect(() => {
        fetchCats().catch(console.error);
    }, []);

    return (
        <DefaultLayout>
            <Head>
                <title>Available Cats</title>
            </Head>
            <div className={"container mt-5"}>
                <div style={{display: "flex", flexWrap: "wrap"}}>
                    {
                        cats.map((cat, key) => {
                            return (
                                <Card
                                    key={key}
                                    name={cat.name}
                                    phone={cat.phone}
                                    email={cat.email}
                                    image={cat.image}
                                    id={cat.id}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Index;