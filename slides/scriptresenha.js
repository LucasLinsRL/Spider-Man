function submitReview() {
    const spider = document.getElementById("spider-input").value;
    const variantes = document.getElementById("variantes-input").value;
    const filme = document.getElementById("filme-input").value;
    const rating = document.getElementById("rating-input").value;
    const review = document.getElementById("review-input").value;

    if (spider && variantes && filme && rating && review) {
        const reviewList = document.getElementById("reviews-list");

        // Cria um novo item de resenha
        const reviewItem = document.createElement("li");
        reviewItem.className = "review-item";

        // Exibe o spider, variante, filme, classificação e resenha
        reviewItem.innerHTML = `
            <p><strong>Usuário:</strong> ${spider}</p>
            <p><strong>Variantes:</strong> ${variantes}</p>
            <p><strong>Filme:</strong> ${filme}</p>
            <p><strong>Classificação:</strong> <span class="review-rating">${rating}</span></p>
            <p><strong>Resenha:</strong> ${review}</p>
        `;

        // Adiciona a resenha à lista
        reviewList.appendChild(reviewItem);

        // Limpa os campos do formulário
        document.getElementById("spider-input").value = "";
        document.getElementById("variantes-input").value = "";
        document.getElementById("filme-input").value = "";
        document.getElementById("rating-input").value = "";
        document.getElementById("review-input").value = "";

        // Exibe uma mensagem de sucesso
        alert("Sua resenha foi postada!");

    } else {
        alert("Por favor, preencha todos os campos.");
    }
}