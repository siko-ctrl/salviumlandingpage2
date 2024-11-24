document.addEventListener('DOMContentLoaded', async function() {
    try {
        const response = await fetch('footer.html');
        const footerHtml = await response.text();
        
        // Create a temporary container
        const temp = document.createElement('div');
        temp.innerHTML = footerHtml;
        
        // Insert the footer before the closing body tag
        document.body.insertBefore(temp.firstChild, document.body.lastChild);
    } catch (error) {
        console.error('Error loading footer:', error);
    }
});
