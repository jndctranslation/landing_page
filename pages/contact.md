---
permalink: '/contact'
layout: 'default'
title: 'Professional Translation Services | Mars Translation'
description: 'This is the description of the page'
---

<link rel="stylesheet" href="/assets/v3/css/contact-us.css">

<div class="content_web contact_page">
    <div class="container less_width">
        <div class="contact_head clearfix text-center">
            <div class="text_row">
                <h1 class="text-uppercase heading">Contact Us <i class="icon_envelope">&nbsp;</i></h1>
            </div>
        </div>

        <div id="sales_form" class="form_wrap clearfix" style="display: block;">
            <div class="col-sm-8 col-xs-12 col_left">
                <form name="" action="https://formspree.io/kara.jr.original@gmail.com" method="POST" class="contact_form" enctype="multipart/form-data">
                    <div class="row">
                        <div class="col-sm-6 col-xs-12">
                            <div class="form-group clearfix">
                                <label class="control-label">Full Name<span class="red">*</span></label>
                                <input type="text" id="fullname" name="fullname" required="required" tabindex="1"
                                    class="form-control" title="Name is required." />
                                <div class="error_text text-danger"></div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xs-12">
                            <div class="form-group clearfix">
                                <label class="control-label">Business Email<span class="red">*</span></label>
                                <input type="email" id="email" name="email" required="required" value="" tabindex="2"
                                    class="form-control" title="Email is required." />
                                <div class="error_text text-danger"></div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xs-12">
                            <div class="form-group clearfix">

                                <label class="control-label">Phone<span class="red">*</span></label>
                                <input type="text" id="phone" name="phone" required="required" tabindex="3"
                                    class="form-control country-code" />
                                <div class="error_text text-danger"></div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xs-12 find_us_through">
                            <div class="form-group clearfix">
                                <label class="control-label">How you find us?</label>
                                <select id="findUsThrough" name="findUsThrough" tabindex="4" class="chosen-select">
                                    <option value="" selected="selected">How You Find Us</option>
                                    <option value="google or other search">Google or other search</option>
                                    <option value="online ads">Online Ads</option>
                                    <option value="email marketing">Email Marketing</option>
                                </select>
                                <div class="error_text text-danger"></div>
                            </div>
                        </div>
                        <div class="col-xs-12">
                            <div class="form-group clearfix">
                                <label class="control-label" id="description">What can we do for you?<span
                                        class="red">*</span></label>
                                <textarea id="contact_description" name="contact_description" required="required"
                                    class="form-control textarea" tabindex="5" required="required"
                                    title="Description is required."></textarea>
                                <div class="error_text text-danger"></div>
                            </div>
                        </div>

                        <div class="col-sm-6 col-xs-12">
                            <div class="form-group  file clearfix">
                                <label class="control-label">Attachment</label>
                                <div class="file_upload_input" style="overflow:hidden;">
                                    <span class="overlay">Choose File
                                        <input type="file" id="attachment" name="attachment" tabindex="6" class="" />
                                    </span>
                                    <span id="attachment_name" class="text-default" style="font-size:12px;color:#333;">
                                    </span>

                                </div>
                                <div id="attach-error" class="error_text text-danger"></div>
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
