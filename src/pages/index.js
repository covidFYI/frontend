import React from 'react'
import Footer from '../components/Footer'
import NavigationBar from '../components/NavigationBar'
import Infotypes from '../components/Infotypes'
import Content from '../components/Content'

class Index extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <div className="container">
                    <Content />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Index