const url = 'http://192.168.2.41:3001';
export { url };

export function setCookie(name: string, value: string, days: number) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    return value;
}

export function getCookie(name: string): string | null {
    const cookieArr = document.cookie.split(";");

    for (let i = 0; i < cookieArr.length; i++) {
        const cookiePair = cookieArr[i].split("=");

        if (name === cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]);
        }
    }

    return null;
}

export function deleteCookie(name: string) {
    document.cookie = name + '=; Max-Age=-99999999;';
}