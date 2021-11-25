import React from 'react';


class Authorization {
    header = '';
    setheader(value) {
        this._header = value;
    }
    getheader() {
        return this._header;
    }
    constructor(props) {
        super(props);
        let admin = JSON.parse(localStorage.getItem('tokenAdmin')  || '{}')
        if(admin !== undefined)
        {
            let header =  {
                authorization: `Bearer ${admin}`,
            }
            return this.setheader(header);
        }
    }
}
export default Authorization
