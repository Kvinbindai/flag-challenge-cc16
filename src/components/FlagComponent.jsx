import React, { useContext } from "react";
import { FlagContext } from "../context/FlagContext";
import FlagList from "./FlagList";
export default function FlagComponent() {

  const { allFlag , handleClick , currentIndex } = useContext(FlagContext)


  return (
    <div className="flex flex-wrap gap-5 max-h-[700px] overflow-y-hidden pb-10 min-w-[550px]">
      { allFlag.length > 0 ? (allFlag.map((e) => {
        return (
          <FlagList
            key={e.id}
            data={e}
            handleClick={handleClick}
            currentIndex={currentIndex}
          >
          </FlagList>
        );
      })) : <h1>Nothing Found</h1>}
    </div>
  );
}
