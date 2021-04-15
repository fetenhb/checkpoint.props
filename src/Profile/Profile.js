import React from 'react'
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
const Profile = (props) => {
           // Destructuring Props the old Way
  const {
    fullName,
    bio,
    profession,
    children,
    handleAlert,
  } = props;

    return (
        <div style={{marginLeft:'10%', marginRight:'30%', marginTop:'40px'}}>
          <div>
           <div class="row">
             <div class="col-md-8" style={{marginTop:'150px'}}>

                <p style={{fontFamily:'Fredericka the Great', fontSize:'60px'}}> Hi ! my name is {fullName}</p>
                <br />
                <p style={{fontFamily:'Gloria Hallelujah', fontSize:'30px'}}>  {bio}</p> 
                <br />
                <p style={{fontFamily:'Gloria Hallelujah', fontSize:'25px', fontWeight:'bold'}}> I am a <span>{profession}</span></p>

            </div>
              <div class="col-md-4">{children}</div>
           </div>
          </div>
          <Button variant="warning" onClick={() => handleAlert(` i am ` +fullName)}
          style={{marginLeft:'150px', marginTop:'50px', fontWeight:'bold', width:'170px',height:'50px'}}
          >Click me !</Button>{' '}

        </div>
        
    )
}
  //PropTypes
Profile.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleAlert: PropTypes.func.isRequired,
  }),
  
};
// Default Props
Profile.defaultProps = {
  name: "undifiend",
  bio: "bio",
  profession: "none",
};
export default Profile

