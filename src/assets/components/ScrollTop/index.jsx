import { ArrowUp } from 'phosphor-react';
import React, { useState, useEffect } from 'react';

import { Scroll } from './style';

export function ScrollTop() {
  const [up, setUp] = useState();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setUp(true);
      } else {
        setUp(false);
      }
    });
  }, []);

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {up && (
        <Scroll>
          <button onClick={handleScroll}>
            <ArrowUp weight="bold" />
          </button>
        </Scroll>
      )}
    </>
  );
}
