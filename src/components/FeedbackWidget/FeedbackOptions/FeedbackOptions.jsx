import { Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => {
    return (
      <Btn key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </Btn>
    );
  });
};
