import React from "react";
import styled from "styled-components";
import Ipod from "./components/ipod";

const AppWrapper = styled.div`
  position: relative;
  width: 360px;
  height: 640px;
`;

function App() {
  return (
    <AppWrapper>
      <Ipod />
    </AppWrapper>
  );
}

export default App;
