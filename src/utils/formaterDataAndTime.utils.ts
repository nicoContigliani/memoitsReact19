export const formaterDataAndTime = (element: any, dash: string) => {

    switch (dash) {
        case "middle":
            return element.format('YYYY-MM-DD-HH:mm:ss');
        case "middel":
            return element.format('YYYY-MM-DD-HH:mm:ss');
        case "underscore":
            return element.format('YYYY-MM-DD_HH:mm:ss');
        case "not":
            return element.format('YYYY-MM-DD HH:mm:ss');
        default:
            break;
    }

}

