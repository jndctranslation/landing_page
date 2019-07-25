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
    <div class="full_width_banner company_profile_banner clearfix" 
    style="background-image: url({{ site.data.pages.about.block_1.background_image }});
    box-shadow:inset 0 0 0 10000px {{ site.data.pages.about.block_1.color_overlay }}; 
    background-position: center bottom; 
    background-repeat: no-repeat; 
    -moz-background-size: cover;
    -o-background-size: cover; 
    -webkit-background-size: cover; 
    background-size: cover;
    {% if site.data.pages.about.block_1.visible == true %}
    display: block; 
    {% else %}
    display: none;
    {% endif %}"
    >
        <div class="container">
            <div class="banner_text">
                <div class="heading">{{site.data.pages.about.block_1.text | markdownify}}</div>

                <div class="btn_wrap"><a class="btn btn_maroon font_16"
                        href="{{site.data.pages.about.block_1.button.link}}">{{site.data.pages.about.block_1.button.name}}</a>
                </div>
            </div>
            <div class="banner_bottom_panel">
                <ul class="panel_list">
                    {% for item in site.data.pages.about.block_1.items %}
                    <li><a class="smooth_scroll" href="#{{item.id}}">{{item.name}}</a></li>
                    {% endfor %}
                </ul>
            </div>
        </div>
    </div>
    <!-- CONTENT START -->

    <div class="content_web company_profile_page">
        <section class="section_white_bg simple_content_section text-center pd_lg" id="block_2" 
        style="background-image: url({{ site.data.pages.about.block_2.background_image }});
        box-shadow:inset 0 0 0 10000px {{ site.data.pages.about.block_2.color_overlay }}; 
        background-position: center bottom; 
        background-repeat: no-repeat; 
        -moz-background-size: cover;
        -o-background-size: cover; 
        -webkit-background-size: cover; 
        background-size: cover;
        {% if site.data.pages.about.block_2.visible == true %}
        display: block; 
        {% else %}
        display: none;
        {% endif %}"
        >
            <div class="container">
                <div class="col-sm-1"> </div>

                <div class="col-sm-10 font_21">
                    {{site.data.pages.about.block_2.text | markdownify}}
                </div>

                <div class="col-sm-1"> </div>
            </div>
        </section>

        <link rel="stylesheet" href="/assets/v3/css/expert-translation-services.css">
        <div class="content_web expert_transaltion_services_page">
          <section class="why_mars_block clearfix" style="background-image: url({{ site.data.pages.about.block_3.background_image }});
          box-shadow:inset 0 0 0 10000px {{ site.data.pages.about.block_3.color_overlay }}; 
          background-position: center bottom; 
          background-repeat: no-repeat; 
          -moz-background-size: cover;
          -o-background-size: cover; 
          -webkit-background-size: cover; 
          background-size: cover;
          {% if site.data.pages.about.block_3.visible == true %}
          display: block; 
          {% else %}
          display: none;
          {% endif %}">
            <div class="container">
              <div class="text_row text-center">
                <h3 class="heading">{{site.data.pages.about.block_3.title }}</h3>
                <div class="desc">{{site.data.pages.about.block_3.text | markdownify }}</div>
              </div>
              <ul class="spacifications_list flexbox_container three_columns space_between list-unstyled clearfix">
                {% for item in site.data.pages.about.block_3.items %}
                <li class="media spac_item">
                  <div class="media-left">
                    <p class="media-object svg_icon">
                      <image src="{{item.icon}}" style="width: 100%"></image>
                    </p>
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">{{item.title}}</h4>
                  </div>
                  <div class="desc">{{item.text | markdownify }}</div>
                </li>
                {% endfor %}
              </ul>
            </div>
          </section>
        </div>
        <link rel="stylesheet" href="/assets/v3/css/expert-translation-services.css">
        <div class="content_web expert_transaltion_services_page">
          <section class="why_mars_block clearfix" style="background-image: url({{ site.data.pages.about.block_4.background_image }});
          box-shadow:inset 0 0 0 10000px {{ site.data.pages.about.block_4.color_overlay }}; 
          background-position: center bottom; 
          background-repeat: no-repeat; 
          -moz-background-size: cover;
          -o-background-size: cover; 
          -webkit-background-size: cover; 
          background-size: cover;
          {% if site.data.pages.about.block_4.visible == true %}
          display: block; 
          {% else %}
          display: none;
          {% endif %}">
            <div class="container">
              <div class="text_row text-center">
                <h3 class="heading">{{site.data.pages.about.block_4.title }}</h3>
                <div class="desc">{{site.data.pages.about.block_4.text | markdownify }}</div>
              </div>
              <ul class="spacifications_list flexbox_container three_columns space_between list-unstyled clearfix">
                {% for item in site.data.pages.about.block_4.items %}
                <li class="media spac_item">
                  <div class="media-left">
                    <p class="media-object svg_icon">
                      <image src="{{item.icon}}" style="width: 100%"></image>
                    </p>
                  </div>
                  <div class="media-body">
                    <h4 class="media-heading">{{item.title}}</h4>
                  </div>
                  <div class="desc">{{item.text | markdownify }}</div>
                </li>
                {% endfor %}
              </ul>
            </div>
          </section>
        </div>

        <section class="section_grey_bg pd_lg features_block clearfix" 
        style="background-image: url({{ site.data.pages.about.block_5.background_image }});
        box-shadow:inset 0 0 0 10000px {{ site.data.pages.about.block_5.color_overlay }}; 
        background-position: center bottom; 
        background-repeat: no-repeat; 
        -moz-background-size: cover;
        -o-background-size: cover; 
        -webkit-background-size: cover; 
        background-size: cover;
        {% if site.data.pages.about.block_5.visible == true %}
        display: block; 
        {% else %}
        display: none;
        {% endif %}"
        >
            <div class="container">
                <div class="text_row text-center">
                    <h2 class="heading">{{site.data.pages.about.block_5.title}}</h2>

                    <div class="font_16">{{site.data.pages.about.block_5.text | markdownify }}</div>
                </div>

                {% for item in site.data.pages.about.block_5.items %}
                <div class="col-md-3 col-sm-6 col-xs-6 
                {% if forloop.first == true %}
                col-offset-1
                {% elsif forloop.last == true %}
                col-offset-left-1
                {% endif %}">
                    <div class="media text-center">
                        <span class="media-left">
                            <div class="media-object">
                                <image src="{{item.icon}}" style="width: 100%"></image>
                            </div>
                        </span>

                        <div class="media-body">
                            <h4 class="media-heading">{{item.title}}</h4>

                            <div>{{ item.text | markdownify }}</div>
                        </div>
                    </div>
                </div>
                {% endfor %}

            </div>
        </section>

        <section class="mission_block pd_lg text-center" id="block_7" 
        style="background-image: url({{ site.data.pages.about.block_7.background_image }});
        box-shadow:inset 0 0 0 10000px {{ site.data.pages.about.block_7.color_overlay }}; 
        background-position: center bottom; 
        background-repeat: no-repeat; 
        -moz-background-size: cover;
        -o-background-size: cover; 
        -webkit-background-size: cover; 
        background-size: cover;
        {% if site.data.pages.about.block_7.visible == true %}
        display: block; 
        {% else %}
        display: none;
        {% endif %}"
        >
            <div class="container">
                <div class="text_row less_space">
                    <h2 class="heading">{{site.data.pages.about.block_7.title}}</h2>
                </div>

                <div class="font_21">{{site.data.pages.about.block_7.text}}</div>
            </div>
        </section>

        <section class="section_green_bg vision_block pd_lg text-center" 
        style="background-image: url({{ site.data.pages.about.block_8.background_image }});
        box-shadow:inset 0 0 0 10000px {{ site.data.pages.about.block_8.color_overlay }}; 
        background-position: center bottom; 
        background-repeat: no-repeat; 
        -moz-background-size: cover;
        -o-background-size: cover; 
        -webkit-background-size: cover; 
        background-size: cover;
        {% if site.data.pages.about.block_8.visible == true %}
        display: block; 
        {% else %}
        display: none;
        {% endif %}"
        >
            <div class="container">
                <div class="text_row less_space">
                    <h2 class="heading">{{site.data.pages.about.block_8.title}}</h2>
                </div>

                <div class="font_21">{{site.data.pages.about.block_8.text}}</div>
            </div>
        </section>

        <section class="section_white_bg pd_lg features_block values_block clearfix" id="block_9" 
        style="background-image: url({{ site.data.pages.about.block_9.background_image }});
        box-shadow:inset 0 0 0 10000px {{ site.data.pages.about.block_9.color_overlay }}; 
        background-position: center bottom; 
        background-repeat: no-repeat; 
        -moz-background-size: cover;
        -o-background-size: cover; 
        -webkit-background-size: cover; 
        background-size: cover;
        {% if site.data.pages.about.block_9.visible == true %}
        display: block; 
        {% else %}
        display: none;
        {% endif %}"
        >
            <div class="container">
                <div class="text_row text-center">
                    <h2 class="heading">{{site.data.pages.about.block_9.title}}</h2>

                    <p class="font_16">{{site.data.pages.about.block_9.text}}</p>
                </div>
                
                {% for item in site.data.pages.about.block_9.items %}
                <div class="col-md-3 col-sm-6 col-xs-6 
                {% if forloop.first == true %}
                col-offset-1
                {% elsif forloop.last == true %}
                col-offset-left-1
                {% endif %}">
                    <div class="media text-center">
                        <span class="media-left">
                            <div class="media-object">
                                <image src="{{item.icon}}" style="width: 100%"></image>
                            </div>
                        </span>

                        <div class="media-body">
                            <h4 class="media-heading">{{item.title}}</h4>

                            <div>{{ item.text | markdownify }}</div>
                        </div>
                    </div>
                </div>
                {% endfor %}
            </div>
        </section>
    </div>

    <meta itemprop="datePublished" content="2015-04-29T14:34:36+08:00" />
    <meta content="http://www.marstranslation.com/page/company-profile" itemprop="url">

</div>

<!-- CONTENT END -->