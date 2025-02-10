document.addEventListener("DOMContentLoaded", function () {
    const redSlider = document.getElementById("red");
    const greenSlider = document.getElementById("green");
    const blueSlider = document.getElementById("blue");

    const redInput = document.getElementById("redInput");
    const greenInput = document.getElementById("greenInput");
    const blueInput = document.getElementById("blueInput");

    const colorPicker = document.getElementById("colorPicker");
    const colorBox = document.getElementById("colorBox");
    const hexCode = document.getElementById("hexCode");
    const copyHexBtn = document.getElementById("copyHex");

    function updateColor() {
        let r = redSlider.value;
        let g = greenSlider.value;
        let b = blueSlider.value;

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;

        let color = `rgb(${r}, ${g}, ${b})`;
        colorBox.style.backgroundColor = color;

        let hex = `#${parseInt(r).toString(16).padStart(2, '0')}${parseInt(g).toString(16).padStart(2, '0')}${parseInt(b).toString(16).padStart(2, '0')}`.toUpperCase();
        hexCode.textContent = hex;
        colorPicker.value = hex;
    }

    function updateSliders() {
        let r = redInput.value;
        let g = greenInput.value;
        let b = blueInput.value;

        redSlider.value = r;
        greenSlider.value = g;
        blueSlider.value = b;

        updateColor();
    }

    function updateFromPicker() {
        let hex = colorPicker.value;
        hexCode.textContent = hex;
        colorBox.style.backgroundColor = hex;

        let r = parseInt(hex.substring(1, 3), 16);
        let g = parseInt(hex.substring(3, 5), 16);
        let b = parseInt(hex.substring(5, 7), 16);

        redSlider.value = r;
        greenSlider.value = g;
        blueSlider.value = b;

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;
    }

    function copyHexToClipboard() {
        navigator.clipboard.writeText(hexCode.textContent).then(() => {
            alert("Código HEX copiado: " + hexCode.textContent);
        });
    }

    redSlider.addEventListener("input", updateColor);
    greenSlider.addEventListener("input", updateColor);
    blueSlider.addEventListener("input", updateColor);

    redInput.addEventListener("input", updateSliders);
    greenInput.addEventListener("input", updateSliders);
    blueInput.addEventListener("input", updateSliders);

    colorPicker.addEventListener("input", updateFromPicker);
    copyHexBtn.addEventListener("click", copyHexToClipboard);
});
