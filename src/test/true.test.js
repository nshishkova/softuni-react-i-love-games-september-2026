import { test, it, expect, assert, describe } from 'vitest';

describe('true tests', () => {
  test('true test', () => {
    expect(true).toBe(true);
  });

  it('should be true', () => {
    assert.equal(true, true);
  });
}); 
