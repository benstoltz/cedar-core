import test from 'ava';
import {square} from '../src/index';

test('blargh', t => {
  t.is(square(2), 4);
  console.log(square(2));
})
