document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('blogForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Fetch form values
        const username = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        
        // Basic form validation
        if (username.trim() === '' || title.trim() === '' || content.trim() === '') {
            document.getElementById('formMessage').classList.remove('hidden');
            return;
        }
        
        // Store blog post data in localStorage
        const postData = {
            username: username,
            title: title,
            content: content
        };
        let posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        posts.push(postData);
        localStorage.setItem('blogPosts', JSON.stringify(posts));
        
        // Redirect to posts page
        window.location.href = 'posts.html';
    });
});
