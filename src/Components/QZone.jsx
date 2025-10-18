import React from 'react';
import swimming from '../assets/swimming.png'
import playground from '../assets/playground.png'
import clas from '../assets/class.png'

const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className="font-bold mb-5">Q-Zone</h2>
            <div className='flex flex-col items-center'>
                <img src={swimming} alt="" />
                <img src={clas} alt="" />
                <img src={playground} alt="" />
            </div>
        </div>
    );
};

export default QZone;