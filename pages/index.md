---
layout: default
overview: true
permalink: /
---

<section id="introduce">
    <div class="jumbotron">
        <div class="container">
            <div class="banner_text">
                <div class="heading">
                    Our journey started from 2018 as <br>
                    translation team and developed into <br>
                    business that we love and strive to <br>
                    grow every single day
                </div>
                <a href="#" class="btn btn-default" role="button">Contact Us</a>
            </div>
            <div class="banner_bottom_panel">
                <ul class="panel_list">
                    {% for item in site.data.home.menu %}
                        <li>
                            <a class="smooth_scroll" href="{{item.link}}">{{item.title}}</a>
                        </li>
                    {% endfor %}
                </ul>
            </div>
        </div>
    </div>
</section>