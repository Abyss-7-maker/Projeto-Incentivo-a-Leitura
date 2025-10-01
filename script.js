// Mostra um alerta quando clica em um livro
const books = document.querySelectorAll('.book');

books.forEach(book => {
    book.addEventListener('click', () => {
        alert(`Você clicou em: ${book.querySelector('h2').innerText}`);
    });
});
