import Ract from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt={props.name}/>
            <div className="card-content">
                <h2>{props.name}</h2>
                <p>{props.species}</p>
                <p>{props.status}</p>
            </div>
        </div>
    );
}