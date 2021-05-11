import httpService from './httpService';
import { Store } from '../types/store-types';

export async function getStores(): Promise<Store[]> {
  const result = await httpService.get('/stores');
  return result.data;
}

export async function getStoresFiltered(searchQuery: string): Promise<Store[]> {
  console.log(searchQuery);
  const params = new URLSearchParams([['filter', searchQuery]]);
  const result = await httpService.get('/stores', { params });
  return result.data;
}
