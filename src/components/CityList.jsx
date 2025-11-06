import styles from "./cityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { useContext } from "react";
import { DataContext } from "../App";

export default function CityList() {
  const { cities, isLoading } = useContext(DataContext);

  if (isLoading) {
    return <Spinner />;
  }

  if (cities.length === 0) {
    return <Message message="no cities found" />;
  }
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}
