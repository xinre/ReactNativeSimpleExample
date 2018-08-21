import * as types from '../../actions/actionType';

const initState = {
    loading:false,
    beauty:[]
}

export default function beautyReducers(state = initState,action){
    switch (action.type){
        case types.FETCH_WELFARE_LIST:
            return Object.assign({},state,{
                loading:true,
                beauty:action.beauty
            });
        break;
        default:
            return state;
    }
}