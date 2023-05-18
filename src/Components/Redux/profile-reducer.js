const UPDATEPOSTTEXT = 'UPDATEPOSTTEXT';
const ADDPOST = 'ADDPOST';

let initialState = {
    postsData: [
        { id: '1', message: 'Hello', likes: '50', },
        { id: '2', message: 'How are you ?', likes: '22', },
    ],
    newPostText: '',
}

const profileReduce = (state = initialState, action) => {
    if (action.type == ADDPOST) {
        state.postsData.push({
            id: '5', message: state.newPostText, likes: '10',
        })
        state.newPostText = '';
        
    } else if (action.type == UPDATEPOSTTEXT) {
        state.newPostText = action.newText;
    } 

    return state;
}
 export default profileReduce;