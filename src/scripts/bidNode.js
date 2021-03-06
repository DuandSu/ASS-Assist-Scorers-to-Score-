class BidNode {

    constructor (setTo0) {
        if (setTo0)
            this.bid = 0;
        else
            this.bid = null;
        this.made = null;
        this.points = 0;
    }

    checkBid(bid, cardsDealt) {
        if (bid < 0)
            return -1; // Negative Numbers NOT allowed.
        else if (bid <= cardsDealt)
            return 0; // Bids 0 to number of cards dealt is acceptable.
        else
            return -2; // CanNOT bid more than number of cards dealt.
    }

    updateBid(bid, cardsDealt) {
        const result = this.checkBid(bid, cardsDealt);
        if (result === 0) this.bid = bid;
        return result;
    }

    getBid() {
        return this.bid;
    }

    checkMade(made, cardsDealt) {
        if (this.bid === null) {
            return null; // Bid updates must always precede made updates if null.
        }
        if (made < 0)
            return -1; // Negative Numbers NOT allowed.
        else if (made <= cardsDealt)
            return 0; // Make 0 to number of cards dealt is acceptable.
        else
            return 1; // CanNOT Make more than number of cards.
    }

    updateMade(made, cardsDealt) {
        const result = this.checkMade(made, cardsDealt);
        if (result === 0) this.made = made;
        return result;
    }
    
    getMade() {
        return this.made;
    }

    score() {
        console.log("Scoring -> Bid = " + this.bid + " Made: " + this.made);
        if (this.bid === null)
            return null; // Bid updates must always precede scoring.
        else if (this.made === null)
            return null; // Bid updates must always precede scoring.
        else if (this.bid === this.made) {
            this.points = this.made === 0 ? 10 : this.made + this.made * 10; // Bid made. Score tricks taken plus bonus.
            console.log("Bid Made Points: " + this.points);
            return this.points;
        }
        else {
            this.points = this.made; // Bid NOT made. Score trics taken but NO bonus.
            console.log("Bid NOT Made Points: " + this.points);
            return this.points;
        }
    }

    getScore() {
        return this.points;
    }
}

export default {BidNode};