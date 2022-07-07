import { useSelector, useDispatch } from "react-redux";
import {
  stop,
  caution,
  go,
  redLightStatus,
  amberLightStatus,
  greenLightStatus,
} from "./trafficLightSlice";
import styles from "./TrafficLight.module.css";

export function TrafficLight() {
  const dispatch = useDispatch();

  const redLightOn = useSelector(redLightStatus);
  const amberLightOn = useSelector(amberLightStatus);
  const greenLightOn = useSelector(greenLightStatus);

  return (
    <>
      <div className={styles.backboard}>
        <div className={styles.inner}>
          <div
            className={styles.light}
            style={{ backgroundColor: redLightOn ? "red" : "grey" }}
          ></div>
          <div
            className={styles.light}
            style={{ backgroundColor: amberLightOn ? "yellow" : "grey" }}
          ></div>
          <div
            className={styles.light}
            style={{ backgroundColor: greenLightOn ? "green" : "grey" }}
          ></div>
        </div>
      </div>
      <div className={styles.controls}>
        <button onClick={() => dispatch(stop())}>Stop</button>
        <button onClick={() => dispatch(caution())}>Caution</button>
        <button onClick={() => dispatch(go())}>Go</button>
      </div>
    </>
  );
}
