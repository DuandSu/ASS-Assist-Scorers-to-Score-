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
//
// checkBid
// updateBid
// getBid
//
test('Class Deal: Method Bids', () => {

    const roundNo = 1;
    const noCards = 10;
    const roundOne = new deal.Deal (roundNo, noCards);

    expect(roundOne.checkBid(0)).toBe(0);
    expect(roundOne.checkBid(1)).toBe(0);
    expect(roundOne.checkBid(10)).toBe(0);
    expect(roundOne.checkBid(11)).toBe(1);
    expect(roundOne.checkBid(-1)).toBe(-1);
    expect(roundOne.checkBid(-11)).toBe(-1);

    expect(roundOne.updateBid(11)).toBe(1);
    expect(roundOne.bid).toBeNull();
    expect(roundOne.getBid()).toBeNull();
    expect(roundOne.updateBid(-1)).toBe(-1);
    expect(roundOne.bid).toBeNull();
    expect(roundOne.getBid()).toBeNull();
    expect(roundOne.updateBid(-11)).toBe(-1);
    expect(roundOne.bid).toBeNull();
    expect(roundOne.getBid()).toBeNull();
    expect(roundOne.updateBid(0)).toBe(0);
    expect(roundOne.bid).toBe(0);
    expect(roundOne.getBid()).toBe(0);
    expect(roundOne.updateBid(1)).toBe(0);
    expect(roundOne.bid).toBe(1);
    expect(roundOne.getBid()).toBe(1);
    expect(roundOne.updateBid(10)).toBe(0);
    expect(roundOne.bid).toBe(10);
    expect(roundOne.getBid()).toBe(10);

});
//
// checkMade
// updateMade
// getMade
//
test('Class Deal: Method Mades', () => {

    const roundNo = 1;
    const noCards = 10;
    const roundOne = new deal.Deal (roundNo, noCards);

    expect(roundOne.checkMade(0)).toBeNull(); // Bid is still null. Bid update must always precede updating Made.
    expect(roundOne.updateMade(-1)).toBeNull();
    expect(roundOne.getMade()).toBeNull();
    
    roundOne.updateBid(0);

    expect(roundOne.checkMade(-1)).toBe(-1);
    expect(roundOne.checkMade(-11)).toBe(-1);
    expect(roundOne.checkMade(0)).toBe(0);
    expect(roundOne.checkMade(10)).toBe(0);
    expect(roundOne.checkMade(11)).toBe(1);

    expect(roundOne.updateMade(-1)).toBe(-1);
    expect(roundOne.made).toBeNull();
    expect(roundOne.getMade()).toBeNull();
    expect(roundOne.updateMade(-11)).toBe(-1);
    expect(roundOne.made).toBeNull();
    expect(roundOne.getMade()).toBeNull();
    expect(roundOne.updateMade(11)).toBe(1);
    expect(roundOne.made).toBeNull();
    expect(roundOne.updateMade(0)).toBe(0);
    expect(roundOne.made).toBe(0);
    expect(roundOne.getMade()).toBe(0);
    expect(roundOne.updateMade(1)).toBe(0);
    expect(roundOne.made).toBe(1);
    expect(roundOne.getMade()).toBe(1);
    expect(roundOne.updateMade(10)).toBe(0);
    expect(roundOne.made).toBe(10);
    expect(roundOne.getMade()).toBe(10);
});
//
// Next:
// score
// getscore
//
test('Class Deal: Method Scoring', () => {

    const roundNo = 1;
    const noCards = 10;
    const roundOne = new deal.Deal (roundNo, noCards);

    expect(roundOne.score()).toBeNull(); // Score cannot be made before Bid and Made updates.
    roundOne.updateBid(0);
    expect(roundOne.getBid()).toBe(0);

    expect(roundOne.score()).toBeNull(); // Score cannot be made before Made updates.
    roundOne.updateMade(0);
    expect(roundOne.getMade()).toBe(0);

    expect(roundOne.score()).toBe(10);

    roundOne.updateMade(1);
    expect(roundOne.getMade()).toBe(1);
    expect(roundOne.score()).toBe(1);

    roundOne.updateMade(10);
    expect(roundOne.getMade()).toBe(10);
    expect(roundOne.score()).toBe(10);
    
    roundOne.updateBid(1);
    roundOne.updateMade(0);
    expect(roundOne.score()).toBe(0);
    roundOne.updateMade(1);
    expect(roundOne.score()).toBe(11);
    roundOne.updateMade(2);
    expect(roundOne.score()).toBe(2);
    roundOne.updateMade(10);
    expect(roundOne.score()).toBe(10);

    roundOne.updateBid(5);
    roundOne.updateMade(0);
    expect(roundOne.score()).toBe(0);
    roundOne.updateMade(1);
    expect(roundOne.score()).toBe(1);
    roundOne.updateMade(5);
    expect(roundOne.score()).toBe(55);
    roundOne.updateMade(10);
    expect(roundOne.score()).toBe(10);
    
    roundOne.updateBid(10);
    roundOne.updateMade(0);
    expect(roundOne.score()).toBe(0);
    roundOne.updateMade(1);
    expect(roundOne.score()).toBe(1);
    roundOne.updateMade(5);
    expect(roundOne.score()).toBe(5);
    roundOne.updateMade(10);
    expect(roundOne.score()).toBe(110);
});