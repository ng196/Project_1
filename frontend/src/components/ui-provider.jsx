// src/components/ui-provider.jsx
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import PropTypes from 'prop-types';

function Provider({ children }) {
  return (
    <ThemeProvider>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </ThemeProvider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
};

export default Provider;
