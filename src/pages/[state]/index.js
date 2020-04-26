import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer'
import NavigationBar from '../../components/NavigationBar'
import SearchBar from "../../components/SearchBar";
import Categories from '../../components/Categories'


const Index = () => {
    const  router = useRouter();

    const [categories, setCategories] = useState({});
    const [count, setCount] = useState(0);


    const { state } = router.query;

    useEffect(() => {

        async function fetchCategories() {
            const url = `https://api.covidfyi.in/v1/state/${state}`;

            const results = await fetch(url);
            results
                .json()
                .then(res => setCategories([... new Set(res.results.map(data => data.category))]));
        }

        fetchCategories();
    }, [count])

    setTimeout(() => setCount(1), 100)

    return (
        <>
            <NavigationBar />
            <div className="container">
                <div className="content">
                    {/* <SearchBar /> */}
                    <Categories categories={categories} state={state} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Index;