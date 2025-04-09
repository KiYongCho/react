import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  fontSizeBase: 1,
};

const CommonButton = props => {
  return <button className={props.className}>{props.children}</button>;
};

const StyledCommonButton = styled(CommonButton)`
  font-size: 2em;
`;

const DynamicButton = props => {
  return <button className={props.className}>{props.children}</button>;
};

const StyledDynamicButton = styled(DynamicButton).attrs(props => ({
  fs: props.fs || 1,
}))`
  font-size: ${props => props.fs}em;
`;

const StyledDiv = styled.div`
  font-size: 3em;
  color: white;
  background-color: blue;
`;

const StyledDiv2 = styled(StyledDiv)`
  border: 3px dotted yellow;
  text-align: center;
`;

export default function ReactStyledComponent() {
  return (
    <ThemeProvider theme={theme}>
      <StyledCommonButton>StyledCommonButton</StyledCommonButton>
      <NoUseStyledComponent />
      <UseStyledComponent />
      <StyledDynamicButton fs="10">StyledDynamicButton</StyledDynamicButton>
    </ThemeProvider>
  );
}

function NoUseStyledComponent() {
  const style = {
    fontSize: '2em',
    color: 'yellow',
    backgroundColor: 'red',
  };
  return <div style={style}>Hello</div>;
}

function UseStyledComponent() {
  return (
    <>
      <StyledDiv>Hello</StyledDiv>
      <StyledDiv2>Hello</StyledDiv2>
    </>
  );
}