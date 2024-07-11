import styles from "./ScreenAndroidRotate.module.css";

export const ScreenAndroidRotate = ({ setLandScape }: any) => {
  const handleRotateAndFullScreen: any = () => {
    const screenOrientation = window.screen.orientation as any;

    const docElmWithBrowsersFullScreenFunctions =
      document.documentElement as HTMLElement & {
        mozRequestFullScreen(): Promise<void>;
        webkitRequestFullscreen(): Promise<void>;
        msRequestFullscreen(): Promise<void>;
      };

    try {
      docElmWithBrowsersFullScreenFunctions.requestFullscreen();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars

      screenOrientation
        .lock("landscape-primary")
        .then(() => {
          setLandScape(true);
        })
        .catch((error: string) => {
          console.error("Failed to lock screen orientation:", error);
        });
    } catch (error) {
      alert(error);
    }
    //
  };

  return (
    <div
      style={{
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        className={`w-[90%] h-[100%] flex flex-col items-center justify-center`}
      >
        <div className={`flex justify-center items-center`}>
          <span className={` material-symbols-outlined ${styles.iconoRotate} `}>
            screen_rotation_alt
          </span>
        </div>
        <div className={styles.container__textRotate}>
          <p>
            Presiona continuar para cambiar de modo vertical a modo horizontal
          </p>
        </div>

        {/* BUTTON */}
        <div className={`${styles.container__Button}`}>
          <button
            className={`${styles.Button__rotar}`}
            onClick={() => {
              handleRotateAndFullScreen();
            }}
          >
            CONTINUAR
          </button>
        </div>
      </div>
    </div>
  );
};
