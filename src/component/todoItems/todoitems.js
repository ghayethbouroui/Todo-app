import React from "react";
import'./todoitems.css'

const Todo =(props)=>{
    const {items,deleteitem}=props;
    let length =items.length

    const theitems = length ?(items.map(e=>{
        return(
            <div key={e.id}>
                <span className="name">{e.name}</span>
                <span className="age">{e.age}</span>
                <span className="action icon" onClick={()=>deleteitem(e.id)}>&times;</span>
            </div>
        )
    })
    ):(
        <p>no item....!</p>
    )
    return(
        <div className="listItems">
            <div>
            <span className="name title">name</span>
            <span className="age title">age</span>
            <span className="action title">action</span>
            </div>

            {theitems}
        </div>
    )
}

export default Todo;