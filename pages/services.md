---
layout: default
overview: true
permalink: /services
---

<section id="services_introduce" class="{{site.data.pages.services.introduce.text_color}} background" style="background-image: url({{site.data.pages.services.introduce.background_image}}); box-shadow:inset 0 0 0 1000px {{site.data.pages.services.introduce.color_overlay}};">
    <div class="container">
        <div class="banner_text">
            <h1 class="font-weight-bold mb-3">
                {{site.data.pages.services.introduce.title}}
            </h1>
            <h4 class="mb-3">
                {{site.data.pages.services.introduce.text}}
            </h4>
            <div>
                <a href="{{site.data.pages.services.introduce.button_1_link}}" class="btn btn_custom mt-3 mr-2 px-4 py-2" role="button"><h5>{{site.data.pages.services.introduce.button_1_name}}</h5></a>
                <a href="{{site.data.pages.services.introduce.button_2_link}}" class="btn btn_custom_2 mt-3 px-4 py-2" role="button"><h5>{{site.data.pages.services.introduce.button_2_name}}</h5></a>
            </div>
        </div>
    </div>
</section>

<section id="services_why">
    <div class="container">
        <div class="text-center">
            <h4>{{site.data.pages.services.why.title}}</h4>
            <p>{{site.data.pages.services.why.text}}</p>
        </div>
        <div class="row">
            {% for item in site.data.pages.services.why.description %}
            <div class="col-sm-6 col-md-4">
                <div class="media">
                    <!-- <img src="{{item.icon}}"> -->
                </div>
                <div class="media-left">
                    <h4>{{item.title}}</h4>
                </div>
                <div class="media-body">
                    <p>{{item.text}}</p>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<section id="services_language">
    <div class="container">
        <div class="text-center">
            <h4>{{site.data.pages.services.language.title}}</h4>
            <p>{{site.data.pages.services.language.text}}</p>
        </div>
        <div class="row">
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

<section>
</section>