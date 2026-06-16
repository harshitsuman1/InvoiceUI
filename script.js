document.addEventListener('DOMContentLoaded', function () {
   fetch('/api/invoice')
    .then(resp => resp.json())
    .then(data => {
        const items = data.items || data.Items;

        let html = '<ul>';

        items.forEach(item => {
            html += `<li>${item.name || item.Name} - $${item.price || item.Price}</li>`;
        });

        html += '</ul>';

        document.getElementById('invoice-container').innerHTML = html;
        })
        .catch(err => console.error("Failed to load invoice:", err));
});

