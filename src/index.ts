// import {version} from '../package.json';
// export {version};

import {cubed} from './query/index';

export function square (x) {
  return x * x;
}

export function bob (x:number) {
  return cubed(square(x));
}
