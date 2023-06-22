let radio1 = document.querySelector('.ten');
let radio2 = document.querySelector('.seven');
let radio3 = document.querySelector('.five');
let button = document.querySelector('button');
button.onclick = () => {
    document.getElementsByName('Figure')
        .forEach(radio => {
            if (radio.checked) {
                console.log(radio.value);
                if(document.getElementById('ten').checked) {
                    console.log("Not Right");
                }
                if(document.getElementById('seven').checked) {
                    console.log("Right");
                }
                if(document.getElementById('five').checked) {
                    console.log("Not Right");
                }
            }
        });
}
