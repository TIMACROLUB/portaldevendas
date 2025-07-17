function number_format(number, decimals, dec_point, thousands_sep) {
    // *     example: number_format(1234.56, 2, ',', ' ');
    // *     return: '1 234,56'
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
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
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
 * @property targetCanvas:
 * Elemento do DOM onde será renderizado o grafico
 * @property config: 
 * Configurações do grafico conforme documentação da lib Chart.js
 * @property data: 
 * Dados que serão exibidos no grafico
 * @property datasetLabels: 
 * Nome dos datasets, equivalente a série dos dados
 * @property dataLabels: 
 * Nome dos dados exibidos, aparecem ao passar o mouse sobre o grafico
**/
class chartJs {
    targetCanvas;
    type; 
    datasets;
    datasetLabels;

    constructor(targetCanvas, type, datasets, datasetLabels){
        this.targetCanvas = targetCanvas;
        this.type = type;
        this.data = datasets;
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
                tooltips: {
                backgroundColor: "rgb(255,255,255)",
                bodyFontColor: "#858796",
                borderColor: '#dddfeb',
                borderWidth: 1,
                xPadding: 15,
                yPadding: 15,
                displayColors: false,
                caretPadding: 10,
                },
                legend: {
                position:'bottom',
                display: true
                },
                cutoutPercentage: 70
            }
        });
    }
}