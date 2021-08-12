import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/react';
import { CgSpinner } from 'react-icons/cg';

const spin = keyframes`
0% {
  transform: rotate(0deg);
}

100% {
  transform: rotate(1turn);
}
`;

export const Spinner = styled(CgSpinner)`
  animation: ${spin} 0.85s linear infinite;
`;

Spinner.defaultProps = {
  size: 40,
};
