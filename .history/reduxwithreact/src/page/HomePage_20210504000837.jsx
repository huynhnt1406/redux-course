import React from 'react'
import { useSelector } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';
import casual from 'casual'
import { addNewHobby } from '../actions/hobby';
function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list)
    const dispatch = useDispatch()
    console.log('Hobby List :',hobbyList)
    const handleAddHobbyClick = () => {
        //random a hobby object: id + title
        const newHobby = {
            id:casual.uuid,
            title: casual.title
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
