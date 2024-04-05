const InputCantidad = document.querySelector('#amount').value;
const  deSelect = document.querySelector('#from').value;
const aSelect = document.querySelector('#to').value;
const resultado = document.querySelector('#result-container');

const conversion = {
    usd: {
        eur: 0.92,
        gbp: 0.79
    },
    eur: {
        usd: 1.8,
        gbp: 0.86
    },
    gbp: {
        usd: 1.26,
        eur: 1.17
    }
};

function convertirDivisa() {
    const cantidad = parseFloat(InputCantidad.value);
    const deDivisa = deSelect.value;
    const aDivisa = aSelect.value;

    if (isNaN(cantidad)) {
        resultContainer.textContent = 'Ingrese una cantidad válida.';
    } else {
        const tarifa = conversion[deDivisa][aDivisa];
        const convertirCantidad = (cantidad * tarifa).toFixed(2);
        resultContainer.textContent = `${cantidad} ${deDivisa.toUpperCase()} = ${convertirCantidad} ${aDivisa.toUpperCase()}`;
    }
}

InputCantidad.addEventListener('change', convertirDivisa);
deSelect.addEventListener('change', convertirDivisa);
aSelect.addEventListener('change', convertirDivisa);
