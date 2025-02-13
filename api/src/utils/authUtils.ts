import jwt from 'jsonwebtoken'
import { AUTH_SECRET_KEY } from "../constants/authConstants"

export function sanitizeJwtToken(token: string): string {
  return token.replace(/[^a-zA-Z0-9]/g, '')
}

export function restoreJwtToken(sanitizedToken: string): string | null {
  if (sanitizedToken.length < 10) return null

  const match = sanitizedToken.match(/^([A-Za-z0-9]+)([A-Za-z0-9]+)([A-Za-z0-9]+)$/);
  if (!match) return null;

  return `${match[1]}.${match[2]}.${match[3]}`;
}

export async function verifyJwtToken(token: string): Promise<{} | { error: boolean, message: string }> {
  try {
    let cleanToken = token;

    if (!token.includes('.')) {
      const restored = restoreJwtToken(token);
      if (!restored) return false;
      cleanToken = restored;
    }

    const verifyToken = jwt.verify(cleanToken, AUTH_SECRET_KEY)

    if (!verifyToken) {
      return { error: true, message: 'Token inválido!' }
    }
    
    return verifyToken
  } catch (error) {
    console.error('Erro ao verificar token:', error);
    return false;
  }
}