export async function dataFetch<T>(url: string, type: string): Promise<T> {
  const response = await fetch(`${url}${type}`)
  return response.json()
}