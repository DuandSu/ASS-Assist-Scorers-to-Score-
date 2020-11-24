import deal from './deal.js';

let consoleLog = [];
let consoleLine = 0;

test('130d: Testing the TDD Pipes', () => {
    
    consoleLog = [];
    consoleLine = 0;
    consoleLog[consoleLine++] = "Testing the TDD pipes";
    expect(consoleLog[0]).toBe("Testing the TDD pipes");
    
});

test('Class Deal: Does class instantiation?', () => {

    const roundOne = new deal.Deal (1, 10);

    expect(roundOne.roundNo).toBe(1);
    expect(roundOne.cardsDealt).toBe(10);
    expect(roundOne.bid).toBeNull();
    expect(roundOne.made).toBeNull();
    expect(roundOne.points).toBe(0);
});

// Next:
// 1. checkBid
// 2. updateBid
// 2. getBid
// 3. checkMade
// 3. getMade
// 4. updateMade
// 5. score
// 6. getscore

test('Class Deal: Does class instantiation?', () => {

    const roundOne = new deal.Deal (1, 10);

    expect(roundOne.roundNo).toBe(1);
    expect(roundOne.cardsDealt).toBe(10);
    expect(roundOne.bid).toBeNull();
    expect(roundOne.made).toBeNull();
    expect(roundOne.points).toBe(0);
});