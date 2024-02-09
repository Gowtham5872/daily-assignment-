class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distanceInMiles, durationInMinutes) {
        const fare = this.baseFare + (distanceInMiles * this.costPerMile) + (durationInMinutes * this.costPerMinute);
        return fare;
    }
}

// Example usage:
const calculator = new UberPriceCalculator(2.5, 1.5, 0.3); // Base fare: $2.5, Cost per mile: $1.5, Cost per minute: $0.3

const distance = 10; // 10 miles
const duration = 20; // 20 minutes

const price = calculator.calculatePrice(distance, duration);
console.log("Estimated Uber price:", price.toFixed(2)); // Output the estimated price rounded to two decimal places
