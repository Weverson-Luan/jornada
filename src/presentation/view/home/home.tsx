/**
 * IMPORTS
 */
import React, {useState} from 'react';

import {Container, Title} from './styles';

/**
 *
 * Screen home JSX.
 */
const HomeView = () => {
  const [isModal, setIsModal] = useState(true);
  return (
    <Container>
      <Title>Hellow Signin</Title>
    </Container>
  );
};

/**
 * EXPORTS
 */
export {HomeView};
