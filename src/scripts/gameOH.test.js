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

    console.table(game10To1.deals);

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

    expect(game1To10To10To1.deals[0][0].roundNo).toBe(1);
    expect(game1To10To10To1.deals[0][0].cardsDealt).toBe(1);
    expect(game1To10To10To1.deals[0][0].points).toBe(0);
    expect(game1To10To10To1.deals[0][8].roundNo).toBe(9);
    expect(game1To10To10To1.deals[0][8].cardsDealt).toBe(9);
    expect(game1To10To10To1.deals[0][8].points).toBe(0);
    expect(game1To10To10To1.deals[0][9].roundNo).toBe(10);
    expect(game1To10To10To1.deals[0][9].cardsDealt).toBe(9);
    expect(game1To10To10To1.deals[0][9].points).toBe(0);
    expect(game1To10To10To1.deals[0][10].roundNo).toBe(11);
    expect(game1To10To10To1.deals[0][10].cardsDealt).toBe(8);
    expect(game1To10To10To1.deals[0][10].points).toBe(0);
    expect(game1To10To10To1.deals[0][11].roundNo).toBe(12);
    expect(game1To10To10To1.deals[0][11].cardsDealt).toBe(7);
    expect(game1To10To10To1.deals[0][11].points).toBe(0);
    expect(game1To10To10To1.deals[0][17].roundNo).toBe(18);
    expect(game1To10To10To1.deals[0][17].cardsDealt).toBe(1);
    expect(game1To10To10To1.deals[0][17].points).toBe(0);

    // console.log(game1To10To10To1.deals[0][18].roundNo);

    expect(game1To10To10To1.deals[4][0].roundNo).toBe(1);
    expect(game1To10To10To1.deals[4][0].cardsDealt).toBe(1);
    expect(game1To10To10To1.deals[4][0].points).toBe(0);
    expect(game1To10To10To1.deals[4][8].roundNo).toBe(9);
    expect(game1To10To10To1.deals[4][8].cardsDealt).toBe(9);
    expect(game1To10To10To1.deals[4][8].points).toBe(0);
    expect(game1To10To10To1.deals[4][9].roundNo).toBe(10);
    expect(game1To10To10To1.deals[4][9].cardsDealt).toBe(9);
    expect(game1To10To10To1.deals[4][9].points).toBe(0);
    expect(game1To10To10To1.deals[4][10].roundNo).toBe(11);
    expect(game1To10To10To1.deals[4][10].cardsDealt).toBe(8);
    expect(game1To10To10To1.deals[4][10].points).toBe(0);
    expect(game1To10To10To1.deals[4][11].roundNo).toBe(12);
    expect(game1To10To10To1.deals[4][11].cardsDealt).toBe(7);
    expect(game1To10To10To1.deals[4][11].points).toBe(0);
    expect(game1To10To10To1.deals[4][17].roundNo).toBe(18);
    expect(game1To10To10To1.deals[4][17].cardsDealt).toBe(1);
    expect(game1To10To10To1.deals[4][17].points).toBe(0);

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

test('Class gameOH: Test Bid Methods?', () => {

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

    let listBids = [0, 1, 2, 3, 4];
    // expect(game.updateAllBids(listBids)).toBe(10);

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