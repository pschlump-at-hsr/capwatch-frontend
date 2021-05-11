import React, { Dispatch, SetStateAction } from 'react';

export type SearchContext = (string | Dispatch<SetStateAction<string>>)[];

export const SearchContext = React.createContext<SearchContext>({} as SearchContext);
