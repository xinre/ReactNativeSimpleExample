import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button
} from 'react-native';

export default class Add2 extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.outdiv}>
                    <View style={styles.innerview}>
                      <Image source={require('../../../public/image/er.jpg')} style={styles.innerimg}></Image>
                    </View>
                    <View style={styles.innerdown}>
                        <Image style={{width:30,height:30,borderRadius:15,marginLeft:10,marginRight:10,}} source={require('../../../public/image/tou.jpg')} />
                        <View style={{height:'100%',width:'80%',justifyContent:'center'}}>
                            <Text style={{fontSize:16,color:'#030303'}}>Procedure</Text>
                            <Text style={{fontSize:12,color:'#6E6E6E'}}>扫一扫二维码，加我好友</Text>
                        </View>
                    </View>
                </View>
                <Image source={require('../../../public/image/sao.png')} style={{width:60,height:60,marginTop:30,borderRadius:6}}></Image>
                <Text style={{fontSize:16,color:'#4D4D4D'}}>扫一扫</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor: '#fff',
    },
    outdiv:{
        width:'70%',
        borderWidth:1,
        borderColor:'#CCCCCC',
        height:330,
        marginTop:20,
    },
    innerview:{
        width:'100%',
        height:270,
        alignItems:'center',
        justifyContent:'center'
    },
    innerimg:{
        width:'80%',
        height:200,
    },
    innerdown:{
        width:'100%',
        height:60,
        backgroundColor:'#DEDEDE',
        flexDirection:'row',
        alignItems:'center',
    }
});

