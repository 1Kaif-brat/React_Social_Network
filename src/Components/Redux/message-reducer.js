const SENDMESSAGETEXTAREA = 'SENDMESSAGETEXTAREA'


let initialState = {
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
    newMessageBody: [],

};

const messageReduce = (state = initialState, action, id) => {
    console.log('4 :', state,)
    const newMessagesData = [...state.messagesData];

    if (action.type == SENDMESSAGETEXTAREA) {
        let arr = newMessagesData.map(message => {
            if (message.id === action.id) {
                message.message = action.message
            }
            return message
        });
        console.log(arr)
    }
    console.log('14 :', state)
    return state;
}
export default messageReduce;