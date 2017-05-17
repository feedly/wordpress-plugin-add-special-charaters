// Get arguments passed to dialog.
var passed_arguments = top.tinymce.activeEditor.windowManager.getParams();
var jq_context = document.getElementsByTagName("body")[0];
var searchField = document.getElementById('shortcode_search');
var characters = document.querySelectorAll('.display-icon');
var searchTerm = '';
var selectedChara = null;

characters.forEach(function(character) {
  character.addEventListener('click', function(e) {
    removeActiveClass();
    selectedChara = character.querySelector('i').innerHTML;
    character.classList.toggle('active');
  });
});

function removeActiveClass() {
  selectedChara = null;
  characters.forEach(function(character) {
    character.classList.remove('active');
  });
}

searchField.addEventListener('input', function(e) {
  var value = searchField.value;
  displayChara(value);
});

function displayChara(value) {
  characters.forEach(function(character) {
    var name = character.querySelector('i').dataset.name;

    if (name.indexOf(value) == -1) {
      character.style.display = 'none';
    } else {
      character.style.display = 'inline-block';
    }
  });
}

document.getElementById('submit-action').addEventListener('click', function(e) {
  event.preventDefault();
  var shortcode = selectedChara;
  passed_arguments.editor.selection.setContent(shortcode);
  passed_arguments.editor.windowManager.close();
});

document.getElementById('cancel-action').addEventListener('click', function() {
  passed_arguments.editor.windowManager.close();
});
