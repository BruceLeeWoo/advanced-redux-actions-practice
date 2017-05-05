import React from 'react';
import {setVideoURL} from "../actions";
import {connect} from "react-redux";

function VideoTextBox(props) {
  return (
      <div>
        Enter URL of YouTube video
        <input 
      onChange={(e)=>{
        if(props.set){
          props.set(e.target.value);
        }
      }}
      type="text" />

      </div>
  );
}
function mapDispatchToProps(dispatch){
  return {
    set:function(url){
      let action = setVideoURL(url)
      dispatch(action);
    }
  }
}
export default connect(null,mapDispatchToProps)(VideoTextBox);