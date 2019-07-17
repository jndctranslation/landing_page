---
layout: default
overview: true
permalink: /services
---

<section id="services_introduce" class="{{site.data.pages.services.introduce.text_color}} background" style="background-image: url({{site.data.pages.services.introduce.background_image}}); box-shadow:inset 0 0 0 1000px {{site.data.pages.services.introduce.color_overlay}};">
    <div class="container">
        <div class="banner_text">
            <h1 class="font-weight-bold mb-3 slide">
                {{site.data.pages.services.introduce.title}}
            </h1>
            <h4 class="mb-3 slide">
                {{site.data.pages.services.introduce.text}}
            </h4>
            <div class="slide">
                <a href="{{site.data.pages.services.introduce.button_1_link}}" class="btn btn_custom mt-3 mr-2 px-4 py-2" role="button"><h5>{{site.data.pages.services.introduce.button_1_name}}</h5></a>
                <a href="{{site.data.pages.services.introduce.button_2_link}}" class="btn btn_custom_2 mt-3 px-4 py-2" role="button"><h5>{{site.data.pages.services.introduce.button_2_name}}</h5></a>
            </div>
        </div>
    </div>
</section>

<section id="services_why" class="{{site.data.pages.services.why.text_color}} background" style="background-image: url({{site.data.pages.services.why.background_image}}); box-shadow:inset 0 0 0 1000px {{site.data.pages.services.why.color_overlay}};">
    <div class="container pd_lg">
        <div class="text-center pb-5 slide">
            <h4 class="font-weight-bold mb-4">{{site.data.pages.services.why.title}}</h4>
            <p>{{site.data.pages.services.why.text}}</p>
        </div>
        <div class="row slide">
            {% for item in site.data.pages.services.why.description %}
            <div class="col-sm-6 col-md-4 item pl-4 pr-2 pb-3">
                <div class="item_icon">
                    <img src="{{item.icon}}">
                </div>
                <div class="item_title">
                    <h5 class="font-weight-bold">{{item.title}}</h5>
                </div>
                <div class="item_text">
                    <p>{{item.text}}</p>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<section id="services_language" class="{{site.data.pages.services.language.text_color}} background" style="background-image: url({{site.data.pages.services.language.background_image}}); box-shadow:inset 0 0 0 1000px {{site.data.pages.services.language.color_overlay}};">
    <div class="container pd_lg">
        <div class="text-center slideanim">
            <h4>{{site.data.pages.services.language.title}}</h4>
            <p>{{site.data.pages.services.language.text}}</p>
        </div>
        <div class="row slideanim">
            {% for item in site.data.pages.services.language.description %}
            <div class="col-md-3 col-sm-6">
                <div class="flag_icon">
                    {{item.icon}}
                </div>
                <div class="flag_text">
                    <p>{{item.text}}</p>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<section id="services_advantage" class="{{site.data.pages.services.advantage.text_color}} background" style="background-image: url({{site.data.pages.services.advantage.background_image}}); box-shadow:inset 0 0 0 1000px {{site.data.pages.services.advantage.color_overlay}};">
    <div class="container text-center pd_lg">
        <h4>{{site.data.pages.services.advantage.title}}</h4>
        <p>{{site.data.pages.services.advantage.text}}</p>
    </div>
</section>

<section id="services_top" class="{{site.data.pages.services.top.text_color}} background" style="background-image: url({{site.data.pages.services.top.background_image}}); box-shadow:inset 0 0 0 1000px {{site.data.pages.services.top.color_overlay}};">
    <div class="container pd_lg">
        <div class="text-center">
            <h4>{{site.data.pages.services.top.title}}</h4>
            <p>{{site.data.pages.services.top.text}}</p>
        </div>
        <div class="row">
            {% for item in site.data.pages.services.top.description %}
            <div class="col-md-6">
                <div class="media">
                    <div class="media_left media_top">
                        <img src="{{item.icon}}">
                    </div>
                    <div class="media_body">
                        <h4>{{item.title}}</h4>
                        <p>{{item.text}}</p>
                    </div>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<section id="quality" class="{{site.data.pages.services.quality.text_color}} background" style="background-image: url({{site.data.pages.services.quality.background_image}}); box-shadow:inset 0 0 0 1000px {{site.data.pages.services.quality.color_overlay}};">
    <div class="container pd_lg">
        <div class="container">
        <div class="text-center">
            <h4>{{site.data.pages.services.quality.title}}</h4>
            <p>{{site.data.pages.services.quality.text}}</p>
        </div>
        <div class="row">
            {% for item in site.data.pages.services.quality.description %}
            <div class="col-md-6">
                <div class="media">
                    <div class="media_left">
                        <img src="{{item.icon}}">
                    </div>
                    <div class="media_body">
                        <h4>{{item.title}}</h4>
                    </div>
                        <p>{{item.text}}</p>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
    </div>
</section>