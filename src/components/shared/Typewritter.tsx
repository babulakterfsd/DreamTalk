import Typewriter from 'typewriter-effect';

const Typewritter = () => {
  return (
    <Typewriter
      options={{
        strings: ['Hello', 'World'],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default Typewritter;
