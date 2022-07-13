const { expect } = require("expect");   

test('Testing an object', () => {
    const data = {
        name: 'hello',
        phone: '9999999999'
    }
    expect(data).toEqual({name: 'hello', phone: '9999999999'});
})

test('null', () => {
    const n = undefined;
    // expect(n).toBeNull();
    // expect(n).toBeDefined();
    expect(n).toBeUndefined();
    // expect(n).toBeTruthy();
    expect(n).toBeFalsy();
})

test('aaaaab has aab', () => {
    expect('aaaaab').toMatch(/aaab/);
})

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];

test('arrays and iterables', () => {
    expect(shoppingList).toContain('milk')
    expect(shoppingList).not.toContain('paper');
})


function throwError() {
    throw new Error('Failed in processing request');
}

test('exceptions', () => {
    expect(() => throwError()).toThrow(Error);
})


const asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a < 0 || b < 0) {
                reject('numbers must be positive');
            }
            resolve(a + b);
        }, 2000)
    }) 
}

test('asynchronous function', (done) => {
    setTimeout(() => {
        expect(1).toBe(1)
        done();
    }, 2000);
})

test('promised based with return', () => {
    return asyncAdd(4, 5).then(sum => {
        expect(sum).toBe(9);
    });
})

test('promise based with async/await', async () => {
    const sum = await asyncAdd(4, 5);
    expect(sum).toBe(9);
});

test('promise based with done', (done) => {
    asyncAdd(4, 5).then(sum => {
        expect(sum).toBe(9);
        done();
    })
})