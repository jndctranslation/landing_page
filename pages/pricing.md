---
permalink: '/pages/pricing'
layout: 'default'
title: 'Professional Translation Services | Mars Translation'
description: 'This is the description of the page'
---


<link rel="stylesheet" type="text/css" href="/assets/v3/css/pricing.css">
<link rel="stylesheet" type="text/css"
    href="/assets/v3/css/bootstrap-select.min.css">
<link href="/assets/v3/css/flags-sprite.css" type="text/css"
    rel="stylesheet" />



<!-- CONTENT START -->

<div class="pricing_banner full_width_banner" style="background-image: url({{ site.data.pages.pricing.block_1.background_image }});
box-shadow:inset 0 0 0 10000px {{ site.data.pages.pricing.block_1.color_overlay }}; 
background-position: center bottom; 
background-repeat: no-repeat; 
-moz-background-size: cover;
-o-background-size: cover; 
-webkit-background-size: cover; 
background-size: cover;
{% if site.data.pages.pricing.block_1.visible == true %}
display: block; 
{% else %}
display: none;
{% endif %}">
    <div class="container">
        <div class="text_row">
            <h1 class="heading text-center">Cost Effective and Simple Pricing</h1>
        </div>
        <div class="packages_holder clearfix">
            <div class="language_block clearfix">
                <div class="col-md-4 col-sm-4 col-xs-12 language_holder text-left">
                    <h3 class="heading">Source Language</h3>
                    <div class="supported-languages-dropdown">
                        <select id="sourceLanguageId" class="selectpicker" data-live-search="true" data-width="fit">
                            {% for item in site.data.pages.pricing.block_1.sources %}
                            <option
                                data-content='<img class="flags" src="{{item.icon}}">{{item.title}}'
                                value="18">
                               {{item.title}}
                            </option>
                            {% endfor %}
                        </select>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4 col-xs-12 language_holder text-left">
                    <h3 class="heading">Target Language</h3>
                    <div class="supported-languages-dropdown">
                        <select id="targetLanguageId" class="selectpicker" data-live-search="true" data-width="fit"
                            onchange="calculatePrice();">
                            {% for item in site.data.pages.pricing.block_1.targets %}
                            <option
                                data-content='<img class="flags" src="{{item.icon}}">{{item.title}}'
                                value="18">
                               {{item.title}}
                            </option>
                            {% endfor %}
                        </select>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4 col-xs-12 language_holder text-left">
                    <h3 class="heading">Industry</h3>
                    <div class="supported-languages-dropdown">
                        <select id="industryId" class="selectpicker" data-live-search="true" data-width="fit"
                            onchange="calculatePrice();">
                            {% for item in site.data.pages.pricing.block_1.industries %}
                            <option
                                data-content='<img class="flags" src="{{item.icon}}">{{item.title}}'
                                value="18">
                               {{item.title}}
                            </option>
                            {% endfor %}
                        </select>
                    </div>
                </div>
            </div>
            {% for item in site.data.pages.pricing.block_1.items %}
            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="feature_pricing_box text-center">
                    <div class="plan_name text-uppercase">{{item.name}}</div>
                    <h2 class="price" id="standardPrice">{{item.price}}</h2>
                    <span class="pr_word">{{item.unit}}</span>
                    <div class="expert">
                        <div class="center-block text-center">
                            <span>{{item.expert | markdownify}}</span>
                        </div>
                    </div>
                    <p class='desc font_14 font_opensans_light'>{{item.desc}}</p>
                    <a href="{{site.data.pages.pricing.block_1.button.link}}" onclick="orderNow('standard','EP')" class="btn btn-maroon2">{{site.data.pages.pricing.block_1.button.name}}</a>
                </div>
            </div>
            {% endfor %}
            <div class="clearfix"></div>
        </div>
    </div>
</div>

<!-- CONTENT START -->
<div class="content_web our_clients_page">
    <section class="section_white_bg bundle_pricing_block" style="background-image: url({{ site.data.pages.pricing.block_2.background_image }});
    box-shadow:inset 0 0 0 10000px {{ site.data.pages.pricing.block_2.color_overlay }}; 
    background-position: center bottom; 
    background-repeat: no-repeat; 
    -moz-background-size: cover;
    -o-background-size: cover; 
    -webkit-background-size: cover; 
    background-size: cover;
    {% if site.data.pages.pricing.block_2.visible == true %}
    display: block; 
    {% else %}
    display: none;
    {% endif %}">
        <div class="container">
            <div class="text_row">
                <h2 class="border_heading heading text-center">Save money with bundle offers</h2>
            </div>
            <ul class="credit_bundles text-center">
                 {% for item in site.data.pages.pricing.block_2.items %}
                <li>
                    <div class='offer_rate'>
                        <h3 class="service_name">{{item.name}}</h3>
                        <div class="price">{{item.price_1}}</div>
                    </div>
                    <small class="small_text">Get Extra</small>
                    <h4 class="get_extra">{{item.price_2}}</h4>
                    <small class="small_text">For Free</small>
                    <a href="{{site.data.pages.pricing.block_2.button.link}}" class="you_choose text-uppercase">
                        <span class="triangle">&nbsp;</span>{{site.data.pages.pricing.block_2.button.name}}
                    </a>
                </li>
                {% endfor %}
            </ul>
        </div>
    </section>
    <section class="section_grey_bg service_pricing_block" style="background-image: url({{ site.data.pages.pricing.block_3.background_image }});
    box-shadow:inset 0 0 0 10000px {{ site.data.pages.pricing.block_3.color_overlay }}; 
    background-position: center bottom; 
    background-repeat: no-repeat; 
    -moz-background-size: cover;
    -o-background-size: cover; 
    -webkit-background-size: cover; 
    background-size: cover;
    {% if site.data.pages.pricing.block_3.visible == true %}
    display: block; 
    {% else %}
    display: none;
    {% endif %}">
        <div class="container">
            <div class="text_row">
                <h2 class="border_heading heading text-center">Pricing Examples</h2>
            </div>
            <ul class="service_pricing_ul">
                {% for item in site.data.pages.pricing.block_3.items %}
                <li class="text-center">
                    <div class="servimgce_imgcon app">
                        <img src="{{item.icon}}" style="width: 50%">
                    </div>
                    <div>{{item.text | markdownify}}</div>
                </li>
                {% endfor %}
            </ul>
        </div>
    </section>
</div>
<!-- CONTENT END -->




<script src='/assets/v3/js/bootstrap-select.min.js'></script>