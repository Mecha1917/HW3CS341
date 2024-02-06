$(document).ready(function () {
  $("form#Form").submit(onFormSubmit);
});

function onFormSubmit(event) {
    event.preventDefault();
    console.log("form submitted");
    const notes = $("textarea#Notes")[0].value.trim();
    if (notes.toLowerCase().includes("vegan")) {
        window.alert("Cheesecakes have dairy in them, we cannot provide a vegan option.");
        	return;
    }
	const topping = $("form#Form input[type=\"radio\"]:checked")[0].value;
	const quantity = $("#quantity")[0].value;

	$("#noteConfirm").text(`Notes: ${notes}`);
	$("#topConfirm").text(`Topping: ${topping}`);
	$("#quanConfirm").text(`Quantity: ${quantity}`);

	$("#Form").addClass("hidden");
	$("#OrderHidden").removeClass("hidden");
}

function orderSetMonth(month) {
    $("button#button").text(month);
}