import { useState } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export default function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const countTotalFeedback = () => {
    return good + neutral + bad;
};

const countPositiveFeedbPerc = () => {
    return `${Math.floor((good / countTotalFeedback()) * 100)}%` || 0
};

  const handleFeedback = e => {
    switch (e) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
 

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleFeedback}
      />

      <h1 className="statistics">Statistics</h1>

      {countTotalFeedback() ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbPerc()}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </Section>
  );


}