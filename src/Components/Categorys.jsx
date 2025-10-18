import { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromis = fetch('/categories.json')
.then(res => res.json())
const Categorys = () => {
    const categories = use(categoryPromis)
    return (
        <div>
            <h2 className='font-bold'>All Categorys({categories.length})</h2>
            <div className='grid grid-cols-1 mt-5 gap-2'>
                {
                    categories.map(categorie => <NavLink key={categorie?.id} className={'btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent'} to={`/category/${categorie.id}`}>{categorie?.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categorys;