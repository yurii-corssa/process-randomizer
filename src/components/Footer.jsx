import { Container, Stack } from 'react-bootstrap';

const Footer = () => (
  <Stack as="footer">
    <Container>
      <div className="py-2 text-center">
        Developed by{' '}
        <a
          href="https://github.com/yurii-corssa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yurii Corssa
        </a>
      </div>
      <div className="py-2 text-center">
        Check the repository on{' '}
        <a
          href="https://github.com/yurii-corssa/process-randomizer"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </Container>
  </Stack>
);

export default Footer;
