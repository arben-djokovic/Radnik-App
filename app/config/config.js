import { jwtDecode } from "jwt-decode";

// app/config/config.js
export const getToken = () => {
  if (typeof window === 'undefined') return undefined;
  return localStorage.getItem('token') || undefined;
};

export const setToken = (token) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token);
    window.dispatchEvent(new Event('storage'));
  }
};

export const logOut = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('token');
    window.dispatchEvent(new Event('storage'));
  }
};

export const isLogged = () => {
  if (typeof window === 'undefined') return false;
  return !!localStorage.getItem('token');
};

export const getDecodedToken = () => {
  try{
    const token = getToken();
    if(!token) return null;
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
    return decodedToken
  }catch(err){
    console.log(err)
    return null
  }
}