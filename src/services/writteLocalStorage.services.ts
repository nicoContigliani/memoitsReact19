const user = "nico-contigliani"

export const writteLocalStorage = (element: any, formattedDateTime: string) => {
    localStorage.setItem(`${formattedDateTime}-${user}-memoIts`, JSON.stringify(element));
    return true
}