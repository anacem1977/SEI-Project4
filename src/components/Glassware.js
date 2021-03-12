 import React, { Component } from "react";

 import {faBeer, faLevelUpAlt} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

 const Glassware = (props) => {
     return (
         <div className="glass">
             <div className="glassware">
                <h2>How to serve beer</h2>
                <p>Scientific studies show that the shape of glassware will impact head development and retention. Why is this important? The foam created by pouring a beer acts as a net for many of the volatiles in a beer. What's a volatile? Compounds that evaporate from beer to create its aroma, such as hop oils, all kinds of yeast fermentation byproducts like alcohol, fusels and fruity esters, spices or other additions. So a glass that promotes a healthy foam head may enhance the trapping of certain volatiles. And as varying levels of head retention and presentation are desired with different styles of beers, different styles of glassware should be used accordingly.</p>
                <h3 className="glass">Flute Glass</h3>
                <p>Long and narrow bodies ensure that carbonation doesn't dissipate too quickly and showcase a lively carbonation or sparkling color. Stems will often be a bit shorter than the traditional champagne glass, but not necessarily.</p>
                <p><b>Benefits: </b>Enhances and showcases carbonation. Releases volatiles quickly for a more intense upfront aroma.</p>
                <h3 id="globet">Globet</h3>
                <p>Some are designed to maintain a 2-centimeter head. This is achieved by scoring the inside bottom of the glass, which creates a CO2 nucleation point, and a stream of eternal bubbles and perfect head retention as a result.</p>
                <p><b>Benefits: </b>Eye candy. Designed to maintain head. Wide-mouthed for deep sips.</p>
                <h3 id="mug">Mug</h3>
                <p>Heavy, sturdy, large and with handle, the mug is a piece of glassware that comes in many sizes and shapes.</p>
                <p><b>Benefits: </b>Easy to drink out of. Holds plenty of volume.</p>
                <h3 className="glass">Pilsner Glass</h3>
                <p>Typically a tall, slender and tapered 12-ounce glass, shaped like a trumpet at times.</p>
                <p><b>Benefits: </b>Showcases color, clarity and carbonation. Promotes head retention. Enhances volatiles.</p>
                <h3 className="glass">Pint Glass</h3>
                <p>Near cylindrical, with a slight taper and wide-mouth. There are two standard sizes, the 16-ounce or the 20-ounce Imperial.</p>
                <p><b>Benefits: </b>Cheap to make. Easy to store. Easy to drink out of.</p>
                <h3 className="glass">Snifter</h3>
                <p>Used for brandy and cognac, these wide-bowled and stemmed glasses with their tapered mouths are perfect for capturing the aromas of strong ales.</p>
                <p><b>Benefits: </b>Captures and enhances volatiles.</p>
                <h3 id="stange">Stange</h3>
                <p>A traditional German glass, stange means "stick" and these tall, slender cylinders are used to serve more delicate beers, amplifying malt and hop nuances.</p>
                <p><b>Benefits: </b>Tighter concentration of volatiles.</p>
                <h3 className="glass">Tulip</h3>
                <p>A stemmed glass, tulip-shaped, wherein the top of the glass pushes out a bit to form a lip in order to capture the head and the body is bulbous.</p>
                <p><b>Benefits: </b>Captures and enhances volatiles, while it induces and supports large foamy heads.</p>
                <h3 className="glass">Weizen Glass</h3>
                <p>These classy glasses, with their thin walls and length, showcase the beer's color and allows for much headspace. Most are 0.5L in size, with slight variations in sizes.</p>
                <p><b>Benefits: </b>Specifically produced to take on volume and head.</p>
                <h3 className="glass">Oversized Wine Glass</h3>
                <p>An oversized 22oz wine glass will be most suitable for serving most Belgian Ales. Its size allows for headspace, while the open bowl creates an amazing nose.</p>
                <p><b>Benefits: </b>Replacement for a Tulip or Goblet.</p>
                </div>
                <a href="#top">
                    <FontAwesomeIcon icon = "level-up-alt" href="#top" className="backToTop" size="3x" as="link"/>
                </a>
         </div>
     )
 }

 export default Glassware;