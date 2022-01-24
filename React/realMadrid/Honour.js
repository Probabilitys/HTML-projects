import React from 'react';
import Image from './Image';

const Honour = ( { honour } ) => {

    return (
        <div className={`honour ${honour.source !== undefined ? '' : 'honour-title'}`} >
            <div className='honour-img'>
            {
                honour.source !== undefined
                ? <Image source={honour.source} caption={honour.competition}/>
                : <div>{honour.competition}</div>
            }
                
            </div>
            <div className='honour-number'>{honour.number}</div>
            <div className='honour-season'>{honour.season}</div>
        </div>
    )

};

export default Honour;
