import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addArrayList} from './store/action/action'


class Todo extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     todos: [],
  //     Add: false,
  //   }
  // }

  // onChangeInput(event) {
  //   this.setState({
  //     todos: [event.target.value]
  //     // todos:this.state.todos.push(event.target.value),
  //   })
  // this.setState({Add:false});

  // onAddClick() {
  //   console.log("Add");
  // this.setState({
  //   Add: true
  // })

  // }


 todos=[];

 onChangeInput(event){
  todos=todos.push([event.target.value]);
  console.log(todos,'todos');
 }



  render() {
    // console.log(this.state,"this.state");
    // console.log(this.state.todos,"this.state.todos");

    return (
      <div>
        <br />
        <div>
          <label>Type here :
            <input type="text" placeholder="Write todos" onChange={this.onChangeInput.bind(this)} /></label>
          <button onClick={this.onAddClick.bind(this)}>AddTodo</button>
        </div>
      </div>
    );
  }
}
const mapStatetoProps = (state) => {
  // console.log("mapStatetoProps");
  return ({
    // userName: state.root.userName,
  })
}

const mapDispatchToProps = (dispatch) => {
  // console.log("mapDispatchToProps");
  return ({
    addArrayList:()=>{dispatch(addArrayList()}
  })
}


// export default Todo;
export default connect(mapStatetoProps, mapDispatchToProps)(Todo);
