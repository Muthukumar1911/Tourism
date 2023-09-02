import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card";
import cardItem from "./FoodC";
import "./Food.css"
import Navbarr from "./Navbarr";



const Food = () => {
    return(
        <>
        <Navbarr />
        <br></br><br></br>
        <Container>
            <Row>
                <Col>
                    <h3 className="text-start">Famous & Local Food of Tamil Nadu</h3><br></br>
                    <p className="space"><span></span>The food of Tamil Nadu is rich in both vegetarian and non-vegetarian food. The diet mainly consists of rice, lentils, legumes with spices such as curry leaves, cinnamon, cloves, ginger, garlic etc. Coconut is widely used in various forms. People of Tamil Nadu believe that serving food to another living being, be it humans or animals, is a service to God himself. Therefore, they are incredibly generous when it comes to food, whether it is in their homes or temples or even restaurants. Traditionally, this south Indian cuisine is served on a banana leaf, and people sit on the floor to eat. A typical meal consists of Rice, Sambhar(Curry), two types of vegetables, curd and a pickle. Dosas idlis, Upma, Parota, Sambhar Rasam, Pongal, are the dishes with which the cuisine of Tamil Nadu is identified. Payasam, Kesari, Sweet Pongal are the sweet treasures of this cuisine. Filter coffee is a speciality of the south-Indian cuisine. The making of filter coffee is like a ritual; the coffee beans are first roasted and then powdered. They then use a filter set few scoops of powdered coffee and enough amount of boiling water is added to prepare a very dark liquid called the decoction. A 3/4 mug of hot milk with sugar and a small quantity of decoction is then served in Dabarah, a unique Coffee cup.</p>
                </Col>
                <Col><br></br><br></br>
                    <Row>
                        <Col><img className="food1" src="./Food1.jpeg"></img></Col>
                        <Col><img className="food" src="./Food3.jpeg"></img></Col>
                    </Row>
                    <Row>
                        <Col><img className="food" src="./Food2.jpg"></img></Col>
                        <Col><img className="food" src="./Food4.jpg"></img></Col>
                    </Row>
                </Col>
            </Row>
        </Container><br></br><br></br><br></br><br></br>

        <Container>
            <h3>TAMILNADU <br></br>FAMOUS AND LOCAL FOODS</h3>
        </Container><br></br><br></br><br></br>

        <Container>
            
                <Container>
                    <Row>
                    {cardItem.map((item) => (
                            <Col lg={6} className="pt-5">
                            <Card style={{ width :'460px', borderRadius : '7%',  boxShadow :'3px 3px 10px 0px black'}} key={item.id}
                            className="boxcon">
                            <Card.Body>
                                <Card.Title style={{fontWeight : '600', wordSpacing : '3px' }}>{item.title}</Card.Title>
                                <Card.Text className="pt-3"><span></span>{item.text}</Card.Text>
                            </Card.Body>
                            </Card></Col>
                         ))}
                    </Row>
                </Container><br></br><br></br>
                
            </Container>
            
            <Container>
                <Row>
                    <Col lg={6} >
                    <Card style={{ width :'460px',borderRadius : '7%',  boxShadow :'3px 3px 10px 0px black'}}>
                        <Card.Body>
                          <Card.Title style={{fontWeight : '600', wordSpacing : '3px'}}>Food of Hogenakkal</Card.Title>
                          
                          <Card.Text className="pt-3">
                          <span></span>Being a small hill station, Hogenakkal isn't spoilt for choices, when it comes to restaurants. However there are certain delicacies of the mountains that you can enjoy here. like ice creams and soups.<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                          </Card.Text>
                           </Card.Body>
                      </Card>
                    </Col>


                    <Col lg={6} >
                    <Card style={{ width :'460px', borderRadius : '7%',  boxShadow :'3px 3px 10px 0px black'}}>
                       <Card.Body>
                         <Card.Title style={{fontWeight : '600', wordSpacing : '3px' }}>Food of Theni</Card.Title>
                         
                         <Card.Text className="pt-3">
                         <span></span>The hotel that is now famous for its non-vegetarian Close dishes was started by Chinnaswamy and his wife Susheela, as a quaint idli shop, around two and a half decades ago. Now, the hotel has become a major landmark in Theni district. Interestingly, the hotel is named after the couple's son. Jyothis. The dishes are put together by 15 cooks, who are also the couple's close relatives. The cooks begin their day at 4 in the morning. The breakfast menu consists of idli, dosa, porotta and pongal. Around the breakfast time, they begin preparing their iconic lunch dishes too. At least twenty curries are ready by 10 am. Jyothis Hotel is another example of Tamil Nadu's great culinary heritage that hasn't failed to impressed foodies.
                         </Card.Text>
                         
                       </Card.Body>
                     </Card>
                    </Col>
                </Row>
            </Container><br></br><br></br>
        </>
    )
}

export default Food;