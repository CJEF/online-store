var rangeSlider = document.querySelector("#range-slider");
if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      range: {
        'min': 500,
        'max': 99999,
      },

      step: 1,

      // Handles start at ...
      start: [500, 99999],

      // Display colored bars between handles
      connect: true,
    });
}

const input0 = document.querySelector("#input-0");
const input1 = document.querySelector("#input-1");
const inputs = [input0, input1]

rangeSlider.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = Math.round(values[handle])
})

const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    rangeSlider.noUiSlider.set(arr);
}

inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
        setRangeSlider(index, e.currentTarget.value);
    });
});
