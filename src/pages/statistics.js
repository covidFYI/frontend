import LaboratoryStats from "../components/LaboratoryStats"
import OverallStats from "../components/OverallStats"
import HospitalsStats from "../components/HospitalsStats"
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";


const Stats = () => {
    return (
        <div>
            <NavigationBar />
            <div className="container stats-container" style={{padding: "2rem", paddingBottom: "14rem"}}>
                <OverallStats/>
                <LaboratoryStats/>
                <HospitalsStats height={1200}/>
            </div>
            <Footer />
        </div>
    )
}
export default Stats;