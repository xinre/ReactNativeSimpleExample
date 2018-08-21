import * as types from '../actionType/index.js';

export function fetchBeauty() {
    let page = Math.floor(Math.random()*19+1);
    return dispatch => {
        let URL = `http://gank.io/api/data/福利/12/${page}`;
        fetch(URL).then(response => response.json())
            .then(responseData => {
                dispatch(receiveBeautyList(responseData));
            }).catch((error) => {
            console.log('error');
        }).done();
    }
}

function receiveBeautyList(beauty) {
    return {
        type: types.FETCH_WELFARE_LIST,
        loading: true,
        beauty: beauty.results
    }
}


