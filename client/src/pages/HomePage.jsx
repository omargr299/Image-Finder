import React from 'react';
import { SearchForm } from '../components';

export function HomePage(){
    return(
        <div className='p-4 d-flex flex-column align-items-center '>
            <h1 className=' mb-4 '>Image Finder</h1>
            <SearchForm />
        </div>
    );
}