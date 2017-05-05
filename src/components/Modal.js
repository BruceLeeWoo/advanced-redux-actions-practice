import React from 'react';
import Modal from 'react-modal';
import {connect} from "react-redux";
import {setIsLoading} from "../actions";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

function LoadingModal(props) {
  return (
    <Modal
      isOpen={props.isLoading}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button onClick={
        ()=>{
          props.setIsLoading(false);
        }
        }>close</button>
      <div>Loading .......</div>

    </Modal>
  );
}

function mapStateToProps(state){
  return {
    isLoading:state.isLoading
  }
}
function mapDispatchToProps(dispatch){
  return {
    setIsLoading:function(loading){
      dispatch(setIsLoading(loading));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoadingModal);