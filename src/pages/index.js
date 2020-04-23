import React from 'react'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'
import InformationComponent from '../components/InformationComponent'
import SearchContainer from '../components/SearchContainer'

class Index extends React.Component {

    state = {
        stateSelected: null,
        showInfoTypes: false,
        availableInfoTypes: []
    }

    getSelectedState = (state) => {
        this.setState({ stateSelected: state }, this.getInfoTypes)
    }

    getInfoTypes = async () => {
        const res = await fetch(`http://localhost/api/v1/state/${this.state.stateSelected}`)
        const stateData = await res.json()
        const infotypes = [... new Set(stateData.entries.map(data => data.category))]
        this.setState({ availableInfoTypes: infotypes, showInfoTypes: true })
        console.log(infotypes)
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <div className="container">
                    <div className="content">
                        <SearchContainer getSelectedState={this.getSelectedState} />
                        <InformationComponent/>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Index