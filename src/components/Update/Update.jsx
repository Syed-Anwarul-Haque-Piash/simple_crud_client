import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedBuyers = useLoaderData();
    console.log(loadedBuyers);
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const buyer = { name, email }
        console.log(buyer);
        fetch(`http://localhost:5000/buyers/${loadedBuyers._id}`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(buyer)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>
            <h2>{loadedBuyers.name}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Update;