---
permalink: '/'
layout: 'home'
title: 'Professional Translation Services | Mars Translation'
description: 'This is the description of the page'
---

<!-- CONTENT START -->


<div class="full_width_banner home_banner clearfix" id="home-banner-instant">
  <div class="carousel-inner">
    <div id="particles-js" class="item active" 
    style="background-image: url({{ site.data.pages.home.block_1.background_image }});
    box-shadow:inset 0 0 0 10000px {{ site.data.pages.home.block_1.color_overlay }}; 
    background-position: center bottom; 
    background-repeat: no-repeat; 
    -moz-background-size: cover;
    -o-background-size: cover; 
    -webkit-background-size: cover; 
    background-size: cover;
    {% if site.data.pages.home.block_1.visible == true %}
    display: block; 
    {% else %}
    display: none;
    {% endif %}"
    >
      <div class="two text-center">
        <div class="container">
          <div class="text_wrap">
            <h1 class="heading">{{site.data.pages.home.block_1.title }}</h1>
            <div>{{site.data.pages.home.block_1.text | markdownify }}</div>
            <div class="btn_wrap">
              {% if site.data.header.primary_nav.button_1.visible == true %}
              <a class="btn btn-md btn_maroon" href="{{site.data.header.primary_nav.button_1.link}}" id="home-banner-instant">{{site.data.header.primary_nav.button_1.name}}</a>
              {% endif %}
              {% if site.data.header.primary_nav.button_2.visible == true %}
              <a class="btn btn-md btn_white_fill" href="{{site.data.header.primary_nav.button_2.link}}" id="home-banner-order">{{site.data.header.primary_nav.button_2.name}}</a>
              {% endif %}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- CONTENT START -->
<div class="content_web">
  <section class="section_grey_bg pd_lg clearfix" 
  style="background-image: url({{ site.data.pages.home.block_2.background_image }});
  box-shadow:inset 0 0 0 10000px {{ site.data.pages.home.block_2.color_overlay }}; 
  background-position: center bottom; 
  background-repeat: no-repeat; 
  -moz-background-size: cover;
  -o-background-size: cover; 
  -webkit-background-size: cover; 
  background-size: cover;
  {% if site.data.pages.home.block_2.visible == true %}
  display: block; 
  {% else %}
  display: none;
  {% endif %}"
  >
    <div class="container">

      <div class="text_row text-center">
        <h2 class="heading">{{site.data.pages.home.block_2.title }}</h2>
        <div class="p-md">{{site.data.pages.home.block_2.text | markdownify }}</div>
      </div>
      <ul class="thumbnail_list_3 list-inline text-center">
      {% for item in site.data.pages.home.block_2.items %}
        <li>
          <span class="icon doc">
            <img style="width: 100%" src="{{item.icon}}">
          </span>
          <a href="/services/document-translation-services" class="title">{{item.title }}</a>
          <div class="desc">{{item.text | markdownify }}</div>
        </li>
      {% endfor %}
      </ul>

    </div>
  </section>

  <section class="section_white_bg qualities_block pd_lg clearfix"
  style="background-image: url({{ site.data.pages.home.block_3.background_image }});
  box-shadow:inset 0 0 0 10000px {{ site.data.pages.home.block_3.color_overlay }}; 
  background-position: center bottom; 
  background-repeat: no-repeat; 
  -moz-background-size: cover;
  -o-background-size: cover; 
  -webkit-background-size: cover; 
  background-size: cover;
  {% if site.data.pages.home.block_3.visible == true %}
  display: block; 
  {% else %}
  display: none;
  {% endif %}"
  >
    <div class="container less_width">
      <div class="text_row text-center">
        <h2 class="heading">{{site.data.pages.home.block_3.title }}</h2>

        <div class="p-md text-center">{{site.data.pages.home.block_3.text | markdownify }}</div>
      </div>
      {% for item in site.data.pages.home.block_3.items %}
      {% assign mod = forloop.index | modulo: 2 %}
      <div class="content_box row">
        <div class="col-sm-6 col-xs-12 
        {% if mod == 0 %} pull-right {% endif %}
        text-center">
          <i class="content_thumb">
            <img src="{{item.icon}}" style="width: 100%">
          </i>
        </div>

        <div class="col-sm-6 col-xs-12">
          <h3 class="h4 box_title">{{item.title }}</h3>

          <div>{{item.text | markdownify }}</div>
        </div>
      </div>
      {% endfor %}
    </div>
  </section>

  <section class="section_green_bg success_block clearfix"
  style="background-image: url({{ site.data.pages.home.block_4.background_image }});
  box-shadow:inset 0 0 0 10000px {{ site.data.pages.home.block_4.color_overlay }}; 
  background-position: center bottom; 
  background-repeat: no-repeat; 
  -moz-background-size: cover;
  -o-background-size: cover; 
  -webkit-background-size: cover; 
  background-size: cover;
  {% if site.data.pages.home.block_4.visible == true %}
  display: block; 
  {% else %}
  display: none;
  {% endif %}"
  >
    <div class="container">
      <div class="text_row text-center">
        <h2 class="heading">{{site.data.pages.home.block_4.title }}</h2>

        <div class="p-md">{{site.data.pages.home.block_4.text | markdownify }}</div>

        <div class="btn_wrap"><a class="btn btn_white_fill" href="{{site.data.pages.home.block_4.button.link}}">{{site.data.pages.home.block_4.button.name}}</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section_grey_bg how_we_work_block pd_lg text-center clearfix"
  style="background-image: url({{ site.data.pages.home.block_5.background_image }});
  box-shadow:inset 0 0 0 10000px {{ site.data.pages.home.block_5.color_overlay }}; 
  background-position: center bottom; 
  background-repeat: no-repeat; 
  -moz-background-size: cover;
  -o-background-size: cover; 
  -webkit-background-size: cover; 
  background-size: cover;
  {% if site.data.pages.home.block_5.visible == true %}
  display: block; 
  {% else %}
  display: none;
  {% endif %}"
  >
    <div class="container">
      <div class="text_row text-center">
        <h2 class="heading">{{site.data.pages.home.block_5.title }}</h2>

        <div class="p-md">{{site.data.pages.home.block_5.text | markdownify }}</div>
      </div>

      <ul class="services_list list-unstyled">
        {% for item in site.data.pages.home.block_5.items %}
        <li><span class="counter">{{ forloop.index }}</span>

          <h3 class="h4 step_name">{{item.title }}</h3>

          <div class="short_detail">{{item.text | markdownify }}</div>
        </li>
        {% endfor %}
      </ul>
    </div>
  </section>

  <section class="section_white_bg languages_intro_block pd_lg clearfix"
  style="background-image: url({{ site.data.pages.home.block_6.background_image }});
  box-shadow:inset 0 0 0 10000px {{ site.data.pages.home.block_6.color_overlay }}; 
  background-position: center bottom; 
  background-repeat: no-repeat; 
  -moz-background-size: cover;
  -o-background-size: cover; 
  -webkit-background-size: cover; 
  background-size: cover;
  {% if site.data.pages.home.block_6.visible == true %}
  display: block; 
  {% else %}
  display: none;
  {% endif %}"
  >
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-xs-12">
          <div class="text_row">
            <h2 class="heading">{{site.data.pages.home.block_6.title }}</h2>

            <div class="p-md">{{site.data.pages.home.block_6.text | markdownify  | newline_to_br }}</div>
          </div>

          <div class="btn_wrap"><a class="btn btn_maroon2" href="{{site.data.pages.home.block_6.button.link}}">{{site.data.pages.home.block_6.button.name}}</a></div>
        </div>

        <div class="col-sm-4 col-xs-12"><img alt="supported-languages" class="img-responsive lazy"
            src="{{site.data.pages.home.block_6.image}}" /></div>
      </div>
    </div>
  </section>
  
  <section class="section_grey_bg api-integration-block clearfix"
  style="background-image: url({{ site.data.pages.home.block_7.background_image }});
  box-shadow:inset 0 0 0 10000px {{ site.data.pages.home.block_7.color_overlay }}; 
  background-position: center bottom; 
  background-repeat: no-repeat; 
  -moz-background-size: cover;
  -o-background-size: cover; 
  -webkit-background-size: cover; 
  background-size: cover;
  {% if site.data.pages.home.block_7.visible == true %}
  display: block; 
  {% else %}
  display: none;
  {% endif %}"
  >
    <div class="container">
      <div class="col-sm-6 col-xs-12 pull-right">
        <div class="text_row less_space">
          <h2 class="heading">{{site.data.pages.home.block_7.title }}</h2>
          <div class="p-md">{{site.data.pages.home.block_7.text | markdownify }}</div>
        </div>
        <a class="btn btn_maroon2" href="{{site.data.pages.home.block_7.button.link}}">{{site.data.pages.home.block_7.button.name}}</a>
      </div>
      <div class="col-sm-6 col-xs-12">
        <img class="img-responsive"
          src="{{site.data.pages.home.block_7.image}}"
          alt="api integration">
      </div>
    </div>
  </section>

  <section class="section_white_bg customer_feedback_with_multiple_slides clearfix"
  style="background-image: url({{ site.data.pages.home.block_8.background_image }});
  box-shadow:inset 0 0 0 10000px {{ site.data.pages.home.block_8.color_overlay }}; 
  background-position: center bottom; 
  background-repeat: no-repeat; 
  -moz-background-size: cover;
  -o-background-size: cover; 
  -webkit-background-size: cover; 
  background-size: cover;
  {% if site.data.pages.home.block_8.visible == true %}
  display: block; 
  {% else %}
  display: none;
  {% endif %}"
  >
    <div class="container">
      <div class="text_row text-center">
        <h2 class="heading">{{ site.data.pages.home.block_8.title  }}</h2>
        <div class="font_15">{{ site.data.pages.home.block_8.text | markdownify  }}</div>
      </div>
      <div class="carousel-wrap">
        <ul class="testimonial_carousel">
          {% for customer in site.data.customer_reviews.customers %}
          <li class="items main-pos" id="{{ forloop.index }}">
            <div class="review-card review-card--option-4 text-center">
              <div class="review-card-img">
                <img
                  src="{{customer.avatar}}"
                  class="img-responsive img-circle" onerror="imgError(this)" alt="client" />
              </div>
              <div class="review-author">
                <span class="ra-author">- by <strong>{{ customer.name }}</strong></span>
                <span class="client_web">{{ customer.company }}</span>
              </div>
              <div class="review-content">
                <p>
                  {{ customer.review }}
                </p>
              </div>
              <a class="more_testmonial" href="{{ site.data.pages.home.block_8.button.link}}">{{ site.data.pages.home.block_8.button.name}}</a>
            </div>
          </li>
          {% endfor %}

        </ul>
      </div>
      <span class="controls">
        <a href="javascript:void(0);" id="prev"><i class="fa fa-angle-left"></i></a>
        <a href="javascript:void(0);" id="next"><i class="fa fa-angle-right"></i></a>
      </span>
    </div>
  </section>

  <section class="section_grey_bg translator_intro_block pd_lg clearfix"
  style="background-image: url({{ site.data.pages.home.block_9.background_image }});
  box-shadow:inset 0 0 0 10000px {{ site.data.pages.home.block_9.color_overlay }}; 
  background-position: center bottom; 
  background-repeat: no-repeat; 
  -moz-background-size: cover;
  -o-background-size: cover; 
  -webkit-background-size: cover; 
  background-size: cover;
  {% if site.data.pages.home.block_9.visible == true %}
  display: block; 
  {% else %}
  display: none;
  {% endif %}"
  >
    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-xs-12">
          <div class="text_row">
            <h2 class="heading">{{site.data.pages.home.block_9.title }}</h2>

            <div class="p-lg">{{site.data.pages.home.block_9.text | markdownify }}</div>
          </div>

          <div class="btn_wrap"><a class="btn btn_maroon2" href="{{site.data.pages.home.block_9.button.link}}">{{site.data.pages.home.block_9.button.name}}</a></div>
        </div>

        <div class="col-sm-4 col-xs-12"><img alt="map" class="img-responsive"
            src="{{site.data.pages.home.block_9.image}}" style="display:block"/></div>
      </div>
    </div>
  </section>
  
  <section class="section_white_bg info_panels_block pd_lg clearfix"
  style="background-image: url({{ site.data.pages.home.block_10.background_image }});
  box-shadow:inset 0 0 0 10000px {{ site.data.pages.home.block_10.color_overlay }}; 
  background-position: center bottom; 
  background-repeat: no-repeat; 
  -moz-background-size: cover;
  -o-background-size: cover; 
  -webkit-background-size: cover; 
  background-size: cover;
  {% if site.data.pages.home.block_10.visible == true %}
  display: block; 
  {% else %}
  display: none;
  {% endif %}"
  >
    <div class="container">
      <div class="panel-group" id="accordion">
        {% for item in site.data.pages.home.block_10.items %}
        <div class="panel panel-default">
          <div class="panel-heading collapsed" data-toggle="collapse" data-parent="#accordion"
            data-target="#collapse{{x}}">
            <h4 class="panel-title accordion-toggle">{{item.title }}</h4>
          </div>
          <div id="collapse{{x}}" class="panel-collapse collapse ">
            <div class="panel-body text-justify">
                {{ item.text | markdownify }}
            </div>
          </div>
        </div>
        {% capture _ %}{% increment x %}{% endcapture %}
        {% endfor %}
      </div>
    </div>
  </section>

</div>
<!-- CONTENT END -->

