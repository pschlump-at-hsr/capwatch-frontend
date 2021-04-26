import httpService from './httpService';
import { Store } from '../types/store-types.js';

export async function getStores(): Promise<Store[]> {
  const result = await httpService.get('/stores');
  return result.data;
}
