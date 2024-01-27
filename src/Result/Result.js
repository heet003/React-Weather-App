import React from "react";
import "./Result.css";
import Table from "../components/Table/Table";
// import Header from "./Header/Header";

function Result(props) {
  console.log(props.data);
  let imageURL =
    "https://openweathermap.org/img/wn/" +
    props.data.weather[0].icon +
    "@4x.png";
  return (
    <div className="result-container">
      <h3 className="city-name">{(props.data.name).toLocaleUpperCase()}</h3>
      <hr />
      <Table
        td1={<p className="temp">{props.data.main.temp}॰C</p>}
        td2={
          <div className="info-container">
            <p className="info">{(props.data.weather[0].description).toLocaleUpperCase()}</p>
            <p className="max">
              max:
              <span className="max-temp">{props.data.main.temp_max}॰C</span>
            </p>
            <p className="min">
              min:
              <span className="min-temp">{props.data.main.temp_min}॰C</span>
            </p>
          </div>
        }
      />

      <img className="weather-icon" src={imageURL} alt="weather icon"></img>
      <Table
        td1={
          <React.Fragment>
            <p className="feelsLike">{props.data.main.feels_like}॰C</p>
            <span className="table-two-span"> Feels Like</span>
          </React.Fragment>
        }
        td2={
          <React.Fragment>
            <p className="humidity">{props.data.main.humidity}%</p>
            <span className="table-two-span"> Humidity</span>
          </React.Fragment>
        }
      />
    </div>
  );
}

export default Result;
