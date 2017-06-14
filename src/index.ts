// import {version} from '../package.json';
// export {version};

import {cubed} from './query/index';

export function square (x) {
  console.log('bob');
  return x * x;
}

export function bob (x:number) {
  return cubed(square(x));
}

export function testFetch (): Promise<any> {
  return fetch('http://servicesdev.arcgis.com/LjjARY1mkhxulWPq/arcgis/rest/services/cacounties_bentest/FeatureServer?f=json')
    .then( resp => console.log(resp));
}
