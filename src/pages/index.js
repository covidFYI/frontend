import React from 'react'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'
import InformationComponent from '../components/InformationComponent'
import SearchContainer from '../components/SearchContainer'
import Infotypes from '../components/Infotypes'
import Categories from '../components/Categories'

class Index extends React.Component {

    state = {
        stateSelected: null,
        showInfoTypes: false,
        availableInfoTypes: []
    }

    getSelectedState = (state) => {
        this.setState({ stateSelected: state, showInfoTypes: false }, this.getInfoTypes)
    }

    getInfoTypes = async () => {
        // NOTE: Till new backend is not deployed, we can use flask backend from organisation repo on our localhost.
        const res = await fetch(`http://localhost/api/v1/state/${this.state.stateSelected}`)
        const stateData = await res.json()
        const infotypes = [... new Set(stateData.entries.map(data => data.category))]
        this.setState({ availableInfoTypes: infotypes, showInfoTypes: true })
        console.log(infotypes) // For Debugging
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <div className="container">
                    <div className="content">
                        <SearchContainer getSelectedState={this.getSelectedState} />
                        { this.state.showInfoTypes ? <Categories state={this.state.stateSelected} /> : null }
                        <InformationComponent/>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Index