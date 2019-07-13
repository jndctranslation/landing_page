---
layout: default
overview: true
permalink: /
---

<section id="introduce">
    <div class="jumbotron">
        <div class="container">
            <div class="banner_text">
                <h1 class="font-weight-bold">
                    Our journey started from 2018 as translation team and developed into business that we love and strive to grow every single day
                </h1>
                <a href="#" class="btn btn_custom" role="button"><h4>Contact Us</h4></a>
            </div>
            <div class="banner_bottom_panel d-none d-lg-block d-xl-block">
                <ul class="panel_list">
                    {% for item in site.data.home.menu %}
                        <li>
                            <a class="smooth_scroll" href="{{item.link}}"><h4>{{item.title}}</h4></a>
                        </li>
                    {% endfor %}
                </ul>
            </div>
        </div>
    </div>
</section>