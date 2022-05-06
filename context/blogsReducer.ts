import { BlogsState } from './';
import { Blog } from '../interfaces';


type BlogsActionType = 
   | { type: '[Entry] Add-Post', payload: Blog  } 


export const blogsReducer = ( state: BlogsState, action: BlogsActionType ): BlogsState => {

   switch (action.type) {
      case '[Entry] Add-Post':
         return state;
      default:
         return state;
   }

}