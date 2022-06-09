let btn = document.querySelector(".submit-btn")
let inputs = document.querySelector("#grocery")
btn.addEventListener('click', () => {
    additems();


})

function additems() {
    if (!localStorage.getItem("items")) {
        var myobj = [];
        myobj.push(inputs.value)
        localStorage.setItem("items", JSON.stringify(myobj))
    } else {
        var inputobj = JSON.parse(localStorage.getItem("items"))
        inputobj.push(inputs.value);

        localStorage.setItem("items", JSON.stringify(inputobj))

    }

    displayitems();
}

displayitems();

function displayitems() {
    let arr = [];
    arr = JSON.parse(localStorage.getItem("items"))
    document.getElementById("additems").innerHTML = '';

    arr.forEach(element => {


        document.getElementById("additems").innerHTML += `<p class="title">${element}</p>
        <div class="btn-container">
         
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
        
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      `;

    });

    let dele = document.querySelectorAll(".delete-btn")

    dele.forEach((button) => {

        button.addEventListener("click", () => {

            var d = button.parentElement.previousSibling.previousSibling.textContent;

            var inputobj1 = JSON.parse(localStorage.getItem("items"))
            var displaydele = inputobj1.filter(y => y.trim().toLowerCase() != d.trim().toLowerCase())
            localStorage.setItem("items", JSON.stringify(displaydele))

            displayitems();




        })


    })

    let edits = document.querySelectorAll(".edit-btn")
    edits.forEach((ed) => {
        ed.addEventListener("click", () => {

            var a = ed.parentElement.previousSibling.previousSibling.textContent;

            document.getElementById("grocery").value = a;
            var inputobj2 = JSON.parse(localStorage.getItem("items"))




        })
    })
}