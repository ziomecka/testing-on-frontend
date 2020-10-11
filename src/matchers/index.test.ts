describe("Let's learn different matchers", () => {
  it('toBe', () => {
    expect(2 + 2).toBe(4);
  });

  it('toEqual', () => {
    const object = { a: 'a' };

    expect(object).toEqual({ a: 'a' });
  });

  it('to be less than', () => {
    expect(2).toBeLessThan(3);
  });

  it('to be less than or equal', () => {
    expect(2).toBeLessThanOrEqual(2);
  });

  it('to be greater than', () => {
    expect(4).toBeGreaterThan(3);
  });

  it('to be greater than or equal', () => {
    expect(4).toBeGreaterThanOrEqual(4);
  });

  it('to be any', () => {
    expect(2).toEqual(expect.any(Number));
    expect((): void => null).toEqual(expect.any(Function));
  });

  it('to be instanceof', () => {
    function SomeClass(): void {
      return null;
    }

    const someClass = new SomeClass();

    expect(someClass).toBeInstanceOf(SomeClass);
    expect(someClass).toEqual(expect.any(SomeClass));
  });

  it('to be truthy', () => {
    expect(1).toBeDefined();
    expect(1).toBeTruthy();
  });

  it('to be falsy', () => {
    expect(null).toBeNull();
    expect(null).toBeFalsy();
    expect(null).not.toBeTruthy();
  });

  it('to be NaN', () => {
    // @ts-ignore
    expect(2 / 'a').toBeNaN();
  });

  it('to have length', () => {
    expect([1, 2, 3]).toHaveLength(3);
  });

  it('to contain', () => {
    expect([1, 2, 3]).toContain(1);
    expect([1, [2, 3], 4]).toContainEqual([2, 3]);
  });

  it('to equal object containing', () => {
    const testedObj: Record<string, any> = { a: 100, b: 200, c: 300 };

    const expectedObj: Record<string, number> = {
      a: 100,
      b: 200,
    };

    expect(testedObj).toEqual(expect.objectContaining(expectedObj));
  });

  it('to equal object containing instancesof', () => {
    const testedObj: Record<string, any> = {
      a: 100,
      b: 200,
      d: (): void => null,
    };

    const expectedObj: Record<string, number> = {
      a: expect.any(Number),
      d: expect.any(Function),
    };

    expect(testedObj).toEqual(expect.objectContaining(expectedObj));
  });
});
