---
permalink: '/pages/services/translation-services'
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
    <link rel="alternate" hreflang="en" href="http://www.marstranslation.com/services/website-translation-services"/>
    <link rel="canonical" href="http://www.marstranslation.com/services/website-translation-services"/>
    <link href="https://plus.google.com/101536082954053110470" rel="publisher"/>
                
    <title>Website Localization Services - Go Global with Mars Translation</title>

            <meta name="title" content="Website Localization Services - Go Global with Mars Translation">
    
                            <meta name="keywords" content="">
    
                
    <meta name="description" content="Accurate & Reliable website translation & localization services translate your website for a global audience, 120+ Languages 7000+ Native Translators Quality translations start 
        from $0.04 per word.">

        <meta name="twitter:card" content="summary"/>
    <meta name="twitter:site" content="@MarsTranslation"/>
    <meta property="og:url"
          content="https://www.marstranslation.com/services/website-translation-services"/>
    <meta property="og:title" content="Website Localization Services - Go Global with Mars Translation"/>
    <meta property="og:description" content="Accurate & Reliable website translation & localization services translate your website for a global audience, 120+ Languages 7000+ Native Translators Quality translations start 
        from $0.04 per word."/>
    <meta property="og:image" content="https://www.marstranslation.com/bundles/storeservices/images/contents/main_logo.png"/>
    <link rel="icon" type="image/x-icon" href="https://www.marstranslation.com/favicon.ico"/>

                    
<link href="https://www.marstranslation.com/assets/css/app.css" type="text/css" rel="stylesheet"/>

    
    <link href="https://www.marstranslation.com/assets/v3/css/services-website-translation.css" rel="stylesheet">
    <link href="https://www.marstranslation.com/assets/v3/css/flags-sprite.css" rel="stylesheet">


        
        
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

<body class=" website_translation_services_page">





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
        
    <!-- BANNER START -->
    <div class="full_width_banner website_translation_banner clearfix">
        <div class="container">
            <div class="row">
                <div class="col-sm-7 col-xs-12">
                    <div class="bread_crumb">
                        <a class="pages" href="/">Home</a><span
                                class="fa fa-angle-right">&nbsp;</span>
                        <a class="pages" href="/services">Services</a><span
                                class="fa fa-angle-right">&nbsp;</span>
                        <span class="pages">Website Translation Services</span>
                    </div>
                    <h1 class="heading">
                        <small>We give you nothing less than the best!
                        </small>
                        Language is not a barrier.<br>
                        It’s a gateway to endless<br>
                        opportunities.
                    </h1>
                    <div class="btn_wrap clearfix">
                        <a href="/place-order" class="btn btn_grey_fill">Order Translation</a>
                        <a href="/instant-quote" class="btn btn_maroon">Get Instant
                            Quote</a>
                    </div>
                </div>
            </div>
            <span class="yellow_circle first repel_circle wow zoomIn" data-wow-delay="1s">&nbsp;</span>
        </div>
    </div>
    <!-- BANNER END -->

    <!-- CONTENT START -->
    <div class="content_web website_translation_page">
        <section class="why_mars_block clearfix">
            <div class="container">
                <div class="text_row text-center">
                    <h3 class="heading">Why not translate using real people?</h3>
                    <p class="desc">The limitation of machine translation is that it doesn’t provide accurate
                        personalized translation. With 100% Human Translation & Localization, <br>personalize
                        your content & connect to a wider audience in their native language. With E-commerce
                        localization you get</p>
                </div>
                <div class="row">
                    <div class="col-sm-4 col-xs-6">
                        <div class="feature_thumb">
                            <i class="icon website">&nbsp;</i>
                            <h3 class="title">Website Translation</h3>
                            <p class="desc">Ease into the international market with an effective website
                                translation services. Our service has been designed to meet all your customized
                                demands.</p>
                        </div>
                    </div>
                    <div class="col-sm-4 col-xs-6">
                        <div class="feature_thumb">
                            <i class="icon time">&nbsp;</i>
                            <h3 class="title">Faster Turnaround Rates</h3>
                            <p class="desc">Instant translation quotes with fast response rates and unmatchable
                                turnaround rate of 2500 words/day with consistent translation quality</p>
                        </div>
                    </div>
                    <div class="col-sm-4 col-xs-6">
                        <div class="feature_thumb">
                            <i class="icon formate">&nbsp;</i>
                            <h3 class="title">Multi-format Support</h3>
                            <p class="desc">Translation and documentation support for companies from a wide
                                range of industries to bring a comprehensive translation experience</p>
                        </div>
                    </div>
                    <div class="col-sm-4 col-xs-6">
                        <div class="feature_thumb">
                            <i class="icon traffic">&nbsp;</i>
                            <h3 class="title">Consistent Targeted Traffic</h3>
                            <p class="desc">Personalized and relevant targeted traffic against relevant leads
                                for attracting potential customers on consistent basis</p>
                        </div>
                    </div>
                    <div class="col-sm-4 col-xs-6">
                        <div class="feature_thumb">
                            <i class="icon review">&nbsp;</i>
                            <h3 class="title">Personalized User Reviews</h3>
                            <p class="desc">Enhanced customer trust, valuable market insights and business
                                credibility with user-generated opinions translated by real people</p>
                        </div>
                    </div>
                    <div class="col-sm-4 col-xs-6">
                        <div class="feature_thumb">
                            <i class="icon customer">&nbsp;</i>
                            <h3 class="title">Enhanced Customer Experience</h3>
                            <p class="desc">World-class support to keep customers engaged through support
                                emails, FAQs and self-service documents to guide customers</p>
                        </div>
                    </div>
                </div>
                <span class="cyan_circle first repel_circle wow zoomIn" data-wow-delay="1s">&nbsp;</span>
            </div>
        </section>
        <section class="section_grey_bg pd_lg proxy_block wordpress_block clearfix" id="proxy">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-xs-12">
                        <img class="section_left_image img-responsive"
                             src="https://www.marstranslation.com/assets/images/ui/website-translation-services-wp.png"
                             alt="traditional-translation-services"/>
                    </div>
                    <div class="col-sm-6 col-xs-12">
                        <h2 class="heading">WordPress Website Translation Services</h2>
                        <p class="desc pd_bottom">At Mars Translation, we strive persistently to provide our
                            customers with the best services. Thus we have ensured integration of Mars
                            Translation
                            into WPML, a plug-in that revolutionized the translation industry forever.</span>
                        <p class="desc pd_bottom">WPML is a self-sustaining plug-in and easy to use. And with
                            integrating Mars Translation into the plug-in, it is now possible for your website
                            to have the most professional and comprehensive translation solution.</p>
                        <strong>How to get started with WPML</strong>
                        <p class="desc pd_bottom">Read our step by step guide to learn <a
                                    href="/blog/a-step-by-step-guide-for-wpml-translation-services">
                                how to get started with the WPML plugin.</a></p>
                        <p class="desc">To install the plugin and start translating your website with Mars
                            Translation. <br> <a
                                    href="https://wpml.org/translation-service/mars-translation/?tsid=79fe9fda7f31390d11dc1db053cf7f40">
                                Click Here</a></p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section_white_bg pd_lg localization_block clearfix" id="chinese">
            <div class="container">
                <div class="row">
                    <div class="col-sm-7 col-xs-12">
                        <div class="text_row less_space text_white">
                            <h2 class="heading">Chinese Website Localization</h2>
                            <p class="p-md">Complete Solution for Chinese website's translation &amp;
                                localization.
                            </p>
                        </div>
                        <p class="desc pd_bottom">While expanding your business in china, The first thing that
                            needs
                            to be taken care of is several international online servers and services which work
                            poorly in China due to restrictions by Chinese government/officials.</p>
                        <p>Our complete solution for Chinese website translation &amp; localization with a
                            Chinese
                            hosting can eliminate your hurdles to get your business in Chinese region. Now you
                            can
                            host your website on Chinese server which will ensure trouble free access to your
                            web.
                            In addition to that, we also provide on demand services such as promoting your
                            website
                            on Chinese social networks. </p>
                        <ul class="angle_arrow_list pd_top_bottom list-inline">
                            <li>We provide solutions that help you to avoid slow servers or other technical
                                problems
                                due to the restrictions posed by Chinese officials/government.
                            </li>
                            <li>We deliver Fast and accurate translation which conveys the essence of your
                                message.
                            </li>
                            <li>We help you in creating localized, culturally sensitive and relative content.
                            </li>
                        </ul>
                        <div class="learn_more">
                            <a href="/services/chinese-website-localization-solution"
                               class="btn btn_nofill">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section_white_bg pd_lg plugin_block clearfix" id="magento">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 col-xs-12">
                        <img class="lazy img-responsive"
                             src="https://www.marstranslation.com/assets/images/ui/megento-plugin.png"
                             alt="traditional-translation-services"/>
                    </div>
                    <div class="col-sm-8 col-xs-12">
                        <div class="text_row less_space">
                            <h2 class="heading">Magento; Product Translation Extension</h2>
                            <p class="p-md">An extension that seamlessly translates your product catalogue</p>
                        </div>
                        <p class="desc pd_bottom">Through our Magento extension you can send your website for
                            translation
                            within a few clicks. Simply download and install our Magento extension and select
                            your
                            products to be translated. This extension allows you to choose all specifications
                            including the attributes you wish you translate and instructions for the translator.
                            Proceed by sending your content directly to MarsTranslation without leaving Magento
                            admin interface. </p>
                        <p class="desc pd_bottom">Once the translation is sent to MarsTranslation, our native,
                            industry specific translators will convert your products into your target language.
                            You
                            can review your content before importing files directly on you website and watch
                            your
                            store instantly going multilingual. </p>
                        <ul class="angle_arrow_list pd_top_bottom list-inline">
                            <li>Select properties including product information, source language, target
                                language,
                                industry, package and instructions for translator.
                            </li>
                            <li>Monitor the real time status of the project by clicking the ‘my project’ tab.
                            </li>
                            <li>Preview the entire content before making it live.</li>
                        </ul>
                        <div class="learn_more">
                            <a href="/magento-integration" class="btn btn_grey">Get
                                Magento Extension</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section_white_bg api-integration-block pd_lg clearfix">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-xs-12">
                        <div class="text_row less_space">
                            <h2 class="heading">Integrate with your <br/>Systems</h2>
                            <p class="p-md">We provide API integration for your Websites, Desktop Apps, Mobile
                                Apps
                                and software that enable you to get your contentseamlessly translated without
                                handling any files. Whether you are developing a mobile application, desktop
                                software or websites, our state of the art API integration system will save you
                                an
                                incredible amount of time and resources. We support all languages including
                                Java,
                                PHP, Node and Rails.</p>
                        </div>
                        <a class="btn btn_grey" href="/page/api">Get
                            Started Now</a>
                    </div>
                    <div class="col-sm-6 col-xs-12">
                        <img class="img-responsive" src="https://www.marstranslation.com/assets/images/ui/api-integration.png "
                             alt="api integration">
                    </div>
                </div>
            </div>
        </section>
        <section class="section_grey_bg pd_lg supported_languages clearfix">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-xs-12">
                        <div class="text_row less_space">
                            <h2 class="heading">Supported Languages</h2>
                            <p class="p-md">Don’t ever let your hard work get lost in the translation. With
                                MarsTranslation we make sure that you are provided with only the best.</p>
                            <p class="p-md">We have certified translation experts that are fluent in speaking
                                and
                                writing over 120 languages of the world. These languages come in over 2,000
                                pairs,
                                and they over the languages of about 95% of the internet population.
                            </p>
                            <p class="p-md">Our professional translation experts make sure that the translation
                                is
                                so accurate and precise that it seems to be written originally for the target
                                market.
                            </p>
                            <p class="p-md">Translators at MarsTranslation are not just fluent but they are
                                native
                                speakers as well industry-specific. Therefore, they have firsthand knowledge
                                about
                                the targeted culture as well as the targeted industry.</p>
                            <p class="p-md">With MarsTranslation, you are guaranteed to get the most effective,
                                accurate, and relevant translation solution.</p>
                        </div>
                        <a class="view_all" href="/supported-languages">View All
                            Languages <i
                                    class="fa fa-angle-double-right" aria-hidden="true">&nbsp;</i></a>
                    </div>
                    <div class="col-sm-6 col-xs-12">
                        <img class="img-responsive"
                             src="https://www.marstranslation.com/assets/images/ui/website-translation-services-orbit.png "
                             alt="api integration">
                    </div>
                </div>
            </div>
        </section>
        <section class="section_white_bg info_panels_block pd_lg clearfix">
            <div class="container">
                <div class="panel-group" id="accordion">
                    <div class="panel panel-default">
                        <div class="panel-heading" data-toggle="collapse" data-parent="#accordion"
                             data-target="#collapseOne">
                            <h4 class="panel-title p-md">Why Choose MarsTranslation for website translation or
                                localization services?</h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in">
                            <div class="panel-body text-justify">
                                <p class="font_15">MarsTranslation ensures success, not just based on the technology but
                                    the processes that ensure quality and efficiency. We are an industry-leading company
                                    with an experience of almost two decades. </p>
                                <p class="font_15">MarsTranslation has worked with several leading brands of the world
                                    including General Electric, Nuance, and many more. </p>
                                <p class="font_15">We work hard to ensure that the customers from all over the world can
                                    rely on us. We ensure that our platform satisfies all your translation needs.</p>
                                <p class="font_15">We take care of not just the translation but also the social-cultural
                                    aspects of the target market. We make sure that our translators take into account
                                    the regional connotations and the implication of the words that they use.</p>
                                <p class="font_15">Among all these services we also offer: </p>
                                <ul class="panel_content_list list-unstyled">
                                    <li><strong>- Personalized protocol: </strong>We understand that every project is
                                        unique, so we make sure that all the unique requirements of your projects are
                                        met.
                                    </li>
                                    <li><strong>- Certified Experts: </strong>We assign heavily vetted experts on your
                                        project to ensure accurate translation.
                                    </li>
                                    <li><strong>- Speed: </strong>Our experts are highly trained to provide quick
                                        turnaround, without compromising on the quality of the translation. There are
                                        protocols in place to make sure the deadlines are met.
                                    </li>
                                    <li><strong>- Quality: </strong>We stick to strict quality standards to ensure the
                                        best results for you.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading collapsed" data-toggle="collapse" data-parent="#accordion"
                             data-target="#collapseTwo">
                            <h4 class="panel-title p-md">What languages does MarsTranslation offer?</h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse">
                            <div class="panel-body text-justify">
                                <p class="font_15">MarsTranslation makes sure that your message never gets lost in
                                    translation, that’s why we strive to make sure that you are provided with nothing
                                    less than the best. We make constant efforts to ensure that all your translation
                                    needs are satisfied. We are constantly adding new languages to our range to
                                    accommodate your requirements</p>
                                <p class="font_15">We have an extensive network of experts that speak and write over 120
                                    languages. This network of over 5000 experts are not only certified but also native
                                    speakers, so are very well familiar with the language required. This helps them
                                    translate the original document in a way that it seem original to the audience of
                                    the target market.</p>
                                <p class="font_15">We offer more than 2,000 pairs of languages that cover about 95% of
                                    the languages spoken by the internet population.</p>
                                <p class="font_15">Not only do we offer an extensive range of languages from English to
                                    Mandarin and Tamil, but our experts are also well-versed in several regional
                                    dialects of different languages including French, Portuguese, and Chinese.</p>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading collapsed" data-toggle="collapse" data-parent="#accordion"
                             data-target="#collapseThree">
                            <h4 class="panel-title p-md">Can MarsTranslation handle industry-specific website
                                translation?</h4>
                        </div>
                        <div id="collapseThree" class="panel-collapse collapse">
                            <div class="panel-body text-justify">
                                <p class="font_15">MarsTranslation has become an industry-leading company by providing
                                    the best services to its customers. One of these services includes industry-specific
                                    translations.</p>
                                <p class="font_15">Being a global leader enables us to be able to accrue translation
                                    experts that also have knowledge specific to the industry. These experts not only
                                    know the language that you require but are also proficient in the terminology and
                                    the jargons of the industry.</p>
                                <p class="font_15">This enables them to use the language in an appropriate, correct and
                                    creative manner making sure that the context remains the same even in the other
                                    language. The translation is free of any grammatical mistake, or wrong usage of
                                    words.</p>
                                <p class="font_15">Currently, we have experts in over 22 different kinds of industries.
                                    You can choose the industry that you feel suits you appropriately. This will assure
                                    you that the terminologies and the jargons used in the original document are
                                    correctly translated to the satisfaction of the customer.</p>
                                <p class="font_15">If you find that the industry you are looking for is not available,
                                    you can always contact our support team available for you 24/7 and we will help you
                                    find the best match for your project.</p>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading collapsed" data-toggle="collapse" data-parent="#accordion"
                             data-target="#collapseFour">
                            <h4 class="panel-title p-md">How does MarsTranslation ensure quality?</h4>
                        </div>
                        <div id="collapseFour" class="panel-collapse collapse">
                            <div class="panel-body text-justify">
                                <p class="font_15">Having been in the field for almost two decades, we know what the
                                    customer requires and what they worry about. Often the customer is need for is a
                                    fast project completion, however, unwilling to compromise on the quality.</p>
                                <p class="font_15">We have protocols and processes in place to ensure exactly that. We
                                    take quality very seriously whether it is an explicit demand from the customer or
                                    not. We take pride in our ability to provide a quick turnaround without railroading
                                    the quality of the translation.</p>
                                <p class="font_15">We make sure that if the business demands speed, they don’t pay for
                                    it in terms of quality. Over the course of time we have been able to develop the
                                    most convenient and accessible systems for our customers and our experts to ensure
                                    mutual success.</p>
                                <p class="font_15">To ensure high-quality solutions we use strategic documentation that
                                    includes:</p>
                                <ul class="panel_content_list list-unstyled">
                                    <li>- Translation memory creation</li>
                                    <li>- Key terms extraction from the glossary</li>
                                    <li> - Translation in translation memory environment</li>
                                    <li>- User interface localization</li>
                                    <li>- File integrity insurance</li>
                                </ul>
                                <p class="font_15">All these solutions are in place to make sure that there is no
                                    concession on the quality of your website’s translation, while also ensuring quick
                                    delivery of your work.</p>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading collapsed" data-toggle="collapse" data-parent="#accordion"
                             data-target="#collapseFive">
                            <h4 class="panel-title p-md">What pricing does MarsTranslation offer?</h4>
                        </div>
                        <div id="collapseFive" class="panel-collapse collapse">
                            <div class="panel-body text-justify">
                                <p class="font_15">It is definitely hard to imagine a world-class company with
                                    affordable rates in this age and time. MarsTranslation makes that possible. </p>
                                <p class="font_15">Over the course of 17 years, MarsTranslation has become a global
                                    leader in the translation industry. But the most pride that we take in is our
                                    exceptionally affordable rates in the field of professional translation.</p>
                                <p class="font_15">You don’t have to take our word for it, you can compare us to the
                                    other companies and see for yourself.</p>
                                <p class="font_15">We also facilitate our customers by making sure that they can see the
                                    pricing and decide which category suits them best. We make sure that our customers
                                    are satisfied with the prices being offered before they place the offer. </p>
                                <p class="font_15">Our prices vary based on different factors which include </p>
                                <ul class="panel_content_list list-unstyled">
                                    <li>- The language pair you have chosen</li>
                                    <li>- The industry that you require</li>
                                    <li>- The price package that you have availed.</li>
                                </ul>
                                <p class="font_15"><strong>Standard Package: </strong>the rates of the standard package
                                    are USD 0.04 per word.</p>
                                <p class="font_15"><strong>Professional Package: </strong>the professional package
                                    offers translation in USD 0.06 per word</p>
                                <p class="font_15">We offer the best rates for website translation in the entire
                                    industry starting from only USD 400.</p>
                                <p class="font_15"><strong>Discounts: </strong>We believe in developing long-term
                                    relationships with our customers. That’s why we have discount offers for the
                                    customers that use our services regularly.</p>
                                <p class="font_15">Customers can also opt to but Mars Credit that saves them up to USD
                                    140.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- CONTENT END -->

    <a href="javascript:void(0);" id="cd-top">Top</a>
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

    
    <!--  START CUSTOM SCRIPTS  -->
    <script src="https://www.marstranslation.com/assets/vendor/modernizr/modernizr.js "></script>

    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <script src="https://www.marstranslation.com/assets/v3/js/jquery.matchHeight.js"></script>
    <script src="https://www.marstranslation.com/js/scripts.js"></script>
        

    <script type="text/javascript">
        $('.why_mars_block .row .col-sm-4').matchHeight();
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