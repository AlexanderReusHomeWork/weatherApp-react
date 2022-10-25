import { useEffect, useState } from "react";
import { IGeolocationPosition } from "../models/interfaces";

const useCurrentPosition = function () {
  const [currPosition, setCurrPosition] = useState({});

  useEffect(() => {
    const onSuccess = (position: IGeolocationPosition<null | number>) => {
      const { latitude, longitude } = position.coords;
      setCurrPosition({ latitude, longitude });
    };

    const onError = () => {
      setCurrPosition(false);
    };
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return currPosition;
};

export default useCurrentPosition;
