export const checkType = (value) => {
  if (Array.isArray(value)) {
    return 'Array';
  } else {
    // if (value !== null && typeof value === 'object') { 
    return 'Object';
  // } else {
  //   return typeof value;
  }
}