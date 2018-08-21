import React,{Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  InteractionManager,
  Alert,
  FlatList,
  Dimensions
} from 'react-native';
import {connect} from 'react-redux';
import Rollimgcom2 from '../detailcom/rollimg2';
import {fetchdatalist} from'../../../actions/newListAction/index'
let {height,width}= Dimensions.get('window');

class Newlists extends Component{
    constructor(){
        super();
        this.state={
        };
    }
    componentWillMount(){
        InteractionManager.runAfterInteractions(()=>{
            const {dispatch,category} = this.props;
            dispatch(fetchdatalist(category));
        })
    };
    refreshing(dataindex){
        InteractionManager.runAfterInteractions(()=>{
            const {dispatch,category} = this.props;
            dispatch(fetchdatalist(category,dataindex.index));
        })
    };
    _header=()=>{
        return <Rollimgcom2/>
    };
    _separator=()=>{
        return <View style={{height:1,backgroundColor:'#CFCFCF'}} />
    };
    _renderItem=({item})=>{
        return <View style={styles.Astrip}>
            <Text style={styles.text1} onPress={()=>this.props.navigate('detail',{url:item.url,name:item.desc})}>{item.desc}</Text>
            <Text style={styles.text2}>{item.who}</Text>
            <Text style={styles.text3}>{item.publishedAt}</Text>
        </View>
    };
    _keyExtractor=(item,index)=>'key-${index}';
    render(){
        let androidList=this.props.newListReduces/*[0].dataList*/;
        const {category} = this.props;
        let dataindex;
        let androidListresult;
        switch(category){
            case 'Android':
                dataindex=androidList[0];
                androidListresult=androidList[0].dataList;
                break;
            case 'iOS':
                dataindex=androidList[1];
                androidListresult=androidList[1].dataList;
                this._header=null;
                break;
        }
        return(
            <View style={styles.containers}>
                <FlatList
                    ItemSeparatorComponent={this._separator}
                    data={androidListresult}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    ListHeaderComponent={this._header}
                    onRefresh={this.refreshing.bind(this,dataindex)}
                    refreshing={false}
                    onEndReachedThreshold={10}
                >
                </FlatList>
            </View>
        )
    }
}

function mapStateToProps(state){
    const {newListReduces} = state;
    return {
        newListReduces
    }
}
export default connect(mapStateToProps)(Newlists);
const styles=StyleSheet.create({
    containers:{
        backgroundColor:'#fff',
    },
    Astrip:{
        width:width,
        marginTop:10,
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        alignContent:'space-around'
    },
    text1:{
        width:width,
        paddingLeft:12,
        color:'#0F0F0F',
        fontWeight: 'bold'
    },
    text2:{
        width:(width/2),
        paddingLeft:12,
        marginTop:10,
    },
    text3:{
        width:(width/2),
        paddingLeft:12,
        marginTop:10,
        marginBottom:10
    }
});
 