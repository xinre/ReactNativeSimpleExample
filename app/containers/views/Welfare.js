import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    Alert,
    StatusBar,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import {fetchBeauty} from '../../actions/welfare/index';
let {height,width}= Dimensions.get('window');

class Welfare extends Component {
    componentWillMount(){
        const {dispatch} = this.props;
        dispatch(fetchBeauty());
    };
    getImage(listdata){
        console.log(listdata);
        return (listdata.map((item,index) => {
            return (<TouchableOpacity key={index} style={{padding:2}}>
                     <Image key={index+'_'+item.id} style={styles.image} source={{uri:item.url}} ref={index}/>
                   </TouchableOpacity>)
        })
    )
    }
    render(){
        let listdata=this.props.news.beauty;
        console.log(listdata);
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.imageList}>
                        {this.getImage(listdata)}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

function mapStateToProps(state) {
    const {news} = state;
    return {
        news
    }
}
export default connect(mapStateToProps)(Welfare);

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    },
    image:{
        height:150,
        width:(width-8)/2,
    },
    imageList:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
    }
});

