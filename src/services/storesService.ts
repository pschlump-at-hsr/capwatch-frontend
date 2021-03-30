import httpService from './httpService';

export async function getStores() {
  const result = await httpService.post('/stores');
  return result.status === 200;
}
