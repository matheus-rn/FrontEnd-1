import React, {useState} from 'react';
import { View, StyleSheet,ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import InputBox from '../../components/InputBox/index'

// import { Container } from './styles';

export default function RegisterGame({ navigation }) {

    const [name, setName ] = useState('');

  return (
    <LinearGradient style={styles.background} colors={['#f3f3f3','#ededed']}>
        <ImageBackground source={require('../../assets/driblo-logo-preta.png')} imageStyle={{opacity:0.05}} style={styles.logo}>
            <Icon
            name="arrow-left"
            size={30}
            color={'#10C971'}
            style={{alignSelf:'flex-start', paddingTop:20}}
            onPress={() =>{navigation.navigate('SignIn')}}
            />

            <InputBox
                text={'Nome da pelada'}
                value={name}
                onChangeText={setName}
            />

        </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    background:{
      flex:1,
      alignItems:'center',
      paddingHorizontal:20,
    },
    logo:{

      width:'100%',
      height:'100%',
    },
  });

