import React,{Component} from "react";
import './add.css'

class Add extends Component{

    state={
        name:'',
        age:''
    }

    handlechange=(e)=>{
        this.setState(
            {[e.target.id] : e.target.value}
            )
    }
    handlesubmit=(e)=>{
        e.preventDefault();
        if(e.target.name.value === '' ){
            return false
        }else  {
            this.props.additem(this.state)
             this.setState({
            name:'',
            age:''
        })
        }

    }


   
    render(){
        return(
            <form onSubmit={this.handlesubmit}>
                 <input type='text' placeholder="name..." id='name' onChange={this.handlechange} value={this.state.name} />
                 <input type='number' placeholder="age..." id='age'  onChange={this.handlechange} value={this.state.age}/>
                 <input type='submit' value="Add"  />
            </form>
        )
    }
}

export default Add;