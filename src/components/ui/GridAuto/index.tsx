import styles from "./GridAuto.module.css";

type props = {
  children: JSX.Element;
};

export default function GridAuto({ children }: props) {
  return <div className={styles.gridauto}>{children}</div>;
}
