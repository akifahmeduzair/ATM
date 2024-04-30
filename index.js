let atm = {
    2000: 5,
    500: 10,
    200: 20,
    100: 50
};

function getTotalAmountInATM() {
    let total = 0;
    for (let note in atm) {
        total += note * atm[note];
    }
    return total;
}

function withdraw(amount, notes = [2000, 500, 200, 100]) {
    if (amount > getTotalAmountInATM()) {
        console.log("the amount you entered Exceeds the limit which is " + getTotalAmountInATM());
        return [];
    }

    if (amount === 0 || notes.length === 0) {
        return [];
    }

    let note = notes[0];
    let count = Math.floor(amount / note);

    if (count > atm[note]) {
        count = atm[note];
    }

    atm[note] -= count;
    amount -= note * count;

    let result = withdraw(amount, notes.slice(1));

    if (count > 0) {
        result.unshift({ note: note, count: count });
    }

    return result;
}

function printResult(amount) {
    let result = withdraw(amount);
    console.log("Amount Debited:");
    for (let i = 0; i < result.length; i++) {
        console.log(result[i].note + " - " + result[i].count);
    }
    console.log("After transaction:");
    for (let note in atm) {
        console.log(note + " notes - " + atm[note]);
    }
}


printResult(12800)