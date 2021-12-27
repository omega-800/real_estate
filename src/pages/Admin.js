import React from 'react';
import {useState, useEffect} from 'react';
import {db} from '../firebase';
import {collection, getDocs} from 'firebase/firestore';
import { useResolvedPath } from 'react-router';
import House from '../components/House';
import './Admin.css';

const Admin = () => {
    const [houses, setHouses] = useState([]);
    const [apartments, setApartments] = useState([]);
    const housesCollecionsRef = collection(db, 'houses');

    useEffect(() => {
        const getHouses = async () => {
            const data = await getDocs(housesCollecionsRef);
            setHouses(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getHouses();
    }, [])

    function handleChange(event){
        const a = [];
        for(var i = 0; i<event.target.value;i++){
            a.push("a");
        }
        setApartments(a);
    }

    return (
        <div className="admin">
            <h1>Admin</h1>
            <div className="admin_add">
                <h2>Add House</h2>
                <input type="text" placeholder="Name" required/>
                <input type="text" placeholder="Description" required/>
                <input type="text" placeholder="Address" required/>
                <input type="text" placeholder="City" required/>
                <input type="text" placeholder="Postal code" required/>
                <input type="text" placeholder="State" required/>
                <input type="text" placeholder="Country" required/>
                <input type="text" placeholder="first_image.jpg" required/>
                <input type="text" placeholder="image1.jpg, image2.jpg" required/>
                <input type="number" placeholder="Number of apartments" onChange={handleChange} required/>                
                {apartments.map((apartment) => {
                    return <div><h4>Add Apartment</h4>
                    <input type="text" placeholder="Name" required/>
                    <input type="text" placeholder="Description" required/>
                    <input type="text" placeholder="Address" required/>
                    <input type="text" placeholder="Available (y/n)" required/>
                    <input type="text" placeholder="Price" required/>
                    <input type="text" placeholder="Rooms" required/>
                    <input type="text" placeholder="Size" required/>
                    <input type="text" placeholder="first_image.jpg" required/>
                    <input type="text" placeholder="image1.jpg, image2.jpg" required/></div>;
                })}
            </div>
            <div className="admin_houses">
                {houses.map((house) => {
                    return <House 
                    key={house.id}
                    frontimage={house.frontImage}
                    images={house.images}
                    address={house.address}
                    city={house.city}
                    state={house.state}
                    country={house.country}
                    postalcode={house.postalCode}
                    description={house.description}
                    name={house.name}
                    apartments={house.apartments}
                    editable={true}
                    />;
                })}
                
            </div>
        </div>
    )
}

export default Admin;