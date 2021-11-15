const API_URL = 'https://reqres.in/api/users?delay=1&page=';

export async function getContacts(page: number) {
  const response = await fetch(`${API_URL}${page}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}