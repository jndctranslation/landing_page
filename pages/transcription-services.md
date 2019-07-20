---
permalink: '/pages/services/transcription-services'
---

<!DOCTYPE html>
<html lang="en">
<head>

    <script>
        /**
         * Original script is created by Lunametrics
         * https://www.lunametrics.com/labs/recipes/utmz-cookie-replicator-for-gtm/
         * Modified by Analytics Mania https://www.analyticsmania.com/
         *
         * Data is stored in the __initialTrafficSource cookie in the following format; brackets
         * indicate optional data and are aexcluded from the stored string:
         *
         * utmcsr=SOURCE|utmcmd=MEDIUM[|utmccn=CAMPAIGN][|utmcct=CONTENT]
         * [|utmctr=TERM/KEYWORD]
         *
         * e.g.:
         * utmcsr=example.com|utmcmd=affl-link|utmccn=foo|utmcct=bar|utmctr=biz
         */

        (function (document) {

            var referrer = document.referrer;
            var gaReferral = {
                'utmcsr': '(direct)',
                'utmcmd': '(none)',
                'utmccn': '(not set)'
            };
            var thisHostname = document.location.hostname;
            var thisDomain = getDomain_(thisHostname);
            var referringDomain = getDomain_(document.referrer);
            var sessionCookie = getCookie_('__utmzzses');
            var cookieExpiration = new Date(+new Date() + 1000 * 60 * 60 * 24 * 30 * 24);
            var qs = document.location.search.replace('?', '');
            var hash = document.location.hash.replace('#', '');
            var gaParams = parseGoogleParams(qs + '#' + hash);
            var referringInfo = parseGaReferrer(referrer);
            var storedVals = getCookie_('__utmz') || getCookie_('__utmzz');
            var newCookieVals = [];
            var keyMap = {
                'utm_source': 'utmcsr',
                'utm_medium': 'utmcmd',
                'utm_campaign': 'utmccn',
                'utm_content': 'utmcct',
                'utm_term': 'utmctr',
                'gclid': 'utmgclid',
                'dclid': 'utmdclid'
            };

            var keyFilter = ['utmcsr', 'utmcmd', 'utmccn', 'utmcct', 'utmctr'];
            var keyName,
                values,
                _val,
                _key,
                raw,
                key,
                len,
                i;

            if (sessionCookie && referringDomain === thisDomain) {

                gaParams = null;
                referringInfo = null;

            }

            if (gaParams && (gaParams.utm_source || gaParams.gclid || gaParams.dclid)) {

                if (gaParams.utm_source == 'email') {
                    gaReferral.utmcsr = 'email';
                    if (gaParams.utm_medium)
                        gaReferral.utmcmd = gaParams.utm_medium;
                }

                for (key in gaParams) {

                    if (typeof gaParams[key] !== 'undefined') {

                        keyName = keyMap[key];
                        gaReferral[keyName] = gaParams[key];

                    }

                }

                if (gaParams.gclid || gaParams.dclid) {

                    gaReferral.utmcsr = 'google';
                    gaReferral.utmcmd = gaReferral.utmgclid ? 'cpc' : 'cpm';

                }

            } else if (referringInfo) {

                gaReferral.utmcsr = referringInfo.source;
                gaReferral.utmcmd = referringInfo.medium;
                if (referringInfo.term) gaReferral.utmctr = referringInfo.term;

            } else if (storedVals) {

                values = {};
                raw = storedVals.split('|');
                len = raw.length;

                for (i = 0; i < len; i++) {
                    _val = raw[i].split('=');
                    _key = _val[0].split('.').pop();
                    values[_key] = _val[1];

                }

                gaReferral = values;

            }

            for (key in gaReferral) {

                if (typeof gaReferral[key] !== 'undefined' && keyFilter.indexOf(key) > -1) {

                    newCookieVals.push(key + '=' + gaReferral[key]);

                }

            }

            if (!getCookie_('initialTrafficSource')) {
                writeCookie_('initialTrafficSource', newCookieVals.join('|'), cookieExpiration, '/', thisDomain);
            }

            writeCookie_('__utmzzses', 1, null, '/', thisDomain);

            function parseGoogleParams(str) {

                var campaignParams = ['source', 'medium', 'campaign', 'term', 'content'];
                var regex = new RegExp('(utm_(' + campaignParams.join('|') + ')|(d|g)clid)=.*?([^&#]*|$)', 'gi');
                var gaParams = str.match(regex);
                var paramsObj,
                    vals,
                    len,
                    i;

                if (gaParams) {

                    paramsObj = {};
                    len = gaParams.length;

                    for (i = 0; i < len; i++) {

                        vals = gaParams[i].split('=');

                        if (vals) {

                            paramsObj[vals[0]] = vals[1];

                        }

                    }

                }

                return paramsObj;

            }

            function parseGaReferrer(referrer) {

                if (!referrer) return;

                var searchEngines = {
                    'daum.net': {
                        'p': 'q',
                        'n': 'daum'
                    },
                    'eniro.se': {
                        'p': 'search_word',
                        'n': 'eniro '
                    },
                    'naver.com': {
                        'p': 'query',
                        'n': 'naver '
                    },
                    'yahoo.com': {
                        'p': 'p',
                        'n': 'yahoo'
                    },
                    'msn.com': {
                        'p': 'q',
                        'n': 'msn'
                    },
                    'bing.com': {
                        'p': 'q',
                        'n': 'live'
                    },
                    'aol.com': {
                        'p': 'q',
                        'n': 'aol'
                    },
                    'lycos.com': {
                        'p': 'q',
                        'n': 'lycos'
                    },
                    'ask.com': {
                        'p': 'q',
                        'n': 'ask'
                    },
                    'altavista.com': {
                        'p': 'q',
                        'n': 'altavista'
                    },
                    'search.netscape.com': {
                        'p': 'query',
                        'n': 'netscape'
                    },
                    'cnn.com': {
                        'p': 'query',
                        'n': 'cnn'
                    },
                    'about.com': {
                        'p': 'terms',
                        'n': 'about'
                    },
                    'mamma.com': {
                        'p': 'query',
                        'n': 'mama'
                    },
                    'alltheweb.com': {
                        'p': 'q',
                        'n': 'alltheweb'
                    },
                    'voila.fr': {
                        'p': 'rdata',
                        'n': 'voila'
                    },
                    'search.virgilio.it': {
                        'p': 'qs',
                        'n': 'virgilio'
                    },
                    'baidu.com': {
                        'p': 'wd',
                        'n': 'baidu'
                    },
                    'alice.com': {
                        'p': 'qs',
                        'n': 'alice'
                    },
                    'yandex.com': {
                        'p': 'text',
                        'n': 'yandex'
                    },
                    'najdi.org.mk': {
                        'p': 'q',
                        'n': 'najdi'
                    },
                    'seznam.cz': {
                        'p': 'q',
                        'n': 'seznam'
                    },
                    'search.com': {
                        'p': 'q',
                        'n': 'search'
                    },
                    'wp.pl': {
                        'p': 'szukaj ',
                        'n': 'wirtulana polska'
                    },
                    'online.onetcenter.org': {
                        'p': 'qt',
                        'n': 'o*net'
                    },
                    'szukacz.pl': {
                        'p': 'q',
                        'n': 'szukacz'
                    },
                    'yam.com': {
                        'p': 'k',
                        'n': 'yam'
                    },
                    'pchome.com': {
                        'p': 'q',
                        'n': 'pchome'
                    },
                    'kvasir.no': {
                        'p': 'q',
                        'n': 'kvasir'
                    },
                    'sesam.no': {
                        'p': 'q',
                        'n': 'sesam'
                    },
                    'ozu.es': {
                        'p': 'q',
                        'n': 'ozu '
                    },
                    'terra.com': {
                        'p': 'query',
                        'n': 'terra'
                    },
                    'mynet.com': {
                        'p': 'q',
                        'n': 'mynet'
                    },
                    'ekolay.net': {
                        'p': 'q',
                        'n': 'ekolay'
                    },
                    'rambler.ru': {
                        'p': 'words',
                        'n': 'rambler'
                    },
                    'google': {
                        'p': 'q',
                        'n': 'google'
                    }
                };
                var a = document.createElement('a');
                var values = {};
                var searchEngine,
                    termRegex,
                    term;

                a.href = referrer;

                // Shim for the billion google search engines
                if (a.hostname.indexOf('google') > -1) {

                    referringDomain = 'google';

                }

                if (searchEngines[referringDomain]) {

                    searchEngine = searchEngines[referringDomain];
                    termRegex = new RegExp(searchEngine.p + '=.*?([^&#]*|$)', 'gi');
                    term = a.search.match(termRegex);

                    values.source = searchEngine.n;
                    values.medium = 'organic';

                    values.term = (term ? term[0].split('=')[1] : '') || '(not provided)';

                } else if (referringDomain !== thisDomain) {

                    values.source = a.hostname;
                    values.medium = 'referral';

                }

                return values;

            }

            function writeCookie_(name, value, expiration, path, domain) {

                var str = name + '=' + value + ';';
                if (expiration) str += 'Expires=' + expiration.toGMTString() + ';';
                if (path) str += 'Path=' + path + ';';
                if (domain) str += 'Domain=' + domain + ';';

                document.cookie = str;

            }

            function getCookie_(name) {

                var cookies = '; ' + document.cookie
                var cvals = cookies.split('; ' + name + '=');

                if (cvals.length > 1) return cvals.pop().split(';')[0];

            }

            function getDomain_(url) {

                if (!url) return;

                var a = document.createElement('a');
                a.href = url;

                try {

                    return a.hostname.match(/[^.]*\.[^.]{2,3}(?:\.[^.]{2,3})?$/)[0];

                } catch (squelch) {
                }

            }

        })(document);
    </script>

        
    <!-- Google Tag Manager -->
    <script>(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(), event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-5ZBRJN');</script>
    <!-- End Google Tag Manager -->

    <!-- Active Campaign Email Tracking Code -->
    <script type="text/javascript">
        var trackcmp_email = '';
        var trackcmp = document.createElement("script");
        trackcmp.async = true;
        trackcmp.type = 'text/javascript';
        trackcmp.src = '//trackcmp.net/visit?actid=25292360&e=' + encodeURIComponent(trackcmp_email) + '&r=' + encodeURIComponent(document.referrer) + '&u=' + encodeURIComponent(window.location.href);
        var trackcmp_s = document.getElementsByTagName("script");
        if (trackcmp_s.length) {
            trackcmp_s[0].parentNode.appendChild(trackcmp);
        } else {
            var trackcmp_h = document.getElementsByTagName("head");
            trackcmp_h.length && trackcmp_h[0].appendChild(trackcmp);
        }
    </script>
    <!-- End Active Campaign Email Tracking Code -->



    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, Zoom= false">
    <meta name="msvalidate.01" content="84A1562167E8C8F70ADD4A6FABB95FE4"/>
    <link rel="alternate" hreflang="en" href="http://www.marstranslation.com/services/transcription-services"/>
    <link rel="canonical" href="http://www.marstranslation.com/services/transcription-services"/>
    <link href="https://plus.google.com/101536082954053110470" rel="publisher"/>
                
    <title>Fast and Accurate Transcription Services at budget-friendly rates  | Mars Translation</title>

            <meta name="title" content="  Fast and Accurate Transcription Services at budget-friendly rates">
    
                            <meta name="keywords" content="">
    
                
    <meta name="description" content="Mars Translation provides world-class transcription service and delivers reliable results while ensuring the privacy of your confidential documents.">

        <meta name="twitter:card" content="summary"/>
    <meta name="twitter:site" content="@MarsTranslation"/>
    <meta property="og:url"
          content="https://www.marstranslation.com/services/transcription-services"/>
    <meta property="og:title" content="Fast and Accurate Transcription Services at budget-friendly rates  | Mars Translation"/>
    <meta property="og:description" content="Mars Translation provides world-class transcription service and delivers reliable results while ensuring the privacy of your confidential documents."/>
    <meta property="og:image" content="https://www.marstranslation.com/bundles/storeservices/images/contents/main_logo.png"/>
    <link rel="icon" type="image/x-icon" href="https://www.marstranslation.com/favicon.ico"/>

                
<link href="https://www.marstranslation.com/assets/css/app.css" type="text/css" rel="stylesheet"/>

    
    <link rel="stylesheet" href="https://www.marstranslation.com/assets/v3/css/expert-translation-services.css">
    <link rel="stylesheet" href="https://www.marstranslation.com/assets/v3/css/animate.min.css">
    <link rel="stylesheet" href="https://www.marstranslation.com/assets/v3/css/proofreading-content.css">


        
        
            <script src="https://www.marstranslation.com/assets/js/app_header.js"></script>
    
        
    
                    
                                                                        
                                        
                    
    

        <script src="/translations"></script>


    
            <!-- Facebook Pixel Code -->
        <script>
            !function (f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function () {
                    n.callMethod ?
                        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s)
            }(window,
                document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '1639180232966079');
            fbq('track', "PageView");</script>
        <noscript><img height="1" width="1" style="display:none"
                       src="https://www.facebook.com/tr?id=1639180232966079&ev=PageView&noscript=1"
            /></noscript>
        <!-- End Facebook Pixel Code -->

            

                   
    <script>
        window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
                d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
        _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute('charset','utf-8');
            $.src='//v2.zopim.com/?oDNVngkr17dnb6ZDUxLnk9sVrc6Ce2zX';z.t=+new Date;$.
                    type='text/javascript';e.parentNode.insertBefore($,e)})(document,'script');
    </script>


    
                
                                        
    </head>

<body class=" ">





    <!-- Google Tag Manager (noscript) -->
    <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5ZBRJN" height="0" width="0"
                style="display: none;visibility: hidden"></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->







<div class="loaded" id="fullPageLoader">
    <div class="loader_wrapper">
        <div class="pre_loader_icon">
            <img src="https://www.marstranslation.com/assets/images/ui/preloader.gif" alt="logo">
            <div class="loading_text text-center">Loading<span>.</span><span>.</span><span>.</span></div>
        </div>
        <div class="loader_section section_left"></div>
        <div class="loader_section section_right"></div>
    </div>
</div>





    <div class="cc_window">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <span class="cc_message">We use cookies to ensure you get the best experience on our website.
                        <a class="cc_link" href="http://cookies.insites.com/"
                           target="_blank">Learn More</a>
                    </span>
                    <a href="javascript:void(0)" id="cookie_remove_popup"
                       class="btn btn_grey cc_dismiss">
                        Got it!
                    </a>
                </div>
            </div>
        </div>
    </div>
<div class="container-fluid container-shadow">
    <div class="row">

                    <div class="header_wrap">
    <header class="header_web" id="header">

                        
                        
        
        <!-- NAV BAR START -->
                                                <div class="top-bar">
            <div class="container">
                <div class="pull-left left_col">
                                       <a style="border-left:0px !important;" href="/free-consultation"
                       class="free_consultation_link font_12" id="free-consultation-top-bar">Get
                        Free Consultation</a>
                </div>


                <div class="pull-right right_col">
                                        <ul class="link_list list-inline pull-right">
                        <li><a href="/blog">Blog</a>
                        </li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li>
                            <a href="/list/customer-support">Support</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <nav class="web_nav navbar">
            <div class="container">
                <!-- Brand and toggle get grouped for better mobile display -->
                                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#main-navigation" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar">&nbsp;</span>
                            <span class="icon-bar">&nbsp;</span>
                            <span class="icon-bar">&nbsp;</span>
                        </button>
                        <a class="navbar-brand" id="mars-main-logo" href="/">
                                                        <span class="main_logo">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 560 133.6"
                     style="enable-background:new 0 0 560 133.6;" xml:space="preserve">
                    <style type="text/css">
                        .st0 {
                            fill: #9D2A3B;
                        }

                        .st1 {
                            fill: #3A3A39;
                        }
                    </style>
                    <g>
                        <g>
                            <g>
                                <g>
                                    <g>
                                        <g>
                                            <path class="st0" d="M559.6,22.7v-4.8c0,0-1.1-12.4-20.3-12.4H494c0,0-17.5,1-17.3,19v5.9c0,0-1.7,14,19.2,17.9l38.7,2.8
                                                c0,0,4.1,0.1,4.1,4.1c0,0-0.2,4.2-5.9,4.1h-56c0,0-1.8,16.7,19.5,17.3H539c0,0,21.2,1.4,21-19.3v-4.8c0,0,1.6-14-17.7-18.3
                                                l-37.9-3.1c0,0-5.9-0.4-5.9-3.8c0,0-0.4-4.4,7.4-4.5L559.6,22.7L559.6,22.7z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st0" d="M382.2,76.2V5.5h66.7c0,0,18.3-0.9,18.4,15.9v21c0,0,0,4.4-4.8,6.9c0,0,4.8,2.3,4.8,8.3v19h-21.4V63.1
                                                c0,0,0.3-6.3-8.5-6.2l-24.3,0.3l-7.4-17.6h33.1c0,0,7.4,0.2,7.4-6.9v-3.5c0,0,0.1-6.5-9.2-6.6h-33.5v53.5h-21.3"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st0"
                                                  d="M279,76.2l35.4-70.7H338l35.4,70.7H352l-5.9-11.7h-22.5L317,47.2h19.5l-10.3-19l-26.2,48H279z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st0" d="M248.4,76.6V30.4L220,76.6c0,0-3.3,0-4.4,0h-0.2h-0.2h-4.4l-28.4-46.2v46.2c0,0-5.9,0-11.5,0
                                                c-5.2,0-10.2,0-10.2,0V5.5H181c0,0,8.3-0.7,13.3,7.2l21.2,34.2l21.2-34.2c5-7.9,13.3-7.2,13.3-7.2h20.3v71.1H248.4z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st0" d="M490.2,113.2c0,13.7,5.6,15,14.5,15s14.5-1.7,14.5-15c0-14.1-5.9-15.5-14.5-15.5
                                                C496.4,97.7,490.2,99.1,490.2,113.2z M497.1,113.2c0-9.6,2.3-10.2,7.6-10.2c5.5,0,7.6,0.8,7.6,10.2c0,8.1-1.8,9.7-7.6,9.7
                                                C498.5,122.9,497.1,121.4,497.1,113.2z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st1"
                                                  d="M160.7,103.7h9.5V127h5.4v-23.3h9.8v-4.1h-24.8v4.1H160.7z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st1" d="M199,127.1h5.4v-11.2l7.1,0.5l6.2,10.7h6.1l-6.8-11c1.7-0.4,5.6-1.1,5.6-8c0-6.4-3.8-8.4-8.8-8.4H199
                                                V127.1z M204.4,112.3v-8.7h9c2.1,0,3.8,0.7,3.8,4.4c0,3.9-1.5,4.3-3.8,4.3H204.4z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st1" d="M236.3,127.1h6l2.7-6.6h12.1l2.6,6.6h5.9l-11.5-27.4h-6L236.3,127.1z M246.6,116.5l4.7-10.9l4.5,10.9
                                                H246.6z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st1"
                                                  d="M279.6,127.1h5.5v-19.2l15.4,19.2h5.4V99.7h-5.4v19.4l-15.3-19.4h-5.5v27.4H279.6z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st1" d="M320.6,108.8c0,2.7,0.7,7,8.7,7h5.7c2.7,0,3.4,1.2,3.4,3v1.9c0,2.5-2.9,2.7-4.9,2.7
                                                c-4.4,0-10-0.3-11.9-0.4v3.4c3,0.6,8.1,1.1,12.7,1.1s9.5-1,9.5-6.9v-2.1c0-3-1.3-7-7.8-7h-5.9c-2.7,0-4.1-0.4-4.1-3v-1.8
                                                c0-3,2-3.2,5-3.1c1.1,0,8.6,0.2,11.6,0.4v-3.4c-2.4-0.5-8.7-1.1-12.7-1c-5.3,0-9.3,1.5-9.3,6.9L320.6,108.8L320.6,108.8z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st1"
                                                  d="M358.6,121.9c0,4.2,3.4,5.1,6.9,5.1h14.2v-4.1H367c-1.4,0-2.9,0-2.9-1.9V99.6h-5.4v22.3H358.6z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st1"
                                                  d="M392.7,127.1h6l2.7-6.6h12.1l2.6,6.6h5.9l-11.5-27.4h-6L392.7,127.1z M403,116.5l4.7-10.9l4.5,10.9H403z"
                                            />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st1" d="M430,103.7h9.5V127h5.4v-23.3h9.8v-4.1H430V103.7z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st1" d="M468.9,127.1h5.4V99.7h-5.4V127.1z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st1"
                                                  d="M532.9,127.1h5.5v-19.2l15.4,19.2h5.4V99.7h-5.4v19.4l-15.3-19.4H533v27.4H532.9z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st1"
                                                  d="M160.7,103.7h9.5V127h5.4v-23.3h9.8v-4.1h-24.8v4.1H160.7z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st1" d="M199,127.1h5.4v-11.2l7.1,0.5l6.2,10.7h6.1l-6.8-11c1.7-0.4,5.6-1.1,5.6-8c0-6.4-3.8-8.4-8.8-8.4H199
                                                V127.1z M204.4,112.3v-8.7h9c2.1,0,3.8,0.7,3.8,4.4c0,3.9-1.5,4.3-3.8,4.3H204.4z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st1" d="M236.3,127.1h6l2.7-6.6h12.1l2.6,6.6h5.9l-11.5-27.4h-6L236.3,127.1z M246.6,116.5l4.7-10.9l4.5,10.9
                                                H246.6z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st1"
                                                  d="M279.6,127.1h5.5v-19.2l15.4,19.2h5.4V99.7h-5.4v19.4l-15.3-19.4h-5.5v27.4H279.6z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st1" d="M320.6,108.8c0,2.7,0.7,7,8.7,7h5.7c2.7,0,3.4,1.2,3.4,3v1.9c0,2.5-2.9,2.7-4.9,2.7
                                                c-4.4,0-10-0.3-11.9-0.4v3.4c3,0.6,8.1,1.1,12.7,1.1s9.5-1,9.5-6.9v-2.1c0-3-1.3-7-7.8-7h-5.9c-2.7,0-4.1-0.4-4.1-3v-1.8
                                                c0-3,2-3.2,5-3.1c1.1,0,8.6,0.2,11.6,0.4v-3.4c-2.4-0.5-8.7-1.1-12.7-1c-5.3,0-9.3,1.5-9.3,6.9L320.6,108.8L320.6,108.8z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st1"
                                                  d="M358.6,121.9c0,4.2,3.4,5.1,6.9,5.1h14.2v-4.1H367c-1.4,0-2.9,0-2.9-1.9V99.6h-5.4v22.3H358.6z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st1"
                                                  d="M392.7,127.1h6l2.7-6.6h12.1l2.6,6.6h5.9l-11.5-27.4h-6L392.7,127.1z M403,116.5l4.7-10.9l4.5,10.9H403z"
                                            />
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st1" d="M430,103.7h9.5V127h5.4v-23.3h9.8v-4.1H430V103.7z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st1" d="M468.9,127.1h5.4V99.7h-5.4V127.1z"/>
                                        </g>
                                    </g>
                                    <g>
                                        <g>
                                            <path class="st1"
                                                  d="M532.9,127.1h5.5v-19.2l15.4,19.2h5.4V99.7h-5.4v19.4l-15.3-19.4H533v27.4H532.9z"/>
                                        </g>
                                    </g>
                                </g>
                            </g>
                            <g>
                                <g>
                                    <g>
                                        <path class="st0" d="M133.2,50.5c0,0-4.6,25.7-33.1,47.5c-37.8,28.5-62.3,30.8-62.3,30.8s23.3,10.7,51.9,0
                                            c36-14.7,41.5-41.1,41.5-41.1s3.3-6.9,3.2-21.2C134.6,58.6,133.2,50.5,133.2,50.5z"/>
                                    </g>
                                </g>
                                <g>
                                    <path class="st1" d="M85.8,2.1C48.6-6.5,25.3,13.9,25.3,13.9S4.5,30.3,1,53.6c-4.5,27.3,7.5,44.7,7.5,44.7S13.2,88,24.1,75.7
                                        c-0.8-1.1-1.3-2.4-1.3-3.9c0-3.5,2.9-6.4,6.4-6.4c1.5,0,2.8,0.5,3.9,1.3C43,57.9,56,49.2,67.9,43c40.5-21,60.5-6.8,60.5-6.8
                                        S115.5,8.6,85.8,2.1z"/>
                                </g>
                                <g>
                                    <path class="st1" d="M99.3,52.6c-5.6-8.9-23.3-10.6-52.2,6c-4.7,3-9.1,6.1-13.1,9.4c0.8,1.1,1.3,2.4,1.3,3.8
                                        c0,3.5-2.9,6.4-6.4,6.4c-1.6,0-3-0.6-4.1-1.5C14,88.5,9.1,100.4,13.6,107.4c5.6,8.9,18.9,13.7,54.2-5.2
                                        C92.9,85.9,106.3,62.1,99.3,52.6z"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </span>
                        </a>
                    </div>
                
                                    <div class="collapse navbar-collapse" id="main-navigation">
                                                                                                            <ul class='nav navbar-nav main_navigation'><li class='dropdown'><a href=/services data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Services <span class="fa fa-chevron-down">&nbsp;</span></a><ul class='dropdown-menu'><li class='dropdown-submenu'><a href=/services/expert-translation-services >Translation Services </a></li><li class='dropdown-submenu'><a href=/services/website-translation-services >Website Localization </a></li><li class='dropdown-submenu'><a href=/proxy-translation-service >Website Proxy Translation </a></li><li class='dropdown-submenu'><a href=/services/dtp-file-conversion-services >DTP & File Conversion </a></li><li class='dropdown-submenu'><a href=javascript:void(0); data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Content <i class="fa fa-chevron-right">&nbsp;</i> <i class="fa fa-chevron-down">&nbsp;</i></a><ul class='dropdown-menu'><li class='dropdown-submenu'><a href=/services/proofreading-services >Proofreading </a></li><li class='dropdown-submenu'><a href=/services/transcreation-services >Transcreation </a></li><li class='dropdown-submenu'><a href=/services/transcription-services >Transcription </a></li></ul></li><li class='dropdown-submenu'><a href=javascript:void(0); data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Integrations <i class="fa fa-chevron-right">&nbsp;</i> <i class="fa fa-chevron-down">&nbsp;</i></a><ul class='dropdown-menu'><li class='dropdown-submenu'><a href=/services/wordpress-translation >WordPress Translation </a></li><li class='dropdown-submenu'><a href=/magento-integration >Magento Translation </a></li><li class='dropdown-submenu'><a href=/page/api >Transaltions API </a></li></ul></li><li class='dropdown-submenu'><a href=/page/files-formats >Supported file formats </a></li></ul></li><li class='dropdown'><a href=javascript:void(0); data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Industries <span class="fa fa-chevron-down">&nbsp;</span></a><ul class='dropdown-menu'><li class='dropdown-submenu'><a href=/industry/gaming-video-games-translation-services >Games Localization </a></li><li class='dropdown-submenu'><a href=/industry/software-it-translation-services >Software Localization </a></li><li class='dropdown-submenu'><a href=/industry/business-finance-translation-services >Business and Finance </a></li><li class='dropdown-submenu'><a href=/industry/advertising-translation-services >Advertising and Marketing </a></li><li class='dropdown-submenu'><a href=/industry/tourism-translation-services >Travel and Tourism </a></li><li class='dropdown-submenu'><a href=/industry/healthcare-translation-services >Medical and Healthcare </a></li><li class='dropdown-submenu'><a href=/industry/technical-translation-services >Technical and Engineering </a></li></ul></li><li class='dropdown'><a href=javascript:void(0); data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pricing <span class="fa fa-chevron-down">&nbsp;</span></a><ul class='dropdown-menu'><li class='dropdown-submenu'><a href=/pricing >Detailed Pricing </a></li><li class='dropdown-submenu'><a href=/buy-credit >Buy Credits </a></li><li class='dropdown-submenu'><a href=/instant-quote >Get Instant Quote </a></li><li class='dropdown-submenu'><a href=/page/comparison-of-top-translation-companies >Compare Us </a></li></ul></li><li class='dropdown'><a href=/page/company-profile data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About <span class="fa fa-chevron-down">&nbsp;</span></a><ul class='dropdown-menu'><li class='dropdown-submenu'><a href=/page/company-profile >Company Profile </a></li><li class='dropdown-submenu'><a href=/page/our-clients >Clients </a></li><li class='dropdown-submenu'><a href=/contact >Contact Us </a></li><li class='dropdown-submenu'><a href=/page/global-offices >Global Offices </a></li></ul></li><li class='dropdown'><a href=javascript:void(0); data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Resources <span class="fa fa-chevron-down">&nbsp;</span></a><ul class='dropdown-menu'><li class='dropdown-submenu'><a href=/case-studies >Case Studies </a></li><li class='dropdown-submenu'><a href=/white-papers >White Papers </a></li><li class='dropdown-submenu'><a href=/page/api >API </a></li><li class='dropdown-submenu'><a href=http://academy.marstranslation.com >Mars Academy </a></li></ul></li></ul>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                    
                                                                            <ul class="nav navbar-nav navbar-right ">
                                <li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </li>

                                                                    <li>
                                        <a class="text-uppercase sign_in"
                                           href="/login">Sign in</a>
                                    </li>
                                                                                                    <li>
                                        <a class="btn btn_maroon text-uppercase"
                                           href="/instant-quote" id="menu-instant-quote">Get Quote</a>
                                    </li>
                                    <li>
                                        <a class="btn btn_grey text-uppercase" id="menu-place-order"
                                           href="/place-order" >Place Order</a>
                                    </li>
                                
                            </ul>
                        
                    </div>
                                <!-- class="navbar-collapse" END -->
            </div>
                            <div class="navbar_right_mobile ">
                    <div class="container">
                        <ul class="nav navbar-nav navbar-right">
                                                            <li>
                                    <a class="btn text-uppercase sign_in"
                                       href="/login">Sign in</a>
                                </li>
                                                                                        <li>
                                    <a class="btn btn_maroon text-uppercase"
                                       href="/instant-quote" id="menu-instant-quote">Get Quote</a>
                                </li>
                                <li><a class="btn btn_grey text-uppercase" id="menu-place-order"
                                       href="/place-order">Place Order</a>
                                </li>
                                                    </ul>
                    </div>
                </div>
                                                                                                                                                                                                                                                                                </nav>
        </nav>
    </header>
</div>
<script type="text/javascript">

    $(document).ready(function(){
        
        if ($(window).width() < 800){
            $('body').on("click", ".dropdown-menu", function (e) {
                e.stopPropagation();
            });
            $('.main_navigation .dropdown .dropdown-submenu').click(function(e){
                e.stopPropagation();
                $(this).toggleClass('open');
            });
        };

    });
</script>        
        <!-- CONTENT START -->
        

    <div class="container-fluid container-shadow">
        <div class="row">
            <!-- BANNER START -->
            <div class="full_width_banner page_top_banner transcription_banner">
                <div class="container">
                    <div class="row">
                        <div class="banner_text col-md-6 col-sm-10 col-xs-12">
                            <h1 class="heading">Your Confidentiality is our Priority</h1>
                            <p class="desc">High precision and delivery of exceptional results make us stand ahead of the competitors.</p>
                            <div class="btn_wrap">
                                <a class="btn btn_maroon" href="/instant-quote">Get Instant Quote</a>
                                <a class="btn btn_white_gradient" href="/place-order">Place Order</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- BANNER END -->
            <!-- CONTENT START -->
            <div class="content_web business_pages_content">
                <div class="banner_bottom_section wow fadeInUp">
                    <div class="container">
                        <div class="content_block text-center">
                            <h3 class="title">Reliable Human Transcription Services</h3>
                            <p class="desc">Text features undeniable potential. You have no idea how helpful the timely transcriptions of your meetings, customers’ feedbacks and visual content can be. Besides, the confidential content such as court hearings or sensitive content like investigation reports should be transcribed for hassle-free record keeping. No matter what the purpose is and in which language you need transcription, Mars Translation has got you covered.</p>
                        </div>
                    </div>
                </div>
                <section class="features_list_section">
                    <div class="container">
                        <span class="red_circle first repel_circle wow zoomIn" data-wow-delay="1s">&nbsp;</span>
                        <div class="text_row text-center">
                            <h2 class="heading">Clear, Concise Content by Certified Professionals</h2>
                            <p class="desc">Our proven track record, trained and experienced transcriptionists and confidentiality make us your go-to option for all the audio and video transcriptions. We work with special attention to detail and deliver perfectly transcribed content in any language.</p>
                        </div>
                        <div class="features_list flexbox_container space_between">
                            <div class="media single_item wow fadeInUp" data-wow-delay="1s">
                                <div class="media-left media-top">
										<span class="icons purple">
											<svg xmlns="http://www.w3.org/2000/svg" width="21.125" height="21" viewBox="0 0 21.125 21">
											<defs>
												<style>
													.icons .cls-1 {
                                                        fill: #fff;
                                                        fill-rule: evenodd;
                                                    }
												</style>
												</defs>
												<path class="cls-1" d="M291.966,1180.32s-4.944-1.66-5.1-1.67c-0.017.06-.034,0.13-0.051,0.18-0.237.89-.474,1.78-0.745,2.65-0.321,1.04-.694,2.06-1.05,3.09a0.038,0.038,0,0,1-.016.03,2.991,2.991,0,0,1-.153.34c-0.068-.47-0.152-1.09-0.237-1.7-0.085-.67-0.169-1.32-0.22-1.76a0.092,0.092,0,0,0-.1-0.08h-1.608a0.1,0.1,0,0,0-.1.08c-0.051.44-.135,1.09-0.22,1.76-0.085.61-.169,1.23-0.237,1.7a2.991,2.991,0,0,1-.153-0.34,0.08,0.08,0,0,0-.016-0.03c-0.356-1.03-.729-2.05-1.05-3.09-0.271-.87-0.508-1.76-0.745-2.65-0.017-.07-0.034-0.12-0.051-0.18-0.136.01-5.1,1.67-5.1,1.67-2.134.71-2.015,2.13-2.015,2.13v2.82a1.64,1.64,0,0,0,1.541,1.7h17.915a1.64,1.64,0,0,0,1.541-1.7v-2.82S294.117,1181.03,291.966,1180.32Zm-7.1-.53-0.22-.42a0.274,0.274,0,0,0-.237-0.15h-1.829a0.255,0.255,0,0,0-.237.15l-0.22.42a0.272,0.272,0,0,0,0,.23l0.423,0.87a0.058,0.058,0,0,0,.051.04h1.812a0.09,0.09,0,0,0,.051-0.04l0.423-.87A0.223,0.223,0,0,0,284.871,1179.79Zm3.3-7.74v-0.01h0a0.953,0.953,0,0,0-.609-0.96v-0.03c0-.05.016-0.1,0.016-0.15q0.026-.21.051-0.39a5.376,5.376,0,0,0,.17-1.14,2.826,2.826,0,0,0-1.745-2.83c-0.118-.05-0.254-0.1-0.372-0.15a6.087,6.087,0,0,0-2.168-.39,3.766,3.766,0,0,0-.474.02,4.49,4.49,0,0,0-1.608.31c-0.051.04-.119,0.07-0.17,0.11a1.659,1.659,0,0,0-.525.52,0.239,0.239,0,0,0-.067.1,1.157,1.157,0,0,1-.153.2,3.466,3.466,0,0,1-.339.22,1.012,1.012,0,0,0-.524.46,2.417,2.417,0,0,0-.271,1.11,9.5,9.5,0,0,0,.033,1.23c0.017,0.16.051,0.32,0.068,0.47v0.03a2.3,2.3,0,0,1,.051.3H279.5a0.91,0.91,0,0,0-.643.97v0.34c0.017,0.15.034,0.29,0.05,0.42,0.017,0.07.017,0.13,0.034,0.2a1.734,1.734,0,0,0,.881,1.38c0.017,0.01.017,0.01,0.017,0.05a4.258,4.258,0,0,0,1.761,2.6c0.118,0.06.237,0.15,0.356,0.21h0.016a4.169,4.169,0,0,0,.576.24c0.017,0,.017,0,0.034.02a4.879,4.879,0,0,0,.508.15,2.517,2.517,0,0,0,.474.03h0.051c0.152,0,.288-0.02.44-0.03a4.528,4.528,0,0,0,.491-0.15l0.034-.02a3.61,3.61,0,0,0,.593-0.25h0.017c0.118-.07.237-0.14,0.355-0.22a3.846,3.846,0,0,0,1.169-1.23,4.6,4.6,0,0,0,.372-0.75c0.051-.12.068-0.22,0.1-0.32a0.8,0.8,0,0,1,.1-0.28,2.846,2.846,0,0,1,.237-0.22c0.05-.05.1-0.09,0.152-0.14a1.674,1.674,0,0,0,.508-1.09c0.017-.06.017-0.13,0.034-0.2a3.094,3.094,0,0,0,.051-0.42A0.421,0.421,0,0,1,288.173,1172.05Z" transform="translate(-272.875 -1166)"/>
											</svg>
										</span>
                                </div>
                                <div class="media-body">
                                    <h4 class="title">Human Generated</h4>
                                    <p class="desc">We don’t rely on machines for transcribing your confidential and critical data. Our team of skilled and experienced professionals meticulously transcribe your content.</p>
                                </div>
                            </div>
                            <div class="media single_item wow fadeInUp">
                                <div class="media-left media-top">
										<span class="icons green">
											<svg xmlns="http://www.w3.org/2000/svg" width="23" height="26" viewBox="0 0 23 26">
											<defs>
												<style>
													.icons .cls-1 {
                                                        fill: #fff;
                                                        fill-rule: evenodd;
                                                    }
												</style>
												</defs>
												<path class="cls-1" d="M767,1177.15a2.226,2.226,0,1,0-2.159-2.23A2.2,2.2,0,0,0,767,1177.15Zm-3.9.94,0.8,0.82,0.681-.51a0.221,0.221,0,0,1,.3,0,4.744,4.744,0,0,0,1.174.51,0.326,0.326,0,0,1,.228.27v4.57h1.477v-4.53a0.251,0.251,0,0,1,.227-0.27,3.955,3.955,0,0,0,1.136-.51,0.276,0.276,0,0,1,.3,0l0.682,0.51,0.8-.86-0.492-.71a0.238,0.238,0,0,1,0-.31,4.736,4.736,0,0,0,.492-1.21,0.352,0.352,0,0,1,.228-0.24l0.833-.15v-1.17l-0.833-.16a0.29,0.29,0,0,1-.228-0.23,4.147,4.147,0,0,0-.492-1.18,0.3,0.3,0,0,1,0-.31l0.492-.7-0.8-.82-0.682.51a0.243,0.243,0,0,1-.3,0,4.72,4.72,0,0,0-1.136-.51,0.351,0.351,0,0,1-.227-0.24l-0.152-.86h-1.136l-0.151.86a0.291,0.291,0,0,1-.228.24,4.4,4.4,0,0,0-1.174.51,0.4,0.4,0,0,1-.3,0l-0.681-.51-0.8.82,0.455,0.7a0.242,0.242,0,0,1,0,.31,5.2,5.2,0,0,0-.493,1.18,0.356,0.356,0,0,1-.227.23l-0.8.16v1.17l0.833,0.15a0.289,0.289,0,0,1,.227.24,4.065,4.065,0,0,0,.493,1.21,0.3,0.3,0,0,1,0,.31Zm3.9-6.02a2.759,2.759,0,0,1,2.727,2.81,2.787,2.787,0,0,1-2.727,2.85,2.759,2.759,0,0,1-2.727-2.81A2.794,2.794,0,0,1,767,1172.07Zm0.417-5.04a7.752,7.752,0,0,0-8.029,7.85,7.957,7.957,0,0,0,1.931,5.24,5.648,5.648,0,0,1,1.439,3.63h2.955v-4.34a5.363,5.363,0,0,1-.909-0.39l-0.72.51a0.28,0.28,0,0,1-.379-0.04l-1.136-1.17a0.308,0.308,0,0,1-.038-0.39l0.493-.74a5.765,5.765,0,0,1-.417-1.02l-0.871-.15a0.288,0.288,0,0,1-.227-0.28v-1.68a0.259,0.259,0,0,1,.227-0.27l0.871-.16a5.677,5.677,0,0,1,.417-1.01l-0.493-.75a0.309,0.309,0,0,1,.038-0.39l1.136-1.17a0.3,0.3,0,0,1,.379-0.04l0.72,0.51a7.477,7.477,0,0,1,.984-0.43l0.152-.9a0.281,0.281,0,0,1,.265-0.23h1.629a0.258,0.258,0,0,1,.265.23l0.151,0.9a4.867,4.867,0,0,1,.985.43l0.719-.51a0.3,0.3,0,0,1,.379.04l1.136,1.17a0.307,0.307,0,0,1,.038.39l-0.492.75a4.721,4.721,0,0,1,.417,1.01l0.871,0.16a0.287,0.287,0,0,1,.227.27v1.68a0.263,0.263,0,0,1-.227.28l-0.871.15a5.026,5.026,0,0,1-.417,1.02l0.492,0.74a0.306,0.306,0,0,1-.038.39l-1.136,1.17a0.28,0.28,0,0,1-.379.04l-0.719-.51a3.956,3.956,0,0,1-.909.39v4.34h2.954a5.543,5.543,0,0,1,1.364-3.52,7.765,7.765,0,0,0,2.007-5.66A7.866,7.866,0,0,0,767.414,1167.03Zm3.825,17.31h-8.484a1.111,1.111,0,0,0-1.1,1.13,1.215,1.215,0,0,0,.379.86,1.131,1.131,0,0,0-.379.86,1.118,1.118,0,0,0,1.1,1.13h1.137a1.308,1.308,0,0,0-.152.55,1.118,1.118,0,0,0,1.1,1.13h4.242a1.118,1.118,0,0,0,1.1-1.13,0.923,0.923,0,0,0-.152-0.55h1.136a1.139,1.139,0,0,0,.72-1.99A1.113,1.113,0,0,0,771.239,1184.34Zm-3.743-17.37a0.563,0.563,0,0,0,.485-0.63v-1.79a0.575,0.575,0,0,0-.485-0.55,0.552,0.552,0,0,0-.485.62v1.8A0.534,0.534,0,0,0,767.5,1166.97Zm-5.585.79a0.627,0.627,0,0,0,.757.17,0.373,0.373,0,0,0,.228-0.58l-0.909-1.16a0.632,0.632,0,0,0-.758-0.18,0.372,0.372,0,0,0-.227.58Zm-4.678,2.27,1.154,0.91a0.361,0.361,0,0,0,.577-0.23,0.616,0.616,0,0,0-.173-0.76l-1.154-.9a0.358,0.358,0,0,0-.577.22A0.732,0.732,0,0,0,757.233,1170.03Zm18.53,10.91-1.127-.88a0.355,0.355,0,0,0-.564.22,0.582,0.582,0,0,0,.169.73l1.128,0.89a0.358,0.358,0,0,0,.563-0.22A0.62,0.62,0,0,0,775.763,1180.94Zm-17.772-5.44a0.464,0.464,0,0,0-.431-0.5h-1.131a0.506,0.506,0,0,0,0,1h1.185A0.509,0.509,0,0,0,757.991,1175.5Zm20.368-.5H776.62a0.574,0.574,0,0,0-.632.5,0.566,0.566,0,0,0,.632.5h1.739A0.514,0.514,0,1,0,778.359,1175Zm-20.014,5.09-1.154.88a0.612,0.612,0,0,0-.173.74,0.378,0.378,0,0,0,.577.22l1.154-.89a0.594,0.594,0,0,0,.173-0.73A0.368,0.368,0,0,0,758.345,1180.09Zm17.292-9.15,1.127-.91a0.647,0.647,0,0,0,.17-0.76,0.353,0.353,0,0,0-.564-0.22l-1.128.9a0.652,0.652,0,0,0-.169.76A0.376,0.376,0,0,0,775.637,1170.94Zm-4.326-3.04a0.482,0.482,0,0,0,.735-0.26l0.881-1.7a0.634,0.634,0,0,0-.22-0.85,0.473,0.473,0,0,0-.735.25l-0.881,1.71A0.659,0.659,0,0,0,771.311,1167.9Z" transform="translate(-756 -1164)"/>
											</svg>
										</span>
                                </div>
                                <div class="media-body">
                                    <h4 class="title">Professional Efficiency</h4>
                                    <p class="desc">We work to exceed your expectations. Our transcribers are highly experienced, and they go to an extra mile for delivering accurate and reliable results timely.</p>
                                </div>
                            </div>
                            <div class="media single_item wow fadeInUp">
                                <div class="media-left media-top">
										<span class="icons orange">
											<svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26">
											<defs>
												<style>
													.icons .cls-1 {
                                                        fill: #fff;
                                                        fill-rule: evenodd;
                                                    }
												</style>
												</defs>
												<path class="cls-1" d="M273.891,1447a1.178,1.178,0,0,0,.579.16,0.875,0.875,0,0,0,.683-0.31,1.018,1.018,0,0,0,.2-0.89l-0.222-1.26,0.941-.9a1,1,0,0,0,.334-1.04,1.031,1.031,0,0,0-.892-0.65l-1.3-.18-0.583-1.16a1.016,1.016,0,0,0-.9-0.62,1.034,1.034,0,0,0-.9.62l-0.582,1.16-1.3.18a1.031,1.031,0,0,0-.892.65,1,1,0,0,0,.333,1.04l0.941,0.9-0.221,1.26a1.028,1.028,0,0,0,.2.89,1.007,1.007,0,0,0,1.262.15l1.166-.59Zm22.175-4.89-1.3-.18-0.582-1.15a0.967,0.967,0,0,0-1.809-.01l-0.582,1.16-1.3.18a1.031,1.031,0,0,0-.891.65,1,1,0,0,0,.333,1.04l0.941,0.9-0.222,1.26a1.024,1.024,0,0,0,.2.89,1.008,1.008,0,0,0,1.263.15l1.165-.59,1.165,0.59a1.18,1.18,0,0,0,.579.16,0.874,0.874,0,0,0,.683-0.31,1.031,1.031,0,0,0,.2-0.89l-0.222-1.26,0.941-.9a1,1,0,0,0,.334-1.04A1.033,1.033,0,0,0,296.066,1442.11ZM283,1436.93a4.966,4.966,0,1,0-5.063-4.96A5.011,5.011,0,0,0,283,1436.93Zm3.329,12.35,1.565-1.56a1.155,1.155,0,0,0-.684-2.09l-2.143-.32-0.963-2.01a1.153,1.153,0,0,0-2.207,0l-0.963,2.01-2.143.32a1.155,1.155,0,0,0-.685,2.09l1.566,1.56-0.37,2.22a1.343,1.343,0,0,0,.247,1.15,1.21,1.21,0,0,0,1.541.14l1.91-1.03,1.911,1.03a1.569,1.569,0,0,0,.748.21,1.051,1.051,0,0,0,.793-0.35,1.343,1.343,0,0,0,.247-1.15Zm-11.632-9.02,0.305,0.6,0.683,0.1a2.17,2.17,0,0,1,1.854,1.44,2.137,2.137,0,0,1-.637,2.24l-0.49.46,0.115,0.66a2.6,2.6,0,0,1,.034.29v-0.01a2.457,2.457,0,0,1,2.05-1.57l1.515-.22,0.693-1.44a2.336,2.336,0,0,1,4.362,0l0.692,1.44,1.515,0.22a2.458,2.458,0,0,1,2.049,1.57s0,0.01,0,.01a2.6,2.6,0,0,1,.033-0.29l0.115-.66-0.49-.46a2.141,2.141,0,0,1-.637-2.24,2.171,2.171,0,0,1,1.855-1.44l0.683-.1,0.3-.6a2.515,2.515,0,0,1,.441-0.62,8.223,8.223,0,0,0-4.375-3.29,6.327,6.327,0,0,1-8.8-.06,8,8,0,0,0-4.4,3.26A2.533,2.533,0,0,1,274.7,1440.26Zm18.579,7.46-0.612.32a2.24,2.24,0,0,1-2.727-.43,2.178,2.178,0,0,1-.4-0.72,2.637,2.637,0,0,1-.8,1.65l-1.142,1.14,0.009,0.06h4.567a1.518,1.518,0,0,0,1.539-1.42c0-.12,0-0.24,0-0.37Zm-14.877,1.96-1.144-1.15a2.6,2.6,0,0,1-.8-1.64,2.16,2.16,0,0,1-.4.72,2.116,2.116,0,0,1-1.594.72,2.464,2.464,0,0,1-1.132-.29l-0.612-.32-0.443.23c0,0.13,0,.25.008,0.37a1.525,1.525,0,0,0,1.544,1.42h4.555Z" transform="translate(-269 -1427)"/>
											</svg>
										</span>
                                </div>
                                <div class="media-body">
                                    <h4 class="title">Fast Response</h4>
                                    <p class="desc">We ensure a quick response to meet your emergency transcription needs. Our trained, committed and responsive customer care team gets back to you in no time.</p>
                                </div>
                            </div>
                            <div class="media single_item wow fadeInUp" data-wow-delay="1s">
                                <div class="media-left media-top">
									<span class="icons red">
										<svg xmlns="http://www.w3.org/2000/svg" width="19" height="21" viewBox="0 0 19 21">
										<defs>
											<style>
												.icons .cls-1 {
                                                    fill: #fff;
                                                    fill-rule: evenodd;
                                                }
											</style>
											</defs>
											<path class="cls-1" d="M767.294,1450.97a13.823,13.823,0,0,1-9.289-13.02v-5.87a0.488,0.488,0,0,1,.486-0.49c3.448,0,6.9-.54,8.732-1.53a0.473,0.473,0,0,1,.233-0.06h0.091a0.48,0.48,0,0,1,.234.06c1.829,0.99,5.283,1.53,8.731,1.53a0.489,0.489,0,0,1,.487.49v5.87a13.824,13.824,0,0,1-9.29,13.02,0.451,0.451,0,0,1-.162.03h-0.091A0.451,0.451,0,0,1,767.294,1450.97Zm3.85-8.57v-3.61a1.462,1.462,0,0,0-.856-1.33v-1.16a2.786,2.786,0,0,0-5.572,0v1.16a1.462,1.462,0,0,0-.856,1.33v3.61a1.455,1.455,0,0,0,1.458,1.45h4.368A1.455,1.455,0,0,0,771.144,1442.4Zm-4.017-.85v-1.01a0.655,0.655,0,1,1,.853,0v1.01A0.427,0.427,0,1,1,767.127,1441.55Zm-1.217-4.22v-1.03a1.592,1.592,0,0,1,3.184,0v1.03H765.91Z" transform="translate(-758 -1430)"/>
										</svg>
									</span>
                                </div>
                                <div class="media-body">
                                    <h4 class="title">Confidentiality</h4>
                                    <p class="desc">We safeguard your privacy and ensure full confidentiality. We offer an SSL-secure platform through which you can send your content without any hesitations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="transcription_services_list pd_lg clearfix">
                    <div class="container">
                        <span class="yellow_circle first repel_circle wow zoomIn" data-wow-delay="1s">&nbsp;</span>
                        <span class="cyan_circle first repel_circle wow zoomIn" data-wow-delay="1s">&nbsp;</span>
                        <div class="text_row text-center">
                            <h3 class="heading">Top-class Human Transcription Services for every Industry</h3>
                            <p class="desc">We serve all the industries and deliver quality content at competitive rates.<br>Some of the primary industries which take our services include:</p>
                        </div>
                        <ul class="list-unstyled content_list clearfix">
                            <li class="col-md-3 col-sm-6 col-xs-6 wow fadeInRight" data-wow-delay="1s">
                                <div class="single_item">
										<span class="svg_icon">
											<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                 viewBox="0 0 29 35" style="enable-background:new 0 0 29 35;" xml:space="preserve">
											<style type="text/css">
												.path_1{opacity:0.8;fill:url(#SVGID_1_);enable-background:new;}
                                                .path_2{opacity:0.8;fill:url(#SVGID_2_);enable-background:new;}
                                                .path_3{opacity:0.8;fill:url(#SVGID_3_);enable-background:new;}
                                                .path_4{fill:#FFFFFF;}
                                                .path_5{opacity:0.8;fill:url(#SVGID_4_);enable-background:new;}
											</style>
											<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="24.2869" y1="-1.641908e-02" x2="4.7131" y2="36.7964" gradientTransform="matrix(1 0 0 -1 0 35.89)">
												<stop  offset="0" style="stop-color:#EF456D"/>
												<stop  offset="1" style="stop-color:#F04E34"/>
											</linearGradient>
											<path class="path_1" d="M4,0h21c2.2,0,4,1.8,4,4v27c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4V4C0,1.8,1.8,0,4,0z"/>
											<g>
												<g>
													<path class="path_4" d="M12.3,22.9l5.6-3.2l-5.6-3.2V22.9z M21.1,8l1.3,4.1h-2.7L18.5,8h-3.1l1.3,4.1h-2.7L12.7,8H9.5l1.3,4.1H8.1
														L6.9,8H6.5C5.7,8,5,8.7,5,9.5v15.9C5,26.3,5.7,27,6.5,27h15.9c0.9,0,1.5-0.7,1.5-1.5V8H21.1z M14.5,25.3c-3.1,0-5.7-2.5-5.7-5.7
														c0-3.1,2.5-5.7,5.7-5.7c3.1,0,5.7,2.5,5.7,5.7C20.2,22.8,17.6,25.3,14.5,25.3z"/>
												</g>
											</g>
											</svg>
										</span>
                                    <h4 class="title">Media and Communication</h4>
                                    <ul class="list-unstyled">
                                        <li>Seminars</li>
                                        <li>Podcasts</li>
                                        <li>Movies</li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-md-3 col-sm-6 col-xs-6 wow fadeInUp">
                                <div class="single_item">
                                    <p class="svg_icon">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                             viewBox="0 0 29 35" style="enable-background:new 0 0 29 35;" xml:space="preserve">
												<style type="text/css">
                                                    .path_1{opacity:0.8;fill:url(#SVGID_1_);enable-background:new;}
                                                    .path_2{opacity:0.8;fill:url(#SVGID_2_);enable-background:new;}
                                                    .path_3{opacity:0.8;fill:url(#SVGID_3_);enable-background:new;}
                                                    .path_4{fill:#FFFFFF;}
                                                    .path_5{opacity:0.8;fill:url(#SVGID_4_);enable-background:new;}
                                                </style>
                                            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="24.2869" y1="-1.641908e-02" x2="4.7131" y2="36.7964" gradientTransform="matrix(1 0 0 -1 0 35.89)">
                                                <stop  offset="0" style="stop-color:#EF456D"/>
                                                <stop  offset="1" style="stop-color:#F04E34"/>
                                            </linearGradient>
                                            <path class="path_1" d="M4,0h21c2.2,0,4,1.8,4,4v27c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4V4C0,1.8,1.8,0,4,0z"/>
                                            <g>
                                                <g>
                                                    <path class="path_4" d="M22.5,12.7h-2.2v-0.3c0-2.4-2-4.4-4.4-4.4h-2.6c-2.4,0-4.4,2-4.4,4.4v0.3H6.5c-1.1,0-2,0.9-2,2v1.5
															c0,0.4,0.1,0.7,0.3,1v6c0,2.1,1.7,3.8,3.8,3.8h11.7c2.1,0,3.8-1.7,3.8-3.8v-5.9h-2v1.2c0,0.3-0.2,0.4-0.4,0.4
															c-0.3,0-0.4-0.2-0.4-0.4v-1.2H7.9v1.3c0,0.3-0.2,0.4-0.4,0.4c-0.3,0-0.4-0.2-0.4-0.4v-1.3H4.9v-0.3H7v-0.6c0-0.3,0.2-0.4,0.4-0.4
															c0.3,0,0.4,0.2,0.4,0.4v0.6h13.5v-0.7c0-0.3,0.2-0.4,0.4-0.4c0.3,0,0.4,0.2,0.4,0.4v0.7h2v0c0.1-0.3,0.2-0.6,0.2-0.9v-1.5
															C24.5,13.6,23.6,12.7,22.5,12.7z M14.5,18.2c2.3,0,4.1,1.8,4.1,4c0,2.2-1.8,4-4.1,4c-2.3,0-4.1-1.8-4.1-4
															C10.4,20,12.2,18.2,14.5,18.2z M19,12.7h-9v-0.3c0-1.7,1.4-3.1,3.2-3.1h2.6c1.7,0,3.2,1.4,3.2,3.1V12.7z M13.7,25h1.6v-2l2,0
															l0-1.6h-2.1v-2h-1.6v2l-2,0l0,1.6h2.1V25z"/>
                                                </g>
                                            </g>
											</svg>
                                    </p>
                                    <h4 class="title">Medical and Health Care</h4>
                                    <ul class="list-unstyled">
                                        <li>Consultations</li>
                                        <li>Medical Reports</li>
                                        <li>Patients History</li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-md-3 col-sm-6 col-xs-6 wow fadeInUp">
                                <div class="single_item">
                                    <p class="svg_icon">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                             viewBox="0 0 29 35" style="enable-background:new 0 0 29 35;" xml:space="preserve">
												<style type="text/css">
                                                    .path_1{opacity:0.8;fill:url(#SVGID_1_);enable-background:new;}
                                                    .path_2{opacity:0.8;fill:url(#SVGID_2_);enable-background:new;}
                                                    .path_3{opacity:0.8;fill:url(#SVGID_3_);enable-background:new;}
                                                    .path_4{fill:#FFFFFF;}
                                                    .path_5{opacity:0.8;fill:url(#SVGID_4_);enable-background:new;}
                                                </style>
                                            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="24.2869" y1="-1.641908e-02" x2="4.7131" y2="36.7964" gradientTransform="matrix(1 0 0 -1 0 35.89)">
                                                <stop  offset="0" style="stop-color:#EF456D"/>
                                                <stop  offset="1" style="stop-color:#F04E34"/>
                                            </linearGradient>
                                            <path class="path_1" d="M4,0h21c2.2,0,4,1.8,4,4v27c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4V4C0,1.8,1.8,0,4,0z"/>
                                            <g>
                                                <g>
                                                    <path class="path_4" d="M5.5,10.4v0.8h2.3v-0.8H5.5z M5.5,13.8v0.7h2.3v-0.7H5.5z M5.5,17.1v0.8h2.3v-0.8H5.5z M5.5,20.5v0.8h2.3
															v-0.8H5.5z M5.5,23.5v1h2v-1H5.5z M7.8,8.5v1.9H10v0.8H7.8v2.6H10v0.7H7.8v2.6H10v0.8H7.8v2.6H10v0.8H7.8l-0.2,2.2h3v1h-3v2h16
															v-18H7.8z M15.9,12h0.4v3.3h3.3v0.4c0,2-1.6,3.7-3.7,3.7c-2,0-3.7-1.6-3.7-3.7C12.3,13.7,13.9,12,15.9,12z M20.5,25.5h-9v-1h9
															V25.5z M20.5,23.5h-9v-1h9V23.5z M20.5,21.5h-5v-1h5V21.5z M21.3,14.4h-4v-4h0.4c2,0,3.7,1.6,3.7,3.7V14.4z"/>
                                                </g>
                                            </g>
											</svg>
                                    </p>
                                    <h4 class="title">Business</h4>
                                    <ul class="list-unstyled">
                                        <li>Conferences</li>
                                        <li>Interviews</li>
                                        <li>Meetings</li>
                                    </ul>
                                </div>
                            </li>
                            <li class="col-md-3 col-sm-6 col-xs-6 wow fadeInLeft" data-wow-delay="1s">
                                <div class="single_item">
                                    <p class="svg_icon">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                             viewBox="0 0 29 35" style="enable-background:new 0 0 29 35;" xml:space="preserve">
												<style type="text/css">
                                                    .path_1{opacity:0.8;fill:url(#SVGID_1_);enable-background:new;}
                                                    .path_2{opacity:0.8;fill:url(#SVGID_2_);enable-background:new;}
                                                    .path_3{opacity:0.8;fill:url(#SVGID_3_);enable-background:new;}
                                                    .path_4{fill:#FFFFFF;}
                                                    .path_5{opacity:0.8;fill:url(#SVGID_4_);enable-background:new;}
                                                </style>
                                            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="24.2869" y1="-1.641908e-02" x2="4.7131" y2="36.7964" gradientTransform="matrix(1 0 0 -1 0 35.89)">
                                                <stop  offset="0" style="stop-color:#EF456D"/>
                                                <stop  offset="1" style="stop-color:#F04E34"/>
                                            </linearGradient>
                                            <path class="path_1" d="M4,0h21c2.2,0,4,1.8,4,4v27c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4V4C0,1.8,1.8,0,4,0z"/>
                                            <g>
                                                <g>
                                                    <path class="path_4" d="M23.2,24.1c-2.4-2.5-4.7-5.1-7.1-7.6c-0.1-0.1-0.1-0.2-0.2-0.2c0.4-0.6,0.8-1.2,1.1-1.7
															c0.2-0.3,0.2-0.5-0.1-0.8c-1.1-1.2-2.2-2.4-3.2-3.6c-0.2-0.3-0.4-0.3-0.7-0.2c-0.6,0.3-1.3,0.6-1.8,0.9c-1.2,0.9-2.3,1.8-3,3.2
															C8,14.4,8,14.6,8.3,14.9c1.1,1.2,2.1,2.4,3.2,3.6c0.2,0.3,0.5,0.3,0.8,0.2c0.6-0.3,1.2-0.6,1.9-0.9c0.7,0.8,1.4,1.7,2.1,2.5
															c1.6,1.9,3.2,3.8,4.7,5.7c0.1,0.1,0.2,0.2,0.3,0.3c0.8,0.8,1.9,0.7,2.5-0.3c0-0.1,0.1-0.1,0.1-0.2c0-0.1,0-0.1,0.1-0.2
															C24,25.1,23.7,24.6,23.2,24.1z M17.2,13.2c0.4,0.5,1.2,0.5,1.6,0.1c0.5-0.4,0.5-1.1,0.1-1.6l-3-3.3c-0.4-0.5-1.2-0.5-1.6-0.1
															c-0.5,0.4-0.5,1.1-0.1,1.6L17.2,13.2z M9.2,20.3c0.4,0.5,1.2,0.5,1.6,0.1c0.5-0.4,0.5-1.1,0.1-1.6l-3-3.3
															c-0.4-0.5-1.2-0.5-1.6-0.1c-0.5,0.4-0.5,1.1-0.1,1.6L9.2,20.3z M14,24.6c-1.4,0-2.8,0-4.3,0c-1.2,0-2.4,0-3.6,0
															c-0.3,0-0.6,0.1-0.8,0.4c-0.1,0.2-0.2,0.4-0.2,0.6c-0.1,0.9,0.3,1.4,1.2,1.4c1.3,0,2.6,0,3.9,0c1.3,0,2.7,0,4,0c0.1,0,0.2,0,0.4,0
															c0.5-0.1,0.7-0.5,0.7-0.9C15.3,25.1,14.9,24.6,14,24.6z M7.1,22.5c-0.2,0-0.4,0.1-0.5,0.3c-0.1,0.2-0.1,0.5-0.1,0.7
															c0.1,0.4,0.3,0.6,0.7,0.6c0.9,0,1.9,0,2.8,0c1,0,1.9,0,2.9,0c0.4,0,0.6-0.2,0.6-0.5c0-0.2,0-0.3,0-0.5c0-0.5-0.3-0.7-0.7-0.7
															c-1.8,0-3.7,0-5.5,0C7.3,22.5,7.2,22.5,7.1,22.5z"/>
                                                </g>
                                            </g>
											</svg>
                                    </p>
                                    <h4 class="title">Legal</h4>
                                    <ul class="list-unstyled">
                                        <li>Court Hearings</li>
                                        <li>Recorded Statements</li>
                                        <li>Insurance Investigations</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <div class="expert_transaltion_services_page">
                    <section class="quick_start_block clearfix">
                        <div class="container text-center">
                            <span class="desc">Kick-start your global journey with us today</span>
                            <div class="btn_wrap">
                                <a class="btn  btn_maroon" href=" /place-order">Order Online</a>
                                <a class="btn btn_lg btn_white_fill" href="/free-consultation">Consult for Free</a>
                            </div>
                        </div>
                    </section>
                    <section class="white_bg pd_lg customer_feedback_with_multiple_slides wow fadeInUp clearfix">
                        <div class="container">
                            <div class="text_row less_space text-center">
                                <h2 class="heading">What our Customers Say?</h2>
                                <p class="desc">Our customers are a testament of our professional translation approach</p>
                            </div>
                            <div id="testimonial-carousel" class="carousel slide testimonial-carousel" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="item active">
                                        <div class="media">
                                            <div class="media-left media-top text-center">
                                                <img src="/assets/images/ui/home-testimonial-img.png" class="media-object">
                                                <h5 class="image_title text-uppercase">Kelton Glewwe</h5>
                                                <p class="desc">Roadware Inc</p>
                                            </div>
                                            <div class="media-body">
                                                <p class="feedback_text">We used ccjk (Mars parent company) for SDS data sheet translation from English to Simplifies Chinese. Candy did a great job communicating details about the project and getting the job done on time. We will use her services again when needed.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="media">
                                            <div class="media-left media-top text-center">
                                                <img src="/assets/images/ui/peter.jpg" class="media-object">
                                                <h5 class="image_title text-uppercase">Peter</h5>
                                                <p class="desc">Pheenx.com</p>
                                            </div>
                                            <div class="media-body">
                                                <p class="feedback_text">Your service was excellent. I had native language speakers review the finished content and they informed me the quality was excellent. I will definitely be using your service in the future.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="media">
                                            <div class="media-left media-top text-center">
                                                <img src="/assets/images/ui/kim-clark.jpg" class="media-object">
                                                <h5 class="image_title text-uppercase">Kim Clark</h5>
                                                <p class="desc">EnBIO</p>
                                            </div>
                                            <div class="media-body">
                                                <p class="feedback_text">I will use Mars Translation in the future and I would definitely recommend them to anyone looking for language translation services.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <div class="media">
                                            <div class="media-left media-top text-center">
                                                <img src="/assets/images/ui/sherry.jpg" class="media-object">
                                                <h5 class="image_title text-uppercase">Sherry</h5>
                                                <p class="desc">Manager<br>Marketing Dept.</p>
                                            </div>
                                            <div class="media-body">
                                                <p class="feedback_text">The first proofs were the final documents. We had no changes. This is our 2nd time using this vendor and we will use again. Thanks!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Left and right controls -->
                                <div class="feedback_carousel_controls text-center">
                                    <a class="left carousel-control" href="#testimonial-carousel" data-slide="prev">
                                        <span class="icon left"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <span class="slide_number">
											<span id="current-slide" class="slide_item_number">1</span>
											<span class='slide_nmber_divider'>/</span>
											<span id="total-slide" class="slide_item_number"></span>
										</span>
                                    <a class="right carousel-control" href="#testimonial-carousel" data-slide="next">
                                        <span class="icon right"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="blog_slider_block pd_lg wow fadeInUp clearfix">
                        <div class="container">
                            <span class="red_circle second repel_circle wow zoomIn" data-wow-delay="1s">&nbsp;</span>
                            <span class="cyan_circle second repel_circle wow zoomIn" data-wow-delay="1s">&nbsp;</span>
                            <span class="yellow_circle second repel_circle wow zoomIn" data-wow-delay="1s">&nbsp;</span>
                            <div class="text_row text-center">
                                <h3 class="heading">What’s New?</h3>
                                <p class="desc">Browse through the topics of interest in the global world of translation</p>
                            </div>
                            <div id="blog_carousel" class="blog_carousel carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="item active">
                                        <ul class="blog_list list-unstyled clearfix">
                                                                                            <li class="col-md-3 col-xs-6">
                                                    <div class="blog_list_item">
                                                        <span class="blog_bg" style="background: url(https://s3.amazonaws.com/marstranslation.aws.bucket/default/0004/13/770b124e95f7b81d9568741d596f47f448000bd6.jpeg) no-repeat;background-size: cover;">&nbsp;</span>
                                                        <div class="caption">
                                                            <h4 class="heading"> Spanish Speaking Countries in Europe
                                                                </h4>
                                                            <p class="desc">
                                                                                                                                                                                                                                                                            Spanish
                                                                                                                                            is
                                                                                                                                            a
                                                                                                                                            powerful
                                                                                                                                            language
                                                                                                                                            with
                                                                                                                                            the
                                                                                                                                            second
                                                                                                                                            highest
                                                                                                                                            number
                                                                                                                                            of
                                                                                                                                            native
                                                                                                                                            speakers.
                                                                                                                                            There
                                                                                                                                            are
                                                                                                                                            Spanish-speaking
                                                                                                                                            countries
                                                                                                                                            in
                                                                                                                                            Europe,
                                                                                                                                            then
                                                                                                                                    </p>
                                                            <a class="read_more" href="/blog/spanish-speaking-countries-in-europe">Read More <span class="arrow_icons">&nbsp;</span></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                                                            <li class="col-md-3 col-xs-6">
                                                    <div class="blog_list_item">
                                                        <span class="blog_bg" style="background: url(https://s3.amazonaws.com/marstranslation.aws.bucket/default/0004/08/1cd1f7a1da40449428fd36f665dff51daba84128.jpeg) no-repeat;background-size: cover;">&nbsp;</span>
                                                        <div class="caption">
                                                            <h4 class="heading"> Spanish Speaking Countries in South America
                                                                </h4>
                                                            <p class="desc">
                                                                                                                                                                                                                                                                            It
                                                                                                                                            is
                                                                                                                                            easier
                                                                                                                                            to
                                                                                                                                            tell
                                                                                                                                            the
                                                                                                                                            countries
                                                                                                                                            that
                                                                                                                                            don’t
                                                                                                                                            speak
                                                                                                                                            Spanish
                                                                                                                                            than
                                                                                                                                            to
                                                                                                                                            name
                                                                                                                                            the
                                                                                                                                            Spanish-speaking
                                                                                                                                            countries
                                                                                                                                            in
                                                                                                                                            South
                                                                                                                                            America.
                                                                                                                                    </p>
                                                            <a class="read_more" href="/blog/spanish-speaking-countries-in-south-america">Read More <span class="arrow_icons">&nbsp;</span></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                                                            <li class="col-md-3 col-xs-6">
                                                    <div class="blog_list_item">
                                                        <span class="blog_bg" style="background: url(https://s3.amazonaws.com/marstranslation.aws.bucket/default/0003/91/3f1ede279e09bc29b5f51ba02da44e19e3d30e44.png) no-repeat;background-size: cover;">&nbsp;</span>
                                                        <div class="caption">
                                                            <h4 class="heading"> Difference between Simplified Chinese and Traditional Chinese Language
                                                                </h4>
                                                            <p class="desc">
                                                                                                                                                                                                                                                                            From
                                                                                                                                            the
                                                                                                                                            outside,
                                                                                                                                            Chinese
                                                                                                                                            seems
                                                                                                                                            like
                                                                                                                                            a
                                                                                                                                            vast
                                                                                                                                            singular
                                                                                                                                            language.
                                                                                                                                            At
                                                                                                                                            a
                                                                                                                                            closer
                                                                                                                                            look,
                                                                                                                                            however,
                                                                                                                                            it
                                                                                                                                            can
                                                                                                                                            be
                                                                                                                                            observed
                                                                                                                                            that
                                                                                                                                    </p>
                                                            <a class="read_more" href="/blog/whats-the-difference-between-simplified-chinese-and-traditional-chinese-language">Read More <span class="arrow_icons">&nbsp;</span></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                                                            <li class="col-md-3 col-xs-6">
                                                    <div class="blog_list_item">
                                                        <span class="blog_bg" style="background: url(https://s3.amazonaws.com/marstranslation.aws.bucket/default/0003/75/e43c340ff20c3f66e47e955d23c0479315166de7.jpeg) no-repeat;background-size: cover;">&nbsp;</span>
                                                        <div class="caption">
                                                            <h4 class="heading"> Why You Need IOS App Localization?
                                                                </h4>
                                                            <p class="desc">
                                                                                                                                                                                                                                                                            Did
                                                                                                                                            you
                                                                                                                                            know
                                                                                                                                            56.2%
                                                                                                                                            of
                                                                                                                                            consumers
                                                                                                                                            claim
                                                                                                                                            that
                                                                                                                                            acquiring
                                                                                                                                            information
                                                                                                                                            in
                                                                                                                                            their
                                                                                                                                            own
                                                                                                                                            language
                                                                                                                                            is
                                                                                                                                            more
                                                                                                                                            important
                                                                                                                                            than
                                                                                                                                            the
                                                                                                                                            price
                                                                                                                                    </p>
                                                            <a class="read_more" href="/blog/why-you-need-ios-app-localization">Read More <span class="arrow_icons">&nbsp;</span></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                                                    </ul>
                                    </div>
                                    <div class="item">
                                        <ul class="blog_list list-unstyled clearfix">
                                                                                            <li class="col-md-3 col-xs-6">
                                                    <div class="blog_list_item">
                                                        <span class="blog_bg" style="background: url(https://s3.amazonaws.com/marstranslation.aws.bucket/default/0003/72/0155159a33ec1e36b23de1a0bda8f35bdcfa26a6.jpeg) no-repeat;background-size:cover;">&nbsp;</span>
                                                        <div class="caption">
                                                            <h4 class="heading"> Steps To Choose Best Android App Localization Company
                                                                </h4>
                                                            <p class="desc">
                                                                                                                                                                                                                                                                            In
                                                                                                                                            a
                                                                                                                                            world
                                                                                                                                            that
                                                                                                                                            has
                                                                                                                                            turned
                                                                                                                                            to
                                                                                                                                            a
                                                                                                                                            global
                                                                                                                                            village,
                                                                                                                                            localization
                                                                                                                                            is
                                                                                                                                            no
                                                                                                                                            longer
                                                                                                                                            a
                                                                                                                                            choice
                                                                                                                                            but
                                                                                                                                            a
                                                                                                                                            necessity.
                                                                                                                                            In
                                                                                                                                    </p>
                                                            <a class="read_more" href="/blog/steps-to-choose-best-android-app-localization-company">Read More <span class="arrow_icons">&nbsp;</span></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                                                            <li class="col-md-3 col-xs-6">
                                                    <div class="blog_list_item">
                                                        <span class="blog_bg" style="background: url(https://s3.amazonaws.com/marstranslation.aws.bucket/default/0003/67/625d9dba58cfdf6d40f24d487fc8333bbb381108.png) no-repeat;background-size:cover;">&nbsp;</span>
                                                        <div class="caption">
                                                            <h4 class="heading"> How Many Countries Speak French?
                                                                </h4>
                                                            <p class="desc">
                                                                                                                                                                                                                                                                            Curious
                                                                                                                                            aren’t
                                                                                                                                            we?
                                                                                                                                            Of
                                                                                                                                            course,
                                                                                                                                            you
                                                                                                                                            want
                                                                                                                                            to
                                                                                                                                            know
                                                                                                                                            how
                                                                                                                                            many
                                                                                                                                            countries
                                                                                                                                            speak
                                                                                                                                            French
                                                                                                                                            -
                                                                                                                                            the
                                                                                                                                            language
                                                                                                                                            of
                                                                                                                                            love.
                                                                                                                                            The
                                                                                                                                    </p>
                                                            <a class="read_more" href="/blog/how-many-countries-speak-french">Read More <span class="arrow_icons">&nbsp;</span></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                                                            <li class="col-md-3 col-xs-6">
                                                    <div class="blog_list_item">
                                                        <span class="blog_bg" style="background: url(https://s3.amazonaws.com/marstranslation.aws.bucket/default/0004/05/aa08be4460f62b533200c8016ed3d1f529040d15.png) no-repeat;background-size:cover;">&nbsp;</span>
                                                        <div class="caption">
                                                            <h4 class="heading"> How Many Countries Speak Spanish?
                                                                </h4>
                                                            <p class="desc">
                                                                                                                                                                                                                                                                            Can
                                                                                                                                            you
                                                                                                                                            imagine
                                                                                                                                            how
                                                                                                                                            many
                                                                                                                                            countries
                                                                                                                                            speak
                                                                                                                                            Spanish?
                                                                                                                                            Exactly
                                                                                                                                            the
                                                                                                                                            same
                                                                                                                                            number
                                                                                                                                            of
                                                                                                                                            countries
                                                                                                                                            that
                                                                                                                                            you
                                                                                                                                            could
                                                                                                                                            have
                                                                                                                                            a
                                                                                                                                            good
                                                                                                                                    </p>
                                                            <a class="read_more" href="/blog/how-many-countries-speak-spanish">Read More <span class="arrow_icons">&nbsp;</span></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                                                            <li class="col-md-3 col-xs-6">
                                                    <div class="blog_list_item">
                                                        <span class="blog_bg" style="background: url(https://s3.amazonaws.com/marstranslation.aws.bucket/default/0003/60/35d0d46e70618a0d02c57cf1ee4a8e1607cf251d.png) no-repeat;background-size:cover;">&nbsp;</span>
                                                        <div class="caption">
                                                            <h4 class="heading"> Top 10 Translation Companies in Pune
                                                                </h4>
                                                            <p class="desc">
                                                                                                                                                                                                                                                                            Pune
                                                                                                                                            is
                                                                                                                                            rightly
                                                                                                                                            termed
                                                                                                                                            as
                                                                                                                                            the
                                                                                                                                            industrial
                                                                                                                                            powerhouse
                                                                                                                                            on
                                                                                                                                            India. 
                                                                                                                                            Many
                                                                                                                                            local
                                                                                                                                            and
                                                                                                                                            international
                                                                                                                                            companies
                                                                                                                                            are
                                                                                                                                            located
                                                                                                                                            in
                                                                                                                                            Pune
                                                                                                                                            which
                                                                                                                                    </p>
                                                            <a class="read_more" href="/blog/top-10-translation-companies-in-pune">Read More <span class="arrow_icons">&nbsp;</span></a>
                                                        </div>
                                                    </div>
                                                </li>
                                                                                    </ul>
                                    </div>
                                </div>
                                <ol class="carousel-indicators">
                                    <li data-target="#blog_carousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#blog_carousel" data-slide-to="1"></li>
                                </ol>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <!-- CONTENT END -->



        </div>
    </div><!-- class="container" END -->
        <!-- CONTENT END -->

                        <!-- FOOTER START -->
                    <footer id="footer" class="section-footer">
    <div class="container">
                    <div class="center-block clearfix">
                <div class="col blog_block">
                    <h4 class="title text-uppercase"><i class="fa fa-rss"></i>Mars Translation Blog</h4>
                    <ul class="footer_nav blog">
                                                    <li class="nav_link"><a
                                        href="/blog/ten-most-successful-translation-services-companies-of-two-thousand-fifteen">10 Most Successful Translation Services Companies [2019]</a>
                            </li>
                                                    <li class="nav_link"><a
                                        href="/blog/spanish-speaking-countries-in-europe">Spanish Speaking Countries in Europe</a>
                            </li>
                                                    <li class="nav_link"><a
                                        href="/blog/spanish-speaking-countries-in-south-america">Spanish Speaking Countries in South America</a>
                            </li>
                                                    <li class="nav_link"><a
                                        href="/blog/10-most-spoken-languages-in-africa">10 Most Spoken Languages in Africa</a>
                            </li>
                                            </ul>
                </div>
                <div class="col">
                    <h4 class="title text-uppercase">
                        What We Do
                    </h4>
                    <ul class="footer_nav">
                        <li class="nav_link">
                            <a href="/services/document-translation-services">
                                Document Translation
                            </a>
                        </li>
                        <li class="nav_link">
                            <a href="/services/ecommerce-translation-services">
                                E-Commerce Translation
                            </a>
                        </li>
                        <li class="nav_link">
                            <a href="/services/website-translation-services">
                                Website Translation
                            </a>
                        </li>
                        <li class="nav_link">
                            <a href="/services/video-translation-services">
                                Video Translation
                            </a>
                        </li>
                        <li class="nav_link">
                            <a href="/services/elearning-translation-services">
                                E-Learning Translation
                            </a>
                        </li>
                        <li class="nav_link">
                            <a href="/services/dtp-file-conversion-services">
                                DTP &amp; File Conversion
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <h4 class="title text-uppercase">
                        Resources
                    </h4>
                    <ul class="footer_nav">
                                                                                                                                                <li class="nav_link">
                            <a href="/case-studies">
                                Case Studies
                            </a>
                        </li>
                        <li class="nav_link">
                            <a href="/white-papers">
                                White Papers
                            </a>
                        </li>
                        <li class="nav_link">
                            <a href="/magento-integration">
                                Integrations
                            </a>
                        </li>
                        <li class="nav_link">
                                                        <a href="/page/affiliate">
                                Affiliates
                            </a>
                        </li>
                        <li class="nav_link">
                            <a href="/page/api">
                                API
                            </a>
                        </li>


                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                            </ul>
                </div>
                <div class="col">
                    <h4 class="title text-uppercase">
                        FREE TOOLS
                    </h4>
                    <ul class="footer_nav">
                                                                                                                                                <li class="nav_link">
                            <a href="/freeTranslation">
                                Free Translation
                            </a>
                        </li>
                        <li class="nav_link">
                            <a href="http://align.marstranslation.com/">
                                Alignment tool
                            </a>
                        </li>
                        <li class="nav_link">
                            <a href="/convert/autocad">
                                AutoCad Conversion
                            </a>
                        </li>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                    </ul>
                </div>
                <div class="col social">
                    <h4 class="title text-uppercase">
                        Support
                    </h4>
                    <ul class="footer_nav">
                                                                                                                                                <li class="nav_link">
                            <a href="/list/customer-support">
                                Customer Support
                            </a>
                        </li>
                        <li class="nav_link">
                            <a href="/list/translator-support">
                                Translator Support
                            </a>
                        </li>
                    </ul>
                    <div class="clearfix">
                        <a class="btn btn_maroon btn_sm"
                           href="/page/join-us">Join as
                            Translator</a>
                    </div>
                                                                                                                                            <ul class="social_media footer">
                        <li><a href="https://www.facebook.com/marstranslation?ref=hl" target="_blank"><i
                                        class="icon facebook">
                                    &nbsp;</i></a></li>
                        <li><a href="https://twitter.com/MarsTranslation" target="_blank"><i class="icon twitter">&nbsp;</i></a>
                        </li>
                        <li><a href="https://plus.google.com/u/0/+MarsTranslationllc" target="_blank"><i
                                        class="icon google_plus">&nbsp;</i></a></li>
                        <li><a href="https://www.linkedin.com/company/mars-translation" target="_blank"><i
                                        class="icon linkedin">&nbsp;</i></a></li>
                        <li><a href="https://www.youtube.com/channel/UCPhuT1bUQ9EUwk-gICL20Gw/videos" target="_blank"><i
                                        class="icon youtube">&nbsp;</i></a></li>
                    </ul>
                                                                            </div>
            </div>
            <div class="text-center certifications clearfix">
                <ul class="certificates">
                    <li><a class="logo ukas no_event" href="javascript:void(0);">&nbsp;</a></li>
                    <li><a class="logo iso" href="https://www.marstranslation.com/downloads/iso-certificate-en.pdf">&nbsp;</a>
                    </li>
                                        <li><a class="logo ata" href="https://www.marstranslation.com/downloads/ata-certificate.pdf">&nbsp;</a></li>
                    <li><a class="logo tac" href="https://www.marstranslation.com/downloads/tac.pdf">&nbsp;</a></li>
                                        <li><a class="logo gala" href="/downloads/MarsTranslation_GALACertificate2017.pdf">&nbsp;</a>
                    </li>
                                                                                <li><a class="logo comodo no_event" href="javascript:void(0);">&nbsp;</a></li>
                    <li><a class="logo gdpr no_event" href="javascript:void(0);">&nbsp;</a></li>
                </ul>
            </div>
                <div class="col-xs-12">
            <div class="info_text text-center">
                <p>Mars Translation is a 24/7 language service platform by CCJK Technologies. We Provide competitive prices and have native translators from around the globe.</p>
                <ul class="footer_nav essential_links list-inline">
                    <li class="nav_link"><a
                                href="/page/terms-of-use">Terms of Use</a>
                    </li>
                    <li class="nav_link"><a
                                href="/page/privacy">Privacy
                            Policy</a></li>
                    <li class="nav_link"><a
                                href="/contact">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
                <!-- FOOTER END -->
    </div>
</div><!-- class="container" END -->

    
<script src="https://www.marstranslation.com/assets/js/app_footer.js"></script>

    <script>
        // if ($(window).width() >= 800) {
        //     $('.main_navigation .dropdown').hover(function () {
        //         $(this).find('.dropdown-menu').stop().slideDown(300, 'easeInOutQuart');
        //     }, function () {
        //         $(this).find('.dropdown-menu').stop().slideUp(300, 'easeInOutQuart');
        //     });
        // }

         $(document).ready(function(){
            if ($(window).width() >= 800){

                $('.main_navigation .dropdown').hover(function(){
                    $(this).children('.dropdown-menu').stop().slideDown(300, 'easeInOutQuart');
                }, function(){
                    $(this).children('.dropdown-menu').stop().slideUp(300, 'easeInOutQuart');
                });
                $('.main_navigation .dropdown .dropdown-submenu').hover(function(){
                    $(this).children('.dropdown-menu').css({'left': '100%', 'opacity' : "1", 'z-index': '1'});
                }, function(){
                    $(this).children('.dropdown-menu').css({'left': '0', 'opacity' : "0", 'z-index': '-999999'});
                });
            };

             if ($(window).width() < 800){
                 $('body').on("click", ".dropdown-menu", function (e) {
                     e.stopPropagation();
                 });
                 $('.main_navigation .dropdown .dropdown-submenu').click(function(e){
                     e.stopPropagation();
                     $(this).toggleClass('open');
                 });
             };

        });

        $('.dropdown-toggle-js').click(function () {
            window.location.href = $(this).attr('href');
        });




                                                                                            </script>



<script src="https://www.marstranslation.com/assets/v3/js/jquery.matchHeight.js " type="text/javascript"></script>
<script src="https://www.marstranslation.com/assets/v3/js/wow.min.js " type="text/javascript"></script>
<script src="https://www.marstranslation.com/assets/v3/js/waypoints.min.js " type="text/javascript"></script>

<script>
    $("#frmLogin,#frmSignup").find('[placeholder]').each(function(){
        $(this).val($(this).attr('placeholder'));
        $(this).focus(function() {
            if ($(this).attr('placeholder')==$(this).val()) {
                $(this).val('');
            }
        });
    });
</script>
<![endif]-->
 <script>
    $('.media.single_item').matchHeight();
    $('.transcription_services_list .content_list .col-md-3').matchHeight();
    $(document).ready(function() {
        // animation initialization
        wow = new WOW(
            {
                animateClass: 'animated',
                offset:       100,
            }
        );wow.init();

        // testimonial-carousel slides
        var totalSlides= $('#testimonial-carousel .carousel-inner .item').length;
        $('#total-slide').text(totalSlides);

        // testimonial-carousel  current slide
        var currentIndex = $('#testimonial-carousel .carousel-inner .item.active').index() + 1;
        $('#current-slide').text(currentIndex);

        $('#testimonial-carousel').on('slid.bs.carousel', function() {
            currentIndex = $('#testimonial-carousel .carousel-inner .item.active').index() + 1;
            $('#current-slide').text(currentIndex);
        });

        $('.blog_list li .caption').matchHeight();
        // console.log('after match height')
    });

    // circle repel animation js
    var mouse = {'x': 0, 'y': 0};
    homex = 0;
    homey = 0;
    forcex = 0;
    forcey = 0;
    magnet = 500;
    $(document).bind('mousemove', function(e) {
        mouse = {'x': e.pageX, 'y': e.pageY};
    });
    $('.repel_circle').each(function(index, el){
        $(el).attr( "homex", parseInt($(el).position().left));
        $(el).attr( "homey", parseInt($(el).position().top));
    });
    $('.repel_circle').css({'display':'none','position':'absolute'});
    $('.container-fluid').css({'overflow' : 'hidden'});
    setTimeout(() => {
        $('.repel_circle').css('display','inline-block');
    }, 1000);
    setInterval(function () {
        $('.repel_circle').each(function(index, el){
            el = $(el);
            position = el.position();
            x0 = el.offset().left;
            y0 = el.offset().top;
            x1 = mouse.x;
            y1 = mouse.y;
            distancex = x1-x0;
            distancey = y1-y0;
            distance = Math.sqrt((distancey * distancey) + (distancex * distancex));
            powerx = x0 - (distancex / distance) * magnet / distance;
            powery = y0 - (distancey / distance) * magnet / distance;
            forcex = (forcex + (el.attr('homex') - x0) / 2) / 2.1;
            forcey = (forcey + (el.attr('homey') - y0) / 2) / 2.1;
            el.css('left', powerx + forcex);
            el.css('top',  powery + forcey);
        });
    }, 15);
    </script>


            <link href="https://www.marstranslation.com/assets/v3/css/modals-overlay.css" rel="stylesheet" type="text/css"/>
<div class="modal fade modal_custom login_modal modal-md" id="login_Form" role="dialog" data-backdrop="static"
     data-keyboard="false">
    <div class="modal-dialog">
        <a class="icon" data-dismiss="modal">
            <img class="img-responsive"  src="https://www.marstranslation.com/assets/images/ui/cancel_icon.png" alt="dismiss modal" />
        </a>
        <div class="modal-content">
            <div class="modal-body">
                <iframe id="loginFromIframe"
                        src="/login?redirect=loginPopup"
                        style="width: 100% !important;height: 100vh !important;" frameborder="0">
                </iframe>
            </div>
        </div>
    </div>
</div>
    <script>

    $('#loginFromIframe').load(function () {
        fixIframeBox();
    });

    function fixIframeBox() {

        var $iframeContent = $('#loginFromIframe').contents();
        $iframeContent.find('.header_wrap').remove();
        $iframeContent.find('#footer').remove();
        $iframeContent.find('.cc_message').parent().remove();
        $iframeContent.find('.survey_widget').remove();
//        if($iframeContent.find('.loginErrors').length==0) {
//            $iframeContent.find('#login-box').css({'display': 'none'});
//            $iframeContent.find('#register_box').css({'display': 'block'});
//        }
        $iframeContent.find('.well').find('a').remove().end().remove('loginBack').append('<a id="loginBack" href="/login?redirect=loginPopup">Back to login</a>');
        $iframeContent.find('#logo_link').attr('href','javascript:void(0);');

        var $frame = $('#loginFromIframe').contents().find('body');
        if ($frame.find('#body_register')) {
            $frame.find('#body_register').remove();
        }
        $frame.css('background-color', 'transparent');
        $frame.find('.register_form').css('padding', 0);
        $frame.find('#div_login').css('margin', 0);
//        var contentHeight = $frame.find('.register_form').height() + 20;

//        if (contentHeight == 20) {
//            contentHeight = 500;
//        }
//        $('#loginFromIframe').innerHeight(contentHeight);
//
//        $frame.find('#showRegister').click(function () {
//            contentHeight = $frame.find('.register_form').height() + 30;
//            $('#loginFromIframe').innerHeight(contentHeight);
//        });
//        $frame.find('#showLogin').click(function () {
//            contentHeight = $frame.find('.register_form').height() + 30;
//            $('#loginFromIframe').innerHeight(contentHeight);
//        });

    }

    $('.login-popup').click(function (event) {
        event.preventDefault();
        var redirect = $(this).attr('data-login-redirect');
        if (redirect == '' || redirect == undefined) {
            redirect = 0;
        }
        $.ajax({
            url: '/set-popup-session',
            data: 'redirect-url=' + redirect,
            type: 'GET',
            success: function (data) {
                if(data==1) {
                    $('#login_Form').modal('show');
                    $('#login_Form').on('shown.bs.modal', function () {
                        fixIframeBox();
                    });
                }else{
                    window.location.reload();
                }
            },
            onError: function () {
                $('#login_Form').modal('show');
                fixIframeBox();
            }
        });

    });

</script>                                                                                                                                                                                                                                                             
                
                                                                                                    
    <script src="https://www.marstranslation.com/assets/js/app_useractivitienoti.js"></script>
<script>
    $(document).ready(function () {

                                                        initNotification();
                            });

    var popupAllowed = 1;

    function initNotification() {
        $.ajax({
            type: 'POST',
            url: '/get-all-activity-notifications',
            dataType: 'JSON',
            success: function (data) {
                var delay;
                // if(popupAllowed==1) {
                for (var i = 0; i < data.length; i++) {
                    if (i == 0) {
                        delay = 5000;
                    } else {
                        delay = delay + 7000;
                    }
                    var image = 'https://www.marstranslation.com/assets/images/ui/notification-img1.jpg';
                    if (data[i].type == 6) {
                        image = 'https://www.marstranslation.com/assets/images/ui/notification-img2.jpg';
                    } else if (data[i].type == 7) {
                        image = 'https://www.marstranslation.com/assets/images/ui/notification-img3.jpg';
                    }
                    showNotification(delay, image, data[i].msg, data[i].username, data[i].dateStr, data[i].id, i, data.length);
                }
            },
        });
    }

    var popupTimeout = true;

    function showNotification(delay, imgPath, msg, username, timestr, notificationId, iteration, totalIterations) {
        setTimeout(function () {
//            <a aria-hidden="true" href="javscript:void(0);" class="" data-notify="dismiss">x</a>
            if (popupTimeout) {

                $.notify({
                        title: '',
                        message: '',
                    },
                    {
                        template: '<div class="user_activity_alert media">' +
                        '<div class="media-left">' +
                        '<img src="' + imgPath + '" class="media-object">' +
                        '</div>' +
                        '<div class="media-body">' +
                        '<a aria-hidden="true" href="javascript:void(0);" onclick="onNotificationClose();" class="fa fa-times-circle" data-notify="dismiss"></a>' +
                        '<h4 class="media-heading">' + username + '</h4>' +
                        '<p class="desc">' + msg + '</p>' +
                        '<p class="time">' + timestr + '</p>' +
                        '</div>' +
                        '</div>',
                        // timer: 500000000,
                        delay: 4000,
                        allow_dismiss: true,
                        animate: {
                            enter: 'animated fadeInUp',
                            exit: 'animated fadeOutUp'
                        },
                        placement: {
                            from: "bottom",
                            align: "left"
                        }

                    });
                if ($.cookie('user_activity_notification')) {
                    var user_activity_notification = $.cookie('user_activity_notification');
                    user_activity_notification = user_activity_notification + ',' + notificationId;
                } else {
                    var user_activity_notification = notificationId;
                }

                $.cookie('user_activity_notification', user_activity_notification, {
                    expires: 700000,
                    path: '/'
                });

                if (iteration == totalIterations) {
                    setTimeout(function () {
                        initNotification();
                    }, 300000);
                }
            }

        }, delay);

    }

    function onNotificationClose() {
        popupTimeout = false;
        $.get('/session_set_popup_notificatons');
        popupAllowed = 0;
        // $('.css_add').html('<style>.user_activity_alert.media{display:none;}</style>');
        $('.user_activity_alert.media').hide();
            }

</script>

    <script type="text/javascript">
        _linkedin_partner_id = "443170";
        window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
        window._linkedin_data_partner_ids.push(_linkedin_partner_id);

        (function () {
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
        })();
    </script>
    <noscript>
        <img height="1" width="1" style="display:none;" alt=""
             src="https://dc.ads.linkedin.com/collect/?pid=443170&fmt=gif"/>
    </noscript>

<script>
    window._pcq = window._pcq || [];
    _pcq.push(['APIReady', callbackFunction]);
    _pcq.push(['subscriptionFailureCallback', callbackFunctionOnFailedSubscription]); //registers callback function to be called when user gets successfully subscribed
    _pcq.push(['subscriptionSuccessCallback', callbackFunctionOnSuccessfulSubscription]); //registers callback function to be called when user gets successfully subscribed

    function callbackFunctionOnSuccessfulSubscription(subscriberId, values) {
        addPushCrewSubscriberIdAjax(subscriberId, "addSubscriber", getBrowserName());
    }
    function callbackFunctionOnFailedSubscription(values) {
        addPushCrewSubscriberIdAjax(null, "removeSubscriber", getBrowserName());
    }
    function callbackFunction() {
        if (pushcrew.subscriberId !== false && pushcrew.subscriberId !== -1) {
            addPushCrewSubscriberIdAjax(pushcrew.subscriberId, "addSubscriber", getBrowserName());
        } else if (pushcrew.subscriberId === -1) {
            addPushCrewSubscriberIdAjax(pushcrew.subscriberId, "removeSubscriber", getBrowserName());
        }
    }
    function addPushCrewSubscriberIdAjax(id, taskToPerform, browserName) {
        $.ajax({
            type: "POST",
            url: "/add-push-crew-subscriber-id",
            data: {"subscriberId": id, "taskToPerform": taskToPerform, 'browserName': browserName},
            dataType: 'json',
            success: function (data) {
            }
        });
    }

</script>

</body>
</html>