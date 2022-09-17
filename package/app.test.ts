import crpyta from './app';

const secretKey = 'my-secret-key';
describe('crypta', () => {
  it('should return true', () => {
    expect(crpyta).toBeDefined();
  });
  it('should return encrypted string', () => {
    expect(crpyta.encrypt('hello', secretKey)).toBe('#helmpkiller');
  });
  it('should return decrypted string', () => {
    expect(crpyta.decrypt('#helmpkiller', secretKey)).toBe('hello');
  });
  it('should return true', () => {
    expect(crpyta.compare('hello', '#helmpkiller', secretKey)).toBe(true);
  });
  it('should return false', () => {
    expect(crpyta.compare('hello', 'iert', secretKey)).toBe(false);
  });
});
