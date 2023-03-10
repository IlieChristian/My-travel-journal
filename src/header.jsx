import React from 'react'

export default function Header() {
    return (
        <div className="header container-fluid py-3 mb-5">
            <div className="row justify-content-center align-items-center">
                <img src="../public/world.svg" className="logo" />
                <h2 className="h-title">my travel journal.</h2>
            </div>
        </div>
    )
}