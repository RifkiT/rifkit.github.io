// membuat storage key
storageKey = 'TODOLIST'

// ambil btn add
const btnAdd = document.querySelector('.add')

// membuat even listener btn
btnAdd.addEventListener('click', function () {
    // ambil value atau nilai pada form input
    const list = document.querySelector('.newList').value;

    // jika input kosong
    if (list == '') {
        return alert('Masukkan List!')
    }

    // input ke dalam object
    const addNewList = {
        id: +new Date(),
        task: list
    }

    // passing data ke function saveList
    saveList(addNewList)

    // reload page
    location.reload(true)
})

const inputNewList = document.querySelector('.newList')
inputNewList.addEventListener('keypress', function (e) {

    if (e.key == 'Enter') {
        // ambil value atau nilai pada form input
        const list = document.querySelector('.newList').value;

        // jika input kosong
        if (list == '') {
            return alert('Masukkan List!')
        }

        // input ke dalam object
        const addNewList = {
            id: +new Date(),
            task: list
        }

        // passing data ke function saveList
        saveList(addNewList)

        // reload page
        location.reload(true)
    }
})

function saveList(addNewList) {
    // buat array kosong
    let a = []

    // jika browser tidak support storage
    if (typeof Storage == undefined) {
        // buat notif
        return alert('Browser tidak didukung!')
    }

    // jika localStorage kosong
    if (localStorage.getItem(storageKey) === null) {
        // buat localStorage
        localStorage.setItem(storageKey, JSON.stringify(a))
    }

    // ambil data dari localStorage, masukkan kedalam array
    a = JSON.parse(localStorage.getItem(storageKey))

    // masukkan todolist baru ke dalam array
    a.push(addNewList)

    // masukkan array ke dalam localStorage
    localStorage.setItem(storageKey, JSON.stringify(a))
}

function showTodoList() {
    // tampung data todolist dari localStorage ke dalam array
    const arr = JSON.parse(localStorage.getItem(storageKey))

    // looping data array
    for (myList of arr) {
        // passing data ke function createdCard
        createCard(myList)
    }

    const btnCheck = document.querySelectorAll('.checkList')
    checkList(btnCheck)
}

function createCard(myList) {
    const display = document.querySelector('.taskList')
    const card = document.createElement('div')
    card.className = "card"
    card.innerHTML = "<p>" + myList.task + "</p>"
    card.innerHTML += '<button class="checkList" value=' + myList.id + ' style="--color: #25EE80;"><ion-icon name="checkmark-outline"></ion-icon></button>'
    // card.innerHTML += '<button class="deltList" value='+myList.id+' style="--color: #E01E37;"><ion-icon name="close-outline"></ion-icon></button>'

    display.append(card)
}

function checkList(btnCheck) {
    const myArray = JSON.parse(localStorage.getItem(storageKey))

    for (let i = 0; i < btnCheck.length; i++) {
        btnCheck[i].addEventListener('click', function () {
            const thisId = btnCheck[i].value
            const index = myArray.findIndex(x => x.id == thisId)
            myArray.splice(index, 1)

            localStorage.setItem(storageKey, JSON.stringify(myArray))
            // sweetalert
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'List sudah diselesaikan!',
                showConfirmButton: false,
                timer: 1500,
            }).then(function () {
                location.reload(true)
            })
        })
    }
}

window.addEventListener('load', function () {
    showTodoList()
})