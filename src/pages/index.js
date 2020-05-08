import React from "react";
import fetch from "isomorphic-unfetch";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import Infotypes from "../components/Infotypes";
import Content from "../components/Content";

class Index extends React.Component {
	render() {
		return (
			<div>
				<NavigationBar />
				<div className="container">
					<Content initialProps={this.props.results} />
				</div>
				<Footer />
			</div>
		);
	}
}

function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
}

export async function getServerSideProps() {
	const res = await fetch("https://api.covidfyi.in/v1/news");
    var json = await res.json();
    json = (shuffleArray(json.results)).slice(0, 7);
	return {
        props: {results: json}
    };
}

export default Index;
