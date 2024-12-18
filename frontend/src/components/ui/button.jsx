import { AbsoluteCenter, Button as ChakraButton, Spinner, Text } from '@chakra-ui/react';
import * as React from 'react';
import PropTypes from 'prop-types';  // Ensure PropTypes is imported

export const Button = React.forwardRef(function Button(props, ref) {
  const { loading, disabled, loadingText, children, ...rest } = props;
  return (
    <ChakraButton disabled={loading || disabled} ref={ref} {...rest}>
      {loading && !loadingText ? (
        <>
          <AbsoluteCenter display="inline-flex">
            <Spinner size="inherit" color="inherit" />
          </AbsoluteCenter>
          <Text opacity={0}>{children}</Text>
        </>
      ) : loading && loadingText ? (
        <>
          <Spinner size="inherit" color="inherit" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </ChakraButton>
  );
});

// Apply PropTypes to validate the props
Button.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  loadingText: PropTypes.node,
  children: PropTypes.node.isRequired,  // `children` is required
};

