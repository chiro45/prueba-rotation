import styles from "./ScreenIphoneRotate.module.css";

export const ScreenIphoneRotate = () => {
  const stepList = [
    " Haz click en cualquier parte de la pantalla.",
    " Gira tu dispositivo a la posición horizontal.",
    ' Toca el botón "aA" en la barra de herramientas del dispositivo.',
    ' Toca el botón "Ocultar barra de herramientas".',
    " La barra de herramientas se minimizara y podrás ver el contenido en pantalla completa.",
  ];

  //permisos para obtener la rotacion del iphone
  const handlePermissionRequest = () => {
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      (DeviceOrientationEvent as any).requestPermission
    ) {
      (DeviceOrientationEvent as any)
        .requestPermission()
        .then((response: string) => {
          if (response === "granted") {
          }
        })
        .catch((error: Error) => {
          console.log(
            `Error requesting device orientation permission: ${error}`
          );
        });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyItems: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      onClick={() => {
        handlePermissionRequest();
      }}
    >
      <div className={`flex justify-center items-center`}>
        <span className={` material-symbols-outlined ${styles.iconoRotate} `}>
          screen_rotation_alt
        </span>
      </div>
      <div className={styles.rotate__main_Container}>
        <h2>Para tener una mejor experiencia siga los pasos:</h2>
        <ol>
          {stepList.map((el, i) => (
            <li key={i}>{`${i + 1}. ${el}`}</li>
          ))}
        </ol>
      </div>
      <div className="rotate__main-Container-button"></div>
    </div>
  );
};
