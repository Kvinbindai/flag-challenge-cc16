import { useContext } from "react";
import DisplayComponent from "./components/DisplayComponent";
import WeatherComponent from "./components/WeatherComponent";
import FlagComponent from "./components/FlagComponent";
import MapComponent from "./components/MapComponent";
import SearchComponent from "./components/SearchComponent";
import { FlagContext } from "./context/FlagContext";

function App() {

  const { allFlag  } = useContext(FlagContext)

  return (
    <div className="bg-slate-100 w-screen h-screen flex  flex-col   items-center p-24">
      <SearchComponent />
      {allFlag ? (<div className="flex  gap-16 w-4/5 mt-16">
         <FlagComponent  /> 
        <div>
          <div className=" flex justify-between w-full gap-5 mb-5" >
            <DisplayComponent>Country</DisplayComponent>
            <WeatherComponent>Weather</WeatherComponent>
          </div>
          <MapComponent/>
        </div>
      </div>) : <h1>Still Loading....</h1>  }
      
    </div>
  );
}

export default App;
