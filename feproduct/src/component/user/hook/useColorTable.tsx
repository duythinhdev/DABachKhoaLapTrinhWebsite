import React from 'react'

export default function useColorTable(attribute: string) {
    function rowAlternateColors() {
        switch(attribute)
        {
            case 'dt':
                var dt = document.getElementsByTagName(attribute) as HTMLCollectionOf<HTMLElement>;

                for(let x = 0;x < dt.length; x++){
                    dt[x].style.backgroundColor = '#546ce8';
                    dt[x].style.color = '#FFFFFF';
                }
            break;
            case 'tr':
                var tr = document.getElementsByTagName(attribute) as HTMLCollectionOf<HTMLElement>;

                for(let x = 0;x<tr.length;x++){
                    if(x % 2 !== 0) 
                    {
                        tr[x].style.backgroundColor = '#edeef2';
                    }
                }
            break;
        }
    }
    return { rowAlternateColors }
}
