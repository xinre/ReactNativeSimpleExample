import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    WebView,
    Dimensions,
    Animated,
    Easing
} from 'react-native';
let {height,width}= Dimensions.get('window');

export default class DetailPage extends Component{
    static navigationOptions = {
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#6495ED',//矢车菊蓝
        },
        title:'主题详情',
    };
    constructor(){
        super();
        this.state={
            isCanBack:false,
            progressValue:new Animated.Value(0)
        }
    };
    componentDidMount(){
        Animated.timing(this.state.progressValue, {
            toValue: width,
            duration: 1500,
            easing: Easing.linear
        }).start();
    }
    render(){
        const { state } = this.props.navigation;
        return(
            <View style={styles.container}>
                <Animated.View style = {{height: 2, backgroundColor: '#27B5EE', width: this.state.progressValue}}>
                </Animated.View>
                <WebView bounces={false}
                         scalesPageToFit={true}
                         source={{uri:state.params.url,method: 'GET'}}
                         style={{width:width, height:height}}>
                </WebView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#fff',
    },
    shows:{
        fontSize:20,
    }
});
