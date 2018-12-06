import Account from './account';
describe('accounts', () => {
  describe('Normal Customer', () => {
    it('should withdraw without money but with debit', () => {
      const account = new Account(-100, -100, false, false);
      expect(account.withdraw(100)).toEqual({ balance: -200, amount: 100 });
    });

    it('should withdraw without money/debit but with limit', () => {
      const account = new Account(-50, 0, false, false);
      expect(account.withdraw(50)).toEqual({ balance: -100, amount: 50 });
    });

    it('should not withdraw if does not have money/debit/limit', () => {
      const account = new Account(-100, 0, false, false);
      expect(account.withdraw(100)).toEqual({ balance: -100, amount: 0 });
    });

    it('should withdraw if has enough money', () => {
      const account = new Account(100, 0, false, false);
      expect(account.withdraw(50)).toEqual({ balance: 50, amount: 50 });
    });

    it('should withdraw the debit amount', () => {
      const account = new Account(100, -100, false, false);
      expect(account.withdraw(200)).toEqual({
        balance: -100, amount: 200
      });
    });

    it('should withdraw the debit + limit amount', () => {
      const account = new Account(100, -100, false, false);
      expect(account.withdraw(300)).toEqual({ balance: -200, amount: 300 });
    });

    it('should not withdraw if over debit+limit', () => {
      const account = new Account(100, -100, false, false);
      expect(account.withdraw(400)).toEqual({ balance: 100, amount: 0 });
    });
  });

  describe('VIP Customer', () => {
    describe('Without Money', () => {
      it('should withdraw without money but with debit', () => {
        const account = new Account(-100, -100, true, false);
        expect(account.withdraw(500)).toEqual({ balance: -600, amount: 500 });
      });

      it('should withdraw without money/debit but with limit', () => {
        const account = new Account(-100, 0, true, false);
        expect(account.withdraw(900)).toEqual({ balance: -1000, amount: 900 });
      });

      it('should not withdraw if does not have money/debit/limit', () => {
        const account = new Account(-100, 0, true, false);
        expect(account.withdraw(1000)).toEqual({ balance: -100, amount: 0 });
      });
    });

    describe('With Money', () => {
      it('should withdraw if has enough money', () => {
        const account = new Account(100, 0, true, false);
        expect(account.withdraw(1500)).toEqual({ balance: -1400, amount: 1500 });
      });

      it('should withdraw the debit amount', () => {
        const account = new Account(100, -100, true, false);
        expect(account.withdraw(200)).toEqual({
          balance: -100, amount: 200
        });
      });

      it('should withdraw the debit + limit amount', () => {
        const account = new Account(100, -100, true, false);
        expect(account.withdraw(2200)).toEqual({ balance: -2100, amount: 2200 });
      });

      it('should not withdraw if over debit+limit', () => {
        const account = new Account(100, -100, true, false);
        expect(account.withdraw(2300)).toEqual({ balance: 100, amount: 0 });
      });
    });
  });

  describe('Company Customer', () => {
    describe('Normal', () => {
      it('should withdraw below company bonus', () => {
        const account = new Account(100, 0, false, true);
        expect(account.withdraw(2100)).toEqual({ balance: -2000, amount: 2100 });
      });
      it('should withdraw the company bonus', () => {
        const account = new Account(100, 0, false, true);
        expect(account.withdraw(2200)).toEqual({ balance: -2100, amount: 2200 });
      });
      it('should not withdraw amount over the company bonus', () => {
        const account = new Account(100, 0, false, true);
        expect(account.withdraw(2300)).toEqual({ balance: 100, amount: 0 });
      });
    });

    describe('VIP', () => {
      describe('With Money', () => {
        it('should withdraw below company bonus', () => {
          const account = new Account(100, 0, true, true);
          expect(account.withdraw(3500)).toEqual({ balance: -3400, amount: 3500 });
        });
        it('should withdraw the company bonus', () => {
          const account = new Account(100, 0, true, true);
          expect(account.withdraw(4100)).toEqual({ balance: -4000, amount: 4100 });
        });
        it('should not withdraw amount over the company bonus', () => {
          const account = new Account(100, 0, true, true);
          expect(account.withdraw(5000)).toEqual({ balance: 100, amount: 0 });
        });
      });

      describe('Without Money', () => {
        it('should withdraw below company bonus', () => {
          const account = new Account(-100, 0, true, true);
          expect(account.withdraw(2500)).toEqual({ balance: -2600, amount: 2500 });
        });
        it('should withdraw the company bonus', () => {
          const account = new Account(-100, 0, true, true);
          expect(account.withdraw(2900)).toEqual({ balance: -3000, amount: 2900 });
        });

        it('should not withdraw amount over the company bonus', () => {
          const account = new Account(-100, 0, true, true);
          expect(account.withdraw(5000)).toEqual({ balance: -100, amount: 0 });
        });
      });
    });
  });
});
