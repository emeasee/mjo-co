import styled from 'styled-components';
import * as Theme from 'constants/theme';

export const Container = styled.div`
  padding: ${Theme.spacing_8} ${Theme.spacing_16};
  max-width: ${Theme.maxWidth_4xl};

  .gatsby-resp-iframe-wrapper, .vimeo {
    border: 2px solid #f5f5f5;
    margin-bottom: ${Theme.spacing_16}!important;
  }
`;
