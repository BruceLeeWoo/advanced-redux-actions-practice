import React from 'react';
import {connect} from "react-redux";
import {setIsLoading} from "../actions";

function ShowModal(props) {
  return (
      <div>
        <button onClick={
          ()=>{
            if(props.setIsLoading){
              props.setIsLoading(true);
            }
          }
        }>Show Modal</button>

      </div>
  );
}
function mapDispatchToProps(dispatch){
  return {
    setIsLoading:function(loading){
      let action = setIsLoading(loading);
      dispatch(action);
    }
  }
}
export default connect(null,mapDispatchToProps)(ShowModal);
