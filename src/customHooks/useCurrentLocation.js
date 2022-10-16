import { useEffect, useState } from "react";

const useCurrentPosition = function () {
  const [currPosition, setCurrPosition] = useState({});

  useEffect(() => {
    const onSuccess = (position) => {
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
