document.addEventListener('DOMContentLoaded', () => {
    // Curtir
    document.querySelectorAll('.like-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const bookId = btn.getAttribute('data-book');
            const countSpan = document.getElementById(`like-count-${bookId}`);
            let count = parseInt(countSpan.textContent) || 0;
            count++;
            countSpan.textContent = `${count} curtidas`;
        });
    });

    // Favoritar
    document.querySelectorAll('.fav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('favorited');
            if (btn.classList.contains('favorited')) {
                btn.textContent = '★ Favorito!';
            } else {
                btn.textContent = 'Favoritar';
            }
        });
    });

    // Compartilhar
    document.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const url = window.location.href + '#' + btn.getAttribute('data-book');
            if (navigator.share) {
                navigator.share({
                    title: 'Veja este livro infantil!',
                    url: url
                });
            } else {
                navigator.clipboard.writeText(url);
                alert('Link copiado para a área de transferência!');
            }
        });
    });
});
