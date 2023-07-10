import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Section from 'components/Section';
import Notification from 'components/Notification';
import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState(
      prevState => ({
        good: prevState.good + 1,
      }),
      this.countTotalFeedback
    );
  };
  handleIncrementNeutral = () => {
    this.setState(
      prevState => ({
        neutral: prevState.neutral + 1,
      }),
      this.countTotalFeedback
    );
  };
  handleIncrementBad = () => {
    this.setState(
      prevState => ({
        bad: prevState.bad + 1,
      }),
      this.countTotalFeedback
    );
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    this.setState({ total });
  };

  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state;
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad, total } = this.state;
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const hasFeedback = total > 0;

    return (
      <div className={css.feedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onIncrementGood={this.handleIncrementGood}
            onIncrementNeutral={this.handleIncrementNeutral}
            onIncrementBad={this.handleIncrementBad}
          />
        </Section>

        <Section title="Statistics">
          {hasFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
