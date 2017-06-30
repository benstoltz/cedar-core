/**
 * Merges n objects
 * @param  {object} source Empty object that other objects will be merged into
 * @return {object}        Merged objects
 */
export function mixin( source: any, ...args ) {
  const arrOfObjs = [...args]
  for (const i in arrOfObjs) {
    if (i) {
      entries(arrOfObjs[i]).forEach((p) => {
        source[p.key] = p.value
      })
    }
  }
  return source
}

/**
 * Iterates over an object and produces an array of key/val pairs
 * @param  {object} obj Object to iterate over
 * @return {array}     Array of key, val pairs.
 */
function entries(obj: object) {
  const entries = []
  for (const key in obj) {
    if (key) {
      entries.push({ key, value: obj[key] })
    }
  }
  return entries
}

export function mergeRecursive(obj1: any, obj2: any) {
  for (const p in obj2) {
    if (obj2.hasOwnProperty(p)) {
      try {
        // Property in destination object set; update its value
        obj1[p] = obj2[p].constructor === Object || obj2[p].constructor === Array
          ? obj1[p] = mergeRecursive(obj1[p], obj2[p])
          : obj1[p] = obj2[p]
      } catch (e) {
        // Property in destination object not set; create it and set its value
        obj1[p] = obj2[p]
      }
    }
  }
  return obj1
}

const helpers = {
  entries,
  mixin,
  mergeRecursive
}

export default helpers
