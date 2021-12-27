import React from 'react';
import {useState, useEffect} from 'react';
import {db} from '../firebase';
import {collection, getDocs} from 'firebase/firestore';
import { useResolvedPath } from 'react-router';
import House from '../components/House';
import './Home.css';

const Home = () => {
    const [houses, setHouses] = useState([]);
    const housesCollecionsRef = collection(db, 'houses');

    useEffect(() => {
        const getHouses = async () => {
            const data = await getDocs(housesCollecionsRef);
            setHouses(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getHouses();
    }, [])

    return (
        <div className="home">
            <h1>Home</h1>
            <div className="houses">
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
                    editable={false}
                    />;
                })}
                
            </div>
        </div>
    )
}

export default Home;