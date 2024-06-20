
document.addEventListener("DOMContentLoaded", function(event) {
    // Function to toggle between light and dark mode
    // document.getElementById('toggleTheme').addEventListener('change', function() {
    //     document.body.classList.toggle('dark-mode');
    // });
    
    // Function to fetch and display blog posts from localStorage
    function displayBlogPosts() {
        const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        const postsList = document.getElementById('postsList');
        
        if (posts.length === 0) {
            postsList.innerHTML = '<p>No blog posts available.</p>';
        } else {
            postsList.innerHTML = ''; // Clear previous content
            
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>By ${post.username}</p>
                    <p>${post.content}</p>
                `;
                postsList.appendChild(postElement);
            });
        }
    }
    
    // Call the function to display blog posts when the page loads
    displayBlogPosts();
    });