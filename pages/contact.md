---
title: Professional Vietnamese Translation Services | JNDC Translation
description: 'For more Vietnamese Translation Services. Please contact us '
permalink: /contact_us
layout: default
---

<link rel="stylesheet" href="/assets/v3/css/contact-us.css">

<div class="content_web contact_page" style="background-image: url({{ site.data.pages.contact.background_image }});
    box-shadow:inset 0 0 0 10000px {{ site.data.pages.contact.color_overlay }}; 
    background-position: center bottom; 
    background-repeat: no-repeat; 
    -moz-background-size: cover;
    -o-background-size: cover; 
    -webkit-background-size: cover; 
    background-size: cover;">
    <div class="container less_width">
        <div class="contact_head clearfix text-center">
            <div class="text_row">
                <h1 class="text-uppercase heading">Contact Us <i class="icon_envelope">&nbsp;</i></h1>
            </div>
        </div>

        <div id="sales_form" class="form_wrap clearfix" style="display: block;">
            <div class="col-sm-8 col-xs-12 col_left">
                <form name="" action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSds79EsYaydiWGqKdzq3JuFuWNo0hj-L1qjI2hffokYX9p64Q/formResponse" method="POST"
                    class="contact_form" enctype="multipart/form-data"
                    target="hidden_iframe" onsubmit="submitted=true;">
                    <div class="row">
                        <div class="col-sm-6 col-xs-12">
                            <div class="form-group clearfix">
                                <label class="control-label">Full Name<span class="red">*</span></label>
                                <input type="text" id="fullname" name="entry.686437748" required="required" tabindex="1"
                                    class="form-control" title="Name is required." />
                                <div class="error_text text-danger"></div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xs-12">
                            <div class="form-group clearfix">
                                <label class="control-label">Business Email<span class="red">*</span></label>
                                <input type="email" id="email" name="entry.836208186" required="required" value="" tabindex="2"
                                    class="form-control" title="Email is required." />
                                <div class="error_text text-danger"></div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xs-12">
                            <div class="form-group clearfix">
                                <label class="control-label">Phone<span class="red">*</span></label>
                                <input type="tel" id="phone" name="entry.1464149213" tabindex="3"
                                    class="form-control country-code" />
                                <div class="error_text text-danger"></div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xs-12 find_us_through">
                            <div class="form-group clearfix">
                                <label class="control-label">How you find us?</label>
                                <select id="findUsThrough" name="entry.762168496" tabindex="4" class="chosen-select">
                                    <option value="" selected="selected">How you find us?</option>
                                    <option value="Google or other search">Google or other search</option>
                                    <option value="Online Ads">Online Ads</option>
                                    <option value="Email Marketing">Email Marketing</option>
                                </select>
                                <div class="error_text text-danger"></div>
                            </div>
                        </div>
                        <div class="col-xs-12">
                            <div class="form-group clearfix">
                                <label class="control-label" id="description">What can we do for you?<span
                                        class="red">*</span></label>
                                <textarea id="contact_description" name="entry.1809341504" required="required"
                                    class="form-control textarea" tabindex="5"
                                    title="Description is required."></textarea>
                                <div class="error_text text-danger"></div>
                            </div>
                        </div>

                        <div class="col-xs-12">
                        </div>

                        <div class="col-xs-12">
                            <button type="submit" class="btn btn_maroon text-uppercase pull-right" tabindex="8"
                                id="submitFormBtn">send message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">var submitted=false;</script>
<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" 
onload="if(submitted) {window.location='/thank_you';}"></iframe>
