import React from 'react';
import { MoonLoader } from 'react-spinners';

const Loadin = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <MoonLoader></MoonLoader>
        </div>
    );
};

export default Loadin;