import ConfettiExplosion from 'react-confetti-explosion';

const Confetti = () => {
  return (
    <>
      <ConfettiExplosion
        force={0.8}
        duration={3000}
        particleCount={150}
        style={{ position: 'absolute', top: '0', left: '0' }}
      />
      <ConfettiExplosion
        force={0.8}
        duration={3000}
        particleCount={150}
        style={{ position: 'absolute', top: '0', left: '100%' }}
      />
      <ConfettiExplosion
        force={0.8}
        duration={3000}
        particleCount={150}
        style={{ position: 'absolute', top: '50%', left: '50%' }}
      />
    </>
  );
};

export default Confetti;
