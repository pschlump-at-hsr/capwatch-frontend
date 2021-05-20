import httpService from './httpService';
import { Store } from '../types/store-type';

export async function getStores(): Promise<Store[]> {
  const result = await httpService.get('/stores');
  return result.data;
}

export async function getStoresFiltered(searchQuery: string): Promise<Store[]> {
  const result = await httpService.get('/stores', { params: { filter: searchQuery } });
  return result.data;
}
