import React from "react";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../App";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

export default function CityItem({ city }) {
  const { currCity } = useContext(DataContext);
  const {
    cityName,
    emoji,
    date,
    id,
    position: { lat, lng },
  } = city;

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          currCity.id === id ? styles["cityItem--active"] : ""
        }`}
        to={`/app/city/${city.id}?lat=${lat}&lng=${lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <span className={styles.name}>{cityName}</span>
        <span className={styles.date}>{formatDate(date)}</span>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}
