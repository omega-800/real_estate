import React from 'react';
import {Link} from 'react-router-dom';

const EditHouse = (props) => {
    return (
        <div className="house">
            <div className="house_infos">
                <img className="house_image" src={process.env.PUBLIC_URL+"/img/"+props.frontimage} alt={props.name}/>
                <div className="house_description">
                    <h2>{props.name}</h2>
                    <p>{props.address}, {props.city}</p>
                    <p>{props.state}, {props.postalcode}, {props.country}</p>
                    <p>{props.description}</p>
                    {props.editable ? <Link className="house_edit" to="/">Edit</Link> : ''}
                </div>
            </div>
            <h3>Apartments</h3>
            <div className="house_apartments">
                {Object.keys(props.apartments).map((apartment, i) => {
                    return <div className="apartment_infos">
                    <img className="apartment_image" src={process.env.PUBLIC_URL+"/img/"+props.apartments[apartment].frontImage} alt={props.apartments[apartment].name}/>
                    <div className="apartment_description">
                        <h3>{props.apartments[apartment].name}</h3>
                        <p>{props.apartments[apartment].address}</p>
                        <p>{props.apartments[apartment].description}</p>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Size</th>
                                    <th>Rooms</th>
                                    <th>Price</th>
                                    <th>Available</th>
                                </tr>
                                <tr>
                                    <td>{props.apartments[apartment].size}</td>
                                    <td>{props.apartments[apartment].rooms}</td>
                                    <td>{props.apartments[apartment].price}</td>
                                    <td>{props.apartments[apartment].availability ? 'yes' : 'no'}</td>
                                </tr>
                            </tbody>
                        </table>
                        {props.editable ? <Link className="house_edit" to="/">Edit</Link> : ''}
                    </div>
                </div>;})}
            </div>
        </div>
    )
}

export default EditHouse;
