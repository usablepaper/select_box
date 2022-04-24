const openButton = document.querySelector(".select-button");
const listBox = document.querySelectorAll(".text-ellipsis");
const selectButton = document.querySelector(".select-button");

// for each에서의 약속
// for each는 함수를 매개변수로 가진다.(함수가 받는 값을 매개변수라 한다.)이 매개변수는 차례대로 value, key, parent값이다.
listBox.forEach(function (list, index) {
    if (index !== 0) {
        list.addEventListener("click", () => {
            selectButton.textContent = list.textContent;
            openButton.classList.remove("on");
        });
    }
});

// for (let i = 1; i < listBox.length; i++) {
//     listBox[i].addEventListener("click", () => {
//         selectButton.textContent = listBox[i].textContent;
//         openButton.classList.remove("on");
//     });
// }

function selectOpen() {
    openButton.classList.toggle("on");
}

openButton.addEventListener("click", selectOpen);
