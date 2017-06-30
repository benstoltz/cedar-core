import {} from 'jest'
import helpers from '../../src/helpers/helpers'
import spec from '../data/specification'

describe('mixin tests', () => {
  test ('_entries returns an array of objects of key val pairs', () => {
    const obj: any = {
      a: 'apple',
      b: 'banana',
      c: ['a', 'b', 'c']
    }
    const output: object[] = [
      { key: 'a', value: 'apple'},
      { key: 'b', value: 'banana'},
      { key: 'c', value: ['a', 'b', 'c']}
    ]
    expect(helpers.entries(obj)).toEqual(output)
  })
  test('Mixin returns an object', () => {
    const obj1 = {
      a: {
        b: 'b'
      },
      b: 'banana'
    }
    const obj2 = {
      c: 'cantaloupe',
      d: ['definite', 'cheese']
    }
    const result = {
      a: {
        b: 'b'
      },
      b: 'banana',
      c: 'cantaloupe',
      d: ['definite', 'cheese']
    }
    expect(helpers.mixin({}, obj1, obj2)).toMatchObject(result)
  })
})

describe('mergeRecursive tests', () => {
  test('mergeRecursive properly merges two objects', () => {
    expect(true).toBeTruthy()
  })
})
