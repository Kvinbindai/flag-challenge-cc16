import React, { useContext, useState } from "react";
import { FlagContext } from "../context/FlagContext";

export default function WeatherComponent({ children }) {
  const { currentWeather, changeFahrenheitToCelsius, setDate } =
    useContext(FlagContext);

  return (
    <div className="text-center bg-gray-400 pt-5 pb-10 px-5 min-w-80">
      <h1 className="text-3xl">{children}</h1>
      <div className="mt-5">
        <div>Date : {setDate()} </div>
        <div>
          Temperature :{" "}
          {currentWeather ? (
            <>
              {changeFahrenheitToCelsius(currentWeather.main.temp)}{" "}
              <span>&#8451;</span>
            </>
          ) : (
            "Temperature"
          )}{" "}
        </div>
        <div>
          Status :{" "}
          {currentWeather ? currentWeather.weather[0].description : "None"}{" "}
        </div>
      </div>
    </div>
  );
}
