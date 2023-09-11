import { useEffect, useState } from 'react';
import './Friends.css'
import Friend from './Friend';
export default function Friends(){

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    }, [])

    return (
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}


/**
 * 1. state to hold data (at line 6)
 * 2. use effect with dependency array (at line 8)
 * 3. use fetch to load data (at line 9)
 * 4. set loaded data to the state (at line 11)
 * 5. display data on the component (at line 18)
*/