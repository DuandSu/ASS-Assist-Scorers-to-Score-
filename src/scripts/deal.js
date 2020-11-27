import bidNode from "./bidNode";

class Deal {

    // constructor (cardsDealt) {
    constructor (roundNo, cardsDealt) {
        this.roundNo = roundNo;
        this.cardsDealt = cardsDealt;
        this.bidOH = new bidNode.BidNode();
        // this.bid = null;
        // this.made = null;
        // this.points = 0;
    }

    checkBid(bid) {

        return this.bidOH.checkBid(bid, this.cardsDealt);
        // if (bid < 0)
        //     return -1; // Negative Numbers NOT allowed.
        // else if (bid <= this.cardsDealt)
        //     return 0; // Bids 0 to number of cards dealt is acceptable.
        // else
        //     return 1; // CanNOT bid more than number of cards dealt.
    }

    updateBid(bid) {

        return this.bidOH.updateBid(bid, this.cardsDealt);
        // const result = this.checkBid(bid);
        // if (result === 0) this.bid = bid;
        // return result;
    }

    getBid() {
        return this.bidOH.getBid();
        // return this.bid;
    }

    checkMade(made) {
        return this.bidOH.checkMade(made, this.cardsDealt);
        // if (this.bid === null)
        //     return null; // Bid updates must always precede made updates.
        // else if (made < 0)
        //     return -1; // Negative Numbers NOT allowed.
        // else if (made <= this.cardsDealt)
        //     return 0; // Make 0 to number of cards dealt is acceptable.
        // else
        //     return 1; // CanNOT Make more than number of cards.
    }

    updateMade(made) {
        return this.bidOH.updateMade(made, this.cardsDealt);
        // const result = this.checkMade(made);
        // if (result === 0) this.made = made;
        // return result;
    }
    
    getMade() {
        return this.bidOH.getMade();
        // return this.made;
    }

    score() {

        return this.bidOH.score();
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

    getScore() {
        return this.bidOH.getScore();
        // return this.points;
    }
}

export default {Deal};