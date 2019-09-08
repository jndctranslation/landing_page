---
permalink: '/quote'
layout: 'default'
title: 'Professional Translation Services | Mars Translation'
description: 'This is the description of the page'
---

<link rel="stylesheet" href="/assets/v3/css/instant-quote-new.css">
<style>
    .labelCountError {
        display: none;
    }
</style>

<!-- CONTENT START -->
<div class="content_web instant_quote_page" style="background-image: url({{ site.data.pages.quote.background_image }});
box-shadow:inset 0 0 0 10000px {{ site.data.pages.quote.color_overlay }}; 
background-position: center bottom; 
background-repeat: no-repeat; 
-moz-background-size: cover;
-o-background-size: cover; 
-webkit-background-size: cover; 
background-size: cover;">
<div class="container less_width">
    <div class="contact_head clearfix text-center">
    <div class="container">
        <div class="instant_quote_form clearfix">
            <div class="banner_text_block text-center">
                <h1 class="heading">Get Instant Quote Now!</h1>
                <p class="text-md">Need a Quote? Simply provide the information and get your Instant Quote right here.</p>
            </div>
            <div class="form_wrap text-left">
                <form name="" action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSeX9H5narvdcHVIdQkhlZ7yTrqEyWMN_D3cnKC8LE94mZuyPQ/formResponse" method="POST"
                class="contact_form" enctype="multipart/form-data"
                target="hidden_iframe" onsubmit="submitted=true;">

                    <fieldset class="row">

                        <div class="col-sm-6 col-xs-12">
                            <div class="form-group">
                                <label for="words">Number of words*</label>
                                <input type="text" id="words" name="entry.415996767" required="required" tabindex="3"
                                    class="form-control custom_input" placeholder="Number of words" />
                            </div>
                        </div>

                        <div class="col-sm-6 col-xs-12">
                            <div class="form-group">
                                <label for="project_industry">Project Industry*</label>
                                <input type="text" id="project_industry" name="entry.1539702399" required="required" tabindex="3"
                                    class="form-control custom_input" placeholder="Project Industry" />
                            </div>
                        </div>

                        <div class="col-sm-6 col-xs-12">
                            <div class="form-group">
                                <label for="source_language">Source Language*</label>
                                <input type="text" id="source_language" name="entry.716853875" required="required" tabindex="3"
                                    class="form-control custom_input" placeholder="Source Language" />
                            </div>
                        </div>

                        <div class="col-sm-6 col-xs-12">
                            <div class="form-group">
                                <label for="target_language">Target Language*</label>
                                <input type="text" id="target_language" name="entry.108987199" required="required" tabindex="3"
                                    class="form-control custom_input" placeholder="Target Language" />
                            </div>
                        </div>

                        <div class="col-sm-6 col-xs-12">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" name="entry.602922003" required="required" tabindex="3"
                                    class="form-control custom_input" placeholder="Name" />
                            </div>
                        </div>

                        <div class="col-sm-6 col-xs-12">
                            <div class="form-group">
                                <label for="email">Email*</label>
                                <input type="email" id="email" name="entry.1172555377" required="required" tabindex="4"
                                    class="form-control custom_input" placeholder="Email Address" />
                            </div>
                        </div>

                        <div class="col-sm-6 col-xs-12">
                            <div class="form-group">
                                <label for="phone">Phone Number</label>
                                <div class="phone">
                                    <input type="text" id="phone" name="entry.1982212044" tabindex="5"
                                        class="form-control custom_input country-code" data-hj-whitelist="" placeholder="Phone Number" />
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-xs-12 find_us_through">
                            <div class="form-group clearfix">
                                <label class="control-label">How you find us?</label>
                                <select id="findUsThrough" name="entry.1060226771" tabindex="4" class="chosen-select">
                                    <option value="" selected="selected">How you find us?</option>
                                    <option value="Google or other search">Google or other search</option>
                                    <option value="Online Ads">Online Ads</option>
                                    <option value="Email Marketing">Email Marketing</option>
                                </select>
                                <div class="error_text text-danger"></div>
                            </div>
                        </div>

                        <div class="btn_row text-center clearfix">
                            <button type="submit" id="get_quote_now" name="get_quote_now"
                                class="btn btn_xl btn_maroon text-uppercase" rows="3" value="Get Your Quotation">Get quote now</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>

    </div>
</div>

<script type="text/javascript">var submitted=false;</script>
<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" 
onload="if(submitted) {window.location='/thank_you';}"></iframe>