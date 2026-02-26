function predictBudget() {
    let data = {
        square_feet: Number(document.getElementById("sqft").value),
        rooms: Number(document.getElementById("rooms").value),
        bathrooms: Number(document.getElementById("bath").value),
        kitchen: Number(document.getElementById("kitchen").value),
        sitout: Number(document.getElementById("sitout").value),
        floors: Number(document.getElementById("floors").value)
    };

    fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        document.getElementById("result").innerHTML = `
            <h2>Estimated Budget: ₹${result.estimated_budget}</h2>
            <p>Minimum Estimate: ₹${result.min_budget}</p>
            <p>Maximum Estimate: ₹${result.max_budget}</p>
        `;
    })
    .catch(err => console.error(err));
}
