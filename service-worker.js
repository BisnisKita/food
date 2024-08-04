self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/style.css',
                '/main.js',
                '/assets/css/bootstrap.min.css',
                '/assets/css/jquery.fancybox.min.css',
                '/assets/css/swiper-bundle.min.css',
                '/assets/images/blog/blog1.jpg',
                '/assets/images/blog/blog2.jpg',
                '/assets/images/blog/blog3.jpg',
                '/assets/images/brands/b1.png',
                '/assets/images/brands/b2.png',
                '/assets/images/brands/b3.png',
                '/assets/images/brands/b4.png',
                '/assets/images/brands/b5.png',
                '/assets/images/chef/c1.jpg',
                '/assets/images/chef/c2.jpg',
                '/assets/images/chef/c3.jpg',
                '/assets/images/chef/c4.jpg',
                '/assets/images/chef/c5.jpg',
                '/assets/images/dish/1.png',
                '/assets/images/dish/2.png',
                '/assets/images/dish/3.png',
                '/assets/images/dish/4.png',
                '/assets/images/dish/5.png',
                '/assets/images/dish/6.png',
                '/assets/images/testimonials/t1.jpg',
                '/assets/images/testimonials/t2.jpg',
                '/assets/images/testimonials/t3.jpg',
                '/assets/images/testimonials/t4.jpg',
                '/assets/images/about.jpg',
                '/assets/images/berry.png',
                '/assets/images/blog-pattern-bg.png',
                '/assets/images/bt1.jpg',
                '/assets/images/bt2.jpg',
                '/assets/images/bt3.jpg',
                '/assets/images/bt4.jpg',
                '/assets/images/faq-bg.png',
                '/assets/images/leaf.png',
                '/assets/images/loader.gif',
                '/assets/images/main-b.jpg',
                '/assets/images/mashroom.png',
                '/assets/images/menu-1.png',
                '/assets/images/menu-2.png',
                '/assets/images/menu-3.png',
                '/assets/images/menu-4.png',
                '/assets/images/menu-bg.png',
                '/assets/images/news.jpg',
                '/assets/images/pizza.png',
                '/assets/images/sushi.png',
                '/assets/images/table-leaves-shape.png',
                '/assets/images/testimonial-img.png',
                '/assets/images/title-shape.svg',
                '/assets/images/video.mp4',
                '/assets/js/bootstrap.min.js',
                '/assets/js/font-awesome.min.js',
                '/assets/js/gsap.min.js',
                '/assets/js/jquery-3.5.1.min.js',
                '/assets/js/jquery.fancybox.min.js',
                '/assets/js/jquery.mixitup.min.js',
                '/assets/js/parallax.min.js',
                '/assets/js/popper.min.js',
                '/assets/js/ScrollToPlugin.min.js',
                '/assets/js/ScrollTrigger.min.js',
                '/assets/js/smooth-scroll.js',
                '/assets/js/swiper-bundle.min.js'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});



