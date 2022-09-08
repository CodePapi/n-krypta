import crayta from './app';

const secretKey = 'my-secret-key';
describe('crypta', () => {
  it('should return true', () => {
    expect(crayta).toBeDefined();
  });
  it('should return encrypted string', () => {
    expect(crayta.encrypt('hello', secretKey)).toBe('iertw');
  });
  it('should return decrypted string', () => {
    expect(crayta.decrypt('iertw', secretKey)).toBe('hello');
  });
});
