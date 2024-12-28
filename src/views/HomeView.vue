<script setup>
import ContactForm  from '../components/ContactForm.vue'
</script>

<template>
    <div class="HeroSection">
        <div class="wrapper flex">
            <div class="HeroInfo">
                <h2>frontend <span>developer</span></h2>
                <div class="HeroButton">
                    <a href="#">Hire me</a>
                    <a href="#">Download CV</a>
                </div>
            </div>
            <div class="HeroImg">
                <img src="/src/assets/images/hero-img.png" alt="">
            </div>
        </div>
    </div>

    <div class="AboutSection py-5">
        <div class="accordion container" id="accordionExample">
            <div class="accordion-item mt-5 rounded-3">
                <h2 class="accordion-header">
                <button class="accordion-button rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div class="accordion-item mt-5 rounded-3">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div class="accordion-item mt-5 rounded-3">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <ContactForm /> -->
</template>

<style lang="scss">

    .HeroSection {
        background: var(--navyBlue);
        min-height: 1024px;
        height: 100%;

        .flex {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding-top: 95px;


            .HeroInfo {
                padding: 0 0 0 84px;
                position: relative;
                width: 100%;

                h2 {
                    text-transform: uppercase;
                    font-size: 96px;
                    font-weight: 700;
                    font-family: var(--priFont);
                    line-height: 0.9;
                    color: var(--aquaBlue);

                    span {
                        display: block;
                    }

                }

                .HeroButton {
                    margin-top: 57px;
                    display: flex;
                    justify-content: flex-start;
                    flex-wrap: wrap;
                    gap: 24px;

                    a {
                        text-shadow: -1px 5px 2px rgba(0,0,0,0.6);
                        font-weight: bold;
                        font-size: 18px;
                        font-family: var(--priFont);

                        &:hover {
                            color: rgb(245, 156, 40);
                            scale: 1.1;
                            transition: 0.8s ease;
                        }
                    }

                    a:first-child {
                        padding: 10px 32px;
                        background: var(--aquaBlue);
                        border-radius: 24px;
                    }

                    a:last-child {
                        padding: 10px 70px 0px 32px;
                        background: var(--black);
                        border-radius: 24px;
                        position: relative;
                    }

                    a:last-child::before {
                            background: url(/src/assets/images/download-icon.png);
                            background-repeat: no-repeat;
                            width: 24px;
                            height: 24px;
                            display: block;
                            position: absolute;
                            content: '';
                            right: 38px;
                    }
                }
            }

            .HeroInfo::before {
                    content: '';
                    display: block;
                    width: 90px;
                    height: 221px;
                    background: url(/src/assets/images/arrow-img.png);
                    background-repeat: no-repeat;
                    position: absolute;
                    left: 0;
                    top: 43px;
            }
        }

        .HeroImg {
            width: 100%;
        }

        // Media Query Starts Here!!!
        @media (max-width: 1000px) {
            .flex {
                flex-direction: column;

                .HeroImg {
                    width: 100%;
                    max-width: 580px;
                    margin: 0 auto;
                }
            }
        }
    }

    /*About Stlye Starts Here!*/

    .accordion-item {
        --bs-accordion-bg: var(--navyBlue);
        --bs-accordion-active-bg: none;
        --bs-accordion-active-color: var(--white);
        --bs-accordion-color: var(--white);
        --bs-accordion-btn-color: var(--white);
        --bs-accordion-btn-bg: var(--navyBlue);
        --bs-accordion-border-color: none;
        --bs-accordion-btn-focus-box-shadow: none;

        /* Adjust accordion width */
        #accordionExample {
        max-width: 800px;
        }

        /* Scoped styling for arrow icon */
        .accordion-button::after {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' class='bi bi-plus' viewBox='0 0 16 16'%3E%3Cpath d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4'/%3E%3C/svg%3E");
        }

        .accordion-button:not(.collapsed)::after {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='white' class='bi bi-dash-lg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8'/%3E%3C/svg%3E");
        }
    }
</style>