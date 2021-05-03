import React from 'react'
import { useSelector } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list)
    return (
        <div className="home-page">
            <HobbyList hobbyList={hobbyList}/> 
            <h3>Hello</h3>
        </div>
    )
}

export default HomePage
