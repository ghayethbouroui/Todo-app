import React ,{Component} from 'react';
import'./App.css';
import Add from './component/AddItems/add';
import Todo from './component/todoItems/todoitems';

class App extends Component {

    state={
        items:[
            {id:"1",name:"hamza",age:"25"},
            {id:"2",name:"ali",age:"35"},
            {id:"3",name:"omar",age:"45"},
            {id:"4",name:"hama",age:"85"},
        ]
    }

    deleteitem =(id)=>{
     let items=this.state.items.filter(item =>{
         return(item.id !== id)
     })
     this.setState({items})
    }

    additem =(item)=>{
        item.id=Math.random()
        let items =this.state.items
        items.push(item)
        this.setState({items})

    }

    render(){
        return(
            <div className='App container'>
                <h1 className='text-center'>ToDO app</h1>
                <Todo items={this.state.items} deleteitem={this.deleteitem} />
                <Add additem={this.additem}/>
            </div>
        )
    }
}

export default App;