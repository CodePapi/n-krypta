import crpyta from './app';

const secretKey = 'my-secret-key';
describe('crypta', () => {
  it('should return true', () => {
    expect(crpyta).toBeDefined();
  });
  it('should return encrypted string', () => {
    expect(crpyta.encrypt('hello', secretKey)).toBe('#ifmmp#');
  });
  it('should return decrypted string', () => {
    expect(crpyta.decrypt('#ifmmp#', secretKey)).toBe('hello');
  });
  it('should return true', () => {
    expect(crpyta.compare('hello', secretKey, '#ifmmp#')).toBe(true);
  });
  it('should return false', () => {
    expect(crpyta.compare('hello', secretKey, 'iert')).toBe(false);
  });
});
