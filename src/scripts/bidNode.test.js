import bidNode from './bidNode.js';

let consoleLog = [];
let consoleLine = 0;

test('Class BidNode: Testing the TDD Pipes', () => {
    
    consoleLog = [];
    consoleLine = 0;
    consoleLog[consoleLine++] = "Testing the TDD pipes";
    expect(consoleLog[0]).toBe("Testing the TDD pipes");
});

test('Class BidNode: Testing Condition Values', () => {
    
    const constNull = null;
    const NumberOne = 1;
    const NumberZero = 0;
    const NumberMinusOne = -1;
    const LetterOne = "1";
    const LetterZero = "0";
    const LetterMinusOne = "1";
    const LetterA = "A";
    const Lettera = "a";
    const LetterSpace = " ";
    const LetterNil = "";

    expect(constNull).toBeFalsy();
    expect(NumberOne).toBeTruthy();
    expect(NumberZero).toBeFalsy();
    expect(NumberMinusOne).toBeTruthy();
    expect(LetterOne).toBeTruthy();
    expect(LetterZero).toBeTruthy();
    expect(LetterMinusOne).toBeTruthy();
    expect(LetterA).toBeTruthy();
    expect(Lettera).toBeTruthy();
    expect(LetterSpace).toBeTruthy();
    expect(LetterNil).toBeFalsy();
});

test('Class BidNode: Does class instantiation?', () => {

    const bidOH = new bidNode.BidNode ();
    
    expect(bidOH.bid).toBeNull();
    expect(bidOH.made).toBeNull();
    expect(bidOH.points).toBe(0);
});
//
// checkBid
// updateBid
// getBid
//
test('Class BidNode: Method Bids', () => {
    
    const noCards = 10;
    const bidOH = new bidNode.BidNode ();

    expect(bidOH.checkBid(0, noCards)).toBe(0);
    expect(bidOH.checkBid(1, noCards)).toBe(0);
    expect(bidOH.checkBid(10, noCards)).toBe(0);
    expect(bidOH.checkBid(11, noCards)).toBe(-2);
    expect(bidOH.checkBid(-1, noCards)).toBe(-1);
    expect(bidOH.checkBid(-11, noCards)).toBe(-1);

    expect(bidOH.updateBid(11, noCards)).toBe(-2);
    expect(bidOH.bid).toBeNull();
    expect(bidOH.getBid()).toBeNull();
    expect(bidOH.updateBid(-1, noCards)).toBe(-1);
    expect(bidOH.bid).toBeNull();
    expect(bidOH.getBid()).toBeNull();
    expect(bidOH.updateBid(-11, noCards)).toBe(-1);
    expect(bidOH.bid).toBeNull();
    expect(bidOH.getBid()).toBeNull();
    expect(bidOH.updateBid(0, noCards)).toBe(0);
    expect(bidOH.bid).toBe(0);
    expect(bidOH.getBid()).toBe(0);
    expect(bidOH.updateBid(1, noCards)).toBe(0);
    expect(bidOH.bid).toBe(1);
    expect(bidOH.getBid()).toBe(1);
    expect(bidOH.updateBid(10, noCards)).toBe(0);
    expect(bidOH.bid).toBe(10);
    expect(bidOH.getBid()).toBe(10);
});
//
// checkMade
// updateMade
// getMade
//
test('Class bidNode: Method Mades', () => {

    const noCards = 10;
    const bidOH = new bidNode.BidNode ();

    expect(bidOH.checkMade(0, noCards)).toBeNull(); // Bid is still null. Bid update must always precede updating Made.
    expect(bidOH.updateMade(-1, noCards)).toBeNull();
    expect(bidOH.getMade()).toBeNull();
    
    bidOH.updateBid(0, noCards);

    expect(bidOH.checkMade(-1, noCards)).toBe(-1);
    expect(bidOH.checkMade(-11, noCards)).toBe(-1);
    expect(bidOH.checkMade(0, noCards)).toBe(0);
    expect(bidOH.checkMade(10, noCards)).toBe(0);
    expect(bidOH.checkMade(11, noCards)).toBe(1);

    expect(bidOH.updateMade(-1, noCards)).toBe(-1);
    expect(bidOH.made).toBeNull();
    expect(bidOH.getMade()).toBeNull();
    expect(bidOH.updateMade(-11, noCards)).toBe(-1);
    expect(bidOH.made).toBeNull();
    expect(bidOH.getMade()).toBeNull();
    expect(bidOH.updateMade(11, noCards)).toBe(1);
    expect(bidOH.made).toBeNull();
    expect(bidOH.updateMade(0, noCards)).toBe(0);
    expect(bidOH.made).toBe(0);
    expect(bidOH.getMade()).toBe(0);
    expect(bidOH.updateMade(1, noCards)).toBe(0);
    expect(bidOH.made).toBe(1);
    expect(bidOH.getMade()).toBe(1);
    expect(bidOH.updateMade(10, noCards)).toBe(0);
    expect(bidOH.made).toBe(10);
    expect(bidOH.getMade()).toBe(10);
});
//
// Next:
// score
// getscore
//
test('Class Deal: Method Scoring', () => {

    const noCards = 10;
    const bidOH = new bidNode.BidNode ();

    expect(bidOH.score()).toBeNull(); // Score cannot be made before Bid and Made updates.
    expect(bidOH.getScore()).toBe(0);

    bidOH.updateBid(0, noCards);
    expect(bidOH.getBid()).toBe(0);
    expect(bidOH.score()).toBeNull(); // Score cannot be made before Made updates.
    expect(bidOH.getScore()).toBe(0);

    bidOH.updateMade(0, noCards);
    expect(bidOH.getMade()).toBe(0);
    expect(bidOH.score()).toBe(10);
    expect(bidOH.getScore()).toBe(10);

    bidOH.updateMade(1, noCards);
    expect(bidOH.getMade()).toBe(1);
    expect(bidOH.score()).toBe(1);
    expect(bidOH.getScore()).toBe(1);

    bidOH.updateMade(10, noCards);
    expect(bidOH.getMade()).toBe(10);
    expect(bidOH.score()).toBe(10);
    expect(bidOH.getScore()).toBe(10);
    
    bidOH.updateBid(1, noCards);
    bidOH.updateMade(0, noCards);
    expect(bidOH.score()).toBe(0);
    expect(bidOH.getScore()).toBe(0);

    bidOH.updateMade(1, noCards);
    expect(bidOH.score()).toBe(11);
    expect(bidOH.getScore()).toBe(11);

    bidOH.updateMade(2, noCards);
    expect(bidOH.score()).toBe(2);
    expect(bidOH.getScore()).toBe(2);

    bidOH.updateMade(10, noCards);
    expect(bidOH.score()).toBe(10);
    expect(bidOH.getScore()).toBe(10);

    bidOH.updateBid(5, noCards);
    bidOH.updateMade(0, noCards);
    expect(bidOH.score()).toBe(0);
    expect(bidOH.getScore()).toBe(0);

    bidOH.updateMade(1, noCards);
    expect(bidOH.score()).toBe(1);
    expect(bidOH.getScore()).toBe(1);

    bidOH.updateMade(5, noCards);
    expect(bidOH.score()).toBe(55);
    expect(bidOH.getScore()).toBe(55);

    bidOH.updateMade(10, noCards);
    expect(bidOH.score()).toBe(10);
    expect(bidOH.getScore()).toBe(10);
    
    bidOH.updateBid(10, noCards);
    bidOH.updateMade(0, noCards);
    expect(bidOH.score()).toBe(0);
    expect(bidOH.getScore()).toBe(0);

    bidOH.updateMade(1, noCards);
    expect(bidOH.score()).toBe(1);
    expect(bidOH.getScore()).toBe(1);

    bidOH.updateMade(5, noCards);
    expect(bidOH.score()).toBe(5);
    expect(bidOH.getScore()).toBe(5);

    bidOH.updateMade(10, noCards);
    expect(bidOH.score()).toBe(110);
    expect(bidOH.getScore()).toBe(110);
});