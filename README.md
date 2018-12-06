# jest-unit-tests-umcs


## Prerequisites

1. Install NodeJS - https://nodejs.org/en/download/
2. Clone the repository
3. Run `npm install`

## How to run tests?

Install jest globally:
```
npm i -g jest
```

Run tests:
```
jest --coverage
```


## Example report:

```
> unit-tests@1.0.0 test /Users/michal/git/umcs/wtwo/unit-tests
> jest

 PASS  ./account.test.js
  accounts
    Normal Customer
      ✓ should withdraw without money but with debit (5ms)
      ✓ should withdraw without money/debit but with limit (1ms)
      ✓ should not withdraw if does not have money/debit/limit (1ms)
      ✓ should withdraw if has enough money
      ✓ should withdraw the debit amount (1ms)
      ✓ should withdraw the debit + limit amount
      ✓ should not withdraw if over debit+limit (1ms)
    VIP Customer
      Without Money
        ✓ should withdraw without money but with debit (1ms)
        ✓ should withdraw without money/debit but with limit
        ✓ should not withdraw if does not have money/debit/limit
      With Money
        ✓ should withdraw if has enough money (1ms)
        ✓ should withdraw the debit amount
        ✓ should withdraw the debit + limit amount
        ✓ should not withdraw if over debit+limit (1ms)
    Company Customer
      Normal
        ✓ should withdraw below company bonus
        ✓ should withdraw the company bonus
        ✓ should not withdraw amount over the company bonus (1ms)
      VIP
        With Money
          ✓ should withdraw below company bonus
          ✓ should withdraw the company bonus
          ✓ should not withdraw amount over the company bonus (1ms)
        Without Money
          ✓ should withdraw below company bonus
          ✓ should withdraw the company bonus
          ✓ should not withdraw amount over the company bonus (1ms)

Test Suites: 1 passed, 1 total
Tests:       23 passed, 23 total
Snapshots:   0 total
Time:        2.278s
Ran all test suites.
```
