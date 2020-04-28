import LaboratoryStats from "../components/LaboratoryStats";
import OverallStats from "../components/OverallStats";
import HospitalsStats from "../components/HospitalsStats";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import CovidHistoryChart from "../components/CovidHistoryChart";

const Stats = () => {
  return (
    <div>
      <NavigationBar />
      <div
        className="container stats-container"
        style={{ padding: "2rem", paddingBottom: "14rem" }}
      >
        <div className="pie-area">
          <div className="cov-history-chart">
            <h5>Covid Cases (Past 2 Weeks) </h5>
            <CovidHistoryChart />
          </div>
          <div className="overall-stats-chart">
            <h5>Overall Statistics (India)</h5>
            <OverallStats />
          </div>
        </div>

        {/* <LaboratoryStats/> */}
        <HospitalsStats height={1200} />
      </div>
      <Footer />
    </div>
  );
};
export default Stats;
