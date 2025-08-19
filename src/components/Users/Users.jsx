import React, { useState } from 'react';
import { data, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedBuyers=useLoaderData();
    const [buyers,setBuyers]=useState(loadedBuyers);
    const handleDelete=(_id)=>{
        console.log(_id);
        fetch(`http://localhost:5000/buyers/${_id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
            alert("deleted Successfully");
            const remaining= buyers.filter(buyer=>buyer._id!==_id);
            setBuyers(remaining)
        }
        })
        
    }
    return (
        <div>
            <h2>{buyers.length}</h2>
            {
                buyers.map(buyer=><p key={buyer._id}>{buyer.name}:{buyer.email} <button onClick={()=>handleDelete(buyer._id)}>X</button></p>)
            }
        </div>
    );
};

export default Users;