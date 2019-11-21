import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fefefe;
  padding: 20px;
`;

export const MainView = styled.View`
  flex-direction: row;
  border: 5px solid #07d7a5;
`;

export const ScoreboardView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  border: 5px solid #07d7a5;
  padding-top: 30px;
`;

export const StartTimerText = styled.Text`
  font-family: Montserrat-ExtraBold;
  font-size: 10px;
  color: #ffff;
  text-align: left;
  margin-top: 5px;
`;

export const GameInProgressText = styled.Text`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 13px;
  text-align: center;
  color: #07d7a5;
  margin-vertical: 5px;
`;

export const Title = styled.Text`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 26px;
  color: #000;
  text-align: center;
`;

export const Points = styled.Text`
  font-family: Montserrat-Alternates;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;
  text-align: center;
  color: #07d7a5;
  margin-bottom: 30px;
`;

export const TimerCircle = styled.ImageBackground`
  border: 5px solid #07d7a5;
  border-radius: 100px;
  border-width: 3px;
  height: 140px;
  width: 140px;
  margin-bottom: 15px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
`;

export const StartTimerButton = styled.TouchableOpacity``;

export const AddPointButton = styled.TouchableOpacity`
  height: 35px;
  width: 35px;
  background-color: #10c971;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  elevation: 10px;
  margin-top: 30px;
  margin-horizontal: 5px;
`;