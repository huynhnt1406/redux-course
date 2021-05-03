import React from 'react'
import { useSelector } from 'react-redux';

HomePage.prototype = {

};

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list)
    console.log('Hobby List :' , hobbyList)
    return (
        <div className="home-page">
            <h3>REDUX HOOKS - Homepage</h3> 
        </div>
    )
}

export default HomePage
