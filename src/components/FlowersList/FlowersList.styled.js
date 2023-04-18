import styled from "@emotion/styled";

export const ListWrapper = styled.div`
  display: flex;
  list-style: none;
  background-color: rgba(117, 190, 218, 0.2);
  @media screen and (max-width: 767.9px) {
    flex-direction: column;
  }
  @media screen and (min-width: 768px) {
    flex-wrap: wrap;
    gap: 40px;
  }
  @media screen and (min-width: 1280px) {
    flex-wrap: wrap;
    gap: 40px;
  }
`;
export const FlowersSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 42px 20px 100px 20px;
  margin-left: 0px;
  background: #ffffff;

  @media screen and (min-width: 1280px) {
    padding: 88px 20px 100px 20px;
    margin-left: 0px;
  }
  @media screen and (min-width: 1280px) {
    padding: 58px 20px 200px 20px;
  }
`;
export const StyledForm = styled.form`
  align-self: center;
  display: flex;
  margin-top: 28px;
  margin-bottom: 40px;

  @media screen and (min-width: 320px) {
    width: 280px;
  }

  @media screen and (min-width: 768px) {
    width: 608px;
    margin-bottom: 60px;
    margin-top: 40px;
  }
`;
export const FilterLabel = styled.label`
  position: relative;
`;

export const FilterInput = styled.input`
  border: 1px solid transparent;
  border-color: transparent;
  outline: transparent;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  padding: 9px 12px;
  font-size: 16px;
  font-weight: 500;
  width: 280px;
  color: #535353;
  transition: 0.2s;
  ::placeholder {
    color: #535353;
  }
  &:hover,
  &:focus,
  &:active {
    outline: none;
    border: 1px solid rgba(245, 146, 86, 0.5);
  }

  @media screen and (min-width: 768px) {
    width: 608px;
    padding: 10px 20px;
    font-size: 20px;
    border-radius: 40px;
  }
`;

export const SearchBtn = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 12px;
  top: 8px;
  background: transparent;
  border: transparent;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 10px;
  }
`;
export const DeleteBtn = styled.button`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 12px;
  top: 8px;
  background: transparent;
  border: transparent;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    top: 10px;
  }
`;

export const OneFlowers = styled.li`
  position: relative;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    width: calc(50% - 30px);
  }
  @media screen and (min-width: 1280px) {
    background-color: rgba(250, 250, 250, 0.8);
    width: calc(33.3333% - 30px);
  }
`;
export const FlowersLine = styled.div`
  width: 200px;
  height: 3px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    width: 280px;
    height: 8px;
  }
  @media screen and (min-width: 1280px) {
    height: 4px;
    width: 420px;
  }
`;
export const FlowersLineVertLeft = styled.div`
  position: absolute;
  right: 12px;
  top: 8px;
  width: 4px;
  height: 400px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    width: 280px;
    height: 8px;
  }
  @media screen and (min-width: 1280px) {
    left: 0px;
    top: 4px;
    width: 4px;
    height: 550px;
  }
`;
export const FlowersLineVertRight = styled.div`
  position: absolute;
  right: 12px;
  top: 80px;
  width: 4px;
  height: 400px;
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;
  margin-bottom: 4px;
  @media screen and (min-width: 768px) {
    width: 280px;
    height: 8px;
  }
  @media screen and (min-width: 1280px) {
    right: 0px;
    top: 4px;
    width: 4px;
    height: 550px;
  }
`;
export const FlowersTitle = styled.h2`
  margin-bottom: 16px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  letter-spacing: -0.01em;
`;
export const FlowersDescr = styled.p`
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  @media screen and (min-width: 768px) {
    -webkit-line-clamp: 6;
  }
  @media screen and (min-width: 1280px) {
    width: 400px;
    height: 90px;
    // -webkit-line-clamp: 5;
  }
`;
export const FlowersImgContainer = styled.div`
  min-height: 200px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 1280px) {
    background-color: #ffffff;
    min-height: 800px;
  }
`;
export const Image = styled.img`
  width: 240px;
  height: 240px;
  margin-bottom: 20px;
  border-radius: 5px;
  object-fit: cover;
  aspect-ratio: 4/4;
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 261px;
    border-radius: 5px;
    margin-right: 32px;
  }
`;

export const FlowersDate = styled.p`
  color: rgba(17, 17, 17, 0.6);
  font-weight: 400;
`;
export const FlowersLink = styled.a`
  color: #1307f0;
  text-decoration: underline;
  transition: all 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: #ff7f2f;
    transform: scale(1.05);
  }
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 261px;
    border-radius: 5px;
    margin-bottom: 32px;
  }
`;
