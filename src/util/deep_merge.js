// Merge two objects deeply, modifying the target object.
// This function recursively merges properties from the source object into the target object.
// If a property exists in both objects and is an object itself, it merges them recursively.
// If a property exists in both objects and is not an object, the source value overwrites the target value.
// If the source is null or undefined, it returns the target object unchanged.
// If the target is null or undefined, it returns the source object.
export function deepMerge(target, source) {
  if (source == null) {
    return target
  }
  if (target == null) {
    return source
  }

  for (const key in source) {
    const sourceValue = source[key]
    const targetValue = target[key]

    if (typeof sourceValue === 'object' && sourceValue !== null && !Array.isArray(sourceValue)) {
      target[key] = deepMerge(targetValue, sourceValue)
    } else {
      target[key] = sourceValue
    }
  }

  return target
}
