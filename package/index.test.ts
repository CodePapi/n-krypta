import { encrypt, decrypt, compare } from './index';

describe('crypta', () => {
  it('encrypt should be defined', () => {
    expect(encrypt).toBeDefined();
  });
  it('decrypt should be defined', () => {
    expect(decrypt).toBeDefined();
  });
  it('compare should be defined', () => {
    expect(compare).toBeDefined();
  });
});
