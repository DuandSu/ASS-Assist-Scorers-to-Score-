import bidNode from "./bidNode";

class Deal {

    constructor (roundNo, cardsDealt, noPlayers) {
        this.roundNo = roundNo;
        this.cardsDealt = cardsDealt;
        this.noPlayers = noPlayers;
        this.bidOH = [];

        for (let i = 0; i < this.noPlayers; i++) {
            this.bidOH.push(new bidNode.BidNode());
        }
        // new bidNode.BidNode();
    }

    getCardsDealt() {
        return this.cardsDealt;
    }

    checkBid(playerIdx, bid) {

        return this.bidOH[playerIdx].checkBid(bid, this.cardsDealt);
        // if (bid < 0)
        //     return -1; // Negative Numbers NOT allowed.
        // else if (bid <= this.cardsDealt)
        //     return 0; // Bids 0 to number of cards dealt is acceptable.
        // else
        //     return 1; // CanNOT bid more than number of cards dealt.
    }

    updateBid(playerIdx, bid) {

        return this.bidOH[playerIdx].updateBid(bid, this.cardsDealt);
        // const result = this.checkBid(bid);
        // if (result === 0) this.bid = bid;
        // return result;
    }

    getBid(playerIdx) {
        return this.bidOH[playerIdx].getBid();
        // return this.bid;
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
        // if (this.bid === null)
        //     return null; // Bid updates must always precede made updates.
        // else if (made < 0)
        //     return -1; // Negative Numbers NOT allowed.
        // else if (made <= this.cardsDealt)
        //     return 0; // Make 0 to number of cards dealt is acceptable.
        // else
        //     return 1; // CanNOT Make more than number of cards.
    }

    updateMade(playerIdx, made) {
        return this.bidOH[playerIdx].updateMade(made, this.cardsDealt);
        // const result = this.checkMade(made);
        // if (result === 0) this.made = made;
        // return result;
    }
    
    getMade(playerIdx) {
        return this.bidOH[playerIdx].getMade();
        // return this.made;
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
        // if (this.bid === null)
        //     return null; // Bid updates must always precede scoring.
        // else if (this.made === null)
        //     return null; // Bid updates must always precede scoring.
        // else if (this.bid === this.made) {
        //     this.points = this.made === 0 ? 10 : this.made + this.made * 10; // Bid made. Score tricks taken plus bonus.
        //     return this.points;
        // }
        // else {
        //     this.points = this.made; // Bid NOT made. Score trics taken but NO bonus.
        //     return this.points;
        // }
    }

    getScore(playerIdx) {
        return this.bidOH[playerIdx].getScore();
        // return this.points;
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