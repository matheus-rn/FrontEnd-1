import React, { useState, useEffect } from 'react';
import { View,FlatList,TouchableOpacity } from 'react-native';
import { ListItem, Button, Overlay,} from "react-native-elements";
import SmallButtons from '../../components/SmallButton/SmallButtons';
import FAB from 'react-native-fab';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Title,
          DateTime,
          AnswerText,
          ButtonView } from './styles'
import axios from 'axios';


export default function ListConfirmed() {

  const [DATA, setData] = useState(undefined);
  const [isLoading, setLoading] = useState(true);
  const [isVisible, setVisible] = useState(false);
  const [isPresent, setPresent] = useState(false);
  const [isRandom, setRandom] = useState(false);
  const [peladaDate,setPeladaDate] = useState({dia:'XX/XX/XXXX',hora:'XX:XX'});
  const baseUrl = "http://localhost:8001"

 async function handleConfirm(){

    const userPresent = {userPresent: !isPresent};
    await axios.put(`${baseUrl}/users/3/pelada/1`,userPresent).then(response =>{
      setVisible(false);
      setPresent(!isPresent)
    });

}
  useEffect(() =>{
    const fetchData = async () =>{
      await axios.get(`${baseUrl}/pelada/1/users-presents`).then(response =>{
                  setData(response.data.users);
                  setLoading(false);
    });
  }
  fetchData()},[isPresent]);

  if(!isLoading){
  return (
    <View style={{flex:1}}>
      <Overlay
        onBackdropPress={()=>{setVisible(false)}}
        isVisible={isVisible}
        windowBackgroundColor="rgba(255, 255, 255, .5)"
        overlayBackgroundColor="#08BD64"
        height={250}
        width={280}
        overlayStyle={{
            borderRadius:16,
            alignItems:'center',
            justifyContent:'center'
        }}
      >
            <Title>{!isPresent ? 'Confirmar' : 'Desmarcar'} presença</Title>
            <View style={{flexDirection:'row'}}>
                <DateTime>Dia : </DateTime>
                <DateTime>{peladaDate.dia}</DateTime>
            </View>

            <View style={{flexDirection:'row'}}>
                <DateTime>Hora : </DateTime>
                <DateTime>{peladaDate.hora}</DateTime>
            </View>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity onPress={handleConfirm}>
                <AnswerText>{!isPresent ? 'Confirmar' : 'Desmarcar'} </AnswerText>
                </TouchableOpacity>

               <TouchableOpacity>
                    <AnswerText>Recusar</AnswerText>
                </TouchableOpacity>
            </View>
      </Overlay>

      <Overlay
        onBackdropPress={()=>{setRandom(false)}}
        isVisible={isRandom}
        windowBackgroundColor="rgba(255, 255, 255, .5)"
        overlayBackgroundColor="#08BD64"
        width={280}
        height={250}
        overlayStyle={{
            borderRadius:16,
            alignItems:'center',
            justifyContent:'center'
        }}
      >
         <Title>Sortear Times</Title>
            <View style={{marginTop:40,flexDirection:'row'}}>
                <TouchableOpacity>
                    {isPresent ? (<AnswerText>Confirmar</AnswerText>)  : (<AnswerText>Desmarcar</AnswerText>)}
                </TouchableOpacity>
                <TouchableOpacity>
                    <AnswerText>Recusar</AnswerText>
                </TouchableOpacity>
            </View>
      </Overlay>

      <ButtonView>
        <View style={{width:'38%'}}>
          <SmallButtons onPress={()=>{setRandom(true)}} iconName={'shuffle'} text='Sortear times'/>
        </View>
        <View style={{width:'38%'}}>
          <SmallButtons iconName="person-add" text='Convidar'/>
        </View>
      </ButtonView>
      <FlatList
        data={DATA}
        renderItem={({ item }) =>
          <ListItem
            leftAvatar={{ source: { uri: item.picture } }}
            title={item.name}
            subtitle = "Confirmado"
            containerStyle={{backgroundColor:"#f5f5f5"}}
            bottomDivider
          />}
      />
      <FAB
          snackOffset= {80}
          buttonColor="#10C971"
          iconTextColor="#FFFFFF"
          onClickAction={() => setVisible(true)}
          visible={true}
          iconTextComponent={<Icon name={'check'} />}
        />
  </View>
  );
} else
  {
    return(
      <View style={{flex:1, marginTop:280}}>
        <Button
          title="Loading button"
          loading
          type = 'clear'
        />
      </View>
    )
  }
}
