let rerenderEntireTree = () => {alert('hello')};
let state = {
    profilePage: {
        postsData: [
            { id: '1', message: 'Hello', likes: '50', },
            { id: '2', message: 'How are you ?', likes: '22', },
        ],
        newPostText: '',

    },
    messagePage: {
        messagesData: [
            { id: "1", message: "Hello", },
            { id: "2", message: "How are ?", },
            { id: "3", message: "What is ?", },
            { id: "4", message: "My name is ZobjiQ", },
            { id: "5", message: "This is BLL", },
        ],
        dialogsData: [
            { id: '1', name: 'Dimych', imgSrc: 'https://www.konik.ru/upload/iblock/f4d/f4dc47db5daed2bf89f66f78e23612ac.jpg' },
            { id: '2', name: 'Andre', imgSrc: 'https://i.artfile.ru/2048x1492_1151351_[www.ArtFile.ru].jpg' },
            { id: '3', name: 'Max', imgSrc: 'https://img2.goodfon.ru/original/1400x1050/5/78/white-pony-small-horse.jpg' },
            { id: '4', name: 'Pablo', imgSrc: 'http://two-worlds.ru/wp-content/uploads/2017/06/17190.jpg' },
            { id: '5', name: 'Dani', imgSrc: 'https://pazlyigra.ru/uploads/posts/2021-01/1611038047_horses_three_3_507391_3840x2400.jpg' },
        ],

    },
    sidebar: {},

};

let addPost = () => {
    state.profilePage.postsData.push({
        id: '5', message: state.profilePage.newPostText, likes: '0',
    })
    state.profilePage.newPostText = '';
    rerenderEntireTree(state)

};

let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
    
};

let updateMessage = (newMessage) => {
    state.messagePage.messagesData[0].message = newMessage;
    rerenderEntireTree(state)
    console.log(state.messagePage.messagesData[0].message);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}










export { state, addPost, updateNewPostText, updateMessage };





