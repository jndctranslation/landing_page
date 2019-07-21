---
permalink: '/pages/about'
layout: 'default'
title: 'Professional Translation Services | Mars Translation'
description: 'This is the description of the page'
---

<style>
    .company_profile_banner {
        background: url("/assets/images/ui/company-profile-bg2.jpg") no-repeat center;
        background-size: cover;
        min-height: 660px;
    }

    .company_profile_banner .banner_text {
        position: relative;
        padding-left: 70px;
        margin-top: 110px;
    }

    .company_profile_banner .banner_text::before {
        content: url("/assets/images/ui/inverted-commas-image.png");
        position: absolute;
        left: 0px;
    }

    .company_profile_banner .banner_text .heading {
        font: 50px "ubuntu-medium";
        color: #fff;
    }

    .company_profile_banner .banner_text .btn_wrap {
        margin: 30px 0 0;
    }

    .company_profile_banner .banner_text .btn_wrap .btn {
        padding: 9px 55px;
        font-size: 16px;
    }

    .company_profile_banner .banner_bottom_panel {
        position: relative;
        bottom: -133px;
    }

    .company_profile_banner .banner_bottom_panel .panel_list {
        position: absolute;
        right: 0;
        width: 545px;
        padding: 50px 0;
        z-index: 20;
        color: #c6c6c6;
        font: 22px "ubuntu-medium";
        display: flex;
        background-color: #1aa278;
        box-shadow: -70px 0 0 0 rgba(171, 5, 30, 0.8), 0px 12px 40px 0px rgba(26, 162, 120, 0.5);
    }

    .company_profile_banner .banner_bottom_panel .panel_list li {
        margin-left: 40px;
        padding-left: 4px;
    }

    .company_profile_banner .banner_bottom_panel .panel_list li:first-child {
        list-style-type: none;
    }

    .company_profile_banner .banner_bottom_panel .panel_list li a {
        color: #fff;
        text-decoration: none;
    }

    .company_profile_page p {
        color: #727988;
    }

    .company_profile_page .features_block .text_row .heading,
    .company_profile_page .video_section .text_row .heading {
        color: #484848;
    }

    .company_profile_page .features_block .text_row .heading,
    .company_profile_page .video_section .text_row {
        margin: 0;
    }

    .company_profile_page .simple_content_section {
        padding: 150px 0 90px;
    }

    .company_profile_page .features_block .media {
        margin-bottom: 20px;
        padding-left: 20px;
    }

    .company_profile_page .features_block .media .media-left {
        display: inline-block;
        margin-bottom: 25px;
    }

    .company_profile_page .features_block .media .media-left .media-object {
        width: 48px;
        height: 48px;
        background: url("/assets/images/ui/sprites.png no-repeat");
    }

    .company_profile_page .features_block .media .media-left .media-object.more {
        background-position: -226px -450px;
    }

    .company_profile_page .features_block .media .media-left .media-object.accurate {
        background-position: -276px -453px;
    }

    .company_profile_page .features_block .media .media-left .media-object.rapid {
        background-position: -332px -452px;
    }

    .company_profile_page .features_block .media .media-left .media-object.saving {
        background-position: -172px -450px;
    }

    .company_profile_page .features_block .media .media-body .media-heading {
        font: 16px "opensans-semi-bold";
    }

    .company_profile_page .features_block .media .media-body p {
        font-size: 15px;
        margin: 0;
    }

    .company_profile_page .features_block.values_block .media .media-left .media-object {
        width: 42px;
        height: 42px;
    }

    .company_profile_page .features_block.values_block .media .media-left .media-object.focus {
        background-position: -297px -56px;
    }

    .company_profile_page .features_block.values_block .media .media-left .media-object.transparency {
        background-position: -365px -56px;
    }

    .company_profile_page .features_block.values_block .media .media-left .media-object.integrity {
        background-position: -420px -56px;
    }

    .company_profile_page .features_block.values_block .media .media-left .media-object.confident {
        background-position: -434px -124px;
    }

    .company_profile_page .video_section .modal {
        background: rgba(11, 11, 11, 0.8);
    }

    .company_profile_page .video_section .modal .modal-dialog {
        top: 43%;
        transform: translateY(-43%);
    }

    .company_profile_page .video_section .modal .modal-dialog .modal-content {
        background-color: transparent;
        box-shadow: none;
    }

    .company_profile_page .video_section .modal .modal-dialog .modal-content .modal-body {
        padding: 0;
    }

    .company_profile_page .video_section .modal .modal-dialog .modal-content .modal-body .close {
        font-size: 30px;
        font-weight: normal;
        opacity: 1;
        color: #d3d3d3;
        position: absolute;
        top: -35px;
        right: 0;
    }

    .company_profile_page .video_section .modal .modal-dialog .modal-content .modal-body .close:hover {
        color: #fff;
    }

    .company_profile_page .video_section .text_row .desc {
        font: 15px/1.5 "opensans-regular";
        margin: 20px 70px 0 0;
    }

    .company_profile_page .video_section .video {
        background-color: #fff;
        padding: 65px 70px;
        float: left;
        box-shadow: 0 1px 50px 0 rgba(0, 0, 0, 0.08);
    }

    .company_profile_page .video_section .video .video_cover {
        box-shadow: 0 1px 40px 0 rgba(0, 0, 0, 0.08);
    }

    .company_profile_page .video_section .video .play_btn {
        background: url("/assets/images/ui/sprites.png") -415px -2px;
        width: 36px;
        height: 36px;
        position: absolute;
        top: 43%;
        right: 46%;
        text-decoration: none;
    }

    .company_profile_page .mission_block {
        background: url("/assets/images/ui/mission_block_bg.jpg") no-repeat center;
        background-size: cover;
    }

    .company_profile_page .mission_block .heading,
    .company_profile_page .mission_block .font_21,
    .company_profile_page .vision_block .heading,
    .company_profile_page .vision_block .font_21 {
        color: #fff;
    }

    @media all and (min-width: 960px) {
        .company_profile_page .video_section .modal .modal-dialog {
            width: 70%;
        }

        .company_profile_page .video_section .text_row {
            padding: 60px 0 0 0;
        }
    }

    @media all and (min-width: 960px) and (max-width: 1024px) {
        .company_profile_page .video_section .video {
            padding: 50px;
        }
    }

    @media all and (max-width: 800px) {
        .company_profile_banner {
            padding: 50px 0 100px;
            min-height: auto;
        }

        .company_profile_banner .banner_text {
            margin-top: 0;
        }

        .company_profile_banner .banner_bottom_panel {
            bottom: -38px;
        }

        .company_profile_page .font_21 {
            font-size: 19px;
        }

        .company_profile_page .simple_content_section {
            padding: 90px 0 50px;
        }

        .company_profile_page .video_section,
        .company_profile_page .values_block,
        .company_profile_page .vision_block,
        .company_profile_page .mission_block,
        .company_profile_page .features_block {
            padding: 50px 0;
        }

        .company_profile_page .video_section .text_row .desc {
            margin: 20px 0 0;
        }

        .company_profile_page .video_section .video .play_btn {
            right: 45%;
            top: 40%;
            -webkit-transform: scale(.7);
            -moz-transform: scale(.7);
            -ms-transform: scale(.7);
            -o-transform: scale(.7);
            transform: scale(.7);
        }
    }

    @media all and (min-width: 768px) {
        .company_profile_page .video_section {
            min-height: 430px;
            background: #fdfdfd url('../assets/images/ui/video_section_bg.jpg') no-repeat;
            background-size: cover;
        }
    }

    @media all and (min-width: 768px) and (max-width: 800px) {
        .company_profile_banner .banner_text .heading {
            font-size: 42px;
        }

        .company_profile_page .video_section .video {
            padding: 20px
        }
    }

    @media all and (min-width: 640px) and (max-width: 667px) {
        .company_profile_page .video_section .video .play_btn {
            top: 47%;
            right: 47%;
            transform: scale(1);
        }
    }

    @media all and (max-width: 667px) {
        .company_profile_page .video_section .video {
            padding: 30px;
            margin-top: 30px;
            width: 100%;
        }

        .company_profile_page .video_section .video img {
            width: 100%;
        }
    }

    @media all and (min-width: 640px) and (max-width: 667px),
    all and (min-width: 540px) and (max-width: 568px) {
        .company_profile_banner .banner_text .heading {
            font-size: 34px;
        }
    }

    @media all and (max-width: 568px) {
        .company_profile_banner {
            padding: 30px 0 85px;
        }

        .company_profile_banner .banner_text {
            padding-left: 0;
        }

        .company_profile_banner .banner_text::before {
            display: none;
        }

        .company_profile_banner .banner_bottom_panel .panel_list {
            width: 90%;
            padding: 35px 0;
            font-size: 18px;
            box-shadow: -50px 0 0 0 rgba(171, 5, 30, 0.8), 0px 12px 40px 0px rgba(26, 162, 120, 0.5);
        }

        .company_profile_page .video_section .video .play_btn {
            right: 46%;
            top: 47%;
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            -o-transform: scale(1);
            transform: scale(1);
        }
    }

    @media all and (min-width: 400px) and (max-width: 480px),
    all and (min-width: 320px) and (max-width: 375px) {
        .company_profile_banner {
            padding: 30px 0;
        }

        .company_profile_banner .banner_text .heading {
            font-size: 25px;
        }

        .company_profile_banner .banner_text .btn_wrap .btn {
            padding: 7px 30px;
        }

        .company_profile_banner .banner_bottom_panel {
            bottom: -70px;
        }

        .company_profile_banner .banner_bottom_panel .panel_list {
            width: 93%;
            padding: 25px 0;
            flex-direction: column;
            box-shadow: -30px 0 0 0 rgba(171, 5, 30, 0.8), 0px 12px 40px 0px rgba(26, 162, 120, 0.5);
        }

        .company_profile_banner .banner_bottom_panel .panel_list li {
            margin-bottom: 20px;
        }

        .company_profile_banner .banner_bottom_panel .panel_list li:first-child {
            list-style-type: disc;
        }

        .company_profile_page .font_21 {
            font-size: 16px;
        }

        .company_profile_page .simple_content_section {
            padding: 270px 0 30px;
        }

        .company_profile_page .video_section .video .play_btn {
            right: 45%;
            transform: scale(.7);

        }
    }

    @media all and (min-width: 320px) and (max-width: 375px) {
        .company_profile_banner .banner_text .heading {
            font-size: 20px;
        }

        .company_profile_banner .banner_bottom_panel .panel_list {
            width: 90%;
        }

        .company_profile_page .features_block .col-xs-6 {
            width: 100%;
        }

        .company_profile_page .video_section .video .play_btn {
            right: 44%;
            transform: scale(.6);
        }
    }
</style>

<!-- CONTENT START -->

<div itemprop="articleBody">
    <div class="full_width_banner company_profile_banner clearfix">
        <div class="container">
            <div class="banner_text">
                <h1 class="heading">Our story started in 2012 as a<br />
                    translation project and developed<br />
                    into a business that we love and<br />
                    strive to grow each day.</h1>

                <div class="btn_wrap"><a class="btn btn_maroon font_16" href="/contact">Contact Us</a></div>
            </div>

            <div class="banner_bottom_panel">
                <ul class="panel_list">
                    <li><a class="smooth_scroll" href="#overview_block">Overview</a></li>
                    <li><a class="smooth_scroll" href="#mission_block">Mission & Vision</a></li>
                    <li><a class="smooth_scroll" href="#values_block">Our Value</a></li>
                </ul>
            </div>
        </div>
    </div>
    <!-- CONTENT START -->

    <div class="content_web company_profile_page">
        <section class="section_white_bg simple_content_section text-center pd_lg" id="overview_block">
            <div class="container">
                <div class="col-sm-1"> </div>

                <p class="col-sm-10 font_21">Mars Translation is an international leader in the translation
                    marketplace that offers a transparent, intuitive and cost-effective online portal to
                    customers who need documents, web content, and video content translated guaranteeing
                    high-quality and speed. Unlike other options currently available in the market
                    (translation companies, online translation agencies, etc.), Marstranslation.com connects
                    its customers with highly rated, certified, native translators from around the world who
                    deliver quality translations according to company standards.</p>

                <div class="col-sm-1"> </div>
            </div>
        </section>

        <section class="section_grey_bg pd_lg features_block clearfix">
            <div class="container">
                <div class="text_row text-center">
                    <h2 class="heading">Translations Are Better With Experts</h2>

                    <p class="font_16">This is where creme de la creme of world’s translation talent
                        is.<br />
                        We have industry experts who only get paid for the words they translate, nothing
                        more, nothing less.</p>
                </div>

                <div class="col-md-3 col-sm-6 col-xs-6 col-offset-1">
                    <div class="media text-center"><span class="media-left"><i class="media-object more"> </i>
                        </span>

                        <div class="media-body">
                            <h4 class="media-heading">More</h4>

                            <p>120+ languages</p>

                            <p>5000+ translators, more solutions</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6 col-xs-6">
                    <div class="media text-center"><span class="media-left"><i class="media-object rapid"> </i>
                        </span>

                        <div class="media-body">
                            <h4 class="media-heading">Rapid</h4>

                            <p>24/7 service</p>

                            <p>200 words/hour/translator</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6 col-xs-6">
                    <div class="media text-center"><span class="media-left"><i class="media-object accurate"> </i>
                        </span>

                        <div class="media-body">
                            <h4 class="media-heading">Accurate</h4>

                            <p>ISO 9001:2008 Certified</p>

                            <p>Native translators only</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6 col-xs-6 col-offset-left-1">
                    <div class="media text-center"><span class="media-left"><i class="media-object saving"> </i>
                        </span>

                        <div class="media-body">
                            <h4 class="media-heading">Saving</h4>

                            <p>Transparent price</p>

                            <p>No Minimum Charge, no rush fees, Save up to 16%</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section_white_bg video_section clearfix">
            <div class="modal fade intro_video_modal text-center" id="video_modal" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body"><button class="close" data-dismiss="modal" id="close-video"
                                type="button">×</button><input id="videoLink" type="hidden"
                                value="https://www.youtube.com/embed/bwLdIT-rNVM?modestbranding=1&amp;rel=0&amp;controls=0&amp;showinfo=0&amp;fs=0&amp;" />
                            <div class="embed-responsive embed-responsive-16by9"><iframe allowfullscreen=""
                                    class="video-iframe" frameborder="0" id="video"
                                    src="https://www.youtube.com/embed/bwLdIT-rNVM?modestbranding=1&amp;rel=0&amp;controls=0&amp;showinfo=0&amp;fs=0&amp;"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-xs-12 left-content">
                        <div class="text_row">
                            <h2 class="heading">What is Mars Translation?</h2>

                            <p class="pd-md desc">Marstranslation.com is World’s No.1 Translation
                                Marketplace that offers Most Transparent, Intuitive and Cost-effective
                                Online Portal to customers who need their documents/web/video contents
                                translated with high-quality and speed.<br />
                                <br />
                                Unlike other options available in the market (translation companies, online
                                translation agencies, etc.) Marstranslation.com connects its customers with
                                Top-rated, Certified, Native Translators from across the world who deliver
                                high-quality translations as per company standards.</p>
                        </div>
                    </div>

                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="video"><img alt="video section" class="img-responsive"
                                src="/assets/images/ui/video-cover.jpg" /><a class="play_btn playVideo"
                                data-target="#video_modal" data-toggle="modal" href="javascript:void(0)"
                                title="Learn How Mars Translation Works"> </a></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mission_block pd_lg text-center" id="mission_block">
            <div class="container">
                <div class="text_row less_space">
                    <h2 class="heading">Mission</h2>
                </div>

                <p class="font_21">Our mission is to provide translation customers with a sophisticated yet
                    streamlined online portal that is more than just another platform – offers innovative
                    features to accomplish more – and which connects them with top-rated translators across
                    the world so that both customers and translators enjoy a win-win situation, resulting
                    from making every project a success.</p>
            </div>
        </section>

        <section class="section_green_bg vision_block pd_lg text-center">
            <div class="container">
                <div class="text_row less_space">
                    <h2 class="heading">Vision</h2>
                </div>

                <p class="font_21">Our vision is to be the No.1 choice of translation customers by offering
                    enhanced real-time interactions and reporting to ensure a wonderful Translations Project
                    Management Experience.</p>
            </div>
        </section>

        <section class="section_white_bg pd_lg features_block values_block clearfix" id="values_block">
            <div class="container">
                <div class="text_row text-center">
                    <h2 class="heading">Values</h2>

                    <p class="font_16">Marstranslation.com practices following business values to ensure
                        both customers and translators<br />
                        enjoy a sustainable work-relationship.</p>
                </div>

                <div class="col-md-3 col-sm-6 col-xs-6 col-offset-1">
                    <div class="media text-center"><span class="media-left"><i class="media-object focus"> </i>
                        </span>

                        <div class="media-body">
                            <h4 class="media-heading">Customer-focus</h4>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6 col-xs-6">
                    <div class="media text-center"><span class="media-left"><i class="media-object transparency"> </i>
                        </span>

                        <div class="media-body">
                            <h4 class="media-heading">Transparency</h4>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6 col-xs-6">
                    <div class="media text-center"><span class="media-left"><i class="media-object integrity"> </i>
                        </span>

                        <div class="media-body">
                            <h4 class="media-heading">Integrity</h4>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 col-sm-6 col-xs-6 col-offset-left-1">
                    <div class="media text-center"><span class="media-left"><i class="media-object confident"> </i>
                        </span>

                        <div class="media-body">
                            <h4 class="media-heading">Confidentiality</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <meta itemprop="datePublished" content="2015-04-29T14:34:36+08:00" />
    <meta content="http://www.marstranslation.com/page/company-profile" itemprop="url">

</div>

<!-- CONTENT END -->