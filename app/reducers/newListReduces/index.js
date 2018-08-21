import * as types from '../../actions/actionType/index';

const initialState = [{
    isRefreshing: false,
    dataList:[],
    index:1
},{
    isRefreshing: false,
    dataList:[],
    index:1
}];

export default function read(state = initialState,action){
    switch (action.type) {
        case types.RECEIVE_ARTICLE_LIST:
            switch(action.category){
                case 'Android':
                    state[0].dataList=action.rankList.results;
                    state[0].isRefreshing=action.isRefreshing;
                    state[0].index=state[0].index + 1;
                    break;
                case 'iOS':
                    state[1].dataList=action.rankList.results;
                    state[1].isRefreshing=action.isRefreshing;
                    state[1].index=state[1].index + 1;
                    break;
            }
            return Object.assign({}, state);
        break;
        default:
            return state;
    }
}
