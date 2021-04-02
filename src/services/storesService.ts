import httpService from './httpService';

export async function getStores() {
  const result = await httpService.get('/stores');
  return result.data;
}
