import React from 'react'
import { useSelector } from 'react-redux';
import HobbyList from '../components/Home/HobbyList';
import PropTypes from 'prop-types'
HomePage.propTypes = {

};

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list)
    console.log('Hobby List :' , hobbyList)
    return (
        <div className="home-page">
            <HobbyList hobbyList={hobbyList}/> 
        </div>
    )
}

export default HomePage
