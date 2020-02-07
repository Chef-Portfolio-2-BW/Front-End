import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './axiosAuth.js';
import { Jumbotron } from 'reactstrap';


const Profile = (props) => {
    console.log(props);
    const [profileData, setProfileData] = useState([]);

    useEffect(() => {
        const getRecipes = () => {
            axiosWithAuth()
            .get('https://bwchefhub.herokuapp.com/api/recipes/myrecipes')
            .then(res => {
                setProfileData(res.data);
                console.log('recipes data: ', res)
            })
            .catch(err => console.log('Error: ', err))
        }
            getRecipes();
        }, []);

        return (
            <div>
                <h1>{props.currentUser.name}</h1>

            </div>
        )

}
export default Profile;
