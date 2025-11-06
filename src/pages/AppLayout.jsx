import React from "react";
import Sidebar from "../components/sidebar";
import styles from "./AppLayout.module.css";
import Map from "../components/Map";
export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}
