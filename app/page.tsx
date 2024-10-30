import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <iframe src='./cv.pdf' className={styles.cv} />
    </div>
  );
}
