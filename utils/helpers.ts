export const BASE_URI = 'https://pokeapi.co/api/v2';

export const beautify = (str: string) => {
    let newStr = '';
    const strArr = str.split('-');
    
    strArr.forEach(s => {
        if (newStr !== '') {
            newStr += ' ';
        }

        newStr += s.charAt(0).toUpperCase() + s.slice(1);
    });

    return newStr;
}