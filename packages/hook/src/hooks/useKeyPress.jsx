import { useEffect, useState } from 'react';

const useKeyPress = (targetKey) => {
  const [keyPressed, setKeyPressed] = useState(false);

  const handleKeyDown = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  const handleKeyUp = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
    };
  }, []);

  return keyPressed;
}

export default useKeyPress;
