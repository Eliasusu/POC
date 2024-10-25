import { assert, expect } from "chai";

/// Para probar tests dinamicos

function sumToN(n: number) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

describe("dynamic()", function () {
  function add(args: number[]) {
    return args.reduce((prev, curr) => prev + curr, 0);
  }

  let startTime: number;

  before(function () {
    startTime = Date.now();
  });

  after(function () {
    const endTime = Date.now();
    const duration = endTime - startTime;
    console.log(`Test suite took ${duration}ms to run.`);
  });

  let tests = [];

  for (let i = 0; i < 7000; i++) {
    let newElement: { args: number[]; expected: number } = {
      args: [],
      expected: sumToN(i + 1),
    };

    for (let j = 0; j < i + 1; j++) {
      newElement.args.push(j + 1);
    }

    tests.push(newElement);
  }

  tests.forEach(({ args, expected }) => {
    it(`correctly adds ${args.length} args`, function () {
      const res = add(args);
      assert.strictEqual(res, expected);
    });
  });
});

// async

function delayedAdd(a: number, b: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

describe("delayedAdd()", function () {
  it("should add 1 and 2", async function () {
    const result = await delayedAdd(1, 2);
    assert.strictEqual(result, 3);
  });

  it("should add 5 and 5", async function () {
    const result = await delayedAdd(5, 5);
    assert.strictEqual(result, 10);
  });

  it("should add 10 and 20", async function () {
    const result = await delayedAdd(10, 20);
    assert.strictEqual(result, 30);
  });

  it("should add 0 and 0", async function () {
    const result = await delayedAdd(0, 0);
    assert.strictEqual(result, 0);
  });
});
