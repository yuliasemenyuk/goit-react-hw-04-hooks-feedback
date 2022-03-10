import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
};

countPositiveFeedbPerc = () => {
    const { good } = this.state;
    return `${Math.floor((good / this.countTotalFeedback()) * 100)}%`;
   
};

updateState = name => {
    this.setState(prevState => ({
        [name]: prevState[name] + 1,
    }))
};
handleFeedback = e => {
    const actionName = e.target.name;
    this.updateState(actionName);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleFeedback}
        />

        <h1 className="statistics">Statistics</h1>

        {this.countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbPerc()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    );
  }
}