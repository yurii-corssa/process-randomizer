import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const Background = ({ text, rowsCount, isRandomizing }) => {
  const [speed, setSpeed] = useState(50);

  useEffect(() => {
    if (isRandomizing) {
      setSpeed(500);
    } else {
      setSpeed(50);
    }
  }, [isRandomizing]);

  return (
    <div className="background">
      {Array.from({ length: rowsCount }).map((_, i) => {
        return (
          <Marquee
            key={i}
            direction={i % 2 === 0 ? 'left' : 'right'}
            autoFill={true}
            speed={speed}
            style={{ display: 'inline-flex' }}
          >
            <p
              className="background__text"
              style={{ '--rows-count': rowsCount }}
            >
              {text}
            </p>
          </Marquee>
        );
      })}
    </div>
  );
};

export default Background;
