import { ScreenAndroidRotate } from "../ScreenAndroidRotate/ScreenAndroidRotate";
import { ScreenIphoneRotate } from "../ScreenIphoneRotate/ScreenIphoneRotate";

export const Rotate = ({ device, setLandScape }: any) => {
  const handleInstructions = () => {
    if (device.isAndroid && device.isMobile) {
      return <ScreenAndroidRotate setLandScape={setLandScape} />;
    } else if (device.isIOS && device.isMobile) {
      return <ScreenIphoneRotate  />;
    }
    return <></>;
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      {handleInstructions()}
    </div>
  );
};
