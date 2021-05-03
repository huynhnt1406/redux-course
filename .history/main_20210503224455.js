const { createStore} = window.Redux

//setup store
const initialState = [
    'Listen To Music',
];
const hobbyReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_HOBBY':{
            const newList = [...state];
            newList.push(action.payload);
            return newList
        }
        default:
            return state;
    }
}

const store = createStore(hobbyReducer);

//-------------------------

//render redux hobbies list

const renderHobbyList = (hobbyList) => {
    if(!Array.isArray(hobbyList) || hobbyList.length === 0) return;

    const ulElement = document.querySelector('#hobbyListId')
    if(!ulElement) return;
    //reset previous content of ul
    ulElement.innerHTML = '';
    for (const hobby of hobbyList) {
        const liElement = document.createElement('li');
        liElement.textContent = hobby;
        ulElement.appendChild(liElement);
    }
}
///RENDER INITIAL HOBBY LIST
const initialHobbyList = store.getState();
console.log(initialHobbyList)
renderHobbyList(initialHobbyList);

//handle form submit

const hobbyFormElement = document.querySelector('#hobbyFormId');
if(hobbyFormElement){
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const hobbyTextElement =hobbyFormElement.querySelector('#hobbyTextId');
        if(!hobbyTextElement) return;
        console.log('submit', hobbyTextElement.value)
        const action = {
            type:'ADD_HOBBY',
            payload:hobbyTextElement.value
        }
        store.dispatch(action);
        //RESET FORM
        hobbyFormElement.reset();
    };
    hobbyFormElement.addEventListener('submit', handleFormSubmit);
}

store.subscribe(() => {
    console.log('STATE UPDATED', store.getState())
    const newHobbyList = store.getState();
    renderHobbyList(newHobbyList);
    //save on localStorage
    localStorage.setItem('hobbyLists', JSON.stringify(newHobbyList))
    
})