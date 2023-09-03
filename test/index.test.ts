import {beforeAll, describe, expect, test} from '@jest/globals';

import { greet } from "../src/index";

describe('Test Suite', () => {
  beforeAll(() => {
    console.log("beforeAll called");
  });

  test("test greet", ()=> {
    const expected = "Hello World!";
    const result = greet();
    expect(result).toBe(expected);
  });
});
  