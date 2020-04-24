import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer'
import NavigationBar from '../../components/NavigationBar'
import SearchBar from "../../components/SearchBar";
import Categories from '../../components/Categories';
import CategoryData from '../../components/CategoryData';

const State = () => {
    const router = useRouter(); 

    const { state, category } = router.query;


    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="content">
                    <SearchBar />
                    <Categories state={state} category={category} />
                    <div className="breadcrumbs">
                        <a href="/">Home</a>
                        <img src="/assets/breadcrum-arrow.svg" />
                        <a href={`/${state}`}>{state}</a>
                        <img src="/assets/breadcrum-arrow.svg" />
                        <a href={`/${category}`}>{category}</a>
                    </div>
                    <CategoryData state={state} category={category}  />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default State;