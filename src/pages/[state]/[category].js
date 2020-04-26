import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import Footer from '../../components/Footer'
import NavigationBar from '../../components/NavigationBar'
import SearchBar from "../../components/SearchBar";
import Categories from '../../components/Categories';
import CategoryData from '../../components/CategoryData';
import Link from 'next/link'

   


const State = () => {

    const router = useRouter();

    const { state, category } = router.query;
    
    // const myRef = useRef(null)
    // useEffect(() => {
    //     window.scrollTo(0, myRef.current.offsetTop)
    // })


    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="content">
                    {/* <SearchBar /> */}
                    <Categories state={state} category={category} />
                    {/* Just for Scrolling */}
                    {/* <div ref={myRef}></div> */}
                    <div className="breadcrumbs">
                        <Link href="/" as="/"><a>Home</a></Link>
                        <img src="/assets/breadcrum-arrow.svg" />
                        <Link href="/[state]" as={`/${state}`}><a>{state}</a></Link>
                        <img src="/assets/breadcrum-arrow.svg" />
                        <Link href="/[state]/[category]" as={`/${state}/${category}`}><a>{category}</a></Link>
                    </div> 
                    <CategoryData state={state} category={category} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default State;