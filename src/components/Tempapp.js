import React, { useEffect, useState } from "react";
import "./css/style.css";
import pic1 from "../components/pic1.png";
import pic2 from "../components/pic2.png";
import { FaCity } from "react-icons/fa";


const Tempapp = () => {

    const [city, setCity] = useState("null");
    const [search, setSearch] = useState("Mumbai");

    useEffect(() => {
        const fetchApi = async () => {

            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=33ddb28799920b00ff43a2bc51f3cf93`
            const response = await fetch(url);
            const resJson = await response.json();

            setCity(resJson.main);

        };
        fetchApi();
    }, [search])

    return (
        <>

            <div className="box">
                <div className="inputdata">
                    <input
                        type="search"
                        className="inputFeild"
                        value={search}
                        placeholder="Enter your city"
                        onChange={(event) => { setSearch(event.target.value) }}
                    />
                </div>
                {!city ?
                    (
                        <p>No Data Found</p>
                    )
                    : (
                        <div>
                            <div className="info">
                                <h2 className="location">
                                    {search}<FaCity className="icon" />
                                </h2>
                                <h1 className="temp">
                                    {city.temp}°Cel
                                </h1>
                                <div className="minmax">
                                    <div className="min">
                                        <img className="img1" src={pic2} />
                                        <h3> Min : {city.temp_min}°C</h3>
                                    </div>
                                    <div className="max">
                                        <img className="img1" src={pic1} />
                                        <h3> Max : {city.temp_max}°C</h3>
                                    </div>
                                </div>
                                <div  className="humidity">
                                    <h3>Humidity : {city.humidity}</h3>
                                    <h3>pressure : {city.pressure}</h3>
                                </div>

                            </div>
                        </div>
                    )}


            </div>
        </>
    )
}

export default Tempapp; 