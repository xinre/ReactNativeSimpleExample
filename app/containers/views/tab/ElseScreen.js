import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    ListView,
    Dimensions
} from 'react-native';
let {height,width}= Dimensions.get('window');
var frienddata = require('../../../../friend.json');

export default class ElseScreen extends Component{
    constructor(){
        super();
        var getSectionData=(dataBlob,sectionID)=>{
            return dataBlob[sectionID];
        };
        var getRowData=(dataBlob,sectionID,rowID)=>{
            return dataBlob[sectionID+':'+rowID];
        };
        this.state={
            dataSource:new ListView.DataSource({
                getSectionData:getSectionData,
                getRowData:getRowData,
                rowHasChanged:(r1,r2)=>r1!==r2,
                sectionHeaderHasChanged:(s1,s2)=>s1!==s2
            })
        }
    };
    render(){
        return(
            <View style={styles.container}>
               <ListView
                   dataSource={this.state.dataSource}
                   renderRow={this.renderRow}
                   renderSectionHeader={this.renderSectionHeader}
               />
            </View>
        )
    };
    renderRow(rowData){
        return(
            <View style={styles.rowStyle}>
                <Image source={require('../../../../public/image/head.png')} style={styles.imageout} />
                <Text style={{marginLeft:10}}>{rowData.name}</Text>
            </View>
        )
    };
    renderSectionHeader(sectionData,sectionID){
        return(
            <View style={styles.topTitle}>
                <Text style={{marginLeft:8}}>{sectionData}</Text>
            </View>
        )
    };
    componentDidMount(){
        this.loadDataFromJson();
    };

    loadDataFromJson(){
        var jsonData=frienddata.data;

        var dataBlob={},
            sectionIDs=[],
            rowIDs=[],
            cars=[];

        for(var i=0;i<jsonData.length;i++){
            sectionIDs.push(i);
            dataBlob[i]=jsonData[i].title;
            //去除组中所有的车
            cars=jsonData[i].cars;
            rowIDs[i]=[];
            //遍历所有的车数组
            for(var j=0;j<cars.length;j++){
                rowIDs[i].push(j);
                dataBlob[i+':'+j]=cars[j];
            }
        }
        this.setState({
            dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIDs,
                rowIDs)
        })
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#fff',
    },
    imageout:{
        width:70,
        height:70
    },
    topTitle:{
        width:width,
        height:25,
        backgroundColor:'#EDEDED',
        justifyContent:'center'
    },
    rowStyle:{
        width:width,
        flexDirection:'row',
        padding:10,
        borderBottomColor:'#A8A8A8',
        borderBottomWidth:0.5,
        alignItems:'center'
    }
});
