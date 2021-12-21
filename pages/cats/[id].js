import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import DefaultLayout from "../../layouts/Default";
import Head from "next/head";

const Cat = () => {
    const [cat, setCat] = useState(null);

    const router = useRouter();
    const {id} = router.query;

    const fetchCat = async () => {
        const response = await fetch(`/api/cats/${id}`);
        const data = await response.json();
        setCat(data);
    }

    useEffect(() => {
        fetchCat().catch(console.error);
    }, []);

    return (
        <DefaultLayout>
            {
                cat && (
                    <>
                        <Head>
                            <title>Cat {cat.name}</title>
                        </Head>
                        <div
                            className={"container mt-5"}
                            style={{display: "flex"}}
                        >
                            <img src={cat.image.url} alt={cat.image.alt}/>
                            <div className={"mx-5"}>
                                <h1>{cat.name}</h1>
                                <p>{cat.description}</p>
                            </div>
                        </div>
                    </>
                )
            }
        </DefaultLayout>
    );
}

export default Cat;