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
    return decodedToken
  }catch(err){
    console.log(err)
    return null
  }
}

export const formatJoinDate = (dateString) => {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString('sr-Latn-RS', {
    month: 'short',
    year: 'numeric'
  });
  const str = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  return str
}