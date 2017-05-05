import React from 'react';
import {addUser,removeUser} from "../actions";
import {connect} from "react-redux";

function UserButtons(props) {
  return (
      <div>
        <button onClick={
          ()=>{
            if(props.add){
              props.add({
                "id": 1,
                "first_name": "george",
                "last_name": "bluth",
                "address": "4116 Magnolia Drive, Portland, ME 04103",
                "phone": 15551234567,
                "occupation": "father",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
              });
            }
          }
        }>Add User</button>
        <button onClick={
          ()=>{
            if(props.remove){
              props.remove()
            }
          }
        }>Remove User</button>
      </div>
  );
}
function mapDispatchToProps(dispatch){
  return {
    add:function(user){
      let action = addUser(user);
      dispatch(action);
    },
    remove:function(){
      let action = removeUser();
      dispatch(action);
    }
  }
}
export default connect(null,mapDispatchToProps)(UserButtons);
