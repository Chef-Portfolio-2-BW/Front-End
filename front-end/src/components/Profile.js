import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './axiosAuth.js';
import RecipeCardPro from './recipeCardPro';
import { CardDeck } from 'reactstrap';
import { Link } from 'react-router-dom';




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
            <div className='profile-container'>
                <section className='profile-section'>
                    <div className='profile-content'>
                        <h1>{props.currentUser.name}'s Recipes</h1>
                        <div>
                        <CardDeck className='fix'>
                        {profileData.map(recipe =>(
                            <RecipeCardPro
                            {...props}
                            key={recipe.id}
                            id={recipe.id}
                            name={recipe.name}
                            img={recipe.img}
                            username={recipe.username}
                            />
                             ))}
                        </CardDeck>
                            <Link to='/create'>
                            <button className="add-button">
                                Create Post!
                            </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        )
        // return(
        //     <div>
        //       <Container className="recipe-list-main main account">
        //         <Row>
        //           <Col><h2>Your Recipes</h2></Col>
        //         </Row>

        //         <CardDeck className='fix'>
        //           {recipeList.map(recipe =>(

        //               <RecipeCardPro {...props} key={recipe.id} id={recipe.id} name={recipe.name} img={recipe.img} username={recipe.username} />

        //           ))}
        //         </CardDeck>
        //       </Container>
        //     </div>
        //   )

}
export default Profile;
