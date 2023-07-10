import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  <div className={css.statisticsList}>
    <p className={css.statisticsItem}>
      Good:
      <span className={css.statisticsQuantity}>{good}</span>
    </p>
    <p className={css.statisticsItem}>
      Neutral:
      <span className={css.statisticsQuantity}>{neutral}</span>
    </p>
    <p className={css.statisticsItem}>
      Bad:
      <span className={css.statisticsQuantity}>{bad}</span>
    </p>
    <p className={css.statisticsItem}>
      Total:
      <span className={css.statisticsQuantity}>{total}</span>
    </p>
    <p className={css.statisticsItem}>
      Positive feedback:
      <span className={css.statisticsQuantity}>{positiveFeedback}%</span>
    </p>
  </div>
);
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
