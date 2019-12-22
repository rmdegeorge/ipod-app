import React from "react";
import styled from "styled-components";

const IpodMain = styled.div`
  position: relative;
  width: 360px;
  height: 640px;
`;
const IpodContainer = styled.div`
  position: absolute;
  width: 360px;
  height: 640px;
  left: 0px;
  top: 0px;

  background: #ececec;
  box-shadow: inset -6px -6px 16px rgba(0, 0, 0, 0.25),
    inset 6px 6px 15px #ffffff, inset -5px 8px 18px rgba(0, 0, 0, 0.2);
  border-radius: 33px;
`;

const Screen = styled.div`
  position: absolute;
  width: 272px;
  height: 216px;
  left: 44px;
  top: 33px;
`;
const ScreenOuter = styled.div`
  position: absolute;
  width: 272px;
  height: 216px;
  left: 0px;
  top: 0px;

  background: #242746;
  border-radius: 7px;
`;
const ScreenInner = styled.div`
  position: absolute;
  width: 264px;
  height: 210px;
  left: 4px;
  top: 3px;

  background: #a9bbd1;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  border-radius: 7px;
`;
const ButtonBar = styled.div`
  position: absolute;
  width: 328px;
  height: 76px;
  left: 16px;
  top: 273px;
`;
const ButtonRewind = styled.div`
  position: absolute;
  width: 76px;
  height: 76px;
  left: px;
  top: 0px;

  background: #efeeee;
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-sizing: border-box;

  box-shadow: 6px 6px 16px rgba(209, 205, 199, 0.5),
    -6px -6px 16px rgba(255, 255, 255, 0.5),
    inset 4px 4px 8px rgba(75, 75, 75, 0.25),
    inset -3px -1px 11px rgba(255, 255, 255, 0.65);
  border-radius: 43px;
`;
const ButtonMenu = styled.div`
  position: absolute;
  width: 76px;
  height: 76px;
  left: 84px;
  top: 0px;

  background: #efeeee;
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-sizing: border-box;

  box-shadow: 6px 6px 16px rgba(209, 205, 199, 0.5),
    -6px -6px 16px rgba(255, 255, 255, 0.5),
    inset 4px 4px 8px rgba(75, 75, 75, 0.25),
    inset -3px -1px 11px rgba(255, 255, 255, 0.65);
  border-radius: 43px;
`;
const ButtonPlay = styled.div`
  position: absolute;
  width: 76px;
  height: 76px;
  left: 168px;
  top: 0px;

  background: #efeeee;
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-sizing: border-box;

  box-shadow: 6px 6px 16px rgba(209, 205, 199, 0.5),
    -6px -6px 16px rgba(255, 255, 255, 0.5),
    inset 4px 4px 8px rgba(75, 75, 75, 0.25),
    inset -3px -1px 11px rgba(255, 255, 255, 0.65);
  border-radius: 43px;
`;
const ButtonFastForward = styled.div`
  position: absolute;
  width: 76px;
  height: 76px;
  left: 252px;
  top: 0px;

  background: #efeeee;
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-sizing: border-box;

  box-shadow: 6px 6px 16px rgba(209, 205, 199, 0.5),
    -6px -6px 16px rgba(255, 255, 255, 0.5),
    inset 4px 4px 8px rgba(75, 75, 75, 0.25),
    inset -3px -1px 11px rgba(255, 255, 255, 0.65);
  border-radius: 43px;
`;
const ScrollWheel = styled.div`
  position: absolute;
  width: 232px;
  height: 232px;
  left: 64px;
  top: 371px;
`;
const ScrollWheelOutside = styled.div`
  position: absolute;
  width: 232px;
  height: 232px;
  left: 0px;
  top: 0px;

  background: #efeeee;
  border: 2px solid rgba(255, 255, 255, 0.4);
  box-sizing: border-box;
  box-shadow: 6px 6px 16px rgba(209, 205, 199, 0.5),
    -6px -6px 16px rgba(255, 255, 255, 0.5),
    inset 9px 4px 20px rgba(180, 180, 180, 0.25),
    inset -4px -4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 125px;
`;
const ScrollWheelInside = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 76px;
  top: 75px;

  background: #eaeaea;
  border: 2px solid rgba(255, 255, 255, 0.44);
  box-sizing: border-box;
  box-shadow: -6px -6px 16px rgba(255, 255, 255, 0.3),
    6px 6px 16px rgba(209, 205, 199, 0.3),
    inset -4px -2px 4px rgba(209, 205, 199, 0.5),
    inset 14px 1px 11px rgba(255, 255, 255, 0.52),
    inset 6px 0px 5px rgba(209, 205, 199, 0.36);
  border-radius: 125px;
`;

function Ipod(props) {
  return (
    <IpodMain>
      <IpodContainer>
        <Screen>
          <ScreenOuter></ScreenOuter>
          <ScreenInner></ScreenInner>
        </Screen>
        <ButtonBar>
          <ButtonRewind>RW</ButtonRewind>
          <ButtonMenu>Menu</ButtonMenu>
          <ButtonPlay>Play</ButtonPlay>
          <ButtonFastForward>FF</ButtonFastForward>
        </ButtonBar>
        <ScrollWheel>
          <ScrollWheelOutside></ScrollWheelOutside>
          <ScrollWheelInside></ScrollWheelInside>
        </ScrollWheel>
      </IpodContainer>
    </IpodMain>
  );
}
export default Ipod;
