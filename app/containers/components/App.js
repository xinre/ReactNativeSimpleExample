import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  ScrollView,
  View,
  Image
} from 'react-native';
import { StackNavigator, TabNavigator,DrawerNavigator } from 'react-navigation';
import { DrawerItems } from 'react-navigation';
import MyAbout from '../views/MyAbout';
import ElseScreen from '../views/tab/ElseScreen';
import HomeScreen from '../views/tab/HomeScreen';
import SeekScreen from '../views/tab/SeekScreen';
import MessageScreen from '../views/tab/MessageScreen';
import IconFont from '../Icon/IconFont';
import Add2 from '../views/Add2';
import DetailPage from '../views/DetailPage';
import Welfare from '../views/Welfare';


const MyStack = StackNavigator({
    MyScreen:{
        screen:MyAbout,
        navigationOptions:{
            title:'About',
        },
    },
},{
    navigationOptions:{
        headerTintColor:'#fff',
        headerStyle:{
            backgroundColor:'#6495ED'
        }
    },
    style:{
        marginBottom:100,
    }
});

const WelfareStack = StackNavigator({
    WelfareScreen:{
        screen:Welfare,
        navigationOptions:{
            title:'Welfare',
        }
    }
},{
    navigationOptions:{
        headerTintColor:'#fff',
        headerStyle:{
            backgroundColor:'#6495ED'
        }
    }
});

const AppTabNav = TabNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions:{
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#6495ED',//矢车菊蓝
            },
            title:'话题主页',
            tabBarLabel:'话题',
            tabBarIcon: ({tintColor,focused}) => (
                <IconFont
                    font="&#xe7ff;"
                    style={{ color:tintColor,fontSize:26}}
                />
            )
        }
    },
    Seek:{
        screen:SeekScreen,
        navigationOptions: ({navigation}) =>({
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#6495ED',//矢车菊蓝
            },
            title:'git代码',
            tabBarIcon:({tintColor,focused}) =>(
                <IconFont
                    font="&#xe802;"
                    style={{ color: tintColor,fontSize:26,width:20,height:20}}
                />
            )
        })
    },
    Else:{
        screen:ElseScreen,
        navigationOptions:({navigation}) =>({
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#6495ED',//矢车菊蓝
            },
            title:'好友',
            tabBarIcon:({tintColor,focused}) => (
                <IconFont
                    font="&#xe804;"
                    style={{color:tintColor,fontSize:26}}
                />
            ),
            headerRight:<IconFont
                font="&#xe7fe;"
                style={{color:'#fff',marginRight:15,fontSize:30}}
                onPress={()=>navigation.navigate('Add2')}
            />
        })
    },
    Message:{
        screen:MessageScreen,
        navigationOptions:{
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#6495ED',//矢车菊蓝
            },
            title:'建议箱',
            tabBarIcon:({tintColor,focused}) =>(
                <IconFont
                    font="&#xe80d;"
                    style={{color:tintColor,fontSize:26}}
                />
            )
        }
    }
},{
    initialRouteName:'Home',
    tabBarPosition:'bottom',
    tabBarOptions:{
        showIcon:true,
        showLabel:false,

        activeTintColor:'#6495ED',
        inactiveTintColor:'#999',
        indicatorStyle:{
            backgroundColor:'#fff',
            height: 0
        },
        style:{
            backgroundColor:'#444',
            borderTopWidth:1,
            borderTopColor:'#f0f0f0'
        }
    }
});

const AppStack = StackNavigator({
   Home:{
       screen:AppTabNav,
   },
    Add2:{
        screen:Add2,
        navigationOptions:{
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#6495ED',//矢车菊蓝
            },
            title:'扫码'
        }
    },
    detail:{
        screen:DetailPage,
    }
});


const App = DrawerNavigator({
    App: {
        screen:AppStack,
        navigationOptions: {
            title: '',
            tabBarLabel: '',
        },
    },
    MyScreen: {
        screen:MyStack,
    },
    WelfareStack:{
        screen:WelfareStack,
    }
},{
    drawerWidth:250,
    contentComponent: props => <ScrollView><DrawerContent {...props}/></ScrollView>,
    contentOptions:{
        activeTintColor:'white',
        activeBackgroundColor: '#C4C4C4', // 选中背景颜色
        inactiveTintColor: '#4F4F4F',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
    }
});

const DrawerContent = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../public/image/2.png')} style={styles.bgimg}>
                    <Text style={styles.welcome}>欢迎</Text>
                </Image>
            </View>
            <DrawerItems {...props}/>
        </View>
    )
};

export default App


const styles= StyleSheet.create({
   container:{
       flex:1,
       justifyContent:'center',
   },
    header:{
        height:200,
        width:'100%',
        marginBottom:20
    },
    welcome:{
        fontSize:24,
        height:80,
        textAlign:'center',
        textAlignVertical:'center',
        marginTop:50,
        color:'#fff'
    },
    bgimg:{
        width:'100%',
        height:200
    }
})

