import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.scss";

function Statistics({ title, stats }) {
  const renderStats = () => {
    return stats.map((stat) => (
      <li key={stat.id} className={styles.item}>
        <span className={styles.label}>{stat.label}</span>
        <span className={styles.percentage}>{stat.percentage}%</span>
      </li>
    ));
  };

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>{renderStats()}</ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
