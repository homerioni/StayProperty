function maxValue (full) {
    let arr = [];
    for (let i = 1; i <= 100; i++) {
        arr.push(i * 1000);
    }
    for (let i = 10; i <= 100; i++) {
        arr.push(i * 10000);
    }
    if (full) {
        for (let i = 10; i <= 100; i++) {
            arr.push(i * 100000);
        }
    } else {
        for (let i = 10; i <= 50; i++) {
            arr.push(i * 100000);
        }
    }
    return arr;
};

$('.payment').ionRangeSlider({
    values: [0, 1000],
    skin: "round",
    step: 1000,
    grid: false,
    postfix: " €",
    hide_min_max: true,
    force_edges: true,
});

let payment = $('.payment').data("ionRangeSlider");

$(".room-cost").ionRangeSlider({
    values: maxValue(true),
    step: 1000,
    skin: "round",
    grid: false,
    postfix: " €",
    hide_min_max: true,
    force_edges: true,
    onChange: function (slider) {
        let arr = maxValue(false);
        arr.unshift(0);
        if ($('.room-cost').val() > arr[arr.length-1]) {
            currentMax = arr.length;
        } else {
            currentMax = arr.indexOf(+$('.room-cost').val()) + 1;
        }
        arr.length = currentMax;
        payment.update({
            values: arr,
        });
    }
});


$(".term").ionRangeSlider({
    // type: "double",
    min: 1,
    max: 30,
    skin: "round",
    // from: 1000,
    // to: 1000000,
    grid: false,
    postfix: " лет",
    hide_min_max: true,
    force_edges: true,
});


// $(".price").ionRangeSlider({
//     type: "double",
//     min: 10000,
//     max: 300000000,
//     skin: "round",
//     // from: 1000,
//     // to: 1000000,
//     grid: false,
//     postfix: " €",
//     hide_min_max: true,
//     force_edges: true,
//     values_separator: "  ",
// });

var $range = $(".price"),
    $inputFrom = $(".price-from"),
    $inputTo = $(".price-to"),
    instance,
    min = 0,
    max = 10000000,
    from = 0,
    to = 0;
   

$range.ionRangeSlider({
	skin: "round",
    type: "double",
    min: min,
    max: max,
    // from: 200,
    // to: 800,
    onStart: updateInputs,
    onChange: updateInputs,
    grid: false,
    postfix: " €",
    hide_min_max: true,
    force_edges: true,
});
instance = $range.data(".price");

function updateInputs (data) {
	from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        to: val
    });
});


