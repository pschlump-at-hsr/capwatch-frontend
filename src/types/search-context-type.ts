import { Dispatch, SetStateAction } from 'react'

// TODO Improve naming, better solution than ...Type?
export type SearchContextType = (string | Dispatch<SetStateAction<string>>)[];
