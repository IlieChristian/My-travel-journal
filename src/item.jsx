import React from 'react'

export default function Item(props) {
    return (
        <div className="container py-3">
            <div className="row gy-5 d-flex align-items-center">
                <div className="col-lg-4">
                    <img src={props.coverImg} className="img-fluid location-img rounded-1"/>
                </div>
                <div className="col-lg-8 journal-content">
                    <div className="d-flex align-items-center mb-2">
                        <img src="geo-alt-fill.svg" className="map-logo "/>
                        <p className="ms-1 location">{props.location}</p>
                        <a href={props.google} className="ms-3 view-btn">View on Google Maps</a>
                    </div>
                    <h1 className="my-2 fs-2">{props.title}</h1>
                    <p className="mb-3 journal-date">{props.date.firstDate.day} {props.date.firstDate.month}, {props.date.firstDate.year} - {props.date.secondDate.day} {props.date.secondDate.month}, {props.date.secondDate.year}</p>
                    <p className="journal-description">{props.description}</p>
                </div>
            </div>
            {props.id !== 3 && <hr className="mt-5" />}
        </div>
    )
}