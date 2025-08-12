function number_format(number, decimals, dec_point, thousands_sep) {
    number = (number + '').replace(',', '').replace(' ', '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function(n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
};

/**
 * @class chartJs
 * @description Representa um instancia de grafico utilizando Chart.js
 **/
class chartJs {
    targetCanvas;
    type;
    datasets;
    datasetLabels;

    constructor(targetCanvas, type, datasets, datasetLabels){
        this.targetCanvas = targetCanvas;
        this.type = type;
        this.datasets = datasets;
        this.datasetLabels = datasetLabels;
        this.render();
    }

    render() {
        const ctx = this.targetCanvas;

        new Chart(ctx, {
            type: this.type,
            data: {
                labels: [...this.datasetLabels],
                datasets: [...this.datasets]
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    datalabels: {
                        color: '#000',        // Cor do texto
                        anchor: 'end',        // Onde a label "ancora"
                        align: 'top',         // Alinhamento em relação ao ponto/barra
                        font: {
                            weight: 'bold'
                        },
                        formatter: (value) => number_format(value, 0, ',', '.') // Usa sua função
                    }
                },
                legend: {
                    position: 'bottom',
                    display: true
                },
                cutoutPercentage: 70
            },
            plugins: [ChartDataLabels] // Ativa o plugin
        });
    }
}