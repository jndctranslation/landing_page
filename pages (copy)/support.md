---
permalink: '/support'
layout: 'default'
title: 'Professional Translation Services | Mars Translation'
description: 'This is the description of the page'
---

<link rel="stylesheet" href="/assets/v3/css/expert-translation-services.css">
<link rel="stylesheet" href="/assets/v3/css/supported-languages.css">
<link href="/assets/css/search2.css" type="text/css" rel="stylesheet">

<style>
    .flexbox_container.three_columns>li,
    .flexbox_container.three_columns>div {
        -moz-box-flex: 50%;
        -webkit-flex: 50%;
        width: 50%;
        flex-grow: 0;
        flex-shrink: 0;
    }

    .article-list-item a {
        color: #333333;
        font-size: 15px;
        font-family: 'opensans-regular' !important;
    }

    .why_mars_block {
        padding-top: 30px !important;
    }
</style>

<div class="expert_translation_banner clearfix" style="background-image: url({{ site.data.pages.support.block_1.background_image }});
        box-shadow:inset 0 0 0 10000px {{ site.data.pages.support.block_1.color_overlay }}; 
        background-position: center bottom; 
        background-repeat: no-repeat;
        -moz-background-size: cover;
        -o-background-size: cover; 
        -webkit-background-size: cover; 
        background-size: cover;
        {% if site.data.pages.support.block_1.visible == true %}
        display: block; 
        {% else %}
        display: none;
        {% endif %}">
    <div class="container">
        <div class="row">
            <div class="col-sm-8 col-xs-12">
                <div class="text_row">
                    <h1 class="heading">{{site.data.pages.support.block_1.title }}</h1>
                    <div class="desc font_20">{{site.data.pages.support.block_1.text | markdownify }}</div>
                </div>
                <div id="search-box">
                </div>
                <div id="hits">
                </div>
            </div>
        </div>
    </div>
</div>

<div class="content_web expert_transaltion_services_page">
    <section class="why_mars_block clearfix" style="background-image: url({{ site.data.pages.support.block_2.background_image }});
                box-shadow:inset 0 0 0 10000px {{ site.data.pages.support.block_2.color_overlay }}; 
                background-position: center bottom; 
                background-repeat: no-repeat; 
                -moz-background-size: cover;
                -o-background-size: cover; 
                -webkit-background-size: cover; 
                background-size: cover;
                {% if site.data.pages.support.block_2.visible == true %}
                display: block; 
                {% else %}
                display: none;
                {% endif %}">
        <div class="container">
            <div class="text_row text-center">
                <h3 class="heading">{{site.data.pages.support.block_2.title }}</h3>
                <div class="desc">{{site.data.pages.support.block_2.text | markdownify }}</div>
            </div>
            <ul class="spacifications_list flexbox_container three_columns space_between list-unstyled clearfix">
                {% for item in site.data.pages.support.block_2.items %}
                <li class="media spac_item">
                    <div class="media-left">
                        <p class="media-object svg_icon">
                            <image src="{{item.icon}}" style="width: 100%"></image>
                        </p>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">{{item.title}}</h4>
                    </div>
                    <div>
                        <ul class="article-list angle_arrow_list list-unstyled">
                            {% for question in item.questions %}
                            <li class="article-list-item">
                                <a href="{{question.link}}" class="article-list-link">{{question.title}}</a>
                            </li>
                            {% endfor %}
                        </ul>
                    </div>
                </li>
                {% endfor %}
            </ul>
        </div>
    </section>
</div>

<!-- algolia search -->
<link rel="stylesheet" type="text/css"
    href="https://cdn.jsdelivr.net/npm/instantsearch.js@2.10.4/dist/instantsearch.min.css">
<script src="https://cdn.jsdelivr.net/npm/instantsearch.js@2.10.4"></script>
<link rel="stylesheet" type="text/css"
    href="https://cdn.jsdelivr.net/npm/instantsearch.js@2.10.4/dist/instantsearch-theme-algolia.min.css">


<script src="/assets/js/search2.js"></script>