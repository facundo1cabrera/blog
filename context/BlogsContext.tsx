import { createContext } from 'react';
import { Blog } from '../interfaces';

interface ContextProps {
    //entries: Entry[];
    //addNewEntry: (description: string) => void;
    //updateEntry: ( entry: Entry, showSnackbar?: boolean ) => void;
    //deleteEntry: ( id: string, showSnackbar: boolean ) => void;

    blogs: Blog[];
}


export const BlogsContext = createContext({} as ContextProps);