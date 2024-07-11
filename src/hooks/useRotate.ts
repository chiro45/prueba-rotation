import { useRef } from "react";

export const useRotate = (device: any, setLandScape: any) => {
  //referencia para la rotacion del iphone
  const orientation = useRef({
    angle: 0,
    type: "",
  });

  //funcion par rotar en el iphone
  const handleOrientationChangeIphone = () => {
    try {
      if (window.screen && window.screen.orientation) {
        const { angle, type } = window.screen.orientation;

        orientation.current = {
          angle: angle,
          type: type,
        };
        const posicion = type.includes("portrait-primary");
        const angleResult = angle === 0 || angle === 180;
        const result = !(posicion || angleResult);
        setLandScape(result);
      } else {
        // Manejar el caso en el que window.screen.orientation no está disponible
        // console.error("window.screen.orientation no está definido.");
        let mql = window.matchMedia("(orientation: landscape)");
        setLandScape(mql.matches);
      }
    } catch (error) {
      // Manejar el error de manera adecuada
      console.error("Error en handleOrientationChange:", error);
    }
  };

  const changeOrientationAndroid = () => {
    const screenOrientation = window.screen.orientation as any;
    const docElmWithBrowsersFullScreenFunctions =
      document.documentElement as HTMLElement & {
        mozRequestFullScreen(): Promise<void>;
        webkitRequestFullscreen(): Promise<void>;
        msRequestFullscreen(): Promise<void>;
      };
    if (window.screen.orientation.type === "portrait-primary") {
      setLandScape(false);
    } else {
      try {
        docElmWithBrowsersFullScreenFunctions.requestFullscreen();
        if (device) {
          screenOrientation
            .lock("landscape-primary")
            .then(() => {
              setLandScape(true);
              console.log("Screen orientation locked to landscape.");
            })
            .catch((error: any) => {
              console.log(error);

              console.error("Failed to lock screen orientation:", error);
            });
        }
      } catch (error) {
        console.error("Failed to lock screen orientation:", error);
      }
    }
  };

  return {
    handleOrientationChangeIphone,
    changeOrientationAndroid,
  };
};
