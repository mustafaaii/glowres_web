
/**Router Dom import **/
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

/**Font icon import **/
import { faCaretRight, faCaretLeft, faCamera, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**Components import **/
import Seo from "../components/seo";
import Keywords from "../components/keywords";

/**Image import **/
import Web from "../assets/img/design/web.svg";
import Video from "../assets/img/design/video.svg";
import Panel from "../assets/img/design/panel.svg";
import Cover from "../assets/img/hero/cover.svg";
import { useState } from "react";


const Detail = () => {

    const tech = [
        {
            id: "11172021",
            title: "React JS",
            SeoTitle: "React JS - Front End Develoment | Glowres",
            keywords: ["Reactjs", "Javascript", "Front End Develoment", " Web Site Develoment"],
            description: "You can have modern and aesthetic websites with React JS. React JS for excellent websites in Front End Design",
            to: "/react-js/11172021",
            content:
                <>


                    <br />
                    <br />
                    <div className="p-5">
                        <h1 className="text-slate-600 text-3xl font-bold text-slate-400">
                            What is React? How does it work?
                        </h1>
                        <p className="text-slate-400 mt-5">
                            React is the most popular JavaScript library for building user interface (UI). It uses a method for rendering websites that offers great responsiveness to user output.
                            The components of this tool were developed by Facebook. It was released as an open source JavaScript in 2013. Currently, it is ahead of its main competitors such as Angular and
                            Bootstrap, which are at the top of the bestseller list.In this article, we'll help you understand what React is and how it benefits your business as a front-end developer.
                        </p>
                        <h1 className="text-slate-600 text-3xl font-bold text-slate-400 mt-10">
                            Why Should You Use React?
                        </h1>
                        <p className="text-slate-400 mt-2">
                            React has been used by hundreds of major companies, including Netflix, Airbnb, American Express, Facebook, WhatsApp, eBay, and Instagram.
                            This is proof that the advantages this tool provides are unrivaled.
                        </p>
                        <p className="text-slate-400 italic border-x-4 border-primary-600 rounded-xl text-lg bg-gray-100 rounded-br-xl mt-10 p-3">
                            Here are some reasons why you should use React that will help you further understand the answer to what is React:
                        </p>
                        <h1 className="text-slate-600 text-3xl font-bold text-slate-400 mt-10">
                            Easy to use
                        </h1>
                        <p className="text-slate-400 mt-2">
                            As an open source JavaScript GUI library, React has a major focus; It is to complete UI tasks efficiently. It can be classified as "V" in the MVC pattern (Model-View-Controller).
                            As a JavaScript developer, you should have no trouble understanding the basics of React. You can even start developing web-based applications with a few days of use.
                            You can read many articles about React to increase your knowledge. They contain a lot of information on using this tool: videos, guides and data to enrich your understanding.
                        </p>


                        <h1 className="text-slate-600 text-3xl font-bold text-slate-400 mt-10">
                            Supports Reusable Components in Java
                        </h1>
                        <p className="text-slate-400 mt-2">
                            React lets you reuse components developed into other applications that use the same functionality.Component reusability is an unusual feature for developers.
                        </p>
                        <h1 className="text-slate-600 text-3xl font-bold text-slate-400 mt-10">
                            Easier Component Writing
                        </h1>
                        <p className="text-slate-400 mt-2">
                            The React component is easier to write because it uses JSX, an optional syntax extension that lets you combine HTML with JavaScript.
                            JSX is the perfect blend of JavaScript and HTML. It explains the whole website structure writing process. In addition, the extension used makes it easier to handle multiple functions.
                            While JSX is not the most popular syntax extension, it has proven quite productive in developing custom components or high-volume applications.
                        </p>
                        <h1 className="text-slate-600 text-3xl font-bold text-slate-400 mt-10">
                            Better Performance with Virtual DOM
                        </h1>
                        <p className="text-slate-400 mt-2">
                            React will efficiently update the DOM (Document Object Model) operation. As you can imagine, this process can cause many problems in web-based applications.
                            Luckily, React uses virtual DOMs so you don't have to go through this issue. This tool allows you to create virtual DOMs and host them in a memory.
                            As a result, whenever there is a change in the real DOM, the virtual one also changes instantly. The system will prevent the real DOM from forcing continuous
                            updates. Thus, the speed of your application will not be interrupted.
                        </p>
                        <h1 className="text-slate-600 text-3xl font-bold text-slate-400 mt-10">
                            SEO Friendly
                        </h1>
                        <p className="text-slate-400 mt-2">
                            React allows you to create a user interface accessible in various search engines. This feature is very advantageous because not all JavaScript frameworks are SEO friendly.
                            Moreover, it can also boost your SEO rankings as it can speed up the implementation process of React. After all, the role of website speed in SEO optimization is very important.
                            But remember that React is just a JavaScript library. This means that he cannot do everything by himself.
                            The use of additional libraries may be required for status checking, routing and interaction.
                        </p>

                    </div>
                </>
            ,
        },
        {
            id: "11172022",
            title: "Vue JS",
            SeoTitle: "Vue JS - Front End Develoment | Glowres",
            keywords: ["Vuejs", "Javascript", "Front End Develoment", "Web Site Develoment"],
            description: "You can have modern and aesthetic websites with Vue JS. Vue JS for excellent websites in Front End Design",
            to: "/vue-js/11172022",
            content:
                <>

                    <br />
                    <br />
                    <div className="p-5">
                        <h1 className="text-slate-600 text-3xl font-bold text-slate-400">
                            What is Vue? How does it work?
                        </h1>
                        <p className="text-slate-400 mt-5">
                            JavaScript libraries help us build modern applications easily. Modern JavaScript applications are generally web-based,
                            but libraries are also widely used in both desktop and mobile applications today.
                            One of the most popular JS libraries are jQuery and Mootools. With the useful APIs they provide, they work in harmony with browsers and
                            contribute to obtaining very successful results. After the use of these libraries, React, Angular and Vue libraries gained popularity in the second wave.
                            These more up-to-date technologies have begun to be used seriously by software developers.
                        </p>
                        <h1 className="text-slate-600 text-2xl font-bold text-slate-400 mt-10">
                            How popular is VEU?
                        </h1>
                        <p className="text-slate-400 mt-2">
                            <ul>
                                <li>7,600 stars in 2016</li>
                                <li>36,700 stars in 2017</li>
                                <li>+100,000 stars in 2018</li>
                            </ul>

                        </p>
                        <p className="text-slate-400 italic border-x-4 border-primary-600 rounded-xl text-lg bg-gray-100 rounded-br-xl mt-10 p-3">
                            Nowadays, it is known that it is downloaded 350,000 times a day. This shows how widely the technology is used.
                        </p>
                        <h1 className="text-slate-600 text-2xl font-bold text-slate-400 mt-10">
                            Why do developers love VUE?
                        </h1>
                        <p className="text-slate-400 mt-2">
                            The first thing that comes to mind is that VUE.Js can adapt to the needs of the developer. While other frameworks have to be downloaded and used with all functions,
                            VUE starts with just a simple Script tag. And expands according to your need.
                            You can easily integrate VUE into an existing project or use it as a complete front-end project. The VUE core library has very small sizes. This library only focuses on the view part.
                            If http request, state management, routing etc. If you want to make transactions, you need to use the vue.js plugins, you can access it from the link below.
                        </p>
                        <h1 className="text-slate-600 text-2xl font-bold text-slate-400 mt-10">
                            What are the Features of VUE?
                        </h1>
                        <p className="text-slate-400 mt-2">
                            <ul>
                                <li>Easy and fast learning</li>
                                <li>Versatile and sustainable</li>
                                <li> Integration with existing library</li>
                                <li>Open source and free</li>
                                <li>Reactive structure</li>
                                <li>Adding needed features with plugins</li>
                                <li>High performance thanks to Virtual DOM</li>
                                <li> Ability to create your own Components</li>
                                <li>Chrome developer plugin</li>
                                <li>be testable</li>

                            </ul>
                        </p>
                        <h1 className="text-slate-600 text-2xl font-bold text-slate-400 mt-10">
                            What is Virtual DOM Structure?
                        </h1>
                        <p className="text-slate-400 mt-2">
                            The Victual DOM is a feature used by React, so that as changes are made, they happen in the structure of the DOM in memory, not directly in the DOM.
                            Afterwards, only the parts that have changed are updated by looking at the difference between the DOM and the DOM in memory.
                            Unchanged fields are not updated again, thus increasing performance.
                        </p>
                        <h1 className="text-slate-600 text-2xl font-bold text-slate-400 mt-10">
                            Better Performance with Virtual DOM
                        </h1>
                        <p className="text-slate-400 mt-2">
                            React will efficiently update the DOM (Document Object Model) operation. As you can imagine, this process can cause many problems in web-based applications.
                            Luckily, React uses virtual DOMs so you don't have to go through this issue. This tool allows you to create virtual DOMs and host them in a memory.
                            As a result, whenever there is a change in the real DOM, the virtual one also changes instantly. The system will prevent the real DOM from forcing continuous
                            updates. Thus, the speed of your application will not be interrupted.
                        </p>
                        <h1 className="text-slate-600 text-2xl font-bold text-slate-400 mt-10">
                            What does the Chrome Developer Plugin provide?
                        </h1>
                        <p className="text-slate-400 mt-2">
                            While working on the front-end, you can use console.log, alert etc. to debug and see the data in the model. We need to use it so that we try to log the data,
                            and this situation saves us a lot of time, instead, thanks to the Vue.js chome plugin, it offers the opportunity to instantly monitor and
                            change the data in your existing models. Don't forget to install the Vue.js plugin before that.
                            Briefly explaining the most basic features of the Vue.js core, it is known that the Framework family is a useful, fast and preferred technology by everyone.
                        </p>

                    </div>
                </>
            ,
        },
        {
            id: "11172023",
            title: "Html",
            SeoTitle: "Html - Web Site Design | Glowres",
            keywords: ["Html", "Css", "Front End Develoment", "Web Site Develoment"],
            description: "Html is the markup language used in website designs in the Front End Development Process.",
            to: "/html/11172023",
            content:
                <>

                    <br />
                    <br />
                    <div className="p-5">
                        <h1 className="text-slate-600 text-3xl font-bold text-slate-400">
                            What is PHP? Guide for Novices
                        </h1>
                        <p className="text-slate-400 mt-5">
                            Looking for a new programming language to learn? Or are you just wondering what PHP is ?
                            Whatever the reason, you've come to the right place.
                            Stay with us and learn what PHP is and what it does.
                        </p>
                        <h1 className="text-slate-600 text-3xl font-bold text-slate-400 mt-10">
                            What Does HTML Do?
                        </h1>
                        <p className="text-slate-400 mt-2">
                            HTML helps web designers create structure profiles, links, block quotes, paragraphs, and
                            headings for pages and applications. In this regard, web pages can be shaped by using tags and
                            attributes, which are simple code structures. HTML can actually be called the skeleton of a website.
                            In other words, the website cannot be coded without HTML codes.
                        </p>
                        <p className="text-slate-400 mt-2">
                            HTML, which must be used when creating websites and pages, is one of the easiest markup languages for beginners to learn.
                            You can improve yourself for a systematic study by taking HTML lessons, and you can try
                            the information you have learned at the stage of designing a web page.
                            Over time, you can learn more than you already have and have a say in website design.
                        </p>
                    </div>
                </>
            ,
        },
        {
            id: "11172024",
            title: "Php 7.4",
            SeoTitle: "Php - Web Site Design | Glowres",
            keywords: ["Php", "Back End Develoment", "Full Stack Develoment", "Developers"],
            description: "PHP is a back-end language used in back-end capture and data manipulation.",
            to: "/php-7-4/11172024",
            content:
                <>

                    <br />
                    <br />
                    <div className="p-5">
                        <h1 className="text-slate-600 text-3xl font-bold text-slate-400">
                            What is PHP? Guide for Novices
                        </h1>
                        <p className="text-slate-400 mt-5">
                            Looking for a new programming language to learn? Or are you just wondering what PHP is ? Whatever the reason, you've come to the right place.
                            Stay with us and learn what PHP is and what it does.
                        </p>
                        <h1 className="text-slate-600 text-3xl font-bold text-slate-400 mt-10">
                            Programming Languages
                        </h1>
                        <p className="text-slate-400 mt-5">
                            PHP (repeated abbreviation for PHP: Hypertext Preprocessor) is a subset of programming languages such as JavaScript and Python.
                            The difference is that PHP is usually used for server-side communication, while JavaScript is used for both frontend and backend.
                            Python, on the other hand, is used only for the client side (backend).
                            Confused? That's why we need to learn programming languages irst before we dig deeper into PHP.
                            A programming language is one that automates the execution of tasks in a custom execution environment.
                            This includes telling a static page (made with HTML and CSS) to take certain actions you've defined beforehand.
                            <br />
                            <br />
                            For example, before a form goes to the server, you can validate the form using a script to ensure that all fields are filled.
                            The script runs when a user submits the form and checks all the fields.
                            If one of the fields is empty, a warning message is displayed to inform the user.
                            Other common uses of programming languages are a drop-down list and rollover buttons when
                            the cursor hovers over the main menu, and to display animation, open dialog, etc.
                        </p>
                        <h1 className="text-slate-600 text-3xl font-bold text-slate-400 mt-10">
                            Server side vs Client side
                        </h1>
                        <p className="text-slate-400 mt-5">
                            Programming languages can run either on the client side (frontend) or on the server side (backend).
                            Client-side scripts are processed by web browsers. If your browser, that is, the client, requests a page with client-side scripts,
                            the server responds by sending source codes that are executable for the browser.
                            On the other hand, server-side programming language means that scripts are run on servers before sending them to browsers.
                            That is, before sending the source topic, the web servers process (decodes) the codes before converting them into a plain HTML format.
                            Therefore, server-side programming allows webmasters to store their source code, while client-side scripts allow users of the client to be easily seen.
                            Now that you understand the basics of programming languages, we can get back to our main question, What is PHP?
                        </p>
                        <h1 className="text-slate-600 text-3xl font-bold text-slate-400 mt-10">
                            So what is PHP?
                        </h1>
                        <p className="text-slate-400 mt-5">
                            Now we can answer the question of what is PHP.
                            As we mentioned before, PHP is a programming language created for server-side communications.
                            So collecting form data, managing files on the server, editing databases, etc. It can perform various server-side functions such as
                            <br />
                            <br />
                            This language was originally created by Rasmus Lerdorf to track visitors to his personal homepage.
                            As its popularity grew, Lerdorf eventually released PHP as an open source project.
                            This decision encouraged developers to use it, fix it, and improve the code.
                            Thus PHP eventually evolved into the programming language we use today.
                            <br />
                            <br />
                            Although PHP is seen as an all-purpose programming language, it is most commonly used for web development.
                            This is thanks to one of its great features, that it can be embedded in HTML files.
                            <br />
                            <br />
                            Let's say you don't want people to see your source code. It is possible to do this if it is a programming language.
                            Write the code in a PHP file, put it in an HTML file so no one can see the actual code.
                            <br />
                            <br />
                            Another benefit of this feature is that you can write the code in a PHP file instead of rewriting it when you need to use the same HTML markup frequently.
                            Place the PHP file every time you need to use HTML.
                            <br />
                            <br />
                            An example of the PHP page can be seen on Facebook. Open its homepage and you will see that the URL ends with .php (facebook.com/home.php).
                            In other words, this page is built with a PHP file (home.php) containing a mix of superior text preprocessor code and HTML tags.
                        </p>
                    </div>
                </>
            ,
        },
        {
            id: "11172025",
            title: "Tailwind Css",
            SeoTitle: "Tailwind Css - Web Site Design | Glowres",
            keywords: ["Tailwind Css", "Css", "Front End", "Html"],
            description: "Tailwind Css is a modern HTML and Css Library used for creating Modern website interfaces and UI.",
            to: "/tailwind-css/11172025",
            content:
                <>


                    <br />
                    <br />
                    <div className="p-5">
                        <div className="text-slate-600 text-2xl font-bold text-slate-400">
                            What is Tailwind CSS?
                        </div>
                        <p className="text-slate-400 mt-5">
                            Tailwind CSS is a CSS framework that prevents you from writing the most basic CSS uses from scratch or writing the same CSS over and over,
                            making the front-end developers' work much easier but not limiting their freedom.
                            <br />
                            <br />
                            As highlighted on the main page on the Tailwind CSS official site, Tailwind CSS is a CSS framework with which you can
                            quickly create modern websites without ever leaving your HTML code. Tailwind offers you more basic CSS patterns, not components like “buttons” or “tables”.
                            By assigning “btn btn-primary” classes to a button, instead of using a template design for that button, you create your button entirely yourself by assigning base classes.
                            <br />
                            <br />
                            In the code snippet below, an example of a button created with the bootstrap "btn btn-primary" class and tailwind created with the
                            tailwind "bg-blue-500 hover:bg-purple-dark text-white font-bold py-2 px-4 rounded" classes you see the equivalent.
                            <br />
                            <br />
                            Although we have to use a longer class list with tailwind (it can be shortened, but I won't talk about how to shorten it in the hello article),
                            it is possible to get better results from scratch by using base classes from scratch.
                        </p>
                    </div>
                </>
            ,
        },
        {
            id: "11172026",
            title: "Bootstrap",
            SeoTitle: "Bootstrap Css - Web Site Design | Glowres",
            keywords: ["Bootstrap Css", "Css", "Front End", "Html"],
            description: "Bootstrap Css is a modern HTML and Css Library used for creating Modern website interfaces and UI.",
            to: "/bootstrap/11172026",
            content:
                <>

                    <br />
                    <br />
                    <div className="p-5">
                        <h1 className="text-slate-600 text-3xl font-bold text-slate-400">
                            What is Bootstrap, what does it do?
                        </h1>
                        <p className="text-slate-400 mt-2">
                            Bootstrap is an open source and free web application development toolkit that consists of usable pieces of code.
                            Its CSS and JavaScript templates are used for components of websites and mobile applications that are visible to users.
                            Written in HTML, CSS, Less, Sass, and JavaScript, Bootstrap is an easy-to-learn alternative that can be used to develop
                            fully interactive and responsive web applications.
                        </p>
                        <h1 className="text-slate-600 text-3xl font-bold text-slate-400 mt-10">
                            What is Bootstrap?
                        </h1>
                        <p className="text-slate-400 mt-2">
                            Before examining Bootstrap, it's a good idea to take a closer look at what the front-end skeletons of web applications are.
                            These skeletons are the interface of an application with which users interact. HTML codes create the structure,
                            cascading style templates create the visual format, and JavaScript codes enable dynamic elements such as slides and drop-down menus.
                            Skeletons are the foundations on which websites are built. Bootstrap, a front-end framework and toolkit,
                            was developed by Twitter engineers Mark Otto and Jacob Thornton.
                            <br />
                            <br />
                            Its main purpose is to make it easy to make web applications fast,
                            convenient and more responsive. Bootstrap is currently the most popular CSS framework for developing responsive and mobile-first websites.
                            While it is a tremendous tool for building responsive and mobile-oriented websites, there is also a more compact,
                            faster and easier to use alternative called W3.CSS.
                        </p>
                        <h1 className="text-slate-600 text-3xl font-bold text-slate-400 mt-10">
                            Advantages of Bootstrap
                        </h1>
                        <p className="text-slate-400 mt-2">
                            Today, people use many different devices with various hardware features, operating systems, screen sizes and ways of interacting.
                            The compatibility of a website with all devices, from laptops to smartphones, has become a necessity nowadays.
                            <br />
                            <br />
                            The interface of websites created with Bootstrap automatically adapts to all screen sizes used today and tomorrow.
                            This compatibility means that a web page that looks neat in the desktop experience can be viewed and interacted with on a mobile device as well.
                        </p>
                    </div>
                </>
            ,
        },
        {
            id: "11172027",
            title: "Wordpress",
            SeoTitle: "Wordpress - Web Site Design | Glowres",
            keywords: ["Wordpress", "CMS", "Web Site Develoment"],
            description: "It is a web site content management tool with Wordpress CMS-based ready content management.",
            to: "/wordpress/11172027",
            content:
                <>


                    <br />
                    <br />
                    <div className="p-5">
                        <h1 className="text-slate-600 text-3xl font-bold text-slate-400">
                            What is WordPress?
                        </h1>
                        <p className="text-slate-400 mt-2">
                            WordPress is a “CMS” content management system, which allows users who have not designed a website before and do not know coding language to set up their own website.
                            Although many people know the answer to the question of what WordPress is, you may be a little confused about how it is used and what it does.
                            So, we wanted to eliminate all your confusion by taking Wp extensively. Let's take a closer look at what WordPress is, what it does and how to install it.
                        </p>
                        <h1 className="text-slate-600 text-3xl font-bold text-slate-400 mt-10">
                            What Is WordPress Basically?
                        </h1>
                        <p className="text-slate-400 mt-2">
                            WordPress, which emerged in 2003 with its simple interface, is a platform that allows you to easily set up your website.
                            Although it appeared as a simple blogging platform in the first years, it has developed new features with the development of the digital world and
                            has become the most popular content management system in the world. According to the world average, 1 of every 2 websites has WordPress infrastructure.
                            <br />
                            <br />
                            In the following years, the service offered to us developed and became a CMS written in PHP using MySQL (database system).
                            Wp is not just a site builder but helps you create and publish blogs of all shapes and sizes.
                            You can easily create many websites such as blogs, personal websites, e-commerce and social networks using Wp infrastructure.
                        </p>
                        <h1 className="text-slate-600 text-3xl font-bold text-slate-400 mt-10">
                            What Does WordPress Do?
                        </h1>
                        <p className="text-slate-400 mt-2">
                            The fact that WordPress is primarily open source and has a wide variety of customization options is very useful for us users.
                            The fact that this platform has endless plugins and various themes is very valuable for us.
                            However, you can set up your website(s) by taking advantage of the benefits of Wp for free!
                        </p>
                    </div>
                </>
            ,
        }
    ]
    const info = [
        {
            id: "01062022",
            title: "Web App & Design",
            SeoTitle: "Web Site Design - Front End Develoment | Glowres",
            keywords: ["Web Site Design", "Responsive", "Front End Develoment", " Web Site Develoment"],
            description: "I design websites based on what you want with flawless designs that are compatible with all modern and aesthetic devices",
            content:
                <>
                    <img src={Web} className="rounded-xl mb-5" alt="webdesing" />

                    <h1 className="text-slate-600 text-3xl font-bold text-slate-400 mt-10">
                        I Design Websites
                    </h1>
                    <p className="text-slate-400 mt-5">
                        I design websites based on what you want with flawless designs that are compatible with all modern and aesthetic devices, and I go through the front-end development process.
                        Since every design will be a reference, every new job has to be close to perfection for me.
                    </p>
                    <p className="text-slate-400 mt-5">
                        While equipping your requests with higher quality and modern coding languages, you can continue to monitor the rise and development of your project in the digital environment.
                        Flexibility is always important to me when considering delivery times. A job that should be completed in 1 month actually covers 2 weeks. The reason for the extension of 2 extra weeks;
                    </p>
                    <ul className="list-none mt-4">
                        <li className="mt-2 text-primary-600"><i className="mdi mdi-arrow-right text-primary-600 mr-2"></i>Security Tests</li>
                        <li className="mt-2 text-primary-600"><i className="mdi mdi-arrow-right text-primary-600 mr-2"></i>Compatibility</li>
                        <li className="mt-2 text-primary-600"><i className="mdi mdi-arrow-right text-primary-600 mr-2"></i>Debugging All Devices</li>
                        <li className="mt-2 text-primary-600"><i className="mdi mdi-arrow-right text-primary-600 mr-2"></i>Speed Tests</li>
                    </ul>
                    <p className="text-slate-400 mt-5">
                        must pass at least  <span className="text-primary-600 font-extrabold"> 90% </span> of the steps. Otherwise, if the customer gives up on doing the work, the fee is refunded or, if he requests,
                        an additional time is added to the project and the project is tried to be resolved during this period.
                    </p>
                </>
            ,
        },
        {
            id: "02062022",
            title: "Management Panel Design",
            SeoTitle: "Web Site Panel - Front End/Back End Develoment | Glowres",
            keywords: ["Admin Panel Design", "Responsive", "Back End Develoment", " Web Site Develoment"],
            description: "I design websites based on what you want with flawless designs that are compatible with all modern and aesthetic devices",
            content:
                <>
                    <img src={Panel} className="rounded-xl mb-5" alt="webdesing" />
                    <h1 className="text-slate-600 text-3xl font-bold text-slate-400 mt-10">
                        Web Site Panel - Front End/Back End Develoment
                    </h1>
                    <p className="text-slate-400 mt-5">
                        I design websites Admin Panel based on what you want with flawless designs that are compatible with all modern and aesthetic devices,
                        and I go through the Front End/Back End development process.
                        Since every design will be a reference, every new job has to be close to perfection for me.
                    </p>
                    <p className="text-slate-400 mt-5">
                        While equipping your requests with higher quality and modern coding languages, you can continue to monitor the rise and development of your project in the digital environment.
                        Flexibility is always important to me when considering delivery times. A job that should be completed in 1 month actually covers 2 weeks. The reason for the extension of 2 extra weeks;
                    </p>
                    <ul className="list-none mt-4">
                        <li className="mt-2 text-primary-600"><i className="mdi mdi-arrow-right text-primary-600 mr-2"></i>Security Tests</li>
                        <li className="mt-2 text-primary-600"><i className="mdi mdi-arrow-right text-primary-600 mr-2"></i>Compatibility</li>
                        <li className="mt-2 text-primary-600"><i className="mdi mdi-arrow-right text-primary-600 mr-2"></i>Debugging All Devices</li>
                        <li className="mt-2 text-primary-600"><i className="mdi mdi-arrow-right text-primary-600 mr-2"></i>Speed Tests</li>
                    </ul>
                    <p className="text-slate-400 mt-5">
                        must pass at least  <span className="text-primary-600 font-extrabold"> 90% </span> of the steps. Otherwise, if the customer gives up on doing the work, the fee is refunded or, if he requests,
                        an additional time is added to the project and the project is tried to be resolved during this period.
                    </p>
                </>
            ,
        },
        {
            id: "03062022",
            title: "Motion Graphic Design",
            SeoTitle: "Motion Graphic Design - Video Animation | Glowres",
            keywords: ["Motion Graphic Design", "Video Animation", "Advertisement", "Instagram Story"],
            description: "I design websites based on what you want with flawless designs that are compatible with all modern and aesthetic devices",
            content:
                <>

                    <img src={Video} className="rounded-xl mb-5" alt="webdesing" />
                    <h1 className="text-slate-600 text-3xl font-bold text-slate-400 mt-10">
                        I Can Do Motion Graphics Design
                    </h1>
                    <p className="text-slate-400 mt-5">
                        I design video animations and product promotions for instagram, facebook, google Ads to promote your products and company.
                        Today's indispensable advertisements are the most effective of the product promotion types that attract attention with their most crucial features.
                        I can design any ad you want with After Effects or Premier Pro. Or I can arrange a template you have already purchased and make it suitable for you.
                    </p>
                    <p className="text-slate-400 mt-5">
                        If the work you want is close to your dreams, the revision is not important. I can show flexibility in this regard.
                    </p>
                    <p className="text-slate-400 mt-5">
                        While dealing with software for many years, I was also fascinated by the deep world of video animation projects.
                        I must have been interested in the wonderful projects made with After effects.
                        I love <span className="text-primary-600"><Link to="/web-app-&-design/01062022"> Web Software and Designs <FontAwesomeIcon icon={faUpRightFromSquare} style={{ height: "12px", width: "12px" }} /></Link></span>.
                        While I was getting a new hobby, I couldn't give up on my main job, so I chose to do Motion Video Designer as a hobby.
                        However, with many years, the return for me was obviously too much. I learned a lot and made a lot of money from this business.

                    </p>
                    <p className="text-slate-400 mt-5">
                        Frankly, as a web developer, I did not think of making money from video content. However, at the last point reached,
                        the fact that my work has great potential and that it was appreciated was also appreciated in animated video design.

                        I can use this ability for you.I have done big projects for many companies from time to time and all of them received
                        the praise they deserve.
                    </p>
                </>
            ,
        },
    ]
    const expe = [
        {
            id: "01202022",
            title: "Ux & Ui Design",
            SeoTitle: "Web Site Panel - Front End/Back End Develoment | Glowres",
            keywords: ["123123", "key2", "key3", "key4"],
            description: "",
            content:
                <>
                    <h1 className="text-slate-600 text-3xl font-bold text-slate-400">
                        I Design Websites
                    </h1>
                    <p className="text-slate-400 mt-5">
                        I design websites based on what you want with flawless designs that are compatible with all modern and aesthetic devices, and I go through the front-end development process.
                        Since every design will be a reference, every new job has to be close to perfection for me.
                    </p>
                </>
            ,
        },
        {
            id: "02202022",
            title: "Web Application",
            SeoTitle: "Web Site Panel - Front End/Back End Develoment | Glowres",
            keywords: ["key1", "key2", "key3", "key4"],
            description: "",
            content:
                <>
                    <h1 className="text-slate-600 text-3xl font-bold text-slate-400">
                        Web Application
                    </h1>
                    <p className="text-slate-400 mt-5">
                        I design websites based on what you want with flawless designs that are compatible with all modern and aesthetic devices, and I go through the front-end development process.
                        Since every design will be a reference, every new job has to be close to perfection for me.
                    </p>
                    <h1 className="text-slate-600 text-3xl font-bold text-slate-400 mt-10">
                        I Design Websites
                    </h1>
                    <p className="text-slate-400 mt-5">
                        I design websites based on what you want with flawless designs that are compatible with all modern and aesthetic devices, and I go through the front-end development process.
                        Since every design will be a reference, every new job has to be close to perfection for me.
                    </p>
                </>
            ,
        },
        {
            id: "03202022",
            title: "Admin Panel",
            SeoTitle: "Admin Panel - Front End/Back End Develoment | Glowres",
            keywords: ["key1", "key2", "key3", "key4"],
            description: "",
            content:
                <>
                    <h1 className="text-slate-600 text-3xl font-bold text-slate-400">
                        Admin Panel
                    </h1>
                    <p className="text-slate-400 mt-5">
                        I design websites based on what you want with flawless designs that are compatible with all modern and aesthetic devices, and I go through the front-end development process.
                        Since every design will be a reference, every new job has to be close to perfection for me.
                    </p>
                    <h1 className="text-slate-600 text-3xl font-bold text-slate-400 mt-10">
                        I Design Websites
                    </h1>
                    <p className="text-slate-400 mt-5">
                        I design websites based on what you want with flawless designs that are compatible with all modern and aesthetic devices, and I go through the front-end development process.
                        Since every design will be a reference, every new job has to be close to perfection for me.
                    </p>
                </>
            ,
        },
        {
            id: "04202022",
            title: "Database Setup",
            SeoTitle: "Web Site Panel - Front End/Back End Develoment | Glowres",
            keywords: ["key1", "key2", "key3", "key4"],
            description: "",
            content:
                <>
                    <h1 className="text-slate-600 text-3xl font-bold text-slate-400">
                        Database Setup
                    </h1>
                    <p className="text-slate-400 mt-5">
                        I design websites based on what you want with flawless designs that are compatible with all modern and aesthetic devices, and I go through the front-end development process.
                        Since every design will be a reference, every new job has to be close to perfection for me.
                    </p>
                    <h1 className="text-slate-600 text-3xl font-bold text-slate-400 mt-10">
                        I Design Websites
                    </h1>
                    <p className="text-slate-400 mt-5">
                        I design websites based on what you want with flawless designs that are compatible with all modern and aesthetic devices, and I go through the front-end development process.
                        Since every design will be a reference, every new job has to be close to perfection for me.
                    </p>
                </>
            ,
        },
        {
            id: "05202022",
            title: "Wordpress Sites",
            SeoTitle: "Web Site Panel - Front End/Back End Develoment | Glowres",
            keywords: ["key1", "key2", "key3", "key4"],
            description: "",
            content:
                <>
                    <h1 className="text-slate-600 text-3xl font-bold text-slate-400">
                        Wordpress Sites
                    </h1>
                    <p className="text-slate-400 mt-5">
                        I design websites based on what you want with flawless designs that are compatible with all modern and aesthetic devices, and I go through the front-end development process.
                        Since every design will be a reference, every new job has to be close to perfection for me.
                    </p>
                    <h1 className="text-slate-600 text-3xl font-bold text-slate-400 mt-10">
                        I Design Websites
                    </h1>
                    <p className="text-slate-400 mt-5">
                        I design websites based on what you want with flawless designs that are compatible with all modern and aesthetic devices, and I go through the front-end development process.
                        Since every design will be a reference, every new job has to be close to perfection for me.
                    </p>
                </>
            ,
        },
        {
            id: "06202022",
            title: "Plug In Design",
            SeoTitle: "Web Site Panel - Front End/Back End Develoment | Glowres",
            keywords: ["key1", "key2", "key3", "key4"],
            description: "",
            content:
                <>
                    <h1 className="text-slate-600 text-3xl font-bold text-slate-400">
                        Plug In Design
                    </h1>
                    <p className="text-slate-400 mt-5">
                        I design websites based on what you want with flawless designs that are compatible with all modern and aesthetic devices, and I go through the front-end development process.
                        Since every design will be a reference, every new job has to be close to perfection for me.
                    </p>
                    <h1 className="text-slate-600 text-3xl font-bold text-slate-400 mt-10">
                        I Design Websites
                    </h1>
                    <p className="text-slate-400 mt-5">
                        I design websites based on what you want with flawless designs that are compatible with all modern and aesthetic devices, and I go through the front-end development process.
                        Since every design will be a reference, every new job has to be close to perfection for me.
                    </p>
                </>
            ,
        },
    ]

    const [back, setBack] = useState(0);
    const [next, setNext] = useState(0);
    function BackActiveBtn() { setBack(1) }
    function BackPasiveBtn() { setBack(0) }
    function NextActiveBtn() { setNext(1) }
    function NextPasiveBtn() { setNext(0) }

    const { id } = useParams();
    const nextId = parseInt(id) + 1;
    const backId = parseInt(id) - 1;
    return (
        <>
            {tech.filter(item => item.id === id).map(filter => (
                <div key={filter.id}>
                    <Seo
                        Pagetitle={filter.SeoTitle}
                        Pagedescription={filter.description}
                        Pagekeywords={filter.keywords}
                    />

                    <section className="relative table w-full py-24 pb-0 lg:py-24 lg:pb-0" style={{ background: `url(${require('../assets/img/hero/bg.png')}) center center no-repeat`, backgroundColor: "#4f46e5" }}>
                        <div className="container">
                            <div className="grid grid-cols-1 text-center mt-2">
                                <h3 className="md:text-3xl md:leading-normal text-white text-2xl  leading-normal font-semibold">{filter.title}</h3>
                            </div>
                        </div>
                        <div className="mb-8 text-center z-10 pb-5 bottom-5 right-0 left-0 pt-5 mx-3">
                            <ul className="breadcrumb breadcrumb-light mb-0 inline-block">
                                <li className="inline breadcrumb-item capitalize"><Link to='/'>Glowres</Link></li>
                                <li className="inline breadcrumb-item"><a ><FontAwesomeIcon icon={faCaretRight} /></a></li>
                                <li className="inline breadcrumb-item active capitalize " aria-current="page">{filter.title}</li>
                            </ul>
                        </div>
                    </section>
                    <div className="relative">
                        <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
                            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>


                    <section className="relative md:py-24 py-16">
                        <div className="container">
                            <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-2xl">

                                <section className="relative table w-full py-2 lg:py-36 grid grid-cols-2 gap-4 place-content-center p-5" style={{ background: `url(${Cover}) center center no-repeat`, minHeight: "170px" }}>
                                    <div className="w-full align-middle p-5">
                                        <h3 className="lg:text-5xl  ml-5 text-2xl text-center md:leading-normal leading-normal  font-medium text-white">Wordpress</h3>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <div className="w-full align-middle" hidden>
                                        <div className="float-left">
                                            <Link to={tech.filter(item => parseInt(item.id) === backId).map(filter => (filter.to))}
                                                onMouseOver={BackActiveBtn} onMouseOut={BackPasiveBtn} className="float-left  cursor-pointer p-2 rounded-full  text-white bg-white hover:bg-white hover:text-primary-600 hover:scale-120 transition-all duration-250">
                                                <FontAwesomeIcon icon={faCaretLeft} className="w-6 h-4 hover:scale-140 transition-all duration-250 text-primary-600" />
                                            </Link>
                                            <div className={`float-left ${back === 0 ? ("opacity-0 py-2 ml-2") : ("ml-50 transition-all py-2 duration-350 ease-in-out")}`}>
                                                <span className="font-normal float-left text-gray-600 mr-2">
                                                    Previous Title
                                                </span>
                                                <span className="font-bold float-left text-primary-600">
                                                    {tech.filter(item => parseInt(item.id) === backId).map(filter => (filter.title))}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="float-right">
                                            <Link to={tech.filter(item => parseInt(item.id) === nextId).map(filter => (filter.to))}
                                                onMouseOver={NextActiveBtn} onMouseOut={NextPasiveBtn} className="float-right cursor-pointer p-2 rounded-full  text-white bg-white hover:bg-white hover:text-primary-600 hover:scale-120 transition-all duration-250">
                                                <FontAwesomeIcon icon={faCaretRight} className="w-6 h-4 hover:scale-120 transition-all duration-250 text-primary-600" />
                                            </Link>
                                            <div className={`float-right  ${next === 0 ? ("opacity-0 py-2 mr-2") : ("mr-50 transition-all py-2 duration-350 ease-in-out")}`} >
                                                <span className="font-bold float-right text-primary-600">
                                                    {tech.filter(item => parseInt(item.id) === nextId).map(filter => (filter.title))}
                                                </span>
                                                <span className="font-normal float-right text-gray-600 mr-2">
                                                    Next Title
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </section>


                                <div style={{ marginTop: "2px" }}>
                                    {filter.content}
                                </div>
                                <Keywords value={filter.keywords} />
                            </div>
                        </div>
                    </section>
                </div>


            ))}
            {info.filter(item => item.id === id).map(filter => (
                <div key={filter.id}>
                    <Seo
                        Pagetitle={filter.SeoTitle}
                        Pagedescription={filter.description}
                        Pagekeywords={filter.keywords}
                    />
                    <section className="relative table w-full py-36 pb-0 lg:py-24 lg:pb-0" style={{ background: `url(${require('../assets/img/hero/bg.png')}) center center no-repeat`, backgroundColor: "#4f46e5" }}>
                        <div className="container">
                            <div className="grid grid-cols-1 text-center mt-2">
                                <h3 className="md:text-3xl md:leading-normal text-white text-2xl leading-normal font-semibold">{filter.title}</h3>
                            </div>
                        </div>
                        <div className="mb-8 text-center z-10 pb-5 bottom-5 right-0 left-0 mx-3">
                            <ul className="breadcrumb breadcrumb-light mb-0 inline-block">
                                <li className="inline breadcrumb-item capitalize"><Link to='/'>Glowres</Link></li>
                                <li className="inline breadcrumb-item"><a ><FontAwesomeIcon icon={faCaretRight} /></a></li>
                                <li className="inline breadcrumb-item active capitalize " aria-current="page">{filter.title}</li>
                            </ul>
                        </div>
                    </section>
                    <div className="relative">
                        <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
                            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                    <section className="relative md:py-24 py-16">
                        <div className="container">
                            <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-2xl">
                                {filter.content}
                                <Keywords value={filter.keywords} />
                            </div>
                        </div>
                    </section>
                </div>
            ))}
            {expe.filter(item => item.id === id).map(filter => (
                <div key={filter.id}>
                    <Seo
                        Pagetitle={filter.SeoTitle}
                        Pagedescription={filter.description}
                        Pagekeywords={filter.keywords}
                    />
                    <section className="relative table w-full py-36 pb-0 lg:py-24 lg:pb-0" style={{ background: `url(${require('../assets/img/hero/bg.png')}) center center no-repeat`, backgroundColor: "#4f46e5" }}>
                        <div className="container">
                            <div className="grid grid-cols-1 text-center mt-2">
                                <h3 className="md:text-3xl md:leading-normal text-white text-2xl leading-normal font-semibold">{filter.title}</h3>
                            </div>
                        </div>
                        <div className="mb-8 text-center z-10 pb-5 bottom-5 right-0 left-0 mx-3">
                            <ul className="breadcrumb breadcrumb-light mb-0 inline-block">
                                <li className="inline breadcrumb-item capitalize"><Link to='/'>Glowres</Link></li>
                                <li className="inline breadcrumb-item"><a ><FontAwesomeIcon icon={faCaretRight} /></a></li>
                                <li className="inline breadcrumb-item active capitalize " aria-current="page">{filter.title}</li>
                            </ul>
                        </div>
                    </section>
                    <div className="relative">
                        <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
                            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                    <section className="relative md:py-24 py-16">
                        <div className="container">
                            <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-2xl">
                                <div className="p-3">{filter.content}</div>
                                <Keywords value={filter.keywords} />
                            </div>
                        </div>
                    </section>
                </div>
            ))}



        </>
    )
}
export default Detail;