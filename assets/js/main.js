$(function(){
    $(".btn-menu").click(function(){
        $("nav").toggleClass("hide");
    });
});

function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) {
    try {
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}


var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["14.06", "17.06", "20.06", "26.06", "29.06", "02.07"],
        datasets: [{
            data: [7, 12, 3, 5, 2, 3],
            borderColor: [
                'rgba(255,255,255,1)',
                'rgba(255,255,255,1)',
                'rgba(255,255,255,1)',
                'rgba(255,255,255,1)',
                'rgba(255,255,255,1)',
                'rgba(255,255,255,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
               label: function(tooltipItem) {
                      return tooltipItem.yLabel;
               }
            }
        }
    }
});


