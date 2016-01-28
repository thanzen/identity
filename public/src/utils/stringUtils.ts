//get array of property name from given object
export var stringEndsWith = (source: string, suffix: string): boolean => {
  return source.indexOf(suffix, source.length - suffix.length) !== -1;
}
