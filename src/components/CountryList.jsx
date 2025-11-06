import React from "react";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";
import { useContext } from "react";
import { DataContext } from "../App";

export default function CountryList() {
  const { cities, isLoading } = useContext(DataContext);

  if (isLoading) {
    return <Spinner />;
  }

  if (cities.length === 0) {
    return <Message message="no countries found" />;
  }
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((c) => c.id).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.countryEmoji }];
    } else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}
