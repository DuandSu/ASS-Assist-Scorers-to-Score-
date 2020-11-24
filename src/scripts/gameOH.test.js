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
        // twoDimension.push([i]);
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

    expect(game10To1.gameNo).toBe(101);
    expect(game10To1.gameComm).toBe("Test Game for 10..1");
    expect(game10To1.screwTD).toBe(false);
    expect(game10To1.noPlayers).toBe(5);
    expect(game10To1.noPlayerCards).toBe(10);
    expect(game10To1.dealPattern).toBe("H2L");
    expect(game10To1.listOfPlayers).toEqual(["Duane", "Suzanne", "Sasha", "Christopher", "Joseph"]);

    // console.log(game10To1);
    expect(game10To1.deals[0][0].roundNo).toBe(1);
    expect(game10To1.deals[0][0].cardsDealt).toBe(10);
    expect(game10To1.deals[0][0].points).toBe(0);
    expect(game10To1.deals[0][9].roundNo).toBe(10);
    expect(game10To1.deals[0][9].cardsDealt).toBe(1);
    expect(game10To1.deals[0][9].points).toBe(0);

    expect(game10To1.deals[4][0].roundNo).toBe(1);
    expect(game10To1.deals[4][0].cardsDealt).toBe(10);
    expect(game10To1.deals[4][0].points).toBe(0);
    expect(game10To1.deals[4][9].roundNo).toBe(10);
    expect(game10To1.deals[4][9].cardsDealt).toBe(1);
    expect(game10To1.deals[4][9].points).toBe(0);
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
    expect(game1To9.deals[0][0].roundNo).toBe(1);
    expect(game1To9.deals[0][0].cardsDealt).toBe(1);
    expect(game1To9.deals[0][0].points).toBe(0);
    expect(game1To9.deals[0][8].roundNo).toBe(9);
    expect(game1To9.deals[0][8].cardsDealt).toBe(9);
    expect(game1To9.deals[0][8].points).toBe(0);

    expect(game1To9.deals[4][0].roundNo).toBe(1);
    expect(game1To9.deals[4][0].cardsDealt).toBe(1);
    expect(game1To9.deals[4][0].points).toBe(0);
    expect(game1To9.deals[4][8].roundNo).toBe(9);
    expect(game1To9.deals[4][8].cardsDealt).toBe(9);
    expect(game1To9.deals[4][8].points).toBe(0);
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
    expect(game10To1To10.deals[0][0].roundNo).toBe(1);
    expect(game10To1To10.deals[0][0].cardsDealt).toBe(10);
    expect(game10To1To10.deals[0][0].points).toBe(0);
    expect(game10To1To10.deals[0][9].roundNo).toBe(10);
    expect(game10To1To10.deals[0][9].cardsDealt).toBe(1);
    expect(game10To1To10.deals[0][9].points).toBe(0);
    expect(game10To1To10.deals[0][10].roundNo).toBe(11);
    expect(game10To1To10.deals[0][10].cardsDealt).toBe(2);
    expect(game10To1To10.deals[0][10].points).toBe(0);
    expect(game10To1To10.deals[0][11].roundNo).toBe(12);
    expect(game10To1To10.deals[0][11].cardsDealt).toBe(3);
    expect(game10To1To10.deals[0][11].points).toBe(0);
    expect(game10To1To10.deals[0][18].roundNo).toBe(19);
    expect(game10To1To10.deals[0][18].cardsDealt).toBe(10);
    expect(game10To1To10.deals[0][18].points).toBe(0);

    expect(game10To1To10.deals[4][0].roundNo).toBe(1);
    expect(game10To1To10.deals[4][0].cardsDealt).toBe(10);
    expect(game10To1To10.deals[4][0].points).toBe(0);
    expect(game10To1To10.deals[4][9].roundNo).toBe(10);
    expect(game10To1To10.deals[4][9].cardsDealt).toBe(1);
    expect(game10To1To10.deals[4][9].points).toBe(0);
    expect(game10To1To10.deals[4][10].roundNo).toBe(11);
    expect(game10To1To10.deals[4][10].cardsDealt).toBe(2);
    expect(game10To1To10.deals[4][10].points).toBe(0);
    expect(game10To1To10.deals[4][11].roundNo).toBe(12);
    expect(game10To1To10.deals[4][11].cardsDealt).toBe(3);
    expect(game10To1To10.deals[4][11].points).toBe(0);
    expect(game10To1To10.deals[4][18].roundNo).toBe(19);
    expect(game10To1To10.deals[4][18].cardsDealt).toBe(10);
    expect(game10To1To10.deals[4][18].points).toBe(0);

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
    expect(game1To10To1.deals[0][0].roundNo).toBe(1);
    expect(game1To10To1.deals[0][0].cardsDealt).toBe(1);
    expect(game1To10To1.deals[0][0].points).toBe(0);
    expect(game1To10To1.deals[0][8].roundNo).toBe(9);
    expect(game1To10To1.deals[0][8].cardsDealt).toBe(9);
    expect(game1To10To1.deals[0][8].points).toBe(0);
    expect(game1To10To1.deals[0][9].roundNo).toBe(10);
    expect(game1To10To1.deals[0][9].cardsDealt).toBe(8);
    expect(game1To10To1.deals[0][9].points).toBe(0);
    expect(game1To10To1.deals[0][10].roundNo).toBe(11);
    expect(game1To10To1.deals[0][10].cardsDealt).toBe(7);
    expect(game1To10To1.deals[0][10].points).toBe(0);
    expect(game1To10To1.deals[0][11].roundNo).toBe(12);
    expect(game1To10To1.deals[0][11].cardsDealt).toBe(6);
    expect(game1To10To1.deals[0][11].points).toBe(0);
    expect(game1To10To1.deals[0][16].roundNo).toBe(17);
    expect(game1To10To1.deals[0][16].cardsDealt).toBe(1);
    expect(game1To10To1.deals[0][16].points).toBe(0);

    // console.log(game1To10To1.deals[0][17]);

    expect(game1To10To1.deals[4][0].roundNo).toBe(1);
    expect(game1To10To1.deals[4][0].cardsDealt).toBe(1);
    expect(game1To10To1.deals[4][0].points).toBe(0);
    expect(game1To10To1.deals[4][8].roundNo).toBe(9);
    expect(game1To10To1.deals[4][8].cardsDealt).toBe(9);
    expect(game1To10To1.deals[4][8].points).toBe(0);
    expect(game1To10To1.deals[4][9].roundNo).toBe(10);
    expect(game1To10To1.deals[4][9].cardsDealt).toBe(8);
    expect(game1To10To1.deals[4][9].points).toBe(0);
    expect(game1To10To1.deals[4][10].roundNo).toBe(11);
    expect(game1To10To1.deals[4][10].cardsDealt).toBe(7);
    expect(game1To10To1.deals[4][10].points).toBe(0);
    expect(game1To10To1.deals[4][11].roundNo).toBe(12);
    expect(game1To10To1.deals[4][11].cardsDealt).toBe(6);
    expect(game1To10To1.deals[4][11].points).toBe(0);
    expect(game1To10To1.deals[4][16].roundNo).toBe(17);
    expect(game1To10To1.deals[4][16].cardsDealt).toBe(1);
    expect(game1To10To1.deals[4][16].points).toBe(0);

    // console.log(game1To10To1.deals[4][17]);
    // console.log(game1To10To1.deals[4][18]);
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
    expect(game10To1To1To10.deals[0][0].roundNo).toBe(1);
    expect(game10To1To1To10.deals[0][0].cardsDealt).toBe(10);
    expect(game10To1To1To10.deals[0][0].points).toBe(0);
    expect(game10To1To1To10.deals[0][9].roundNo).toBe(10);
    expect(game10To1To1To10.deals[0][9].cardsDealt).toBe(1);
    expect(game10To1To1To10.deals[0][9].points).toBe(0);
    expect(game10To1To1To10.deals[0][10].roundNo).toBe(11);
    expect(game10To1To1To10.deals[0][10].cardsDealt).toBe(1);
    expect(game10To1To1To10.deals[0][10].points).toBe(0);
    expect(game10To1To1To10.deals[0][11].roundNo).toBe(12);
    expect(game10To1To1To10.deals[0][11].cardsDealt).toBe(2);
    expect(game10To1To1To10.deals[0][11].points).toBe(0);
    expect(game10To1To1To10.deals[0][12].roundNo).toBe(13);
    expect(game10To1To1To10.deals[0][12].cardsDealt).toBe(3);
    expect(game10To1To1To10.deals[0][12].points).toBe(0);
    expect(game10To1To1To10.deals[0][19].roundNo).toBe(20);
    expect(game10To1To1To10.deals[0][19].cardsDealt).toBe(10);
    expect(game10To1To1To10.deals[0][19].points).toBe(0);

    // console.log(game10To1To1To10.deals[0][20].roundNo);

    expect(game10To1To1To10.deals[4][0].roundNo).toBe(1);
    expect(game10To1To1To10.deals[4][0].cardsDealt).toBe(10);
    expect(game10To1To1To10.deals[4][0].points).toBe(0);
    expect(game10To1To1To10.deals[4][9].roundNo).toBe(10);
    expect(game10To1To1To10.deals[4][9].cardsDealt).toBe(1);
    expect(game10To1To1To10.deals[4][9].points).toBe(0);
    expect(game10To1To1To10.deals[4][10].roundNo).toBe(11);
    expect(game10To1To1To10.deals[4][10].cardsDealt).toBe(1);
    expect(game10To1To1To10.deals[4][10].points).toBe(0);
    expect(game10To1To1To10.deals[4][11].roundNo).toBe(12);
    expect(game10To1To1To10.deals[4][11].cardsDealt).toBe(2);
    expect(game10To1To1To10.deals[4][11].points).toBe(0);
    expect(game10To1To1To10.deals[4][12].roundNo).toBe(13);
    expect(game10To1To1To10.deals[4][12].cardsDealt).toBe(3);
    expect(game10To1To1To10.deals[4][12].points).toBe(0);
    expect(game10To1To1To10.deals[4][19].roundNo).toBe(20);
    expect(game10To1To1To10.deals[4][19].cardsDealt).toBe(10);
    expect(game10To1To1To10.deals[4][19].points).toBe(0);

});