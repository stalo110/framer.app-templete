const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4000/api";

export async function request<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, options);
  const result = await response.json().catch(() => ({}));
  if (!response.ok)
    throw new Error(result.error ?? "The request could not be completed.");
  return result as T;
}
