export function hasValueChanged<T> (
  v1: T,
  v2: T
) {
  return v1 !== v2;
}