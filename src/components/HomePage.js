import axios from "axios";

const HomePage = (props) => {
    return (
        <div className="homePage">
            <h1>HOME PAGE</h1>
            <div className="whatIsBeer">
                <h2> What is Beer? </h2>
                <p>Therare many beer styles, often so different that is hard to believe that they are made from the same ingredients: </p>
                <p><b>Water:</b> Water is the main ingredient of beer, accounting around 90% of its weight. Water's level of dissolved minerals, specifically, bicarbonate ion, influence beer's finished taste.Due to the mineral properties of each region's water, specific areas were originally the sole producers of certain types of beer, each identifiable by regional characteristics.</p>
                <p><b>Malt:</b> Starting as barley, its origin and variety have an effect on the beers's flavor profile. The grains are malted by soaking them in water, allowing to begin germination, and then drying the partially germinated grains in a kiln. Different roasting times and temperatures are used to produce different colours of malt from the same grain. </p>
                <p><b>Hops:</b> The flower of the hop vine is used as a flavouring and preservative agent in nearly all beer made today. Hops contribute a bitterness that balances the sweetness of the malt as well as floral, citrus, and herbal aromas and flavors to beer. Hops have an antibiotic effect and their acidity works as preservative.</p>
                <p><b>Yeast: </b> Yeast is the microorganism that is responsible for fermentation in beer. Yeast metabolises the sugars extracted from grains, which produces alcohol and carbon dioxide, and thereby turns wort into beer. It also influences the character and flavor.</p>
            </div>
            <div className="brewingBeer">
                <h2> How is beer made? </h2>
                <p>The process of making beer is known as brewing. The purpose of brewing is to convert the starch source into a sugary liquid called <b>wort</b> and to convert the wort into the alcoholic drink known as beer in a fermentation process effected by yeast.</p>
                <p> The first step, where the wort is prepared by mixing the starch source (normally malted barley) with hot water, is known as <b>"mashing"</b>. Hot water is mixed with crushed malt or malts (known as <b>"grist"</b>) in a mash tun. The mashing process takes around 1 to 2 hours,during which the starches are converted to sugars, and then the sweet wort is drained off the grains.</p>
                <p>The grains are now washed in a process known as <b>"sparging"</b>. This washing allows the brewer to gather as much of the fermentable liquid from the grains as possible. The process of filtering the spent grain from the wort and sparge water is called <b>wort separation</b>. The traditional process for wort separation is <b>lautering</b>, in which the grain bed itself serves as the filter medium.</p>
            </div>
            <div className="glassware">
                <h2>How to serve beer</h2>
                <p>Scientific studies show that the shape of glassware will impact head development and retention. Why is this important? The foam created by pouring a beer acts as a net for many of the volatiles in a beer. What's a volatile? Compounds that evaporate from beer to create its aroma, such as hop oils, all kinds of yeast fermentation byproducts like alcohol, fusels and fruity esters, spices or other additions. So a glass that promotes a healthy foam head may enhance the trapping of certain volatiles. And as varying levels of head retention and presentation are desired with different styles of beers, different styles of glassware should be used accordingly.</p>
                <h3 className="glass">Flute Glass</h3>
                <p>Long and narrow bodies ensure that carbonation doesn't dissipate too quickly and showcase a lively carbonation or sparkling color. Stems will often be a bit shorter than the traditional champagne glass, but not necessarily.</p>
                <p>Benefits: Enhances and showcases carbonation. Releases volatiles quickly for a more intense upfront aroma.</p>
                <h3 className="glass">Globet</h3>
                <p>Some are designed to maintain a 2-centimeter head. This is achieved by scoring the inside bottom of the glass, which creates a CO2 nucleation point, and a stream of eternal bubbles and perfect head retention as a result.</p>
                <p>Benefits: Eye candy. Designed to maintain head. Wide-mouthed for deep sips.</p>
                <h3 className="glass">Mug</h3>
                <p>Heavy, sturdy, large and with handle, the mug is a piece of glassware that comes in many sizes and shapes.</p>
                <p>Benefits: Easy to drink out of. Holds plenty of volume.</p>
                <h3 className="glass">Pilsner Glass</h3>
                <p>Typically a tall, slender and tapered 12-ounce glass, shaped like a trumpet at times.</p>
                <p>Benefits: Showcases color, clarity and carbonation. Promotes head retention. Enhances volatiles.</p>
                <h3 className="glass">Pint Glass</h3>
                <p>Near cylindrical, with a slight taper and wide-mouth. There are two standard sizes, the 16-ounce or the 20-ounce Imperial.</p>
                <p>Benefits: Cheap to make. Easy to store. Easy to drink out of.</p>
                <h3 className="glass">Snifter</h3>
                <p>Used for brandy and cognac, these wide-bowled and stemmed glasses with their tapered mouths are perfect for capturing the aromas of strong ales.</p>
                <p>Benefits: Captures and enhances volatiles.</p>
                <h3 className="glass">Stange</h3>
                <p>A traditional German glass, stange means "stick" and these tall, slender cylinders are used to serve more delicate beers, amplifying malt and hop nuances.</p>
                <p>Benefits: Tighter concentration of volatiles.</p>
                <h3 className="glass">Tulip</h3>
                <p>A stemmed glass, tulip-shaped, wherein the top of the glass pushes out a bit to form a lip in order to capture the head and the body is bulbous.</p>
                <p>Benefits: Captures and enhances volatiles, while it induces and supports large foamy heads.</p>
                <h3 className="glass">Weizen Glass</h3>
                <p>These classy glasses, with their thin walls and length, showcase the beer's color and allows for much headspace. Most are 0.5L in size, with slight variations in sizes.</p>
                <p>Benefits: Specifically produced to take on volume and head.</p>
                <h3 className="glass">Oversized Wine Glass</h3>
                <p>An oversized 22oz wine glass will be most suitable for serving most Belgian Ales. Its size allows for headspace, while the open bowl creates an amazing nose.</p>
                <p>Benefits: Replacement for a Tulip or Goblet.</p>
            </div>
        </div>
    )
}

export default HomePage;