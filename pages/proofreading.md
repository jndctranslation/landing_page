---
permalink: '/pages/proofreading_edditing_services'
layout: 'default'
title: 'Professional Translation Services | Mars Translation'
description: 'This is the description of the page'
---

<link rel="stylesheet" href="/assets/v3/css/expert-translation-services.css">
<link rel="stylesheet" href="/assets/v3/css/animate.min.css">
<link rel="stylesheet" href="/assets/v3/css/proofreading-content.css">

<!-- BANNER START -->
<div class="full_width_banner page_top_banner" style="background-image: url({{ site.data.pages.proofreading.block_1.background_image }});
box-shadow:inset 0 0 0 10000px {{ site.data.pages.proofreading.block_1.color_overlay }}; 
background-position: center bottom; 
background-repeat: no-repeat; 
-moz-background-size: cover;
-o-background-size: cover; 
-webkit-background-size: cover; 
background-size: cover;
{% if site.data.pages.proofreading.block_1.visible == true %}
display: block; 
{% else %}
display: none;
{% endif %}">
    <div class="container">
        <div class="row">
            <div class="banner_text col-md-6 col-sm-10 col-xs-12">
                <h1 class="heading">{{site.data.pages.proofreading.block_1.title}}</h1>
                <div class="desc">{{site.data.pages.proofreading.block_1.text | markdownify }}</div>
                <div class="btn_wrap">
                    {% if site.data.header.primary_nav.button_1.visible == true %}
                    <a class="btn btn-md btn_maroon" href="{{site.data.header.primary_nav.button_1.link}}">{{site.data.header.primary_nav.button_1.name}}</a>
                    {% endif %}
                    {% if site.data.header.primary_nav.button_2.visible == true %}
                    <a class="btn btn_white_fill" href="{{site.data.header.primary_nav.button_2.link}}">{{site.data.header.primary_nav.button_2.name}}</a>
                    {% endif %}
                </div>
            </div>
        </div>
    </div>
</div>
<!-- BANNER END -->
<!-- CONTENT START -->
<div class="content_web business_pages_content">
    <div class="banner_bottom_section wow fadeInUp" style="background-image: url({{ site.data.pages.proofreading.block_2.background_image }});
    box-shadow:inset 0 0 0 10000px {{ site.data.pages.proofreading.block_2.color_overlay }}; 
    background-position: center bottom; 
    background-repeat: no-repeat; 
    -moz-background-size: cover;
    -o-background-size: cover; 
    -webkit-background-size: cover; 
    background-size: cover;
    {% if site.data.pages.proofreading.block_2.visible == true %}
    display: block; 
    {% else %}
    display: none;
    {% endif %}">
        <div class="container">
            <div class="content_block text-center">
                <h3 class="title">{{site.data.pages.proofreading.block_2.title}}</h3>
                <p class="desc">{{site.data.pages.proofreading.block_2.text | markdownify }}</p>
            </div>
        </div>
    </div>
    <section class="features_list_section" style="background-image: url({{ site.data.pages.proofreading.block_3.background_image }});
        box-shadow:inset 0 0 0 10000px {{ site.data.pages.proofreading.block_3.color_overlay }}; 
        background-position: center bottom; 
        background-repeat: no-repeat; 
        -moz-background-size: cover;
        -o-background-size: cover; 
        -webkit-background-size: cover; 
        background-size: cover;
        {% if site.data.pages.proofreading.block_3.visible == true %}
        display: block; 
        {% else %}
        display: none;
        {% endif %}">
        <div class="container">
            <span class="red_circle first repel_circle wow zoomIn" data-wow-delay="1s">&nbsp;</span>
            <div class="text_row text-center">
                <h2 class="heading">{{site.data.pages.proofreading.block_3.title}}</h2>
                <div class="desc">{{site.data.pages.proofreading.block_3.text | markdownify }}</div>
            </div>
            <div class="features_list flexbox_container space_between">
                {% for item in site.data.pages.proofreading.block_3.items %}
                {% assign mod = forloop.index | divided_by: 2 | modulo: 2 %}
                <div class="media single_item wow fadeInUp" data-wow-delay="{{mod}}s">
                    <div class="media-left media-top">
                        <span class="icons">
                            <img src="{{item.icon}}" style="width: 100%">
                        </span>
                    </div>
                    <div class="media-body">
                        <h4 class="title">{{item.title}}</h4>
                        <div class="desc">{{item.text | markdownify }}</div>
                    </div>
                </div>
                {% endfor %}
            </div>
        </div>
    </section>
    <div class="expert_transaltion_services_page">
        <section class="why_mars_block clearfix" style="background-image: url({{ site.data.pages.proofreading.block_4.background_image }});
        box-shadow:inset 0 0 0 10000px {{ site.data.pages.proofreading.block_4.color_overlay }}; 
        background-position: center bottom; 
        background-repeat: no-repeat; 
        -moz-background-size: cover;
        -o-background-size: cover; 
        -webkit-background-size: cover; 
        background-size: cover;
        {% if site.data.pages.proofreading.block_4.visible == true %}
        display: block; 
        {% else %}
        display: none;
        {% endif %}">
            <div class="container">
                <span class="yellow_circle first repel_circle wow zoomIn" data-wow-delay="1s">&nbsp;</span>
                <span class="cyan_circle first repel_circle wow zoomIn" data-wow-delay="1s">&nbsp;</span>
                <div class="text_row text-center">
                    <h3 class="heading">{{site.data.pages.proofreading.block_4.title}}</h3>
                    <div class="desc">{{site.data.pages.proofreading.block_.text | markdownify }}</div>
                </div>
                <ul class="spacifications_list flexbox_container three_columns space_between list-unstyled clearfix">
                    {% for item in site.data.pages.proofreading.block_4.items %}
                    {% assign mod = forloop.index | modulo: 3 %}
                    {% assign mod2 = forloop.index | modulo: 2 %}
                    <li class="media spac_item wow {% if mod == 0 %}fadeInLeft{% elsif mod == 1%}fadeInRight{% else %}fadeInUp{%endif%}" data-wow-delay="{{mod2}}s">
                        <div class="media-left">
                            <p class="media-object svg_icon">
                                <img src="{{item.icon}}"  id="Layer_1" style="width: 100%">
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
        {% include kick_start.html %}
    </div>
</div>
<!-- CONTENT END -->

<script src="/assets/v3/js/wow.min.js" type="text/javascript"></script>

<script>
    $('.media.single_item').matchHeight();
    $('.transcription_services_list .content_list .col-md-3').matchHeight();
    $(document).ready(function () {
        // animation initialization
        wow = new WOW(
            {
                animateClass: 'animated',
                offset: 100,
            }
        ); wow.init();

        // testimonial-carousel slides
        var totalSlides = $('#testimonial-carousel .carousel-inner .item').length;
        $('#total-slide').text(totalSlides);

        // testimonial-carousel  current slide
        var currentIndex = $('#testimonial-carousel .carousel-inner .item.active').index() + 1;
        $('#current-slide').text(currentIndex);

        $('#testimonial-carousel').on('slid.bs.carousel', function () {
            currentIndex = $('#testimonial-carousel .carousel-inner .item.active').index() + 1;
            $('#current-slide').text(currentIndex);
        });

        $('.blog_list li .caption').matchHeight();
        // console.log('after match height')
    });

    // circle repel animation js
    var mouse = { 'x': 0, 'y': 0 };
    homex = 0;
    homey = 0;
    forcex = 0;
    forcey = 0;
    magnet = 500;
    $(document).bind('mousemove', function (e) {
        mouse = { 'x': e.pageX, 'y': e.pageY };
    });
    $('.repel_circle').each(function (index, el) {
        $(el).attr("homex", parseInt($(el).position().left));
        $(el).attr("homey", parseInt($(el).position().top));
    });
    $('.repel_circle').css({ 'display': 'none', 'position': 'absolute' });
    $('.container-fluid').css({ 'overflow': 'hidden' });
    setTimeout(() => {
        $('.repel_circle').css('display', 'inline-block');
    }, 1000);
    setInterval(function () {
        $('.repel_circle').each(function (index, el) {
            el = $(el);
            position = el.position();
            x0 = el.offset().left;
            y0 = el.offset().top;
            x1 = mouse.x;
            y1 = mouse.y;
            distancex = x1 - x0;
            distancey = y1 - y0;
            distance = Math.sqrt((distancey * distancey) + (distancex * distancex));
            powerx = x0 - (distancex / distance) * magnet / distance;
            powery = y0 - (distancey / distance) * magnet / distance;
            forcex = (forcex + (el.attr('homex') - x0) / 2) / 2.1;
            forcey = (forcey + (el.attr('homey') - y0) / 2) / 2.1;
            el.css('left', powerx + forcex);
            el.css('top', powery + forcey);
        });
    }, 15);
</script>