<script setup>

</script>

<template>
    <div class="wrapper">
        <div class="HeroSection">
            <div class="HeroInfo">
                <p>hello i'm arjay</p>
                <h2>Crafting Digital Experiences that Engage and Inspire</h2>
                <p>I transform ideas into dynamic websites with a focus on design, functionality, and user experience. Let's build something extraordinary together.</p>
                <div class="HeroButton">
                    <a href="#">read more</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .HeroSection {
        background: url(/src/assets/images/bnr-img.jpg);
        background-size: cover;
        height: 100%;
        min-height: 592px;

        p {
            font-family: var(--priFont);
            font-size: 16px;
            color: var(--white);
            text-transform: capitalize;
        }

        h2 {
            font-family: var(--secFont);
            font-size: 45px;
            color: var(--white);
        }

        .HeroButton {
            margin-top: 40px;

            a {
                color: var(--white);
                text-decoration: none;
                background: var(--orange);
                padding: 15px 30px;
                margin-top: 10px;
                text-transform: capitalize;
                font-family: var(--secFont);
                border-radius: 3px;

                &:hover {
                    background: var(--blue);
                    color: var(--black);
                }
            }

        }

        .HeroInfo {
            width: 100%;
            max-width: 600px;
            padding: 135px 45px 0 60px;
            height: 100%;
            min-height: 580px;
        }
    }
</style>