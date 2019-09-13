---
title: Vietnamese IT and Software Translation Services | JNDC Translation
description: >-
  JNDC Translation have experienced in providing Vietnamese IT and Software
  Translation Services for mobile apps, software applications, web content and
  much more. JNDC Translation strive to provide highest customer IT and software
  translation services.
permalink: /pages/it_software
layout: default
---

<link rel="stylesheet" href="/assets/v3/css/expert-translation-services.css">
<link rel="stylesheet" href="/assets/v3/css/supported-languages.css">



<div class="expert_translation_banner clearfix" style="background-image: url({{ site.data.pages.it_software.block_1.background_image }});
        box-shadow:inset 0 0 0 10000px {{ site.data.pages.it_software.block_1.color_overlay }}; 
        background-position: center bottom; 
        background-repeat: no-repeat; 
        -moz-background-size: cover;
        -o-background-size: cover; 
        -webkit-background-size: cover; 
        background-size: cover;
        {% if site.data.pages.it_software.block_1.visible == true %}
        display: block; 
        {% else %}
        display: none;
        {% endif %}">
    <div class="container">
        <div class="row">
            <div class="col-sm-8 col-xs-12">
                <div class="text_row">
                    <h1 class="heading">{{site.data.pages.it_software.block_1.title }}</h1>
                    <div class="desc font_20">{{site.data.pages.it_software.block_1.text | markdownify }}</div>
                </div>
                <div class="btn_wrap">
                    {% if site.data.header.primary_nav.button_1.visible == true %}
                    <a class="btn btn-md btn_maroon"
                        href="{{site.data.header.primary_nav.button_1.link}}">{{site.data.header.primary_nav.button_1.name}}</a>
                    {% endif %}
                    {% if site.data.header.primary_nav.button_2.visible == true %}
                    <a class="btn btn_white_gradient"
                        href="{{site.data.header.primary_nav.button_2.link}}">{{site.data.header.primary_nav.button_2.name}}</a>
                    {% endif %}
                </div>
            </div>
        </div>
    </div>
</div>
<!-- BAnner End Here -->

<!-- CONTENT START -->
<div class="content_web expert_transaltion_services_page">
    <section class="why_mars_block clearfix" style="background-image: url({{ site.data.pages.it_software.block_2.background_image }});
            box-shadow:inset 0 0 0 10000px {{ site.data.pages.it_software.block_2.color_overlay }}; 
            background-position: center bottom; 
            background-repeat: no-repeat; 
            -moz-background-size: cover;
            -o-background-size: cover; 
            -webkit-background-size: cover; 
            background-size: cover;
            {% if site.data.pages.it_software.block_2.visible == true %}
            display: block; 
            {% else %}
            display: none;
            {% endif %}">
        <div class="container">
            <div class="text_row text-center">
                <h3 class="heading">{{site.data.pages.it_software.block_2.title }}</h3>
                <div class="desc">{{site.data.pages.it_software.block_2.text | markdownify }}</div>
            </div>
            <ul class="spacifications_list flexbox_container three_columns space_between list-unstyled clearfix">
                {% for item in site.data.pages.it_software.block_2.items %}
                <li class="media spac_item">
                    <div class="media-left">
                        <p class="media-object svg_icon">
                            <image src="{{item.icon}}" style="width: 100%"></image>
                        </p>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">{{item.title}}</h4>
                    </div>
                    <p class="desc">{{item.text | markdownify }}</p>
                </li>
                {% endfor %}
            </ul>
        </div>
    </section>
    <section class="why_mars_block clearfix" style="background-image: url({{ site.data.pages.it_software.block_3.background_image }});
            box-shadow:inset 0 0 0 10000px {{ site.data.pages.it_software.block_3.color_overlay }}; 
            background-position: center bottom; 
            background-repeat: no-repeat; 
            -moz-background-size: cover;
            -o-background-size: cover; 
            -webkit-background-size: cover; 
            background-size: cover;
            {% if site.data.pages.it_software.block_3.visible == true %}
            display: block; 
            {% else %}
            display: none;
            {% endif %}">
        <div class="container">
            <div class="text_row text-center">
                <h3 class="heading">{{site.data.pages.it_software.block_3.title }}</h3>
                <div class="desc">{{site.data.pages.it_software.block_3.text | markdownify }}</div>
            </div>
            <ul class="spacifications_list flexbox_container three_columns space_between list-unstyled clearfix">
                {% for item in site.data.pages.it_software.block_3.items %}
                <li class="media spac_item">
                    <div class="media-left">
                        <p class="media-object svg_icon">
                            <image src="{{item.icon}}" style="width: 100%"></image>
                        </p>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">{{item.title}}</h4>
                    </div>
                    <p class="desc">{{item.text | markdownify }}</p>
                </li>
                {% endfor %}
            </ul>
        </div>
    </section>
    {% include kick_start.html %}
</div>
<!-- CONTENT END -->
