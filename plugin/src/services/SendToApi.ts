export interface IApiData {
  origin: string
  device: string
  system: string
  exchangedThemes: string
}

export async function SendToAPI(data: IApiData, endpoint: string, token?: string | null): Promise<Response | { error: boolean, message: string }> {
  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    }

    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    })

    if ('error' in response || !response.ok) {
      const errorData = await response.json()
      return { error: true, message: errorData.message }
    }

    return await response.json()
  } catch (err) {
    return { error: true, message: err as string }
  }
}
