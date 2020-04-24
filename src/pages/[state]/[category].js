import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer'
import NavigationBar from '../../components/NavigationBar'
import SearchBar from "../../components/SearchBar";
import Categories from '../../components/Categories';
import CategoryData from '../../components/CategoryData';


const State = () => {
    const router = useRouter();

    const [categories, setCategories] = useState({});

    const [data, setCategory] = useState([]);
    const [count, setCount] = useState(0);

    const { state, category } = router.query;

    let catData = []

    async function fetchData() {
        const url = `http://localhost/api/v1/state/${state}/${category}`;

        const results = await fetch(url);
        results
            .json()
            .then(res => setCategory(res.entries))
    }

    async function fetchCategories() {
        const url = `http://localhost/api/v1/state/${state}`;

        const results = await fetch(url);
        results
            .json()
            .then(res => setCategories([... new Set(res.entries.map(data => data.category))]));

        catData = data

        console.log(data)
    }

    useEffect(() => {
        fetchData();
        fetchCategories();
    }, [count])

    setTimeout(() => setCount(1), 2500)

    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="content">
                    <SearchBar />
                    <Categories categories={categories} state={state} category={category} data={catData} />
                    <p>{`Home => ${state} => ${category}`}</p>
                    <CategoryData data={catData} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default State;