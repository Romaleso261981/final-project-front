import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  overflow: hidden;
  padding: 86px 20px 105px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 117px 171px 156px 171px;
  }

  @media screen and (min-width: 1280px) {
    padding: 117px 91px 258px 91px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    /* justify-content: space-between; */
    align-items: center;
    gap: 157px;
  }
`;
