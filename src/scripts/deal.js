import bidNode from "./bidNode";

class Deal {

    constructor (roundNo, cardsDealt, noPlayers, dealer) {
        this.roundNo = roundNo;
        this.cardsDealt = cardsDealt;
        this.noPlayers = noPlayers;
        this.dealer = dealer;
        this.bidOH = [];

        for (let i = 0; i < this.noPlayers; i++) {
            this.bidOH.push(new bidNode.BidNode());
        }
    }

    getCardsDealt() {
        return this.cardsDealt;
    }

    checkBid(playerIdx, bid) {
        return this.bidOH[playerIdx].checkBid(bid, this.cardsDealt);
    }

    updateBid(playerIdx, bid) {
        return this.bidOH[playerIdx].updateBid(bid, this.cardsDealt);
    }

    getBid(playerIdx) {
        return this.bidOH[playerIdx].getBid();
    }

    getTotalBidAmt() {
        let totalBid = 0;
        for (let i = 0; i < this.noPlayers; i++) {
            totalBid += this.bidOH[i].bid;
        }
        return totalBid;
    }

    checkMade(playerIdx, made) {
        return this.bidOH[playerIdx].checkMade(made, this.cardsDealt);
    }

    updateMade(playerIdx, made) {
        return this.bidOH[playerIdx].updateMade(made, this.cardsDealt);
    }
    
    getMade(playerIdx) {
        return this.bidOH[playerIdx].getMade();
    }

    getTotalMadeAmt() {
        let totalMade = 0;
        for (let i = 0; i < this.noPlayers; i++) {
            totalMade += this.bidOH[i].made;
        }
        return totalMade;
    }

    score(playerIdx) {
        return this.bidOH[playerIdx].score();
    }

    getScore(playerIdx) {
        return this.bidOH[playerIdx].getScore();
    }

    getTotalScore () {
        let totalScore = 0;
        for (let i = 0; i < this.noPlayers; i++) {
            totalScore += this.bidOH[i].points;
        }
        return totalScore;        
    }
}

export default {Deal};