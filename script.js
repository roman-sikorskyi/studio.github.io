document.addEventListener('DOMContentLoaded', function() {
    const images = ['img/img1.jpg', 'img/img2.jpg', 'img/img3.jpg', 'img/img4.jpg'];
    let currentIndex = 0;
    const bigImage = document.getElementById('big-image');
    bigImage.style.backgroundImage = `url(${images[currentIndex]})`;


    function changeBigImage(index) {
        if (index >= 0 && index < images.length) {  
            currentIndex = index;
            bigImage.style.backgroundImage = `url(${images[currentIndex]})`;
            console.log(`Changing image to: ${images[currentIndex]}`);
        } 
    }
    function changeBigImageByDirection(direction) {
        if (direction === 'next') {
            currentIndex = (currentIndex + 1 + images.length) % images.length;
        } else if (direction === 'prev') {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
        }
        changeBigImage(currentIndex);
    }

    document.querySelectorAll('.grid_imgs div').forEach((item, index) => {
        item.addEventListener('click', function() {
            changeBigImage(index);  
        });
    });
    document.getElementById('prev').addEventListener('click', function() {
        console.log('Left arrow clicked');
        changeBigImageByDirection('prev');
    });

    document.getElementById('next').addEventListener('click', function() {
        console.log('Right arrow clicked');
        changeBigImageByDirection('next');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const clientsItems = document.querySelector('.clients_items');
    const navItems = document.querySelectorAll('.clients_navItem');

    navItems.forEach((navItem, index) => {
        navItem.addEventListener('click', function(event) {
            event.preventDefault();
            clientsItems.style.transform = `translateX(-${index * 100}%)`;
            navItems.forEach(item => item.classList.remove('active'));
            navItem.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('open-modal-btn');
    const closeModalBtn = document.querySelector('.close_btn');

    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const seeMoreBtn = document.getElementById('see-more-btn');
    const seeLessBtn = document.getElementById('see-less-btn');
    const blogItems = document.getElementById('blog-items');
    const blogSection = document.getElementById('blog');
    seeMoreBtn.addEventListener('click', function() {
        const newContent = `
            <div class="blog-item">
                <img src="img/blog3.jpg" alt="" class="item-img">
                <p class="item-text">
                    Exploring Landscape Photography: Tips and Tricks
                </p>
                <div class="item-footer">
                    <span class="item-comments">
                        <i class="fa-regular fa-comment" style="color: #fd5b4f;"></i>
                        20 Comments
                    </span>
                    <span class="item-date">September, 2020</span>
                </div>
            </div>
            <div class="blog-item">
                <img src="img/blog1.jpg" alt="" class="item-img">
                <p class="item-text">
                    How to Choose the Right Camera for Your Photography Needs
                </p>
                <div class="item-footer">
                    <span class="item-comments">
                        <i class="fa-regular fa-comment" style="color: #fd5b4f;"></i>
                        13 Comments
                    </span>
                    <span class="item-date">October, 2020</span>
                </div>
            </div>
            <div class="blog-item">
                <img src="img/blog2.jpg" alt="" class="item-img">
                <p class="item-text">
                    Understanding the Basics of Portrait Lighting
                </p>
                <div class="item-footer">
                    <span class="item-comments">
                        <i class="fa-regular fa-comment" style="color: #fd5b4f;"></i>
                        22 Comments
                    </span>
                    <span class="item-date">November, 2020</span>
                </div>
            </div>
        `;

        blogItems.insertAdjacentHTML('beforeend', newContent);
        blogSection.style.height = `1476px`;
        seeMoreBtn.style.display = 'none';
        seeLessBtn.style.display = 'block';
    });
    seeLessBtn.addEventListener('click', function() {
        const items = blogItems.querySelectorAll('.blog-item');
        items.forEach((item, index) => {
            if (index >= 3) item.remove(); 
        });
        blogSection.style.height = '';
        seeMoreBtn.style.display = 'block';
        seeLessBtn.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const nav = document.querySelector('.nav');

    burgerMenu.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});







