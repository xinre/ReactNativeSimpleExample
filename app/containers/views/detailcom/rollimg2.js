import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper';
var Dimensions=require('Dimensions');
var {width}=Dimensions.get('window');

export default class Rollimgcom2 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            swiperShow:false,
        };
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                swiperShow:true
            });
        },0)
    }
    render(){
            if(this.state.swiperShow){ 
                return(
                    <View style={{height:150}}>
                        <Swiper style={styles.imgWrapper}  height={150} 
                        autoplay
                        onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                        dot={<View style={{backgroundColor:'rgba(0,0,0,.5)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
                        activeDot={<View style={{backgroundColor: '#6495ED', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                        paginationStyle={{
                            bottom: 10, left: null, right: 20
                        }}
                        loop>
                            <View style={styles.imgView}>
                                <Image source={require('../../../../public/image/img_01.jpg')}  style={styles.bannerImg} />
                            </View>
                            <View style={styles.imgView}>
                                <Image source={require('../../../../public/image/img_02.jpg')}  style={styles.bannerImg} />
                            </View>
                            <View style={styles.imgView}>
                                <Image source={require('../../../../public/image/img_03.jpg')}  style={styles.bannerImg} />
                            </View>
                            <View style={styles.imgView}>
                                <Image source={require('../../../../public/image/img_04.jpg')}  style={styles.bannerImg} />
                            </View>       
                        </Swiper>
                    </View>
                )
            }else {
                return (
                    <View style={{height:150}}>
                            <Image source={require('../../../../public/image/img_01.jpg')}  style={styles.bannerImg} />
                    </View>
                );
            };
    }
}
const styles = StyleSheet.create({
    imgWrapper: {
    },
    imgView: {
        flex: 1,
    },
    bannerImg: {
        width: width,
        height: 150,
    }
    });