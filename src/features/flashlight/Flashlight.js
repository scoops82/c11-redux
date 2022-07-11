import { useSelector, useDispatch } from "react-redux";
import { on, off, flashlightStatus } from "./flashlightSlice";
import styles from "./Flashlight.module.css";

export function Flashlight() {
  const dispatch = useDispatch();

  const flashlightOn = useSelector(flashlightStatus);

  return (
    <div>
      <h2>Flashlight</h2>
      <div
        className={styles.flashlight}
        style={{ backgroundColor: flashlightOn ? "yellow" : "grey" }}
      ></div>
      <div className={styles.controls}>
        <button onClick={() => dispatch(on())}>On</button>
        <button onClick={() => dispatch(off())}>Off</button>
      </div>
    </div>
  );
}
