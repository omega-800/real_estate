import React from 'react';

const ViewHouse = () => {
    return (
        <div className="house">
            <div className="house_image">
                <Carousel 
                title={props.name}
                slides={props.images}
                />
            </div>
            <div className="house_infos">
                <table>
                    <tbody>
                        <tr>
                            <th>Description</th>
                            <td>{props.description}</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                            <td>{props.address}</td>
                        </tr>
                        <tr>
                            <th>City</th>
                            <td>{props.city}</td>
                        </tr>
                        <tr>
                            <th>State</th>
                            <td>{props.state}</td>
                        </tr>
                        <tr>
                            <th>Postal code</th>
                            <td>{props.postalcode}</td>
                        </tr>
                        <tr>
                            <th>Country</th>
                            <td>{props.country}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewHouse;
