document.querySelectorAll('.verb').forEach(verb => {
    verb.addEventListener('mouseenter', () => {
        verb.style.color = '#FFD700'; // Change color on hover
    });
    verb.addEventListener('mouseleave', () => {
        verb.style.color = '#00FF00'; // Change back to original color
    });
});

const menu = document.getElementById('menu');
const popup = document.getElementById('popup');
const savedPhrases = document.getElementById('saved-phrases');

menu.addEventListener('click', () => {
    popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
});

let selectedText = '';
let selectionRange = null;
let saveButton = null;

document.addEventListener('mouseup', (e) => {
    const selection = window.getSelection();
    if (selection.toString().length > 0) {
        selectedText = selection.toString();
        selectionRange = selection.getRangeAt(0);

        if (saveButton) {
            saveButton.remove();
        }

        saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.style.position = 'absolute';
        saveButton.style.left = `${e.pageX}px`;
        saveButton.style.top = `${e.pageY}px`;
        document.body.appendChild(saveButton);

        saveButton.addEventListener('click', () => {
            const span = document.createElement('span');
            span.className = 'highlight';
            span.textContent = selectedText;
            selectionRange.deleteContents();
            selectionRange.insertNode(span);

            const phraseItem = document.createElement('div');
            phraseItem.className = 'popup-item';
            phraseItem.textContent = selectedText;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            phraseItem.appendChild(deleteButton);
            savedPhrases.appendChild(phraseItem);

            deleteButton.addEventListener('click', () => {
                savedPhrases.removeChild(phraseItem);
                span.replaceWith(document.createTextNode(span.textContent));
            });

            document.body.removeChild(saveButton);
            saveButton = null;
            selectedText = '';
        });
    }
});

document.addEventListener('click', (event) => {
    if (saveButton && !saveButton.contains(event.target) && !popup.contains(event.target)) {
        document.body.removeChild(saveButton);
        saveButton = null;
        selectedText = '';
        window.getSelection().removeAllRanges();
    }

    
});




