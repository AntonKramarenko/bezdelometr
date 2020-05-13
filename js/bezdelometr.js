const tapOnBtn = document.querySelector('.tap_btn');
let count = 0;

function add() {
    const resultTapNumber = document.querySelector('.tap_number');
    if (document.onclick = tapOnBtn) {
        count++;
        resultTapNumber.textContent = count;
    }
}

tapOnBtn.onclick = add;