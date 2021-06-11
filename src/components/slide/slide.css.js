import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  max-width: 700px;
  padding: 2rem 4rem;

  iframe{
      width: 100%;
  }

  ${MEDIA.TABLET`
    display: block;
  `};
`;