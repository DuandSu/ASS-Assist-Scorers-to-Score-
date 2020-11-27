import { useReducer } from 'react/cjs/react.production.min';
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
        for (let j = 0; j < noPlayerCards; j++) {
            this.deals.push(
                new deal.Deal(
                    j + 1, // Round #
                    startAtOne ? j + 1 : noPlayerCards - j, // # of Cards
                    noPlayers // # of Players
                )
            );
        }
        upAdjust = 0;
        if (repeatUp) {
            upAdjust = 1;
            this.deals.push(
                new deal.Deal(
                    this.deals.length + 1, // Round #
                    startAtOne 
                        ? noPlayerCards + (noPlayerCards - this.deals.length)
                        : this.deals.length + 1 - noPlayerCards, // # of Cards
                        noPlayers // # of Players
                        )
            );
        }
        if (continueUp) {
            for (let j = noPlayerCards; j < noPlayerCards * 2 - 1; j++) {
                this.deals.push(
                    new deal.Deal(
                        j + 1 + upAdjust, // Round #
                        startAtOne ? noPlayerCards + (noPlayerCards - j) - 1 : j + 2 - noPlayerCards, // # of Cards
                        noPlayers // # of Players
                        )
                );
            }                
        }
    }

    getPlayerName(getKey, getMethod) {
        //
        // If "INDEX" grab the name by index. If NOT specified then "INDEX" is default.
        //
        if (typeof getMethod === 'undefined' || getMethod === "INDEX" || getMethod !== "PLAYERNO") {
            if (getKey >= 0 && getKey < this.listOfPlayers.length)
                return this.listOfPlayers[getKey];
            else
                return 0;
        }
        else {
            if (getKey >= 1 && getKey <= this.listOfPlayers.length)
                return this.listOfPlayers[getKey - 1];
            else
                return 0;
        }
    }

    getPlayerIndex(name) {
        return this.listOfPlayers.findIndex((element) => element === name);
    }

    getPlayerNo(name) {
        return this.listOfPlayers.findIndex((element) => element === name) + 1;
    }
    
    getDealPattern() {
        return this.dealPattern;
    }

    getNoPlayers() {
        return this.noPlayers;
    }

    getNoPlayerCards() {
        return this.noPlayerCards;
    }

    // updateAllBids(roundNo, listBids) {
    //     if (listBids.length === this.listOfPlayers.length) {
    //         totalBids = listBids.reduce((total, num) => total + num);
    //         if (totalBids < )
    //         return 100;
    //     }
    // }
}

export default {GameOH};