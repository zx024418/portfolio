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

    <ContactForm />
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
</style>