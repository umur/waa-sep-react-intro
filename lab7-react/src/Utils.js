
export  function getToken() {
    return localStorage.getItem('WAA_TOKEN');
}

export function saveToken(token) {
    localStorage.setItem('WAA_TOKEN', token);
}