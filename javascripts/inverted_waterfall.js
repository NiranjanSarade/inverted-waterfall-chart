$.fn.invertedWaterfallChart = function(options) {
    return new Highcharts.Chart({
        chart: {
            renderTo: 'container',
            defaultSeriesType: 'bar',
            borderWidth: 0,
            borderColor: '#12A2E9',
            borderRadius: 2,
            spacingTop: 0,
            backgroundColor: '#f2f2f2',
            Color: '#000',
            margin: [6, 50, 13, 120]
        },
        title: {
            text: 'Savings'
        },
        legend: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: options.categories,
            title: {
                text: null
            },
            labels: {
                style: {
                    fontFamily: 'arial, helvetica, sans-serif',
                    fontWeight: 'bold',
                    fontSize: '11px',
                    width: '120px'
                }
            },
            lineColor: 'white',
            minorTickColor: '#fff'
        },
        yAxis: {
            min: options.min,
            title: {
                text: null
            },
            gridLineColor: '#fff',
            labels: {
                enabled: false
            },
            max: options.max,
            plotLines: [{
                color: '#35A654',
                width: 2,
                value: 0
            }]
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true,
                    x: 5000,
                    y: 4,
                    align: 'left',
                    style: {
                        fontFamily: 'arial, helvetica, sans-serif',
                        fontWeight: 'bold',
                        fontSize: '0',
                        fontColor: '#505050'
                    }                    
                },
                enableMouseTracking: false,
                pointPadding: 0
            }
        },
        series: [{
            animation: false,
            name: 'savings',
            groupPadding: 0.2,
            data: options.data,
            borderColor: 'white',
            color: '#87CEEB',
            dataLabels: {
                color: 'black',
                formatter: function() {
                    return this.point.label;
                }
            }
        }]
    },
    function(chart) {
        $.each(chart.series[0].data,
        function(i, point) {
            chart.renderer.text(point.label, chart.chartWidth - 45, 5 + chart.plotHeight + chart.plotTop - point.plotX).css({
                fontFamily: 'arial, helvetica, sans-serif',
                fontWeight: 'bold',
                fontSize: '0.8em',
                fontColor: '#505050'
            }).add();
        });
    });
};