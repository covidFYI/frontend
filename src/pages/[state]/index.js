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
            const url = `http://localhost/api/v1/state/${state}`;

            const results = await fetch(url);
            results
                .json()
                .then(res => setCategories([... new Set(res.entries.map(data => data.category))]));
        }

        fetchCategories();
    }, [count])

    setTimeout(() => setCount(1), 100)

    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="content">
                    <SearchBar />
                    <Categories categories={categories} state={state} />
                    <p>{`Home => ${state}`}</p>
                    <div className="data-container">

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Index;