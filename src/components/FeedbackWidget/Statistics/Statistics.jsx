import PropTypes from 'prop-types';
import {
  List,
  StatsItem,
  ItemLabel,
  ItemValue,
  TotalItem,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercent,
}) => {
  return (
    <List>
      <StatsItem>
        <ItemLabel>good</ItemLabel>
        <ItemValue>{good} </ItemValue>
      </StatsItem>
      <StatsItem>
        <ItemLabel>neutral</ItemLabel>
        <ItemValue>{neutral} </ItemValue>
      </StatsItem>
      <StatsItem>
        <ItemLabel>bad</ItemLabel>
        <ItemValue>{bad} </ItemValue>
      </StatsItem>
      <TotalItem>
        <ItemLabel>Total</ItemLabel>
        <ItemValue>{totalFeedback}</ItemValue>
      </TotalItem>
      <TotalItem>
        <ItemLabel>Positive Feedback</ItemLabel>
        <ItemValue>
          {positiveFeedbackPercent ? positiveFeedbackPercent + '%' : 0}
        </ItemValue>
      </TotalItem>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
