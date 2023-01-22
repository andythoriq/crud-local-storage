const form = document.getElementById('form');
const addButton = document.getElementById('add-button');
const cancelButton = document.getElementById('cancel-button');
const saveButton = document.getElementById('save-button');
const tableBody = document.getElementById('table-body');
const formOverlay = document.getElementById('form-overlay');
let data = JSON.parse(localStorage.getItem('data')) || [];
let selectedIndex;
// menampilkan data di tabel
const renderData = _ => {
    tableBody.innerHTML = '';
    data.forEach((item, i) => {
        const tr = document.createElement('tr');
        const nameTd = document.createElement('td');
        const ageTd = document.createElement('td');
        const emailTd = document.createElement('td');
        const actionsTd = document.createElement('td');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');
        nameTd.textContent = item.name;
        ageTd.textContent = item.age;
        emailTd.textContent = item.email;
        editButton.textContent = 'Edit';
        deleteButton.textContent = 'Delete';
        // saat edit button diclick
        editButton.onclick = _ => {
            selectedIndex = i;
            formOverlay.style.display = 'flex';
            document.getElementById('name').value = item.name;
            document.getElementById('age').value = item.age;
            document.getElementById('email').value = item.email;
        }
        // saat delete button diclick
        deleteButton.onclick = _ => {
            data.splice(i, 1);
            localStorage.setItem('data', JSON.stringify(data));
            renderData();
        }
        actionsTd.appendChild(editButton);
        actionsTd.appendChild(deleteButton);
        tr.appendChild(nameTd);
        tr.appendChild(ageTd);
        tr.appendChild(emailTd);
        tr.appendChild(actionsTd);
        tableBody.appendChild(tr);
    });
}
// menambahkan data
const addData = _ => {
    formOverlay.style.display = 'flex';
    selectedIndex = null;
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('email').value = '';
}
// menyimpan data
const saveData = event => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    if (selectedIndex == null) {
        data.push({ name, age, email });
    } else {
        data[ selectedIndex ] = { name, age, email };
    }
    localStorage.setItem('data', JSON.stringify(data));
    formOverlay.style.display = 'none';
    renderData();
}
// batalkan perubahan data
const cancelData = _ => {
    formOverlay.style.display = 'none';
}
renderData();
addButton.onclick = addData;
saveButton.onclick = saveData;
cancelButton.onclick = cancelData;