import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) => (
  <ul className={css.buttonList}>
    <button type="button" className={css.button} onClick={onIncrementGood}>
      Good
    </button>
    <button type="button" className={css.button} onClick={onIncrementNeutral}>
      Neutral
    </button>
    <button type="button" className={css.button} onClick={onIncrementBad}>
      Bad
    </button>
  </ul>
);
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onIncrementGood: PropTypes.func,
  onIncrementNeutral: PropTypes.func,
  onIncrementBad: PropTypes.func,
};
