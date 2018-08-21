import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

var ImageDate=require('../../../../ImageData.json');
var Dimensions=require('Dimensions');
var {width}=Dimensions.get('window');

export default class Rollimgcom extends Component {
  constructor(){
    super();
    this.state={
      currentPage:0,
      duration:2000
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
            ref="scrollView"
            //横向排列
            horizontal={true}
            //隐藏滚动条
            showsHorizontalScrollIndicator={false}
            //自动分页
            pagingEnabled={true}
            //一帧滚动结束
            onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
            //开始拖拽
            onScrollBeginDrag={()=>this.OnBeginScroll()}
            //停止拖拽
            onScrollEndDrag={()=>this.OnEndScroll()}
        >
          {this.renderAllImage()}
        </ScrollView>
        <View style={styles.pageView}>
          {this.renderPageCricle()}
        </View>
      </View>
    );
  };

  OnBeginScroll(){
    //停止定时器
    clearInterval(this.timer1);
  }
  OnEndScroll(){
    this.startTimer();
  }


  componentDidMount(){
    this.startTimer();
  };

  startTimer(){
    var scrollView=this.refs.scrollView;
    var imgCount=ImageDate.data.length;
    this.timer1=setInterval(
        ()=>{
          var activePage=0;
          if((this.state.currentPage+1)>=imgCount){
            activePage=0;
          }else{
            activePage=this.state.currentPage+1;
          }
          this.setState({
            currentPage:activePage
          });
          //滚动
          var offsetX=activePage*width;
          scrollView.scrollResponderScrollTo({x:offsetX,y:0,animated:true})
        },
        this.state.duration
    );
  }



  renderAllImage(){
   
    var imageArr=ImageDate.data;
    var allImage=imageArr.map((date,i)=>{
        return <Image key={i} source={{uri:date.img}} style={{width:width,height:150}} />
    })
    return allImage;
  };
  renderPageCricle(){
    var style;
    var imageArr=ImageDate.data;
    var allCircleArr=imageArr.map((date,i)=>{
        style=(i==this.state.currentPage)?{color:'orange'}:{color:'#ffffff'};
        return <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
    })
    return allCircleArr;
  };
  onAnimationEnd(e){
    var ofSetx=e.nativeEvent.contentOffset.x;   // 获取滑动的偏移量
    var xNumber=Math.floor(ofSetx/width);
    this.setState({
      currentPage:xNumber
    });
  }
};


const styles = StyleSheet.create({
  container: {
    marginTop:0
  },
  pageView:{
    width:width,
    height:25,
    backgroundColor:'rgba(0,0,0,0.4)',
    position:'absolute',
    bottom:0,
    flexDirection:'row',
    alignItems:'center'
  }
});



