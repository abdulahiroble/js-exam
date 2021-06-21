// P21

const fruits = ["apple", "orange", "cherry", "strawberry"]

let dropdown = document.getElementById('ddFruit');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose fruit';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

for (let i = 0; i < fruits.length; i++) {
    option = document.createElement('option');
    option.text = fruits[i];
    option.value = fruits[i];
    dropdown.add(option)

    dropdown.addEventListener("click", function (e) {

        console.log(e.target.value)
    });
}

<button>hej</button>