// import { useReducer } from 'react/cjs/react.production.min';
import deal from './deal.js';
class GameOH {
    constructor (gameNo, gameComm, screwTD, noPlayers, noPlayerCards, dealPattern, listOfPlayers, startDealer) {
        this.gameNo = gameNo;
        this.gameComm = gameComm;
        this.screwTD = screwTD;
        this.noPlayers = noPlayers;
        this.noPlayerCards = noPlayerCards;
        this.dealPattern = dealPattern;
        this.listOfPlayers = listOfPlayers;
        this.deals = [];

        let sDealer = 0;
        if (typeof startDealer === 'undefined' || isNaN(startDealer) || startDealer > this.noPlayers || startDealer < 1)
            sDealer = (Math.floor(Math.random() * this.noPlayers)) + 1;
        else
            sDealer = startDealer;

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
                this.dealPattern = "H2L2H";
                startAtOne = false;
        }
        let upAdjust = 0;
        for (let j = 0; j < noPlayerCards; j++) {
            this.deals.push(
                new deal.Deal(
                    j + 1, // Round #
                    startAtOne ? j + 1 : noPlayerCards - j, // # of Cards
                    noPlayers, // # of Players
                    sDealer // Dealer for the round
                )
            );
            // sDealer = ((sDealer === this.noPlayers) ? 1 : sDealer++);
            if (sDealer === this.noPlayers) 
                sDealer = 1;
            else
                sDealer++;
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

    getDealer(roundNo) {
        return this.deals[roundNo - 1].dealer;
    }

    isScrewTD() {
        return this.screwTD;
    }

    getTotalBidAmt(roundNo) {
        return this.deals[roundNo-1].getTotalBidAmt();
    }

    getPlayerBid(roundNo, playerNo, bid) {
        return this.deals[roundNo - 1].getBid(playerNo - 1);
    }

    checkPlayerBid(roundNo, playerNo, bid) {
        if (this.isScrewTD()) {
            if (playerNo === this.deals[roundNo - 1].dealer) {
                const totalCurBids = this.getTotalBidAmt(roundNo);
                const playerCurBid = this.getPlayerBid(roundNo, playerNo, bid);
                const totalNewBids = totalCurBids - playerCurBid + bid;
                if (totalNewBids === this.deals[roundNo - 1].getCardsDealt()) // Dealer canNOT bid an amount that
                    return false; //makes total bids equal to cards dealt.
            }
        }

        return true;
    }

    updatePlayerBid(roundNo, playerNo, bid) {

        if (this.checkPlayerBid(roundNo, playerNo, bid))
            return this.deals[roundNo - 1].updateBid(playerNo - 1, bid);
        else
            return -3;
    }

    updateAllBids(roundNo, listBids) {
        if (listBids.length === this.listOfPlayers.length) {
                let bidOK = 0;
                for (let i = 0; i < this.listOfPlayers.length; i++) {
                    bidOK = this.updatePlayerBid(roundNo, i + 1, listBids[i]);
                    if (bidOK < 0) return bidOK;
                }
                return this.getTotalBidAmt(roundNo);
        }
        else
            return -1; // Error: Missing player bid.
        }

    getTotalMadeAmt(roundNo) {
        return this.deals[roundNo-1].getTotalMadeAmt();
    }

    getPlayerMade(roundNo, playerNo, made) {
        return this.deals[roundNo - 1].getMade(playerNo - 1);
    }

    checkPlayerMade(roundNo, playerNo, made) {
        const totalCurMade = this.getTotalMadeAmt(roundNo);
        const playerCurMade = this.getPlayerMade(roundNo, playerNo, made);
        const totalNewMade = totalCurMade - playerCurMade + made;
        if (totalNewMade <= this.deals[roundNo - 1].getCardsDealt())
            return true;
        else
            return false;
    }

    updatePlayerMade(roundNo, playerNo, made) {
        if (this.checkPlayerMade(roundNo, playerNo, made))
            return this.deals[roundNo - 1].updateMade(playerNo - 1, made)
        else
            return -2;
    }

    updateAllMade(roundNo, listMade) {
        if (listMade.length === this.listOfPlayers.length) {
            const totalMade = listMade.reduce((total, num) => total + num);
            if (totalMade === this.deals[roundNo - 1].getCardsDealt()) {
                for (let i = 0; i < this.listOfPlayers.length; i++) {
                    this.updatePlayerMade(roundNo, i + 1, listMade[i]);
                }
                return this.getTotalMadeAmt(roundNo);
            }
            else
                return -2; // Error: Bids canNOT exceed cards dealt.
        }
        else
            return -1; // Error: Missing player bid.
    }

    getTotalScore(roundNo) {
        return this.deals[roundNo-1].getTotalScore();
    }
    
    getPlayerRoundScore(roundNo, playerNo) {
        return this.deals[roundNo-1].getScore(playerNo - 1);
    }

    getPlayerTotalScore(playerNo) {
        let totalPoints = 0;
        for (let i = 0; i < this.deals.length; i++) {
            totalPoints += this.getPlayerRoundScore(i + 1, playerNo);
        }
        return totalPoints;
    }

    updatePlayerScore(roundNo, playerNo) {
        return this.deals[roundNo - 1].score(playerNo - 1)
    }

    updateAllScores(roundNo) {
        for (let i = 0; i < this.listOfPlayers.length; i++) {
            this.updatePlayerScore(roundNo, i + 1);
        }
        return this.getTotalScore(roundNo);
    }
}

export default {GameOH};