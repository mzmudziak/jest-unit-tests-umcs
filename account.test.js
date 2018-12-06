import Account from './account';
describe('accounts', () => {
  it('should create an account', () => {
    const account = new Account(0, 100, false, false);
    expect(account.withdraw(500)).toEqual({ balance: 0, amount: 0 });
  });
});
