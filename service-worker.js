self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache').then((cache) => {
            return cache.addAll([
                '/food/',
                '/food/index.html',
                '/food/style.css',
                '/food/main.js',
                '/food/assets/css/bootstrap.min.css',
                '/food/assets/css/jquery.fancybox.min.css',
                '/food/assets/css/swiper-bundle.min.css',
                '/food/assets/images/blog/blog1.jpg',
                '/food/assets/images/blog/blog2.jpg',
                '/food/assets/images/blog/blog3.jpg',
                '/food/assets/images/brands/b1.png',
                '/food/assets/images/brands/b2.png',
                '/food/assets/images/brands/b3.png',
                '/food/assets/images/brands/b4.png',
                '/food/assets/images/brands/b5.png',
                '/food/assets/images/chef/c1.jpg',
                '/food/assets/images/chef/c2.jpg',
                '/food/assets/images/chef/c3.jpg',
                '/food/assets/images/chef/c4.jpg',
                '/food/assets/images/chef/c5.jpg',
                '/food/assets/images/dish/1.png',
                '/food/assets/images/dish/2.png',
                '/food/assets/images/dish/3.png',
                '/food/assets/images/dish/4.png',
                '/food/assets/images/dish/5.png',
                '/food/assets/images/dish/6.png',
                '/food/assets/images/testimonials/t1.jpg',
                '/food/assets/images/testimonials/t2.jpg',
                '/food/assets/images/testimonials/t3.jpg',
                '/food/assets/images/testimonials/t4.jpg',
                '/food/assets/images/about.jpg',
                '/food/assets/images/berry.png',
                '/food/assets/images/blog-pattern-bg.png',
                '/food/assets/images/bt1.jpg',
                '/food/assets/images/bt2.jpg',
                '/food/assets/images/bt3.jpg',
                '/food/assets/images/bt4.jpg',
                '/food/assets/images/faq-bg.png',
                '/food/assets/images/leaf.png',
                '/food/assets/images/loader.gif',
                '/food/assets/images/main-b.jpg',
                '/food/assets/images/mashroom.png',
                '/food/assets/images/menu-1.png',
                '/food/assets/images/menu-2.png',
                '/food/assets/images/menu-3.png',
                '/food/assets/images/menu-4.png',
                '/food/assets/images/menu-bg.png',
                '/food/assets/images/news.jpg',
                '/food/assets/images/pizza.png',
                '/food/assets/images/sushi.png',
                '/food/assets/images/table-leaves-shape.png',
                '/food/assets/images/testimonial-img.png',
                '/food/assets/images/title-shape.svg',
                '/food/assets/images/video.mp4',
                '/food/assets/js/bootstrap.min.js',
                '/food/assets/js/font-awesome.min.js',
                '/food/assets/js/gsap.min.js',
                '/food/assets/js/jquery-3.5.1.min.js',
                '/food/assets/js/jquery.fancybox.min.js',
                '/food/assets/js/jquery.mixitup.min.js',
                '/food/assets/js/parallax.min.js',
                '/food/assets/js/popper.min.js',
                '/food/assets/js/ScrollToPlugin.min.js',
                '/food/assets/js/ScrollTrigger.min.js',
                '/food/assets/js/smooth-scroll.js',
                '/food/assets/js/swiper-bundle.min.js'
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



