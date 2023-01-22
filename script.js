const form = document.getElementById('form');
const addButton = document.getElementById('add-button');
const cancelButton = document.getElementById('cancel-button');
const saveButton = document.getElementById('save-button');
const tableBody = document.getElementById('table-body');
const formOverlay = document.getElementById('form-overlay');
let data = JSON.parse(localStorage.getItem('data')) || [];
let selectedIndex;