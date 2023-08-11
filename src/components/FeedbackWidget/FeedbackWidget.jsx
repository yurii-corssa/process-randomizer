import { useState } from 'react';
import { Container } from './FeedbackWidget.styled';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { BtnWrapper } from './FeedbackOptions/FeedbackOptions.styled';

export const FeedbackWidget = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementValue = key => {
    switch (key) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const value = (good / countTotalFeedback()) * 100;
    return Math.round(value);
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <BtnWrapper>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={incrementValue}
          />
        </BtnWrapper>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={countTotalFeedback}
            positiveFeedbackPercent={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
