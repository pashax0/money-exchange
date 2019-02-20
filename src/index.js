// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var atm = {};
    if (currency > 10000) {
    	atm = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else {
	   	if (Math.floor(currency / 50) > 0) {
	   		atm["H"] = Math.floor(currency / 50);
	   		currency -= atm["H"] * 50;
	   	}
	   	if (Math.floor(currency / 25) > 0) {
	   		atm["Q"] = Math.floor(currency / 25);
	   		currency -= atm["Q"] * 25;
	   	}
	   	if (Math.floor(currency / 10) > 0) {
	   		atm["D"] = Math.floor(currency / 10);
	   		currency -= atm["D"] * 10;
	   	}
	   	if (Math.floor(currency / 5) > 0) {
	   		atm["N"] = Math.floor(currency / 5);
	   		currency -= atm["N"] * 5;
	   	}
	   	if (Math.floor(currency) >= 1) {
	   		atm["P"] = Math.floor(currency);
		}
	}
   	return atm;
}
