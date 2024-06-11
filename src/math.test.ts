import { expect, test } from 'vitest';
import { add } from './math';

test('add', () => {
  expect(add(1, 2)).to.equal(3);
});
