import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const buyers=useLoaderData();
    const handleDelete=(_id)=>{
        console.log(_id);
        fetch(`http://localhost:5000/buyers/${_id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
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