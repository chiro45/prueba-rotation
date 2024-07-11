import { useEffect, useState } from "react";
import { Rotate } from "./components/Rotate/RotateScreen";
import { useRotate } from "./hooks/useRotate";

function App() {
  const [landScape, setLandScape] = useState(false);
  const [device, setDevice] = useState<any>(null);
  const detectDevice = () => {
    const userAgent = navigator.userAgent;
    const deviceActual = {
      isIOS: /iPad|iPhone|iPod/.test(userAgent),
      isAndroid: /Android/.test(userAgent),
      isMobile: /Mobi/i.test(userAgent),
      isDesktop: !/Mobi/i.test(userAgent),
    };

    return deviceActual;
  };

  useEffect(() => {
    setDevice(detectDevice());
  }, []);

  useEffect(() => {
    if (device) {
      if (device.isIOS) handleOrientationChangeIphone();
      if (device.isAndroid) changeOrientationAndroid();
    }
  }, [device]);
  /* Escucha la orientacion de la pantalla y coloca fullscreen en landscape */
  window.screen.orientation.onchange = () => {
    if (device) {
      if (device.isIOS) handleOrientationChangeIphone();
      if (device.isAndroid) changeOrientationAndroid();
    }
  };

  const { handleOrientationChangeIphone, changeOrientationAndroid } = useRotate(
    device,
    setLandScape
  );
  return (
    <>
      {landScape || device?.isDesktop ? (
        <h1>Perfecto funciono correctamente</h1>
      ) : (
        device && <Rotate setLandScape={setLandScape} device={device} />
      )}
    </>
  );
}

export default App;
