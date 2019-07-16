---
layout: default
overview: true
permalink: /
---

<!-- Banner -->
<section id="introduce" class="{{site.data.pages.home.introduce_text_color}} background" style="background-image: url({{site.data.pages.home.introduce_background_image}}); box-shadow:inset 0 0 0 10000px {{site.data.pages.home.introduce_color_overlay}};">
    <div class="container">
        <div class="banner_text">
            <h1 class="font-weight-bold">
                {{site.data.pages.home.introduce_quote}}
            </h1>
            <a href="{{site.data.pages.home.link_introduce_button}}" class="btn btn_custom my-5 px-4 py-2" role="button"><h5>{{site.data.pages.home.introduce_button}}</h5></a>
        </div>
        <div class="banner_bottom_panel d-none d-lg-block d-xl-block">
            <ul class="panel_list">
                {% for item in site.data.pages.home.introduce_menu %}
                    <li>
                        <a class="smooth_scroll" href="{{item.link}}"><h4>{{item.title}}</h4></a>
                    </li>
                {% endfor %}
            </ul>
        </div>
    </div>
</section>

<!-- Overview -->
<section id="overview" class="{{site.data.pages.home.overview_text_color}} background" style="background-image: url({{site.data.pages.home.overview_background_image}}); box-shadow:inset 0 0 0 10000px {{site.data.pages.home.overview_color_overlay}};">
    <div class="container text-center pd_lg">
        <h2 class="font-weight-bold mb-4">{{site.data.pages.home.overview_title}}</h2>
        <h5>{{site.data.pages.home.overview_text}}</h5>
    </div>
</section>

<!-- Vision -->
<section id="vision" class="{{site.data.pages.home.vision_text_color}} background" style="background-image: url({{site.data.pages.home.vision_background_image}}); box-shadow:inset 0 0 0 10000px {{site.data.pages.home.vision_color_overlay}};">
    <div class="container text-center pd_lg">
        <h2 class="font-weight-bold mb-4">{{site.data.pages.home.vision_title}}</h2>
        <h5>{{site.data.pages.home.vision_text}}</h5>       
    </div>
</section>

<!-- Belief -->
<section id="belief" class="{{site.data.pages.home.belief_text_color}} background" style="background-image: url({{site.data.pages.home.belief_background_image}}); box-shadow:inset 0 0 0 10000px {{site.data.pages.home.belief_color_overlay}};">
    <div class="container pd_lg">
        <div class="row">
            <div class="col-lg-6">
                <div class="side_img" style="background-image: url({{site.data.pages.home.belief_side_image}});">
                </div>
            </div>
            <div class="col-md-12 col-lg-6 p-5">
                    <h2  class="font-weight-bold mb-5">{{site.data.pages.home.belief_title}}</h2>
                    {% for item in site.data.pages.home.belief_description %}
                    <div class="side_item">
                        <div class="side_icon"><img src="{{item.icon}}" role="presentation"></div>
                        <h5 class="font-weight-bold side_title mb-1">{{item.title}}</h5>
                        <p class="side_text">{{item.text}}</p>
                    </div>
                    {% endfor %}
            </div>
        </div>
    </div>
</section>

<!-- Jobs -->
<section id="jobs" class="{{site.data.pages.home.jobs_text_color}} background" style="background-image: url({{site.data.pages.home.jobs_background_image}}); box-shadow:inset 0 0 0 10000px {{site.data.pages.home.jobs_color_overlay}};">
    <div class="container pd_lg">
        <div class="row">
            <div class="col-md-12 col-lg-6 p-5">
                    <h2 class="font-weight-bold mb-5">{{site.data.pages.home.jobs_title}}</h2>
                    {% for item in site.data.pages.home.jobs_description %}
                    <div class="side_item">
                        <div class="side_icon"><img src="{{item.icon}}" role="presentation">
                        </div>
                        <h5 class="font-weight-bold side_title mb-1">{{item.title}}</h5>
                        <p class="side_text">{{item.text}}</p>
                    </div>
                    {% endfor %}
            </div>
            <div class="col-lg-6">
                <div class="side_img" style="background-image: url({{site.data.pages.home.jobs_side_image}});">
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Team -->
<section id="team" class="{{site.data.pages.home.team_text_color}} background" style="background-image: url({{site.data.pages.home.team_background_image}}); box-shadow:inset 0 0 0 10000px {{site.data.pages.home.team_color_overlay}};">
    <div class="container pd_lg text-center">
        <h2 class="font-weight-bold mb-5">{{site.data.pages.home.team_title}}</h2>
        <div class="row">
                {% for item in site.data.pages.home.team_description %}
                <div class="col-md-4 sub_item">
                    <div class="sub_icon mb-3"><img src="{{item.icon}}" role="presentation"></div>
                    <h5 class="font-weight-bold sub_title mb-2">{{item.title}}</h5>
                    <p class="sub_text">{{item.text}}</p>
                </div>
                {% endfor %}
        </div>
    </div>
</section>
