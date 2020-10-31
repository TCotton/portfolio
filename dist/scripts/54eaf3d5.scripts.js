"use strict";

angular.module("AppConstants", []).constant("SLIDER", {
    slider1: {
        title: "Thompson Reuters Japan",
        text: "A key website for Thomson Reuters expanding Far East market.",
        URL: "/work-projects/thomson-reuters-japan"
    },
    slider2: {
        title: "Blinkboxbooks",
        text: "Tesco's new flagship eCommerce site built with AngularJS by a world-class in-house team.",
        URL: "/work-projects/blinkbox"
    },
    slider3: {
        title: "lightning.gs",
        text: "Optimizes and coverts PNG images to Data URIs using the latest HTML5 APIs.",
        URL: "/side-projects/lightning"
    },
    slider4: {
        title: "UK Law Student",
        text: "A clean, easy-to-navigate site to help Thomson Reuters engage with law undergraduates.",
        URL: "/work-projects/uk-lawstudent"
    },
    slider5: {
        title: "Kaplan International",
        text: "Owned by the Washington Post Group, Kaplan International is the worlds leading education provider for those seeking to speak English.",
        URL: "/work-projects/kaplan"
    },
    slider6: {
        title: "Dr Newmans Clinic",
        text: "One of Harley Street's leading specialist private clinics.",
        URL: "/work-projects/drnewmans"
    },
    slider7: {
        title: "Penny Books",
        text: "Uses the Amazon API to search for books on sale for only one penny.",
        URL: "/side-projects/pennybooks"
    },
    slider8: {
        title: "Twt Twt",
        text: "Send Tweets with UTF-8 character symbols to make a simple message fun → ♘ ❤ ♬ ♡ ❄ ♘",
        URL: "/side-projects/twttwt"
    }
}).constant("CONFIG", {
    JSONP_GOOGLE_API: "//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=",
    RSS_FEED_LINK: "http://2223d9145efd2b35ed36-6671f2c2aa691e80e8c08f3a239bdfd7.r67.cf3.rackcdn.com/rss_feed.xml",
    BLOG: {
        BLOG_1: "images/blog-stock-images/stock-photo-one.jpg",
        BLOG_2: "images/blog-stock-images/stock-photo-two.jpg",
        BLOG_3: "images/blog-stock-images/stock-photo-three.jpg",
        BLOG_4: "images/blog-stock-images/stock-photo-four.jpg",
        BLOG_5: "images/blog-stock-images/stock-photo-five.jpg",
        BLOG_6: "images/blog-stock-images/stock-photo-six.jpg",
        BLOG_7: "images/blog-stock-images/stock-photo-seven.jpg",
        BLOG_8: "images/blog-stock-images/stock-photo-eight.jpg",
        BLOG_9: "images/blog-stock-images/stock-photo-nine.jpg",
        BLOG_10: "images/blog-stock-images/stock-photo-ten.jpg"
    },
    CURRENT_DOMAIN: "http://portfolio.andywalpole.me/"
}).constant("WORK", {
    pages: {
        elevaate: {
            id: "001",
            title: "elavaate",
            summary: "Retail advertising plaftform",
            details: "<p>elevaate's business model is aimed at large high-street retailers with a strong online presence. The company was started by a number of former Kiddicare employees, including the original CEO and Kiddicare founder.</p><p>The project was divided into two parts: coding the responsive design administration area and creating the JavaScript which will be used as a third-party script on the retailers' websites.</p><p>The code for the third-party JavaScript had to work across the full spectrum of devices and browsers, including Internet Explorer 6 and up and all Android major versions. For performance reasons, the code had to be standalone without the support of a library like jQuery. It's role was to communicate from the retailers' sites, injecting HTML in return when required.</p><p>The administration area used a number of JavaScript libraries including velocity.js for animation, pmrpc.js for cross-domain iFrame communication and moment.js for consistent date formatting.</p>",
            code: "JavaScript",
            company: "elevaate",
            internalUrl: "/work-projects/elevaate",
            externalUrl: "https://demo.develevaate.com/portal/public/index.html",
            workImage: "/images/elevaate-screenshot.jpg"
        },
        blinkbox: {
            id: "002",
            title: "Blinkboxbooks",
            summary: "Tesco's new flagship eCommerce site built with AngularJS.",
            details: "<p>I worked with a world class in-house team for several months to help build this full-stack JavaScript eBooks website which is intended to be a serious rival to Amazon's UK dominance of the sector.</p><p>My primary responsibility in this project was to provide solutions to the performance problem. At the initial usability tests in November 2013, the website was over 3mb in size and took 22 seconds to load on the Tesco Hudle Android tablet. By January 2014 the size of the homepage had been reduced to 565kb in size and with a load time of under seven seconds on the low-spec Android tablet the Hudle, and just a few seconds on the desktop.</p><p>The website is responsive with a heavy emphasis on visual and functionality polarity between the website and the Android and iOS apps.</p>",
            code: "AngularJS",
            company: "Blinkboxbooks, Tescos",
            internalUrl: "/work-projects/blinkbox",
            externalUrl: "https://www.blinkboxbooks.com/#!/",
            workImage: "/images/blinkboxbooks-screenshot.png"
        },
        thomsonreuters: {
            id: "003",
            title: "Thomson Reuters Japan",
            summary: "A key website for Thomson Reuters expanding Far East market.",
            details: "<p>I spent several months from 2012 to 2013 working at the Canary Wharf office of Thomson Reuters.</p><p>The company was created after the merger of Thomson Corporation with the Reuters news agency in 2008.</p><p>The company has two large creative services departments in London and in Eagan, Minnesota; with a smaller team at their New York headquarters.</p><p>The preferred CMS of the small web design team in London was Wordpress. They considered that this Open Source platform had the right blend of easy software extendability and user-friendly admin areas.</p><p>Due to the international reach of the company the work often involved liaising between individuals across several different countries. In the case of this project, it meant closely working with the Japanese team who provided text and guidance.</p><p>All coding – CSS, HTML, JavaScript and PHP – was undertaken by myself.</p>",
            code: "Wordpress",
            company: "Thomson Reuters",
            internalUrl: "/work-projects/thomson-reuters-japan",
            externalUrl: "http://japan.thomsonreuters.com/",
            workImage: "/images/thomson-reuters-japan-screenshot.png"
        },
        lawstudent: {
            id: "004",
            title: "Thomson Reuters<br> Law Student",
            summary: "A clean, easy-to-navigate site to help Thomson Reuters engage with law undergraduates.",
            details: "<p>This project was a refresh of an existing website that had been online for several years.</p><p>The London-based Creative Services web design team were particularly keen on Wordpress because of the ease that non-technical staff could update content.</p><p>Due to its liberal API, Wordpress is best used as a framework, which helps to limit dependency on third-party plugins. There can be both security and performance concerns when using additional plugins so they are best avoided where possible.</p><p>The Thomson Reuters Law Student site is heavily customised so as to achieve the complex layouts. As with the Thomson Reuters Japan site, I was responsible for all server and client-side development work.</p>",
            code: "Wordpress",
            company: "Thomson Reuters",
            internalUrl: "/work-projects/uk-lawstudent",
            externalUrl: "http://uklawstudent.thomsonreuters.com/",
            workImage: "/images/uk-lawstudents-screenshot.png"
        },
        kaplan: {
            id: "005",
            title: "Kaplan International",
            summary: "Owned by the Washington Post Group, Kaplan International is the worlds leading education provider for those seeking to speak English.",
            details: "<p>Although not a household name, Kaplan International is a multinational corporation with a multi-billion dollar turnover.</p><p>Due to staff sickness, this flagship human resources website had been put to the side for several months. During my time at Kaplan International, I was given the responsibility of working with the human resources team in order to get this project back on track.</p><p>Built with Wordpress, my first task was to refactor all the code. It is heavily customised on both the backend and frontend so as to allow the Human Resources personnel to easily update the website.</p>",
            code: "Wordpress",
            company: "Kaplan International",
            internalUrl: "/work-projects/kaplan",
            externalUrl: "",
            workImage: "/images/kaplan-screenshot.png"
        },
        drnewmans: {
            id: "006",
            title: "Dr Drewmans Clinic",
            summary: "One of Harley Street's leading specialist private clinics.",
            details: "<p>Working for the Barn Agency, I built this website on the Drupal 7 platform.</p><p>Drupal is a robust Content Management System that if used with key third-party modules such as Views, can create feature rich websites with complex layouts.</p>",
            code: "Drupal",
            company: "Barn Agency",
            internalUrl: "/work-projects/drnewmans",
            externalUrl: "http://www.drnewmansclinic.co.uk/",
            workImage: "/images/dr-newmans-screenshot.png"
        }
    },
    postContent: {
        className: "clearfix my-work",
        one: {
            href: "/work-projects/elevaate",
            class: "project-box-one",
            name: "elevaate"
        },
        two: {
            href: "/work-projects/blinkbox",
            class: "project-box-two",
            name: "Blinkboxbooks"
        },
        three: {
            href: "/work-projects/thomson-reuters-japan",
            class: "project-box-three",
            name: "Thompson Reuters Japan"
        },
        four: {
            href: "/work-projects/uk-lawstudent",
            class: "project-box-four",
            name: "UK Law Student"
        },
        five: {
            href: "/work-projects/kaplan",
            class: "project-box-five",
            name: "Kaplan International"
        },
        six: {
            href: "/work-projects/drnewmans",
            class: "project-box-six",
            name: "/work-projects/drnewmans"
        }
    }
}).constant("PROJECTS", {
    pages: {
        lightning: {
            id: "001",
            title: "lightning.sx",
            summary: "Optimizes and coverts PNG images to Data URIs using the latest HTML5 API technology.",
            details: '<p>Lightning.sx is a single page website that allows the user to upload an image, optimize it (if PNG) and then create a data URI.</p><p>Technologies used on the client-side include Backbone.js, a JavaScript port of PngCrush and various HTML5 APIs including Web Workers, File and FileReader.</p><p>The site is built on a fluid layout and extensively uses CSS3 transforms, transitions and border-radius to achieve the pop art design homage.</p><p>The code is on <a href="https://github.com/TCotton/lightning" rel="external" class="underline">GitHub</a></p>',
            code: "Backbone.js",
            internalUrl: "/side-projects/lightning",
            externalUrl: "http://lightning.sx/",
            workImage: "/images/lightning-screenshot.png"
        },
        pennybooks: {
            id: "002",
            title: "Penny Books",
            summary: "Uses the Amazon API to search for books on sale for only one penny.",
            details: "<p>Penny Books uses the Amazon API to find books that are on sale for just one penny.</p><p>Technologies used on the server-side include the HTML5 History API, history.js and the jQuery backstretch plugin.</p><p>The site is fully responsive and works and looks great on the mobile, tablet and desktop platforms.</p>",
            code: "HTML5 APIs and PHP backend",
            internalUrl: "/side-projects/pennybooks",
            externalUrl: "http://pennybooks.info/",
            workImage: "/images/peenybooks-screenshot.png"
        },
        "mq-keyframes": {
            id: "003",
            title: "mq-keyframes",
            summary: "Part of postCSS ecosystem. PostCSS is a tool for transforming CSS with JS plugins",
            details: "<p>postcss-mq-keyframes is part of the postCSS ecosystem - a tool for transforming CSS with JS plugins</p><p>Takes CSS3 keyframe animation and moves them outside any media queries to the bottom of the file.</p>",
            code: "JavaScript - NodeJS",
            internalUrl: "/side-projects/postcss-mq-keyframes",
            externalUrl: "https://www.npmjs.com/package/postcss-mq-keyframes",
            workImage: "/images/postcss-mq-keyframes-screenshot.png"
        },
        diceware: {
            id: "004",
            title: "Diceware",
            summary: "Create NSA-resistant passphrases using the Diceware method",
            details: '<p>This side-project, built on React / Flux architecture, uses the Diceware method for creating passphrases.</p> <p>Invented by Arnold Reinhold in the mid-90s, Diceware requires five rolls of a six-sided die for every word. Arnold recommends using a minimum of six words to ensure that the entropy level is high enough to be uncrackable by even the most powerful computers.</p> <p>As an example, this is a six word Diceware-generated passphrase: whom heat easter m&m chaff lynch.</p> <p>Rolling a die 30 times is a laborious task, but the website diceware.buzz generates a passphrase in milliseconds.</p> <p>To ensure genuine cryptographic randomness, the code uses either the NodeJS crypto module or the browser crypto API, depending on the environment. In the absence of either, it falls back to the JavaScript Math methods.</p><p>The website address is <a href="https://diceware.buzz/">https://diceware.buzz</a>.<br>The code can be found on <a href="https://github.com/TCotton/diceware-react-flux">my GitHub account</a>.</p>',
            code: "React / Flux",
            internalUrl: "/side-projects/diceware",
            externalUrl: "https://diceware.buzz/",
            workImage: "/images/diceware-screenshot.png"
        },
        posthtmlHead: {
            id: "005",
            title: "posthtml-head-elements",
            summary: "Post-processor NPM module",
            details: "<p>posthtml-head-elements is an NPM module which is a part of the vibrant and ever-expanding frontend post-processor toolset.</p><p>PostCSS is probably the most well-known suite of post-processor modules, but PostHTML is a new addition to the frontend NPM ecosystem.</p><p>PostHTML allows the developer to make changes to the HTML during the build process.</p><p>posthtml-head-elements stores all HTML head elements - title, script, link, base and meta - in a JSON file, and renders them into the documents head.</p>",
            code: "Node.js",
            internalUrl: "/side-projects/posthtml-head-elements",
            externalUrl: "https://www.npmjs.com/package/posthtml-head-elements",
            workImage: "/images/posthtml-head-elements-screenshot.png"
        },
        posthtmlGrunt: {
            id: "006",
            title: "posthtml-grunt",
            summary: "Grunt.js wrapper for PostHMTL",
            details: "<p>posthtml-grunt is a Grunt wrapper for the PostHMTL npm module.</p><p>Grunt has mostly been superseded by Gulp, which is a faster and more maintainable build system.</p><p>However, there is a lot of legacy code in use in projects (such as this portfolio!) that rely on Grunt, and so any new suite of npm tools, like PostHMTL, will still require a Grunt wrapper.</p>",
            code: "Node.js",
            internalUrl: "/side-projects/posthtml-grunt",
            externalUrl: "https://www.npmjs.com/package/grunt-posthtml",
            workImage: "/images/grunt-posthtml-screenshot.png"
        }
    },
    postContent: {
        className: "clearfix side-projects",
        one: {
            href: "/side-projects/diceware",
            class: "project-box-one",
            name: "Diceware"
        },
        two: {
            href: "/side-projects/posthtml-head-elements",
            class: "project-box-two",
            name: "posthtml-head-elements"
        },
        three: {
            href: "/side-projects/posthtml-grunt",
            class: "project-box-three",
            name: "posthtml-grunt"
        },
        four: {
            href: "/side-projects/lightning",
            class: "project-box-four",
            name: "lightning.sx"
        },
        five: {
            href: "/side-projects/postcss-mq-keyframes",
            class: "project-box-five",
            name: "PostCSS MQ-Keyframes"
        },
        six: {
            href: "/side-projects/pennybooks",
            class: "project-box-six",
            name: "Penny Books"
        }
    }
}).constant("STATS", {
    block1: {
        header: "",
        section: "Days working as a full-time web developer"
    },
    block2: {
        header: "3",
        section: "Cups of coffee before I start work in the morning"
    },
    block3: {
        header: "93",
        section: "Industry RSS feeds I subscribe to using NewsBlur"
    },
    block4: {
        header: "3",
        section: "Minutes before I check my Twitter feed after I wake up"
    },
    block5: {
        header: "78<sup>%</sup>",
        section: "Unit test coverage of this site using Karma and Jasmine"
    }
}).value("debug", false);

//# sourceMappingURL=constants.js.map
/**
 * Created by awalpole on 06/10/2014.
 */
"use strict";

angular.module("underscore", []).factory("_", [ "$window", function($window) {
    return $window._;
} ]);

//# sourceMappingURL=underscore_factory.js.map
/**
 * Created by awalpole on 06/10/2014.
 */
"use strict";

angular.module("momentLibrary", []).factory("moment", [ "$window", function($window) {
    return $window.moment;
} ]);

//# sourceMappingURL=moment_factory.js.map
/**
 * Created by andywalpole on 26/10/15.
 */
"use strict";

angular.module("react", []).factory("React", [ "$window", function($window) {
    return $window.React;
} ]);

//# sourceMappingURL=react_factory.js.map
/**
 * Created by andywalpole on 06/04/2015.
 */
"use strict";

angular.module("requestTimeout", []).factory("requestTimeout", [ "$window", function($window) {
    // handle multiple browsers for requestAnimationFrame()
    var requestAFrame = function() {
        // if all else fails, use setTimeout
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function(callback) {
            return window.setTimeout(callback, 1e3 / 60);
        };
    }();
    /**
   * Behaves the same as setTimeout except uses requestAnimationFrame() where possible for better performance
   * @param {function} fn The callback function
   * @param {int} delay The delay in milliseconds
   */
    $window.requestTimeout = function(fn, delay) {
        var start;
        var handle;
        if (!$window.requestAnimationFrame && !$window.webkitRequestAnimationFrame && !$window.oRequestAnimationFrame && !$window.msRequestAnimationFrame) {
            return $window.setTimeout(fn, delay);
        }
        start = new Date().getTime();
        handle = {};
        function loop() {
            var current = new Date().getTime();
            var delta = current - start;
            delta >= delay ? fn.call() : handle.value = requestAFrame(loop);
        }
        handle.value = requestAFrame(loop);
        return handle;
    };
    return $window.requestTimeout;
} ]);

//# sourceMappingURL=requestTimeout_factory.js.map
/**
 * Created by andywalpole on 06/04/2015.
 */
"use strict";

angular.module("clearRequestTimeout", []).factory("clearRequestTimeout", [ "$window", function($window) {
    /**
   * Behaves the same as clearTimeout except uses cancelRequestAnimationFrame() where possible for better performance
   * @param {int|object} fn The callback function
   */
    $window.clearRequestTimeout = function(handle) {
        $window.cancelAnimationFrame ? $window.cancelAnimationFrame(handle.value) : $window.webkitCancelAnimationFrame ? $window.webkitCancelAnimationFrame(handle.value) : $window.mozCancelRequestAnimationFrame ? $window.mozCancelRequestAnimationFrame(handle.value) : $window.msCancelRequestAnimationFrame ? $window.msCancelRequestAnimationFrame(handle.value) : clearTimeout(handle);
    };
    return $window.clearRequestTimeout;
} ]);

//# sourceMappingURL=clearRequestTimeout_factory.js.map
/**
 * Created by andywalpole on 06/04/2015.
 */
"use strict";

angular.module("requestInterval", []).factory("requestInterval", [ "$window", function($window) {
    // handle multiple browsers for requestAnimationFrame()
    // requestAnimationFrame() shim by Paul Irish
    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    var requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
            window.setTimeout(callback, 1e3 / 60);
        };
    }();
    /**
   * Behaves the same as setInterval except uses requestAnimationFrame() where possible for better performance
   * @param {function} fn The callback function
   * @param {int} delay The delay in milliseconds
   */
    $window.requestInterval = function(fn, delay) {
        if (!$window.requestAnimationFrame && !$window.webkitRequestAnimationFrame && !($window.mozRequestAnimationFrame && $window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
        !$window.oRequestAnimationFrame && !$window.msRequestAnimationFrame) {
            return $window.setInterval(fn, delay);
        }
        var start = new Date().getTime();
        var handle = {};
        function loop() {
            var current = new Date().getTime();
            var delta = current - start;
            if (delta >= delay) {
                fn.call();
                start = new Date().getTime();
            }
            handle.value = requestAnimFrame(loop);
        }
        handle.value = requestAnimFrame(loop);
        return handle;
    };
    return $window.requestInterval;
} ]);

//# sourceMappingURL=requestInterval_factory.js.map
/**
 * Created by andywalpole on 09/04/2015.
 */
"use strict";

angular.module("clearRequestInterval", []).factory("clearRequestInterval", [ "$window", function($window) {
    /**
   * Behaves the same as clearInterval except uses cancelRequestAnimationFrame() where possible for better performance
   * @param {int|object} fn The callback function
   */
    $window.clearRequestInterval = function(handle) {
        $window.cancelAnimationFrame ? $window.cancelAnimationFrame(handle.value) : $window.webkitCancelAnimationFrame ? $window.webkitCancelAnimationFrame(handle.value) : $window.mozCancelRequestAnimationFrame ? $window.mozCancelRequestAnimationFrame(handle.value) : $window.msCancelRequestAnimationFrame ? $window.msCancelRequestAnimationFrame(handle.value) : clearInterval(handle);
    };
    return $window.clearRequestInterval;
} ]);

//# sourceMappingURL=clearRequestInterval_factory.js.map
/**
 * Created by awalpole on 26/02/15.
 */
"use strict";

angular.module("helperFunctions", []).factory("helperFunctionsService", [ function() {
    return {
        createContentSnippet: function createContentSnippet(content, maxChars) {
            // to create a codeSnippet cut down the content to around 130 characters without cutting a whole word in half
            var maxLength;
            var trimmedString;
            var sanitized;
            sanitized = content.toString().replace(/(<([^>]+)>)/gi, "");
            // maximum number of characters to extract
            maxLength = maxChars;
            //trim the string to the maximum length
            // make sure not include opening paragraph tag if any
            // hence, cut string at the third characters
            if (maxLength === 260) {
                trimmedString = sanitized.substr(0, maxLength);
            }
            if (maxLength === 130) {
                trimmedString = sanitized.substr(0, maxLength);
            }
            //re-trim if we are in the middle of a word
            trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + " ...";
            //strip and HTML tags
            return trimmedString.trim();
        },
        addSEOFriendlyURL: function addSEOFriendlyURL(contentTitle) {
            var stopwords = [ "a", "about", "above", "across", "after", "afterwards", "again", "against", "all", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "amoungst", "amount", "an", "and", "another", "any", "anyhow", "anyone", "anything", "anyway", "anywhere", "are", "around", "as", "at", "back", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "behind", "being", "below", "beside", "besides", "between", "beyond", "bill", "both", "bottom", "but", "by", "call", "can", "cannot", "cant", "co", "con", "could", "couldnt", "cry", "de", "describe", "detail", "do", "done", "down", "due", "during", "each", "eg", "eight", "either", "eleven", "else", "elsewhere", "empty", "enough", "etc", "even", "ever", "every", "everyone", "everything", "everywhere", "except", "few", "fifteen", "fify", "fill", "find", "fire", "first", "five", "for", "former", "formerly", "forty", "found", "four", "from", "front", "full", "further", "get", "give", "go", "had", "has", "hasnt", "have", "he", "hence", "her", "here", "hereafter", "hereby", "herein", "hereupon", "hers", "herself", "him", "himself", "his", "how", "however", "hundred", "ie", "if", "in", "inc", "indeed", "interest", "into", "is", "it", "its", "itself", "keep", "last", "latter", "latterly", "least", "less", "ltd", "made", "many", "may", "me", "meanwhile", "might", "mill", "mine", "more", "moreover", "most", "mostly", "move", "much", "must", "my", "myself", "name", "namely", "neither", "never", "nevertheless", "next", "nine", "no", "nobody", "none", "noone", "nor", "not", "nothing", "now", "nowhere", "of", "off", "often", "on", "once", "one", "only", "onto", "or", "other", "others", "otherwise", "our", "ours", "ourselves", "out", "over", "own", "part", "per", "perhaps", "please", "put", "rather", "re", "same", "see", "seem", "seemed", "seeming", "seems", "serious", "several", "she", "should", "show", "side", "since", "sincere", "six", "sixty", "so", "some", "somehow", "someone", "something", "sometime", "sometimes", "somewhere", "still", "such", "system", "take", "ten", "than", "that", "the", "their", "them", "themselves", "then", "thence", "there", "thereafter", "thereby", "therefore", "therein", "thereupon", "these", "they", "thickv", "thin", "third", "this", "those", "though", "three", "through", "throughout", "thru", "thus", "to", "together", "too", "top", "toward", "towards", "twelve", "twenty", "two", "un", "under", "until", "up", "upon", "us", "very", "via", "was", "we", "well", "were", "what", "whatever", "when", "whence", "whenever", "where", "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whither", "who", "whoever", "whole", "whom", "whose", "why", "will", "with", "within", "without", "would", "yet", "you", "your", "yours", "yourself", "yourselves", "the" ];
            var regexNonAlphaNum = /[^\-a-z0-9]/g;
            var regexWhiteSpace = /\s/gi;
            var twoDashes = /[\-]{2}/g;
            var x;
            var l;
            var newTitle;
            // initially remove hyphens and the white space to their right
            newTitle = contentTitle.replace(/–\s/g, "").toLowerCase();
            x = 0;
            l = stopwords.length;
            // loop through the SEO watch words and replace with white space hyphen
            do {
                var regEx = new RegExp("\\b\\s" + stopwords[x] + "\\s\\b", "g");
                var regExTwo = new RegExp("^" + stopwords[x] + "\\s\\b");
                var regExThree = new RegExp("\\s\\b" + stopwords[x] + "$");
                newTitle = newTitle.replace(regEx, "-").trim().replace(regExTwo, "").replace(regExThree, "");
                x += 1;
            } while (x < l);
            // remove white space and replace with hyphens
            newTitle = newTitle.replace(regexWhiteSpace, "-");
            // remove all non-alpha numeric characters
            newTitle = newTitle.replace(regexNonAlphaNum, "");
            newTitle = newTitle.replace(twoDashes, "-");
            return newTitle;
        }
    };
} ]);

//# sourceMappingURL=helperFunctionService.js.map
/**
 * Created by awalpole on 06/10/2014.
 */
// jscs:disable
// jshint maxdepth:5
// jshint maxcomplexity:10
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

angular.module("detectLocalStorage", []).factory("storage", [ function() {
    /**
   * is returns a boolean if the typeof an obj is exactly type.
   *
   * @access private
   * @function is
   * @param {*} obj - A thing we want to check the type of
   * @param {string} type - A string to compare the typeof against
   * @returns {boolean}
   */
    function is(obj, type) {
        return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === type;
    }
    var tests = [];
    /**
   *
   * ModernizrProto is the constructor for Modernizr
   *
   * @class
   * @access public
   */
    var ModernizrProto = {
        // The current version, dummy
        _version: "3.1.0",
        // Any settings that don't work as separate modules
        // can go in here as configuration.
        _config: {
            classPrefix: "",
            enableClasses: true,
            enableJSClass: true,
            usePrefixes: true
        },
        // Queue of tests
        _q: [],
        // Stub these for people who are listening
        on: function on(test, cb) {
            // I don't really think people should do this, but we can
            // safe guard it a bit.
            // -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.
            // This is in case people listen to synchronous tests. I would leave it out,
            // but the code to *disallow* sync tests in the real version of this
            // function is actually larger than this.
            var self = this;
            setTimeout(function() {
                cb(self[test]);
            }, 0);
        },
        addTest: function addTest(name, fn, options) {
            tests.push({
                name: name,
                fn: fn,
                options: options
            });
        },
        addAsyncTest: function addAsyncTest(fn) {
            tests.push({
                name: null,
                fn: fn
            });
        }
    };
    // Fake some of Object.create so we can force non test results to be non "own" properties.
    var Modernizr = function Modernizr() {};
    Modernizr.prototype = ModernizrProto;
    // Leak modernizr globally when you `require` it rather than force it here.
    // Overwrite name so constructor name is nicer :D
    Modernizr = new Modernizr();
    /*!
   {
   "name": "Local Storage",
   "property": "localstorage",
   "caniuse": "namevalue-storage",
   "tags": ["storage"],
   "knownBugs": [],
   "notes": [],
   "warnings": [],
   "polyfills": [
   "joshuabell-polyfill",
   "cupcake",
   "storagepolyfill",
   "amplifyjs",
   "yui-cacheoffline"
   ]
   }
   !*/
    // In FF4, if disabled, window.localStorage should === null.
    // Normally, we could not test that directly and need to do a
    //   `('localStorage' in window) && ` test first because otherwise Firefox will
    //   throw bugzil.la/365772 if cookies are disabled
    // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
    // will throw the exception:
    //   QUOTA_EXCEEDED_ERROR DOM Exception 22.
    // Peculiarly, getItem and removeItem calls do not throw.
    // Because we are forced to try/catch this, we'll go aggressive.
    // Just FWIW: IE8 Compat mode supports these features completely:
    //   www.quirksmode.org/dom/html5.html
    // But IE8 doesn't support either with local files
    Modernizr.addTest("localstorage", function() {
        var mod = "modernizr";
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch (e) {
            return false;
        }
    });
    var classes = [];
    /**
   * Run through all tests and detect their support in the current UA.
   *
   * @access private
   */
    function testRunner() {
        var featureNames;
        var feature;
        var aliasIdx;
        var result;
        var nameIdx;
        var featureName;
        var featureNameSplit;
        for (var featureIdx in tests) {
            featureNames = [];
            feature = tests[featureIdx];
            // run the test, throw the return value into the Modernizr,
            // then based on that boolean, define an appropriate className
            // and push it into an array of classes we'll join later.
            //
            // If there is no name, it's an 'async' test that is run,
            // but not directly added to the object. That should
            // be done with a post-run addTest call.
            if (feature.name) {
                featureNames.push(feature.name.toLowerCase());
                if (feature.options && feature.options.aliases && feature.options.aliases.length) {
                    // Add all the aliases into the names list
                    for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
                        featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
                    }
                }
            }
            // Run the test, or use the raw value if it's not a function
            result = is(feature.fn, "function") ? feature.fn() : feature.fn;
            // Set each of the names on the Modernizr object
            for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
                featureName = featureNames[nameIdx];
                // Support dot properties as sub tests. We don't do checking to make sure
                // that the implied parent tests have been added. You must call them in
                // order (either in the test, or make the parent test a dependency).
                //
                // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
                // hashtag famous last words
                featureNameSplit = featureName.split(".");
                if (featureNameSplit.length === 1) {
                    Modernizr[featureNameSplit[0]] = result;
                } else {
                    // cast to a Boolean, if not one already
                    /* jshint -W053 */
                    if (Modernizr[featureNameSplit[0]] && !(Modernizr[featureNameSplit[0]] instanceof Boolean)) {
                        Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]]);
                    }
                    Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result;
                }
                classes.push((result ? "" : "no-") + featureNameSplit.join("-"));
            }
        }
    }
    // Run each test
    testRunner();
    delete ModernizrProto.addTest;
    delete ModernizrProto.addAsyncTest;
    // Run the things that are supposed to run after the tests
    for (var i = 0; i < Modernizr._q.length; i++) {
        Modernizr._q[i]();
    }
    // Leak Modernizr namespace
    return Modernizr;
} ]);

// jscs:enable
//# sourceMappingURL=sessionStorageDetect_factory.js.map
"use strict";

/**
 * This entire site is coded in AngularJS. Inspect the code on GitHub: https://github.com/TCotton/portfolio
 */
angular.module("portfolioApp.blogAdminService", []);

angular.module("portfolioApp.blogAdminController", []);

angular.module("portfolioApp.blogCommentsController", []);

angular.module("portfolioApp.blogCommentsDirective", []);

angular.module("portfolioApp.blogCommentsService", []);

angular.module("portfolioApp.blogPagesController", []);

angular.module("portfolioApp.blogPagesDirective", []);

angular.module("portfolioApp.blogPagesService", []);

angular.module("portfolioApp.blogPagesFilter", []);

angular.module("portfolioApp.blogSidebarController", []);

angular.module("portfolioApp.contractController", []);

angular.module("portfolioApp.contractService", []);

angular.module("portfolioApp.footerController", []);

angular.module("portfolioApp.footerService", []);

angular.module("portfolioApp.homepageDirective", []);

angular.module("portfolioApp.miscDirective", []);

angular.module("portfolioApp.sideProjectsController", []);

angular.module("portfolioApp.angularReact", []);

angular.module("portfolioApp.sitemapController", []);

angular.module("portfolioApp.wordProjectsController", []);

angular.module("portfolioApp", [ "portfolioApp.blogAdminService", "portfolioApp.blogAdminController", "portfolioApp.blogCommentsDirective", "portfolioApp.blogCommentsService", "portfolioApp.blogPagesController", "portfolioApp.blogPagesDirective", "portfolioApp.blogPagesService", "portfolioApp.blogPagesFilter", "portfolioApp.blogSidebarController", "portfolioApp.contractController", "portfolioApp.contractService", "portfolioApp.footerController", "portfolioApp.footerService", "portfolioApp.homepageDirective", "portfolioApp.miscDirective", "portfolioApp.sideProjectsController", "portfolioApp.angularReact", "portfolioApp.sitemapController", "portfolioApp.wordProjectsController", "AppConstants", "ngResource", "ngSanitize", "ngRoute", "ngAria", "HashBangURLs", "portfolioAppConfig", "jmdobry.angular-cache", "underscore", "momentLibrary", "helperFunctions", "requestTimeout", "react", "detectLocalStorage" ]).config([ "$routeProvider", "$httpProvider", function($routeProvider, $httpProvider) {
    // Needed for CORS
    // http://better-inter.net/enabling-cors-in-angular-js/
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.useApplyAsync(true);
    $routeProvider.when("/", {
        templateUrl: "homepage/main.html",
        title: "The portfolio and blog of web developer Andy Walpole"
    }).when("/work-projects", {
        templateUrl: "work-projects/my_work.html",
        title: "Noteworthy work projects from the past 18 months",
        controller: "WorkPageCtrl as WorkProjPageCtrl"
    }).when("/work-projects/:workPage", {
        templateUrl: "work-projects/work_page.html",
        controller: "WorkPageCtrl as WorkProjPageCtrl"
    }).when("/side-projects", {
        templateUrl: "side-projects/side_projects.html",
        title: "Noteworthy personal side projects from the past couple of years",
        controller: "ProjectsPageCtrl as ProjPageCtrl"
    }).when("/side-projects/:projectsPage", {
        templateUrl: "side-projects/projects_page.html",
        controller: "ProjectsPageCtrl as ProjPageCtrl"
    }).when("/about-me", {
        templateUrl: "about-me/about_me.html",
        title: "Skills and CV"
    }).when("/contact-me", {
        templateUrl: "contact/contact_me.html",
        controller: "FormCtrl as AdminFormCtrl",
        title: "Contact form"
    }).when("/blog/", {
        templateUrl: "blog-pages/blog.html",
        controller: "BlogCtrl as BlogIndexCtrl",
        title: "blog unblock - the blog of web developer Andy Walpole"
    }).when("/blog/:blogId/:blogPage", {
        templateUrl: "blog-pages/blog_page.html",
        controller: "BlogArticleCtrl as BlogArticlePageCtrl"
    }).when("/category/:category", {
        templateUrl: "blog-pages/blog_category.html",
        controller: "BlogCatController as BlogCatPageController"
    }).when("/login", {
        templateUrl: "blog-admin/login.html",
        controller: "LoginCtrl as AdminLogin",
        title: "Admin login form"
    }).when("/admin/", {
        templateUrl: "blog-admin/admin.html",
        title: "Admin area"
    }).when("/admin/user-details", {
        templateUrl: "blog-admin/user_details.html",
        controller: "UserDetailsCtrl as AdminUserDetailsCtrl",
        title: "Admin area - add, edit or delete users with admin privileges"
    }).when("/admin/blog-details", {
        templateUrl: "blog-admin/blog_details.html",
        controller: "EditBlogCtrl as AdminEditBlogCtrl",
        title: "Admin area - edit or delete blog posts"
    }).when("/admin/add-blog", {
        templateUrl: "blog-admin/add_blog.html",
        controller: "AddBlogCtrl as AdminAddBlogCtrl",
        title: "Admin area - add new blog articles"
    }).when("/admin/blog-comments", {
        templateUrl: "blog-admin/comment_details.html",
        controller: "CommentAdminCtrl as AdminCommentAdminCtrl",
        title: "Admin area - edit blog comments"
    }).when("/sitemap", {
        templateUrl: "sitemap/html_sitemap.html",
        controller: "SitemapCtrl",
        title: "Sitemap"
    }).otherwise({
        redirectTo: "/404",
        templateUrl: "misc/404.html"
    });
    /** Solution to make server side code accept data submitted with angularjs via POST
   * Use x-www-form-urlencoded Content-Type
   * **/
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
    /*jshint maxcomplexity:8 */
    /**
   * The workhorse; converts an object to x-www-form-urlencoded serialization.
   * @param {Object} obj
   * @return {String}
   */
    var param = function param(obj) {
        var query = "";
        var name;
        var value;
        var fullSubName;
        var subName;
        var subValue;
        var innerObj;
        var i;
        for (name in obj) {
            value = obj[name];
            if (value instanceof Array) {
                for (i = 0; i < value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name + "[" + i + "]";
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + "&";
                }
            } else if (value instanceof Object) {
                for (subName in value) {
                    subValue = value[subName];
                    fullSubName = name + "[" + subName + "]";
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += param(innerObj) + "&";
                }
            } else if (value !== undefined && value !== null) {
                query += encodeURIComponent(name) + "=" + encodeURIComponent(value) + "&";
            }
        }
        return query.length ? query.substr(0, query.length - 1) : query;
    };
    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [ function(data) {
        return angular.isObject(data) && String(data) !== "[object File]" ? param(data) : data;
    } ];
} ]);

//# sourceMappingURL=app.js.map
"use strict";

angular.module("portfolioAppConfig", []).run([ "$rootScope", "$window", "$location", "$angularCacheFactory", "$route", function($rootScope, $window, $location, $angularCacheFactory, $route) {
    var track = function track() {
        /* jshint ignore:start */
        $window.ga("send", "pageview", {
            page: $location.path()
        });
    };
    $rootScope.$on("$viewContentLoaded", track);
    $rootScope.pageChange = false;
    $rootScope.currentPage = $location.absUrl();
    $rootScope.$on("$locationChangeStart", function() {
        if ($location.absUrl() === "https://andywalpole.me/?utm_source=Responsive+Design+Weekly&utm_campaign=f8173896a5-Responsive_Design_Weekly_152&utm_medium=email&utm_term=0_df65b6d7c8-f8173896a5-58971581#!/blog/142790/using-webp-image-format") {
            $window.location = "https://andywalpole.me/blog/142790/using-webp-image-format";
        }
        $rootScope.currentPage = $location.absUrl();
        if (!$angularCacheFactory.get("authCache")) {
            $angularCacheFactory("authCache", {
                maxAge: 864e5,
                deleteOnExpire: "aggressive",
                storageMode: "sessionStorage"
            });
        }
        if (!$angularCacheFactory.get("blogCache")) {
            $angularCacheFactory("blogCache", {
                maxAge: 864e5,
                deleteOnExpire: "aggressive",
                storageMode: "sessionStorage"
            });
        }
    });
    $rootScope.$on("$routeChangeSuccess", function() {
        if ($route.current.$$route) {
            $rootScope.pageTitle = $route.current.$$route.title;
            $rootScope.status = null;
        } else {
            $rootScope.pageTitle = "Not Found";
            $rootScope.status = "404";
        }
        /** Value used in the tablet / mobile dropdown menu code
     * Dropdown menu disappears on page change if it is down
     * **/
        if (!$rootScope.pageChange) {
            $rootScope.pageChange = true;
        }
        $rootScope.canonical = "https://andywalpole.me" + $location.path();
        $rootScope.hideFooter = $rootScope.currentPage.indexOf("blog") !== -1 || $rootScope.currentPage.indexOf("category") !== -1;
        // basic login detection service
        var admin = new RegExp("/admin/");
        var currentPage = $rootScope.currentPage.toString();
        if (admin.test(currentPage)) {
            if (!$angularCacheFactory.get("authCache").get("logginIn") || $angularCacheFactory.get("authCache").get("logginIn") !== $rootScope.userid) {
                $location.path("/login");
            }
        }
        // every time the page reloads make sure it loads from the top
        // clicking links on the middle of the page results in opening a new page in the same spot
        // temp solution
        // this also forces the browser to load from the top when navigating back
        $window.scrollTo(0, 0);
    });
} ]);

/**
 * Url modules
 */
//get the module from creating an angular module
angular.module("HashBangURLs", []).config([ "$locationProvider", function($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    }).hashPrefix("!");
} ]);

//# sourceMappingURL=config.js.map
/**
 * Created by awalpole on 01/09/2014.
 */
"use strict";

angular.module("portfolioApp.blogPagesFilter").filter("wordcount", function() {
    return function(input) {
        var s = input;
        s = s.replace(/(^\s*)|(\s*$)/gi, "");
        s = s.replace(/[ ]{2,}/gi, " ");
        s = s.replace(/\n /, "\n");
        return s.split(" ").length;
    };
});

//# sourceMappingURL=word_count_filter.js.map
"use strict";

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var BlogDataService = function() {
        /**
     * @param $http {function}
     * @param $q {function}
     * @param MongoBlogFactory {object}
     * @param $angularCacheFactory {function}
     * @param CONFIG {object}
     * @param storage {object}
     */
        function BlogDataService($http, $q, MongoBlogFactory, $angularCacheFactory, CONFIG, storage) {
            _classCallCheck(this, BlogDataService);
            this.$http = $http;
            this.$q = $q;
            this.MongoBlogFactory = MongoBlogFactory;
            this.$angularCacheFactory = $angularCacheFactory;
            this.CONFIG = CONFIG;
            this.storage = storage;
        }
        _createClass(BlogDataService, [ {
            key: "retrieveData",
            value: function retrieveData() {
                var _this = this;
                var _blogData = void 0;
                var deferred = this.$q.defer();
                // remove cache for debugging purposes
                if (this.$angularCacheFactory.get("authCache").get("logginIn")) {
                    this.$angularCacheFactory.get("blogCache").removeAll();
                }
                // use a a cache means that it is possible to bypass the above methods and just serve up the data
                if (!this.$angularCacheFactory.get("blogCache").get("allBlogPosts")) {
                    // through a POST service supply the RSS url and the images in the CONFIG.BLOG object to be added the individual blog post objects
                    this.MongoBlogFactory.getOldBlogPosts({
                        RSSFeed: this.CONFIG.RSS_FEED_LINK,
                        BLOG: this.CONFIG.BLOG
                    }).then(function(value) {
                        _blogData = value;
                        if (_this.storage.localstorage) {
                            _this.$angularCacheFactory.get("blogCache").put("totalArticles", value.data.totalArticles);
                            _this.$angularCacheFactory.get("blogCache").put("allBlogPosts", value.data.BlogPosts);
                        }
                    }, function() {}).then(function() {
                        deferred.resolve(_blogData);
                    });
                }
                return deferred.promise;
            }
        } ]);
        return BlogDataService;
    }();
    angular.module("portfolioApp.blogPagesService").service("BlogDataService", [ "$http", "$q", "MongoBlogFactory", "$angularCacheFactory", "CONFIG", "storage", function($http, $q, MongoBlogFactory, $angularCacheFactory, CONFIG, storage) {
        return new BlogDataService($http, $q, MongoBlogFactory, $angularCacheFactory, CONFIG, storage);
    } ]);
})();

//# sourceMappingURL=blog_data_service.js.map
"use strict";

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var PostFormService = function() {
        /**
     * constructor
     * @param $http {object}
     * @param $q {object}
     */
        function PostFormService($http, $q) {
            _classCallCheck(this, PostFormService);
            this.$http = $http;
            this.$q = $q;
        }
        /**
     * @param formData {object}
     * @returns {*|deferred.promise|{then, always}}
     */
        _createClass(PostFormService, [ {
            key: "submitForm",
            value: function submitForm(formData) {
                var deferred = this.$q.defer();
                var returnedMessage = this.$http({
                    url: "/api/sendmail",
                    method: "POST",
                    data: formData,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                });
                deferred.resolve(returnedMessage);
                return deferred.promise;
            }
        } ]);
        return PostFormService;
    }();
    angular.module("portfolioApp.contractService").service("PostFormService", [ "$http", "$q", function($http, $q) {
        return new PostFormService($http, $q);
    } ]);
})();

//# sourceMappingURL=post_form_service.js.map
/**
 * Created by awalpole on 06/10/2014.
 */
"use strict";

angular.module("portfolioApp.blogAdminService").factory("MongoUserFactory", [ "$http", "$q", function($http, $q) {
    return {
        addUser: function addUser(formData) {
            // return promise
            var deferred = $q.defer();
            var returnedMessage = $http({
                url: "/api/users/add",
                method: "POST",
                data: formData,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            deferred.resolve(returnedMessage);
            return deferred.promise;
        },
        getUsers: function getUsers() {
            // return promise
            var deferred = $q.defer();
            var returnedMessage = $http({
                url: "/api/users/get",
                method: "GET"
            });
            deferred.resolve(returnedMessage);
            return deferred.promise;
        },
        deleteUsers: function deleteUsers(formData) {
            // return promise
            var deferred = $q.defer();
            var returnedMessage = $http({
                url: "/api/users/delete/" + formData,
                method: "DELETE"
            });
            deferred.resolve(returnedMessage);
            return deferred.promise;
        },
        editUsers: function editUsers(userData) {
            // return promise
            var deferred = $q.defer();
            var returnedMessage = $http({
                url: "/api/user/update",
                method: "PUT",
                data: userData,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            deferred.resolve(returnedMessage);
            return deferred.promise;
        },
        findUsers: function findUsers(data) {
            // return promise
            var deferred = $q.defer();
            var returnedMessage = $http({
                url: "/api/user/find",
                method: "POST",
                data: data,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            deferred.resolve(returnedMessage);
            return deferred.promise;
        }
    };
} ]);

//# sourceMappingURL=mongo_user_factory.js.map
/**
 * Created by awalpole on 06/10/2014.
 */
"use strict";

angular.module("portfolioApp.blogAdminService").factory("MongoBlogFactory", [ "$http", "$q", function($http, $q) {
    return {
        addBlogPost: function addBlogPost(formData) {
            // return promise
            var deferred = $q.defer();
            var returnedMessage = $http({
                url: "/api/blog/add",
                method: "POST",
                data: formData,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            deferred.resolve(returnedMessage);
            return deferred.promise;
        },
        getBlogPosts: function getBlogPosts() {
            // return promise
            var deferred = $q.defer();
            var returnedMessage = $http({
                url: "/api/blog/get",
                method: "GET",
                cache: true
            });
            deferred.resolve(returnedMessage);
            return deferred.promise;
        },
        editBlogPosts: function editBlogPosts(formData) {
            // return promise
            var deferred = $q.defer();
            var returnedMessage = $http({
                url: "/api/blog/update",
                method: "PUT",
                data: formData,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            deferred.resolve(returnedMessage);
            return deferred.promise;
        },
        deleteBlogPost: function deleteBlogPost(formData) {
            // return promise
            var deferred = $q.defer();
            var returnedMessage = $http({
                url: "/api/blog/delete/" + formData,
                method: "DELETE"
            });
            deferred.resolve(returnedMessage);
            return deferred.promise;
        },
        getOldBlogPosts: function getOldBlogPosts(data) {
            // return promise
            var deferred = $q.defer();
            var returnedMessage = $http({
                url: "/api/oldBlog/get",
                method: "GET",
                params: data,
                cache: true
            });
            deferred.resolve(returnedMessage);
            return deferred.promise;
        }
    };
} ]);

//# sourceMappingURL=mongo_blog_factory.js.map
"use strict";

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var MongoCommentService = function() {
        /**
     * @param $http {object}
     * @param $q {object}
     */
        function MongoCommentService($http, $q) {
            _classCallCheck(this, MongoCommentService);
            this.$http = $http;
            this.deferred = $q.defer();
        }
        /**
     * @param formData {object}
     * @returns {*}
     */
        _createClass(MongoCommentService, [ {
            key: "addComment",
            value: function addComment(formData) {
                var returnedMessage = this.$http({
                    url: "/api/comment/add",
                    method: "POST",
                    data: formData,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                });
                this.deferred.resolve(returnedMessage);
                return this.deferred.promise;
            }
        }, {
            key: "getComments",
            value: function getComments() {
                var returnedMessage = this.$http({
                    url: "/api/comment/get",
                    method: "GET"
                });
                this.deferred.resolve(returnedMessage);
                return this.deferred.promise;
            }
        }, {
            key: "editComment",
            value: function editComment(formData) {
                var returnedMessage = this.$http({
                    url: "/api/comment/update",
                    method: "PUT",
                    data: formData,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                });
                this.deferred.resolve(returnedMessage);
                return this.deferred.promise;
            }
        }, {
            key: "getPubilshedComments",
            value: function getPubilshedComments(data) {
                var returnedMessage = this.$http({
                    url: "/api/comment/getPublished",
                    method: "GET",
                    params: data
                });
                this.deferred.resolve(returnedMessage);
                return this.deferred.promise;
            }
        }, {
            key: "deleteComment",
            value: function deleteComment(formData) {
                var returnedMessage = this.$http({
                    url: "/api/comment/delete/" + formData,
                    method: "DELETE"
                });
                this.deferred.resolve(returnedMessage);
                return this.deferred.promise;
            }
        } ]);
        return MongoCommentService;
    }();
    angular.module("portfolioApp.blogCommentsService").service("MongoCommentService", [ "$http", "$q", function($http, $q) {
        return new MongoCommentService($http, $q);
    } ]);
})();

//# sourceMappingURL=mongo_comment_service.js.map
"use strict";

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var NewsBlurService = function() {
        /**
     * constructor
     * @param $http {object}
     * @param $q {object}
     */
        function NewsBlurService($http, $q) {
            _classCallCheck(this, NewsBlurService);
            this.$http = $http;
            this.$q = $q;
        }
        _createClass(NewsBlurService, [ {
            key: "getBlogPosts",
            value: function getBlogPosts() {
                // return promise
                var deferred = this.$q.defer();
                var returnedMessage = this.$http({
                    url: "/api/newsblur/get",
                    method: "GET"
                });
                deferred.resolve(returnedMessage);
                return deferred.promise;
            }
        } ]);
        return NewsBlurService;
    }();
    angular.module("portfolioApp.footerService").service("NewsBlurService", [ "$http", "$q", function($http, $q) {
        return new NewsBlurService($http, $q);
    } ]);
})();

//# sourceMappingURL=newsblur_service.js.map
"use strict";

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var FormCtrl = function() {
        /**
     * @description Contact me form submission
     * @param $scope {object}
     * @param PostFormService {object}
     * @param $sanitize {function}
     * @param _ {function}
     * @param $timeout {function}
     * @constructor
     */
        function FormCtrl($scope, PostFormService, $sanitize, _, $timeout) {
            _classCallCheck(this, FormCtrl);
            this.$scope = $scope;
            this.$sanitize = $sanitize;
            this._ = _;
            this.$timeout = $timeout;
            /** Using defineProperty prevents injected service being exposed to the template
       * **/
            Object.defineProperty(this, "PostFormService", {
                value: PostFormService
            });
            // declare scope
            this.$scope.contact = {};
            this.$scope.comments = {};
            /* Used in the hidden field spam trap */
            this.$scope.zipRegex = /(?!.*)/;
            this.$scope.submitted = false;
            this.$scope.contact.successMessage = null;
            this.$scope.contact.successMessageDisable = null;
        }
        /** Submit form and display message to user
     * Also delete form model values and disable the submit button
     * **/
        _createClass(FormCtrl, [ {
            key: "submitContactForm",
            value: function submitContactForm(isValid) {
                var _this = this;
                var formData = void 0;
                var promise = void 0;
                this.$scope.submitted = true;
                // check to make sure the form is completely valid
                if (isValid) {
                    // sanitise and remove naughty spam stuff from email
                    // TODO: move to server
                    formData = this._.object(this._.map(this.$scope.contact, function(value, key) {
                        value = _this.$sanitize(value).trim();
                        return [ key, value ];
                    }));
                    promise = this.PostFormService.submitForm(formData);
                    promise.then(function(value) {
                        if (value.data.success) {
                            _this.$scope.contact.successMessage = value.data.message;
                            _this.$scope.contact.successMessageDisable = value.data.success;
                            _this.$scope.submitted = false;
                            _this.$scope.contact.name = null;
                            _this.$scope.contact.email = null;
                            _this.$scope.contact.message = null;
                        }
                    }, function() {
                        _this.$log("Error: FormCtrl.submitContactForm");
                    });
                } else {
                    this.$scope.formFailure = "The form has not been submitted because of errors. Please review the form error messages and click submit again";
                    this.$timeout(function() {
                        document.querySelector(".comment-form-failure").focus();
                    }, 0);
                }
            }
        } ]);
        return FormCtrl;
    }();
    FormCtrl.$inject = [ "$scope", "PostFormService", "$sanitize", "_", "$timeout" ];
    angular.module("portfolioApp.contractController").controller("FormCtrl", [ "$scope", "PostFormService", "$sanitize", "_", "$timeout", function($scope, PostFormService, $sanitize, _, $timeout) {
        return new FormCtrl($scope, PostFormService, $sanitize, _, $timeout);
    } ]);
})();

//# sourceMappingURL=form_controller.js.map
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var BlogCtrl = /**
   * @description Blog home page
   * @param $scope {object}
   * @param BlogDataService {object}
   * @param $angularCacheFactory {function}
   * @param $rootScope {function}
   * @param _ {object}
   * @constructor
   */
    function BlogCtrl($scope, BlogDataService, $angularCacheFactory, _, $rootScope) {
        var _this = this;
        _classCallCheck(this, BlogCtrl);
        this.$scope = $scope;
        this.$rootScope = $rootScope;
        this.$scope.displayPosts = 5;
        /** Either receive data from BlogDataService or from the cache
     * **/
        if ($angularCacheFactory.get("blogCache").get("allBlogPosts")) {
            this.$scope.totalBlogPosts = $angularCacheFactory.get("blogCache").get("allBlogPosts");
        } else {
            // start loader spinner in loaderDirective
            this.$rootScope.loader = true;
            BlogDataService.retrieveData().then(function(result) {
                console.dir(result);
                if (_.isObject(result.data.BlogPosts)) {
                    // stop loader spinner in loaderDirective
                    _this.$rootScope.loader = false;
                    _this.$scope.totalBlogPosts = result.data.BlogPosts;
                }
            });
        }
    };
    BlogCtrl.$inject = [ "$scope", "BlogDataService", "$angularCacheFactory", "_", "$rootScope" ];
    angular.module("portfolioApp.blogPagesController").controller("BlogCtrl", [ "$scope", "BlogDataService", "$angularCacheFactory", "_", "$rootScope", function($scope, BlogDataService, $angularCacheFactory, _, $rootScope) {
        return new BlogCtrl($scope, BlogDataService, $angularCacheFactory, _, $rootScope);
    } ]);
})();

//# sourceMappingURL=blog_controller.js.map
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var BlogArticleCtrl = /**
   * @description For displaying individual blog posts
   * @param $rootScope {object}
   * @param $scope {object}
   * @param $location {object}
   * @param BlogDataService {object}
   * @param $log {object}
   * @param $timeout {function}
   * @param $sce {object}
   * @param $angularCacheFactory {function}
   * @param $route {object}
   * @param $filter {function}
   * @param _ {function}
   * @constructor
   */
    function BlogArticleCtrl($rootScope, $scope, $location, BlogDataService, $log, $timeout, $sce, $angularCacheFactory, $route, $filter, _) {
        var _this = this;
        _classCallCheck(this, BlogArticleCtrl);
        Object.assign(this, {
            $rootScope: $rootScope,
            $scope: $scope,
            $location: $location,
            $log: $log,
            $timeout: $timeout,
            $sce: $sce,
            $route: $route,
            $filter: $filter
        });
        this.$scope.oldBlogPosts = null;
        this.$scope.title = null;
        this.$scope.content = null;
        this.$scope.aside = null;
        this.$scope.article = null;
        /** Load blog data from either the service or cache and then populate the page with the values
     * **/
        if ($angularCacheFactory.get("blogCache").get("allBlogPosts")) {
            this.$scope.oldBlogPosts = $angularCacheFactory.get("blogCache").get("allBlogPosts");
        } else {
            // start loader spinner in loaderDirective
            this.$rootScope.loader = true;
            BlogDataService.retrieveData().then(function(result) {
                if (_.isObject(result.data.BlogPosts)) {
                    // start loader spinner in loaderDirective
                    _this.$rootScope.loader = false;
                    _this.$scope.oldBlogPosts = result.data.BlogPosts;
                }
            }, function(response) {
                _this.$log.warn("Error BlogArticleCtrl");
                _this.$log.warn(response);
            });
        }
        // find blogId number form the URL string, ie /#!/blog/136324/using-autoload-in-object-orientated-wordpress-plugin
        var blogId = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.indexOf("/blog/") + 6, this.$rootScope.currentPage.indexOf("/blog/") + 12);
        /**
     * @type {function(this:BlogArticleCtrl)|*|Function}
     * @private
     */
        var _renderArticle = function _renderArticle() {
            var blogPost = _.filter(_this.$scope.oldBlogPosts, function(o) {
                // filter articles array to find the correct article for the page
                if (o.publishedDate.substring(0, 6) === blogId) {
                    return o.publishedDate;
                }
            });
            if (!_.isEmpty(blogPost) && _this.$rootScope.currentPage.indexOf(blogPost[0].url) !== -1) {
                _this.$scope.title = blogPost[0].title;
                _this.$scope.author = blogPost[0].author;
                _this.$rootScope.pageTitle = blogPost[0].title + " / blog unblock";
                _this.$scope.content = blogPost[0].content;
                _this.$scope.aside = _this.$sce.trustAsHtml(blogPost[0].aside);
                _this.$scope.displayImage = blogPost[0].displayImage;
                if (blogPost[0].displayImage.indexOf("stock-photo") !== -1) {
                    var dot = blogPost[0].displayImage.lastIndexOf(".");
                    _this.$scope.displaySrcsetImage = blogPost[0].displayImage.slice(0, dot) + "-small" + blogPost[0].displayImage.slice(dot);
                } else {
                    _this.$scope.displaySrcsetImage = blogPost[0].displayImage;
                }
                _this.$scope.publishedDate = blogPost[0].publishedDate;
                _this.$scope.commentsOpen = blogPost[0].commentsOpen;
                _this.$scope.category = blogPost[0].category || "General";
                _this.$scope.URLencoded = encodeURIComponent(_this.$rootScope.currentPage);
                _this.$rootScope.faceBookTitle = blogPost[0].title;
                _this.$rootScope.faceBookDescription = blogPost[0].contentSnippet;
                _this.$timeout(function() {
                    _this.$scope.wordCount = _this.$filter("wordcount")(document.querySelector("section > div").innerText || document.querySelector("section > div").textContent);
                }, 0);
            } else {
                // if not empty redirect to homepage
                // TODO: move this server side
                _this.$location.path("/404");
            }
        };
        this.$scope.$watch("oldBlogPosts", function(blogData) {
            if (blogData !== null) {
                _renderArticle();
            }
        });
    };
    BlogArticleCtrl.$inject = [ "$rootScope", "$scope", "$location", "BlogDataService", "$log", "$timeout", "$sce", "$angularCacheFactory", "$route", "$filter", "_" ];
    angular.module("portfolioApp.blogPagesController").controller("BlogArticleCtrl", [ "$rootScope", "$scope", "$location", "BlogDataService", "$log", "$timeout", "$sce", "$angularCacheFactory", "$route", "$filter", "_", function($rootScope, $scope, $location, BlogDataService, $log, $timeout, $sce, $angularCacheFactory, $route, $filter, _) {
        return new BlogArticleCtrl($rootScope, $scope, $location, BlogDataService, $log, $timeout, $sce, $angularCacheFactory, $route, $filter, _);
    } ]);
})();

//# sourceMappingURL=blog_article_controller.js.map
"use strict";

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var WorkPageCtrl = function() {
        /**
     * @description Personal projects page
     * @param $rootScope {object}
     * @param $scope {object}
     * @param $log {object}
     * @param WORK {object}
     * @param $window {object}
     * @param _ {function}
     * @constructor
     */
        /* @ngInject */
        WorkPageCtrl.$inject = [ "$rootScope", "$scope", "$log", "WORK", "$window", "_" ];
        function WorkPageCtrl($rootScope, $scope, $log, WORK, $window, _) {
            _classCallCheck(this, WorkPageCtrl);
            this.$rootScope = $rootScope;
            this.$scope = $scope;
            this.$log = $log;
            this.$window = $window;
            this._ = _;
            /** Using defineProperty prevents injected constants being exposed to the template
       * **/
            Object.defineProperty(this, "WORK", {
                value: WORK.pages
            });
            Object.defineProperty(this, "WORK_PROJECTS", {
                value: WORK.postContent
            });
            this.$scope.title = null;
            this.$scope.summary = null;
            this.$scope.details = null;
            this.$scope.code = null;
            this.$scope.company = null;
            this.$scope.workImage = null;
            this.$scope.prevPage = null;
            this.$scope.nextPage = null;
        }
        _createClass(WorkPageCtrl, [ {
            key: "findData",
            value: function findData() {
                var currentPage = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.lastIndexOf("/") + 1, this.$rootScope.currentPage.length);
                var wordData = this._.filter(this.WORK, function(o) {
                    if (o.internalUrl.substring(o.internalUrl.lastIndexOf("/") + 1, o.internalUrl.length) === currentPage) {
                        return o;
                    }
                });
                if (!this._.isEmpty(wordData)) {
                    this.bindData(wordData);
                    this.navigation();
                } else {
                    this.$window.location.href = "/404";
                }
            }
        }, {
            key: "bindData",
            value: function bindData(data) {
                this.$scope.title = data[0].title;
                this.$scope.summary = data[0].summary;
                this.$scope.details = data[0].details;
                this.$scope.code = data[0].code;
                this.$scope.company = data[0].company;
                this.$scope.workImage = data[0].workImage;
                this.$scope.workImageWebP = data[0].workImage + ".webp";
                this.$rootScope.pageTitle = data[0].title + " - " + data[0].summary;
            }
        }, {
            key: "navigation",
            value: function navigation() {
                /**
         * TODO: refactor pagination
         * **/
                var currentPage = void 0;
                var page = void 0;
                var pageNumber = void 0;
                var prevPage = void 0;
                var nextPage = void 0;
                currentPage = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.lastIndexOf("/") + 1, this.$rootScope.currentPage.length);
                // return the object for the current page
                page = this._.filter(this.WORK, function(o) {
                    if (o.internalUrl.substring(o.internalUrl.lastIndexOf("/") + 1, o.length) === currentPage) {
                        return o;
                    }
                });
                if (!this._.isEmpty(page)) {
                    pageNumber = page[0].id;
                    // return the object for the previous page
                    prevPage = this._.filter(this.WORK, function(o) {
                        if (parseInt(o.id, 10) === parseInt(pageNumber, 10) - 1) {
                            return o;
                        }
                    });
                    // return the object for the next page
                    nextPage = this._.filter(this.WORK, function(o) {
                        if (parseInt(o.id, 10) === parseInt(pageNumber, 10) + 1) {
                            return o;
                        }
                    });
                    // if first page then the prev link goes to the end of the pages
                    prevPage = !_.isEmpty(prevPage) ? prevPage : this._.filter(this.WORK, function(o, k) {
                        if (k === "drnewmans") {
                            return o;
                        }
                    });
                    // if last page then start loop all over again
                    nextPage = !this._.isEmpty(nextPage) ? nextPage : this._.filter(this.WORK, function(o, k) {
                        if (k === "elevaate") {
                            return o;
                        }
                    });
                    if (!this._.isEmpty(prevPage) && !this._.isEmpty(nextPage)) {
                        // create href attribute values
                        this.$scope.prevPage = prevPage[0].internalUrl;
                        this.$scope.nextPage = nextPage[0].internalUrl;
                    }
                }
            }
        } ]);
        return WorkPageCtrl;
    }();
    WorkPageCtrl.$inject = [ "$rootScope", "$scope", "$log", "WORK", "$window", "_" ];
    angular.module("portfolioApp.wordProjectsController").controller("WorkPageCtrl", [ "$rootScope", "$scope", "$log", "WORK", "$window", "_", function($rootScope, $scope, $log, WORK, $window, _) {
        return new WorkPageCtrl($rootScope, $scope, $log, WORK, $window, _);
    } ]);
})();

//# sourceMappingURL=work_page_controller.js.map
"use strict";

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var ProjectsPageCtrl = function() {
        /**
     * @description Personal projects page
     * @param $rootScope {object}
     * @param $scope {object}
     * @param $log {object}
     * @param PROJECTS {object}
     * @param $window {object}
     * @param _ {function}
     * @constructor
     */
        /* @ngInject */
        ProjectsPageCtrl.$inject = [ "$rootScope", "$scope", "$log", "PROJECTS", "$window", "_" ];
        function ProjectsPageCtrl($rootScope, $scope, $log, PROJECTS, $window, _) {
            _classCallCheck(this, ProjectsPageCtrl);
            this.$rootScope = $rootScope;
            this.$scope = $scope;
            this.$log = $log;
            this.$window = $window;
            this._ = _;
            /** Using defineProperty prevents injected constants being exposed to the template
       * **/
            Object.defineProperty(this, "PROJECTS", {
                value: PROJECTS.pages
            });
            Object.defineProperty(this, "SIDE_PROJECTS", {
                value: PROJECTS.postContent
            });
            /** local scope
       * **/
            this.$scope.title = null;
            this.$scope.summary = null;
            this.$scope.details = null;
            this.$scope.code = null;
            this.$scope.workImage = null;
            this.$scope.prevPage = null;
            this.$scope.nextPage = null;
        }
        _createClass(ProjectsPageCtrl, [ {
            key: "findData",
            value: function findData() {
                var currentPage = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.lastIndexOf("/") + 1, this.$rootScope.currentPage.length);
                var wordData = this._.filter(this.PROJECTS, function(o) {
                    if (o.internalUrl.substring(o.internalUrl.lastIndexOf("/") + 1, o.internalUrl.length) === currentPage) {
                        return o;
                    }
                });
                if (!this._.isEmpty(wordData)) {
                    this.bindData(wordData);
                    this.navigation();
                } else {
                    this.$window.location.href = "/404";
                }
            }
        }, {
            key: "bindData",
            value: function bindData(data) {
                this.$scope.title = data[0].title;
                this.$scope.summary = data[0].summary;
                this.$scope.details = data[0].details;
                this.$scope.code = data[0].code;
                this.$scope.workImage = data[0].workImage;
                this.$scope.workImageWebP = data[0].workImage + ".webp";
                this.$scope.externalUrl = data[0].externalUrl;
                this.$rootScope.pageTitle = data[0].title + " - " + data[0].summary;
            }
        }, {
            key: "navigation",
            value: function navigation() {
                /**
         * TODO: refactor pagination
         * **/
                var currentPage = void 0;
                var page = void 0;
                var pageNumber = void 0;
                var prevPage = void 0;
                var nextPage = void 0;
                currentPage = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.lastIndexOf("/") + 1, this.$rootScope.currentPage.length);
                // return the object for the current page
                page = this._.filter(this.PROJECTS, function(o) {
                    if (o.internalUrl.substring(o.internalUrl.lastIndexOf("/") + 1, o.length) === currentPage) {
                        return o;
                    }
                });
                if (!this._.isEmpty(page)) {
                    pageNumber = page[0].id;
                    // return the object for the previous page
                    prevPage = this._.filter(this.PROJECTS, function(o) {
                        if (parseInt(o.id, 10) === parseInt(pageNumber, 10) - 1) {
                            return o;
                        }
                    });
                    // return the object for the next page
                    nextPage = this._.filter(this.PROJECTS, function(o) {
                        if (parseInt(o.id, 10) === parseInt(pageNumber, 10) + 1) {
                            return o;
                        }
                    });
                    // if first page then the prev link goes to the end of the pages
                    prevPage = !this._.isEmpty(prevPage) ? prevPage : this._.filter(this.PROJECTS, function(o, k) {
                        if (k === "mq-keyframes") {
                            return o;
                        }
                    });
                    // if last page then start loop all over again
                    nextPage = !this._.isEmpty(nextPage) ? nextPage : this._.filter(this.PROJECTS, function(o, k) {
                        if (k === "lightning") {
                            return o;
                        }
                    });
                    if (!this._.isEmpty(prevPage) && !this._.isEmpty(nextPage)) {
                        // create href attribute values
                        this.$scope.prevPage = prevPage[0].internalUrl;
                        this.$scope.nextPage = nextPage[0].internalUrl;
                    }
                }
            }
        } ]);
        return ProjectsPageCtrl;
    }();
    ProjectsPageCtrl.$inject = [ "$rootScope", "$scope", "$log", "PROJECTS", "$window", "_" ];
    angular.module("portfolioApp.sideProjectsController").controller("ProjectsPageCtrl", [ "$rootScope", "$scope", "$log", "PROJECTS", "$window", "_", function($rootScope, $scope, $log, PROJECTS, $window, _) {
        return new ProjectsPageCtrl($rootScope, $scope, $log, PROJECTS, $window, _);
    } ]);
})();

//# sourceMappingURL=projects_page_controller.js.map
/**
 * Created by awalpole on 09/04/2014.
 */
"use strict";

(function() {
    var app = angular.module("portfolioApp.blogAdminController");
    /**
   * @description Admin login form
   * @param $rootScope
   * @param $scope
   * @param $log
   * @param $location
   * @param MongoUserFactory
   * @param $angularCacheFactory
   * @constructor
   */
    var LoginCtrl = function LoginCtrl($rootScope, $scope, $log, $location, MongoUserFactory, $angularCacheFactory) {
        this.$rootScope = $rootScope;
        this.$scope = $scope;
        this.$log = $log;
        this.$location = $location;
        this.$angularCacheFactory = $angularCacheFactory;
        /** Using defineProperty prevents injected service being exposed to the template
     * **/
        Object.defineProperty(this, "MongoUserFactory", {
            value: MongoUserFactory
        });
        /** Local scope
     * **/
        this.$scope.login = {};
        this.$scope.zipRegex = /(?!.*)/;
        this.$scope.submitted = false;
    };
    LoginCtrl.$inject = [ "$rootScope", "$scope", "$log", "$location", "MongoUserFactory", "$angularCacheFactory" ];
    /** Admin log-in page
   * **/
    LoginCtrl.prototype.submitLoginForm = function(isValid) {
        this.$scope.submitted = true;
        this.$scope.messages = {};
        this.$scope.messages.error = null;
        // check to make sure the form is completely valid
        if (isValid) {
            var user = {
                name: this.$scope.login.name,
                password: this.$scope.login.password
            };
            var returnedPromise = this.MongoUserFactory.findUsers(user);
            returnedPromise.then(function(value) {
                if (value.data !== "null") {
                    this.$angularCacheFactory.get("authCache").put("logginIn", value.data);
                    this.$rootScope.userid = value.data;
                    this.$location.path("/admin/");
                } else {
                    this.$scope.messages.error = "There seems to be an issue with your username or password";
                }
            }.bind(this), function(value) {
                this.$log.warn("Failure: LoginCtrl.submitLoginForm");
                this.$log.warn(value);
            }.bind(this));
        }
    };
    app.controller("LoginCtrl", LoginCtrl);
})();

//# sourceMappingURL=login_controller.js.map
/**
 * Created by awalpole on 09/04/2014.
 */
"use strict";

(function() {
    /** Add, edit or delete user details
   * */
    var app = angular.module("portfolioApp.blogAdminController");
    /**
   * @description Admin access to users
   * @param $scope
   * @param $log
   * @param MongoUserFactory
   * @constructor
   */
    var UserDetailsCtrl = function UserDetailsCtrl($scope, $log, MongoUserFactory) {
        this.$scope = $scope;
        this.$log = $log;
        /** Using defineProperty prevents injected service being exposed to the template
     * **/
        Object.defineProperty(this, "MongoUserFactory", {
            value: MongoUserFactory
        });
        this.$scope.editUser = {};
        this.$scope.addUser = {};
        this.$scope.editUserSubmit = {};
        this.$scope.editUserSubmit.submitted = false;
        this.$scope.addUserSubmit = {};
        this.$scope.addUserSubmit.submitted = false;
        this.$scope.allUsers = null;
        this.$scope.editThisUser = false;
        this.$scope.formSuccess = null;
        this.listAllUsers();
    };
    UserDetailsCtrl.$inject = [ "$scope", "$log", "MongoUserFactory" ];
    UserDetailsCtrl.prototype.editUserFun = function(data) {
        // populate form field models with the data of the user about to be edited
        this.$scope.editThisUser = true;
        this.$scope.editUser.name = data.name;
        this.$scope.editUser._id = data._id;
    };
    UserDetailsCtrl.prototype.deleteUser = function(data) {
        var returnedPromise = this.MongoUserFactory.deleteUsers(data._id);
        returnedPromise.then(function() {
            this.$scope.formSuccess = "You have successfully deleted the user";
            // repopulate list of users
            this.listAllUsers();
        }.bind(this), function(value) {
            this.$log.warn("Failure: UserDetailsCtrl.deleteUser");
            this.$log.warn(value);
        }.bind(this));
    };
    // update a un individuals user details
    UserDetailsCtrl.prototype.submitEditUserForm = function(isValid) {
        this.$scope.editUserSubmit.submitted = true;
        // reset formSuccess scope
        this.$scope.formSuccess = null;
        if (isValid) {
            var userData = {
                id: this.$scope.editUser._id,
                name: this.$scope.editUser.name,
                password: this.$scope.editUser.password
            };
            var returnedPromise = this.MongoUserFactory.editUsers(userData);
            returnedPromise.then(function() {
                this.$scope.formSuccess = "You have successfully updated the user details";
                // reset scope and hide the form
                this.$scope.editThisUser = null;
                // repopulate list of users after successfully changing user details
                this.listAllUsers();
            }.bind(this), function(value) {
                this.$log.warn("Failure: UserDetailsCtrl.submitEditUserForm");
                this.$log.warn(value);
            }.bind(this));
        }
    };
    // list all users
    UserDetailsCtrl.prototype.listAllUsers = function() {
        var returnedPromise = this.MongoUserFactory.getUsers();
        returnedPromise.then(function(value) {
            this.$scope.allUsers = value.data;
        }.bind(this), function(value) {
            this.$log.warn("Failure: UserDetailsCtrl.listAllUsers()");
            this.$log.warn(value);
        }.bind(this));
    };
    // add a user
    UserDetailsCtrl.prototype.submitAddUserForm = function(isValid) {
        // reset formSuccess scope
        this.$scope.formSuccess = null;
        if (isValid) {
            var returnedData = this.MongoUserFactory.addUser(this.$scope.addUser);
            returnedData.then(function() {
                this.$scope.formSuccess = "You have successfully added a new user";
                // reset scope to remove values from input fields
                this.$scope.addUser.name = null;
                this.$scope.addUser.password = null;
                this.$scope.addUserSubmit.submitted = false;
                // repopulate list of users
                this.listAllUsers();
            }.bind(this), function(value) {
                this.$log.warn("Failure: UserDetailsCtrl.submitAddUserForm");
                this.$log.warn(value);
            }.bind(this));
        }
    };
    app.controller("UserDetailsCtrl", UserDetailsCtrl);
})();

//# sourceMappingURL=user_details_controller.js.map
/**
 * Created by awalpole on 09/04/2014.
 * TODO: move blog processing methods to backend server along with parallel methods in AddBlogCtrl
 * TODO: refactor regex for _addSEOFriendlyURL
 */
"use strict";

(function() {
    /** Add, edit or delete blog posts
   * */
    var app = angular.module("portfolioApp.blogAdminController");
    /**
   * @description Used in admin area to add blog articles
   * @param $scope
   * @param $log
   * @param MongoBlogFactory
   * @param moment
   * @constructor
   */
    var AddBlogCtrl = function AddBlogCtrl($scope, $log, MongoBlogFactory, moment, hfs) {
        this.$scope = $scope;
        this.$log = $log;
        /** Using defineProperty prevents injected service being exposed to the template
     * **/
        Object.defineProperties(this, {
            MongoBlogFactory: {
                value: MongoBlogFactory
            },
            createContentSnippet: {
                value: null,
                writable: true
            },
            addSEOFriendlyURL: {
                value: null,
                writable: true
            },
            hfs: {
                value: hfs
            },
            addUniqueID: {
                value: null,
                writable: true
            },
            addDate: {
                value: null,
                writable: true
            }
        });
        /** List scope here
     * **/
        this.$scope.addBlogFormData = {};
        this.$scope.blogContent = null;
        this.$scope.addBlogFormSubmit = false;
        this.$scope.formSuccess = null;
        /** Private functions
     ***/
        /** Take the content and create a snippet to be used in the blog index
     * **/
        /**
     * @description Creates content snippet from the beginning of the blog article
     * @this AddBlogCtrl
     * @type {function(this:AddBlogCtrl)|*|Function}
     * @private
     */
        this.createContentSnippet = function createContentSnippet() {
            // to create a codeSnippet cut down the content to around 130 characters without cutting a whole word in half
            var snippet;
            var maxLength;
            var trimmedString;
            snippet = this.$scope.addBlogFormData.content.toString();
            // maximum number of characters to extract
            maxLength = 130;
            //trim the string to the maximum length
            // make sure not include opening paragraph tag if any
            // hence, cut string at the third characters
            trimmedString = snippet.substr(3, maxLength);
            //re-trim if we are in the middle of a word
            trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + " ...";
            //strip any HTML tags
            this.$scope.addBlogFormData.contentSnippet = trimmedString.replace(/(<([^>]+)>)/gi, "");
        };
        /** Create a SEO-friendly URL from the blog post title
     * **/
        /**
     * @type {function(this:AddBlogCtrl)|*|Function}
     * @private
     */
        this.addSEOFriendlyURL = function addSEOFriendlyURL() {
            var stopwords = [ "a", "about", "above", "across", "after", "afterwards", "again", "against", "all", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "amoungst", "amount", "an", "and", "another", "any", "anyhow", "anyone", "anything", "anyway", "anywhere", "are", "around", "as", "at", "back", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "behind", "being", "below", "beside", "besides", "between", "beyond", "bill", "both", "bottom", "but", "by", "call", "can", "cannot", "cant", "co", "con", "could", "couldnt", "cry", "de", "describe", "detail", "do", "done", "down", "due", "during", "each", "eg", "eight", "either", "eleven", "else", "elsewhere", "empty", "enough", "etc", "even", "ever", "every", "everyone", "everything", "everywhere", "except", "few", "fifteen", "fify", "fill", "find", "fire", "first", "five", "for", "former", "formerly", "forty", "found", "four", "from", "front", "full", "further", "get", "give", "go", "had", "has", "hasnt", "have", "he", "hence", "her", "here", "hereafter", "hereby", "herein", "hereupon", "hers", "herself", "him", "himself", "his", "how", "however", "hundred", "ie", "if", "in", "inc", "indeed", "interest", "into", "is", "it", "its", "itself", "keep", "last", "latter", "latterly", "least", "less", "ltd", "made", "many", "may", "me", "meanwhile", "might", "mill", "mine", "more", "moreover", "most", "mostly", "move", "much", "must", "my", "myself", "name", "namely", "neither", "never", "nevertheless", "next", "nine", "no", "nobody", "none", "noone", "nor", "not", "nothing", "now", "nowhere", "of", "off", "often", "on", "once", "one", "only", "onto", "or", "other", "others", "otherwise", "our", "ours", "ourselves", "out", "over", "own", "part", "per", "perhaps", "please", "put", "rather", "re", "same", "see", "seem", "seemed", "seeming", "seems", "serious", "several", "she", "should", "show", "side", "since", "sincere", "six", "sixty", "so", "some", "somehow", "someone", "something", "sometime", "sometimes", "somewhere", "still", "such", "system", "take", "ten", "than", "that", "the", "their", "them", "themselves", "then", "thence", "there", "thereafter", "thereby", "therefore", "therein", "thereupon", "these", "they", "thickv", "thin", "third", "this", "those", "though", "three", "through", "throughout", "thru", "thus", "to", "together", "too", "top", "toward", "towards", "twelve", "twenty", "two", "un", "under", "until", "up", "upon", "us", "very", "via", "was", "we", "well", "were", "what", "whatever", "when", "whence", "whenever", "where", "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whither", "who", "whoever", "whole", "whom", "whose", "why", "will", "with", "within", "without", "would", "yet", "you", "your", "yours", "yourself", "yourselves", "the" ];
            var regexNonAlphaNum = /[^\-a-z0-9]/g;
            var regexWhiteSpace = /\s/gi;
            var twoDashes = /[\-]{2}/g;
            var x;
            var l;
            var newTitle;
            // initially remove hyphens and the white space to their right
            newTitle = this.$scope.addBlogFormData.title.replace(/\–\s/g, "").toLowerCase();
            x = 0;
            l = stopwords.length;
            // loop through the SEO watch words and replace with white space hyphen
            do {
                var regEx = new RegExp("\\b\\s" + stopwords[x] + "\\s\\b", "g");
                var regExTwo = new RegExp("^" + stopwords[x] + "\\s\\b");
                var regExThree = new RegExp("\\s\\b" + stopwords[x] + "$");
                newTitle = newTitle.replace(regEx, "-").trim().replace(regExTwo, "").replace(regExThree, "");
                x += 1;
            } while (x < l);
            // remove white space and replace with hyphens
            newTitle = newTitle.replace(regexWhiteSpace, "-");
            // remove all non-alpha numeric characters
            newTitle = newTitle.replace(regexNonAlphaNum, "");
            newTitle = newTitle.replace(twoDashes, "-");
            this.$scope.addBlogFormData.url = newTitle;
        };
        /** unique id is used at the end of the blog page URL
     * **/
        /**
     *
     * @type {function(this:AddBlogCtrl)|*|Function}
     * @private
     */
        this.addUniqueID = function addUniqueID() {
            this.$scope.addBlogFormData.uniqueId = this.$scope.addBlogFormData.publishedDate.substring(0, 6);
        };
        /** date in milliseconds. angularjs date filter displays user friendly date format on blog page
     * **/
        /**
     * @type {function(this:AddBlogCtrl)|*|Function}
     * @private
     */
        this.addDate = function addDate() {
            // using moment.js library so as to synch with backend code
            this.$scope.addBlogFormData.publishedDate = parseInt(moment().valueOf(), 10).toString();
        };
    };
    AddBlogCtrl.$inject = [ "$scope", "$log", "MongoBlogFactory", "moment", "helperFunctionsService" ];
    AddBlogCtrl.prototype.addBlog = function(isValid) {
        this.$scope.addBlogFormSubmit = true;
        // check to make sure the form is completely valid
        if (isValid) {
            this.addDate();
            this.addUniqueID();
            this.$scope.addBlogFormData.url = this.hfs.addSEOFriendlyURL(this.$scope.addBlogFormData.title);
            this.$scope.addBlogFormData.contentSnippet = this.hfs.createContentSnippet(this.$scope.addBlogFormData.content, 130);
            var returnedData = this.MongoBlogFactory.addBlogPost(this.$scope.addBlogFormData);
            returnedData.then(function() {
                this.$scope.formSuccess = "You have successfully added a blog article";
                // reset scope to remove values from input fields
                // loop over form field models
                Object.keys(this.$scope.addBlogFormData).forEach(function(key) {
                    this.$scope.addBlogFormData[key] = null;
                }, this);
                this.$scope.addBlogFormSubmit = false;
            }.bind(this), function(value) {
                this.$log.warn("Failure: AddBlogCtrl.addBlog");
                this.$log.warn(value);
            }.bind(this));
        }
    };
    app.controller("AddBlogCtrl", AddBlogCtrl);
})();

//# sourceMappingURL=add_blog_controller.js.map
/**
 * Created by awalpole on 09/04/2014.
 * TODO: move blog processing methods to backend server along with parallel methods in AddBlogCtrl
 * TODO: refactor regex for _addSEOFriendlyURL
 */
"use strict";

(function() {
    /** Add, edit or delete blog posts
   * */
    var app = angular.module("portfolioApp.blogAdminController");
    /** Declare private method variable names
   * **/
    /**
   * @description for editing or deleting blog articles
   * @param $scope
   * @param $log
   * @param MongoBlogFactory
   * @param _
   * @param hfs
   * @constructor
   */
    var EditBlogCtrl = function EditBlogCtrl($scope, $log, MongoBlogFactory, _, hfs) {
        this.$scope = $scope;
        this.$log = $log;
        this._ = _;
        /** By using EMCAScript 5 defineProperty we can prevent the service or config file
     * from appearing in the template as a model
     * **/
        Object.defineProperties(this, {
            MongoBlogFactory: {
                value: MongoBlogFactory
            },
            hfs: {
                value: hfs
            },
            createContentSnippet: {
                value: null,
                writable: true
            },
            addSEOFriendlyURL: {
                value: null,
                writable: true
            }
        });
        /** List scope objects
     * **/
        this.$scope.editBlogFormData = {};
        this.$scope.dataToDelete = {};
        this.$scope.blogContent = null;
        this.$scope.editBlogFormSubmit = false;
        this.$scope.formSuccess = null;
        this.$scope.displayForm = null;
        this.$scope.displayPopup = false;
        /** Private functions
     * **/
        /** Take the content and create a snippet to be used in the blog index
     * **/
        this.createContentSnippet = function createContentSnippet() {
            // to create a codeSnippet cut down the content to around 130 characters without cutting a whole word in half
            var snippet;
            var maxLength;
            var trimmedString;
            snippet = this.$scope.editBlogFormData.content.toString();
            // maximum number of characters to extract
            maxLength = 130;
            //trim the string to the maximum length
            // make sure not include opening paragraph tag if any
            // hence, cut string at the third characters
            trimmedString = snippet.substr(3, maxLength);
            //re-trim if we are in the middle of a word
            trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))) + " ...";
            //strip and HTML tags
            this.$scope.editBlogFormData.contentSnippet = trimmedString.replace(/(<([^>]+)>)/gi, "").trim();
        };
        /** Create a SEO-friendly URL from the blog post title
     * **/
        this.addSEOFriendlyURL = function addSEOFriendlyURL() {
            var stopwords = [ "a", "about", "above", "across", "after", "afterwards", "again", "against", "all", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "amoungst", "amount", "an", "and", "another", "any", "anyhow", "anyone", "anything", "anyway", "anywhere", "are", "around", "as", "at", "back", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "behind", "being", "below", "beside", "besides", "between", "beyond", "bill", "both", "bottom", "but", "by", "call", "can", "cannot", "cant", "co", "con", "could", "couldnt", "cry", "de", "describe", "detail", "do", "done", "down", "due", "during", "each", "eg", "eight", "either", "eleven", "else", "elsewhere", "empty", "enough", "etc", "even", "ever", "every", "everyone", "everything", "everywhere", "except", "few", "fifteen", "fify", "fill", "find", "fire", "first", "five", "for", "former", "formerly", "forty", "found", "four", "from", "front", "full", "further", "get", "give", "go", "had", "has", "hasnt", "have", "he", "hence", "her", "here", "hereafter", "hereby", "herein", "hereupon", "hers", "herself", "him", "himself", "his", "how", "however", "hundred", "ie", "if", "in", "inc", "indeed", "interest", "into", "is", "it", "its", "itself", "keep", "last", "latter", "latterly", "least", "less", "ltd", "made", "many", "may", "me", "meanwhile", "might", "mill", "mine", "more", "moreover", "most", "mostly", "move", "much", "must", "my", "myself", "name", "namely", "neither", "never", "nevertheless", "next", "nine", "no", "nobody", "none", "noone", "nor", "not", "nothing", "now", "nowhere", "of", "off", "often", "on", "once", "one", "only", "onto", "or", "other", "others", "otherwise", "our", "ours", "ourselves", "out", "over", "own", "part", "per", "perhaps", "please", "put", "rather", "re", "same", "see", "seem", "seemed", "seeming", "seems", "serious", "several", "she", "should", "show", "side", "since", "sincere", "six", "sixty", "so", "some", "somehow", "someone", "something", "sometime", "sometimes", "somewhere", "still", "such", "system", "take", "ten", "than", "that", "the", "their", "them", "themselves", "then", "thence", "there", "thereafter", "thereby", "therefore", "therein", "thereupon", "these", "they", "thickv", "thin", "third", "this", "those", "though", "three", "through", "throughout", "thru", "thus", "to", "together", "too", "top", "toward", "towards", "twelve", "twenty", "two", "un", "under", "until", "up", "upon", "us", "very", "via", "was", "we", "well", "were", "what", "whatever", "when", "whence", "whenever", "where", "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whither", "who", "whoever", "whole", "whom", "whose", "why", "will", "with", "within", "without", "would", "yet", "you", "your", "yours", "yourself", "yourselves", "the" ];
            var regexNonAlphaNum = /[^\-a-z0-9]/g;
            var regexWhiteSpace = /\s/gi;
            var twoDashes = /[\-]{2}/g;
            var x;
            var l;
            var newTitle;
            // initially remove hypthens and the white space to their right
            newTitle = this.$scope.editBlogFormData.title.replace(/\–\s/g, "").toLowerCase();
            x = 0;
            l = stopwords.length;
            // loop through the SEO watch words and replace with white space hythen
            do {
                var regEx = new RegExp("\\b\\s" + stopwords[x] + "\\s\\b", "g");
                var regExTwo = new RegExp("^" + stopwords[x] + "\\s\\b");
                newTitle = newTitle.replace(regEx, "-").trim().replace(regExTwo, "");
                x += 1;
            } while (x < l);
            // remove white space and replace with hythen
            newTitle = newTitle.replace(regexWhiteSpace, "-");
            // remove all non-alpha numeric characters
            newTitle = newTitle.replace(regexNonAlphaNum, "");
            newTitle = newTitle.replace(twoDashes, "-");
            this.$scope.editBlogFormData.url = newTitle;
        };
    };
    EditBlogCtrl.$inject = [ "$scope", "$log", "MongoBlogFactory", "_", "helperFunctionsService" ];
    /** When the user clicks to edit a blog post the input fields are populated by the relevant data
   * **/
    EditBlogCtrl.prototype.editArticle = function(data) {
        // display form
        this.$scope.displayForm = true;
        // populate the ng-model with the data for the post to be edited
        this.$scope.editBlogFormData.title = data.title;
        this.$scope.editBlogFormData.author = data.author;
        this.$scope.editBlogFormData.category = data.category;
        this.$scope.editBlogFormData.content = data.content;
        this.$scope.editBlogFormData.aside = data.aside;
        this.$scope.editBlogFormData.displayImage = data.displayImage;
        this.$scope.editBlogFormData.uniqueId = data.uniqueId;
        this.$scope.editBlogFormData.publishedDate = data.publishedDate;
        this.$scope.editBlogFormData._id = data._id;
        this.$scope.editBlogFormData.commentsOpen = data.commentsOpen;
    };
    /** Called when the user submits the form
   * **/
    EditBlogCtrl.prototype.editBlog = function(isValid) {
        this.$scope.editBlogFormSubmit = true;
        // check to make sure the form is completely valid
        if (isValid) {
            this.$scope.editBlogFormData.url = this.hfs.addSEOFriendlyURL(this.$scope.editBlogFormData.title);
            this.$scope.editBlogFormData.contentSnippet = this.hfs.createContentSnippet(this.$scope.editBlogFormData.content, 130);
            var formData = {
                title: this.$scope.editBlogFormData.title,
                author: this.$scope.editBlogFormData.author,
                category: this.$scope.editBlogFormData.category,
                content: this.$scope.editBlogFormData.content,
                aside: this.$scope.editBlogFormData.aside,
                displayImage: this.$scope.editBlogFormData.displayImage,
                uniqueId: this.$scope.editBlogFormData.uniqueId,
                publishedDate: this.$scope.editBlogFormData.publishedDate,
                id: this.$scope.editBlogFormData._id,
                url: this.$scope.editBlogFormData.url,
                contentSnippet: this.$scope.editBlogFormData.contentSnippet,
                allowComments: this.$scope.editBlogFormData.commentsOpen
            };
            var returnedPromise = this.MongoBlogFactory.editBlogPosts(formData);
            returnedPromise.then(function() {
                // display success message
                this.$scope.formSuccess = "You have successfully updated the blog article";
                // reset scope to remove values from input fields
                // loop over form field models
                Object.keys(this.$scope.editBlogFormData).forEach(function(key) {
                    this.$scope.editBlogFormData[key] = null;
                }, this);
                // hide form with ng-if
                this.$scope.displayForm = false;
                // update page again
                this.getBlogs();
            }.bind(this), function(value) {
                this.$log.warn("Failure: EditBlogCtrl.editBlog");
                this.$log.warn(value);
            }.bind(this));
        }
    };
    /** request all blogs from the blog document
   * which is then listed using ng-repeat
   * **/
    EditBlogCtrl.prototype.getBlogs = function() {
        var returnedPromise = this.MongoBlogFactory.getBlogPosts();
        returnedPromise.then(function(value) {
            if (this._.isObject(value.data)) {
                this.$scope.blogContent = value.data;
            }
        }.bind(this), function(value) {
            this.$log.warn("Failure: EditBlogCtrl.getBlogs");
            this.$log.warn(value);
        }.bind(this));
    };
    /** When the user clicks to delete a blog article the popup appears
   * asking again for confirmation and the local scope is populated with the
   * blog data ready for submission to the remote service
   * **/
    EditBlogCtrl.prototype.deleteArticle = function(data) {
        this.$scope.displayPopup = true;
        this.$scope.dataToDelete.title = data.title;
        this.$scope.dataToDelete.author = data.author;
        this.$scope.dataToDelete.category = data.category;
        this.$scope.dataToDelete.content = data.content;
        this.$scope.dataToDelete.displayImage = data.displayImage;
        this.$scope.dataToDelete._id = data._id;
    };
    /** On the confirmation popup is a chance for the user to cancel the delete action
   * **/
    EditBlogCtrl.prototype.hidePopup = function() {
        this.$scope.displayPopup = false;
    };
    /** On successful deletion of the blog article the pop-up is hidden,
   *  local scope is reset to null and the list of blog articles is updated
   * **/
    EditBlogCtrl.prototype.removeArticle = function() {
        var returnedPromise = this.MongoBlogFactory.deleteBlogPost(this.$scope.dataToDelete._id);
        returnedPromise.then(function(value) {
            if (value) {
                this.$scope.displayPopup = false;
                this.$scope.dataToDelete.title = null;
                this.$scope.dataToDelete.author = null;
                this.$scope.dataToDelete.category = null;
                this.$scope.dataToDelete.content = null;
                this.$scope.dataToDelete.aside = null;
                this.$scope.dataToDelete.displayImage = null;
                this.$scope.dataToDelete._id = null;
                this.$scope.dataToDelete.commentsOpen = null;
                // update page again
                this.getBlogs();
            }
        }.bind(this), function(value) {
            this.$log.warn("Failure: EditBlogCtrl.removeArticle()");
            this.$log.warn(value);
        }.bind(this));
    };
    app.controller("EditBlogCtrl", EditBlogCtrl);
})();

//# sourceMappingURL=edit_blog_controller.js.map
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var SidebarCtrl = /**
   * @description Displays blog posts and categories in blog sidebar
   * @param $scope {object}
   * @param $log {object}
   * @param BlogDataService {object}
   * @param $angularCacheFactory {function}
   * @param $window {object}
   * @param $timeout {function}
   * @param _ {function}
   * @param storage {object}
   * @constructor
   */
    function SidebarCtrl($scope, $log, BlogDataService, $angularCacheFactory, $window, $timeout, _, storage) {
        _classCallCheck(this, SidebarCtrl);
        $scope.blogData = null;
        /**
     * @function _populateBlogScope
     * @description Populates blog scope if media query is matched
     * @type {function(this:SidebarCtrl)|*|Function}
     * @private
     */
        var _populateBlogScope = function _populateBlogScope() {
            /** Either receive data from BlogDataService or from the cache
       * **/
            if ($angularCacheFactory.get("blogCache").get("allBlogPosts")) {
                $scope.blogData = $angularCacheFactory.get("blogCache").get("allBlogPosts");
            } else {
                /** Take blog object from service ready to be used in the side bar lists
         **/
                BlogDataService.retrieveData().then(function(result) {
                    // retrieve blog data to be used in the ng-repeat directive in the sidebar
                    if (_.isObject(result.data.BlogPosts)) {
                        $scope.blogData = result.data.BlogPosts;
                    }
                }, function(response) {
                    $log.warn("Error SidebarCtrl");
                    $log.warn(response);
                });
            }
        };
        /** Plucks category names from object and then sorts them by popularity
     * **/
        /**
     *
     * @param blogPosts
     * @returns {Array}
     * @private
     */
        var _sortCategoriesByPopularity = function _sortCategoriesByPopularity(blogPosts) {
            var newArray = {};
            _.chain(blogPosts).pluck("category").filter(function(r) {
                return typeof r !== "undefined";
            }).groupBy(function(list) {
                return list;
            }).each(function(list, iterator) {
                newArray[iterator] = _.size(list);
            });
            return Object.keys(newArray).sort(function(a, b) {
                return -(newArray[a] - newArray[b]);
            });
        };
        /**
     * @function _handleMediaMatch
     * @description function used with matchMedia event
     * @type {function(this:SidebarCtrl)|*|Function}
     * @private
     */
        var _handleMediaMatch = function _handleMediaMatch(mql) {
            if (!mql.matches) {
                $timeout(function() {
                    _populateBlogScope();
                }, 0);
                var unbindWatcher = $scope.$watch("blogData", function(newData) {
                    if (newData !== null && !$angularCacheFactory.get("blogCache").get("blogTags")) {
                        $scope.blogTags = _sortCategoriesByPopularity(newData);
                        if (storage.localstorage) {
                            $angularCacheFactory.get("blogCache").put("blogTags", $scope.blogTags);
                        }
                        unbindWatcher();
                    } else if (newData !== null && $angularCacheFactory.get("blogCache").get("blogTags")) {
                        $scope.blogTags = $angularCacheFactory.get("blogCache").get("blogTags");
                        unbindWatcher();
                    }
                    mql.removeListener(_handleMediaMatch);
                });
            }
        };
        if ($window.matchMedia) {
            var mql = $window.matchMedia("screen and (max-width: 767px)");
            mql.addListener(_handleMediaMatch);
            _handleMediaMatch(mql);
        } else {
            _populateBlogScope();
        }
    };
    SidebarCtrl.$inject = [ "$scope", "$log", "BlogDataService", "$angularCacheFactory", "$window", "$timeout", "_", "storage" ];
    angular.module("portfolioApp.blogSidebarController").controller("SidebarCtrl", [ "$scope", "$log", "BlogDataService", "$angularCacheFactory", "$window", "$timeout", "_", "storage", function($scope, $log, BlogDataService, $angularCacheFactory, $window, $timeout, _, storage) {
        return new SidebarCtrl($scope, $log, BlogDataService, $angularCacheFactory, $window, $timeout, _, storage);
    } ]);
})();

//# sourceMappingURL=sidebar_controller.js.map
"use strict";

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var CommentCtrl = function() {
        /**
     * @description For displaying and the submission of blog comments
     * @param $scope {object}
     * @param $rootScope {object}
     * @param MongoCommentService {object}
     * @param $log {object}
     * @param $timeout {function}
     * @constructor
     */
        function CommentCtrl($scope, $rootScope, MongoCommentService, $log, $timeout) {
            _classCallCheck(this, CommentCtrl);
            this.$scope = $scope;
            this.$rootScope = $rootScope;
            this.$log = $log;
            this.$timeout = $timeout;
            /** Using defineProperty prevents injected service being exposed to the template
       * **/
            Object.defineProperty(this, "MongoCommentService", {
                value: MongoCommentService
            });
            this.$scope.commentBlogFormSubmit = false;
            this.$scope.publishComments = null;
            this.$scope.commentFormData = {};
            this.$scope.zipRegex = /(?!.*)/;
            // find blogId number form the URL string, ie /#!/blog/136324/using-autoload-in-object-orientated-wordpress-plugin
            this.$scope.commentFormData.blogId = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.indexOf("/blog/") + 6, this.$rootScope.currentPage.indexOf("/blog/") + 12);
        }
        _createClass(CommentCtrl, [ {
            key: "retreiveComment",
            value: function retreiveComment() {
                var _this = this;
                var data = {
                    blogId: this.$scope.commentFormData.blogId
                };
                var returnedData = this.MongoCommentService.getPubilshedComments(data);
                returnedData.then(function(result) {
                    if (!_.isEmpty(result.data)) {
                        _this.$scope.publishComments = result.data;
                    }
                }, function(result) {
                    _this.$log.warn("Failure: CommentCtrl.retreiveComment");
                    _this.$log.warn(result);
                });
            }
        }, {
            key: "submitComment",
            value: function submitComment(isValid) {
                var _this2 = this;
                this.$scope.commentBlogFormSubmit = true;
                if (!isValid) {
                    this.$scope.formFailure = "The form has not been submitted because of errors. Please review the form error messages and click submit again";
                    this.$timeout(function() {
                        document.querySelector(".comment-form-failure").focus();
                    }, 0);
                }
                if (isValid) {
                    var returnedData = this.MongoCommentService.addComment(this.$scope.commentFormData);
                    returnedData.then(function() {
                        _this2.$scope.formFailure = null;
                        _this2.$scope.formSuccess = "You have successfully submitted a blog comment";
                        _this2.$timeout(function() {
                            document.querySelector(".comment-form-success").focus();
                        }, 0);
                        // reset scope to remove values from input fields
                        // loop over form field models
                        Object.keys(_this2.$scope.commentFormData).forEach(function(key) {
                            this.$scope.commentFormData[key] = null;
                        }, _this2);
                        _this2.$scope.commentBlogFormSubmit = false;
                    }, function(value) {
                        _this2.$log.warn("Failure: CommentCtrl.submitComment");
                        _this2.$log.warn(value);
                    });
                }
            }
        } ]);
        return CommentCtrl;
    }();
    CommentCtrl.$inject = [ "$scope", "$rootScope", "MongoCommentService", "$log", "$timeout" ];
    angular.module("portfolioApp.blogAdminController").controller("CommentCtrl", [ "$scope", "$rootScope", "MongoCommentService", "$log", "$timeout", function($scope, $rootScope, MongoCommentService, $log, $timeout) {
        return new CommentCtrl($scope, $rootScope, MongoCommentService, $log, $timeout);
    } ]);
})();

//# sourceMappingURL=comment_controller.js.map
/**
 * Created by awalpole on 06/05/2014.
 */
"use strict";

(function() {
    var app = angular.module("portfolioApp.blogAdminController");
    /** Declare private method variable names
   * **/
    /**
   * @description Admin access to blog comments
   * @param {model} $scope
   * @param {service} MongoCommentFactory
   * @param {service} $log
   * @param {library} _
   * @constructor
   */
    var CommentAdminCtrl = function CommentAdminCtrl($scope, MongoCommentService, $log, _) {
        this.$scope = $scope;
        this.$log = $log;
        this._ = _;
        /** Using defineProperty prevents injected service being exposed to the template
     * **/
        Object.defineProperty(this, "MongoCommentService", {
            value: MongoCommentService
        });
        this.$scope.comments = null;
    };
    /** @method
   *  @public
   */
    CommentAdminCtrl.prototype.getComments = function() {
        var returnedPromise = this.MongoCommentService.getComments();
        returnedPromise.then(function(result) {
            if (this._.isObject(result.data)) {
                this.$scope.comments = result.data;
            }
        }.bind(this), function(result) {
            this.$log.warn("Failure: CommentAdminCtrl.getComments");
            this.$log.warn(result);
        }.bind(this));
    };
    CommentAdminCtrl.prototype.deleteComment = function(data) {
        var returnedPromise = this.MongoCommentService.deleteComment(data._id);
        returnedPromise.then(function(value) {
            if (value.data) {
                // update page again
                this.getComments();
            }
        }.bind(this), function(value) {
            this.$log.warn("Failure: CommentAdminCtrl.deleteComment()");
            this.$log.warn(value);
        }.bind(this));
    };
    CommentAdminCtrl.prototype.publishComment = function(data) {
        var formData = {
            id: data._id,
            published: data.published !== true || false
        };
        var returnedPromise = this.MongoCommentService.editComment(formData);
        returnedPromise.then(function(value) {
            if (value.data) {
                // update page again
                this.getComments();
            }
        }.bind(this), function(value) {
            this.$log.warn("Failure: CommentAdminCtrl.publishComment");
            this.$log.warn(value);
        }.bind(this));
    };
    CommentAdminCtrl.$inject = [ "$scope", "MongoCommentService", "$log", "_" ];
    app.controller("CommentAdminCtrl", CommentAdminCtrl);
})();

//# sourceMappingURL=comment_admin_controller.js.map
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var SitemapCtrl = /**
   * @description For displaying a HTML sitemap
   * @param $scope {object}
   * @param $log {object}
   * @param BlogDataService {object}
   * @param $angularCacheFactory {function}
   * @param _ {function}
   * @constructor
   */
    function SitemapCtrl($scope, $log, BlogDataService, $angularCacheFactory, _) {
        _classCallCheck(this, SitemapCtrl);
        /** Either receive data from BlogDataService or from the cache
     * **/
        if ($angularCacheFactory.get("blogCache").get("allBlogPosts")) {
            $scope.blogData = $angularCacheFactory.get("blogCache").get("allBlogPosts");
        }
        /** Take blog object from service ready to be used in the side bar lists
     **/
        BlogDataService.retrieveData().then(function(result) {
            // retrieve blog data to be used in the ng-repeat directive in the sidebar
            if (_.isObject(result.data.BlogPosts)) {
                $scope.blogData = result.data.BlogPosts;
            }
        }, function(response) {
            $log.warn("Error SitemapCtrl");
            $log.warn(response);
        });
        /** Plucks category names from object and then sorts them by popularity
     * **/
        var _sortCategoriesByPopularity = function _sortCategoriesByPopularity() {
            var newArray = {};
            _.chain($scope.blogData).pluck("category").filter(function(r) {
                return typeof r !== "undefined";
            }).groupBy(function(list) {
                return list;
            }).each(function(list, iterator) {
                newArray[iterator] = _.size(list);
            });
            return Object.keys(newArray).sort(function(a, b) {
                return -(newArray[a] - newArray[b]);
            });
        };
        $scope.$watch("blogData", function(newData) {
            if (newData !== null && !$angularCacheFactory.get("blogCache").get("blogTags")) {
                $scope.blogTags = _sortCategoriesByPopularity(newData);
                $angularCacheFactory.get("blogCache").put("blogTags", $scope.blogTags);
            } else if (newData !== null && $angularCacheFactory.get("blogCache").get("blogTags")) {
                $scope.blogTags = $angularCacheFactory.get("blogCache").get("blogTags");
            }
        });
    };
    SitemapCtrl.$inject = [ "$scope", "$log", "BlogDataService", "$angularCacheFactory", "_" ];
    angular.module("portfolioApp.sideProjectsController").controller("SitemapCtrl", [ "$scope", "$log", "BlogDataService", "$angularCacheFactory", "_", function($scope, $log, BlogDataService, $angularCacheFactory, _) {
        return new SitemapCtrl($scope, $log, BlogDataService, $angularCacheFactory, _);
    } ]);
})();

//# sourceMappingURL=sitemap_controller.js.map
"use strict";

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var FooterCtrl = function() {
        /**
     * constructor
     * @param $scope {object}
     * @param $log {object}
     * @param NewsBlurService {object}
     * @param hfs {object}
     */
        function FooterCtrl($scope, $log, NewsBlurService, hfs) {
            _classCallCheck(this, FooterCtrl);
            this.$scope = $scope;
            this.$log = $log;
            this.$scope.recArticle = {};
            this.$scope.recArticle.title = null;
            this.$scope.recArticle.date = null;
            this.$scope.recArticle.author = null;
            this.$scope.recArticle.content = null;
            this.$scope.recArticle.link = null;
            this.NewsBlurService = NewsBlurService;
            this.hfs = hfs;
        }
        _createClass(FooterCtrl, [ {
            key: "loadData",
            value: function loadData() {
                var _this = this;
                var returnedPromise = this.NewsBlurService.getBlogPosts();
                returnedPromise.then(function(value) {
                    if (value.data !== "null") {
                        // make JSON file into usable object
                        var returnedData = value.data;
                        for (var key in returnedData.stories) {
                            _this.$scope.recArticle.title = returnedData.stories[key]["story_title"];
                            _this.$scope.recArticle.date = returnedData.stories[key]["short_parsed_date"].split(",")[0];
                            _this.$scope.recArticle.author = returnedData.stories[key]["story_authors"];
                            _this.$scope.recArticle.content = _this.hfs.createContentSnippet(returnedData.stories[key]["story_content"], 260);
                            _this.$scope.recArticle.link = returnedData.stories[key]["story_permalink"];
                            if (key >= 0) {
                                // only need first story in json file
                                break;
                            }
                        }
                    }
                }, function(value) {
                    _this.$log.warn("Failure: FooterCtrl.getBlogPosts");
                    _this.$log.warn(value);
                });
            }
        } ]);
        return FooterCtrl;
    }();
    FooterCtrl.$inject = [ "$scope", "$log", "NewsBlurService", "helperFunctionsService" ];
    angular.module("portfolioApp.footerController").controller("FooterCtrl", [ "$scope", "$log", "NewsBlurService", "helperFunctionsService", function($scope, $log, NewsBlurFactory, helperFunctionsService) {
        return new FooterCtrl($scope, $log, NewsBlurFactory, helperFunctionsService);
    } ]);
})();

//# sourceMappingURL=footer_controller.js.map
"use strict";

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var BlogCatController = function() {
        /**
     * @description For displaying posts in their respective categories
     * @param $scope {object}
     * @param $location {object}
     * @param BlogDataService {object}
     * @param $log {object}
     * @param $angularCacheFactory {function}
     * @param $rootScope {object}
     * @param _ {function}
     * @constructor
     */
        function BlogCatController($scope, $location, BlogDataService, $log, $angularCacheFactory, $rootScope, _) {
            var _this = this;
            _classCallCheck(this, BlogCatController);
            this.$scope = $scope;
            this.$location = $location;
            this.$log = $log;
            this.$rootScope = $rootScope;
            this.$scope.cats = {};
            this.$scope.cats.displayMore = false;
            this.$scope.cats.title = null;
            this.$scope.displayPosts = 10;
            this.$scope.blogPosts = null;
            var urlPath = this.$location.path();
            var category = urlPath.substring(urlPath.lastIndexOf("/") + 1, urlPath.length);
            /** Either receive data from BlogDataService or from the cache
       * **/
            if ($angularCacheFactory.get("blogCache").get("allBlogPosts")) {
                this.$scope.blogPosts = $angularCacheFactory.get("blogCache").get("allBlogPosts");
            } else {
                // start loader spinner in loaderDirective
                this.$rootScope.loader = true;
                BlogDataService.retrieveData().then(function(result) {
                    if (_.isObject(result.data.BlogPosts)) {
                        // stop loader spinner in loaderDirective
                        _this.$rootScope.loader = false;
                        _this.$scope.blogPosts = result.data.BlogPosts;
                    }
                });
            }
            /**
       * @function _filterBlogPosts
       * @description filter blog articles based on category
       * category is found using the $location object
       * @type {function(this:BlogCatController)|*|Function}
       * @private
       */
            var _filterBlogPosts = function _filterBlogPosts(blogs) {
                return _.chain(blogs).filter(function(item) {
                    if (_.isString(item.category) && item.category.toLowerCase() === category) {
                        return item;
                    }
                }).value();
            };
            this.$scope.$watch("blogPosts", function(newData) {
                if (newData !== null) {
                    _this.$scope.totalBlogPosts = _filterBlogPosts(newData);
                    if (_this.$scope.totalBlogPosts.length >= _this.$scope.displayPosts) {
                        _this.$scope.cats.displayMore = true;
                    }
                    if (_.isEmpty(_this.$scope.totalBlogPosts)) {
                        // if empty send to 404 page
                        // if not empty redirect to 404
                        // TODO: move this server side
                        _this.$location.path("/404");
                    }
                    _this.$rootScope.pageTitle = category + " / blog unblock";
                    _this.$scope.cats.title = category;
                    _this.$scope.URLencoded = encodeURIComponent(_this.$rootScope.currentPage);
                    _this.$rootScope.faceBookDescription = "List page for " + category + " category on the blog of web developer, Andy walpole";
                }
            });
        }
        _createClass(BlogCatController, [ {
            key: "morePosts",
            value: function morePosts() {
                this.$scope.displayPosts = this.$scope.displayPosts + 10;
            }
        } ]);
        return BlogCatController;
    }();
    BlogCatController.$inject = [ "$scope", "$location", "BlogDataService", "$log", "$angularCacheFactory", "$rootScope", "_" ];
    angular.module("portfolioApp.blogPagesController").controller("BlogCatController", [ "$scope", "$location", "BlogDataService", "$log", "$angularCacheFactory", "$rootScope", "_", function($scope, $location, BlogDataService, $log, $angularCacheFactory, $rootScope, _) {
        return new BlogCatController($scope, $location, BlogDataService, $log, $angularCacheFactory, $rootScope, _);
    } ]);
})();

//# sourceMappingURL=blog_category_controller.js.map
/**
 * Created by andywalpole on 30/03/2014.
 */
"use strict";

angular.module("portfolioApp.homepageDirective").directive("sliderDirective", [ "SLIDER", "$interval", "$timeout", "$animate", "$window", "_", "requestTimeout", "storage", function(SLIDER, $interval, $timeout, $animate, $window, _, requestTimeout, storage) {
    return {
        restrict: "A",
        scope: {
            slider: "@"
        },
        replace: true,
        template: '<div id="slider" data-ng-class="slider.sliderClass" tabindex="0">' + "<section>" + '<h2 class="page-top-title" class="slider1" data-ng-bind="slider.title"></h2>' + '<p class="page-top-text" data-ng-bind="slider.text"></p>' + '<a data-ng-href="{{slider.URL}}" class="button-front-one">View Project</a>' + "</section>" + '<div class="left-arrow" rel="prev" role="button" tabindex="0" aria-label="Previous slide"></div>' + '<div class="right-arrow" rel="next" role="button"  tabindex="0" aria-label="Next slide"></div>' + "</div>",
        controller: [ "$scope", function controller($scope) {
            $scope.slideController = {
                currentSlide: 0,
                sliderForMethod: function sliderForMethod(sliderNumber) {
                    // loops through SLIDER constant and finds the right child objects
                    Object.keys(SLIDER).forEach(function(key) {
                        if (key.indexOf(sliderNumber) !== -1) {
                            $scope.slider = SLIDER[key];
                            $scope.slider.sliderClass = "slider" + sliderNumber;
                        }
                    });
                },
                sliderStartMethod: function sliderStartMethod() {
                    // starts off with first slider details and reduced quality image
                    // after initial page load the placeholder image is replaced by the full size image
                    $scope.slider = SLIDER.slider1;
                    if (!sessionStorage.getItem("homePageLoaded")) {
                        $scope.slider.sliderClass = "sliderPlaceholder";
                        if (storage.localstorage) {
                            sessionStorage.setItem("homePageLoaded", "true");
                        }
                    } else {
                        $scope.slider.sliderClass = "slider1";
                    }
                },
                sliderReplaceMethod: function sliderReplaceMethod() {
                    $scope.slider.sliderClass = "slider1";
                }
            };
        } ],
        link: function link(scope, element) {
            var sliderDirectiveLink = {
                sliderTotal: _.size(SLIDER),
                timeGap: 8e3,
                startGap: 4e3,
                animationGap: 2e3,
                timerInterval: null,
                timer: function timer() {
                    var pTag;
                    var pTagFunction;
                    var h2Tag;
                    var h2TagFunction;
                    var aTag;
                    var aTagFunction;
                    // add and remove animate classes
                    // this is not used on mobile devices because of performance issues
                    // using matchMedia below it is possible to prevent the classes from changing
                    pTag = angular.element(element[0].querySelector("p"));
                    h2Tag = angular.element(element[0].querySelector("h2"));
                    aTag = angular.element(element[0].querySelector("a"));
                    sliderDirectiveLink.timerInterval = $interval(function() {
                        if ($window.matchMedia && $window.matchMedia("(min-device-width: 768px) and (orientation: landscape)")) {
                            pTagFunction = function pTagFunction() {
                                $animate.addClass(pTag, "animate-bounceIn");
                                requestTimeout(function() {
                                    $animate.removeClass(pTag, "animate-bounceIn");
                                    scope.$digest();
                                }, sliderDirectiveLink.animationGap);
                            };
                            h2TagFunction = function h2TagFunction() {
                                $animate.addClass(h2Tag, "animate-bounceIn");
                                requestTimeout(function() {
                                    $animate.removeClass(h2Tag, "animate-bounceIn");
                                    scope.$digest();
                                }, sliderDirectiveLink.animationGap);
                            };
                            aTagFunction = function aTagFunction() {
                                $animate.addClass(aTag, "animate-bounceIn-later");
                                requestTimeout(function() {
                                    $animate.removeClass(aTag, "animate-bounceIn-later");
                                    scope.$digest();
                                }, sliderDirectiveLink.animationGap);
                            };
                            pTagFunction();
                            h2TagFunction();
                            aTagFunction();
                        }
                        // end matchMedia
                        // skip through the set interval and either reset the slider list to the beginning
                        // or carry on to the next one
                        if (scope.slideController.currentSlide < sliderDirectiveLink.sliderTotal) {
                            scope.slideController.sliderForMethod(scope.slideController.currentSlide + 1);
                            scope.slideController.currentSlide = scope.slideController.currentSlide + 1;
                        } else {
                            scope.slideController.sliderForMethod(1);
                            scope.slideController.currentSlide = 1;
                        }
                    }, this.timeGap);
                },
                navigation: function navigation() {
                    angular.element(element[0].querySelector(".right-arrow")).bind("click", function() {
                        // use the left arrow to move through the slider in a left direction
                        if (scope.slideController.currentSlide < sliderDirectiveLink.sliderTotal) {
                            scope.slideController.sliderForMethod(scope.slideController.currentSlide + 1);
                            scope.slideController.currentSlide = scope.slideController.currentSlide + 1;
                        } else {
                            scope.slideController.sliderForMethod(1);
                            scope.slideController.currentSlide = 1;
                        }
                        $interval.cancel(sliderDirectiveLink.timerInterval);
                        sliderDirectiveLink.timer();
                    });
                    angular.element(element[0].querySelector(".left-arrow")).bind("click", function() {
                        // use the the right arrow to move through the slider in a right direction
                        if (scope.slideController.currentSlide > 1) {
                            scope.slideController.sliderForMethod(scope.slideController.currentSlide - 1);
                            scope.slideController.currentSlide = scope.slideController.currentSlide - 1;
                        } else {
                            scope.slideController.sliderForMethod(sliderDirectiveLink.sliderTotal);
                            scope.slideController.currentSlide = sliderDirectiveLink.sliderTotal;
                        }
                        $interval.cancel(sliderDirectiveLink.timerInterval);
                        sliderDirectiveLink.timer();
                    });
                },
                start: function start() {
                    // when the site first loads up the load the placeholder with the reduced PNG8 image
                    $timeout(function() {
                        scope.slideController.currentSlide = 1;
                        scope.slideController.sliderStartMethod();
                        $timeout(function() {
                            var imgs;
                            // after the defined millisecond gap defined in startGap then load the right size image
                            scope.slideController.sliderReplaceMethod();
                            // force images to download in the background
                            // otherwise there is a noticeable lag in image download with every new slide
                            if ($window.Modernizr.webp) {
                                imgs = '<div style="display:none" aria-hidden="true">' + '<img src="/images/slider/blinkbox.png.webp" alt="" />' + '<img src="/images/slider/lightning.png.webp" alt="" />' + '<img src="/images/slider/uk-law-student.png.webp" alt="" />' + '<img src="/images/slider/kaplan.png.webp" alt="" />' + '<img src="/images/slider/drnewmans.png.webp" alt="" />' + '<img src="/images/slider/penny-books.png.webp" alt="" />' + '<img src="/images/slider/twt-twt.png.webp" alt="" /></div>';
                            } else {
                                imgs = '<div style="display:none" aria-hidden="true">' + '<img src="/images/slider/blinkbox.png" alt="" />' + '<img src="/images/slider/lightning.png" alt="" />' + '<img src="/images/slider/uk-law-student.png" alt="" />' + '<img src="/images/slider/kaplan.png" alt="" />' + '<img src="/images/slider/drnewmans.png" alt="" />' + '<img src="/images/slider/penny-books.png" alt="" />' + '<img src="/images/slider/twt-twt.png" alt="" /></div>';
                            }
                            element.append(imgs);
                        }, sliderDirectiveLink.startGap);
                    }, 0);
                },
                destroy: function destroy() {
                    // destroy timers when scope is destroyed
                    scope.$on("$destroy", function() {
                        if (sliderDirectiveLink.timerInterval) {
                            $interval.cancel(sliderDirectiveLink.timerInterval);
                        }
                        angular.element(element[0].querySelector(".left-arrow")).unbind("click");
                        angular.element(element[0].querySelector(".right-arrow")).unbind("click");
                    });
                },
                init: function init() {
                    sliderDirectiveLink.start();
                    sliderDirectiveLink.timer();
                    sliderDirectiveLink.navigation();
                    sliderDirectiveLink.destroy();
                }
            };
            return sliderDirectiveLink.init();
        }
    };
} ]);

angular.module("portfolioApp").filter("slice", function() {
    return function(arr, start, end) {
        return arr.slice(start, end);
    };
});

//# sourceMappingURL=slider_directive.js.map
/**
 * Created by awalpole on 13/04/2014.
 */
"use strict";

angular.module("portfolioApp.homepageDirective").directive("homepageStatsDirective", [ "STATS", "$window", "_", "moment", function(STATS, $window, _, moment) {
    return {
        restrict: "A",
        templateUrl: "../homepage/homepage_stats.html",
        scope: {
            header: "@header",
            section: "@section"
        },
        link: function link(scope) {
            var mql;
            var _handleMediaMatch;
            // work out the number of day I have been a full time web developer since April 1 2008
            // now milliseconds minus milliseconds from April 1, 2009 then calculate the days from this figure
            var start = moment("April 1, 2009").valueOf();
            var now = moment().valueOf();
            var totalDays = (now - start) / (1e3 * 60 * 60 * 24);
            // now add the days to the scope
            var calculateDate = Math.round(totalDays).toString();
            /** Only display the data that fits the screen width
       * Less than 979px = display three blocks of data
       * More that 979px = display all the data
       * If matchMedia isn't supported (IE9) then fallback to display all the data
       * **/
            _handleMediaMatch = function handleMediaMatch(mql) {
                if (!mql.matches) {
                    scope.stats = STATS;
                    scope.stats.block1.header = calculateDate;
                    mql.removeListener(_handleMediaMatch);
                } else {
                    scope.stats = _.toArray(STATS).slice(0, 3);
                    scope.stats[0].header = calculateDate;
                }
            };
            if ($window.matchMedia) {
                mql = $window.matchMedia("screen and (max-width: 979px)");
                mql.addListener(_handleMediaMatch);
                _handleMediaMatch(mql);
            } else {
                scope.stats = STATS;
                scope.stats.block1.header = calculateDate;
            }
            scope.$on("$destroy", function() {
                delete scope.stats;
                mql.removeListener(_handleMediaMatch);
            });
        }
    };
} ]);

//# sourceMappingURL=homepage_stats_directive.js.map
/**
 * Created by andywalpole on 01/04/2014.
 */
"use strict";

angular.module("portfolioApp.blogCommentsDirective").directive("commentDirective", [ function() {
    return {
        restrict: "A",
        scope: {
            comment: "="
        },
        replace: true,
        template: '<div class="user-comments">' + '<header data-ng-if="comment.url">' + "<p>" + '<a data-ng-href="{{comment.url}}" rel="external" class="underline">' + '<span data-ng-bind="comment.name" itemprop="creator"></span></a>' + "<br>" + '<span data-ng-bind="comment.publishedDate | date" itemprop="commentTime"></span>' + "</p>" + "</header> " + '<header data-ng-if="!comment.url">' + "<p>" + '<span data-ng-bind="comment.name" itemprop="creator"></span><br>' + '<span data-ng-bind="comment.publishedDate | date" itemprop="commentTime"></span>' + "</p>" + "</header>" + '<section ng-bind-html="comment.message | linky" itemprop="commentText"></section>' + "</div>"
    };
} ]);

//# sourceMappingURL=comment_directive.js.map
/**
 * Created by awalpole on 10/09/2014.
 */
"use strict";

angular.module("portfolioApp.blogPagesDirective").directive("compile", [ "$compile", function($compile) {
    // directive factory creates a link function
    return function(scope, element, attrs) {
        scope.$watch(function(scope) {
            // watch the 'compile' expression for changes
            return scope.$eval(attrs.compile);
        }, function(value) {
            // when the 'compile' expression changes
            // assign it into the current DOM
            element.html(value);
            // compile the new DOM and link it to the current
            // scope.
            // NOTE: we only compile .childNodes so that
            // we don't get into infinite loop compiling ourselves
            $compile(element.contents())(scope);
        });
    };
} ]);

//# sourceMappingURL=compile_directive.js.map
/**
 * Created by awalpole on 10/09/2014.
 */
"use strict";

angular.module("portfolioApp.blogPagesDirective").directive("code", [ function() {
    function escapeAngleBrackets(text) {
        return text.replace(/</gi, "&lt;").replace(/>/gi, "&gt;");
    }
    function trimSurroundingEmptyLines(text) {
        return text.replace(/^(\n)*/, "").replace(/(\n)*(\s)*$/, "");
    }
    function fixIndention(text) {
        return text.replace(new RegExp("^ {" + text.search(/[^\s-]/) + "}", "gm"), "");
    }
    return {
        restrict: "E",
        terminal: true,
        link: function link(scope, element) {
            var content = element.html();
            content = escapeAngleBrackets(content);
            content = trimSurroundingEmptyLines(content);
            content = fixIndention(content);
            element.html(content);
            Prism.highlightElement(element[0]);
        }
    };
} ]);

//# sourceMappingURL=prism_directive.js.map
/**
 * Created by awalpole on 12/09/2014.
 */
"use strict";

angular.module("portfolioApp.blogPagesDirective").directive("codepenDirective", [ "$timeout", "$document", function($timeout, $document) {
    return {
        restrict: "A",
        link: function link(scope) {
            var addCodePen = $timeout(function() {
                var e = $document[0].createElement("script");
                e.type = "text/javascript";
                e.id = "code-pen-script";
                e.src = "//codepen.io/assets/embed/ei.js";
                var script = $document[0].getElementsByTagName("script")[0];
                script.parentNode.insertBefore(e, script);
            }, 1e4);
            scope.$on("$destroy", function() {
                if ($document[0].getElementById("code-pen-script")) {
                    var script = $document[0].getElementById("code-pen-script");
                    script.parentNode.removeChild(script);
                }
                if (addCodePen) {
                    $timeout.cancel(addCodePen);
                }
            });
        }
    };
} ]);

//# sourceMappingURL=codepen_directive.js.map
/**
 * Created by awalpole on 04/01/15.
 */
"use strict";

angular.module("portfolioApp.blogPagesDirective").directive("twitterDirective", [ "$timeout", "$document", function($timeout, $document) {
    return {
        restrict: "A",
        link: function link(scope) {
            var addTwitterScript = $timeout(function() {
                var e = $document[0].createElement("script");
                e.type = "text/javascript";
                e.id = "twitter-script";
                e.src = "//platform.twitter.com/widgets.js";
                var script = $document[0].getElementsByTagName("script")[0];
                script.parentNode.insertBefore(e, script);
            }, 7e3);
            scope.$on("$destroy", function() {
                if ($document[0].getElementById("twitter-script")) {
                    var script = $document[0].getElementById("twitter-script");
                    script.parentNode.removeChild(script);
                }
                if (addTwitterScript) {
                    $timeout.cancel(addTwitterScript);
                }
            });
        }
    };
} ]);

//# sourceMappingURL=twitter_directive.js.map
/**
 * Created by andywalpole on 16/10/15.
 */
"use strict";

angular.module("portfolioApp.blogPagesDirective").directive("vineDirective", [ "$timeout", "$document", function($timeout, $document) {
    return {
        restrict: "A",
        link: function link(scope) {
            var addVineScript = $timeout(function() {
                var e = $document[0].createElement("script");
                e.type = "text/javascript";
                e.id = "vine-script";
                e.src = "//platform.vine.co/static/scripts/embed.js";
                var script = $document[0].getElementsByTagName("script")[0];
                script.parentNode.insertBefore(e, script);
            }, 8e3);
            scope.$on("$destroy", function() {
                if ($document[0].getElementById("vine-script")) {
                    var script = $document[0].getElementById("vine-script");
                    script.parentNode.removeChild(script);
                }
                if (addVineScript) {
                    $timeout.cancel(addVineScript);
                }
            });
        }
    };
} ]);

//# sourceMappingURL=vine_directive.js.map
/**
 * Created by andywalpole on 26/11/2015.
 */
"use strict";

angular.module("portfolioApp.blogPagesDirective").directive("scrollToTop", [ "$timeout", "$document", function($timeout, $document) {
    /**
   *
   * @param element {object}
   * @param to {number}
   * @param duration {number}
   */
    var scrollTo = function scrollTo(element, to, duration) {
        if (duration <= 0) {
            return;
        }
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 10;
        $timeout(function() {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) {
                return;
            }
            scrollTo(element, to, duration - 10);
        }, 10);
    };
    /**
   * @param event {object}
   */
    var scrollEvent = function scrollEvent(event) {
        scrollTo($document[0].body.scrollTop === 0 ? $document[0].documentElement : $document[0].body, 0, 600);
        event.preventDefault();
    };
    return {
        restrict: "A",
        link: function link(scope, element) {
            element.on("click", scrollEvent);
            scope.$on("$destroy", function() {
                element.off("click", scrollEvent);
            });
        }
    };
} ]);

//# sourceMappingURL=scroll_to_top_directive.js.map
/**
 * Created by awalpole on 04/01/15.
 */
"use strict";

angular.module("portfolioApp.blogPagesDirective").directive("loaderDirective", [ function() {
    return {
        restrict: "AE",
        replace: true,
        template: '<div class="loader"></div>'
    };
} ]);

//# sourceMappingURL=loader_directive.js.map
"use strict";

var app = angular.module("portfolioApp.angularReact");

app.directive("blogReactDirective", [ "$timeout", "$filter", "React", function($timeout, $filter, React) {
    var BlogList;
    var displayPosts = 5;
    /* This is the HTML of the individual blog section
   Inbetween the article tags are three sections:
   1. Header
   2. Main Section
   3. Footer
   */
    var BlogListContent = React.createClass({
        displayName: "BlogListContent",
        shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
            return this.props.value !== nextProps.value;
        },
        // creates link to blog article
        displayLink: function displayLink() {
            return "/blog/" + this.props.blogContent.uniqueId + "/" + this.props.blogContent.url;
        },
        render: function render() {
            return React.createElement("article", null, React.createElement(BlogListHeader, {
                content: this.props.blogContent,
                link: this.displayLink()
            }), React.createElement(BlogListSection, {
                content: this.props.blogContent
            }), React.createElement(BlogListFooter, {
                content: this.props.blogContent,
                link: this.displayLink()
            }));
        }
    });
    /* The blog section header is the image. There are three different types of images
   1. type="image/webp" -> small
   2. type="image/jpeg" -> small
   3. type="image/webp" -> large
   Plus a default for those browsers which don't support the latest HTML5 responsive image markup
   */
    var BlogListHeader = React.createClass({
        displayName: "BlogListHeader",
        getImage: function getImage(imageType) {
            var image = this.props.content.displayImage;
            var dot = image.lastIndexOf(".");
            var newImage = {
                webpSmall: function webpSmall() {
                    return "/" + image.slice(0, dot) + "-small" + image.slice(dot) + ".webp";
                },
                webpLarge: function webpLarge() {
                    return "/" + image.slice(0, dot) + image.slice(dot) + ".webp";
                },
                jpeg: function jpeg() {
                    return "/" + image.slice(0, dot) + image.slice(dot);
                }
            };
            return newImage[imageType]();
        },
        srcsetImage: function srcsetImage(imageType) {
            var newImage;
            var image = this.props.content.displayImage;
            if (!Object.is(image.indexOf("stock-photo"), -1)) {
                newImage = this.getImage(imageType);
            } else {
                newImage = "/" + image;
            }
            return newImage;
        },
        // uses picture markup for
        render: function render() {
            return React.createElement("header", null, React.createElement("a", {
                href: this.props.link
            }, React.createElement("picture", null, React.createElement("source", {
                type: "image/webp",
                media: "(max-width: 480px)",
                srcSet: this.srcsetImage("webpSmall")
            }), React.createElement("source", {
                type: "image/jpeg",
                media: "(max-width: 480px)",
                srcSet: this.srcsetImage("jpeg")
            }), React.createElement("source", {
                type: "image/webp",
                media: "(min-width: 481px)",
                srcSet: this.srcsetImage("webpLarge")
            }), React.createElement("img", {
                src: this.props.content.displayImage,
                alt: ""
            }))));
        }
    });
    /* The section contains the blog article title, publication date and snippet */
    var BlogListSection = React.createClass({
        displayName: "BlogListSection",
        render: function render() {
            return React.createElement("section", null, React.createElement("h3", {
                className: "blog-title"
            }, this.props.content.title), React.createElement("p", {
                className: "date"
            }, $filter("date")(this.props.content.publishedDate)), React.createElement("p", null, this.props.content.contentSnippet));
        }
    });
    /* The footer contains the read more link */
    var BlogListFooter = React.createClass({
        displayName: "BlogListFooter",
        render: function render() {
            return React.createElement("footer", null, React.createElement("p", {
                className: "read-more"
            }, React.createElement("a", {
                href: this.props.link,
                className: "underline"
            }, "Read more...")));
        }
    });
    /* Adds the more posts link at the bottom of hte exposed articles */
    var BlogListMore = React.createClass({
        displayName: "BlogListMore",
        render: function render() {
            return React.createElement("div", {
                id: "more-posts",
                className: "clearfix",
                onClick: this.props.onClick
            }, React.createElement("div", null, React.createElement("h6", null, "More posts")), React.createElement("div", null, React.createElement("span", {
                className: "down-arrow"
            })));
        }
    });
    return {
        restrict: "E",
        replace: true,
        link: function link(scope, iElement) {
            BlogList = React.createClass({
                displayName: "BlogList",
                getInitialState: function getInitialState() {
                    return {
                        showMore: true
                    };
                },
                componentDidMount: function componentDidMount() {
                    if (Object.keys(scope.totalBlogPosts).length <= 10) {
                        this.setState({
                            showMore: false
                        });
                    }
                },
                onChildClick: function onChildClick() {
                    displayPosts = displayPosts + 5;
                    var totalPosts = $filter("orderBy")(scope.totalBlogPosts, "-publishedDate");
                    var posts = $filter("limitTo")(totalPosts, displayPosts);
                    if (posts >= totalPosts) {
                        this.setState({
                            showMore: false
                        });
                    }
                    renderBloglist(posts);
                },
                render: function render() {
                    return React.createElement("div", null, Object.keys(this.props.content).map(function(value, index) {
                        return React.createElement(BlogListContent, {
                            key: index,
                            blogContent: this.props.content[value]
                        });
                    }, this), this.state.showMore ? React.createElement(BlogListMore, {
                        onClick: this.onChildClick
                    }) : null);
                }
            });
            /**
       * Renders DOM
       * Wrapped in $timeout function as a way of triggering the $apply() method
       * @param posts
       */
            var renderBloglist = function renderBloglist(posts) {
                $timeout(function() {
                    React.render(React.createElement(BlogList, {
                        content: posts
                    }), iElement["0"]);
                });
            };
            // use $watch to make sure that blog posts are sent from the service
            // before the HTML is rendered
            scope.$watch("totalBlogPosts", function(newValue, oldValue) {
                if (!Object.is(newValue, oldValue) || Array.isArray(oldValue) && oldValue.length > 0) {
                    // uses $filter put them in date descending order
                    var posts = $filter("orderBy")(scope.totalBlogPosts, "-publishedDate");
                    // initial # posts displayed is five
                    posts = $filter("limitTo")(posts, displayPosts);
                    renderBloglist(posts);
                }
            }.bind(this));
        }
    };
} ]);

//# sourceMappingURL=blog_react_directive.js.map
"use strict";

var app = angular.module("portfolioApp.angularReact");

app.directive("blogSidebarReactDirective", [ "$timeout", "$filter", "React", function($timeout, $filter, React) {
    var menuItems = 10;
    /**
   * Loop through the 10 most recent blog posts
   */
    var SidebarRecentPostsForEach = React.createClass({
        displayName: "SidebarRecentPostsForEach",
        render: function render() {
            return React.createElement("ul", {
                itemScope: true,
                itemType: "http://schema.org/SiteNavigationElement"
            }, Object.keys(this.props.cats).map(function(value, index) {
                return React.createElement(SidebarRecentPostsMarkup, {
                    key: index,
                    content: this.props.cats[value]
                });
            }, this));
        }
    });
    /**
   * Component for markup required in the SidebarRecentPostsForEach map
   */
    var SidebarRecentPostsMarkup = React.createClass({
        displayName: "SidebarRecentPostsMarkup",
        displayLink: function displayLink() {
            return "/blog/" + this.props.content.uniqueId + "/" + this.props.content.url;
        },
        render: function render() {
            return React.createElement("a", {
                href: this.displayLink()
            }, React.createElement("li", null, this.props.content.title));
        }
    });
    /**
   * Loop through the 10 most popular categories
   */
    var SidebarPopularCategoriesForEach = React.createClass({
        displayName: "SidebarPopularCategoriesForEach",
        render: function render() {
            return React.createElement("ul", null, Object.keys(this.props.tags).map(function(value, index) {
                return React.createElement(SidebarPopularCategoriesMarkUp, {
                    key: index,
                    content: this.props.tags[value]
                });
            }, this));
        }
    });
    /**
   * Component for markup required in the SidebarPopularCategoriesForEach map
   */
    var SidebarPopularCategoriesMarkUp = React.createClass({
        displayName: "SidebarPopularCategoriesMarkUp",
        displayLink: function displayLink() {
            return "/category/" + this.props.content.toLowerCase();
        },
        render: function render() {
            return React.createElement("a", {
                href: this.displayLink()
            }, React.createElement("li", null, this.props.content));
        }
    });
    return {
        restrict: "E",
        replace: true,
        link: function link(scope, iElement) {
            var Sidebar = React.createClass({
                displayName: "Sidebar",
                render: function render() {
                    return React.createElement("div", null, React.createElement("h4", {
                        className: "content-title"
                    }, "Recent posts"), React.createElement(SidebarRecentPostsForEach, {
                        cats: this.props.cats
                    }), React.createElement("h4", {
                        className: "content-title"
                    }, "Popular categories"), React.createElement(SidebarPopularCategoriesForEach, {
                        tags: this.props.tags
                    }));
                }
            });
            scope.$watch("blogData", function(newValue, oldValue) {
                if (!Object.is(newValue, oldValue) || Array.isArray(oldValue) && oldValue.length > 0) {
                    var tags = $filter("limitTo")(scope.blogTags, menuItems);
                    var cats = $filter("orderBy")(scope.blogData, "-publishedDate");
                    cats = $filter("limitTo")(cats, menuItems);
                    $timeout(function() {
                        React.render(React.createElement(Sidebar, {
                            cats: cats,
                            tags: tags
                        }), iElement["0"]);
                    });
                }
            }.bind(this));
        }
    };
} ]);

//# sourceMappingURL=blog_sidebar_react_directive.js.map
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var app = angular.module("portfolioApp.angularReact");

app.directive("projectsReactDirective", [ "$timeout", "$filter", "React", function($timeout, $filter, React) {
    return {
        restrict: "E",
        replace: true,
        scope: {
            data: "=data"
        },
        link: function link(scope, iElement) {
            var Projects = React.createClass({
                displayName: "Projects",
                render: function render() {
                    return React.createElement("div", {
                        id: "main-content",
                        className: this.props.data.className
                    }, Object.keys(this.props.data).map(function(value, index) {
                        if (Object.is(_typeof(this.props.data[value]), "object")) {
                            return React.createElement(Content, {
                                key: index,
                                content: this.props.data[value]
                            });
                        }
                    }, this));
                }
            });
            var Content = React.createClass({
                displayName: "Content",
                render: function render() {
                    return React.createElement("a", {
                        href: this.props.content.href,
                        className: this.props.content.class
                    }, React.createElement("header", null, React.createElement("h3", {
                        className: "project-header"
                    }, this.props.content.name)));
                }
            });
            $timeout(function() {
                React.render(React.createElement(Projects, {
                    data: scope.data
                }), iElement["0"]);
            });
        }
    };
} ]);
//# sourceMappingURL=scripts.js.map