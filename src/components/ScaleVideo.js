import React from 'react';
import {connect} from "react-redux";
import {setVideoScale} from "../actions";


function ScaleVideo(props) {
  return (
      <div>
        Scale Video: <input
        onChange={
          (e)=>{
            if(props.set){
              props.set(e.target.value);
            }
          }
        }
         type="range" min="1" max="10" step="1" />
      </div>
  );
}
function mapDispatchToProps(dispatch){
  return {
    set:function(scale){
      let action = setVideoScale(scale);
      dispatch(action);
    }
  }
}
export default connect(null,mapDispatchToProps)(ScaleVideo);