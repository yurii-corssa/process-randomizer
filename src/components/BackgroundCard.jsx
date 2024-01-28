import { Card, CardBody, CardHeader } from 'react-bootstrap';

const BackgroundCard = ({ title, children }) => {
  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default BackgroundCard;
