import crpyta from './app';

const secretKey =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTI2LCJlbWFpbCI6InBzYWxtc2d1czk5QGdtYWlsLmNvbXFhd3NlIiwiZmlyc3ROYW1lIjoiRGF2aWQiLCJsYXN0TmFtZSI6Ikt1a3UiLCJtaWRkbGVOYW1lIjpudWxsLCJ1c2VyTmFtZSI6bnVsbCwiaXNWZXJpZmllZCI6ZmFsc2UsInBob25lTnVtYmVyIjoiKzM1NTgwOTY5NzA3MTEiLCJwcm9maWxlIjp7ImlkIjoxMzEsInVzZXJJZCI6MTI2LCJoZWFyZEFib3V0VXMiOiJGYWNlYm9vayIsImRhb0NvZGUiOm51bGwsInVwZGF0ZWRBdCI6IjIwMjItMTAtMDRUMTQ6MjI6MjUuNjc1WiIsImNyZWF0ZWRBdCI6IjIwMjItMTAtMDRUMTQ6MjI6MjUuNjc1WiIsInBob3RvIjpudWxsLCJyb2xlIjoidXNlciIsImlzRW50cmVwcmVuZXVyIjpmYWxzZSwiYnVzaW5lc3NJc1RocmVlWWVhcnNVcCI6ZmFsc2UsImlzU2VydmljZVByb3ZpZGVyIjpmYWxzZX0sImlhdCI6MTY2NDg5MzM1MCwiZXhwIjoxNjY1NDk4MTUwLCJpc3MiOiJUaGUgQnVzaW5lc3MgSHViIn0.D1dAATY8h4cLWon1kLk7jvNIqzv-yLSII7bTCeoE6F8CYhOuVG6VShkDGjoDePB2CUCJN5gBIzGC5pB_VlzR1vOno-EqnkFQVXwsCtVTCiTspRwJpfcRMN6WumgHQfG_3xw7t9G5ibBXlM5DgiQ9H1E2GX5mH6tHPY7bSfF2NLMO64vIAKMy1IpF5gFC_ByYqCWfaNfTQ6vhiKQ6LvOGMe-xTIiNFR_vez-Lfgb_Wz9-7ciGLxNoJ1IbS21zk4fRu3M0hisV0xDH5VJ3rDhBImLBRL4K7hE99UOyuMcadrvzJtlXG0E3Zpvfw2f00wSxkKlN3DgpVRRcLKGRovbTFuGJg77q_oi8GGGsbAA8t4XIExWiugIiZnCiWTcN0Hq_ZpxkYt-oj_F9glKdZbsqcCqjktlyT6Wqx_5vlGMUg4f15C_hsZ2bRPZWlqS3LlhgW0ZtoOBpNqGoe2xwPzYn2Trzr9qzzsQ_Wqk1_0lNRyzpOLWkqPlD7muA_3vXkpFzustCypJnuIPAtP2EbFweLOaH1rgthxSy0wqeIN-TY_84UlBhiAQ8Mn__JDEiC3XB0iLDC4_vYT7ebq871Cu_mH6CnPune2jPv15iADHbPmnAmw_yxUxRiYlDFP_mmfdNEuDaMa5BbPZNgv9h5iqvfcJnr3I1quKiZOkxUqfgs7Y';
describe('crypta', () => {
  it('should return true', () => {
    expect(crpyta).toBeDefined();
  });
  it('should return encrypted string', () => {
    expect(crpyta.encrypt('hello', secretKey)).toBe('#iemlokiller');
  });
  it('should return decrypted string', () => {
    expect(crpyta.decrypt('#iemlokiller', secretKey)).toBe('hello');
  });
  it('should return true', () => {
    expect(crpyta.compare('hello', '#iemlokiller', secretKey)).toBe(true);
  });
  it('should return false', () => {
    expect(crpyta.compare('hello', 'iert', secretKey)).toBe(false);
  });
});
