export function useFetch() {
  const myMockApi = 'https://662d45cea7dda1fa378a41f8.mockapi.io/api/v1'
  const testApiUrl = import.meta.env.VITE_API_TEST_URL
  
  async function GET<T>(endpoint: string): Promise<T | null> {
    const url = !!testApiUrl
                  ? testApiUrl
                  : myMockApi + endpoint

    try {
      const response =  await fetch(url);
      if (response.status === 200) {
        return await response.json() as T
      } else {
        console.error(`Ошибка загрузки: ${response.status} ${response.statusText}`)
        return null
      }
    } catch (error) {
      console.error(`Ошибка на фронте: ${error}`)
      return null
    }
  }

  return {
    GET,
  }
}