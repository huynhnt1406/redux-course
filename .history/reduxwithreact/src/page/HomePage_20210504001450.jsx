import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';
import { addNewHobby } from '../actions/hobby';

const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000)
}
function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list)
    const dispatch = useDispatch()
    console.log('Hobby List :',hobbyList)
    const handleAddHobbyClick = () => {
        //random a hobby object: id + title
        const newId = randomNumber()
        const newHobby = {
            id:newId,
            title:`Hobby ${newId}`
        }
        //Dispatch action to add a new hobby to redux store
        const action = addNewHobby(newHobby);
        dispatch(action);
    }
    return (
        <div className="home-page">
            <HobbyList hobbyList={hobbyList}/> 
            <button onClick={handleAddHobbyClick}>Random Hobby</button>
            <h3>Hello</h3>
        </div>
    )
}

export default HomePage
