import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer'
import NavigationBar from '../../components/NavigationBar'
import SearchBar from "../../components/SearchBar";
import Categories from '../../components/Categories'


const Index = ({ state }) => {

    return (
        <>
            <NavigationBar />
            <div className="container">
                <div className="content">
                    {/* <SearchBar /> */}
                    <Categories state={state} />
                </div>
            </div>
            <Footer />
        </>
    )
}

Index.getInitialProps = async ({ query }) => {
    const {state} = query;
    return {state}
}

export default Index;