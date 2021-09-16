export const checkIsEqualArrays = (array1: Array<any>, array2: Array<any>): boolean => {
    if (!Array.isArray(array1) && !Array.isArray(array2)) return false;
    if (array1.length !== array2.length) return false;
    const sortedArray1 = array1.sort((a, b) => a - b);
    const sortedArray2 = array2.sort((a, b) => a - b);
    return sortedArray1.every((val, index) => val === sortedArray2[index]);
};
