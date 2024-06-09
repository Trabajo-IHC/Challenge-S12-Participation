document.addEventListener('DOMContentLoaded', function() {
    const reportModal = document.getElementById('reportModal');
    const reportAreaButton = document.getElementById('reportAreaButton');
    const closeModalButton = document.getElementById('closeModal');
    const reportForm = document.getElementById('reportForm');

    reportAreaButton.addEventListener('click', function() {
        reportModal.style.display = 'flex';
    });

    closeModalButton.addEventListener('click', function() {
        reportModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == reportModal) {
            reportModal.style.display = 'none';
        }
    });

    reportForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const reportName = document.getElementById('reportName').value.trim();
        const reportComment = document.getElementById('reportComment').value.trim();
        const rating = document.querySelector('input[name="rating"]:checked').value;

        if (reportName === '' || reportComment === '') {
            alert('Por favor, llena todos los campos.');
            return;
        }

        const newComment = document.createElement('div');
        newComment.classList.add('comment');

        newComment.innerHTML = `
            <h3>${reportName}</h3>
            <p>${reportComment}</p>
            <div class="star-rating">
                ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}
            </div>
        `;

        document.querySelector('.comments-container').appendChild(newComment);
        reportModal.style.display = 'none';
        reportForm.reset();
    });
});
