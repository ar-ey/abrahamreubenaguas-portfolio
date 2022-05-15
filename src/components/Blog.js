import React from "react";
import "../assets/css/blog.css"

export default function Blog() {
    return (
        <main className="blog">
            <h1>Essentiality of the UI design in a website</h1>
            <br /><br />

            <section>
                <h3>What is UI?</h3>
                <p>
                    The user interface design is an essential part of a website and should not be done merely. This part of the website is the first one that the user will see whenever he visits a site. A UI design needs to get the user's attention to gain visitors. The user interface design of the website will also give excitement to the user, which will lead them to explore more of your site.
                </p>

                <br /><p>
                    In creating and designing the UI design for a website, it is not enough that it is appealing to the eye of the user. It should also be user-friendly, and the navigation must always be accessible to help the user navigate throughout the site.

                </p>
            </section>


            <section>
                <br />
                <h3>Relevant elements</h3>
                <p>
                    Relevant elements in a website should always be accessible. These elements are the search field, login, contact, and other features needed in the website type you'll be doing.
                </p>
                <br />
            </section>

            <section>
                <h3>Website theme</h3>
                <p>
                    The theme of the UI design you will create should be aligned with the type of website you will be doing. When you create a website for kids, make sure you add bright colors because this brings energy and excitement that pleases kids. When creating UI for websites related to food, colors yellow, red, and colors related to them are recommended because these colors express joy and excitement that we also feel when we eat.
                </p>
                <br />
            </section>

            <section>
                <h3>Choosing the color and CTAs</h3>
                <p>
                    You should not merely choose a color for an element because each color represents a different meaning. Examples of these are the colors red and green. Red is used mainly in displaying error messages and warnings. The color green is primarily used when a success message is displayed. It is also used in actions involving money. Colors should be bright and eye-catching when creating CTAs or Call to action buttons because these buttons represent major actions and should not be overlooked.
                </p>
                <br />
            </section>

            <section>
                <h3>Whitespaces and Balance</h3>
                <p>
                    Users should be able to understand the UI design. How will they understand it? Users should not be overwhelmed with the contents displayed on the screen. Make sure it is balanced by avoiding placing too many elements in one place. Also, do not forget to white spaces for every element as these act as breathing rooms.
                </p>
                <div className="image">
                    <div className="img-container">
                        <img src={require('../assets/images/whitespace (2).png')} alt="" />
                        <p>No white spaces</p>
                    </div>
                    <div className="img-container">

                        <img src={require('../assets/images/whitespace (1).png')} alt="" />
                        <p>With white spaces</p>
                    </div>
                </div>
                <br />
            </section>
            <section>
                <h3>Consistency within elements</h3>
                <p>
                    Consistency should remain across all elements on the site. An example of this is when adding a border radius to a square. If you decide to place a border-radius on an object, make sure all the same elements should also have a radius. When choosing colors, it should be the same for every page on your website to maintain its uniformity.
                </p>
                <div className="image">
                    <div className="img-container">
                        <img src={require('../assets/images/consistent2.png')} alt="" />
                        <p>No consistency</p>
                    </div>
                    <div className="img-container">

                        <img src={require('../assets/images/consistent1.png')} alt="" />
                        <p>With consistency</p>
                    </div>
                </div>
            </section>
            <section>
                <h3>Conclusion and advice</h3>
                <p>
                    These are the things that in my opinion are relevant in considering the UI design you will create for your website. In creating a website, you shouldn't sit there and merely code the design. It is important and recommended that you create a layout or a prototype FIRST before launching your code editor and code. This will help you to anticipate possible problems and create solutions for them. Doing this will also help you design better and faster, rather than wasting time coding it without a prototype, then later you plan to change the code when you came up with a better design. There are many tools you can use for prototyping like Figma or Adobe Xd. You may click the links below to download it.



                </p>
                <div className="image download">
                    <a href="https://www.figma.com/downloads/" target="_blank"> <div className="img-container ">
                        <img src={require('../assets/images/figma.png')} alt="" />
                        <p>Download Figma</p>
                    </div></a>
                    <a href="https://creativecloud.adobe.com/apps/download/xd" target="_blank"> <div className="img-container ">

                        <img src={require('../assets/images/xd.png')} alt="" />
                        <p>Download Adobe Xd</p>
                    </div></a>
                </div>
            </section>



        </main >
    )
}