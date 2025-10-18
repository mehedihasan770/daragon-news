import React from 'react';
import { MoonLoader } from 'react-spinners';

const MainLoading = () => {
    return (
        <div className="flex items-center justify-center h-[calc(100vh-350px)]">
            <MoonLoader color="#36d7b7" size={60} />
        </div>
    );
};

export default MainLoading;

