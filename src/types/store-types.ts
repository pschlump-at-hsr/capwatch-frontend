export type Store = {
    id: string,
    name: string,
    street: string,
    zipCode: number,
    city: string,
    maxCapacity: number,
    currentCapacity: number,
    logo: string,
    storeType: {
        id: string,
        description: string
    },
    isFavorite: boolean
};

export type FavoriteStore = Store & {
    isFavorite: boolean
};
