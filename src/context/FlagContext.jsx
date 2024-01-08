import { createContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";

const FlagContext = createContext();

const FlagContextProvider = ({ children }) => {
  const [allFlag, setAllFlag] = useState([]);
  const [currentFlag, setCurrentFlag] = useState(null);
  const [currentIndex, setCurrentIndex] = useState();
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentLocation, setCurrentLocation] = useState([51.505, -0.09]);
  const [keyword, setKeyword] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;

  const getData = () => {
    setAllFlag(() => {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => {
          setAllFlag(() => {
            let newData = data.map((e) => {
              e = {
                ...e,
                id: nanoid(),
              };
              return e;
            });
            setCurrentFlag(newData[0]);
            setCurrentIndex(newData[0].id);
            return newData;
          });
        })
        .catch((err) => console.log(err));
    });
  }

  useEffect(() => {
    getData()
  }, []);

  const handleClick = (data) => {
    setCurrentFlag(data);
    setCurrentIndex(data.id);
    setCurrentLocation([data.latlng[0], data.latlng[1]]);
    const lat = data.latlng[0];
    const lon = data.latlng[1];
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCurrentWeather(data))
      .catch((err) => console.log(err));
  };

  const handleSearch = () => {
    const searchValue = keyword.toLowerCase().trim();
    let newData = allFlag.filter((e) => {
      const newCountry = e.name.common.toLowerCase();
      const closeSpelling = e.altSpellings.map((e) => e.toLowerCase());
      if (
        newCountry.includes(searchValue) ||
        closeSpelling.find((e) => e === searchValue)
      ) {
        return e;
      }
    });
    if(newData.length === 0){
      setCurrentFlag(null);
      setCurrentIndex();
    }
    setAllFlag(newData);
    setIsSearch(true);
  };

  const clearSearch = () => {
    setIsSearch(false);
    getData()
    setKeyword((e) => {
      return e = ""
    });
  };

  const changeFahrenheitToCelsius = (fahrenheit) =>{
    return (5*(fahrenheit-32)/9).toFixed(2)
  }
  
  const setDate =()=>{
    let currentDate = new Date()
    return currentDate.toDateString()
  }

  const shareObj = {
    allFlag,
    setCurrentFlag,
    setCurrentIndex,
    currentIndex,
    handleClick,
    currentFlag,
    currentWeather,
    currentLocation,
    setKeyword,
    keyword,
    handleSearch,
    isSearch,
    clearSearch,
    changeFahrenheitToCelsius,
    setDate
  };
  return (
    <FlagContext.Provider value={shareObj}>{children}</FlagContext.Provider>
  );
};

export { FlagContext, FlagContextProvider };
