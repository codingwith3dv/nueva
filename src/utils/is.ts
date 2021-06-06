export const isArray = Array.isArray;
export const isString = (arg: any): arg is string => {
  return (arg && typeof arg === 'string') || arg instanceof String;
};
export const isNum = (arg: any): arg is number => {
  return arg && typeof arg === 'number';
};
export const isObject = (arg: any): arg is object => {
  return arg && typeof arg === 'object' || arg instanceof Object;
};
