export const writteLocalStorage = (element: any, formattedDateTime: string) => {
    localStorage.setItem(`${formattedDateTime}-memoIts`, JSON.stringify(element));
    return true
}