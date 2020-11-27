import deal from './deal.js';

let consoleLog = [];
let consoleLine = 0;

test('Class Deal: Testing the TDD Pipes', () => {
    
    consoleLog = [];
    consoleLine = 0;
    consoleLog[consoleLine++] = "Testing the TDD pipes";
    expect(consoleLog[0]).toBe("Testing the TDD pipes");
});

test('Class Deal: Testing Condition Values', () => {
    
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

test('Class Deal: Does class instantiation?', () => {

    const roundOne = new deal.Deal(1, 10, 5);

    expect(roundOne.roundNo).toBe(1);
    expect(roundOne.cardsDealt).toBe(10);
    expect(roundOne.getCardsDealt()).toBe(10);
    expect(roundOne.bidOH[0].getBid(0)).toBeNull();
    expect(roundOne.bidOH[0].getMade(0)).toBeNull();
    expect(roundOne.bidOH[0].getScore(0)).toBe(0);
});
//
// checkBid
// updateBid
// getBid
//
test('Class Deal: Method Bids', () => {

    const roundNo = 1;
    const noCards = 10;
    const noPlayers = 5;
    const roundOne = new deal.Deal(roundNo, noCards, noPlayers);

    const playerIdx = 0;

    expect(roundOne.checkBid(playerIdx, 0)).toBe(0);
    expect(roundOne.checkBid(playerIdx, 1)).toBe(0);
    expect(roundOne.checkBid(playerIdx, 10)).toBe(0);
    expect(roundOne.checkBid(playerIdx, 11)).toBe(1);
    expect(roundOne.checkBid(playerIdx, -1)).toBe(-1);
    expect(roundOne.checkBid(playerIdx, -11)).toBe(-1);

    expect(roundOne.updateBid(playerIdx, 11)).toBe(1);
    expect(roundOne.bidOH[playerIdx].getBid()).toBeNull();
    expect(roundOne.getBid(playerIdx)).toBeNull();
    expect(roundOne.updateBid(playerIdx, -1)).toBe(-1);
    expect(roundOne.bidOH[playerIdx].getBid()).toBeNull();
    expect(roundOne.getBid(playerIdx)).toBeNull();
    expect(roundOne.updateBid(playerIdx, -11)).toBe(-1);
    expect(roundOne.bidOH[playerIdx].getBid()).toBeNull();
    expect(roundOne.getBid(playerIdx)).toBeNull();
    expect(roundOne.updateBid(playerIdx, 0)).toBe(0);
    expect(roundOne.bidOH[playerIdx].getBid()).toBe(0);
    expect(roundOne.getBid(playerIdx)).toBe(0);
    expect(roundOne.updateBid(playerIdx, 1)).toBe(0);
    expect(roundOne.bidOH[playerIdx].getBid()).toBe(1);
    expect(roundOne.getBid(playerIdx)).toBe(1);
    expect(roundOne.updateBid(playerIdx, 10)).toBe(0);
    expect(roundOne.bidOH[playerIdx].getBid()).toBe(10);
    expect(roundOne.getBid(playerIdx)).toBe(10);
    
    expect(roundOne.getTotalBidAmt()).toBe(10);
    
    expect(roundOne.updateBid(0, 0)).toBe(0);
    expect(roundOne.getBid(0)).toBe(0);
    expect(roundOne.updateBid(1, 1)).toBe(0);
    expect(roundOne.getBid(1)).toBe(1);
    expect(roundOne.updateBid(2, 2)).toBe(0);
    expect(roundOne.getBid(2)).toBe(2);
    expect(roundOne.updateBid(3, 3)).toBe(0);
    expect(roundOne.getBid(3)).toBe(3);
    expect(roundOne.updateBid(4, 4)).toBe(0);
    expect(roundOne.getBid(4)).toBe(4);
    
    expect(roundOne.getTotalBidAmt()).toBe(10);
    
    expect(roundOne.updateBid(4, 3)).toBe(0);
    expect(roundOne.getBid(4)).toBe(3);
    
    expect(roundOne.getTotalBidAmt()).toBe(9);
});
//
// checkMade
// updateMade
// getMade
//
test('Class Deal: Method Mades', () => {

    const roundNo = 1;
    const noCards = 10;
    const noPlayers = 5;

    const roundOne = new deal.Deal(roundNo, noCards, noPlayers);

    const playerIdx = 1;

    expect(roundOne.checkMade(playerIdx, 0)).toBeNull(); // Bid is still null. Bid update must always precede updating Made.
    expect(roundOne.updateMade(playerIdx, -1)).toBeNull();
    expect(roundOne.getMade(playerIdx)).toBeNull();
    
    roundOne.updateBid(playerIdx, 0);

    expect(roundOne.checkMade(playerIdx, -1)).toBe(-1);
    expect(roundOne.checkMade(playerIdx, -11)).toBe(-1);
    expect(roundOne.checkMade(playerIdx, 0)).toBe(0);
    expect(roundOne.checkMade(playerIdx, 10)).toBe(0);
    expect(roundOne.checkMade(playerIdx, 11)).toBe(1);

    expect(roundOne.updateMade(playerIdx, -1)).toBe(-1);
    expect(roundOne.bidOH[playerIdx].getMade()).toBeNull();
    expect(roundOne.getMade(playerIdx)).toBeNull();
    expect(roundOne.updateMade(playerIdx, -11)).toBe(-1);
    expect(roundOne.bidOH[playerIdx].getMade()).toBeNull();
    expect(roundOne.getMade(playerIdx)).toBeNull();
    expect(roundOne.updateMade(playerIdx, 11)).toBe(1);
    expect(roundOne.bidOH[playerIdx].getMade()).toBeNull();
    expect(roundOne.updateMade(playerIdx, 0)).toBe(0);
    expect(roundOne.bidOH[playerIdx].getMade(playerIdx)).toBe(0);
    expect(roundOne.getMade(playerIdx)).toBe(0);
    expect(roundOne.updateMade(playerIdx, 1)).toBe(0);
    expect(roundOne.bidOH[playerIdx].getMade()).toBe(1);
    expect(roundOne.getMade(playerIdx)).toBe(1);
    expect(roundOne.updateMade(playerIdx, 10)).toBe(0);
    expect(roundOne.bidOH[playerIdx].getMade()).toBe(10);
    expect(roundOne.getMade(playerIdx)).toBe(10);
});
//
// Next:
// score
// getscore
//
test('Class Deal: Method Scoring', () => {

    const roundNo = 1;
    const noCards = 10;
    const noPlayers = 5;

    const roundOne = new deal.Deal(roundNo, noCards, noPlayers);

    const playerIdx = 4;

    expect(roundOne.score(playerIdx)).toBeNull(); // Score cannot be made before Bid and Made updates.
    expect(roundOne.getScore(playerIdx)).toBe(0);

    roundOne.updateBid(playerIdx, 0);
    expect(roundOne.getBid(playerIdx)).toBe(0);
    expect(roundOne.score(playerIdx)).toBeNull(); // Score cannot be made before Made updates.
    expect(roundOne.getScore(playerIdx)).toBe(0);

    roundOne.updateMade(playerIdx, 0);
    expect(roundOne.getMade(playerIdx)).toBe(0);
    expect(roundOne.score(playerIdx)).toBe(10);
    expect(roundOne.getScore(playerIdx)).toBe(10);

    roundOne.updateMade(playerIdx, 1);
    expect(roundOne.getMade(playerIdx)).toBe(1);
    expect(roundOne.score(playerIdx)).toBe(1);
    expect(roundOne.getScore(playerIdx)).toBe(1);

    roundOne.updateMade(playerIdx, 10);
    expect(roundOne.getMade(playerIdx)).toBe(10);
    expect(roundOne.score(playerIdx)).toBe(10);
    expect(roundOne.getScore(playerIdx)).toBe(10);
    
    roundOne.updateBid(playerIdx, 1);
    roundOne.updateMade(playerIdx, 0);
    expect(roundOne.score(playerIdx)).toBe(0);
    expect(roundOne.getScore(playerIdx)).toBe(0);

    roundOne.updateMade(playerIdx, 1);
    expect(roundOne.score(playerIdx)).toBe(11);
    expect(roundOne.getScore(playerIdx)).toBe(11);

    roundOne.updateMade(playerIdx, 2);
    expect(roundOne.score(playerIdx)).toBe(2);
    expect(roundOne.getScore(playerIdx)).toBe(2);

    roundOne.updateMade(playerIdx, 10);
    expect(roundOne.score(playerIdx)).toBe(10);
    expect(roundOne.getScore(playerIdx)).toBe(10);

    roundOne.updateBid(playerIdx, 5);
    roundOne.updateMade(playerIdx, 0);
    expect(roundOne.score(playerIdx)).toBe(0);
    expect(roundOne.getScore(playerIdx)).toBe(0);

    roundOne.updateMade(playerIdx, 1);
    expect(roundOne.score(playerIdx)).toBe(1);
    expect(roundOne.getScore(playerIdx)).toBe(1);

    roundOne.updateMade(playerIdx, 5);
    expect(roundOne.score(playerIdx)).toBe(55);
    expect(roundOne.getScore(playerIdx)).toBe(55);

    roundOne.updateMade(playerIdx, 10);
    expect(roundOne.score(playerIdx)).toBe(10);
    expect(roundOne.getScore(playerIdx)).toBe(10);
    
    roundOne.updateBid(playerIdx, 10);
    roundOne.updateMade(playerIdx, 0);
    expect(roundOne.score(playerIdx)).toBe(0);
    expect(roundOne.getScore(playerIdx)).toBe(0);

    roundOne.updateMade(playerIdx, 1);
    expect(roundOne.score(playerIdx)).toBe(1);
    expect(roundOne.getScore(playerIdx)).toBe(1);

    roundOne.updateMade(playerIdx, 5);
    expect(roundOne.score(playerIdx)).toBe(5);
    expect(roundOne.getScore(playerIdx)).toBe(5);

    roundOne.updateMade(playerIdx, 10);
    expect(roundOne.score(playerIdx)).toBe(110);
    expect(roundOne.getScore(playerIdx)).toBe(110);
});