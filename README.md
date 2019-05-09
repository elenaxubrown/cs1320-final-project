Underground Syrian Hospital Website Statement:

This document explains how to build and run the code of this project and its organization (e.g. folder and file structure). Its purpose is to provide enough information for a third-party individual to run and modify our code themselves. This handin is also for record-keeping purposes. 

This is our final project statement for the Underground Syrian Women & Children's Hospital Website in Brown's CSCI 1320 course. The members of this project's team include Weiqi Pan (wpan4), Yiquan Xu (yxu73), and Naomi Lee (nlee16).

In our final project, we used HTML/CSS/JS to complete the frontend part and PHP to achieve the backend. To open this web application locally, simply open the index.html, the home page of this website, in a web browser of the user’s choosing. Due to our client’s limited budgeting, we are currently using a borrowed server to temporarily host the website, which can be accessed through the link https://www.meetyourwaifu.com/final/. Unfortunately, this link will be closed at the end of the semester. 

In the navigation bar, users can clearly discern the five different sections of this web app: Home, About (with sub-navigation bar sections), Events, Story (with sub-navigation bar sections), and Contact. 

On the Home page, we implemented the functionalities that are important for users and required by the client. The users can go to the organization’s donation page on Facebook by simply clicking the “Donate Now” button, which is important for the NGO’s fundraising. There is news feed beneath the “Latest News” header, which is updated every 15 minutes. The news updates are fetched from https://newsapi.org/, by filtering with keywords related to “Syrian War”. Any further details of news articles can be viewed by clicking the titles of the news’ headlines, which leads the user to the specific news article on a third-party news site. Above and below the article’s headline shows the date, time, and the news source, such as BBC, CNN, or YAHOO. 

On the About page, users can click the navigation bar to jump to the specific part of the organization the users want to learn more about, such as SIMRO Project, Avicenna Progress, and Media Flow. It also includes a sign-up button linked to a Google form, which enables the user to receive a monthly email containing updated news on the Syrian War and SIMRO. Immediately, once the user signs up using the Google form, they will receive a thank-you letter; also, an automatic Excel spreadsheet will be updated with the user’s email address from the Google form. 

On the Events page, users can view the latest events on the Syrian War and SIMRO. The client could update the images and context in each section manually. 

On the Story page, users can learn more about the founder, Dr. Khaled Almilaji, and the Syrian War. Embedded in the background on the Syrian War is a Google Maps API, implemented using JS, pinpointing Syria with a location marker. The users could feel more connected with the people in Syria from Google map which would give the users have a geographical sense of the location. 

On the Contact page, the user can write anything they would like to say in the input box labeled “Message”, which would be sent to our email address. This function was implemented using PHP. 

The folders inside the project folder include the 6 HTML pages, CSS folder, fonts folder, img folder, JS folder, PHP folder, SCSS folder and README. 

The CSS folder is comprised of all CSS files we have built. We used Bootstrap to build the frame. The main.css file contains the code showing how we structured our websites. Basically, each separate page is divided into three parts: a header, body, and footer. In the header part, we created a black-and-white linear gradient containing a navigation bar. As the user scrolls down the page, this navigation bar remains sticky and fixed. We also utilized Image Fluid and Carousel, allowing a given image in any section to adjust according to the formatting of the parent element. When a user clicks the donate or sign-up button, s/he/they can observe a change in the button as the mouse hovers over it: the font becomes italicized, and the colors of the text and button’s background interchange. 

In the JS folder, we implemented several functions, primarily in the main.js file. The navigation bar’s color will change as we scroll down the web page. Also, to make the website compatible on different mobile devices, we wrote a function to shrink the nav bar elements to one single icon when the screen is small enough. In fetch_data.js file, similarly to our data fetching in Assignment 2, we fetch the data from the newsapi.org, which is used in the “Latest News” portion on the home page.

