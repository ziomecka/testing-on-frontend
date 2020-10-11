const assert = require('assert');

// Moduł nodejs, który udostępnia szereg funkcji asercji
// https://nodejs.org/api/assert.html

describe("Let's learn nodejs assert", () => {
  it('assert', () => {
    assert(2 + 2 === 4);
  });

  it('equal', () => {
    assert.equal(2 + 2, 4);
  });

  it('notEqual', () => {
    assert.notEqual(2 + 2, 5);
  });

  it('deepEqual', () => {
    const firstObj: Record<string, any> = { a: 100, b: { ab: 200 } };
    const secondObj: Record<string, any> = { a: 100, b: { ab: 200 } };

    assert.deepEqual(firstObj, secondObj);
  });

  it('notDeepEqual', () => {
    const firstObj: Record<string, any> = { a: 100, b: { ab: 200 } };
    const secondObj: Record<string, any> = { a: 100, b: { ab: 300 } };

    assert.notDeepEqual(firstObj, secondObj);
  });
});
