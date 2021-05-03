console.log(window.Redux)

const { createStore} = window.Redux
//STATE

//REDUCER

//STORE

const initialState = [
    'Listen To Music',
];
const hobbyReducer = (state = initialState, action) => {
    return state
}

const store = createStore(hobbyReducer);

//-------------------------

//render redux hobbies list

const renderHobbyList = (hobbyList) => {
    if(Array.isArray(hobbyList) || hobbyList.length === 0) return;

    const ulElement = document.querySelector('#hobbyListId')
    if(!ulElement) return;
    //reset previous content of ul
    ulElement.innerHTML = '';
    for (const hobby of hobbyList) {
        const liElement = document.createElement('li');
        liElement.textContent = hobby;
        ulElement.appendChild(liElement);
    }
    console.log(liElement)
}
///RENDER INITIAL HOBBY LIST
const initialHobbyList = store.getState();
console.log(initialHobbyList)
renderHobbyList(initialHobbyList);