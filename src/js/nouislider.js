var range = document.getElementById("range-slider");
if (range) {
    noUiSlider.create(range, {
      range: {
        'min': [500],
        'max': [99999],
      },

      step: 1,

      // Handles start at ...
      start: [500, 99999],

      // Display colored bars between handles
      connect: true,
    });
}

const input0 = document.getElementById("input-0")
const input1 = document.getElementById("input-1")
const inputs = [input0, input1]

range.noUiSlider.on('update', () => {
    inputs[handle].value = Math.round(values[handle])
})

const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    range.noUiSlider.set(arr);
}

inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
        console.log(index);
        setRangeSlider(index, e.currentTarger.value);
    })
})
