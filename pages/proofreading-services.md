---
permalink: '/pages/services/proofreading-services'
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
    <link rel="alternate" hreflang="en" href="http://www.marstranslation.com/services/proofreading-services"/>
    <link rel="canonical" href="http://www.marstranslation.com/services/proofreading-services"/>
    <link href="https://plus.google.com/101536082954053110470" rel="publisher"/>
                
    <title>Translation Proofreading Services at competitive rates  | Mars Translation</title>

            <meta name="title" content="Translation Proofreading Services at competitive rates">
    
                            <meta name="keywords" content="">
    
                
    <meta name="description" content="We offer exceptional proofreading services to omit all the errors from your content. If you need reliable and cost-effective services, Mars Translation is your go-to option.">

        <meta name="twitter:card" content="summary"/>
    <meta name="twitter:site" content="@MarsTranslation"/>
    <meta property="og:url"
          content="https://www.marstranslation.com/services/proofreading-services"/>
    <meta property="og:title" content="Translation Proofreading Services at competitive rates  | Mars Translation"/>
    <meta property="og:description" content="We offer exceptional proofreading services to omit all the errors from your content. If you need reliable and cost-effective services, Mars Translation is your go-to option."/>
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
        <div class="full_width_banner page_top_banner">
            <div class="container">
                <div class="row">
                    <div class="banner_text col-md-6 col-sm-10 col-xs-12">
                        <h1 class="heading">We Correct your Content</h1>
                        <p class="desc">Our top experts review your content twice and eliminate all the errors to assure excellence.</p>
                        <div class="btn_wrap">
                            <a href="/instant-quote" class="btn btn_lg btn_maroon">Get Instant Quote</a>
                            <a href="/place-order" class="btn btn_lg btn_white_fill">Place Order</a>
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
                        <h3 class="title">Fast, Reliable and Affordable Proofreading</h3>
                        <p class="desc">Your digital assets including your websites, blogs, official documents, professional emails and marketing material reflect your standard, quality and professional efficiency. Therefore, it is critical to ensure that your text is free from all the major and minor errors, and that’s what we are here for. We offer proficient proofreading by certified professionals. If you want immaculate proofreading services for any type of content, Mars Translation has got you covered.</p>
                    </div>
                </div>
            </div>
            <section class="features_list_section">
                <div class="container">
                    <span class="red_circle first repel_circle wow zoomIn" data-wow-delay="1s">&nbsp;</span>
                    <div class="text_row text-center">
                        <h2 class="heading">Top Notch Proofreading at competitive rates</h2>
                        <p class="desc">Mars Translation signifies quality, style and affordability. We cover all the major industries and our top professionals deliver impeccable results. We are an all-in-one solution for improving your content quality.</p>
                    </div>
                    <div class="features_list flexbox_container space_between">
                        <div class="media single_item wow fadeInUp" data-wow-delay="1s">
                            <div class="media-left media-top">
										<span class="icons purple">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
												<path class="cls-1" d="M285.758,1187.02v0.69a1.093,1.093,0,0,1-.973,1.08l-0.176.63a0.829,0.829,0,0,1-.772.58h-1.754a0.791,0.791,0,0,1-.775-0.58l-0.175-.63a1.092,1.092,0,0,1-.973-1.08v-0.69a0.683,0.683,0,0,1,.694-0.68H285.1A0.7,0.7,0,0,1,285.758,1187.02Zm-3.68-20.13v2.31a0.924,0.924,0,0,0,1.845,0v-2.31A0.923,0.923,0,0,0,282.078,1166.89Zm-7.771,11.55a0.891,0.891,0,1,0,0-1.78h-2.384a0.891,0.891,0,1,0,0,1.78h2.384Zm19.756-1.77h-2.382a0.886,0.886,0,1,0,0,1.77h2.394a0.9,0.9,0,0,0,.923-0.87,0.8,0.8,0,0,0-.231-0.62,0.944,0.944,0,0,0-.692-0.29Zm-19.864,8.45a0.913,0.913,0,0,0,.917.9,0.993,0.993,0,0,0,.662-0.26l1.707-1.65a0.867,0.867,0,0,0,.025-1.26l-0.025-.03a0.988,0.988,0,0,0-1.291,0l-1.7,1.65a0.879,0.879,0,0,0-.276.64Zm17.3-15.75a0.97,0.97,0,0,0-1.327,0l-1.684,1.62a0.87,0.87,0,0,0,.017,1.29,1.065,1.065,0,0,0,.66.25,0.972,0.972,0,0,0,.649-0.27l1.7-1.63a0.878,0.878,0,0,0,.006-1.27h-0.006Zm-15.307,2.9a0.95,0.95,0,0,0,1.311.05,0.868,0.868,0,0,0,.055-1.26,0.658,0.658,0,0,1-.07-0.07l-1.7-1.63a0.963,0.963,0,0,0-1.318-.14,0.881,0.881,0,0,0-.144,1.27,0.957,0.957,0,0,0,.151.14Zm13.993,13.48a0.951,0.951,0,0,0,1.312-.02,0.865,0.865,0,0,0-.011-1.26l-1.672-1.63h0a0.969,0.969,0,0,0-1.326,0,0.867,0.867,0,0,0-.015,1.26s0.01,0.01.015,0.01Zm-3.86-1.58a1.625,1.625,0,0,1-1.61,1.31h-3.467a1.593,1.593,0,0,1-1.611-1.33,4.274,4.274,0,0,0-1.2-2.33,5.9,5.9,0,0,1,.167-8.57,6.4,6.4,0,0,1,4.3-1.69h0.048a6.183,6.183,0,0,1,6.335,6.02,5.926,5.926,0,0,1-1.771,4.25A4.208,4.208,0,0,0,286.322,1184.17Zm-2.635-2.45a0.4,0.4,0,0,0-.416-0.4H282.2a0.4,0.4,0,0,0-.416.4v0.66a0.411,0.411,0,0,0,.416.41h1.068a0.411,0.411,0,0,0,.416-0.41h0v-0.66Zm2.118-4.56a2.193,2.193,0,0,0-.774-1.77,3.168,3.168,0,0,0-2.119-.66,3.359,3.359,0,0,0-2.023.57,1.884,1.884,0,0,0-.752,1.44,0.262,0.262,0,0,0,.251.27l1.216,0.02a0.427,0.427,0,0,0,.431-0.29,0.742,0.742,0,0,1,.223-0.36,1.035,1.035,0,0,1,1.359.05,1.014,1.014,0,0,1,.25.72,1.382,1.382,0,0,1-.218.78,1.8,1.8,0,0,1-.6.57,4.021,4.021,0,0,0-1,.88,1.643,1.643,0,0,0-.268.83,0.294,0.294,0,0,0,.272.31H283.4a0.294,0.294,0,0,0,.3-0.26,1.377,1.377,0,0,1,.115-0.46,1.268,1.268,0,0,1,.5-0.48,3.142,3.142,0,0,0,1.073-.9,2.086,2.086,0,0,0,.423-1.27v0.01Z" transform="translate(-271 -1166)"/>
											</svg>
										</span>
                            </div>
                            <div class="media-body">
                                <h4 class="title">One-stop solution</h4>
                                <p class="desc">Our proofreading services encompass multiple industries including Medical, Education, Life Sciences, Travel, Financial, Automotive and many more.</p>
                            </div>
                        </div>
                        <div class="media single_item wow fadeInUp">
                            <div class="media-left media-top">
										<span class="icons green">
											<svg xmlns="http://www.w3.org/2000/svg" width="19" height="26" viewBox="0 0 19 26">
											<defs>
												<style>
													.icons .cls-1 {
                                                        fill: #fff;
                                                        fill-rule: evenodd;
                                                    }
												</style>
												</defs>
												<path class="cls-1" d="M763.045,1165h6.91v3.9h-6.91V1165ZM757,1167.17V1191h19v-23.83h-5.182v1.73a0.867,0.867,0,0,1-.863.87h-6.91a0.867,0.867,0,0,1-.863-0.87v-1.73H757Zm1.295,17.76h9.5v0.87h-9.5v-0.87Zm0.432-1.3V1178h2.591v5.63h-2.591Zm4.318,0v-7.36h2.591v7.36h-2.591Zm4.319,0v-9.1h2.591v9.1h-2.591Zm-2.159,5.64H758.3v-0.87h6.91v0.87Zm9.5,0h-8.636v-0.87H774.7v0.87Zm0-1.74H758.3v-0.86H774.7v0.86Zm0-1.73h-6.045v-0.87H774.7v0.87Zm-3.022-2.17V1172.8h2.591v10.83h-2.591Zm-5.745-10.83,3.778-2.53a0.425,0.425,0,0,1,.155-0.06l4.318-.87,0.169,0.85-4.234.85-3.815,2.55a0.421,0.421,0,0,1-.24.08h-3.762l-3.35,2.1-0.458-.74,3.455-2.16a0.382,0.382,0,0,1,.229-0.07h3.755Z" transform="translate(-757 -1165)"/>
											</svg>
										</span>
                            </div>
                            <div class="media-body">
                                <h4 class="title">Impeccable Results</h4>
                                <p class="desc">We have certified native experts from different geographical regions who deliver excellent translations as if they were written in your local language.</p>
                            </div>
                        </div>
                        <div class="media single_item wow fadeInUp">
                            <div class="media-left media-top">
										<span class="icons orange">
											<svg xmlns="http://www.w3.org/2000/svg" width="19" height="23" viewBox="0 0 19 23">
											<defs>
												<style>
													.icons .cls-1 {
                                                        fill: #fff;
                                                        fill-rule: evenodd;
                                                    }
												</style>
												</defs>
												<path class="cls-1" d="M278.817,1438.04a1.209,1.209,0,0,1,.275,1.66,1.138,1.138,0,0,1-1.617.28,1.213,1.213,0,0,1-.277-1.66,1.136,1.136,0,0,1,1.6-.3C278.8,1438.03,278.811,1438.03,278.817,1438.04Zm3.775-3.32a1.408,1.408,0,0,1,1.967.5,1.494,1.494,0,0,1-.484,2.02,1.411,1.411,0,0,1-1.958-.48,1.492,1.492,0,0,1,.437-2.02A0.074,0.074,0,0,0,282.592,1434.72Zm-9.239,6.89c-0.3-2.6-.641-5.53.086-7.19a8.4,8.4,0,0,1,7.811-5.42,8.313,8.313,0,0,1,8.257,7.96l2.442,6.43a0.8,0.8,0,0,1-.441,1.03,0.776,0.776,0,0,1-.21.06l-1.942.19-0.721,3.6a0.776,0.776,0,0,1-.815.64l-2.721-.19,0.075,2.45a0.8,0.8,0,0,1-.749.83H284.4l-10.49-.12a0.8,0.8,0,0,1-.782-0.8c0-.03,0-0.05,0-0.08l0.424-4.53a16.583,16.583,0,0,0,.033-2.6C273.543,1443.22,273.449,1442.44,273.353,1441.61Zm7.751-3.14a0.36,0.36,0,0,0,.182.21l1.093,0.6a0.353,0.353,0,0,0,.467-0.08v-0.02l0.384-.58a1.809,1.809,0,0,0,.465,0l0.407,0.56a0.355,0.355,0,0,0,.473.11l1.069-.68a0.369,0.369,0,0,0,.122-0.48l-0.3-.63a2.634,2.634,0,0,0,.223-0.41l0.673-.09h0.02a0.372,0.372,0,0,0,.276-0.37h0l-0.024-1.28a0.37,0.37,0,0,0-.1-0.27,0.363,0.363,0,0,0-.26-0.11l-0.654-.06c-0.036-.07-0.072-0.14-0.117-0.21s-0.083-.14-0.129-0.2l0.259-.65a0.392,0.392,0,0,0,0-.27,0.352,0.352,0,0,0-.181-0.21l-1.093-.6a0.3,0.3,0,0,0-.26-0.05,0.359,0.359,0,0,0-.207.13v0.02l-0.385.58a1.825,1.825,0,0,0-.467,0l-0.428-.57a0.362,0.362,0,0,0-.47-0.11l-1.067.68a0.37,0.37,0,0,0-.127.48l0.3,0.62a2.708,2.708,0,0,0-.221.41l-0.68.07H280.32a0.378,0.378,0,0,0-.283.37h0l0.024,1.28a0.37,0.37,0,0,0,.1.27,0.363,0.363,0,0,0,.26.11l0.677,0.05c0.036,0.08.073,0.14,0.117,0.22s0.086,0.14.135,0.21l-0.231.67A0.393,0.393,0,0,0,281.1,1438.47Zm-5.516,1.17h0l0.408,0.92a0.293,0.293,0,0,0,.153.16,0.263,0.263,0,0,0,.213,0l0.5-.18c0.047,0.04.1,0.07,0.148,0.11a1.352,1.352,0,0,0,.161.11l0.037,0.56a0.319,0.319,0,0,0,.072.2,0.3,0.3,0,0,0,.195.1l0.971,0.08a0.276,0.276,0,0,0,.314-0.21v-0.01l0.1-.54a1.948,1.948,0,0,0,.332-0.15l0.457,0.27a0.275,0.275,0,0,0,.374-0.07l0.568-.83a0.3,0.3,0,0,0-.059-0.39l-0.4-.34a2.03,2.03,0,0,0,.031-0.38l0.46-.27h0.013a0.3,0.3,0,0,0,.1-0.35h0l-0.408-.92a0.293,0.293,0,0,0-.153-0.16,0.263,0.263,0,0,0-.213,0l-0.5.18a1.032,1.032,0,0,0-.148-0.11,1.3,1.3,0,0,0-.156-0.11v-0.58a0.3,0.3,0,0,0-.268-0.3l-0.97-.08a0.218,0.218,0,0,0-.2.05,0.291,0.291,0,0,0-.109.16v0.01l-0.1.54a1.1,1.1,0,0,0-.335.15l-0.48-.27a0.274,0.274,0,0,0-.371.08l-0.569.82a0.3,0.3,0,0,0,.06.39l0.4,0.35a1.994,1.994,0,0,0-.034.36l-0.47.27h-0.018A0.3,0.3,0,0,0,275.588,1439.64Z" transform="translate(-273 -1429)"/>
											</svg>
										</span>
                            </div>
                            <div class="media-body">
                                <h4 class="title">Extensive Experience</h4>
                                <p class="desc">We have been offering proofreading services for more than 20 years. Our experienced professionals remove each and every mistake from your copy.</p>
                            </div>
                        </div>
                        <div class="media single_item wow fadeInUp" data-wow-delay="1s">
                            <div class="media-left media-top">
									<span class="icons red">
										<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
										<defs>
											<style>
												.icons .cls-1 {
                                                    fill: #fff;
                                                    fill-rule: evenodd;
                                                }
											</style>
											</defs>
											<path class="cls-1" d="M761.483,1437.63h1.536l-0.769-2.5Zm2.867-7.63H759.1a2.1,2.1,0,0,0-2.1,2.11V1450l6.3-6.32h4.725Zm-1.008,8.68h-2.181l-0.486,1.58h-1.05l2.1-6.84h1.05l2.1,6.84h-1.05ZM775.9,1430H765.4l3.675,13.68H775.9a2.1,2.1,0,0,0,2.1-2.1v-9.47A2.1,2.1,0,0,0,775.9,1430Zm-3.675,3.42h1.05v1.05h-1.05v-1.05Zm3.15,6.84a7.046,7.046,0,0,1-2.793-.55,5.647,5.647,0,0,1-2.457.55v-1.05a4.841,4.841,0,0,0,1.312-.18,3.164,3.164,0,0,1-1.312-2.45h1.05a2.391,2.391,0,0,0,1.4,1.94,3.577,3.577,0,0,0,1.754-2.99h-4.2v-1.06h5.25v1.06h0a4.5,4.5,0,0,1-1.672,3.45,6.3,6.3,0,0,0,1.672.23v1.05Z" transform="translate(-757 -1430)"/>
										</svg>
									</span>
                            </div>
                            <div class="media-body">
                                <h4 class="title">Multiple Languages</h4>
                                <p class="desc">Our linguistic experts cover over 90+ languages and 2000 language pairs. We have highly trained and skilled professionals to deliver flawless content in time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="expert_transaltion_services_page">
                <section class="why_mars_block clearfix">
                    <div class="container">
                        <span class="yellow_circle first repel_circle wow zoomIn" data-wow-delay="1s">&nbsp;</span>
                        <span class="cyan_circle first repel_circle wow zoomIn" data-wow-delay="1s">&nbsp;</span>
                        <div class="text_row text-center">
                            <h3 class="heading">Our Core Qualities</h3>
                            <p class="desc">High precision and delivery of exceptional results make us stand ahead of the competitors.</p>
                        </div>
                        <ul class="spacifications_list flexbox_container three_columns space_between list-unstyled clearfix">
                            <li class="media spac_item wow fadeInRight" data-wow-delay="1s">
                                <div class="media-left">
                                    <p class="media-object svg_icon">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                             viewBox="0 0 29 35" style="enable-background:new 0 0 29 35;" xml:space="preserve">
													<style type="text/css">
                                                        .path_0{opacity:0.8;fill:url(#SVGID_1_);enable-background:new    ;}
                                                        .path_1{opacity:0.8;fill:url(#SVGID_2_);enable-background:new    ;}
                                                        .path_2{opacity:0.8;fill:url(#SVGID_3_);enable-background:new    ;}
                                                        .path_3{fill:#FFFFFF;}
                                                    </style>
                                            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="24.2869" y1="-1.641908e-02" x2="4.7131" y2="36.7964" gradientTransform="matrix(1 0 0 -1 0 35.89)">
                                                <stop  offset="0" style="stop-color:#EF456D"/>
                                                <stop  offset="1" style="stop-color:#F04E34"/>
                                            </linearGradient>
                                            <path class="path_0" d="M4,0h21c2.2,0,4,1.8,4,4v27c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4V4C0,1.8,1.8,0,4,0z"/>
                                            <g>
                                                <g>
                                                    <path class="path_3" d="M25.4,9.8l-2.8,0.1l-0.5-0.5l0.1-2.8c0,0,0-0.1-0.1-0.1c0,0-0.1,0-0.1,0l-2.8,2.8c0,0,0,0,0,0.1l0,2.3
																l-5.6,5.6c-0.2-0.1-0.4-0.1-0.6-0.1c-1,0-1.9,0.8-1.9,1.9c0,1,0.8,1.9,1.9,1.9c1,0,1.9-0.8,1.9-1.9c0-0.2,0-0.4-0.1-0.6l5.6-5.6
																l2.3,0c0,0,0,0,0.1,0l2.8-2.8C25.5,10,25.5,9.9,25.4,9.8C25.5,9.9,25.4,9.8,25.4,9.8z M19.5,15.3c0.6,1.1,1,2.4,1,3.8
																c0,2-0.8,3.9-2.2,5.3c-1.4,1.4-3.3,2.2-5.3,2.2c-2,0-3.9-0.8-5.3-2.2c-2.9-2.9-2.9-7.7,0-10.7c1.4-1.4,3.3-2.2,5.3-2.2
																c1.3,0,2.6,0.3,3.8,1l1.4-1.4c-1.5-1-3.3-1.5-5.1-1.5c-2.5,0-4.9,1-6.7,2.8c-3.7,3.7-3.7,9.7,0,13.4c1.8,1.8,4.2,2.8,6.7,2.8
																c2.5,0,4.9-1,6.7-2.8c1.8-1.8,2.8-4.2,2.8-6.7c0-1.8-0.5-3.6-1.5-5.1L19.5,15.3z M12.9,15.1c0.4,0,0.7,0,1,0.1l1.5-1.5
																c-0.8-0.4-1.6-0.6-2.5-0.6c-1.6,0-3,0.6-4.1,1.7c-1.1,1.1-1.7,2.6-1.7,4.1c0,1.6,0.6,3,1.7,4.1c1.1,1.1,2.6,1.7,4.1,1.7
																c1.6,0,3-0.6,4.1-1.7c1.8-1.8,2.2-4.5,1.2-6.6L16.8,18c0.4,1.3,0,2.8-1,3.8C15,22.6,14,23,12.9,23c-1.1,0-2.1-0.4-2.8-1.2
																c-1.5-1.5-1.5-4.1,0-5.6C10.9,15.5,11.9,15.1,12.9,15.1z"/>
                                                </g>
                                            </g>
											   </svg>
                                    </p>
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading">High Accuracy</h4>
                                </div>
                                <p class="desc">We provide accurate human proofreading services and guarantee satisfaction.</p>
                            </li>
                            <li class="media spac_item wow fadeInUp">
                                <div class="media-left">
                                    <p class="media-object svg_icon">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                             viewBox="0 0 29 35" enable-background="new 0 0 29 35" xml:space="preserve">
													<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="24.2886" y1="35.9096" x2="4.7115" y2="-0.9095">
                                                        <stop  offset="0" style="stop-color:#EF456D"/>
                                                        <stop  offset="1" style="stop-color:#F04E34"/>
                                                    </linearGradient>
                                            <path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" fill="url(#SVGID_1_)" d="M4,0h21c2.2,0,4,1.8,4,4v27c0,2.2-1.8,4-4,4
														H4c-2.2,0-4-1.8-4-4V4C0,1.8,1.8,0,4,0z"/>
                                            <g>
                                                <g>
                                                    <path fill="#FFFFFF" d="M15.3,9v2.1c3.6,0.1,6.3,2.9,6.3,6.3c0,3.5-2.8,6.3-6.4,6.3c-2.1,0-3.9-0.9-5-2.4c-0.6-0.8-1-2-1.2-2.9
																h1.6l-2.8-4.8L5,18.3h1.7c0.4,4.3,4.1,7.7,8.6,7.7c4.8,0,8.6-3.8,8.6-8.5C24,12.8,20,9,15.3,9z M19.3,16.8H16v-3.2h-1.3v4.5h4.6
																V16.8z"/>
                                                </g>
                                            </g>
												</svg>
                                    </p>
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading">Fast Turnaround</h4>
                                </div>
                                <p class="desc">Our proofreaders work skillfully to deliver your content in the promised time.</p>
                            </li>
                            <li class="media spac_item wow fadeInLeft" data-wow-delay="1s">
                                <div class="media-left">
                                    <p class="media-object svg_icon">
                                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                             viewBox="0 0 29 35" style="enable-background:new 0 0 29 35;" xml:space="preserve">
													<style type="text/css">
                                                        .path_0{opacity:0.8;fill:url(#SVGID_1_);enable-background:new    ;}
                                                        .path_1{opacity:0.8;fill:url(#SVGID_2_);enable-background:new    ;}
                                                        .path_2{opacity:0.8;fill:url(#SVGID_3_);enable-background:new    ;}
                                                        .path_3{fill:#FFFFFF;}
                                                    </style>
                                            <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="24.2869" y1="-1.641908e-02" x2="4.7131" y2="36.7964" gradientTransform="matrix(1 0 0 -1 0 35.89)">
                                                <stop  offset="0" style="stop-color:#EF456D"/>
                                                <stop  offset="1" style="stop-color:#F04E34"/>
                                            </linearGradient>
                                            <path class="path_0" d="M4,0h21c2.2,0,4,1.8,4,4v27c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4V4C0,1.8,1.8,0,4,0z"/>
                                            <g>
                                                <g>
                                                    <path class="path_3" d="M14.8,16.9c-0.5-0.2-0.8-0.3-1-0.5c-0.2-0.2-0.3-0.4-0.3-0.6c0-0.3,0.1-0.5,0.2-0.7c0.2-0.2,0.4-0.3,0.8-0.3
																c0,0,0,0,0,0c0.3,0,0.6,0.1,0.8,0.3c0.2,0.2,0.3,0.5,0.3,0.9l1.7,0l0,0c0-0.6-0.2-1.2-0.6-1.6c-0.4-0.4-0.9-0.6-1.6-0.7l0-1.1
																l-0.9,0l0,1.1c-0.7,0.1-1.3,0.3-1.7,0.7c-0.4,0.4-0.6,0.9-0.6,1.5c0,0.6,0.2,1.1,0.7,1.5c0.4,0.3,1.1,0.6,2,0.9
																c0.5,0.2,0.8,0.3,1,0.5c0.2,0.2,0.3,0.4,0.3,0.7c0,0.3-0.1,0.5-0.3,0.7c-0.2,0.2-0.5,0.3-0.8,0.3h0c-0.4,0-0.7-0.1-0.9-0.3
																c-0.2-0.2-0.4-0.5-0.4-1l-1.6,0l0,0c0,0.7,0.2,1.3,0.7,1.7c0.5,0.4,1.1,0.6,1.8,0.6l0,1l0.9,0l0-1c0.7-0.1,1.3-0.3,1.7-0.7
																c0.4-0.4,0.6-0.9,0.6-1.5c0-0.6-0.2-1.1-0.7-1.5C16.3,17.5,15.7,17.2,14.8,16.9z M24.5,17.5c0-0.6-0.5-0.9-1-1.2
																c-0.1-0.1-0.4-0.2-0.5-0.3c0.1-0.1,0.2-0.3,0.4-0.5c0.4-0.4,0.8-0.9,0.6-1.5c-0.2-0.5-0.8-0.7-1.4-0.8c-0.2,0-0.4-0.1-0.6-0.1
																c0-0.1,0.1-0.4,0.2-0.6c0.2-0.5,0.4-1.1,0-1.6c-0.3-0.3-0.7-0.3-0.8-0.3c-0.2,0-0.5,0-0.7,0.1c-0.2,0-0.4,0.1-0.6,0.1c0,0,0,0,0,0
																c0-0.1,0-0.4,0-0.6c0-0.6,0-1.2-0.5-1.5c-0.1-0.1-0.3-0.1-0.4-0.1c-0.4,0-0.7,0.2-1.1,0.4c-0.2,0.1-0.4,0.2-0.5,0.3
																c-0.1-0.1-0.2-0.4-0.2-0.5c-0.2-0.5-0.4-1.1-1-1.2c0,0-0.1,0-0.1,0c-0.5,0-0.8,0.4-1.2,0.8c-0.1,0.1-0.3,0.3-0.4,0.4
																c-0.1-0.1-0.3-0.3-0.4-0.4c-0.3-0.4-0.7-0.8-1.2-0.8c0,0-0.1,0-0.1,0c-0.6,0.1-0.8,0.7-1,1.2c-0.1,0.2-0.2,0.4-0.2,0.5
																c-0.1,0-0.4-0.2-0.5-0.3c-0.4-0.2-0.7-0.4-1.1-0.4c-0.2,0-0.3,0-0.4,0.1C9,9,9,9.7,9,10.2c0,0.2,0,0.4,0,0.6c0,0,0,0,0,0
																c-0.1,0-0.4,0-0.6-0.1c-0.2,0-0.5-0.1-0.7-0.1c-0.1,0-0.6,0-0.8,0.3c-0.4,0.4-0.1,1,0,1.6C6.9,12.7,7,13,7,13.1
																c-0.1,0.1-0.4,0.1-0.6,0.1c-0.6,0.1-1.2,0.2-1.4,0.8c-0.2,0.5,0.2,1,0.6,1.4C5.8,15.6,5.9,15.9,6,16c-0.1,0.1-0.3,0.2-0.5,0.3
																c-0.5,0.3-1,0.6-1,1.2c0,0.6,0.5,0.9,1,1.2C5.7,18.8,5.9,18.9,6,19c-0.1,0.1-0.2,0.3-0.4,0.5c-0.4,0.4-0.8,0.9-0.6,1.4
																c0.2,0.5,0.8,0.7,1.4,0.8c0.2,0,0.4,0.1,0.6,0.1c0,0.1-0.1,0.4-0.2,0.6c-0.2,0.5-0.4,1.1,0,1.6c0.3,0.3,0.7,0.3,0.8,0.3h0
																c0.2,0,0.5,0,0.7-0.1c0.2,0,0.4-0.1,0.6-0.1c0,0,0,0,0,0c0,0.1,0,0.4,0,0.6c0,0.6,0,1.2,0.5,1.5c0.1,0.1,0.3,0.1,0.4,0.1
																c0.4,0,0.7-0.2,1.1-0.4c0.2-0.1,0.4-0.2,0.5-0.3c0.1,0.1,0.2,0.4,0.2,0.5c0.2,0.5,0.4,1.1,1,1.2c0,0,0.1,0,0.1,0h0
																c0.5,0,0.8-0.4,1.2-0.8c0.1-0.1,0.3-0.3,0.4-0.4c0.1,0.1,0.3,0.3,0.4,0.4c0.3,0.4,0.7,0.8,1.2,0.8c0,0,0.1,0,0.1,0
																c0.6-0.1,0.8-0.7,1-1.2c0.1-0.2,0.2-0.4,0.2-0.5c0.1,0,0.4,0.2,0.5,0.3c0.4,0.2,0.7,0.4,1.1,0.4c0.2,0,0.3,0,0.4-0.1
																C20,26,20,25.3,20,24.8c0-0.2,0-0.4,0-0.6c0,0,0,0,0,0c0.1,0,0.4,0,0.6,0.1c0.2,0,0.5,0.1,0.7,0.1c0.1,0,0.6,0,0.8-0.3
																c0.4-0.4,0.1-1,0-1.6C22.1,22.3,22,22,22,21.9c0.1-0.1,0.4-0.1,0.6-0.1c0.6-0.1,1.2-0.2,1.4-0.8c0.2-0.5-0.2-1-0.6-1.4
																c-0.1-0.1-0.3-0.4-0.4-0.5c0.1-0.1,0.3-0.2,0.5-0.3C24,18.4,24.5,18.1,24.5,17.5z M17.5,21.6c-0.4,0.3-0.8,0.6-1.3,0.7l0,0.2
																c0,0.6-0.5,1.1-1,1.1l-0.9,0h0c-0.3,0-0.5-0.1-0.7-0.3c-0.2-0.2-0.3-0.5-0.3-0.7l0-0.2c-0.5-0.1-1-0.4-1.4-0.7
																c-0.5-0.4-1.1-1.2-1.1-2.5c0-0.2,0-0.3,0.1-0.5l0,0c0.2-0.3,0.5-0.5,0.9-0.6l0.2,0c-0.5-0.4-1-1.1-1-2.2c0-0.9,0.3-1.7,1-2.2
																c0.4-0.3,0.8-0.6,1.4-0.8l0-0.3c0-0.6,0.5-1.1,1-1.1l0.9,0h0c0.3,0,0.5,0.1,0.7,0.3c0.2,0.2,0.3,0.5,0.3,0.7l0,0.3
																c0.5,0.2,1,0.4,1.3,0.8c0.6,0.6,0.9,1.4,0.9,2.3c0,0.1,0,0.3-0.1,0.4l0,0c-0.2,0.4-0.5,0.6-0.9,0.6c0,0,0,0,0,0
																c0.7,0.6,1,1.3,1,2.3C18.5,20.2,18.1,21,17.5,21.6z"/>
                                                </g>
                                            </g>
											   </svg>
                                    </p>
                                </div>
                                <div class="media-body">
                                    <h4 class="media-heading">Economic Affordability</h4>
                                </div>
                                <p class="desc">We offer matchless quality at an unbeatable price to exceed your expectations.</p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="quick_start_block clearfix">
                    <div class="container text-center">
								<span class="desc">
									Kick-start your global journey with us today
								</span>
                        <div class="btn_wrap">
                            <a class="btn  btn_maroon" href="/place-order">Order Online</a>
                            <a class="btn btn_lg btn_white_fill" href="/free-consultation">Consult for Free</a>
                        </div>
                    </div>
                </section>
                <section class="white_bg pd_lg customer_feedback_with_multiple_slides clearfix wow fadeInUp">
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