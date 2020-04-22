import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'
import InformationComponent from '../components/InformationComponent'
import SearchBar from '../components/SearchBar'
import SearchContainer from '../components/SearchContainer'

export default function Index() {
    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="content">
                    <SearchContainer />
                    <InformationComponent/>
                </div>
            </div>
            <Footer />
        </div>
    )
}