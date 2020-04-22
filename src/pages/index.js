import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'
import InformationComponent from '../components/InformationComponent'

export default function Index() {
    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="content">
                    <InformationComponent/>
                </div>
            </div>
            <Footer />
        </div>
    )
}