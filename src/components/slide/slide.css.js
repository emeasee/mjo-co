import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import * as Theme from 'constants/theme';

export const Container = styled.div`
  max-width: ${Theme.maxWidth_4xl};
  padding: ${Theme.spacing_8} ${Theme.spacing_16};

  iframe {
    width: 100%;
  }

  ${MEDIA.TABLET`
    display: block;
  `};
`;
