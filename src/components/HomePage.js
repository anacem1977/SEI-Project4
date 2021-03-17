import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = (props) => {
    
    return (
        <div className="homePage">
            {props.logged ? <p></p>
            : <div>
                <h1>Welcome to the Beer Encyclopedia</h1>
                <h3>Once you're logged in, you can click wherever you see the  ' <FontAwesomeIcon icon="beer" /> ' to learn more!</h3>
            </div> }

            <br></br>
            <div className="whatIsBeer">
                <h2> What is Beer? </h2>
                <p>There are many beer styles, often so different that is hard to believe that they are made from the same ingredients: </p>
                <p><b>Water:</b> Water is the main ingredient of beer, accounting around 90% of its weight. Water's level of dissolved minerals, specifically, bicarbonate ion, influence beer's finished taste. Due to the mineral properties of each region's water, specific areas were originally the sole producers of certain types of beer, each identifiable by regional characteristics.</p>
                <p><b>Malt:</b> Starting as barley, its origin and variety have an effect on the beers's flavor profile. The grains are malted by soaking them in water, allowing to begin germination, and then drying the partially germinated grains in a kiln. Different roasting times and temperatures are used to produce different colours of malt from the same grain. </p>
                <p><b>Hops:</b> The flower of the hop vine is used as a flavouring and preservative agent in nearly all beer made today. Hops contribute a bitterness that balances the sweetness of the malt as well as floral, citrus, and herbal aromas and flavors to beer. Hops have an antibiotic effect and their acidity works as preservative.</p>
                <p><b>Yeast: </b> Yeast is the microorganism that is responsible for fermentation in beer. Yeast metabolises the sugars extracted from grains, which produces alcohol and carbon dioxide, and thereby turns wort into beer. It also influences the character and flavor.</p>
            </div>
            <div className="brewingBeer">
                <h2> How is beer made? </h2>
                <p>The process of making beer is known as brewing. The purpose of brewing is to convert the starch source into a sugary liquid called <b>wort</b> and to convert the wort into the alcoholic drink known as beer in a fermentation process effected by yeast.</p>
                <p> The first step, where the wort is prepared by mixing the starch source (normally malted barley) with hot water, is known as <b>"mashing"</b>. Hot water is mixed with crushed malt or malts (known as <b>"grist"</b>) in a mash tun. The mashing process takes around 1 to 2 hours,during which the starches are converted to sugars, and then the sweet wort is drained off the grains.</p>
                <p>The grains are now washed in a process known as <b>"sparging"</b>. This washing allows the brewer to gather as much of the fermentable liquid from the grains as possible. The process of filtering the spent grain from the wort and sparge water is called <b>wort separation</b>. The traditional process for wort separation is <b>lautering</b>, in which the grain bed itself serves as the filter medium.</p>
                <br></br>
            </div>
            <a href="#top">
                <FontAwesomeIcon icon = "level-up-alt" href="#top" className="backToTop" size="3x" as="link"/>
            </a>
            
        </div>
    )
}

export default HomePage;