# bolt-iot-location-tracker


<div class="wp-block-image"><figure class="aligncenter size-large"><img src="http://projectsubmission.boltiot.com/wp-content/uploads/2021/03/20210331_174012-1024x498.jpg" alt="" class="wp-image-3941"/></figure></div>



<h2>STORY</h2>



<p>Imagine how convenient it would be to have a device that sends in your location to your family/loved ones on the fly. The instances where such a device comes handy is vast. The project simply sends in your location as an SMS to the number you have inputted.</p>



<h2>Things used in this project</h2>



<h3>Hardware components</h3>



<ol><li>Bolt IoT module</li><li>TTP223 touch sensor</li><li>Connecting wires</li><li>Breadboard(to hold the sensor in place)</li></ol>



<h3>Software tools and services</h3>



<ol><li>VS Code(IDE): <a rel="noreferrer noopener" href="https://code.visualstudio.com/download" target="_blank">https://code.visualstudio.com/download</a></li><li>Node JS(Back-end language): <a rel="noreferrer noopener" href="https://nodejs.org/en/download/" target="_blank">https://nodejs.org/en/download/</a></li><li>Bolt API: <a rel="noreferrer noopener" href="https://docs.boltiot.com/docs/api-request-syntax" target="_blank">https://docs.boltiot.com/docs/api-request-syntax</a></li><li>Twilio(SMS service): <a rel="noreferrer noopener" href="https://www.twilio.com/login" target="_blank">https://www.twilio.com/login</a></li><li>Bootstrap(CSS framework): <a rel="noreferrer noopener" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank">https://getbootstrap.com/docs/5.0/getting-started/introduction/</a></li></ol>



<h2>Hardware setup</h2>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized"><img src="http://projectsubmission.boltiot.com/wp-content/uploads/2021/03/20210328_210713-647x1024.jpg" alt="" class="wp-image-3813" width="235" height="371"/><figcaption>When you have your touch sensor facing in this manner, the holes from left to right are VCC, I/O and GND respectively(The pin specifications are mentioned at the back of the sensor too).</figcaption></figure></div>
<br>

<ul><li>Connect the VCC hole of the sensor to the 5V pin of the Bolt IoT module.</li><li>Connect the I/O hole of the sensor to digital pin 1 of the module.</li><li>Finally, Connect the GND hole to the GND pin of the module and Voila! The hardware part of the project is ready.</li></ul>



<h2>Software setup</h2>



<p><strong>STEP 1</strong>: To install Node JS and VS code on your Windows system, you can follow this video: <a href = "https://youtu.be/JINE4D0Syqw">Node js setup</a></p>

<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">

</div></figure><br>



<p><strong>STEP 2</strong>: If you have not worked with Node JS or Express before, I would suggest going through this tutorial to help you set your project up:</p>



<ul><li><a rel="noreferrer noopener" href="https://www.twilio.com/docs/usage/tutorials/how-to-set-up-your-node-js-and-express-development-environment" target="_blank">https://www.twilio.com/docs/usage/tutorials/how-to-set-up-your-node-js-and-express-development-environment</a></li></ul>



<p>Additionally, you may look for other sources of information to deepen your understanding on them.</p>
<br>


<p class="has-text-align-left"><strong> STEP 3</strong>: Here is a list of npm packages you should download in the       project directory through your terminal with the command:  </p>



<p class="has-text-align-center"><code>npm install "package-name"</code> (no double quotes)</p>



<ul><li>express <a rel="noreferrer noopener" href="https://www.npmjs.com/package/express" target="_blank">https://www.npmjs.com/package/express</a></li><li>body-parser <a rel="noreferrer noopener" href="https://www.npmjs.com/package/body-parser" data-type="URL" data-id="https://www.npmjs.com/package/body-parser" target="_blank">https://www.npmjs.com/package/body-parser</a></li><li>dotenv <a rel="noreferrer noopener" href="https://www.npmjs.com/package/dotenv" target="_blank">https://www.npmjs.com/package/dotenv</a></li><li>axios <a rel="noreferrer noopener" href="https://www.npmjs.com/package/axios" target="_blank">https://www.npmjs.com/package/axios</a></li><li>ejs <a rel="noreferrer noopener" href="https://www.npmjs.com/package/ejs" target="_blank">https://www.npmjs.com/package/ejs</a></li><li>twilio <a rel="noreferrer noopener" href="https://www.twilio.com/docs/sms/quickstart/node" target="_blank">https://www.twilio.com/docs/sms/quickstart/node</a></li><li>node-cron <a href="https://www.npmjs.com/package/node-cron" target="_blank" rel="noreferrer noopener">https://www.npmjs.com/package/node-cron</a></li></ul>


<br>
<p><strong>STEP 4</strong>: Create two new directories(<strong>views</strong> and <strong>public</strong>) in the main project directory. The <strong>views</strong> folder contains all the files with <strong>.ejs</strong> extension and the<strong> public </strong>folder consists of the static files.(<strong>NOTE</strong>: do not change the names of these directories)</p>



<ul><li>The <strong>views</strong> folder contains <strong>index.ejs</strong> and <strong>home.ejs</strong></li><li>The public folder contains <strong>styles.css</strong></li></ul>



<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://projectsubmission.boltiot.com/wp-content/uploads/2021/03/Annotation-2021-03-31-124953.png" alt="" class="wp-image-3928"/></figure></div>



<p>In the directory tree above, </p>



<ul><li><strong>Tracker</strong>2 is the name of the project directory</li><li><strong>index.js</strong> is the main JavaScript file that houses the back-end code</li><li><strong>.env</strong> is used to store environment variables</li><li><strong>package.json </strong>file<strong>, package-lock.json </strong>file<strong> and node_modules</strong> directory are automatically created when you initialize the project and install the npm packages</li></ul>


<br>
<p><strong>STEP 5</strong>: In the <strong>.env</strong> file, replace the placeholders with your data. To get your Bolt Device ID and API key, have a look at the images below:</p>



<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://projectsubmission.boltiot.com/wp-content/uploads/2021/03/Annotation-2021-03-29-230939-1024x354.png" alt="" class="wp-image-3852"/><figcaption>Click 'API' on the left and copy the key</figcaption></figure></div>



<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://projectsubmission.boltiot.com/wp-content/uploads/2021/03/Annotation-2021-03-29-230938-1024x491.png" alt="" class="wp-image-3854"/><figcaption>Click on 'Devices' and copy the ID</figcaption></figure></div>



<p>To get the SID and AUTH token from Twilio, login to your Twilio account and follow the image below: </p>



<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://projectsubmission.boltiot.com/wp-content/uploads/2021/03/Annotation-2021-03-29-230940-1024x663.png" alt="" class="wp-image-3855"/><figcaption>Copy your SID and token from the dashboard. Also save the phone number as you will be needing it later.</figcaption></figure></div>



<p>Now, replace the values obtained above to these placeholders in the <strong>.env</strong> file. Code: </p>



<pre class="wp-block-code"><code>//.env file

TWILIO_ACCOUNT_SID=Your Twilio SID
TWILIO_AUTH_TOKEN=Your Twilio auth token
DEVICE_ID=Your Bolt Device's ID
DEVICE_API=Your Bolt API key
//Make sure you don't have spaces in between and no quotes</code></pre>

<br>

<p class="has-text-align-left"><strong>STEP 6:</strong> The <strong>index.js</strong> file(entry point of the node JS  application) has the following code:</p>



<ul><li><strong>index.js </strong><a rel="noreferrer noopener" href="https://gist.github.com/rishabhAjay/58bb7651117fe4c8f89584ef7e4a8460" target="_blank">https://gist.github.com/rishabhAjay/58bb7651117fe4c8f89584ef7e4a8460</a></li></ul>



<p>Similarly, the code for <strong>index.ejs, home.ejs </strong>and<strong> styles.css</strong> is given below:</p>



<ul><li><strong>index.ejs</strong> <a rel="noreferrer noopener" href="https://gist.github.com/rishabhAjay/9e4ac42bb28f4026567aaacfefba735f" target="_blank">https://gist.github.com/rishabhAjay/9e4ac42bb28f4026567aaacfefba735f</a></li><li><strong>home.ejs</strong> <a rel="noreferrer noopener" href="https://gist.github.com/rishabhAjay/86da505545b9c01891daf5ee919cbada" target="_blank">https://gist.github.com/rishabhAjay/86da505545b9c01891daf5ee919cbada</a></li></ul>



<pre class="wp-block-code"><code>//styles.css 
.mainBody {
    display: flex;
    flex-direction: column;
    align-items: center;
}</code></pre>



<p>To start your server locally, use <code>node index.js</code> in your terminal and head over to <strong>http://localhost:3000</strong> on a web browser(preferably <strong>Chrome</strong>)</p>



<h3>Interface guide</h3>



<ul><li>When you go to the <strong>http://localhost:3000</strong>, you get the page to check whether your device is online or not.</li></ul>



<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://projectsubmission.boltiot.com/wp-content/uploads/2021/03/Annotation-2021-03-31-125536-1024x481.png" alt="" class="wp-image-3930"/></figure></div>



<ul><li>If your Bolt device is offline, a message pops up. </li></ul>



<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://projectsubmission.boltiot.com/wp-content/uploads/2021/03/Annotation-2021-03-31-125537-1024x486.png" alt="" class="wp-image-3931"/><figcaption>Device offline</figcaption></figure></div>



<ul><li>If it is online, you are redirected to a new page which asks you for the <strong>Twilio</strong> phone number and <strong>your</strong> number. You will be required to fill in <strong>all </strong>the details and <strong>check the radio button</strong>. The phone numbers should start with <strong>+17 and +91</strong> respectively.</li></ul>



<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://projectsubmission.boltiot.com/wp-content/uploads/2021/03/Annotation-2021-03-31-125538-1024x484.png" alt="" class="wp-image-3932"/></figure></div>



<ul><li>After you are done entering the details, you will be redirected to a new page which <strong>MUST BE KEPT ACTIVE</strong> until you want the instance to end by clicking the <strong>"off"</strong> <strong>button</strong>. You must not <strong>QUIT</strong>, <strong>GO BACK</strong> or <strong>RELOAD</strong> the page. Since a <strong>cron job</strong> is running for the particular instance, it must be<strong> terminated</strong> by clicking the <strong>"off" button</strong>. You <strong>should</strong> keep the browser idle on this page <strong>until you want to switch the tracker off</strong>.</li><li>If in case you forgot to terminate the cron job or have multiple cron jobs running, you have to<strong> quit</strong> your local server(<strong>CTRL + C</strong>) and start over.</li></ul>



<div class="wp-block-image"><figure class="aligncenter size-large"><img src="https://projectsubmission.boltiot.com/wp-content/uploads/2021/03/Annotation-2021-03-31-125539-1024x484.png" alt="" class="wp-image-3933"/><figcaption>SWITCHING the tracker OFF after use is mandatory</figcaption></figure></div>



<ul><li>You will be redirected to the first page after clicking the <strong>"off" button</strong></li></ul>



<h3>Points to remember</h3>



<p><strong>-</strong> <strong>Make sure you don't click the BACK, QUIT or RELOAD buttons on your browser after starting the instance. You may end up creating multiple such instances which will cause a mess</strong>.</p>



<p><strong>-</strong> <strong>Always SWITCH the tracker OFF and then quit the browser so that no instance is left hanging.</strong></p>



<p><strong>- If you wish to keep sending your location via the SMS and keep the sensor active, keep the browser IDLE after you initiate the instance(i.e. on the page that lets you switch OFF the tracker).</strong></p>



<p><strong>- The project utilizes JavaScript's built-in geolocation services so this project does not require a GPS module.</strong></p>



<h2>Demo of the project</h2>



<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
https://youtu.be/dWXDC8owJAk
</div></figure>



<p>To deploy your web application, you can use heroku or any other deploying service. You can follow this documentation to deploy your website on heroku: <a href="https://devcenter.heroku.com/articles/getting-started-with-nodejs" data-type="URL" data-id="https://devcenter.heroku.com/articles/getting-started-with-nodejs" target="_blank" rel="noreferrer noopener">https://devcenter.heroku.com/articles/getting-started-with-nodejs</a></p>



<h2>Conclusion</h2>



<p>In this project, we integrated a node.js web application with Bolt API(source: <a rel="noreferrer noopener" href="https://forum.boltiot.com/t/support-for-node-js/17092/2?u=rishabhajay24" data-type="URL" data-id="https://forum.boltiot.com/t/support-for-node-js/17092/2?u=rishabhajay24" target="_blank">https://forum.boltiot.com/t/support-for-node-js/17092/2?u=rishabhajay24</a>) and built a prototype which sends your location to your friends/family with just a touch via a web application interface.</p>

<p>Any suggestions or improvements to the web application are welcome.</p>

