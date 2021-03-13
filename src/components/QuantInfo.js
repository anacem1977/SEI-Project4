import React, { Component } from "react";
import { ListGroupItem } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class QuantInfo extends Component {
    render() {
        return (
            <div className="quantInfo">
                <h1>Beer Study Guide</h1>
                <ListGroup>
                    <ListGroup.Item>
                        <p><b>Alcohol By Volume (ABV): </b> A measurement of the alcohol content in terms of the percentage volume of alcohol per volume of beer. Caution: This measurement is always higher than Alcohol by Weight (not included in this guide). To calculate the approximate volumetric alcohol content, subtract FG from OG and divide by 0.0075.</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p><b>International Bitterness Units (IBUs): </b>1 bitterness unit = 1 milligram of isomerized (exposed to heat) hop alpha acids in one liter of beer. Can range from 0 (lowest—no bitterness) to above 100 IBUs. Usually the general population cannot perceive bitterness above or below a specific range of IBUs (said to be below 8 and above 80 IBUs by some sources).</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p><b>Standard Reference Method (SRM): </b>Provides a numerical range representing the color of a beer. The common range is 2-50. The higher the SRM, the darker the beer. SRM represents the absorption of specific wavelengths of light. It provides an analytical method that brewers use to measure and quantify the color of a beer. The SRM concept was originally published by the American Society of Brewing Chemists.</p>
                        <p>See Guide</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p><b>Clarity: </b>The degree to which solids in suspension are absent in beer; different from color and brightness.</p>
                        <ul className="quantInfoList">
                            <li>Ranges: brilliant, clear, slight haze, hazy, opaque</li>
                            <li>Solids can include unfermented sugars, proteins, yeast sediments and more.</li>
                            <li>The degree to which solids are present in solution is referred to as turbidity.</li>
                        </ul>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p><b>Hop Ingredients: </b></p>
                        <p><b>Flavor and aroma ranges: </b>citrus, tropical, fruity, floral, herbal, onion-garlic, sweaty, spicy, woody, green, pine, spruce, resinous</p>
                        <p><b>Bitterness ranges: </b>restrained, moderate, aggressive, harsh</p>
                        <p>Hops deliver resins and essential oils that influence beer’s aroma, flavor, bitterness, head retention, astringency, and perceived sweetness. They also increase beer’s stability and shelf life. Brewers today use well over 100 different varieties of hops worldwide. Hops grown in the U.S. contribute an estimated 30 percent to the global supply.</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p><b>Malt Ingredients: </b></p>
                        <p><b>Flavor and aroma ranges: </b>bread flour, grainy, biscuit, bready, toast, caramel, prune-like, roast, chocolate, coffee, smoky, acrid</p>
                        <p>Malt has been called the soul of beer. It is the main fermentable ingredient, providing the sugars that yeast use to create alcohol and carbonation. Malt is converted barley or other grains that have been steeped, germinated, heated, kilned (or roasted in a drum), cooled, dried and then rested.</p>
                        <p>A wide variety of barley and other malts are used to make beer, including pale malt (pilsner and pale two-row), higher temperature kilned malt (Munich and Vienna), roasted/specialty malt (chocolate and black) and unmalted barley. Wheat malt is commonly used as well.</p>
                        <p>Malt provides fermentable and non-fermentable sugars and proteins that influence beer’s aroma, alcohol, body, color, flavor and head retention.</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p><b>Other Ingredients: </b>Adjuncts are ingredients that have typically not been malted, but are a source of fermentable sugars.</p>
                        <p><b>Common adjuncts include: </b>candy sugar, honey, molasses, refined sugar, treacle, maple syrup</p>
                        <p><b>Unmalted starchy adjuncts: </b>oats, rye, wheat, corn/maize, rice. Many of these grains can be malted to create unique flavors compared to their unmalted counterparts.</p>
                        <p><b>Other: </b>fruit, herbs, roasted (unmalted) barley or wheat, spices, wood</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <p><b>Yeast, Microorganisms and Fermentation Byproducts: </b> Yeast eats sugars from malted barley and other fermentables, producing carbonation, alcohol and aromatic compounds. The flavor of yeast differs based on yeast strain, temperature, time exposed to the beer, oxygen and other variables.</p>
                        <p><b>Types of Yeast:</b> </p>
                        <ul className="quantInfoList">
                            <li><b>Ale: </b>Saccharomyces Cerevisiae (ester driven). Commonly referred to as top fermenting yeast, it most often ferments at warmer temperatures (60-70F).</li>
                            <li><b>Lager: </b>Saccharomyces Pastorianus (often lends sulfuric compounds). Commonly referred to as bottom fermenting yeast, it most often ferments at cooler temperatures (45-55F).</li>
                            <li><b>Weizen Yeast: </b>Common to some German-style wheat beers and is considered an ale yeast.</li>
                            <li><b>Brettanomyces: </b>Wild yeast with flavors like barnyard, tropical fruit, and more.</li>
                            <li><b>Microorganisms: </b>(bacteria)  Acetobacter (produces acetic acid), Lactobacillus/Pediococcus (produce lactic acid), others</li>
                        </ul>
                    </ListGroup.Item>
                </ListGroup>

                <a href="#top">
                    <FontAwesomeIcon icon = "level-up-alt" href="#top" className="backToTop" size="3x" as="link"/>
                </a>
            </div>
        )
    }
}

export default QuantInfo;