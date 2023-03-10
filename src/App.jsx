import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import data from './data'
import Item from './item'
import Header from './header'
import Footer from './footer'

export default function App() {
    const card = data.map(element => { return <Item key={element.id} {...element} /> })
    return (
        <div>
            <Header />
            {card}
            <Footer />
        </div>
    )
}