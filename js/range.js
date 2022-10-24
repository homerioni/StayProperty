function mortgageMaxValue (max, min = 0) {
    let arr = [];
    for (let i = 1; i <= 100; i++) {
        if (i * 1000 <= max && i * 1000 >= min) {
            arr.push(i * 1000);
        }
    }
    for (let i = 10; i <= 100; i++) {
        if (i * 10000 <= max && i * 10000 >= min) {
            arr.push(i * 10000);
        }
    }
    for (let i = 10; i <= 100; i++) {
        if (i * 100000 <= max && i * 100000 >= min) {
            arr.push(i * 100000);
        }
    }
    return arr;
};

function getPriceMortgage() {
    let roomCost = $('.room-cost').val(),
        payment = $('.payment').val(),
        year = $('.term').val();

    return Math.trunc((roomCost - payment) / (year * 12)).toLocaleString();
}

$('.payment').ionRangeSlider({
    values: [0],
    skin: "round",
    step: 1000,
    grid: false,
    postfix: " €",
    hide_min_max: true,
    force_edges: true,
    onChange: function () {
        $('.mortgage__price').html(
            '<span>от </span>' +
            '<span id="mortgage-price">' + getPriceMortgage() + '</span>' +
            '<sup>€</sup>'
        );
    },
});

let payment = $('.payment').data("ionRangeSlider");

$(".room-cost").ionRangeSlider({
    values: mortgageMaxValue(1000000),
    step: 1000,
    skin: "round",
    grid: false,
    postfix: " €",
    hide_min_max: true,
    force_edges: true,
    onChange: function (slider) {
        let maxValue = slider.from_value/2;
        let arr = mortgageMaxValue(maxValue);
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
        $('.mortgage__price').html(
            '<span>от </span>' +
            '<span id="mortgage-price">' + getPriceMortgage() + '</span>' +
            '<sup>€</sup>'
        );
    }
});

let roomCost = $('.room-cost').data("ionRangeSlider");

roomCost.update({
    values: mortgageMaxValue(1000000, 1000),
});


$(".term").ionRangeSlider({
    // type: "double",
    min: 1,
    max: 5,
    skin: "round",
    // from: 1000,
    // to: 1000000,
    grid: false,
    postfix: " лет",
    hide_min_max: true,
    force_edges: true,
    onChange: function () {
        $('.mortgage__price').html(
            '<span>от </span>' +
            '<span id="mortgage-price">' + getPriceMortgage() + '</span>' +
            '<sup>€</sup>'
        );
    },
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

$('.mortgage__price').html(
    '<span>от </span>' +
    '<span id="mortgage-price">' + getPriceMortgage() + '</span>' +
    '<sup>€</sup>'
);
