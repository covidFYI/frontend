import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer'
import NavigationBar from '../../components/NavigationBar'
import SearchBar from "../../components/SearchBar";
import Categories from '../../components/Categories';
import CategoryData from '../../components/CategoryData';
import Link from 'next/link'

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
                        <Link href="/" as="/">Home</Link>
                        <img src="/assets/breadcrum-arrow.svg" />
                        <Link href="/[state]" as={`/${state}`}>{state}</Link>
                        <img src="/assets/breadcrum-arrow.svg" />
                        <Link href="/[state]/[category]" as={`/${state}/${category}`}>{category}</Link>
                    </div>
                    <CategoryData state={state} category={category}  />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default State;