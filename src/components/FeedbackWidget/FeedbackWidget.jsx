import { Component } from 'react';
import { Container } from './FeedbackWidget.styled';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { BtnWrapper } from './FeedbackOptions/FeedbackOptions.styled';

export class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementValue = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const value = (this.state.good / this.countTotalFeedback()) * 100;
    return Math.round(value);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercent = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
      <Container>
        <Section title="Please leave feedback">
          <BtnWrapper>
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.incrementValue}
            />
          </BtnWrapper>
        </Section>
        <Section title="Statistics">
          {totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={totalFeedback}
              positiveFeedbackPercent={positiveFeedbackPercent}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
