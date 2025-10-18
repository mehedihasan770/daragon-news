import React, { Suspense } from 'react';
import Categorys from '../Categorys';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                <Categorys></Categorys>
            </Suspense>
        </div>
    );
};

export default LeftAside;