export const writteLocalStorage = (dataSerch: any) => {
    let totalObject: any = {};
    const saved: any = localStorage.getItem(dataSerch);
    if (saved !== null) return totalObject = JSON.parse(saved);
}

export const writteLocalStorageHome = (dataSerch: any) => {
    const localStorageService = {
        getValuesWithPattern: (pattern: any) => {
            const keys = Object.keys(localStorage).filter(key => key?.endsWith(pattern));
            return keys.map(key => JSON.parse(localStorage.getItem(key)));
        }
    };

    const matchingValues = (localStorageService.getValuesWithPattern(dataSerch)).reverse();
    return matchingValues
}