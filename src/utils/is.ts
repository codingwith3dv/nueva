export const isArray = Array.isArray
export const isString = (arg: any) => {
  return typeof arg === "string";
}
export const isNum = (arg: any) => {
  return typeof arg === "number";
}
export const isInArrayBounds = (
  i: number,
  len: number
) => {
  return i >= 0 && i < len;
}