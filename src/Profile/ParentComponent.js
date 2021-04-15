import React from 'react'
import Profile from './Profile'

const ParentComponent = () => {
    const handleAlert = (fullName) => alert(`Hi! ${fullName}`);

    return (
    <div>
            <Profile 
        fullName="feten hajboubaker"
        bio="I am a student in GO MY CODE"
        profession="full-stack developer"
        handleAlert={handleAlert}
            >

        <div>

        <ul style={{marginTop:'150px'}} >
          <li><img src="me.jpg" width="250" />
                    <p style={{  fontFamily: 'Gloria Hallelujah'}}>It's me !</p></li>
        
        </ul>
        <div class="light"></div>
         
        </div>
            </Profile>
    </div>
    );
};

export default ParentComponent
