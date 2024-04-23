const url = 'http://192.168.1.111:3001';
export { url };

// cookieUtils.ts
export function setCookie(name: string, value: string, days: number) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    return value;
}

export function getUserIdFromCookie(cookieName: string): string | null {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === cookieName) {
            return value;
        }
    }
    return null;
}

export function deleteCookie(name: string) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

//ลอง
function getDataFromCookies() {
    const username = getUserIdFromCookie('username'); // Call the method to retrieve the username from cookies
    const password = getUserIdFromCookie('password'); // Call the method to retrieve the password from cookies

    console.log('Username from cookies:', username);
    console.log('Password from cookies:', password);
}
//getDataFromCookies()