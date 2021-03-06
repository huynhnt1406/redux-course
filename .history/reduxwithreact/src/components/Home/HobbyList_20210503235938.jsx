import React from 'react'


HobbyList.defaultProps = {
    hobbyList: []
}
function HobbyList(props) {
    const {hobbyList} = props
    return (
       <ul>
            {
                hobbyList.map(hobby => (
                    <li key={hobby.id}>{hobby.title}</li>
                ))
            }
       </ul>
    );
}

export default HobbyList
