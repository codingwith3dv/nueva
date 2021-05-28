export const isArray = Array.isArray;
export const isString = (arg: any) => {
  return (arg && typeof arg === 'string') || arg instanceof String;
};
export const isNum = (arg: any) => {
  return arg && typeof arg === 'number';
};
export const isObject = (arg: any) => {
  return arg && typeof arg === 'object';
};
