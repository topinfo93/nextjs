function homeAnimation() {
    if (typeof ScrollMagic !== "undefined" && typeof TimelineMax !== "undefined" && typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        document.body.classList.add('gsap-loaded');

        // step 1 
        let controller = new ScrollMagic.Controller();
        let scene;
        controller = new ScrollMagic.Controller();
        var tl = new TimelineMax({
            onUpdate: updatePercentage,
        });
        tl.fromTo('.big-cirle', 2, { y: '0', opacity: 1 }, { y: '0px', opacity: 1 });
        tl.fromTo('.content-awards-home', 2, { opacity: 1 }, { opacity: 0 });

        scene = null;

        scene = new ScrollMagic.Scene({
            triggerElement: ".section-animation",
            triggerHook: "onLeave",
            duration: "140px",
            offset: '-700',
            reverse: true
        }).setTween(tl).addTo(controller);

        function updatePercentage() {
            if (tl.progress() * 100 > 50) {
                gsap.to('.big-circle .video-circle', { opacity: 1, duration: 0 });
            }
        }

        // step 2
        const video = document.querySelector(".video-circle");
        if (video) {
            gsap.registerPlugin(ScrollTrigger);
            let tls = gsap.timeline({
                defaults: { duration: 600 },
                scrollTrigger: {
                    trigger: ".intro-content",
                    scrub: true,
                    start: "-200",
                    end: "+=240",
                    markers: false,
                    reverse: true,
                    onUpdate: (self) => {
                        if (self.progress > 0.8) {
                            let video = document.querySelector(".video-circle");
                            video.play();
                        }
                    },
                },
            });
            tls.fromTo('.section-intro-two',
                {
                    borderTopLeftRadius: '50vw',
                    borderTopRightRadius: '50vw',
                },
                {
                    borderTopLeftRadius: '50vw',
                    borderTopRightRadius: '50vw',
                    onComplete: function () {
                        // document.querySelector('body').addClass('dark-mode');
                    },
                    onReverseComplete: function () {
                        // document.querySelector('body').removeClass('dark-mode');
                    },
                    onCompleteParams: ['scene']
                },
            )
        }

        //step 3
        if (video) {

            let timelines;
            timelines = gsap.timeline({
                scrollTrigger: {
                    trigger: ".big-cirle",
                    start: "top top",
                    end: "4400",
                    markers: false,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    pin: true,
                },

            });
            let src = video.currentSrc || video.src;

            let leght_video = window.innerHeight;

            gsap.registerPlugin(ScrollTrigger);
            let medium_tm = anime.timeline({ autoplay: false });

            controller = new ScrollMagic.Controller();

            var y = (window.innerHeight - 520) * 0.5 - 100;



            timelines.to('.big-cirle',
                {
                    scale: '1',
                    onComplete: resets(),
                    onCompleteParams: ['scene']
                },

            )
            timelines.fromTo('.big-cirle',
                {
                    width: '100vw',
                    scale: '1',
                },
                {
                    background: 'black',
                    scale: '1',
                },

            )
            function resets() {
                Array.from(document.querySelectorAll(".image-galleries")).forEach(e => e.style.marginTop = 0)
            }
            timelines.fromTo('.video-circle', 1,
                {
                    width: '100vw',
                    height: '100vh',
                    marginTop: '0px',
                    duration: 1,
                },
                {
                    duration: 1,
                    background: 'black',
                    marginTop: y,
                    height: '520px',
                    width: '900px',
                },
            )


            timelines.fromTo('.text-below-video-scale',

                {
                    autoAlpha: 0,
                },
                {
                    autoAlpha: 1,
                    onComplete: function () {
                        document.querySelector('.big-cirle.section-animation').classList.add('add-transition');
                    },
                    onReverseComplete: function () {
                        document.querySelector('.big-cirle.section-animation').classList.remove('add-transition');
                    },
                }
            )

            timelines.fromTo('.image-galleries',
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                },
                '-=0.5'
            )

            const imageGalleries = document.querySelector('.image-galleries');
            const calculatedHeight = imageGalleries ? imageGalleries.offsetHeight * -1 - 170 : 0;



            timelines.to('.image-galleries', 3,
                {
                    duration: 5,
                    translateY: calculatedHeight,
                    display: 'block',
                    onComplete: function () {
                        document.querySelector('.big-cirle.section-animation').classList.remove('end-animation');
                    },
                    onReverseComplete: function () {
                        document.querySelector('.big-cirle.section-animation').classList.remove('end-animation');
                    },
                },
            )
            timelines.to('.image-galleries', 1,
                {
                    onComplete: function () {
                        document.querySelector('.big-cirle.section-animation').classList.add('end-animation');
                    },
                    onReverseComplete: function () {
                        document.querySelector('.big-cirle.section-animation').classList.remove('end-animation');
                    },
                },
            )
            timelines.fromTo('.video-circle',
                {
                    width: '900px',
                    height: '520px',
                    zIndex: 0,
                },
                {
                    zIndex: 1,
                    marginTop: '0px',
                    width: '100vw',
                    height: '100vh',
                    duration: 0.3,
                }, "+=1"
            )
            timelines.to('.video-circle',
                {
                    duration: 3,
                    opacity: 1,
                },
                {
                    duration: 3,
                    opacity: 1,
                }
            )
            Array.from(document.querySelectorAll(".section-intro .big-cirle")).forEach(e => e.style.height = 'auto')
        }


        // step 4
        const jsonLottie = './animation-full.json';
        let txt = anime.timeline({ autoplay: false });
        let lottieOneTl;
        let lottieFrame1;
        let lottieAnim1;
        lottieFrame1 = { frame: 0 }
        lottieAnim1 = lottie.loadAnimation({
            container: document.querySelector("#animationWindow"),
            renderer: "svg",
            loop: false,
            autoplay: false,
            path: jsonLottie,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        });

        lottieAnim1.addEventListener("DOMLoaded", function () {
            lottieOneTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".lottie-section",
                    start: "top top",
                    end: "6000",
                    markers: false,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    pin: true,
                    onUpdate: (self) => {

                        if (self.progress > 0) {
                            const tlp = self.progress * 100;

                            if (tlp < 35) {
                                document.querySelector('.txt-lottie-section .item-0').style.opacity = 1;
                                document.querySelector('.txt-lottie-section .item-0').style.zIndex = '1';
                                document.querySelector('.txt-lottie-section .item-0').style.transform = `translateY(${tlp * 3 * -1}px)`;
                                document.querySelector('.txt-lottie-section .item-1').style.opacity = 0;
                                document.querySelector('.txt-lottie-section .item-1').style.zIndex = '-1';
                                document.querySelector('.txt-lottie-section .item-2').style.opacity = 0;
                                document.querySelector('.txt-lottie-section .item-2').style.zIndex = '-1';
                            } else if (tlp > 36 && tlp < 70) {
                                document.querySelector('.txt-lottie-section .item-0').style.opacity = 0;
                                document.querySelector('.txt-lottie-section .item-0').style.zIndex = '-1';
                                document.querySelector('.txt-lottie-section .item-1').style.opacity = 1;
                                document.querySelector('.txt-lottie-section .item-1').style.zIndex = '1';
                                document.querySelector('.txt-lottie-section .item-1').style.transform = `translateY(${tlp * 1.5 * -1}px)`;
                                document.querySelector('.txt-lottie-section .item-2').style.opacity = 0;
                                document.querySelector('.txt-lottie-section .item-2').style.zIndex = '-1';
                            } else if (tlp < 100 && tlp > 71) {
                                document.querySelector('.txt-lottie-section .item-0').style.opacity = 0;
                                document.querySelector('.txt-lottie-section .item-0').style.zIndex = '-1';
                                document.querySelector('.txt-lottie-section .item-1').style.opacity = 0;
                                document.querySelector('.txt-lottie-section .item-1').style.zIndex = '-1';
                                document.querySelector('.txt-lottie-section .item-2').style.opacity = 1;
                                document.querySelector('.txt-lottie-section .item-2').style.zIndex = '1';
                                document.querySelector('.txt-lottie-section .item-2').style.transform = `translateY(${tlp * -1}px)`;
                            }
                        }



                    },
                },
            });

            lottieOneTl
                .to(
                    lottieFrame1,
                    {
                        frame: lottieAnim1.totalFrames - 1,
                        duration: 1,
                        ease: "none",
                        onUpdate: () => lottieAnim1.goToAndStop(lottieFrame1.frame, true)
                    },
                    "start"
                );
        });

        // scroll event 
        let lastExecution = 0; // Tracks the last execution time
        const delay = 500; // Delay in milliseconds
        const timeDoing = 1000; // Animation duration in milliseconds
        const pointBanner = 200; // Adjust the value of `pointBanner` as needed

        const handleScroll = () => {
            // event 1
            const sectionAnimation = document.querySelector('.section-animation');
            if (sectionAnimation) {
                const sectionTop = sectionAnimation.getBoundingClientRect().top + window.scrollY;

                if (window.scrollY >= sectionTop) {
                    document.body.classList.add('dark-mode', 'passed-animation-st');
                } else {
                    document.body.classList.remove('dark-mode', 'passed-animation-st');
                }
            }

            // event 2
            const sectionIntro = document.querySelector('.section-intro-two');
            if (!sectionIntro) return;

            const sectionTop = sectionIntro.getBoundingClientRect().top + window.scrollY;
            const scrollTop = window.scrollY;
            const dir = 'down'; // Assumes scrolling direction is "down". Adjust logic if needed.

            // Logic for smooth scrolling
            if (
                scrollTop > sectionTop - pointBanner &&
                scrollTop < sectionTop - 100 &&
                dir === 'down'
            ) {
                if (lastExecution + delay < Date.now()) {
                    // Smooth scroll to the target position
                    window.scrollTo({
                        top: sectionTop + 10,
                        behavior: 'smooth',
                    });

                    lastExecution = Date.now();
                }
            }
        };

    }

}


var i = setInterval(function () {
    if (!document.body.classList.contains('gsap-loaded')) {
        homeAnimation();
    }
}, 200);
