
const precioInicial = 400000
let cantidad = 0;
let valorTotal = 0;

    const cantidadDisplay = document.getElementById('cantidad');
    const incrementButton = document.getElementById('incrementButton');
    const disminuirButton = document.getElementById('disminuirButton');
    const valorTotalDisplay = document.getElementById('valorTotal');

    function Total() {
        valorTotal = cantidad * precioInicial;
        valorTotalDisplay.textContent = valorTotal.toFixed(2);
    }
    incrementButton.addEventListener('click', () => {
        cantidad ++;
        cantidadDisplay.textContent = cantidad;
        Total();
    });

    disminuirButton.addEventListener('click', () => {
        if (cantidad > 0) {
            cantidad--;
            cantidadDisplay.textContent=cantidad;
            Total();
        }
    });

