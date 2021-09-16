export const checkStringIsNumeric = (value: string): boolean => {
    return /^\d+$/.test(value);
};
