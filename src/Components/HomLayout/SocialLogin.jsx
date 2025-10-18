import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login With</h2>
            <div className='grid grid-cols-1 gap-3'>
                <button className='btn btn-outline btn-secondary'><FcGoogle size={30}/> Login With Google</button>
                <button className='btn btn-outline btn-primary'><FaGithub size={30}/> Login With GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;