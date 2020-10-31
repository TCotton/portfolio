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

angular.module("underscore", []).factory("_", [ "$window", function(a) {
    return a._;
} ]);

//# sourceMappingURL=underscore_factory.js.map
/**
 * Created by awalpole on 06/10/2014.
 */
"use strict";

angular.module("momentLibrary", []).factory("moment", [ "$window", function(a) {
    return a.moment;
} ]);

//# sourceMappingURL=moment_factory.js.map
/**
 * Created by andywalpole on 26/10/15.
 */
"use strict";

angular.module("react", []).factory("React", [ "$window", function(a) {
    return a.React;
} ]);

//# sourceMappingURL=react_factory.js.map
/**
 * Created by andywalpole on 06/04/2015.
 */
"use strict";

angular.module("requestTimeout", []).factory("requestTimeout", [ "$window", function(a) {
    // handle multiple browsers for requestAnimationFrame()
    var b = function() {
        // if all else fails, use setTimeout
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function(a) {
            return window.setTimeout(a, 1e3 / 60);
        };
    }();
    /**
   * Behaves the same as setTimeout except uses requestAnimationFrame() where possible for better performance
   * @param {function} fn The callback function
   * @param {int} delay The delay in milliseconds
   */
    a.requestTimeout = function(c, d) {
        var e;
        var f;
        if (!a.requestAnimationFrame && !a.webkitRequestAnimationFrame && !a.oRequestAnimationFrame && !a.msRequestAnimationFrame) {
            return a.setTimeout(c, d);
        }
        e = new Date().getTime();
        f = {};
        function g() {
            var a = new Date().getTime();
            var h = a - e;
            h >= d ? c.call() : f.value = b(g);
        }
        f.value = b(g);
        return f;
    };
    return a.requestTimeout;
} ]);

//# sourceMappingURL=requestTimeout_factory.js.map
/**
 * Created by andywalpole on 06/04/2015.
 */
"use strict";

angular.module("clearRequestTimeout", []).factory("clearRequestTimeout", [ "$window", function(a) {
    /**
   * Behaves the same as clearTimeout except uses cancelRequestAnimationFrame() where possible for better performance
   * @param {int|object} fn The callback function
   */
    a.clearRequestTimeout = function(b) {
        a.cancelAnimationFrame ? a.cancelAnimationFrame(b.value) : a.webkitCancelAnimationFrame ? a.webkitCancelAnimationFrame(b.value) : a.mozCancelRequestAnimationFrame ? a.mozCancelRequestAnimationFrame(b.value) : a.msCancelRequestAnimationFrame ? a.msCancelRequestAnimationFrame(b.value) : clearTimeout(b);
    };
    return a.clearRequestTimeout;
} ]);

//# sourceMappingURL=clearRequestTimeout_factory.js.map
/**
 * Created by andywalpole on 06/04/2015.
 */
"use strict";

angular.module("requestInterval", []).factory("requestInterval", [ "$window", function(a) {
    // handle multiple browsers for requestAnimationFrame()
    // requestAnimationFrame() shim by Paul Irish
    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    var b = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1e3 / 60);
        };
    }();
    /**
   * Behaves the same as setInterval except uses requestAnimationFrame() where possible for better performance
   * @param {function} fn The callback function
   * @param {int} delay The delay in milliseconds
   */
    a.requestInterval = function(c, d) {
        if (!a.requestAnimationFrame && !a.webkitRequestAnimationFrame && !(a.mozRequestAnimationFrame && a.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
        !a.oRequestAnimationFrame && !a.msRequestAnimationFrame) {
            return a.setInterval(c, d);
        }
        var e = new Date().getTime();
        var f = {};
        function g() {
            var a = new Date().getTime();
            var h = a - e;
            if (h >= d) {
                c.call();
                e = new Date().getTime();
            }
            f.value = b(g);
        }
        f.value = b(g);
        return f;
    };
    return a.requestInterval;
} ]);

//# sourceMappingURL=requestInterval_factory.js.map
/**
 * Created by andywalpole on 09/04/2015.
 */
"use strict";

angular.module("clearRequestInterval", []).factory("clearRequestInterval", [ "$window", function(a) {
    /**
   * Behaves the same as clearInterval except uses cancelRequestAnimationFrame() where possible for better performance
   * @param {int|object} fn The callback function
   */
    a.clearRequestInterval = function(b) {
        a.cancelAnimationFrame ? a.cancelAnimationFrame(b.value) : a.webkitCancelAnimationFrame ? a.webkitCancelAnimationFrame(b.value) : a.mozCancelRequestAnimationFrame ? a.mozCancelRequestAnimationFrame(b.value) : a.msCancelRequestAnimationFrame ? a.msCancelRequestAnimationFrame(b.value) : clearInterval(b);
    };
    return a.clearRequestInterval;
} ]);

//# sourceMappingURL=clearRequestInterval_factory.js.map
/**
 * Created by awalpole on 26/02/15.
 */
"use strict";

angular.module("helperFunctions", []).factory("helperFunctionsService", [ function() {
    return {
        createContentSnippet: function a(b, c) {
            // to create a codeSnippet cut down the content to around 130 characters without cutting a whole word in half
            var d;
            var e;
            var f;
            f = b.toString().replace(/(<([^>]+)>)/gi, "");
            // maximum number of characters to extract
            d = c;
            //trim the string to the maximum length
            // make sure not include opening paragraph tag if any
            // hence, cut string at the third characters
            if (d === 260) {
                e = f.substr(0, d);
            }
            if (d === 130) {
                e = f.substr(0, d);
            }
            //re-trim if we are in the middle of a word
            e = e.substr(0, Math.min(e.length, e.lastIndexOf(" "))) + " ...";
            //strip and HTML tags
            return e.trim();
        },
        addSEOFriendlyURL: function a(b) {
            var c = [ "a", "about", "above", "across", "after", "afterwards", "again", "against", "all", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "amoungst", "amount", "an", "and", "another", "any", "anyhow", "anyone", "anything", "anyway", "anywhere", "are", "around", "as", "at", "back", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "behind", "being", "below", "beside", "besides", "between", "beyond", "bill", "both", "bottom", "but", "by", "call", "can", "cannot", "cant", "co", "con", "could", "couldnt", "cry", "de", "describe", "detail", "do", "done", "down", "due", "during", "each", "eg", "eight", "either", "eleven", "else", "elsewhere", "empty", "enough", "etc", "even", "ever", "every", "everyone", "everything", "everywhere", "except", "few", "fifteen", "fify", "fill", "find", "fire", "first", "five", "for", "former", "formerly", "forty", "found", "four", "from", "front", "full", "further", "get", "give", "go", "had", "has", "hasnt", "have", "he", "hence", "her", "here", "hereafter", "hereby", "herein", "hereupon", "hers", "herself", "him", "himself", "his", "how", "however", "hundred", "ie", "if", "in", "inc", "indeed", "interest", "into", "is", "it", "its", "itself", "keep", "last", "latter", "latterly", "least", "less", "ltd", "made", "many", "may", "me", "meanwhile", "might", "mill", "mine", "more", "moreover", "most", "mostly", "move", "much", "must", "my", "myself", "name", "namely", "neither", "never", "nevertheless", "next", "nine", "no", "nobody", "none", "noone", "nor", "not", "nothing", "now", "nowhere", "of", "off", "often", "on", "once", "one", "only", "onto", "or", "other", "others", "otherwise", "our", "ours", "ourselves", "out", "over", "own", "part", "per", "perhaps", "please", "put", "rather", "re", "same", "see", "seem", "seemed", "seeming", "seems", "serious", "several", "she", "should", "show", "side", "since", "sincere", "six", "sixty", "so", "some", "somehow", "someone", "something", "sometime", "sometimes", "somewhere", "still", "such", "system", "take", "ten", "than", "that", "the", "their", "them", "themselves", "then", "thence", "there", "thereafter", "thereby", "therefore", "therein", "thereupon", "these", "they", "thickv", "thin", "third", "this", "those", "though", "three", "through", "throughout", "thru", "thus", "to", "together", "too", "top", "toward", "towards", "twelve", "twenty", "two", "un", "under", "until", "up", "upon", "us", "very", "via", "was", "we", "well", "were", "what", "whatever", "when", "whence", "whenever", "where", "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whither", "who", "whoever", "whole", "whom", "whose", "why", "will", "with", "within", "without", "would", "yet", "you", "your", "yours", "yourself", "yourselves", "the" ];
            var d = /[^\-a-z0-9]/g;
            var e = /\s/gi;
            var f = /[\-]{2}/g;
            var g;
            var h;
            var i;
            // initially remove hyphens and the white space to their right
            i = b.replace(/–\s/g, "").toLowerCase();
            g = 0;
            h = c.length;
            // loop through the SEO watch words and replace with white space hyphen
            do {
                var j = new RegExp("\\b\\s" + c[g] + "\\s\\b", "g");
                var k = new RegExp("^" + c[g] + "\\s\\b");
                var l = new RegExp("\\s\\b" + c[g] + "$");
                i = i.replace(j, "-").trim().replace(k, "").replace(l, "");
                g += 1;
            } while (g < h);
            // remove white space and replace with hyphens
            i = i.replace(e, "-");
            // remove all non-alpha numeric characters
            i = i.replace(d, "");
            i = i.replace(f, "-");
            return i;
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(a) {
    return typeof a;
} : function(a) {
    return a && typeof Symbol === "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
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
    function a(a, b) {
        return (typeof a === "undefined" ? "undefined" : _typeof(a)) === b;
    }
    var b = [];
    /**
   *
   * ModernizrProto is the constructor for Modernizr
   *
   * @class
   * @access public
   */
    var c = {
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
        on: function a(b, c) {
            // I don't really think people should do this, but we can
            // safe guard it a bit.
            // -- NOTE:: this gets WAY overridden in src/addTest for actual async tests.
            // This is in case people listen to synchronous tests. I would leave it out,
            // but the code to *disallow* sync tests in the real version of this
            // function is actually larger than this.
            var d = this;
            setTimeout(function() {
                c(d[b]);
            }, 0);
        },
        addTest: function a(c, d, e) {
            b.push({
                name: c,
                fn: d,
                options: e
            });
        },
        addAsyncTest: function a(c) {
            b.push({
                name: null,
                fn: c
            });
        }
    };
    // Fake some of Object.create so we can force non test results to be non "own" properties.
    var d = function a() {};
    d.prototype = c;
    // Leak modernizr globally when you `require` it rather than force it here.
    // Overwrite name so constructor name is nicer :D
    d = new d();
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
    d.addTest("localstorage", function() {
        var a = "modernizr";
        try {
            localStorage.setItem(a, a);
            localStorage.removeItem(a);
            return true;
        } catch (a) {
            return false;
        }
    });
    var e = [];
    /**
   * Run through all tests and detect their support in the current UA.
   *
   * @access private
   */
    function f() {
        var c;
        var f;
        var g;
        var h;
        var i;
        var j;
        var k;
        for (var l in b) {
            c = [];
            f = b[l];
            // run the test, throw the return value into the Modernizr,
            // then based on that boolean, define an appropriate className
            // and push it into an array of classes we'll join later.
            //
            // If there is no name, it's an 'async' test that is run,
            // but not directly added to the object. That should
            // be done with a post-run addTest call.
            if (f.name) {
                c.push(f.name.toLowerCase());
                if (f.options && f.options.aliases && f.options.aliases.length) {
                    // Add all the aliases into the names list
                    for (g = 0; g < f.options.aliases.length; g++) {
                        c.push(f.options.aliases[g].toLowerCase());
                    }
                }
            }
            // Run the test, or use the raw value if it's not a function
            h = a(f.fn, "function") ? f.fn() : f.fn;
            // Set each of the names on the Modernizr object
            for (i = 0; i < c.length; i++) {
                j = c[i];
                // Support dot properties as sub tests. We don't do checking to make sure
                // that the implied parent tests have been added. You must call them in
                // order (either in the test, or make the parent test a dependency).
                //
                // Cap it to TWO to make the logic simple and because who needs that kind of subtesting
                // hashtag famous last words
                k = j.split(".");
                if (k.length === 1) {
                    d[k[0]] = h;
                } else {
                    // cast to a Boolean, if not one already
                    /* jshint -W053 */
                    if (d[k[0]] && !(d[k[0]] instanceof Boolean)) {
                        d[k[0]] = new Boolean(d[k[0]]);
                    }
                    d[k[0]][k[1]] = h;
                }
                e.push((h ? "" : "no-") + k.join("-"));
            }
        }
    }
    // Run each test
    f();
    delete c.addTest;
    delete c.addAsyncTest;
    // Run the things that are supposed to run after the tests
    for (var g = 0; g < d._q.length; g++) {
        d._q[g]();
    }
    // Leak Modernizr namespace
    return d;
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

angular.module("portfolioApp", [ "portfolioApp.blogAdminService", "portfolioApp.blogAdminController", "portfolioApp.blogCommentsDirective", "portfolioApp.blogCommentsService", "portfolioApp.blogPagesController", "portfolioApp.blogPagesDirective", "portfolioApp.blogPagesService", "portfolioApp.blogPagesFilter", "portfolioApp.blogSidebarController", "portfolioApp.contractController", "portfolioApp.contractService", "portfolioApp.footerController", "portfolioApp.footerService", "portfolioApp.homepageDirective", "portfolioApp.miscDirective", "portfolioApp.sideProjectsController", "portfolioApp.angularReact", "portfolioApp.sitemapController", "portfolioApp.wordProjectsController", "AppConstants", "ngResource", "ngSanitize", "ngRoute", "ngAria", "HashBangURLs", "portfolioAppConfig", "jmdobry.angular-cache", "underscore", "momentLibrary", "helperFunctions", "requestTimeout", "react", "detectLocalStorage" ]).config([ "$routeProvider", "$httpProvider", function(a, b) {
    // Needed for CORS
    // http://better-inter.net/enabling-cors-in-angular-js/
    b.defaults.useXDomain = true;
    delete b.defaults.headers.common["X-Requested-With"];
    b.useApplyAsync(true);
    a.when("/", {
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
    b.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
    /*jshint maxcomplexity:8 */
    /**
   * The workhorse; converts an object to x-www-form-urlencoded serialization.
   * @param {Object} obj
   * @return {String}
   */
    var c = function a(b) {
        var c = "";
        var d;
        var e;
        var f;
        var g;
        var h;
        var i;
        var j;
        for (d in b) {
            e = b[d];
            if (e instanceof Array) {
                for (j = 0; j < e.length; ++j) {
                    h = e[j];
                    f = d + "[" + j + "]";
                    i = {};
                    i[f] = h;
                    c += a(i) + "&";
                }
            } else if (e instanceof Object) {
                for (g in e) {
                    h = e[g];
                    f = d + "[" + g + "]";
                    i = {};
                    i[f] = h;
                    c += a(i) + "&";
                }
            } else if (e !== undefined && e !== null) {
                c += encodeURIComponent(d) + "=" + encodeURIComponent(e) + "&";
            }
        }
        return c.length ? c.substr(0, c.length - 1) : c;
    };
    // Override $http service's default transformRequest
    b.defaults.transformRequest = [ function(a) {
        return angular.isObject(a) && String(a) !== "[object File]" ? c(a) : a;
    } ];
} ]);

//# sourceMappingURL=app.js.map
"use strict";

angular.module("portfolioAppConfig", []).run([ "$rootScope", "$window", "$location", "$angularCacheFactory", "$route", function(a, b, c, d, e) {
    var f = function a() {
        /* jshint ignore:start */
        b.ga("send", "pageview", {
            page: c.path()
        });
    };
    a.$on("$viewContentLoaded", f);
    a.pageChange = false;
    a.currentPage = c.absUrl();
    a.$on("$locationChangeStart", function() {
        if (c.absUrl() === "https://andywalpole.me/?utm_source=Responsive+Design+Weekly&utm_campaign=f8173896a5-Responsive_Design_Weekly_152&utm_medium=email&utm_term=0_df65b6d7c8-f8173896a5-58971581#!/blog/142790/using-webp-image-format") {
            b.location = "https://andywalpole.me/blog/142790/using-webp-image-format";
        }
        a.currentPage = c.absUrl();
        if (!d.get("authCache")) {
            d("authCache", {
                maxAge: 864e5,
                deleteOnExpire: "aggressive",
                storageMode: "sessionStorage"
            });
        }
        if (!d.get("blogCache")) {
            d("blogCache", {
                maxAge: 864e5,
                deleteOnExpire: "aggressive",
                storageMode: "sessionStorage"
            });
        }
    });
    a.$on("$routeChangeSuccess", function() {
        if (e.current.$$route) {
            a.pageTitle = e.current.$$route.title;
            a.status = null;
        } else {
            a.pageTitle = "Not Found";
            a.status = "404";
        }
        /** Value used in the tablet / mobile dropdown menu code
     * Dropdown menu disappears on page change if it is down
     * **/
        if (!a.pageChange) {
            a.pageChange = true;
        }
        a.canonical = "https://andywalpole.me" + c.path();
        a.hideFooter = a.currentPage.indexOf("blog") !== -1 || a.currentPage.indexOf("category") !== -1;
        // basic login detection service
        var f = new RegExp("/admin/");
        var g = a.currentPage.toString();
        if (f.test(g)) {
            if (!d.get("authCache").get("logginIn") || d.get("authCache").get("logginIn") !== a.userid) {
                c.path("/login");
            }
        }
        // every time the page reloads make sure it loads from the top
        // clicking links on the middle of the page results in opening a new page in the same spot
        // temp solution
        // this also forces the browser to load from the top when navigating back
        b.scrollTo(0, 0);
    });
} ]);

/**
 * Url modules
 */
//get the module from creating an angular module
angular.module("HashBangURLs", []).config([ "$locationProvider", function(a) {
    a.html5Mode({
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
    return function(a) {
        var b = a;
        b = b.replace(/(^\s*)|(\s*$)/gi, "");
        b = b.replace(/[ ]{2,}/gi, " ");
        b = b.replace(/\n /, "\n");
        return b.split(" ").length;
    };
});

//# sourceMappingURL=word_count_filter.js.map
"use strict";

var _createClass = function() {
    function a(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || false;
            d.configurable = true;
            if ("value" in d) d.writable = true;
            Object.defineProperty(a, d.key, d);
        }
    }
    return function(b, c, d) {
        if (c) a(b.prototype, c);
        if (d) a(b, d);
        return b;
    };
}();

function _classCallCheck(a, b) {
    if (!(a instanceof b)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var a = function() {
        /**
     * @param $http {function}
     * @param $q {function}
     * @param MongoBlogFactory {object}
     * @param $angularCacheFactory {function}
     * @param CONFIG {object}
     * @param storage {object}
     */
        function a(b, c, d, e, f, g) {
            _classCallCheck(this, a);
            this.$http = b;
            this.$q = c;
            this.MongoBlogFactory = d;
            this.$angularCacheFactory = e;
            this.CONFIG = f;
            this.storage = g;
        }
        _createClass(a, [ {
            key: "retrieveData",
            value: function a() {
                var b = this;
                var c = void 0;
                var d = this.$q.defer();
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
                    }).then(function(a) {
                        c = a;
                        if (b.storage.localstorage) {
                            b.$angularCacheFactory.get("blogCache").put("totalArticles", a.data.totalArticles);
                            b.$angularCacheFactory.get("blogCache").put("allBlogPosts", a.data.BlogPosts);
                        }
                    }, function() {}).then(function() {
                        d.resolve(c);
                    });
                }
                return d.promise;
            }
        } ]);
        return a;
    }();
    angular.module("portfolioApp.blogPagesService").service("BlogDataService", [ "$http", "$q", "MongoBlogFactory", "$angularCacheFactory", "CONFIG", "storage", function(b, c, d, e, f, g) {
        return new a(b, c, d, e, f, g);
    } ]);
})();

//# sourceMappingURL=blog_data_service.js.map
"use strict";

var _createClass = function() {
    function a(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || false;
            d.configurable = true;
            if ("value" in d) d.writable = true;
            Object.defineProperty(a, d.key, d);
        }
    }
    return function(b, c, d) {
        if (c) a(b.prototype, c);
        if (d) a(b, d);
        return b;
    };
}();

function _classCallCheck(a, b) {
    if (!(a instanceof b)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var a = function() {
        /**
     * constructor
     * @param $http {object}
     * @param $q {object}
     */
        function a(b, c) {
            _classCallCheck(this, a);
            this.$http = b;
            this.$q = c;
        }
        /**
     * @param formData {object}
     * @returns {*|deferred.promise|{then, always}}
     */
        _createClass(a, [ {
            key: "submitForm",
            value: function a(b) {
                var c = this.$q.defer();
                var d = this.$http({
                    url: "/api/sendmail",
                    method: "POST",
                    data: b,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                });
                c.resolve(d);
                return c.promise;
            }
        } ]);
        return a;
    }();
    angular.module("portfolioApp.contractService").service("PostFormService", [ "$http", "$q", function(b, c) {
        return new a(b, c);
    } ]);
})();

//# sourceMappingURL=post_form_service.js.map
/**
 * Created by awalpole on 06/10/2014.
 */
"use strict";

angular.module("portfolioApp.blogAdminService").factory("MongoUserFactory", [ "$http", "$q", function(a, b) {
    return {
        addUser: function c(d) {
            // return promise
            var e = b.defer();
            var f = a({
                url: "/api/users/add",
                method: "POST",
                data: d,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            e.resolve(f);
            return e.promise;
        },
        getUsers: function c() {
            // return promise
            var d = b.defer();
            var e = a({
                url: "/api/users/get",
                method: "GET"
            });
            d.resolve(e);
            return d.promise;
        },
        deleteUsers: function c(d) {
            // return promise
            var e = b.defer();
            var f = a({
                url: "/api/users/delete/" + d,
                method: "DELETE"
            });
            e.resolve(f);
            return e.promise;
        },
        editUsers: function c(d) {
            // return promise
            var e = b.defer();
            var f = a({
                url: "/api/user/update",
                method: "PUT",
                data: d,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            e.resolve(f);
            return e.promise;
        },
        findUsers: function c(d) {
            // return promise
            var e = b.defer();
            var f = a({
                url: "/api/user/find",
                method: "POST",
                data: d,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            e.resolve(f);
            return e.promise;
        }
    };
} ]);

//# sourceMappingURL=mongo_user_factory.js.map
/**
 * Created by awalpole on 06/10/2014.
 */
"use strict";

angular.module("portfolioApp.blogAdminService").factory("MongoBlogFactory", [ "$http", "$q", function(a, b) {
    return {
        addBlogPost: function c(d) {
            // return promise
            var e = b.defer();
            var f = a({
                url: "/api/blog/add",
                method: "POST",
                data: d,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            e.resolve(f);
            return e.promise;
        },
        getBlogPosts: function c() {
            // return promise
            var d = b.defer();
            var e = a({
                url: "/api/blog/get",
                method: "GET",
                cache: true
            });
            d.resolve(e);
            return d.promise;
        },
        editBlogPosts: function c(d) {
            // return promise
            var e = b.defer();
            var f = a({
                url: "/api/blog/update",
                method: "PUT",
                data: d,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });
            e.resolve(f);
            return e.promise;
        },
        deleteBlogPost: function c(d) {
            // return promise
            var e = b.defer();
            var f = a({
                url: "/api/blog/delete/" + d,
                method: "DELETE"
            });
            e.resolve(f);
            return e.promise;
        },
        getOldBlogPosts: function c(d) {
            // return promise
            var e = b.defer();
            var f = a({
                url: "/api/oldBlog/get",
                method: "GET",
                params: d,
                cache: true
            });
            e.resolve(f);
            return e.promise;
        }
    };
} ]);

//# sourceMappingURL=mongo_blog_factory.js.map
"use strict";

var _createClass = function() {
    function a(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || false;
            d.configurable = true;
            if ("value" in d) d.writable = true;
            Object.defineProperty(a, d.key, d);
        }
    }
    return function(b, c, d) {
        if (c) a(b.prototype, c);
        if (d) a(b, d);
        return b;
    };
}();

function _classCallCheck(a, b) {
    if (!(a instanceof b)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var a = function() {
        /**
     * @param $http {object}
     * @param $q {object}
     */
        function a(b, c) {
            _classCallCheck(this, a);
            this.$http = b;
            this.deferred = c.defer();
        }
        /**
     * @param formData {object}
     * @returns {*}
     */
        _createClass(a, [ {
            key: "addComment",
            value: function a(b) {
                var c = this.$http({
                    url: "/api/comment/add",
                    method: "POST",
                    data: b,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                });
                this.deferred.resolve(c);
                return this.deferred.promise;
            }
        }, {
            key: "getComments",
            value: function a() {
                var b = this.$http({
                    url: "/api/comment/get",
                    method: "GET"
                });
                this.deferred.resolve(b);
                return this.deferred.promise;
            }
        }, {
            key: "editComment",
            value: function a(b) {
                var c = this.$http({
                    url: "/api/comment/update",
                    method: "PUT",
                    data: b,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                });
                this.deferred.resolve(c);
                return this.deferred.promise;
            }
        }, {
            key: "getPubilshedComments",
            value: function a(b) {
                var c = this.$http({
                    url: "/api/comment/getPublished",
                    method: "GET",
                    params: b
                });
                this.deferred.resolve(c);
                return this.deferred.promise;
            }
        }, {
            key: "deleteComment",
            value: function a(b) {
                var c = this.$http({
                    url: "/api/comment/delete/" + b,
                    method: "DELETE"
                });
                this.deferred.resolve(c);
                return this.deferred.promise;
            }
        } ]);
        return a;
    }();
    angular.module("portfolioApp.blogCommentsService").service("MongoCommentService", [ "$http", "$q", function(b, c) {
        return new a(b, c);
    } ]);
})();

//# sourceMappingURL=mongo_comment_service.js.map
"use strict";

var _createClass = function() {
    function a(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || false;
            d.configurable = true;
            if ("value" in d) d.writable = true;
            Object.defineProperty(a, d.key, d);
        }
    }
    return function(b, c, d) {
        if (c) a(b.prototype, c);
        if (d) a(b, d);
        return b;
    };
}();

function _classCallCheck(a, b) {
    if (!(a instanceof b)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var a = function() {
        /**
     * constructor
     * @param $http {object}
     * @param $q {object}
     */
        function a(b, c) {
            _classCallCheck(this, a);
            this.$http = b;
            this.$q = c;
        }
        _createClass(a, [ {
            key: "getBlogPosts",
            value: function a() {
                // return promise
                var b = this.$q.defer();
                var c = this.$http({
                    url: "/api/newsblur/get",
                    method: "GET"
                });
                b.resolve(c);
                return b.promise;
            }
        } ]);
        return a;
    }();
    angular.module("portfolioApp.footerService").service("NewsBlurService", [ "$http", "$q", function(b, c) {
        return new a(b, c);
    } ]);
})();

//# sourceMappingURL=newsblur_service.js.map
"use strict";

var _createClass = function() {
    function a(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || false;
            d.configurable = true;
            if ("value" in d) d.writable = true;
            Object.defineProperty(a, d.key, d);
        }
    }
    return function(b, c, d) {
        if (c) a(b.prototype, c);
        if (d) a(b, d);
        return b;
    };
}();

function _classCallCheck(a, b) {
    if (!(a instanceof b)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var a = function() {
        /**
     * @description Contact me form submission
     * @param $scope {object}
     * @param PostFormService {object}
     * @param $sanitize {function}
     * @param _ {function}
     * @param $timeout {function}
     * @constructor
     */
        function a(b, c, d, e, f) {
            _classCallCheck(this, a);
            this.$scope = b;
            this.$sanitize = d;
            this._ = e;
            this.$timeout = f;
            /** Using defineProperty prevents injected service being exposed to the template
       * **/
            Object.defineProperty(this, "PostFormService", {
                value: c
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
        _createClass(a, [ {
            key: "submitContactForm",
            value: function a(b) {
                var c = this;
                var d = void 0;
                var e = void 0;
                this.$scope.submitted = true;
                // check to make sure the form is completely valid
                if (b) {
                    // sanitise and remove naughty spam stuff from email
                    // TODO: move to server
                    d = this._.object(this._.map(this.$scope.contact, function(a, b) {
                        a = c.$sanitize(a).trim();
                        return [ b, a ];
                    }));
                    e = this.PostFormService.submitForm(d);
                    e.then(function(a) {
                        if (a.data.success) {
                            c.$scope.contact.successMessage = a.data.message;
                            c.$scope.contact.successMessageDisable = a.data.success;
                            c.$scope.submitted = false;
                            c.$scope.contact.name = null;
                            c.$scope.contact.email = null;
                            c.$scope.contact.message = null;
                        }
                    }, function() {
                        c.$log("Error: FormCtrl.submitContactForm");
                    });
                } else {
                    this.$scope.formFailure = "The form has not been submitted because of errors. Please review the form error messages and click submit again";
                    this.$timeout(function() {
                        document.querySelector(".comment-form-failure").focus();
                    }, 0);
                }
            }
        } ]);
        return a;
    }();
    a.$inject = [ "$scope", "PostFormService", "$sanitize", "_", "$timeout" ];
    angular.module("portfolioApp.contractController").controller("FormCtrl", [ "$scope", "PostFormService", "$sanitize", "_", "$timeout", function(b, c, d, e, f) {
        return new a(b, c, d, e, f);
    } ]);
})();

//# sourceMappingURL=form_controller.js.map
"use strict";

function _classCallCheck(a, b) {
    if (!(a instanceof b)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var a = /**
   * @description Blog home page
   * @param $scope {object}
   * @param BlogDataService {object}
   * @param $angularCacheFactory {function}
   * @param $rootScope {function}
   * @param _ {object}
   * @constructor
   */
    function a(b, c, d, e, f) {
        var g = this;
        _classCallCheck(this, a);
        this.$scope = b;
        this.$rootScope = f;
        this.$scope.displayPosts = 5;
        /** Either receive data from BlogDataService or from the cache
     * **/
        if (d.get("blogCache").get("allBlogPosts")) {
            this.$scope.totalBlogPosts = d.get("blogCache").get("allBlogPosts");
        } else {
            // start loader spinner in loaderDirective
            this.$rootScope.loader = true;
            c.retrieveData().then(function(a) {
                console.dir(a);
                if (e.isObject(a.data.BlogPosts)) {
                    // stop loader spinner in loaderDirective
                    g.$rootScope.loader = false;
                    g.$scope.totalBlogPosts = a.data.BlogPosts;
                }
            });
        }
    };
    a.$inject = [ "$scope", "BlogDataService", "$angularCacheFactory", "_", "$rootScope" ];
    angular.module("portfolioApp.blogPagesController").controller("BlogCtrl", [ "$scope", "BlogDataService", "$angularCacheFactory", "_", "$rootScope", function(b, c, d, e, f) {
        return new a(b, c, d, e, f);
    } ]);
})();

//# sourceMappingURL=blog_controller.js.map
"use strict";

function _classCallCheck(a, b) {
    if (!(a instanceof b)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var a = /**
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
    function a(b, c, d, e, f, g, h, i, j, k, l) {
        var m = this;
        _classCallCheck(this, a);
        Object.assign(this, {
            $rootScope: b,
            $scope: c,
            $location: d,
            $log: f,
            $timeout: g,
            $sce: h,
            $route: j,
            $filter: k
        });
        this.$scope.oldBlogPosts = null;
        this.$scope.title = null;
        this.$scope.content = null;
        this.$scope.aside = null;
        this.$scope.article = null;
        /** Load blog data from either the service or cache and then populate the page with the values
     * **/
        if (i.get("blogCache").get("allBlogPosts")) {
            this.$scope.oldBlogPosts = i.get("blogCache").get("allBlogPosts");
        } else {
            // start loader spinner in loaderDirective
            this.$rootScope.loader = true;
            e.retrieveData().then(function(a) {
                if (l.isObject(a.data.BlogPosts)) {
                    // start loader spinner in loaderDirective
                    m.$rootScope.loader = false;
                    m.$scope.oldBlogPosts = a.data.BlogPosts;
                }
            }, function(a) {
                m.$log.warn("Error BlogArticleCtrl");
                m.$log.warn(a);
            });
        }
        // find blogId number form the URL string, ie /#!/blog/136324/using-autoload-in-object-orientated-wordpress-plugin
        var n = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.indexOf("/blog/") + 6, this.$rootScope.currentPage.indexOf("/blog/") + 12);
        /**
     * @type {function(this:BlogArticleCtrl)|*|Function}
     * @private
     */
        var o = function a() {
            var b = l.filter(m.$scope.oldBlogPosts, function(a) {
                // filter articles array to find the correct article for the page
                if (a.publishedDate.substring(0, 6) === n) {
                    return a.publishedDate;
                }
            });
            if (!l.isEmpty(b) && m.$rootScope.currentPage.indexOf(b[0].url) !== -1) {
                m.$scope.title = b[0].title;
                m.$scope.author = b[0].author;
                m.$rootScope.pageTitle = b[0].title + " / blog unblock";
                m.$scope.content = b[0].content;
                m.$scope.aside = m.$sce.trustAsHtml(b[0].aside);
                m.$scope.displayImage = b[0].displayImage;
                if (b[0].displayImage.indexOf("stock-photo") !== -1) {
                    var c = b[0].displayImage.lastIndexOf(".");
                    m.$scope.displaySrcsetImage = b[0].displayImage.slice(0, c) + "-small" + b[0].displayImage.slice(c);
                } else {
                    m.$scope.displaySrcsetImage = b[0].displayImage;
                }
                m.$scope.publishedDate = b[0].publishedDate;
                m.$scope.commentsOpen = b[0].commentsOpen;
                m.$scope.category = b[0].category || "General";
                m.$scope.URLencoded = encodeURIComponent(m.$rootScope.currentPage);
                m.$rootScope.faceBookTitle = b[0].title;
                m.$rootScope.faceBookDescription = b[0].contentSnippet;
                m.$timeout(function() {
                    m.$scope.wordCount = m.$filter("wordcount")(document.querySelector("section > div").innerText || document.querySelector("section > div").textContent);
                }, 0);
            } else {
                // if not empty redirect to homepage
                // TODO: move this server side
                m.$location.path("/404");
            }
        };
        this.$scope.$watch("oldBlogPosts", function(a) {
            if (a !== null) {
                o();
            }
        });
    };
    a.$inject = [ "$rootScope", "$scope", "$location", "BlogDataService", "$log", "$timeout", "$sce", "$angularCacheFactory", "$route", "$filter", "_" ];
    angular.module("portfolioApp.blogPagesController").controller("BlogArticleCtrl", [ "$rootScope", "$scope", "$location", "BlogDataService", "$log", "$timeout", "$sce", "$angularCacheFactory", "$route", "$filter", "_", function(b, c, d, e, f, g, h, i, j, k, l) {
        return new a(b, c, d, e, f, g, h, i, j, k, l);
    } ]);
})();

//# sourceMappingURL=blog_article_controller.js.map
"use strict";

var _createClass = function() {
    function a(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || false;
            d.configurable = true;
            if ("value" in d) d.writable = true;
            Object.defineProperty(a, d.key, d);
        }
    }
    return function(b, c, d) {
        if (c) a(b.prototype, c);
        if (d) a(b, d);
        return b;
    };
}();

function _classCallCheck(a, b) {
    if (!(a instanceof b)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var a = function() {
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
        a.$inject = [ "$rootScope", "$scope", "$log", "WORK", "$window", "_" ];
        function a(b, c, d, e, f, g) {
            _classCallCheck(this, a);
            this.$rootScope = b;
            this.$scope = c;
            this.$log = d;
            this.$window = f;
            this._ = g;
            /** Using defineProperty prevents injected constants being exposed to the template
       * **/
            Object.defineProperty(this, "WORK", {
                value: e.pages
            });
            Object.defineProperty(this, "WORK_PROJECTS", {
                value: e.postContent
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
        _createClass(a, [ {
            key: "findData",
            value: function a() {
                var b = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.lastIndexOf("/") + 1, this.$rootScope.currentPage.length);
                var c = this._.filter(this.WORK, function(a) {
                    if (a.internalUrl.substring(a.internalUrl.lastIndexOf("/") + 1, a.internalUrl.length) === b) {
                        return a;
                    }
                });
                if (!this._.isEmpty(c)) {
                    this.bindData(c);
                    this.navigation();
                } else {
                    this.$window.location.href = "/404";
                }
            }
        }, {
            key: "bindData",
            value: function a(b) {
                this.$scope.title = b[0].title;
                this.$scope.summary = b[0].summary;
                this.$scope.details = b[0].details;
                this.$scope.code = b[0].code;
                this.$scope.company = b[0].company;
                this.$scope.workImage = b[0].workImage;
                this.$scope.workImageWebP = b[0].workImage + ".webp";
                this.$rootScope.pageTitle = b[0].title + " - " + b[0].summary;
            }
        }, {
            key: "navigation",
            value: function a() {
                /**
         * TODO: refactor pagination
         * **/
                var b = void 0;
                var c = void 0;
                var d = void 0;
                var e = void 0;
                var f = void 0;
                b = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.lastIndexOf("/") + 1, this.$rootScope.currentPage.length);
                // return the object for the current page
                c = this._.filter(this.WORK, function(a) {
                    if (a.internalUrl.substring(a.internalUrl.lastIndexOf("/") + 1, a.length) === b) {
                        return a;
                    }
                });
                if (!this._.isEmpty(c)) {
                    d = c[0].id;
                    // return the object for the previous page
                    e = this._.filter(this.WORK, function(a) {
                        if (parseInt(a.id, 10) === parseInt(d, 10) - 1) {
                            return a;
                        }
                    });
                    // return the object for the next page
                    f = this._.filter(this.WORK, function(a) {
                        if (parseInt(a.id, 10) === parseInt(d, 10) + 1) {
                            return a;
                        }
                    });
                    // if first page then the prev link goes to the end of the pages
                    e = !_.isEmpty(e) ? e : this._.filter(this.WORK, function(a, b) {
                        if (b === "drnewmans") {
                            return a;
                        }
                    });
                    // if last page then start loop all over again
                    f = !this._.isEmpty(f) ? f : this._.filter(this.WORK, function(a, b) {
                        if (b === "elevaate") {
                            return a;
                        }
                    });
                    if (!this._.isEmpty(e) && !this._.isEmpty(f)) {
                        // create href attribute values
                        this.$scope.prevPage = e[0].internalUrl;
                        this.$scope.nextPage = f[0].internalUrl;
                    }
                }
            }
        } ]);
        return a;
    }();
    a.$inject = [ "$rootScope", "$scope", "$log", "WORK", "$window", "_" ];
    angular.module("portfolioApp.wordProjectsController").controller("WorkPageCtrl", [ "$rootScope", "$scope", "$log", "WORK", "$window", "_", function(b, c, d, e, f, g) {
        return new a(b, c, d, e, f, g);
    } ]);
})();

//# sourceMappingURL=work_page_controller.js.map
"use strict";

var _createClass = function() {
    function a(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || false;
            d.configurable = true;
            if ("value" in d) d.writable = true;
            Object.defineProperty(a, d.key, d);
        }
    }
    return function(b, c, d) {
        if (c) a(b.prototype, c);
        if (d) a(b, d);
        return b;
    };
}();

function _classCallCheck(a, b) {
    if (!(a instanceof b)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var a = function() {
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
        a.$inject = [ "$rootScope", "$scope", "$log", "PROJECTS", "$window", "_" ];
        function a(b, c, d, e, f, g) {
            _classCallCheck(this, a);
            this.$rootScope = b;
            this.$scope = c;
            this.$log = d;
            this.$window = f;
            this._ = g;
            /** Using defineProperty prevents injected constants being exposed to the template
       * **/
            Object.defineProperty(this, "PROJECTS", {
                value: e.pages
            });
            Object.defineProperty(this, "SIDE_PROJECTS", {
                value: e.postContent
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
        _createClass(a, [ {
            key: "findData",
            value: function a() {
                var b = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.lastIndexOf("/") + 1, this.$rootScope.currentPage.length);
                var c = this._.filter(this.PROJECTS, function(a) {
                    if (a.internalUrl.substring(a.internalUrl.lastIndexOf("/") + 1, a.internalUrl.length) === b) {
                        return a;
                    }
                });
                if (!this._.isEmpty(c)) {
                    this.bindData(c);
                    this.navigation();
                } else {
                    this.$window.location.href = "/404";
                }
            }
        }, {
            key: "bindData",
            value: function a(b) {
                this.$scope.title = b[0].title;
                this.$scope.summary = b[0].summary;
                this.$scope.details = b[0].details;
                this.$scope.code = b[0].code;
                this.$scope.workImage = b[0].workImage;
                this.$scope.workImageWebP = b[0].workImage + ".webp";
                this.$scope.externalUrl = b[0].externalUrl;
                this.$rootScope.pageTitle = b[0].title + " - " + b[0].summary;
            }
        }, {
            key: "navigation",
            value: function a() {
                /**
         * TODO: refactor pagination
         * **/
                var b = void 0;
                var c = void 0;
                var d = void 0;
                var e = void 0;
                var f = void 0;
                b = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.lastIndexOf("/") + 1, this.$rootScope.currentPage.length);
                // return the object for the current page
                c = this._.filter(this.PROJECTS, function(a) {
                    if (a.internalUrl.substring(a.internalUrl.lastIndexOf("/") + 1, a.length) === b) {
                        return a;
                    }
                });
                if (!this._.isEmpty(c)) {
                    d = c[0].id;
                    // return the object for the previous page
                    e = this._.filter(this.PROJECTS, function(a) {
                        if (parseInt(a.id, 10) === parseInt(d, 10) - 1) {
                            return a;
                        }
                    });
                    // return the object for the next page
                    f = this._.filter(this.PROJECTS, function(a) {
                        if (parseInt(a.id, 10) === parseInt(d, 10) + 1) {
                            return a;
                        }
                    });
                    // if first page then the prev link goes to the end of the pages
                    e = !this._.isEmpty(e) ? e : this._.filter(this.PROJECTS, function(a, b) {
                        if (b === "mq-keyframes") {
                            return a;
                        }
                    });
                    // if last page then start loop all over again
                    f = !this._.isEmpty(f) ? f : this._.filter(this.PROJECTS, function(a, b) {
                        if (b === "lightning") {
                            return a;
                        }
                    });
                    if (!this._.isEmpty(e) && !this._.isEmpty(f)) {
                        // create href attribute values
                        this.$scope.prevPage = e[0].internalUrl;
                        this.$scope.nextPage = f[0].internalUrl;
                    }
                }
            }
        } ]);
        return a;
    }();
    a.$inject = [ "$rootScope", "$scope", "$log", "PROJECTS", "$window", "_" ];
    angular.module("portfolioApp.sideProjectsController").controller("ProjectsPageCtrl", [ "$rootScope", "$scope", "$log", "PROJECTS", "$window", "_", function(b, c, d, e, f, g) {
        return new a(b, c, d, e, f, g);
    } ]);
})();

//# sourceMappingURL=projects_page_controller.js.map
/**
 * Created by awalpole on 09/04/2014.
 */
"use strict";

(function() {
    var a = angular.module("portfolioApp.blogAdminController");
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
    var b = function a(b, c, d, e, f, g) {
        this.$rootScope = b;
        this.$scope = c;
        this.$log = d;
        this.$location = e;
        this.$angularCacheFactory = g;
        /** Using defineProperty prevents injected service being exposed to the template
     * **/
        Object.defineProperty(this, "MongoUserFactory", {
            value: f
        });
        /** Local scope
     * **/
        this.$scope.login = {};
        this.$scope.zipRegex = /(?!.*)/;
        this.$scope.submitted = false;
    };
    b.$inject = [ "$rootScope", "$scope", "$log", "$location", "MongoUserFactory", "$angularCacheFactory" ];
    /** Admin log-in page
   * **/
    b.prototype.submitLoginForm = function(a) {
        this.$scope.submitted = true;
        this.$scope.messages = {};
        this.$scope.messages.error = null;
        // check to make sure the form is completely valid
        if (a) {
            var b = {
                name: this.$scope.login.name,
                password: this.$scope.login.password
            };
            var c = this.MongoUserFactory.findUsers(b);
            c.then(function(a) {
                if (a.data !== "null") {
                    this.$angularCacheFactory.get("authCache").put("logginIn", a.data);
                    this.$rootScope.userid = a.data;
                    this.$location.path("/admin/");
                } else {
                    this.$scope.messages.error = "There seems to be an issue with your username or password";
                }
            }.bind(this), function(a) {
                this.$log.warn("Failure: LoginCtrl.submitLoginForm");
                this.$log.warn(a);
            }.bind(this));
        }
    };
    a.controller("LoginCtrl", b);
})();

//# sourceMappingURL=login_controller.js.map
/**
 * Created by awalpole on 09/04/2014.
 */
"use strict";

(function() {
    /** Add, edit or delete user details
   * */
    var a = angular.module("portfolioApp.blogAdminController");
    /**
   * @description Admin access to users
   * @param $scope
   * @param $log
   * @param MongoUserFactory
   * @constructor
   */
    var b = function a(b, c, d) {
        this.$scope = b;
        this.$log = c;
        /** Using defineProperty prevents injected service being exposed to the template
     * **/
        Object.defineProperty(this, "MongoUserFactory", {
            value: d
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
    b.$inject = [ "$scope", "$log", "MongoUserFactory" ];
    b.prototype.editUserFun = function(a) {
        // populate form field models with the data of the user about to be edited
        this.$scope.editThisUser = true;
        this.$scope.editUser.name = a.name;
        this.$scope.editUser._id = a._id;
    };
    b.prototype.deleteUser = function(a) {
        var b = this.MongoUserFactory.deleteUsers(a._id);
        b.then(function() {
            this.$scope.formSuccess = "You have successfully deleted the user";
            // repopulate list of users
            this.listAllUsers();
        }.bind(this), function(a) {
            this.$log.warn("Failure: UserDetailsCtrl.deleteUser");
            this.$log.warn(a);
        }.bind(this));
    };
    // update a un individuals user details
    b.prototype.submitEditUserForm = function(a) {
        this.$scope.editUserSubmit.submitted = true;
        // reset formSuccess scope
        this.$scope.formSuccess = null;
        if (a) {
            var b = {
                id: this.$scope.editUser._id,
                name: this.$scope.editUser.name,
                password: this.$scope.editUser.password
            };
            var c = this.MongoUserFactory.editUsers(b);
            c.then(function() {
                this.$scope.formSuccess = "You have successfully updated the user details";
                // reset scope and hide the form
                this.$scope.editThisUser = null;
                // repopulate list of users after successfully changing user details
                this.listAllUsers();
            }.bind(this), function(a) {
                this.$log.warn("Failure: UserDetailsCtrl.submitEditUserForm");
                this.$log.warn(a);
            }.bind(this));
        }
    };
    // list all users
    b.prototype.listAllUsers = function() {
        var a = this.MongoUserFactory.getUsers();
        a.then(function(a) {
            this.$scope.allUsers = a.data;
        }.bind(this), function(a) {
            this.$log.warn("Failure: UserDetailsCtrl.listAllUsers()");
            this.$log.warn(a);
        }.bind(this));
    };
    // add a user
    b.prototype.submitAddUserForm = function(a) {
        // reset formSuccess scope
        this.$scope.formSuccess = null;
        if (a) {
            var b = this.MongoUserFactory.addUser(this.$scope.addUser);
            b.then(function() {
                this.$scope.formSuccess = "You have successfully added a new user";
                // reset scope to remove values from input fields
                this.$scope.addUser.name = null;
                this.$scope.addUser.password = null;
                this.$scope.addUserSubmit.submitted = false;
                // repopulate list of users
                this.listAllUsers();
            }.bind(this), function(a) {
                this.$log.warn("Failure: UserDetailsCtrl.submitAddUserForm");
                this.$log.warn(a);
            }.bind(this));
        }
    };
    a.controller("UserDetailsCtrl", b);
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
    var a = angular.module("portfolioApp.blogAdminController");
    /**
   * @description Used in admin area to add blog articles
   * @param $scope
   * @param $log
   * @param MongoBlogFactory
   * @param moment
   * @constructor
   */
    var b = function a(b, c, d, e, f) {
        this.$scope = b;
        this.$log = c;
        /** Using defineProperty prevents injected service being exposed to the template
     * **/
        Object.defineProperties(this, {
            MongoBlogFactory: {
                value: d
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
                value: f
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
        this.createContentSnippet = function a() {
            // to create a codeSnippet cut down the content to around 130 characters without cutting a whole word in half
            var b;
            var c;
            var d;
            b = this.$scope.addBlogFormData.content.toString();
            // maximum number of characters to extract
            c = 130;
            //trim the string to the maximum length
            // make sure not include opening paragraph tag if any
            // hence, cut string at the third characters
            d = b.substr(3, c);
            //re-trim if we are in the middle of a word
            d = d.substr(0, Math.min(d.length, d.lastIndexOf(" "))) + " ...";
            //strip any HTML tags
            this.$scope.addBlogFormData.contentSnippet = d.replace(/(<([^>]+)>)/gi, "");
        };
        /** Create a SEO-friendly URL from the blog post title
     * **/
        /**
     * @type {function(this:AddBlogCtrl)|*|Function}
     * @private
     */
        this.addSEOFriendlyURL = function a() {
            var b = [ "a", "about", "above", "across", "after", "afterwards", "again", "against", "all", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "amoungst", "amount", "an", "and", "another", "any", "anyhow", "anyone", "anything", "anyway", "anywhere", "are", "around", "as", "at", "back", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "behind", "being", "below", "beside", "besides", "between", "beyond", "bill", "both", "bottom", "but", "by", "call", "can", "cannot", "cant", "co", "con", "could", "couldnt", "cry", "de", "describe", "detail", "do", "done", "down", "due", "during", "each", "eg", "eight", "either", "eleven", "else", "elsewhere", "empty", "enough", "etc", "even", "ever", "every", "everyone", "everything", "everywhere", "except", "few", "fifteen", "fify", "fill", "find", "fire", "first", "five", "for", "former", "formerly", "forty", "found", "four", "from", "front", "full", "further", "get", "give", "go", "had", "has", "hasnt", "have", "he", "hence", "her", "here", "hereafter", "hereby", "herein", "hereupon", "hers", "herself", "him", "himself", "his", "how", "however", "hundred", "ie", "if", "in", "inc", "indeed", "interest", "into", "is", "it", "its", "itself", "keep", "last", "latter", "latterly", "least", "less", "ltd", "made", "many", "may", "me", "meanwhile", "might", "mill", "mine", "more", "moreover", "most", "mostly", "move", "much", "must", "my", "myself", "name", "namely", "neither", "never", "nevertheless", "next", "nine", "no", "nobody", "none", "noone", "nor", "not", "nothing", "now", "nowhere", "of", "off", "often", "on", "once", "one", "only", "onto", "or", "other", "others", "otherwise", "our", "ours", "ourselves", "out", "over", "own", "part", "per", "perhaps", "please", "put", "rather", "re", "same", "see", "seem", "seemed", "seeming", "seems", "serious", "several", "she", "should", "show", "side", "since", "sincere", "six", "sixty", "so", "some", "somehow", "someone", "something", "sometime", "sometimes", "somewhere", "still", "such", "system", "take", "ten", "than", "that", "the", "their", "them", "themselves", "then", "thence", "there", "thereafter", "thereby", "therefore", "therein", "thereupon", "these", "they", "thickv", "thin", "third", "this", "those", "though", "three", "through", "throughout", "thru", "thus", "to", "together", "too", "top", "toward", "towards", "twelve", "twenty", "two", "un", "under", "until", "up", "upon", "us", "very", "via", "was", "we", "well", "were", "what", "whatever", "when", "whence", "whenever", "where", "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whither", "who", "whoever", "whole", "whom", "whose", "why", "will", "with", "within", "without", "would", "yet", "you", "your", "yours", "yourself", "yourselves", "the" ];
            var c = /[^\-a-z0-9]/g;
            var d = /\s/gi;
            var e = /[\-]{2}/g;
            var f;
            var g;
            var h;
            // initially remove hyphens and the white space to their right
            h = this.$scope.addBlogFormData.title.replace(/\–\s/g, "").toLowerCase();
            f = 0;
            g = b.length;
            // loop through the SEO watch words and replace with white space hyphen
            do {
                var i = new RegExp("\\b\\s" + b[f] + "\\s\\b", "g");
                var j = new RegExp("^" + b[f] + "\\s\\b");
                var k = new RegExp("\\s\\b" + b[f] + "$");
                h = h.replace(i, "-").trim().replace(j, "").replace(k, "");
                f += 1;
            } while (f < g);
            // remove white space and replace with hyphens
            h = h.replace(d, "-");
            // remove all non-alpha numeric characters
            h = h.replace(c, "");
            h = h.replace(e, "-");
            this.$scope.addBlogFormData.url = h;
        };
        /** unique id is used at the end of the blog page URL
     * **/
        /**
     *
     * @type {function(this:AddBlogCtrl)|*|Function}
     * @private
     */
        this.addUniqueID = function a() {
            this.$scope.addBlogFormData.uniqueId = this.$scope.addBlogFormData.publishedDate.substring(0, 6);
        };
        /** date in milliseconds. angularjs date filter displays user friendly date format on blog page
     * **/
        /**
     * @type {function(this:AddBlogCtrl)|*|Function}
     * @private
     */
        this.addDate = function a() {
            // using moment.js library so as to synch with backend code
            this.$scope.addBlogFormData.publishedDate = parseInt(e().valueOf(), 10).toString();
        };
    };
    b.$inject = [ "$scope", "$log", "MongoBlogFactory", "moment", "helperFunctionsService" ];
    b.prototype.addBlog = function(a) {
        this.$scope.addBlogFormSubmit = true;
        // check to make sure the form is completely valid
        if (a) {
            this.addDate();
            this.addUniqueID();
            this.$scope.addBlogFormData.url = this.hfs.addSEOFriendlyURL(this.$scope.addBlogFormData.title);
            this.$scope.addBlogFormData.contentSnippet = this.hfs.createContentSnippet(this.$scope.addBlogFormData.content, 130);
            var b = this.MongoBlogFactory.addBlogPost(this.$scope.addBlogFormData);
            b.then(function() {
                this.$scope.formSuccess = "You have successfully added a blog article";
                // reset scope to remove values from input fields
                // loop over form field models
                Object.keys(this.$scope.addBlogFormData).forEach(function(a) {
                    this.$scope.addBlogFormData[a] = null;
                }, this);
                this.$scope.addBlogFormSubmit = false;
            }.bind(this), function(a) {
                this.$log.warn("Failure: AddBlogCtrl.addBlog");
                this.$log.warn(a);
            }.bind(this));
        }
    };
    a.controller("AddBlogCtrl", b);
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
    var a = angular.module("portfolioApp.blogAdminController");
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
    var b = function a(b, c, d, e, f) {
        this.$scope = b;
        this.$log = c;
        this._ = e;
        /** By using EMCAScript 5 defineProperty we can prevent the service or config file
     * from appearing in the template as a model
     * **/
        Object.defineProperties(this, {
            MongoBlogFactory: {
                value: d
            },
            hfs: {
                value: f
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
        this.createContentSnippet = function a() {
            // to create a codeSnippet cut down the content to around 130 characters without cutting a whole word in half
            var b;
            var c;
            var d;
            b = this.$scope.editBlogFormData.content.toString();
            // maximum number of characters to extract
            c = 130;
            //trim the string to the maximum length
            // make sure not include opening paragraph tag if any
            // hence, cut string at the third characters
            d = b.substr(3, c);
            //re-trim if we are in the middle of a word
            d = d.substr(0, Math.min(d.length, d.lastIndexOf(" "))) + " ...";
            //strip and HTML tags
            this.$scope.editBlogFormData.contentSnippet = d.replace(/(<([^>]+)>)/gi, "").trim();
        };
        /** Create a SEO-friendly URL from the blog post title
     * **/
        this.addSEOFriendlyURL = function a() {
            var b = [ "a", "about", "above", "across", "after", "afterwards", "again", "against", "all", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "amoungst", "amount", "an", "and", "another", "any", "anyhow", "anyone", "anything", "anyway", "anywhere", "are", "around", "as", "at", "back", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "behind", "being", "below", "beside", "besides", "between", "beyond", "bill", "both", "bottom", "but", "by", "call", "can", "cannot", "cant", "co", "con", "could", "couldnt", "cry", "de", "describe", "detail", "do", "done", "down", "due", "during", "each", "eg", "eight", "either", "eleven", "else", "elsewhere", "empty", "enough", "etc", "even", "ever", "every", "everyone", "everything", "everywhere", "except", "few", "fifteen", "fify", "fill", "find", "fire", "first", "five", "for", "former", "formerly", "forty", "found", "four", "from", "front", "full", "further", "get", "give", "go", "had", "has", "hasnt", "have", "he", "hence", "her", "here", "hereafter", "hereby", "herein", "hereupon", "hers", "herself", "him", "himself", "his", "how", "however", "hundred", "ie", "if", "in", "inc", "indeed", "interest", "into", "is", "it", "its", "itself", "keep", "last", "latter", "latterly", "least", "less", "ltd", "made", "many", "may", "me", "meanwhile", "might", "mill", "mine", "more", "moreover", "most", "mostly", "move", "much", "must", "my", "myself", "name", "namely", "neither", "never", "nevertheless", "next", "nine", "no", "nobody", "none", "noone", "nor", "not", "nothing", "now", "nowhere", "of", "off", "often", "on", "once", "one", "only", "onto", "or", "other", "others", "otherwise", "our", "ours", "ourselves", "out", "over", "own", "part", "per", "perhaps", "please", "put", "rather", "re", "same", "see", "seem", "seemed", "seeming", "seems", "serious", "several", "she", "should", "show", "side", "since", "sincere", "six", "sixty", "so", "some", "somehow", "someone", "something", "sometime", "sometimes", "somewhere", "still", "such", "system", "take", "ten", "than", "that", "the", "their", "them", "themselves", "then", "thence", "there", "thereafter", "thereby", "therefore", "therein", "thereupon", "these", "they", "thickv", "thin", "third", "this", "those", "though", "three", "through", "throughout", "thru", "thus", "to", "together", "too", "top", "toward", "towards", "twelve", "twenty", "two", "un", "under", "until", "up", "upon", "us", "very", "via", "was", "we", "well", "were", "what", "whatever", "when", "whence", "whenever", "where", "whereafter", "whereas", "whereby", "wherein", "whereupon", "wherever", "whether", "which", "while", "whither", "who", "whoever", "whole", "whom", "whose", "why", "will", "with", "within", "without", "would", "yet", "you", "your", "yours", "yourself", "yourselves", "the" ];
            var c = /[^\-a-z0-9]/g;
            var d = /\s/gi;
            var e = /[\-]{2}/g;
            var f;
            var g;
            var h;
            // initially remove hypthens and the white space to their right
            h = this.$scope.editBlogFormData.title.replace(/\–\s/g, "").toLowerCase();
            f = 0;
            g = b.length;
            // loop through the SEO watch words and replace with white space hythen
            do {
                var i = new RegExp("\\b\\s" + b[f] + "\\s\\b", "g");
                var j = new RegExp("^" + b[f] + "\\s\\b");
                h = h.replace(i, "-").trim().replace(j, "");
                f += 1;
            } while (f < g);
            // remove white space and replace with hythen
            h = h.replace(d, "-");
            // remove all non-alpha numeric characters
            h = h.replace(c, "");
            h = h.replace(e, "-");
            this.$scope.editBlogFormData.url = h;
        };
    };
    b.$inject = [ "$scope", "$log", "MongoBlogFactory", "_", "helperFunctionsService" ];
    /** When the user clicks to edit a blog post the input fields are populated by the relevant data
   * **/
    b.prototype.editArticle = function(a) {
        // display form
        this.$scope.displayForm = true;
        // populate the ng-model with the data for the post to be edited
        this.$scope.editBlogFormData.title = a.title;
        this.$scope.editBlogFormData.author = a.author;
        this.$scope.editBlogFormData.category = a.category;
        this.$scope.editBlogFormData.content = a.content;
        this.$scope.editBlogFormData.aside = a.aside;
        this.$scope.editBlogFormData.displayImage = a.displayImage;
        this.$scope.editBlogFormData.uniqueId = a.uniqueId;
        this.$scope.editBlogFormData.publishedDate = a.publishedDate;
        this.$scope.editBlogFormData._id = a._id;
        this.$scope.editBlogFormData.commentsOpen = a.commentsOpen;
    };
    /** Called when the user submits the form
   * **/
    b.prototype.editBlog = function(a) {
        this.$scope.editBlogFormSubmit = true;
        // check to make sure the form is completely valid
        if (a) {
            this.$scope.editBlogFormData.url = this.hfs.addSEOFriendlyURL(this.$scope.editBlogFormData.title);
            this.$scope.editBlogFormData.contentSnippet = this.hfs.createContentSnippet(this.$scope.editBlogFormData.content, 130);
            var b = {
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
            var c = this.MongoBlogFactory.editBlogPosts(b);
            c.then(function() {
                // display success message
                this.$scope.formSuccess = "You have successfully updated the blog article";
                // reset scope to remove values from input fields
                // loop over form field models
                Object.keys(this.$scope.editBlogFormData).forEach(function(a) {
                    this.$scope.editBlogFormData[a] = null;
                }, this);
                // hide form with ng-if
                this.$scope.displayForm = false;
                // update page again
                this.getBlogs();
            }.bind(this), function(a) {
                this.$log.warn("Failure: EditBlogCtrl.editBlog");
                this.$log.warn(a);
            }.bind(this));
        }
    };
    /** request all blogs from the blog document
   * which is then listed using ng-repeat
   * **/
    b.prototype.getBlogs = function() {
        var a = this.MongoBlogFactory.getBlogPosts();
        a.then(function(a) {
            if (this._.isObject(a.data)) {
                this.$scope.blogContent = a.data;
            }
        }.bind(this), function(a) {
            this.$log.warn("Failure: EditBlogCtrl.getBlogs");
            this.$log.warn(a);
        }.bind(this));
    };
    /** When the user clicks to delete a blog article the popup appears
   * asking again for confirmation and the local scope is populated with the
   * blog data ready for submission to the remote service
   * **/
    b.prototype.deleteArticle = function(a) {
        this.$scope.displayPopup = true;
        this.$scope.dataToDelete.title = a.title;
        this.$scope.dataToDelete.author = a.author;
        this.$scope.dataToDelete.category = a.category;
        this.$scope.dataToDelete.content = a.content;
        this.$scope.dataToDelete.displayImage = a.displayImage;
        this.$scope.dataToDelete._id = a._id;
    };
    /** On the confirmation popup is a chance for the user to cancel the delete action
   * **/
    b.prototype.hidePopup = function() {
        this.$scope.displayPopup = false;
    };
    /** On successful deletion of the blog article the pop-up is hidden,
   *  local scope is reset to null and the list of blog articles is updated
   * **/
    b.prototype.removeArticle = function() {
        var a = this.MongoBlogFactory.deleteBlogPost(this.$scope.dataToDelete._id);
        a.then(function(a) {
            if (a) {
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
        }.bind(this), function(a) {
            this.$log.warn("Failure: EditBlogCtrl.removeArticle()");
            this.$log.warn(a);
        }.bind(this));
    };
    a.controller("EditBlogCtrl", b);
})();

//# sourceMappingURL=edit_blog_controller.js.map
"use strict";

function _classCallCheck(a, b) {
    if (!(a instanceof b)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var a = /**
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
    function a(b, c, d, e, f, g, h, i) {
        _classCallCheck(this, a);
        b.blogData = null;
        /**
     * @function _populateBlogScope
     * @description Populates blog scope if media query is matched
     * @type {function(this:SidebarCtrl)|*|Function}
     * @private
     */
        var j = function a() {
            /** Either receive data from BlogDataService or from the cache
       * **/
            if (e.get("blogCache").get("allBlogPosts")) {
                b.blogData = e.get("blogCache").get("allBlogPosts");
            } else {
                /** Take blog object from service ready to be used in the side bar lists
         **/
                d.retrieveData().then(function(a) {
                    // retrieve blog data to be used in the ng-repeat directive in the sidebar
                    if (h.isObject(a.data.BlogPosts)) {
                        b.blogData = a.data.BlogPosts;
                    }
                }, function(a) {
                    c.warn("Error SidebarCtrl");
                    c.warn(a);
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
        var k = function a(b) {
            var c = {};
            h.chain(b).pluck("category").filter(function(a) {
                return typeof a !== "undefined";
            }).groupBy(function(a) {
                return a;
            }).each(function(a, b) {
                c[b] = h.size(a);
            });
            return Object.keys(c).sort(function(a, b) {
                return -(c[a] - c[b]);
            });
        };
        /**
     * @function _handleMediaMatch
     * @description function used with matchMedia event
     * @type {function(this:SidebarCtrl)|*|Function}
     * @private
     */
        var l = function a(c) {
            if (!c.matches) {
                g(function() {
                    j();
                }, 0);
                var d = b.$watch("blogData", function(f) {
                    if (f !== null && !e.get("blogCache").get("blogTags")) {
                        b.blogTags = k(f);
                        if (i.localstorage) {
                            e.get("blogCache").put("blogTags", b.blogTags);
                        }
                        d();
                    } else if (f !== null && e.get("blogCache").get("blogTags")) {
                        b.blogTags = e.get("blogCache").get("blogTags");
                        d();
                    }
                    c.removeListener(a);
                });
            }
        };
        if (f.matchMedia) {
            var m = f.matchMedia("screen and (max-width: 767px)");
            m.addListener(l);
            l(m);
        } else {
            j();
        }
    };
    a.$inject = [ "$scope", "$log", "BlogDataService", "$angularCacheFactory", "$window", "$timeout", "_", "storage" ];
    angular.module("portfolioApp.blogSidebarController").controller("SidebarCtrl", [ "$scope", "$log", "BlogDataService", "$angularCacheFactory", "$window", "$timeout", "_", "storage", function(b, c, d, e, f, g, h, i) {
        return new a(b, c, d, e, f, g, h, i);
    } ]);
})();

//# sourceMappingURL=sidebar_controller.js.map
"use strict";

var _createClass = function() {
    function a(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || false;
            d.configurable = true;
            if ("value" in d) d.writable = true;
            Object.defineProperty(a, d.key, d);
        }
    }
    return function(b, c, d) {
        if (c) a(b.prototype, c);
        if (d) a(b, d);
        return b;
    };
}();

function _classCallCheck(a, b) {
    if (!(a instanceof b)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var a = function() {
        /**
     * @description For displaying and the submission of blog comments
     * @param $scope {object}
     * @param $rootScope {object}
     * @param MongoCommentService {object}
     * @param $log {object}
     * @param $timeout {function}
     * @constructor
     */
        function a(b, c, d, e, f) {
            _classCallCheck(this, a);
            this.$scope = b;
            this.$rootScope = c;
            this.$log = e;
            this.$timeout = f;
            /** Using defineProperty prevents injected service being exposed to the template
       * **/
            Object.defineProperty(this, "MongoCommentService", {
                value: d
            });
            this.$scope.commentBlogFormSubmit = false;
            this.$scope.publishComments = null;
            this.$scope.commentFormData = {};
            this.$scope.zipRegex = /(?!.*)/;
            // find blogId number form the URL string, ie /#!/blog/136324/using-autoload-in-object-orientated-wordpress-plugin
            this.$scope.commentFormData.blogId = this.$rootScope.currentPage.substring(this.$rootScope.currentPage.indexOf("/blog/") + 6, this.$rootScope.currentPage.indexOf("/blog/") + 12);
        }
        _createClass(a, [ {
            key: "retreiveComment",
            value: function a() {
                var b = this;
                var c = {
                    blogId: this.$scope.commentFormData.blogId
                };
                var d = this.MongoCommentService.getPubilshedComments(c);
                d.then(function(a) {
                    if (!_.isEmpty(a.data)) {
                        b.$scope.publishComments = a.data;
                    }
                }, function(a) {
                    b.$log.warn("Failure: CommentCtrl.retreiveComment");
                    b.$log.warn(a);
                });
            }
        }, {
            key: "submitComment",
            value: function a(b) {
                var c = this;
                this.$scope.commentBlogFormSubmit = true;
                if (!b) {
                    this.$scope.formFailure = "The form has not been submitted because of errors. Please review the form error messages and click submit again";
                    this.$timeout(function() {
                        document.querySelector(".comment-form-failure").focus();
                    }, 0);
                }
                if (b) {
                    var d = this.MongoCommentService.addComment(this.$scope.commentFormData);
                    d.then(function() {
                        c.$scope.formFailure = null;
                        c.$scope.formSuccess = "You have successfully submitted a blog comment";
                        c.$timeout(function() {
                            document.querySelector(".comment-form-success").focus();
                        }, 0);
                        // reset scope to remove values from input fields
                        // loop over form field models
                        Object.keys(c.$scope.commentFormData).forEach(function(a) {
                            this.$scope.commentFormData[a] = null;
                        }, c);
                        c.$scope.commentBlogFormSubmit = false;
                    }, function(a) {
                        c.$log.warn("Failure: CommentCtrl.submitComment");
                        c.$log.warn(a);
                    });
                }
            }
        } ]);
        return a;
    }();
    a.$inject = [ "$scope", "$rootScope", "MongoCommentService", "$log", "$timeout" ];
    angular.module("portfolioApp.blogAdminController").controller("CommentCtrl", [ "$scope", "$rootScope", "MongoCommentService", "$log", "$timeout", function(b, c, d, e, f) {
        return new a(b, c, d, e, f);
    } ]);
})();

//# sourceMappingURL=comment_controller.js.map
/**
 * Created by awalpole on 06/05/2014.
 */
"use strict";

(function() {
    var a = angular.module("portfolioApp.blogAdminController");
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
    var b = function a(b, c, d, e) {
        this.$scope = b;
        this.$log = d;
        this._ = e;
        /** Using defineProperty prevents injected service being exposed to the template
     * **/
        Object.defineProperty(this, "MongoCommentService", {
            value: c
        });
        this.$scope.comments = null;
    };
    /** @method
   *  @public
   */
    b.prototype.getComments = function() {
        var a = this.MongoCommentService.getComments();
        a.then(function(a) {
            if (this._.isObject(a.data)) {
                this.$scope.comments = a.data;
            }
        }.bind(this), function(a) {
            this.$log.warn("Failure: CommentAdminCtrl.getComments");
            this.$log.warn(a);
        }.bind(this));
    };
    b.prototype.deleteComment = function(a) {
        var b = this.MongoCommentService.deleteComment(a._id);
        b.then(function(a) {
            if (a.data) {
                // update page again
                this.getComments();
            }
        }.bind(this), function(a) {
            this.$log.warn("Failure: CommentAdminCtrl.deleteComment()");
            this.$log.warn(a);
        }.bind(this));
    };
    b.prototype.publishComment = function(a) {
        var b = {
            id: a._id,
            published: a.published !== true || false
        };
        var c = this.MongoCommentService.editComment(b);
        c.then(function(a) {
            if (a.data) {
                // update page again
                this.getComments();
            }
        }.bind(this), function(a) {
            this.$log.warn("Failure: CommentAdminCtrl.publishComment");
            this.$log.warn(a);
        }.bind(this));
    };
    b.$inject = [ "$scope", "MongoCommentService", "$log", "_" ];
    a.controller("CommentAdminCtrl", b);
})();

//# sourceMappingURL=comment_admin_controller.js.map
"use strict";

function _classCallCheck(a, b) {
    if (!(a instanceof b)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var a = /**
   * @description For displaying a HTML sitemap
   * @param $scope {object}
   * @param $log {object}
   * @param BlogDataService {object}
   * @param $angularCacheFactory {function}
   * @param _ {function}
   * @constructor
   */
    function a(b, c, d, e, f) {
        _classCallCheck(this, a);
        /** Either receive data from BlogDataService or from the cache
     * **/
        if (e.get("blogCache").get("allBlogPosts")) {
            b.blogData = e.get("blogCache").get("allBlogPosts");
        }
        /** Take blog object from service ready to be used in the side bar lists
     **/
        d.retrieveData().then(function(a) {
            // retrieve blog data to be used in the ng-repeat directive in the sidebar
            if (f.isObject(a.data.BlogPosts)) {
                b.blogData = a.data.BlogPosts;
            }
        }, function(a) {
            c.warn("Error SitemapCtrl");
            c.warn(a);
        });
        /** Plucks category names from object and then sorts them by popularity
     * **/
        var g = function a() {
            var c = {};
            f.chain(b.blogData).pluck("category").filter(function(a) {
                return typeof a !== "undefined";
            }).groupBy(function(a) {
                return a;
            }).each(function(a, b) {
                c[b] = f.size(a);
            });
            return Object.keys(c).sort(function(a, b) {
                return -(c[a] - c[b]);
            });
        };
        b.$watch("blogData", function(a) {
            if (a !== null && !e.get("blogCache").get("blogTags")) {
                b.blogTags = g(a);
                e.get("blogCache").put("blogTags", b.blogTags);
            } else if (a !== null && e.get("blogCache").get("blogTags")) {
                b.blogTags = e.get("blogCache").get("blogTags");
            }
        });
    };
    a.$inject = [ "$scope", "$log", "BlogDataService", "$angularCacheFactory", "_" ];
    angular.module("portfolioApp.sideProjectsController").controller("SitemapCtrl", [ "$scope", "$log", "BlogDataService", "$angularCacheFactory", "_", function(b, c, d, e, f) {
        return new a(b, c, d, e, f);
    } ]);
})();

//# sourceMappingURL=sitemap_controller.js.map
"use strict";

var _createClass = function() {
    function a(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || false;
            d.configurable = true;
            if ("value" in d) d.writable = true;
            Object.defineProperty(a, d.key, d);
        }
    }
    return function(b, c, d) {
        if (c) a(b.prototype, c);
        if (d) a(b, d);
        return b;
    };
}();

function _classCallCheck(a, b) {
    if (!(a instanceof b)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var a = function() {
        /**
     * constructor
     * @param $scope {object}
     * @param $log {object}
     * @param NewsBlurService {object}
     * @param hfs {object}
     */
        function a(b, c, d, e) {
            _classCallCheck(this, a);
            this.$scope = b;
            this.$log = c;
            this.$scope.recArticle = {};
            this.$scope.recArticle.title = null;
            this.$scope.recArticle.date = null;
            this.$scope.recArticle.author = null;
            this.$scope.recArticle.content = null;
            this.$scope.recArticle.link = null;
            this.NewsBlurService = d;
            this.hfs = e;
        }
        _createClass(a, [ {
            key: "loadData",
            value: function a() {
                var b = this;
                var c = this.NewsBlurService.getBlogPosts();
                c.then(function(a) {
                    if (a.data !== "null") {
                        // make JSON file into usable object
                        var c = a.data;
                        for (var d in c.stories) {
                            b.$scope.recArticle.title = c.stories[d]["story_title"];
                            b.$scope.recArticle.date = c.stories[d]["short_parsed_date"].split(",")[0];
                            b.$scope.recArticle.author = c.stories[d]["story_authors"];
                            b.$scope.recArticle.content = b.hfs.createContentSnippet(c.stories[d]["story_content"], 260);
                            b.$scope.recArticle.link = c.stories[d]["story_permalink"];
                            if (d >= 0) {
                                // only need first story in json file
                                break;
                            }
                        }
                    }
                }, function(a) {
                    b.$log.warn("Failure: FooterCtrl.getBlogPosts");
                    b.$log.warn(a);
                });
            }
        } ]);
        return a;
    }();
    a.$inject = [ "$scope", "$log", "NewsBlurService", "helperFunctionsService" ];
    angular.module("portfolioApp.footerController").controller("FooterCtrl", [ "$scope", "$log", "NewsBlurService", "helperFunctionsService", function(b, c, d, e) {
        return new a(b, c, d, e);
    } ]);
})();

//# sourceMappingURL=footer_controller.js.map
"use strict";

var _createClass = function() {
    function a(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || false;
            d.configurable = true;
            if ("value" in d) d.writable = true;
            Object.defineProperty(a, d.key, d);
        }
    }
    return function(b, c, d) {
        if (c) a(b.prototype, c);
        if (d) a(b, d);
        return b;
    };
}();

function _classCallCheck(a, b) {
    if (!(a instanceof b)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

(function() {
    var a = function() {
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
        function a(b, c, d, e, f, g, h) {
            var i = this;
            _classCallCheck(this, a);
            this.$scope = b;
            this.$location = c;
            this.$log = e;
            this.$rootScope = g;
            this.$scope.cats = {};
            this.$scope.cats.displayMore = false;
            this.$scope.cats.title = null;
            this.$scope.displayPosts = 10;
            this.$scope.blogPosts = null;
            var j = this.$location.path();
            var k = j.substring(j.lastIndexOf("/") + 1, j.length);
            /** Either receive data from BlogDataService or from the cache
       * **/
            if (f.get("blogCache").get("allBlogPosts")) {
                this.$scope.blogPosts = f.get("blogCache").get("allBlogPosts");
            } else {
                // start loader spinner in loaderDirective
                this.$rootScope.loader = true;
                d.retrieveData().then(function(a) {
                    if (h.isObject(a.data.BlogPosts)) {
                        // stop loader spinner in loaderDirective
                        i.$rootScope.loader = false;
                        i.$scope.blogPosts = a.data.BlogPosts;
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
            var l = function a(b) {
                return h.chain(b).filter(function(a) {
                    if (h.isString(a.category) && a.category.toLowerCase() === k) {
                        return a;
                    }
                }).value();
            };
            this.$scope.$watch("blogPosts", function(a) {
                if (a !== null) {
                    i.$scope.totalBlogPosts = l(a);
                    if (i.$scope.totalBlogPosts.length >= i.$scope.displayPosts) {
                        i.$scope.cats.displayMore = true;
                    }
                    if (h.isEmpty(i.$scope.totalBlogPosts)) {
                        // if empty send to 404 page
                        // if not empty redirect to 404
                        // TODO: move this server side
                        i.$location.path("/404");
                    }
                    i.$rootScope.pageTitle = k + " / blog unblock";
                    i.$scope.cats.title = k;
                    i.$scope.URLencoded = encodeURIComponent(i.$rootScope.currentPage);
                    i.$rootScope.faceBookDescription = "List page for " + k + " category on the blog of web developer, Andy walpole";
                }
            });
        }
        _createClass(a, [ {
            key: "morePosts",
            value: function a() {
                this.$scope.displayPosts = this.$scope.displayPosts + 10;
            }
        } ]);
        return a;
    }();
    a.$inject = [ "$scope", "$location", "BlogDataService", "$log", "$angularCacheFactory", "$rootScope", "_" ];
    angular.module("portfolioApp.blogPagesController").controller("BlogCatController", [ "$scope", "$location", "BlogDataService", "$log", "$angularCacheFactory", "$rootScope", "_", function(b, c, d, e, f, g, h) {
        return new a(b, c, d, e, f, g, h);
    } ]);
})();

//# sourceMappingURL=blog_category_controller.js.map
/**
 * Created by andywalpole on 30/03/2014.
 */
"use strict";

angular.module("portfolioApp.homepageDirective").directive("sliderDirective", [ "SLIDER", "$interval", "$timeout", "$animate", "$window", "_", "requestTimeout", "storage", function(a, b, c, d, e, f, g, h) {
    return {
        restrict: "A",
        scope: {
            slider: "@"
        },
        replace: true,
        template: '<div id="slider" data-ng-class="slider.sliderClass" tabindex="0">' + "<section>" + '<h2 class="page-top-title" class="slider1" data-ng-bind="slider.title"></h2>' + '<p class="page-top-text" data-ng-bind="slider.text"></p>' + '<a data-ng-href="{{slider.URL}}" class="button-front-one">View Project</a>' + "</section>" + '<div class="left-arrow" rel="prev" role="button" tabindex="0" aria-label="Previous slide"></div>' + '<div class="right-arrow" rel="next" role="button"  tabindex="0" aria-label="Next slide"></div>' + "</div>",
        controller: [ "$scope", function b(c) {
            c.slideController = {
                currentSlide: 0,
                sliderForMethod: function b(d) {
                    // loops through SLIDER constant and finds the right child objects
                    Object.keys(a).forEach(function(b) {
                        if (b.indexOf(d) !== -1) {
                            c.slider = a[b];
                            c.slider.sliderClass = "slider" + d;
                        }
                    });
                },
                sliderStartMethod: function b() {
                    // starts off with first slider details and reduced quality image
                    // after initial page load the placeholder image is replaced by the full size image
                    c.slider = a.slider1;
                    if (!sessionStorage.getItem("homePageLoaded")) {
                        c.slider.sliderClass = "sliderPlaceholder";
                        if (h.localstorage) {
                            sessionStorage.setItem("homePageLoaded", "true");
                        }
                    } else {
                        c.slider.sliderClass = "slider1";
                    }
                },
                sliderReplaceMethod: function a() {
                    c.slider.sliderClass = "slider1";
                }
            };
        } ],
        link: function h(i, j) {
            var k = {
                sliderTotal: f.size(a),
                timeGap: 8e3,
                startGap: 4e3,
                animationGap: 2e3,
                timerInterval: null,
                timer: function a() {
                    var c;
                    var f;
                    var h;
                    var l;
                    var m;
                    var n;
                    // add and remove animate classes
                    // this is not used on mobile devices because of performance issues
                    // using matchMedia below it is possible to prevent the classes from changing
                    c = angular.element(j[0].querySelector("p"));
                    h = angular.element(j[0].querySelector("h2"));
                    m = angular.element(j[0].querySelector("a"));
                    k.timerInterval = b(function() {
                        if (e.matchMedia && e.matchMedia("(min-device-width: 768px) and (orientation: landscape)")) {
                            f = function a() {
                                d.addClass(c, "animate-bounceIn");
                                g(function() {
                                    d.removeClass(c, "animate-bounceIn");
                                    i.$digest();
                                }, k.animationGap);
                            };
                            l = function a() {
                                d.addClass(h, "animate-bounceIn");
                                g(function() {
                                    d.removeClass(h, "animate-bounceIn");
                                    i.$digest();
                                }, k.animationGap);
                            };
                            n = function a() {
                                d.addClass(m, "animate-bounceIn-later");
                                g(function() {
                                    d.removeClass(m, "animate-bounceIn-later");
                                    i.$digest();
                                }, k.animationGap);
                            };
                            f();
                            l();
                            n();
                        }
                        // end matchMedia
                        // skip through the set interval and either reset the slider list to the beginning
                        // or carry on to the next one
                        if (i.slideController.currentSlide < k.sliderTotal) {
                            i.slideController.sliderForMethod(i.slideController.currentSlide + 1);
                            i.slideController.currentSlide = i.slideController.currentSlide + 1;
                        } else {
                            i.slideController.sliderForMethod(1);
                            i.slideController.currentSlide = 1;
                        }
                    }, this.timeGap);
                },
                navigation: function a() {
                    angular.element(j[0].querySelector(".right-arrow")).bind("click", function() {
                        // use the left arrow to move through the slider in a left direction
                        if (i.slideController.currentSlide < k.sliderTotal) {
                            i.slideController.sliderForMethod(i.slideController.currentSlide + 1);
                            i.slideController.currentSlide = i.slideController.currentSlide + 1;
                        } else {
                            i.slideController.sliderForMethod(1);
                            i.slideController.currentSlide = 1;
                        }
                        b.cancel(k.timerInterval);
                        k.timer();
                    });
                    angular.element(j[0].querySelector(".left-arrow")).bind("click", function() {
                        // use the the right arrow to move through the slider in a right direction
                        if (i.slideController.currentSlide > 1) {
                            i.slideController.sliderForMethod(i.slideController.currentSlide - 1);
                            i.slideController.currentSlide = i.slideController.currentSlide - 1;
                        } else {
                            i.slideController.sliderForMethod(k.sliderTotal);
                            i.slideController.currentSlide = k.sliderTotal;
                        }
                        b.cancel(k.timerInterval);
                        k.timer();
                    });
                },
                start: function a() {
                    // when the site first loads up the load the placeholder with the reduced PNG8 image
                    c(function() {
                        i.slideController.currentSlide = 1;
                        i.slideController.sliderStartMethod();
                        c(function() {
                            var a;
                            // after the defined millisecond gap defined in startGap then load the right size image
                            i.slideController.sliderReplaceMethod();
                            // force images to download in the background
                            // otherwise there is a noticeable lag in image download with every new slide
                            if (e.Modernizr.webp) {
                                a = '<div style="display:none" aria-hidden="true">' + '<img src="/images/slider/blinkbox.png.webp" alt="" />' + '<img src="/images/slider/lightning.png.webp" alt="" />' + '<img src="/images/slider/uk-law-student.png.webp" alt="" />' + '<img src="/images/slider/kaplan.png.webp" alt="" />' + '<img src="/images/slider/drnewmans.png.webp" alt="" />' + '<img src="/images/slider/penny-books.png.webp" alt="" />' + '<img src="/images/slider/twt-twt.png.webp" alt="" /></div>';
                            } else {
                                a = '<div style="display:none" aria-hidden="true">' + '<img src="/images/slider/blinkbox.png" alt="" />' + '<img src="/images/slider/lightning.png" alt="" />' + '<img src="/images/slider/uk-law-student.png" alt="" />' + '<img src="/images/slider/kaplan.png" alt="" />' + '<img src="/images/slider/drnewmans.png" alt="" />' + '<img src="/images/slider/penny-books.png" alt="" />' + '<img src="/images/slider/twt-twt.png" alt="" /></div>';
                            }
                            j.append(a);
                        }, k.startGap);
                    }, 0);
                },
                destroy: function a() {
                    // destroy timers when scope is destroyed
                    i.$on("$destroy", function() {
                        if (k.timerInterval) {
                            b.cancel(k.timerInterval);
                        }
                        angular.element(j[0].querySelector(".left-arrow")).unbind("click");
                        angular.element(j[0].querySelector(".right-arrow")).unbind("click");
                    });
                },
                init: function a() {
                    k.start();
                    k.timer();
                    k.navigation();
                    k.destroy();
                }
            };
            return k.init();
        }
    };
} ]);

angular.module("portfolioApp").filter("slice", function() {
    return function(a, b, c) {
        return a.slice(b, c);
    };
});

//# sourceMappingURL=slider_directive.js.map
/**
 * Created by awalpole on 13/04/2014.
 */
"use strict";

angular.module("portfolioApp.homepageDirective").directive("homepageStatsDirective", [ "STATS", "$window", "_", "moment", function(a, b, c, d) {
    return {
        restrict: "A",
        templateUrl: "../homepage/homepage_stats.html",
        scope: {
            header: "@header",
            section: "@section"
        },
        link: function e(f) {
            var g;
            var h;
            // work out the number of day I have been a full time web developer since April 1 2008
            // now milliseconds minus milliseconds from April 1, 2009 then calculate the days from this figure
            var i = d("April 1, 2009").valueOf();
            var j = d().valueOf();
            var k = (j - i) / (1e3 * 60 * 60 * 24);
            // now add the days to the scope
            var l = Math.round(k).toString();
            /** Only display the data that fits the screen width
       * Less than 979px = display three blocks of data
       * More that 979px = display all the data
       * If matchMedia isn't supported (IE9) then fallback to display all the data
       * **/
            h = function b(d) {
                if (!d.matches) {
                    f.stats = a;
                    f.stats.block1.header = l;
                    d.removeListener(h);
                } else {
                    f.stats = c.toArray(a).slice(0, 3);
                    f.stats[0].header = l;
                }
            };
            if (b.matchMedia) {
                g = b.matchMedia("screen and (max-width: 979px)");
                g.addListener(h);
                h(g);
            } else {
                f.stats = a;
                f.stats.block1.header = l;
            }
            f.$on("$destroy", function() {
                delete f.stats;
                g.removeListener(h);
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

angular.module("portfolioApp.blogPagesDirective").directive("compile", [ "$compile", function(a) {
    // directive factory creates a link function
    return function(b, c, d) {
        b.$watch(function(a) {
            // watch the 'compile' expression for changes
            return a.$eval(d.compile);
        }, function(d) {
            // when the 'compile' expression changes
            // assign it into the current DOM
            c.html(d);
            // compile the new DOM and link it to the current
            // scope.
            // NOTE: we only compile .childNodes so that
            // we don't get into infinite loop compiling ourselves
            a(c.contents())(b);
        });
    };
} ]);

//# sourceMappingURL=compile_directive.js.map
/**
 * Created by awalpole on 10/09/2014.
 */
"use strict";

angular.module("portfolioApp.blogPagesDirective").directive("code", [ function() {
    function a(a) {
        return a.replace(/</gi, "&lt;").replace(/>/gi, "&gt;");
    }
    function b(a) {
        return a.replace(/^(\n)*/, "").replace(/(\n)*(\s)*$/, "");
    }
    function c(a) {
        return a.replace(new RegExp("^ {" + a.search(/[^\s-]/) + "}", "gm"), "");
    }
    return {
        restrict: "E",
        terminal: true,
        link: function d(e, f) {
            var g = f.html();
            g = a(g);
            g = b(g);
            g = c(g);
            f.html(g);
            Prism.highlightElement(f[0]);
        }
    };
} ]);

//# sourceMappingURL=prism_directive.js.map
/**
 * Created by awalpole on 12/09/2014.
 */
"use strict";

angular.module("portfolioApp.blogPagesDirective").directive("codepenDirective", [ "$timeout", "$document", function(a, b) {
    return {
        restrict: "A",
        link: function c(d) {
            var e = a(function() {
                var a = b[0].createElement("script");
                a.type = "text/javascript";
                a.id = "code-pen-script";
                a.src = "//codepen.io/assets/embed/ei.js";
                var c = b[0].getElementsByTagName("script")[0];
                c.parentNode.insertBefore(a, c);
            }, 1e4);
            d.$on("$destroy", function() {
                if (b[0].getElementById("code-pen-script")) {
                    var c = b[0].getElementById("code-pen-script");
                    c.parentNode.removeChild(c);
                }
                if (e) {
                    a.cancel(e);
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

angular.module("portfolioApp.blogPagesDirective").directive("twitterDirective", [ "$timeout", "$document", function(a, b) {
    return {
        restrict: "A",
        link: function c(d) {
            var e = a(function() {
                var a = b[0].createElement("script");
                a.type = "text/javascript";
                a.id = "twitter-script";
                a.src = "//platform.twitter.com/widgets.js";
                var c = b[0].getElementsByTagName("script")[0];
                c.parentNode.insertBefore(a, c);
            }, 7e3);
            d.$on("$destroy", function() {
                if (b[0].getElementById("twitter-script")) {
                    var c = b[0].getElementById("twitter-script");
                    c.parentNode.removeChild(c);
                }
                if (e) {
                    a.cancel(e);
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

angular.module("portfolioApp.blogPagesDirective").directive("vineDirective", [ "$timeout", "$document", function(a, b) {
    return {
        restrict: "A",
        link: function c(d) {
            var e = a(function() {
                var a = b[0].createElement("script");
                a.type = "text/javascript";
                a.id = "vine-script";
                a.src = "//platform.vine.co/static/scripts/embed.js";
                var c = b[0].getElementsByTagName("script")[0];
                c.parentNode.insertBefore(a, c);
            }, 8e3);
            d.$on("$destroy", function() {
                if (b[0].getElementById("vine-script")) {
                    var c = b[0].getElementById("vine-script");
                    c.parentNode.removeChild(c);
                }
                if (e) {
                    a.cancel(e);
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

angular.module("portfolioApp.blogPagesDirective").directive("scrollToTop", [ "$timeout", "$document", function(a, b) {
    /**
   *
   * @param element {object}
   * @param to {number}
   * @param duration {number}
   */
    var c = function b(c, d, e) {
        if (e <= 0) {
            return;
        }
        var f = d - c.scrollTop;
        var g = f / e * 10;
        a(function() {
            c.scrollTop = c.scrollTop + g;
            if (c.scrollTop === d) {
                return;
            }
            b(c, d, e - 10);
        }, 10);
    };
    /**
   * @param event {object}
   */
    var d = function a(d) {
        c(b[0].body.scrollTop === 0 ? b[0].documentElement : b[0].body, 0, 600);
        d.preventDefault();
    };
    return {
        restrict: "A",
        link: function a(b, c) {
            c.on("click", d);
            b.$on("$destroy", function() {
                c.off("click", d);
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