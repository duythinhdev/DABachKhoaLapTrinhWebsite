import React from 'react';

function Authorization() {
    let token  =  JSON.parse(localStorage.getItem("token") || '{}');
    if(token)
    {
        let header  = {
            headers: {
                'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }
        return header;
    }
}


module.exports = {
    Authorization
}
