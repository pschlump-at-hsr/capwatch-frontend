import React, { Dispatch, SetStateAction } from 'react';
import { SearchContextType } from '../types/search-context-type';

export const SearchContext = React.createContext<SearchContextType>({} as SearchContextType);
