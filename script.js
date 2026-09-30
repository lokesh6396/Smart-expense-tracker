let transactions = [];

function addTransaction() {

    const description =
        document.getElementById("description").value;

    const amount =
        Number(document.getElementById("amount").value);

    const type =
        document.getElementById("type").value;

    if (!description || amount <= 0) {
        alert("Please enter valid transaction details.");
        return;
    }

    transactions.push({
        description: description,
        amount: amount,
        type: type
    });

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";

    updateDashboard();
}

function updateDashboard() {

    let income = 0;
    let expense = 0;

    const list =
        document.getElementById("transactions");

    list.innerHTML = "";

    transactions.forEach(transaction => {

        if (transaction.type === "income") {
            income += transaction.amount;
        } else {
            expense += transaction.amount;
        }

        const item = document.createElement("li");

        item.textContent =
            `${transaction.description} - ₹${transaction.amount} (${transaction.type})`;

        list.appendChild(item);
    });

    document.getElementById("income").textContent =
        `₹${income}`;

    document.getElementById("expense").textContent =
        `₹${expense}`;

    document.getElementById("balance").textContent =
        `₹${income - expense}`;
}