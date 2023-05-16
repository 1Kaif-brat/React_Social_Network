import { act } from "react-dom/test-utils";

const UPDATEPOSTTEXT = 'UPDATEPOSTTEXT';
const ADDPOST = 'ADDPOST';
const SENDMESSAGETEXTAREA = 'SENDMESSAGETEXTAREA'
let store = {
    _rerenderEntireTree() { alert('hhhhhhh') },
    _state: {
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
            newMessageBody: '',

        },
        sidebar: {},
    },

    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    getState: function () {
        return this._state
    },
    dispatch: function (action) {
        if (action.type == ADDPOST) {
            this._state.profilePage.postsData.push({
                id: '5', message: this._state.profilePage.newPostText, likes: '10',
            })
            this._state.profilePage.newPostText = '';
            this._rerenderEntireTree(this._state)
        } else if (action.type == UPDATEPOSTTEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._rerenderEntireTree(this._state)
        } else if (action.type == SENDMESSAGETEXTAREA) {
            this._state.messagePage.newMessageBody = action.message;
            console.log(this._state.messagePage.newMessageBody)
            this._rerenderEntireTree(this._state)
        }
    }
}

export let actionUpdatePostText = (textAr) => {
    return { type: UPDATEPOSTTEXT, newText: textAr }
}
export let actionAddPost = () => {
    return { type: ADDPOST }
}

export let addStateMessageFromTextArea = (m) => {
    return { type: SENDMESSAGETEXTAREA, message: m }
}

export { store };





