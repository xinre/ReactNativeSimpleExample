import React,{Component} from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

export default class IconFont extends Component{
    render(){
        return(
            <Text style={[styles.icon,this.props.style]}
               onPress={this.props.onPress}
            >
                {this.props.font}
            </Text>
        )
    }
}

const styles=StyleSheet.create({
    icon:{
        fontFamily:'iconfont',
        color:'#6495ED',
        width:25,
        height:25
    }
})
