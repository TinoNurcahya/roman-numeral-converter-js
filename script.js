const form = document.getElementById("form");
const input = document.getElementById("number");
const result = document.getElementById("output");

form.addEventListener("click", (e) => {
  e.preventDefault();

  const value = input.value.trim();

  // cek kosong
  if (value === "") {
    showMessage("Please enter a valid number");
    return;
  }

  const number = parseInt(value, 10);

  // cek NaN
  if (isNaN(number)) {
    showMessage("Please enter a valid number");
    return;
  }

  // cek range
  if (number < 1) {
    showMessage("Please enter a number greater than or equal to 1");
    return;
  }
  if (number > 3999) {
    showMessage("Please enter a number less than or equal to 3999");
    return;
  }

  // sukses → convert
  showMessage(convertToRoman(number));
});

// reset otomatis kalau user edit input
input.addEventListener("input", () => {
  result.classList.add("hidden");
  result.innerText = "";
});

// function tampil pesan
function showMessage(message) {
  result.innerText = message;
  result.classList.remove("hidden");
}

// konversi angka → roman
function convertToRoman(num) {
  const roman = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  let result = "";

  for (const [symbol, value] of roman) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}
