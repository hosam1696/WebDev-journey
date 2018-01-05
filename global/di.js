/*
    Dependency Injection 
    What and Why

*/
if (!window)
    const assert = require('assert');

function getAnimals(fetch, id=5) {
    return fetch('http://api.animalfarmgame.com/animals/' + id)
        .then(res => res.json())
        .then(data => data.results[0])
}
// now get Animal function depends on Fetch APi from window Object
/*getAnimals(window.fetch,123)
    .then(d => console.log(d))
    .catch(err => console.warn(err))
    */

describe('getAnimals', () => {
    it('works on the basic case', () => {
        if (!window) {
            const fakeFetch = url => {
                assert(url === 'http://api.animalfarmgame.com/animals/123');
                return new Promise(function () { });
            };
        }
       
            getAnimals(fakeFetch, 123)
    })
})