import deal from './deal.js';
class GameOH {
    constructor (gameNo, gameComm, screwTD, noPlayers, noPlayerCards, dealPattern, listOfPlayers) {
        this.gameNo = gameNo;
        this.gameComm = gameComm;
        this.screwTD = screwTD;
        this.noPlayers = noPlayers;
        this.noPlayerCards = noPlayerCards;
        this.dealPattern = dealPattern;
        this.listOfPlayers = listOfPlayers;
        this.deals = [];

        let startAtOne = true;
        let continueUp = true;
        let repeatUp = false;
        switch(dealPattern) {
            case "H2L2H":
                startAtOne = false;
                break;
            case "H2LL2H":
                startAtOne = false;
                repeatUp = true;
                break;
            case "L2H2L":
                break;
            case "L2HH2L":
                repeatUp = true;
                break;
            case "H2L":
                startAtOne = false;
                continueUp = false;
                break;
            case "L2H":
                continueUp = false;
                break;
            default:
                noDeals = noPlayerCards;
        }
        let upAdjust = 0;
        for (let i = 0; i < noPlayers; i++) {
            this.deals.push([]);
            for (let j = 0; j < noPlayerCards; j++) {
                this.deals[i].push(
                    new deal.Deal(
                        j + 1, // Round #
                        startAtOne ? j + 1 : noPlayerCards - j // # of Cards
                    )
                );
            }
            upAdjust = 0;
            if (repeatUp) {
                upAdjust = 1;
                this.deals[i].push(
                    new deal.Deal(
                        this.deals[i].length + 1, // Round #
                        startAtOne 
                            ? noPlayerCards + (noPlayerCards - this.deals[i].length)
                            : this.deals[i].length + 1 - noPlayerCards // # of Cards
                    )
                );
            }
            if (continueUp) {
                for (let j = noPlayerCards; j < noPlayerCards * 2 - 1; j++) {
                    this.deals[i].push(
                        new deal.Deal(
                            j + 1 + upAdjust, // Round #
                            startAtOne ? noPlayerCards + (noPlayerCards - j) - 1 : j + 2 - noPlayerCards // # of Cards
                        )
                    );
                }                
            }
        }
    }
}

export default {GameOH};