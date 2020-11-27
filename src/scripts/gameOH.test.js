import gameOH from './gameOH.js';

let consoleLog = [];
let consoleLine = 0;

test('gameOH: Testing the TDD Pipes', () => {
    
    consoleLog = [];
    consoleLine = 0;
    consoleLog[consoleLine++] = "Testing the TDD pipes";
    expect(consoleLog[0]).toBe("Testing the TDD pipes");
    
});

test('gameOH: Testing Multi-Dimensional Arrays', () => {
    
    let oneDimension = [];
    for (let i = 0; i < 5; i++) {
        oneDimension[i] = i;
    }
    expect(oneDimension).toEqual([0, 1, 2, 3, 4]);
    // console.table(oneDimension);
    
    let twoDimension = [[1, 2], [3, 4]];
    // console.table(twoDimension);
    expect(twoDimension[0][0]).toBe(1);
    expect(twoDimension[0][1]).toBe(2);
    expect(twoDimension[1][0]).toBe(3);
    expect(twoDimension[1][1]).toBe(4);
    
    twoDimension.push([5, 6]);
    // console.table(twoDimension);
    expect(twoDimension[2][0]).toBe(5);
    expect(twoDimension[2][1]).toBe(6);
    
    twoDimension[0].push(-2);
    twoDimension[1].push(-4);
    twoDimension[2].push(-6);
    // console.table(twoDimension);
    
    // twoDimension = [];
    twoDimension.length = 0;
    // console.table(twoDimension);
    
    for (let i = 0; i < 4; i++) {
        twoDimension.push([]);
        // console.table(twoDimension);
        for (let j = 0; j < 5; j++) {
            // twoDimension[i].push(j);
            twoDimension[i].push(j);
        }
    }
    // console.table(twoDimension);
    expect(twoDimension[0][0]).toBe(0);
    expect(twoDimension[0][1]).toBe(1);
    expect(twoDimension[3][4]).toBe(4);
    expect(twoDimension[2]).toEqual([0, 1, 2, 3, 4]);
    //
    // Just capturing refactored code creating multi-dimension array with class element.
    //
    // for (let i = 0; i < noPlayers; i++) {
    //     this.deals.push([]);
    //     for (let j = 0; j < noPlayerCards; j++) {
    //         this.deals[i].push(
    //             new deal.Deal(
    //                 j + 1, // Round #
    //                 startAtOne ? j + 1 : noPlayerCards - j // # of Cards
    //             )
    //         );
    //     }
    //     upAdjust = 0;
    //     if (repeatUp) {
    //         upAdjust = 1;
    //         this.deals[i].push(
    //             new deal.Deal(
    //                 this.deals[i].length + 1, // Round #
    //                 startAtOne 
    //                     ? noPlayerCards + (noPlayerCards - this.deals[i].length)
    //                     : this.deals[i].length + 1 - noPlayerCards // # of Cards
    //             )
    //         );
    //     }
    //     if (continueUp) {
    //         for (let j = noPlayerCards; j < noPlayerCards * 2 - 1; j++) {
    //             this.deals[i].push(
    //                 new deal.Deal(
    //                     j + 1 + upAdjust, // Round #
    //                     startAtOne ? noPlayerCards + (noPlayerCards - j) - 1 : j + 2 - noPlayerCards // # of Cards
    //                 )
    //             );
    //         }                
    //     }
    // }
});

test('Class gameOH: Test Deal Pattern H2L instantiation?', () => {

    const gameNo = 101;
    const gameComm = "Test Game for 10..1";
    const screwTD = false;
    const noPlayers = 5;
    const noPlayerCards = 10;
    const dealPattern = "H2L";
    const listOfPlayers = ["Duane", "Suzanne", "Sasha", "Christopher", "Joseph"];

    const game10To1 = new gameOH.GameOH (
        gameNo, gameComm, screwTD, noPlayers, 
        noPlayerCards, dealPattern, listOfPlayers
    );

    console.table(game10To1.deals);

    expect(game10To1.gameNo).toBe(101);
    expect(game10To1.gameComm).toBe("Test Game for 10..1");
    expect(game10To1.screwTD).toBe(false);
    expect(game10To1.noPlayers).toBe(5);
    expect(game10To1.noPlayerCards).toBe(10);
    expect(game10To1.dealPattern).toBe("H2L");
    expect(game10To1.listOfPlayers).toEqual(["Duane", "Suzanne", "Sasha", "Christopher", "Joseph"]);

    // console.log(game10To1);
    let roundIdx = 0; // Round 1 - 1
    let playerIdx = 0; // Player 1 - 1
    expect(game10To1.deals[roundIdx].roundNo).toBe(1);
    expect(game10To1.deals[roundIdx].cardsDealt).toBe(10);
    expect(game10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);

    roundIdx = 9; // Player 10 - 1
    expect(game10To1.deals[roundIdx].roundNo).toBe(10);
    expect(game10To1.deals[roundIdx].cardsDealt).toBe(1);
    expect(game10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);

    roundIdx = 0; // Round 1 - 1
    playerIdx = 4; // Player 5 - 1
    expect(game10To1.deals[roundIdx].roundNo).toBe(1);
    expect(game10To1.deals[roundIdx].cardsDealt).toBe(10);
    expect(game10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);

    roundIdx = 9; // Round 10 - 1
    expect(game10To1.deals[roundIdx].roundNo).toBe(10);
    expect(game10To1.deals[roundIdx].cardsDealt).toBe(1);
    expect(game10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);
});

test('Class gameOH: Test Deal Pattern L2H instantiation?', () => {

    const gameNo = 102;
    const gameComm = "Test Game for 1..9";
    const screwTD = false;
    const noPlayers = 5;
    const noPlayerCards = 9;
    const dealPattern = "L2H";
    const listOfPlayers = ["Duane", "Suzanne", "Sasha", "Christopher", "Joseph"];

    const game1To9 = new gameOH.GameOH (
        gameNo, gameComm, screwTD, noPlayers, 
        noPlayerCards, dealPattern, listOfPlayers
    );

    expect(game1To9.gameNo).toBe(102);
    expect(game1To9.gameComm).toBe("Test Game for 1..9");
    expect(game1To9.screwTD).toBe(false);
    expect(game1To9.noPlayers).toBe(5);
    expect(game1To9.noPlayerCards).toBe(9);
    expect(game1To9.dealPattern).toBe("L2H");
    expect(game1To9.listOfPlayers).toEqual(["Duane", "Suzanne", "Sasha", "Christopher", "Joseph"]);

    // console.log(game1To9);
    let roundIdx = 0; // Round 1 - 1
    let playerIdx = 0; // Player 1 - 1
    expect(game1To9.deals[roundIdx].roundNo).toBe(1);
    expect(game1To9.deals[roundIdx].cardsDealt).toBe(1);
    expect(game1To9.deals[roundIdx].getScore(playerIdx)).toBe(0);

    roundIdx = 8; // Round 9 - 1
    expect(game1To9.deals[roundIdx].roundNo).toBe(9);
    expect(game1To9.deals[roundIdx].cardsDealt).toBe(9);
    expect(game1To9.deals[roundIdx].getScore(playerIdx)).toBe(0);

    roundIdx = 0; // Round 1 - 1
    playerIdx = 4; // Player 5 - 1
    expect(game1To9.deals[roundIdx].roundNo).toBe(1);
    expect(game1To9.deals[roundIdx].cardsDealt).toBe(1);
    expect(game1To9.deals[roundIdx].getScore(playerIdx)).toBe(0);
    roundIdx = 8; // Round 9 - 1
    expect(game1To9.deals[8].roundNo).toBe(9);
    expect(game1To9.deals[8].cardsDealt).toBe(9);
    expect(game1To9.deals[8].getScore(playerIdx)).toBe(0);
});

test('Class gameOH: Test Deal Pattern H2L2H instantiation?', () => {

    const gameNo = 103;
    const gameComm = "Test Game for 10..1..10";
    const screwTD = false;
    const noPlayers = 5;
    const noPlayerCards = 10;
    const dealPattern = "H2L2H";
    const listOfPlayers = ["Duane", "Suzanne", "Sasha", "Christopher", "Joseph"];

    const game10To1To10 = new gameOH.GameOH (
        gameNo, gameComm, screwTD, noPlayers, 
        noPlayerCards, dealPattern, listOfPlayers
    );

    expect(game10To1To10.gameNo).toBe(103);
    expect(game10To1To10.gameComm).toBe("Test Game for 10..1..10");
    expect(game10To1To10.screwTD).toBe(false);
    expect(game10To1To10.noPlayers).toBe(5);
    expect(game10To1To10.noPlayerCards).toBe(10);
    expect(game10To1To10.dealPattern).toBe("H2L2H");
    expect(game10To1To10.listOfPlayers).toEqual(["Duane", "Suzanne", "Sasha", "Christopher", "Joseph"]);

    // console.log(game10To1To10);
    let roundIdx = 0; // Round 1 - 1
    let playerIdx = 0; // Player 1 - 1
    expect(game10To1To10.deals[roundIdx].roundNo).toBe(1);
    expect(game10To1To10.deals[roundIdx].cardsDealt).toBe(10);
    expect(game10To1To10.deals[roundIdx].getScore(playerIdx)).toBe(0);

    roundIdx = 9; // Round 10 - 1
    expect(game10To1To10.deals[roundIdx].roundNo).toBe(10);
    expect(game10To1To10.deals[roundIdx].cardsDealt).toBe(1);
    expect(game10To1To10.deals[roundIdx].getScore(playerIdx)).toBe(0);

    roundIdx = 10; // Round 11 - 1
    expect(game10To1To10.deals[roundIdx].roundNo).toBe(11);
    expect(game10To1To10.deals[roundIdx].cardsDealt).toBe(2);
    expect(game10To1To10.deals[roundIdx].getScore(playerIdx)).toBe(0);

    roundIdx = 11; // Round 12 - 1
    expect(game10To1To10.deals[roundIdx].roundNo).toBe(12);
    expect(game10To1To10.deals[roundIdx].cardsDealt).toBe(3);
    expect(game10To1To10.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 18; // Round 19 - 1
    expect(game10To1To10.deals[roundIdx].roundNo).toBe(19);
    expect(game10To1To10.deals[roundIdx].cardsDealt).toBe(10);
    expect(game10To1To10.deals[roundIdx].getScore(playerIdx)).toBe(0);

    roundIdx = 0; // Round 1 - 1
    playerIdx = 4; // Player 5 - 1
    expect(game10To1To10.deals[roundIdx].roundNo).toBe(1);
    expect(game10To1To10.deals[roundIdx].cardsDealt).toBe(10);
    expect(game10To1To10.deals[roundIdx].getScore(playerIdx)).toBe(0);

    roundIdx = 9; // Round 10 - 1
    expect(game10To1To10.deals[roundIdx].roundNo).toBe(10);
    expect(game10To1To10.deals[roundIdx].cardsDealt).toBe(1);
    expect(game10To1To10.deals[roundIdx].getScore(playerIdx)).toBe(0);

    roundIdx = 10; // Round 11 - 1
    expect(game10To1To10.deals[roundIdx].roundNo).toBe(11);
    expect(game10To1To10.deals[roundIdx].cardsDealt).toBe(2);
    expect(game10To1To10.deals[roundIdx].getScore(playerIdx)).toBe(0);

    roundIdx = 11; // Round 12 - 1
    expect(game10To1To10.deals[roundIdx].roundNo).toBe(12);
    expect(game10To1To10.deals[roundIdx].cardsDealt).toBe(3);
    expect(game10To1To10.deals[roundIdx].getScore(playerIdx)).toBe(0);

    roundIdx = 18; // Round 19 - 1
    expect(game10To1To10.deals[roundIdx].roundNo).toBe(19);
    expect(game10To1To10.deals[roundIdx].cardsDealt).toBe(10);
    expect(game10To1To10.deals[roundIdx].getScore(playerIdx)).toBe(0);

});

test('Class gameOH: Test Deal Pattern L2H2L instantiation?', () => {

    const gameNo = 104;
    const gameComm = "Test Game for 1..9..1";
    const screwTD = false;
    const noPlayers = 5;
    const noPlayerCards = 9;
    const dealPattern = "L2H2L";
    const listOfPlayers = ["Duane", "Suzanne", "Sasha", "Christopher", "Joseph"];

    const game1To10To1 = new gameOH.GameOH (
        gameNo, gameComm, screwTD, noPlayers, 
        noPlayerCards, dealPattern, listOfPlayers
    );

    expect(game1To10To1.gameNo).toBe(104);
    expect(game1To10To1.gameComm).toBe("Test Game for 1..9..1");
    expect(game1To10To1.screwTD).toBe(false);
    expect(game1To10To1.noPlayers).toBe(5);
    expect(game1To10To1.noPlayerCards).toBe(9);
    expect(game1To10To1.dealPattern).toBe("L2H2L");
    expect(game1To10To1.listOfPlayers).toEqual(["Duane", "Suzanne", "Sasha", "Christopher", "Joseph"]);

    // console.log(game1To10To1);
    let roundIdx = 0; // Round 1 - 1
    let playerIdx = 0; // Player 1 - 1
    expect(game1To10To1.deals[roundIdx].roundNo).toBe(1);
    expect(game1To10To1.deals[roundIdx].cardsDealt).toBe(1);
    expect(game1To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);

    roundIdx = 8; // Round 9 - 1
    expect(game1To10To1.deals[roundIdx].roundNo).toBe(9);
    expect(game1To10To1.deals[roundIdx].cardsDealt).toBe(9);
    expect(game1To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);

    roundIdx = 9; // Round 10 - 1
    expect(game1To10To1.deals[roundIdx].roundNo).toBe(10);
    expect(game1To10To1.deals[roundIdx].cardsDealt).toBe(8);
    expect(game1To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 10; // Round 11 - 1
    expect(game1To10To1.deals[roundIdx].roundNo).toBe(11);
    expect(game1To10To1.deals[roundIdx].cardsDealt).toBe(7);
    expect(game1To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 11; // Round 12 - 1
    expect(game1To10To1.deals[roundIdx].roundNo).toBe(12);
    expect(game1To10To1.deals[roundIdx].cardsDealt).toBe(6);
    expect(game1To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 16; // Round 17 - 1
    expect(game1To10To1.deals[roundIdx].roundNo).toBe(17);
    expect(game1To10To1.deals[roundIdx].cardsDealt).toBe(1);
    expect(game1To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);

    // console.log(game1To10To1.deals[0][17]);

    roundIdx = 0; // Round 1 - 1
    playerIdx = 4; // Player 5 - 1
    expect(game1To10To1.deals[roundIdx].roundNo).toBe(1);
    expect(game1To10To1.deals[roundIdx].cardsDealt).toBe(1);
    expect(game1To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 8; // Round 9 - 1
    expect(game1To10To1.deals[roundIdx].roundNo).toBe(9);
    expect(game1To10To1.deals[roundIdx].cardsDealt).toBe(9);
    expect(game1To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 9; // Round 10 - 1
    expect(game1To10To1.deals[roundIdx].roundNo).toBe(10);
    expect(game1To10To1.deals[roundIdx].cardsDealt).toBe(8);
    expect(game1To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 10; // Round 11 - 1
    expect(game1To10To1.deals[roundIdx].roundNo).toBe(11);
    expect(game1To10To1.deals[roundIdx].cardsDealt).toBe(7);
    expect(game1To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 11; // Round 12 - 1
    expect(game1To10To1.deals[roundIdx].roundNo).toBe(12);
    expect(game1To10To1.deals[roundIdx].cardsDealt).toBe(6);
    expect(game1To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 16; // Round 17 - 1
    expect(game1To10To1.deals[roundIdx].roundNo).toBe(17);
    expect(game1To10To1.deals[roundIdx].cardsDealt).toBe(1);
    expect(game1To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);

    // console.log(game1To10To1.deals[17]);
    // console.log(game1To10To1.deals[18]);
});

test('Class gameOH: Test Deal Pattern H2LL2H instantiation?', () => {

    const gameNo = 105;
    const gameComm = "Test Game for 10..1..1..10";
    const screwTD = false;
    const noPlayers = 5;
    const noPlayerCards = 10;
    const dealPattern = "H2LL2H";
    const listOfPlayers = ["Duane", "Suzanne", "Sasha", "Christopher", "Joseph"];

    const game10To1To1To10 = new gameOH.GameOH (
        gameNo, gameComm, screwTD, noPlayers, 
        noPlayerCards, dealPattern, listOfPlayers
    );

    expect(game10To1To1To10.gameNo).toBe(105);
    expect(game10To1To1To10.gameComm).toBe("Test Game for 10..1..1..10");
    expect(game10To1To1To10.screwTD).toBe(false);
    expect(game10To1To1To10.noPlayers).toBe(5);
    expect(game10To1To1To10.noPlayerCards).toBe(10);
    expect(game10To1To1To10.dealPattern).toBe("H2LL2H");
    expect(game10To1To1To10.listOfPlayers).toEqual(["Duane", "Suzanne", "Sasha", "Christopher", "Joseph"]);

    // console.log(game10To1To1To10);
    let roundIdx = 0; // Round 1 - 1
    let playerIdx = 0; // Player 0 - 1
    expect(game10To1To1To10.deals[roundIdx].roundNo).toBe(1);
    expect(game10To1To1To10.deals[roundIdx].cardsDealt).toBe(10);
    expect(game10To1To1To10.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 9; // Round 10 - 1
    expect(game10To1To1To10.deals[roundIdx].roundNo).toBe(10);
    expect(game10To1To1To10.deals[roundIdx].cardsDealt).toBe(1);
    expect(game10To1To1To10.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 10; // Round 11 - 1
    expect(game10To1To1To10.deals[roundIdx].roundNo).toBe(11);
    expect(game10To1To1To10.deals[roundIdx].cardsDealt).toBe(1);
    expect(game10To1To1To10.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 11; // Round 12 - 1
    expect(game10To1To1To10.deals[roundIdx].roundNo).toBe(12);
    expect(game10To1To1To10.deals[roundIdx].cardsDealt).toBe(2);
    expect(game10To1To1To10.deals[roundIdx].getScore(playerIdx)).toBe(0);

    roundIdx = 12; // Round 13 - 1
    expect(game10To1To1To10.deals[roundIdx].roundNo).toBe(13);
    expect(game10To1To1To10.deals[roundIdx].cardsDealt).toBe(3);
    expect(game10To1To1To10.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 19; // Round 20 - 1
    expect(game10To1To1To10.deals[roundIdx].roundNo).toBe(20);
    expect(game10To1To1To10.deals[roundIdx].cardsDealt).toBe(10);
    expect(game10To1To1To10.deals[roundIdx].getScore(playerIdx)).toBe(0);

    // console.log(game10To1To1To10.deals[20].roundNo);

    roundIdx = 0; // Round 1 - 1
    playerIdx = 4; // Player 5 - 1
    expect(game10To1To1To10.deals[roundIdx].roundNo).toBe(1);
    expect(game10To1To1To10.deals[roundIdx].cardsDealt).toBe(10);
    expect(game10To1To1To10.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 9; // Round 10 - 1
    expect(game10To1To1To10.deals[roundIdx].roundNo).toBe(10);
    expect(game10To1To1To10.deals[roundIdx].cardsDealt).toBe(1);
    expect(game10To1To1To10.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx =10; // Round 11 - 1
    expect(game10To1To1To10.deals[roundIdx].roundNo).toBe(11);
    expect(game10To1To1To10.deals[roundIdx].cardsDealt).toBe(1);
    expect(game10To1To1To10.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx =11; // Round 12 - 1
    expect(game10To1To1To10.deals[roundIdx].roundNo).toBe(12);
    expect(game10To1To1To10.deals[roundIdx].cardsDealt).toBe(2);
    expect(game10To1To1To10.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx =12; // Round 13 - 1
    expect(game10To1To1To10.deals[roundIdx].roundNo).toBe(13);
    expect(game10To1To1To10.deals[roundIdx].cardsDealt).toBe(3);
    expect(game10To1To1To10.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx =19; // Round 20 - 1
    expect(game10To1To1To10.deals[roundIdx].roundNo).toBe(20);
    expect(game10To1To1To10.deals[roundIdx].cardsDealt).toBe(10);
    expect(game10To1To1To10.deals[roundIdx].getScore(playerIdx)).toBe(0);

});

test('Class gameOH: Test Deal Pattern L2HH2L instantiation?', () => {

    const gameNo = 106;
    const gameComm = "Test Game for 1..10..10..1";
    const screwTD = false;
    const noPlayers = 5;
    const noPlayerCards = 9;
    const dealPattern = "L2HH2L";
    const listOfPlayers = ["Duane", "Suzanne", "Sasha", "Christopher", "Joseph"];

    const game1To10To10To1 = new gameOH.GameOH (
        gameNo, gameComm, screwTD, noPlayers, 
        noPlayerCards, dealPattern, listOfPlayers
    );

    expect(game1To10To10To1.gameNo).toBe(106);
    expect(game1To10To10To1.gameComm).toBe("Test Game for 1..10..10..1");
    expect(game1To10To10To1.screwTD).toBe(false);
    expect(game1To10To10To1.noPlayers).toBe(5);
    expect(game1To10To10To1.noPlayerCards).toBe(9);
    expect(game1To10To10To1.dealPattern).toBe("L2HH2L");
    expect(game1To10To10To1.listOfPlayers).toEqual(["Duane", "Suzanne", "Sasha", "Christopher", "Joseph"]);

    // console.log(game1To10To10To1);

    let roundIdx = 0; // Round 1 - 1
    let playerIdx = 0; // Player 0 - 1
    expect(game1To10To10To1.deals[roundIdx].roundNo).toBe(1);
    expect(game1To10To10To1.deals[roundIdx].cardsDealt).toBe(1);
    expect(game1To10To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 8; // Round 9 - 1
    expect(game1To10To10To1.deals[roundIdx].roundNo).toBe(9);
    expect(game1To10To10To1.deals[roundIdx].cardsDealt).toBe(9);
    expect(game1To10To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 9; // Round 10 - 1
    expect(game1To10To10To1.deals[roundIdx].roundNo).toBe(10);
    expect(game1To10To10To1.deals[roundIdx].cardsDealt).toBe(9);
    expect(game1To10To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 10; // Round 11 - 1
    expect(game1To10To10To1.deals[roundIdx].roundNo).toBe(11);
    expect(game1To10To10To1.deals[roundIdx].cardsDealt).toBe(8);
    expect(game1To10To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 11; // Round 12 - 1
    expect(game1To10To10To1.deals[roundIdx].roundNo).toBe(12);
    expect(game1To10To10To1.deals[roundIdx].cardsDealt).toBe(7);
    expect(game1To10To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 17; // Round 18 - 1
    expect(game1To10To10To1.deals[roundIdx].roundNo).toBe(18);
    expect(game1To10To10To1.deals[roundIdx].cardsDealt).toBe(1);
    expect(game1To10To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);

    // console.log(game1To10To10To1.deals[0][18].roundNo);

    roundIdx = 0; // Round 1 - 1
    playerIdx = 4; // Player 5 - 1
    expect(game1To10To10To1.deals[roundIdx].roundNo).toBe(1);
    expect(game1To10To10To1.deals[roundIdx].cardsDealt).toBe(1);
    expect(game1To10To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 8; // Round 9 - 1
    expect(game1To10To10To1.deals[roundIdx].roundNo).toBe(9);
    expect(game1To10To10To1.deals[roundIdx].cardsDealt).toBe(9);
    expect(game1To10To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 9; // Round 10 - 1
    expect(game1To10To10To1.deals[roundIdx].roundNo).toBe(10);
    expect(game1To10To10To1.deals[roundIdx].cardsDealt).toBe(9);
    expect(game1To10To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 10; // Round 11 - 1
    expect(game1To10To10To1.deals[roundIdx].roundNo).toBe(11);
    expect(game1To10To10To1.deals[roundIdx].cardsDealt).toBe(8);
    expect(game1To10To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 11; // Round 12 - 1
    expect(game1To10To10To1.deals[roundIdx].roundNo).toBe(12);
    expect(game1To10To10To1.deals[roundIdx].cardsDealt).toBe(7);
    expect(game1To10To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);
    
    roundIdx = 17; // Round 18 - 1
    expect(game1To10To10To1.deals[roundIdx].roundNo).toBe(18);
    expect(game1To10To10To1.deals[roundIdx].cardsDealt).toBe(1);
    expect(game1To10To10To1.deals[roundIdx].getScore(playerIdx)).toBe(0);

});
//
// getPlayerName
// getPlayerIndex
// getPlayerNo
//
test('Class gameOH: Test Player Methods?', () => {

    const gameNo = 107;
    const gameComm = "Testing Game for 10..1..1..10 Name Methods";
    const screwTD = false;
    const noPlayers = 5;
    const noPlayerCards = 9;
    const dealPattern = "H2L2H";
    const listOfPlayers = ["Duane", "Suzanne", "Sasha", "Christopher", "Joseph"];
    const listOfDupPlayers = ["Duane", "Suzanne", "Duane", "Christopher", "DuaneM"];

    const game = new gameOH.GameOH (
        gameNo, gameComm, screwTD, noPlayers, 
        noPlayerCards, dealPattern, listOfPlayers
    );

    expect(game.getPlayerName(-1, "INDEX")).toBe(0);
    expect(game.getPlayerName(0, "INDEX")).toBe("Duane");
    expect(game.getPlayerName(1, "INDEX")).toBe("Suzanne");
    expect(game.getPlayerName(4, "INDEX")).toBe("Joseph");
    expect(game.getPlayerName(5, "INDEX")).toBe(0);

    expect(game.getPlayerName(-1, "PLAYERNO")).toBe(0);
    expect(game.getPlayerName(0, "PLAYERNO")).toBe(0);
    expect(game.getPlayerName(1, "PLAYERNO")).toBe("Duane");
    expect(game.getPlayerName(2, "PLAYERNO")).toBe("Suzanne");
    expect(game.getPlayerName(5, "PLAYERNO")).toBe("Joseph");
    expect(game.getPlayerName(6, "PLAYERNO")).toBe(0);

    expect(game.getPlayerName(0)).toBe("Duane");
    expect(game.getPlayerName(1)).toBe("Suzanne");
    expect(game.getPlayerName(4)).toBe("Joseph");

    expect(game.getPlayerName(0, "JUNK")).toBe("Duane");
    expect(game.getPlayerName(1, "JUNK")).toBe("Suzanne");
    expect(game.getPlayerName(4, "JUNK")).toBe("Joseph");

    expect(game.getPlayerIndex("Duane")).toBe(0);
    expect(game.getPlayerIndex("Suzanne")).toBe(1);
    expect(game.getPlayerIndex("Joseph")).toBe(4);
    expect(game.getPlayerIndex("Santa")).toBe(-1);
    
    expect(game.getPlayerNo("Duane")).toBe(1);
    expect(game.getPlayerNo("Suzanne")).toBe(2);
    expect(game.getPlayerNo("Joseph")).toBe(5);
    expect(game.getPlayerNo("Santa")).toBe(0);
    
    const gameDup = new gameOH.GameOH (
        gameNo, gameComm, screwTD, noPlayers, 
        noPlayerCards, dealPattern, listOfDupPlayers
        );
        
    expect(gameDup.getPlayerIndex("Duane")).toBe(0);
    expect(gameDup.getPlayerIndex("DuaneM")).toBe(4);
    expect(gameDup.getPlayerNo("Duane")).toBe(1);
    expect(gameDup.getPlayerNo("DuaneM")).toBe(5);

});
// getDealPattern
// getNoPlayers
// getNoPlayerCards
test('Class gameOH: Test Misc Get Methods?', () => {

    const gameNo = 108;
    const gameComm = "Testing Game for 10..1..1..10 Name Methods";
    const screwTD = false;
    const noPlayers = 5;
    const noPlayerCards = 10;
    const dealPattern = "H2L2H";
    const listOfPlayers = ["Duane", "Suzanne", "Sasha", "Christopher", "Joseph"];

    const game = new gameOH.GameOH (
        gameNo, gameComm, screwTD, noPlayers, 
        noPlayerCards, dealPattern, listOfPlayers
    );

    expect(game.getDealPattern()).toBe("H2L2H");
    expect(game.getNoPlayers()).toBe(5);
    expect(game.getNoPlayerCards()).toBe(10);
});

test('Class gameOH: Test Bidding & Scoring Methods?', () => {

    const gameNo = 109;
    const gameComm = "Testing Game for 10..1..1..10 Name Methods";
    const screwTD = false;
    const noPlayers = 5;
    const noPlayerCards = 10;
    const dealPattern = "H2L2H";
    const listOfPlayers = ["Duane", "Suzanne", "Sasha", "Christopher", "Joseph"];

    const game = new gameOH.GameOH (
        gameNo, gameComm, screwTD, noPlayers, 
        noPlayerCards, dealPattern, listOfPlayers
    );

    let roundNo = 1;
    let listBids = [];
    expect(game.updateAllBids(roundNo, listBids)).toBe(-1); // Error: Missing player bid.
    
    listBids = [0, 1, 2, 3];
    expect(game.updateAllBids(roundNo, listBids)).toBe(-1); // Error: Missing player bid.
    // expect(game.updateAllBids(roundNo, listBids)).toBe(10);
    // expect(game.getTotalBidAmt(roundNo)).toBe(6);

    listBids = [0, 1, 2, 3, 5];
    expect(game.updateAllBids(roundNo, listBids)).toBe(-2); // Error: Bids canNOT exceed cards dealt.
    
    listBids = [0, 1, 2, 3, 4];
    expect(game.updateAllBids(roundNo, listBids)).toBe(10); // Success returns total bids for the round.
    
    listBids = [0, 1, 2, 3, 3];
    expect(game.updateAllBids(roundNo, listBids)).toBe(9); // Success returns total bids for the round.
});
// Next:
// 4. updatePlayerBid
// 5. get PlayerBid
// 6. updateAllBids
// 7. updatePlayerMade
// 8. getPlayerMade
// 9. updateAllMadeAndScore
// 10. scorePlayer
// 11. getPlayerScore
// 12. getPlayerScoreRound
// 13. getPlayerScoreTotal
// 14. isScrewTD
// 15. Need to add tracking Dealer for isScrewTD mode.