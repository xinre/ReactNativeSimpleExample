import * as types from '../actionType/index';

export function fetchdatalist(category = 'Android',index=1){
    return dispatch =>{
        let URL =`http://gank.io/api/data/${category}/10/${index}`;
        fetch(URL).then(response => response.json())
            .then(responseData => {
                dispatch(fetchgetlist(responseData,category))
            })
    }
}

function fetchgetlist(rankList,category,index){
    return {
        type: types.RECEIVE_ARTICLE_LIST,
        rankList:rankList,
        category:category,
        isRefreshing: false,
        index:index
    }
}
