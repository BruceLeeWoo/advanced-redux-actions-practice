import React from 'react';
import {setCurrentUserSort} from "../actions";
import {connect} from "react-redux";

function SortUsers(props) {
  return (
      <div>
        Sort Users On: 
        <select onChange={
          (e)=>{
            if(props.set){
              props.set(e.target.value);
            }
          }
        }>
          <option value="first_name">First Name</option>
          <option value="last_name">Last Name</option>
        </select>
      </div>
  );
}
function mapDispatchToProps(dispatch){
  return {
    set:function(txt){
      let action = setCurrentUserSort(txt);
      dispatch(action);
    }
  }
}
export default connect(null,mapDispatchToProps)(SortUsers);
