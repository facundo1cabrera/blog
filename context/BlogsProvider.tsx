import { ReactNode, useEffect, useReducer } from 'react';

import { Blog } from '../interfaces';
import { blogsApi } from '../api';
import { BlogsContext, blogsReducer } from './';

export interface BlogsState {
    blogs: Blog[];
}

const BLOG_INITIAL_STATE: BlogsState = {
    blogs: [
    ],
}

export const EntriesProvider = ({ children }: {children: ReactNode}) => {


    const [state, dispatch] = useReducer( blogsReducer , BLOG_INITIAL_STATE );

    


    return (
        <BlogsContext.Provider value={{
            ...state,
        }}>
            { children }
        </BlogsContext.Provider>
    )
}