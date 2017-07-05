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
    expect(helpers.mixin({}, obj1, obj2)).toEqual(result)
    expect(obj1).toEqual({
      a: {
        b: 'b'
      },
      b: 'banana'
    })
  })

  test('Mixin deep clones single object', () => {
    const obj = {
      a: {
        b: 'b'
      },
      b: 'banana',
      c: 'cantaloupe',
      d: ['definite', 'cheese']
    }
    const result = helpers.mixin({}, obj)

    expect(result).toEqual({
      a: {
        b: 'b'
      },
      b: 'banana',
      c: 'cantaloupe',
      d: ['definite', 'cheese']
    })

    // Expect that deep objects do not mutate origin
    result.a.b = 'cantaloupe'
    expect(obj).toEqual({
      a: {
        b: 'b'
      },
      b: 'banana',
      c: 'cantaloupe',
      d: ['definite', 'cheese']
    })

    // Expect that deep object mutation does not mutate result
    obj.a.b = 'banana'
    expect(result).toEqual({
      a: {
        b: 'cantaloupe'
      },
      b: 'banana',
      c: 'cantaloupe',
      d: ['definite', 'cheese']
    })

    // Check if array mutations occur
    result.d.push(4)
    expect(obj).toEqual({
      a: {
        b: 'banana'
      },
      b: 'banana',
      c: 'cantaloupe',
      d: ['definite', 'cheese']
    })
  })

  test('Mixin does not mutate origin objects', () => {
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
    const final = helpers.mixin({}, obj1, obj2)
    expect(final).toEqual(result)

    obj1.b = 'Cantaloupe'
    expect(final.b).not.toBe('Cantaloupe')
    final.c = 'Harry has a unicorn'
    expect(obj2.c).toBe('cantaloupe')

    obj1.a.b = 'banana'
    expect(final.a.b).toBe('b')
  })
})
