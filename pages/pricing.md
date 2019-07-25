---
permalink: '/pages/pricing'
layout: 'default'
title: 'Professional Translation Services | Mars Translation'
description: 'This is the description of the page'
---


<link rel="stylesheet" type="text/css" href="/assets/v3/css/pricing.css">
<link rel="stylesheet" type="text/css"
    href="/assets/v3/css/bootstrap-select.min.css">
<link href="/assets/v3/css/flags-sprite.css" type="text/css"
    rel="stylesheet" />



<!-- CONTENT START -->

<div class="pricing_banner full_width_banner" style="background-image: url({{ site.data.pages.pricing.block_1.background_image }});
box-shadow:inset 0 0 0 10000px {{ site.data.pages.pricing.block_1.color_overlay }}; 
background-position: center bottom; 
background-repeat: no-repeat; 
-moz-background-size: cover;
-o-background-size: cover; 
-webkit-background-size: cover; 
background-size: cover;
{% if site.data.pages.pricing.block_1.visible == true %}
display: block; 
{% else %}
display: none;
{% endif %}">
    <div class="container">
        <div class="text_row">
            <h1 class="heading text-center">Cost Effective and Simple Pricing</h1>
        </div>
        <div class="packages_holder clearfix">
            <div class="language_block clearfix">
                <div class="col-md-4 col-sm-4 col-xs-12 language_holder text-left">
                    <h3 class="heading">Source Language</h3>
                    <div class="supported-languages-dropdown">
                        <select id="sourceLanguageId" class="selectpicker" data-live-search="true" data-width="fit">
                            <!-- <option data-content='<span class="flags flag-ar"></span> Arabic' value="5">
                                Arabic
                            </option> -->
                            <!-- <option data-content='<span class="flags flag-my"></span> Burmese' value="121">
                                Burmese
                            </option> -->
                            <option data-content='<span class="flags flag-zh-CN"></span> Chinese Simplified (Mandarin)'
                                value="17">
                                Chinese Simplified (Mandarin)
                            </option>
                            <option
                                data-content='<span class="flags flag-zh-HK"></span> Chinese Traditional (Hong Kong)'
                                value="18">
                                Chinese Traditional (Hong Kong)
                            </option>
                            <!-- <option data-content='<span class="flags flag-hr"></span> Croatian' value="20">
                                Croatian
                            </option>
                            <option data-content='<span class="flags flag-cs"></span> Czech' value="21">
                                Czech
                            </option>
                            <option data-content='<span class="flags flag-da"></span> Danish' value="22">
                                Danish
                            </option>
                            <option data-content='<span class="flags flag-nl"></span> Dutch' value="25">
                                Dutch
                            </option> -->
                            <option data-content='<span class="flags flag-en"></span> English' value="26" selected>
                                English
                            </option>
                            <!-- <option data-content='<span class="flags flag-fi"></span> Finnish' value="30">
                                Finnish
                            </option>
                            <option data-content='<span class="flags flag-fr"></span> French (France)' value="31">
                                French (France)
                            </option>
                            <option data-content='<span class="flags flag-de"></span> German' value="35">
                                German
                            </option>
                            <option data-content='<span class="flags flag-el"></span> Greek' value="36">
                                Greek
                            </option>
                            <option data-content='<span class="flags flag-hi"></span> Hindi' value="41">
                                Hindi
                            </option>
                            <option data-content='<span class="flags flag-hu"></span> Hungarian' value="42">
                                Hungarian
                            </option>
                            <option data-content='<span class="flags flag-id"></span> Indonesian' value="45">
                                Indonesian
                            </option>
                            <option data-content='<span class="flags flag-it"></span> Italian' value="49">
                                Italian
                            </option> -->
                            <option data-content='<span class="flags flag-ja"></span> Japanese' value="50">
                                Japanese
                            </option>
                            <option data-content='<span class="flags flag-ko"></span> Korean' value="58">
                                Korean
                            </option>
                            <!-- <option data-content='<span class="flags flag-lv"></span> Latvian' value="61">
                                Latvian
                            </option>
                            <option data-content='<span class="flags flag-ms"></span> Malay' value="66">
                                Malay
                            </option>
                            <option data-content='<span class="flags flag-mn"></span> Mongolian' value="73">
                                Mongolian
                            </option>
                            <option data-content='<span class="flags flag-pl"></span> Polish' value="81">
                                Polish
                            </option>
                            <option data-content='<span class="flags flag-pt-br"></span> Portuguese (Brazil)'
                                value="131">
                                Portuguese (Brazil)
                            </option>
                            <option data-content='<span class="flags flag-pt"></span> Portuguese (Portugal)' value="82">
                                Portuguese (Portugal)
                            </option>
                            <option data-content='<span class="flags flag-pa"></span> Punjabi' value="83">
                                Punjabi
                            </option>
                            <option data-content='<span class="flags flag-ro"></span> Romanian' value="85">
                                Romanian
                            </option>
                            <option data-content='<span class="flags flag-ru"></span> Russian' value="87">
                                Russian
                            </option>
                            <option data-content='<span class="flags flag-sp-eu"></span> Spanish (Europe)' value="126">
                                Spanish (Europe)
                            </option>
                            <option data-content='<span class="flags flag-sp-la"></span> Spanish (Latin American)'
                                value="127">
                                Spanish (Latin American)
                            </option>
                            <option data-content='<span class="flags flag-sv"></span> Swedish' value="98">
                                Swedish
                            </option>
                            <option data-content='<span class="flags flag-ta-IN"></span> Tamil' value="102">
                                Tamil
                            </option>
                            <option data-content='<span class="flags flag-th"></span> Thai' value="105">
                                Thai
                            </option>
                            <option data-content='<span class="flags flag-tr"></span> Turkish' value="107">
                                Turkish
                            </option>
                            <option data-content='<span class="flags flag-uk"></span> Ukrainian' value="109">
                                Ukrainian
                            </option>
                            <option data-content='<span class="flags flag-ur"></span> Urdu' value="111">
                                Urdu
                            </option>
                            <option data-content='<span class="flags flag-uz"></span> Uzbek' value="113">
                                Uzbek
                            </option>
                            <option data-content='<span class="flags flag-vi"></span> Vietnamese' value="114">
                                Vietnamese
                            </option> -->
                        </select>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4 col-xs-12 language_holder text-left">
                    <h3 class="heading">Target Language</h3>
                    <div class="supported-languages-dropdown">
                        <select id="targetLanguageId" class="selectpicker" data-live-search="true" data-width="fit"
                            onchange="calculatePrice();">
                            <!-- <option data-content='<span class="flags flag-sq"></span> Albanian' value="2">
                                Albanian
                            </option>
                            <option data-content='<span class="flags flag-ar"></span> Arabic' value="5">
                                Arabic
                            </option>
                            <option data-content='<span class="flags flag-as"></span> Assamese' value="7">
                                Assamese
                            </option>
                            <option data-content='<span class="flags flag-eu"></span> Basque' value="10">
                                Basque
                            </option>
                            <option data-content='<span class="flags flag-bn"></span> Bengali' value="12">
                                Bengali
                            </option>
                            <option data-content='<span class="flags flag-bs"></span> Bosnian' value="13">
                                Bosnian
                            </option>
                            <option data-content='<span class="flags flag-bg"></span> Bulgarian' value="15">
                                Bulgarian
                            </option>
                            <option data-content='<span class="flags flag-my"></span> Burmese' value="121">
                                Burmese
                            </option>
                            <option data-content='<span class="flags flag-ca"></span> Catalan' value="16">
                                Catalan
                            </option>
                            <option data-content='<span class="flags flag-zh-CN"></span> Chinese Simplified (Mandarin)'
                                value="17" selected>
                                Chinese Simplified (Mandarin)
                            </option>
                            <option
                                data-content='<span class="flags flag-zh-HK"></span> Chinese Traditional (Hong Kong)'
                                value="18">
                                Chinese Traditional (Hong Kong)
                            </option>
                            <option data-content='<span class="flags flag-zh-TW"></span> Chinese Traditional (Tai Wan)'
                                value="148">
                                Chinese Traditional (Tai Wan)
                            </option>
                            <option data-content='<span class="flags flag-hr"></span> Croatian' value="20">
                                Croatian
                            </option>
                            <option data-content='<span class="flags flag-cs"></span> Czech' value="21">
                                Czech
                            </option>
                            <option data-content='<span class="flags flag-da"></span> Danish' value="22">
                                Danish
                            </option>
                            <option data-content='<span class="flags flag-nl"></span> Dutch' value="25">
                                Dutch
                            </option>
                            <option data-content='<span class="flags flag-en_E"></span> English Style' value="151">
                                English Style
                            </option>
                            <option data-content='<span class="flags flag-et"></span> Estonian' value="27">
                                Estonian
                            </option>
                            <option data-content='<span class="flags flag-far"></span> Farsi' value="128">
                                Farsi
                            </option>
                            <option data-content='<span class="flags flag-fil"></span> Filipino' value="29">
                                Filipino
                            </option>
                            <option data-content='<span class="flags flag-fi"></span> Finnish' value="30">
                                Finnish
                            </option>
                            <option data-content='<span class="flags flag-fr-CA"></span> French (Canadian)' value="145">
                                French (Canadian)
                            </option>
                            <option data-content='<span class="flags flag-fr"></span> French (France)' value="31">
                                French (France)
                            </option>
                            <option data-content='<span class="flags flag-ka"></span> Georgian' value="34">
                                Georgian
                            </option>
                            <option data-content='<span class="flags flag-de"></span> German' value="35">
                                German
                            </option>
                            <option data-content='<span class="flags flag-el"></span> Greek' value="36">
                                Greek
                            </option>
                            <option data-content='<span class="flags flag-gu"></span> Gujarati' value="38">
                                Gujarati
                            </option>
                            <option data-content='<span class="flags flag-ha"></span> Hausa' value="39">
                                Hausa
                            </option>
                            <option data-content='<span class="flags flag-he"></span> Hebrew' value="40">
                                Hebrew
                            </option>
                            <option data-content='<span class="flags flag-hi"></span> Hindi' value="41">
                                Hindi
                            </option>
                            <option data-content='<span class="flags flag-hmn"></span> Hmong' value="129">
                                Hmong
                            </option>
                            <option data-content='<span class="flags flag-hu"></span> Hungarian' value="42">
                                Hungarian
                            </option>
                            <option data-content='<span class="flags flag-is"></span> Icelandic' value="43">
                                Icelandic
                            </option>
                            <option data-content='<span class="flags flag-ig"></span> Igbo' value="44">
                                Igbo
                            </option>
                            <option data-content='<span class="flags flag-id"></span> Indonesian' value="45">
                                Indonesian
                            </option>
                            <option data-content='<span class="flags flag-ga-IE"></span> Irish' value="47">
                                Irish
                            </option>
                            <option data-content='<span class="flags flag-it"></span> Italian' value="49">
                                Italian
                            </option>
                            <option data-content='<span class="flags flag-ja"></span> Japanese' value="50">
                                Japanese
                            </option>
                            <option data-content='<span class="flags flag-jv"></span> Javanese' value="149">
                                Javanese
                            </option>
                            <option data-content='<span class="flags flag-kn"></span> Kannada' value="51">
                                Kannada
                            </option>
                            <option data-content='<span class="flags flag-kar"></span> Karen' value="130">
                                Karen
                            </option>
                            <option data-content='<span class="flags flag-kac"></span> Kashin' value="155">
                                Kashin
                            </option>
                            <option data-content='<span class="flags flag-kk"></span> Kazakh' value="52">
                                Kazakh
                            </option>
                            <option data-content='<span class="flags flag-km"></span> Khmer' value="53">
                                Khmer
                            </option>
                            <option data-content='<span class="flags flag-sw"></span> Kiswahili' value="56">
                                Kiswahili
                            </option>
                            <option data-content='<span class="flags flag-ko"></span> Korean' value="58">
                                Korean
                            </option>
                            <option data-content='<span class="flags flag-ku"></span> Kurdish' value="142">
                                Kurdish
                            </option>
                            <option data-content='<span class="flags flag-lo"></span> Lao' value="60">
                                Lao
                            </option>
                            <option data-content='<span class="flags flag-lv"></span> Latvian' value="61">
                                Latvian
                            </option>
                            <option data-content='<span class="flags flag-lt"></span> Lithuanian' value="62">
                                Lithuanian
                            </option>
                            <option data-content='<span class="flags flag-mk"></span> Macedonian' value="65">
                                Macedonian
                            </option>
                            <option data-content='<span class="flags flag-ms"></span> Malay' value="66">
                                Malay
                            </option>
                            <option data-content='<span class="flags flag-ml"></span> Malayalam' value="67">
                                Malayalam
                            </option>
                            <option data-content='<span class="flags flag-mt"></span> Maltese' value="68">
                                Maltese
                            </option>
                            <option data-content='<span class="flags flag-mr"></span> Marathi' value="71">
                                Marathi
                            </option>
                            <option data-content='<span class="flags flag-mn"></span> Mongolian' value="73">
                                Mongolian
                            </option>
                            <option data-content='<span class="flags flag-ne"></span> Nepali' value="74">
                                Nepali
                            </option>
                            <option data-content='<span class="flags flag-nb"></span> Norwegian, Bokmal' value="75">
                                Norwegian, Bokmal
                            </option>
                            <option data-content='<span class="flags flag-nn"></span> Norwegian, Nynorsk' value="76">
                                Norwegian, Nynorsk
                            </option>
                            <option data-content='<span class="flags flag-ps"></span> Pashto' value="79">
                                Pashto
                            </option>
                            <option data-content='<span class="flags flag-pl"></span> Polish' value="81">
                                Polish
                            </option>
                            <option data-content='<span class="flags flag-pt-br"></span> Portuguese (Brazil)'
                                value="131">
                                Portuguese (Brazil)
                            </option>
                            <option data-content='<span class="flags flag-pt"></span> Portuguese (Portugal)' value="82">
                                Portuguese (Portugal)
                            </option>
                            <option data-content='<span class="flags flag-pa"></span> Punjabi' value="83">
                                Punjabi
                            </option>
                            <option data-content='<span class="flags flag-ro"></span> Romanian' value="85">
                                Romanian
                            </option>
                            <option data-content='<span class="flags flag-ru"></span> Russian' value="87">
                                Russian
                            </option>
                            <option data-content='<span class="flags flag-sr"></span> Serbian' value="91">
                                Serbian
                            </option>
                            <option data-content='<span class="flags flag-tn"></span> Setswana' value="93">
                                Setswana
                            </option>
                            <option data-content='<span class="flags flag-shn"></span> Shan' value="154">
                                Shan
                            </option>
                            <option data-content='<span class="flags flag-sd"></span> Sindhi (Pakistan)' value="133">
                                Sindhi (Pakistan)
                            </option>
                            <option data-content='<span class="flags flag-si"></span> Sinhala' value="94">
                                Sinhala
                            </option>
                            <option data-content='<span class="flags flag-sk"></span> Slovak' value="95">
                                Slovak
                            </option>
                            <option data-content='<span class="flags flag-sl"></span> Slovenian' value="96">
                                Slovenian
                            </option>
                            <option data-content='<span class="flags flag-Som"></span> Somali' value="152">
                                Somali
                            </option>
                            <option data-content='<span class="flags flag-st"></span> Southern Sotho' value="153">
                                Southern Sotho
                            </option>
                            <option data-content='<span class="flags flag-sp-eu"></span> Spanish (Europe)' value="126">
                                Spanish (Europe)
                            </option>
                            <option data-content='<span class="flags flag-sp-la"></span> Spanish (Latin American)'
                                value="127">
                                Spanish (Latin American)
                            </option>
                            <option data-content='<span class="flags flag-su"></span> Sundanese' value="150">
                                Sundanese
                            </option>
                            <option data-content='<span class="flags flag-sv"></span> Swedish' value="98">
                                Swedish
                            </option>
                            <option data-content='<span class="flags flag-tl"></span> Tagalog' value="134">
                                Tagalog
                            </option>
                            <option data-content='<span class="flags flag-tg"></span> Tajik' value="100">
                                Tajik
                            </option>
                            <option data-content='<span class="flags flag-ta-IN"></span> Tamil' value="102">
                                Tamil
                            </option>
                            <option data-content='<span class="flags flag-te"></span> Telugu' value="104">
                                Telugu
                            </option>
                            <option data-content='<span class="flags flag-th"></span> Thai' value="105">
                                Thai
                            </option>
                            <option data-content='<span class="flags flag-tr"></span> Turkish' value="107">
                                Turkish
                            </option>
                            <option data-content='<span class="flags flag-uk"></span> Ukrainian' value="109">
                                Ukrainian
                            </option>
                            <option data-content='<span class="flags flag-ur"></span> Urdu' value="111">
                                Urdu
                            </option>
                            <option data-content='<span class="flags flag-uz"></span> Uzbek' value="113">
                                Uzbek
                            </option> -->
                            <option data-content='<span class="flags flag-vi"></span> Vietnamese' value="114">
                                Vietnamese
                            </option>
                            <!-- <option data-content='<span class="flags flag-yo"></span> Yoruba' value="119">
                                Yoruba
                            </option> -->
                        </select>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4 col-xs-12 language_holder text-left">
                    <h3 class="heading">Industry</h3>
                    <div class="supported-languages-dropdown industry_block">
                        <select id="industryId" class="selectpicker" data-live-search="true" data-width="fit"
                            onchange="calculatePrice();">
                            <option data-content='<span class="flags general-translation-services"></span> General'
                                value="1" selected>
                                General
                            </option>
                            <option
                                data-content='<span class="flags certificates-translation-services"></span> Certificates'
                                value="24">
                                Certificates
                            </option>
                            <option
                                data-content='<span class="flags advertising-translation-services"></span> Advertising and Marketing'
                                value="2">
                                Advertising and Marketing
                            </option>
                            <option
                                data-content='<span class="flags automotive-translation-services"></span> Automotive'
                                value="7">
                                Automotive
                            </option>
                            <option
                                data-content='<span class="flags business-finance-translation-services"></span> Business/Finance and Insurance'
                                value="8">
                                Business/Finance and Insurance
                            </option>
                            <option data-content='<span class="flags chemical-translation-services"></span> Chemical'
                                value="9">
                                Chemical
                            </option>
                            <option
                                data-content='<span class="flags electronics-products-translation-services"></span> Electronics and Home Appliance'
                                value="10">
                                Electronics and Home Appliance
                            </option>
                            <option
                                data-content='<span class="flags environment-energy-translation-services"></span> Energy and Environment'
                                value="11">
                                Energy and Environment
                            </option>
                            <option
                                data-content='<span class="flags food-catering-translation-services"></span> Hotel and Catering'
                                value="13">
                                Hotel and Catering
                            </option>
                            <option
                                data-content='<span class="flags gaming-video-games-translation-services"></span> Gaming and Video Games'
                                value="14">
                                Gaming and Video Games
                            </option>
                            <option
                                data-content='<span class="flags healthcare-translation-services"></span> Medical and Healthcare'
                                value="15">
                                Medical and Healthcare
                            </option>
                            <option
                                data-content='<span class="flags history-archaeology-translation-services"></span> History and Archaeology'
                                value="16">
                                History and Archaeology
                            </option>
                            <option
                                data-content='<span class="flags legal-contracts-translation-services"></span> Legal and Contracts'
                                value="17">
                                Legal and Contracts
                            </option>
                            <option
                                data-content='<span class="flags literary-art-translation-services"></span> Literary and Art'
                                value="18">
                                Literary and Art
                            </option>
                            <option
                                data-content='<span class="flags software-it-translation-services"></span> Software and IT'
                                value="19">
                                Software and IT
                            </option>
                            <option
                                data-content='<span class="flags telecommunications-translation-services"></span> Telecommunications'
                                value="20">
                                Telecommunications
                            </option>
                            <option data-content='<span class="flags tourism-translation-services"></span> Tourism'
                                value="21">
                                Tourism
                            </option>
                            <option
                                data-content='<span class="flags technical-translation-services"></span> Technical and Engineering'
                                value="23">
                                Technical and Engineering
                            </option>
                            <option
                                data-content='<span class="flags education-translation-services"></span> Education and E-learning'
                                value="25">
                                Education and E-learning
                            </option>
                            <option data-content='<span class="flags Patent-translation-service"></span> Patent'
                                value="26">
                                Patent
                            </option>
                            <option
                                data-content='<span class="flags Film-and-Entertainment-translation-service"></span> Film and Entertainment'
                                value="27">
                                Film and Entertainment
                            </option>
                            <option
                                data-content='<span class="flags Beauty-and-Cosmetics-translation-service"></span> Beauty and Cosmetics'
                                value="28">
                                Beauty and Cosmetics
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="feature_pricing_box text-center">
                    <div class="plan_name text-uppercase">STANDARD</div>
                    <h2 class="price" id="standardPrice"></h2>
                    <span class="pr_word">per word</span>
                    <div class="expert">
                        <div class="center-block">
                            <span><i class="icons translator">&nbsp;</i> 1 Translator</span>
                        </div>
                    </div>
                    <p class='desc font_14 font_opensans_light'>Translator who passed our Standard level test.</p>
                    <a href="{{site.data.pages.pricing.block_1.button.link}}" onclick="orderNow('standard','EP')" class="btn btn-maroon2">{{site.data.pages.pricing.block_1.button.name}}</a>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="feature_pricing_box text-center">
                    <div class="plan_name text-uppercase">STANDARD PLUS</div>
                    <h2 class="price" id="standardPlusPrice"></h2>
                    <span class="pr_word">per word</span>
                    <div class="expert">
                        <div class="center-block">
                            <span><i class="icons translator">&nbsp;</i> 1 Translator</span><span
                                class="text-center">+</span>
                            <span><i class="icons profreader">&nbsp;</i> 1 Proofreader</span>
                        </div>
                    </div>
                    <p class='desc font_14 font_opensans_light'>Standard level translator with one experienced
                        proofreader</p>
                    <a href="{{site.data.pages.pricing.block_1.button.link}}" onclick="orderNow('standard','PP')" class="btn btn-maroon2">{{site.data.pages.pricing.block_1.button.name}}</a>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="feature_pricing_box text-center">
                    <div class="plan_name text-uppercase">PROFESSIONAL</div>
                    <h2 class="price" id="professionalPrice"></h2>
                    <span class="pr_word">per word</span>
                    <div class="expert">
                        <div class="center-block">
                            <span><i class="icons translator">&nbsp;</i> 1 Expert Translator</span>
                        </div>
                    </div>
                    <p class='desc font_14 font_opensans_light'>Expert translator who passed our advanced level
                        test</p>
                    <a href="{{site.data.pages.pricing.block_1.button.link}}" onclick="orderNow('professional','EP')" class="btn btn-maroon2">{{site.data.pages.pricing.block_1.button.name}}</a>
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
                <div class="feature_pricing_box text-center">
                    <div class="plan_name text-uppercase">PROFESSIONAL PLUS</div>
                    <h2 class="price" id="professionalPlusPrice"></h2>
                    <span class="pr_word">per word</span>
                    <div class="expert">
                        <div class="center-block">
                            <span><i class="icons translator">&nbsp;</i> 1 Expert Translator</span><span
                                class="text-center">+</span>
                            <span><i class="icons profreader">&nbsp;</i> 1 Proofreader</span>
                        </div>
                    </div>
                    <p class='desc font_14 font_opensans_light'>Expert level translator with one advanced level
                        proofreader</p>
                    <a href="{{site.data.pages.pricing.block_1.button.link}}" onclick="orderNow('professional','PP')" class="btn btn-maroon2">{{site.data.pages.pricing.block_1.button.name}}</a>
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</div>

<!-- CONTENT START -->
<div class="content_web our_clients_page">
    <section class="section_white_bg bundle_pricing_block" style="background-image: url({{ site.data.pages.pricing.block_2.background_image }});
    box-shadow:inset 0 0 0 10000px {{ site.data.pages.pricing.block_2.color_overlay }}; 
    background-position: center bottom; 
    background-repeat: no-repeat; 
    -moz-background-size: cover;
    -o-background-size: cover; 
    -webkit-background-size: cover; 
    background-size: cover;
    {% if site.data.pages.pricing.block_2.visible == true %}
    display: block; 
    {% else %}
    display: none;
    {% endif %}">
        <div class="container">
            <div class="text_row">
                <h2 class="border_heading heading text-center">Save money with bundle offers</h2>
            </div>
            <ul class="credit_bundles text-center">
                 {% for item in site.data.pages.pricing.block_2.items %}
                <li>
                    <div class='offer_rate'>
                        <h3 class="service_name">{{item.name}}</h3>
                        <div class="price">{{item.price_1}}</div>
                    </div>
                    <small class="small_text">Get Extra</small>
                    <h4 class="get_extra">{{item.price_2}}</h4>
                    <small class="small_text">For Free</small>
                    <a href="{{site.data.pages.pricing.block_2.button.link}}" class="you_choose text-uppercase">
                        <span class="triangle">&nbsp;</span>{{site.data.pages.pricing.block_2.button.name}}
                    </a>
                </li>
                {% endfor %}
            </ul>
        </div>
    </section>
    <section class="section_grey_bg service_pricing_block" style="background-image: url({{ site.data.pages.pricing.block_3.background_image }});
    box-shadow:inset 0 0 0 10000px {{ site.data.pages.pricing.block_3.color_overlay }}; 
    background-position: center bottom; 
    background-repeat: no-repeat; 
    -moz-background-size: cover;
    -o-background-size: cover; 
    -webkit-background-size: cover; 
    background-size: cover;
    {% if site.data.pages.pricing.block_3.visible == true %}
    display: block; 
    {% else %}
    display: none;
    {% endif %}">
        <div class="container">
            <div class="text_row">
                <h2 class="border_heading heading text-center">Pricing Examples</h2>
            </div>
            <ul class="service_pricing_ul">
                {% for item in site.data.pages.pricing.block_3.items %}
                <li class="text-center">
                    <div class="servimgce_imgcon app">
                        <img src="{{item.icon}}" style="width: 50%">
                    </div>
                    <div>{{item.text | markdownify}}</div>
                </li>
                {% endfor %}
            </ul>
        </div>
    </section>
</div>
<!-- CONTENT END -->




<script src='/assets/v3/js/bootstrap-select.min.js'></script>