var ul = document.querySelector('ul');

//Add note
document.getElementById('add-btn').addEventListener('click', function (e) {
    e.preventDefault();
    var addInput = document.getElementById('add-input');
    if (addInput.value !== '') {
        var li = document.createElement('li'),
            firstPar = document.createElement('p'),
            secondPar = document.createElement('p'),
            firstIcon = document.createElement('i'),
            secondIcon = document.createElement('i'),
            input = document.createElement('input');

        firstIcon.className = 'fa fa-pencil-square-o';
        secondIcon.className = 'fa fa-times';
        input.className = 'edit-note';
        input.setAttribute('type', 'text');

        firstPar.textContent = addInput.value;

        secondPar.appendChild(firstIcon);
        secondPar.appendChild(secondIcon);

        li.appendChild(firstPar);
        li.appendChild(secondPar);
        li.appendChild(input);

        ul.appendChild(li);

        addInput.value = '';
    } else {
        alert('Please add note.');
    }
});

//Edit and Remove note
ul.addEventListener('click', function (e) {
    if (e.target.classList[1] === 'fa-pencil-square-o') {

        var parentPar = e.target.parentNode;
        parentPar.style.display = 'none';

        var note = parentPar.previousElementSibling;
        var input = parentPar.nextElementSibling;
        var submit = document.getElementById('edit-btn');

        input.style.display = 'block';
        submit.style.display = 'block';
        input.value = note.textContent;
        
        input.addEventListener('keypress', function (e) {
            if (e.keyCode === 13) {
                if(input.value !== ''){
                    note.textContent = input.value;
                    parentPar.style.display = 'block';
                    input.style.display = 'none';
                    submit.style.display = 'none';
                } else {
                    alert('Note cannot be empty');
                }
            } 
        });
        
        submit.addEventListener('click', function (e) {
            if (e.target) {
                if(input.value !== ''){
                    note.textContent = input.value;
                    parentPar.style.display = 'block';
                    input.style.display = 'none';
                    submit.style.display = 'none';
                } else {
                    alert('Note cannot be empty');
                }
            }
        });
    } else if(e.target.classList[1] === 'fa-times'){
        var list = e.target.parentNode.parentNode;
//        alert('Are you sure?');
        list.parentNode.removeChild(list);
    }
});

//Hide notes
var hideNotes = document.getElementById('hide');

hideNotes.addEventListener('click', function(){
    var label = document.querySelector('label');
    
    if(hideNotes.checked) {
        ul.style.display = 'none';
        label.textContent = 'Show notes';
    } else {
        ul.style.display = 'block';
        label.textContent = 'Hide notes';
    }
});

//Filter notes
var filterNotes = document.querySelector('#search-note input');

filterNotes.addEventListener('keyup', function(e){
    var filterChar = e.target.value.toUpperCase();
    var notes = ul.getElementsByTagName('li');
    
    Array.from(notes).forEach(function(note){
        var noteText = note.firstElementChild.textContent;
        if(noteText.toUpperCase().indexOf(filterChar) !== -1) {
            note.style.display = 'block';
        } else {
            note.style.display = 'none';
//            ul.textContent = 'Notes not found';
        }
    });
});
