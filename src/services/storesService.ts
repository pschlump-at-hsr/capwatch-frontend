import httpService from './httpService';
import { Store } from '../types/store-types';

export async function getStores(): Promise<Store[]> {
  const result = await httpService.get('/stores');
  return result.data;
}

export async function getStoresFiltered(searchFilter: string): Promise<Store[]> {
  const params = new URLSearchParams([['filter', searchFilter]])
  const result = await httpService.get('/stores', {params});
  return result.data;
}
