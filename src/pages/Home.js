import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.css";
import Carousel from 'react-bootstrap/Carousel';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import "./Home.css";
import { LinkContainer } from "react-router-bootstrap";
import Navbarr from "./Navbarr";

const Home = () => {
    return (
        <>
    <Navbarr />
    <Container className="Carousel">
    <Carousel data-bs-theme="light" >
    <Carousel.Item>
      <img
        className="d-block w-100 chennai-img" 
        src="./banner.1.jpg"
        alt="First slide"
      />
      </Carousel.Item>
    
    <Carousel.Item>
      <img
        className="d-block w-100 chennai-img"
        src="./pic1.jpeg"
        alt="Second slide"
      />
      </Carousel.Item>
    
    <Carousel.Item>
      <img
        className="d-block w-100 chennai-img"
        src="./pic2.jpeg"
        alt="Third slide"
      />
      </Carousel.Item>

      <Carousel.Item>
      <img
        className="d-block w-100 chennai-img"
        src="./pic3.jpeg"
        alt="Third slide"
      />
      </Carousel.Item>

      <Carousel.Item>
      <img
        className="d-block w-100 chennai-img"
        src="./pic4.jpeg"
        alt="Third slide"
      />
      </Carousel.Item>
  </Carousel>
  </Container><br></br><br></br><br></br><br></br>
  
  <Container className="Headings">
    <Row><Col><h3>Tourist Places To Tamil Nadu</h3></Col></Row>
    <Row><Col><h3>Here Are The Top Places To Visit In Tamil Nadu In 2023</h3></Col></Row>
  </Container><br></br>
  
  <Container>
    <Row className="text-center Districts">
        <Col><a href="#Chennai">Chennai</a></Col>
        <Col><a href="#Kodaikanal">Kodaikanal</a></Col>
        <Col><a href="#Madurai">Madurai</a></Col>
        <Col><a href="#Kumbakonam">Kumbakonam</a></Col>
        <Col><a href="#Theni">Theni</a></Col>
    </Row>
    <Row className="text-center Districts">
        <Col><a href="#Rameshwaram">Rameshwaram</a></Col>
        <Col><a href="#Ooty">Ooty</a></Col>
        <Col><a href="#Kanyakumari">KanyaKumari</a></Col>
        <Col><a href="#Yarcaud">Yarcaud</a></Col>
        <Col><a href="#Hogenakkal">Hogenakkal</a></Col>
    </Row>
  </Container><br></br><br></br>
  
  <Container id="Chennai">
    <Row><Col className="text-start"><h2>01. Chennai</h2></Col></Row>
    <Row>
        <Col className="text-start"><img src="./Chennai.jpeg" style={{ width : '550px' }}></img></Col>
        <Col>
            <h5 className="text-start" id="Chennai-slogan"><br></br>"The Detroit of India"</h5>
            <p>&emsp;&emsp;&emsp;&emsp;Formerly known as Madras, Chennai is the capital city of the state of Tamil Nadu, in the Southern part of India. Located on the Coromandel coast of Bay of Bengal, Chennai is as dynamic as it is immersed in tradition. This 'capital of south', is one among the four metropolitan siblings of India, having a rich cultural history which it perfectly balances with its metroplis lifestlye.</p>
            <p>&emsp;&emsp;&emsp;&emsp;Amid its chaos of traffic and sweltering humid climate, Chennai is worth visiting for its temples steeped in south-Indian culture, British-era museums and monuments, culinary delights and Marina Beach (Second largest urban beach in the world). Chennai's skyline is famous for its towering skyscrapers, but the heart of Chennai has an old-world charm to it that refuses to be overshadowed.
            </p>
        </Col>
    </Row>
  </Container><br></br><br></br>
  <Container>
    <Row><Col><h2>Must Visit Place in Chennai</h2></Col></Row>
  </Container><br></br>
  
  <Container>
    <Row>
        <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./chennai1.jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Marina Beach</Card.Title>
        <Card.Text>
          Situated in the city of Chennai in Tamil Nadu, Marina Beach is a natural urban beach along the Bay of Bengal...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./chennai2.jpeg" />
      <Card.Body className="text-start">
        <Card.Title>MGR Flim City</Card.Title>
        <Card.Text>
          Having been established in the year 1994, a considerably new structure, the MGR Film city is Managed...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./chennai3...jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Marundeeswarar Temple</Card.Title>
        <Card.Text>
          The magnificent Marundeeswarar Temple, in Tiruvanmiyur, near Chennai has the temple deity Shiva...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./chennai4.jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Breezy Beach</Card.Title>
        <Card.Text>
          Breezy Beach lays in the remote and serene neighbourhood of Valmiki Nagar in Chennai...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
  </Container><br></br><br></br><br></br>

  <Container id="Rameshwaram">
    <Row><Col className="text-start"><h2>02. Rameshwaram</h2></Col></Row>
    <Row>
        <Col className="text-start"><img src="./Rameshwaran.jpeg" style={{ width : '550px' }}></img></Col>
        <Col>
            <h5 className="text-start"><br></br>"The Bridge on the Indian Ocean"</h5>
            <p>&emsp;&emsp;&emsp;&emsp;Rameshwaram is located on a beautiful island in the South Indian state of Tamil Nadu. It is separated by a small Pamban channel from Sri Lanka. According to Hindu mythology, this is the place where Lord Rama created a bridge across the sea to Sri Lanka</p>
            <p>&emsp;&emsp;&emsp;&emsp;Renowned for its magnificent prakaras with massive sculptured pillars on either side, The Ramanathaswamy Temple houses the longest corridor in the world. Agniteertham is famous for its sacred waters and Pilgrims perform poojas in honor of their ancestors at this seashore. The five-faced Hanuman Temple holds the floating stone which was used to build the bridge between India and Sri Lanka. Rameshwaram has the first sea bridge connecting the town of Mandapam with Pamban Island, and Rameshwaram.
            </p>
        </Col>
    </Row>
  </Container><br></br><br></br>
  <Container>
    <Row><Col><h2>Must Visit Place In Rameshwaram</h2></Col></Row>
  </Container><br></br>
  
  <Container>
    <Row>
        <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./rameshwarem1.jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Dhanushkodi Temple</Card.Title>
        <Card.Text>
          Dhanushkodi was until a few years ago a wonderful temple on the southern tip of India. However, due to a ...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./rameshwarem2.jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Lakshmana Temple</Card.Title>
        <Card.Text>
          Lakshmana Tirtham had been constructed in the loving memory of Lord Lakshman, brother of Lord Rama...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./Rameshwaram3..jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Rameshwaram Temple</Card.Title>
        <Card.Text>
          A perfect blend of mind-boggling architecture and spiritual significance, Rameshwaram Temple, also...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./rameshwarem1 (6).jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Viloondi Tirtham</Card.Title>
        <Card.Text>
            Viloondi Tirtham is a beach which is also considered a sacred natural water body and a favorite amongst tourists...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
  </Container><br></br><br></br><br></br>

  <Container id="Kodaikanal">
    <Row><Col className="text-start"><h2>03. Kodaikanal</h2></Col></Row>
    <Row>
        <Col className="text-start"><img src="./Kodaikanal.jpeg" style={{ width : '550px' }}></img></Col>
        <Col>
            <h5 className="text-start">"The Princess of Hill Stations"</h5>
            <p>&emsp;&emsp;&emsp;&emsp;Kodaikanal Tourism located in the state of Tamil Nadu, kodaikanal is one of the most famous honeymoon destinations in India. A Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered manicured cliffs and waterfall that come together to create the ideal setting for a perfect getaway. Kodaikanal means 'the gift of the forests'.</p>
            <p>&emsp;&emsp;&emsp;&emsp;Nestled amidst the rolling slopes of the Palani Hills, Kodaikanal stands at an altitude of 7200 feet above sea level, and once you visit this hill station, you will find that every bit of what you have imagined it to be is real. Kodaikanal is place you can go to take a break form the rigours of daily city life, and this hill station lets you sit back and connect with nature as you head out on biking or trekking trails or take a stroll through the vast forests surrounding the town.
            </p>
        </Col>
    </Row>
  </Container><br></br><br></br>
  <Container>
    <Row><Col><h2>Must Visit Place In Kodaikanal</h2></Col></Row>
  </Container><br></br>
  
  <Container>
    <Row>
        <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./kodaikanal1....jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Green Valley View</Card.Title>
        <Card.Text>
          Formerly known as Suicide point, the Green Valley View offers a breathtaking view of the plains, deep...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./kodaikanal2.jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Kodai Lake</Card.Title>
        <Card.Text>
          Kodaikanal Lake is a manmade lake in the Kodaikanal city which is also known as Kodai Lake. Vera..
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./kodaikanal3..jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Bear Shola Falls</Card.Title>
        <Card.Text>
          Located at a mere distance of 2 kilometres from the kodaikanal Lake, the Bear Shola Falls is a popular...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./kodaikanal4.jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Pillar Rocks</Card.Title>
        <Card.Text>
          Situated in the 'Princess of Hill Stations', Kodaikanal, the Pillar Rocks have become a lovely picinic...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
  </Container><br></br><br></br><br></br>

  <Container id="Ooty">
    <Row><Col className="text-start"><h2>04. Ooty</h2></Col></Row>
    <Row>
        <Col className="text-start"><img src="./Ooty.jpeg" style={{ width : '550px' }}></img></Col>
        <Col>
            <h5 className="text-start"><br></br>"Queen of the Nilgiris"</h5>
            <p>&emsp;&emsp;&emsp;&emsp;Nestled amidst Nilgiri hills, Ooty, also known as Udagamandalam, is a hill station in Tamil Nadu which serves as a top-rated tourist destination. Once regarded as the summer headquarters of the East India Company, the Queen of the hills is a picturesque getaway.</p>
            <p>&emsp;&emsp;&emsp;&emsp;The Nilgiri mountain railway is the steepest track in all of Asia. Remember the hit song 'Chaiyya Chaiyya' where Shahrukh Khan and Malaika Arora matching steps on top of a train? Remember the breathtaking locales as the train chugged its way across lush greenery? Yes, that was the Nilgiri Mountain Railways, and the Nilgiri Mountains all along Dotted with tea gardens, serene waterfalls, winding country lanes, and charming colonial architecture, Ooty is the perfect respite everyone.
            </p>
        </Col>
    </Row>
  </Container><br></br><br></br>
  <Container>
    <Row><Col><h2>Must Visit Place In Ooty</h2></Col></Row>
  </Container><br></br>
  
  <Container>
    <Row>
        <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./ooty1 (1).jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Nilgiri Mountain Railway</Card.Title>
        <Card.Text>
        Nilgiri Mountain Railway, also known as Toy Train in Ooty, is one of the key attractions of the popular hill...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./ooty1 (2).jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Ooty Botanical Garden</Card.Title>
        <Card.Text>
        Ooty Botanical Gardens lie on the lower slopes of the Doddabetta peak, the Government Botanical...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./ooty1.(3).jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Emerald Lake</Card.Title>
        <Card.Text>
        Emerald Lake is situated in Emerald Village, around 20-22 kilometres from the main city of Ooty and...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./ooty1.(4).jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Dolphin's Nose</Card.Title>
        <Card.Text style={{}}>
        Located about 12 km away from Coonoor is the Dolphin's Nose about 1,500 meters above sea level. The tip...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
  </Container><br></br><br></br><br></br>

  <Container id="Kanyakumari">
    <Row><Col className="text-start"><h2>05. Kanyakumari</h2></Col></Row>
    <Row>
        <Col className="text-start"><img src="./Kanyakumari.jpeg" style={{ width : '550px' }}></img></Col>
        <Col>
            <h5 className="text-start"><br></br>"Cape Comorin or The Land's End"</h5>
            <p>&emsp;&emsp;&emsp;&emsp;Kanyakumari Tourism Bordered by the three seas - Arabian, Indian and the Bay of Bengal, Kanyakumari is the southernmost tip of the Indian Peninsula. A small coastal town in the state of Tamil Nadu, Kanyakumari was earlier known as Cape Comorin.</p>
            <p>&emsp;&emsp;&emsp;&emsp;Kanyakumari offers the marvellous confluence of the Bay of Bengal, the Arabian Sea and the Indian ocean meeting together at a point. But, this is not a miracle, the miracle lies in the beauty that the water of three seas does not mix, you can clearly distinguish between the turquoise blue, deep blue and sea green waters of the three seas. To enjoy the best view of sunset and sunrise, you can visit the Triveni Sangam point and the famous View tower. The town has a mountainous terrain with elevated patches of hills. coconut trees and lined with paddy fields.
            </p>
        </Col>
    </Row>
  </Container><br></br><br></br>
  <Container>
    <Row><Col><h2>Must Visit Place in Kanyakumari</h2></Col></Row>
  </Container><br></br>
  
  <Container>
    <Row>
        <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./kanyakumari1 (1).jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Kanyakumari Beach</Card.Title>
        <Card.Text>
        Located in the southernmost part of India, Kanyakumari beach with its beautiful hue- changing beaches...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./kanyakumari1.(2).jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Vivekananda Memorial</Card.Title>
        <Card.Text>
        The magnificent Vivekananda Rock Memorial is located an a small island off Kanyakumari. It has the picturesque...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./kanyakumari1.(3).jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Thiruvalluvar Statue</Card.Title>
        <Card.Text>
        Dedicated to the accomplished philosopher and poet Thiruvalluvar, this beautiful statue finds itself....
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./kanyakumari1 (4).jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Thirparappu Falls</Card.Title>
        <Card.Text>
        Located at a distance of about 55 kilometers from Kanyakumari, the cascading waters of the Thirparappu...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
  </Container><br></br><br></br><br></br>

  <Container id="Kumbakonam">
    <Row><Col className="text-start"><h2>06. Kumbakonam</h2></Col></Row>
    <Row>
        <Col className="text-start"><img src="./Kumbakonam.jpeg" style={{ width : '550px' }}></img></Col>
        <Col>
            <h5 className="text-start"><br></br>"The Cambridge of India"</h5>
            <p>&emsp;&emsp;&emsp;&emsp;Kumbakonam Tourism Sandwiched between two great rivers of southern India, Cauvery and Arsala, Kumbakonam is a gorgeous temple town in the heart of the Thanjavur district of Tamil Nadu. The town is a place for the lovers of history and those seeking to understand India's cultural roots and Hinduism.</p>
            <p>&emsp;&emsp;&emsp;&emsp;The town is also known for its grand festival called Mahamaham festival which is celebrated every twelve years at the Mahamaham Tank. The town is one of the oldest in Indian history, and known for its famed temples, Chola heritage and also for its marvelous educational institutes. The town is one of the oldest in Indian history, and known for its famed temples, Chola heritage and also for its marvelous educational institutes.
            </p>
        </Col>
    </Row>
  </Container><br></br><br></br>
  <Container>
    <Row><Col><h2>Must Visit Place In Kumbakonam</h2></Col></Row>
  </Container><br></br>
  
  <Container>
    <Row>
        <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./kumbakonam1.(1).jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Sarangapani Temple</Card.Title>
        <Card.Text>
        Sarangapani Temple, an ancient temple dedicated to Lord Vishnu is located in the town of Kumbakonam...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./kumbakonam1.(2).jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Nageswaran Temple</Card.Title>
        <Card.Text>
        Constructed as a chariot, the Nageswaran temple is an important Shaivite temple. A piece of genius Chola...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./kumbakonam(3).jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Adi Kumbeshwara Temple</Card.Title>
        <Card.Text>
        Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./kumbakonam1 (4).jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Airavatesvara Temple</Card.Title>
        <Card.Text>
        Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara Temple is a revered...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
  </Container><br></br><br></br><br></br>

  <Container id="Madurai">
    <Row><Col className="text-start"><h2>07. Madurai</h2></Col></Row>
    <Row>
        <Col className="text-start"><img src="./Madurai.jpeg" style={{ width : '550px' }}></img></Col>
        <Col>
            <h5 className="text-start"><br></br>"The Lotus City"</h5>
            <p>&emsp;&emsp;&emsp;&emsp;Madurai Tourism Madurai, the cultural capital of Tamil Nadu, is one of the oldest continuously inhabited cities of India. Ruled by Pandya kings for the longest time in its history, it is called as the 'Lotus City' as it was planned and built in the shape of a lotus. Madurai is known for Meenakshi Amman Temple, dedicated to the goddess Meenakshi with a sanctum for her consort, Sundareshwarar.</p>
            <p>&emsp;&emsp;&emsp;&emsp;There are many other ancient temples in Madurai, including Thiruparankundram. It is one of the important old temples dedicated to Lord Muruga(Karthikeya) and is located on a hillock approximately 8 km from the city. Having trade ties with ancient Rome, the place holds a great cultural heritage. With bustling bazaars and fantastic street food, Madurai has heritage walks conducted throughout the day.
            </p>
        </Col>
    </Row>
  </Container><br></br><br></br>
  <Container>
    <Row><Col><h2>Must Visit Place In Madurai</h2></Col></Row>
  </Container><br></br>
  
  <Container>
    <Row>
        <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./madurai1..jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Vaigai Dam</Card.Title>
        <Card.Text>
        Vaigai Dam, a magnificent human-made structure, is constructed over River Vaigai near Andipatti, Theni....
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./madurai2.jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Meghamalai</Card.Title>
        <Card.Text>
        Often known as the "High Wavy Mountains", Meghamalai is a petit yet beautiful place located in the...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./madurai3..jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Samanar Hills</Card.Title>
        <Card.Text>
        Located in Keelakuyilkudi village near Madurai, Samanar Hills or Samanar Malai is a beautiful hill rock...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./madurai4..jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Thirumalai Nayakar</Card.Title>
        <Card.Text>
        Thirumalai Nayakar Palace was erected in 1636 AD in the city of Madurai, by King Thirumalai Nayak...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
  </Container><br></br><br></br><br></br>

  <Container id="Yarcaud">
    <Row><Col className="text-start"><h2>08. Yercaud</h2></Col></Row>
    <Row>
        <Col className="text-start"><img src="./Yarcaud.jpeg" style={{ width : '550px' }}></img></Col>
        <Col>
            <h5 className="text-start">"The Land of Seven Forests."</h5>
            <p>&emsp;&emsp;&emsp;&emsp;Yercaud Tourism Nestled in the Shivaroy Hills of Tamil Nadu, Yercaud is a hill station in the Eastern Ghats steeped in abundant greenery. Commonly called "Ooty of the Poor, this region has a history dating back to the time of the British. Located at an altitude of 4970 feet, Yercaud is known for its vast expanses of coffee plantations and great weather.</p>
            <p>&emsp;&emsp;&emsp;&emsp;Yercaud lake is the main point of attraction of the region.One of the many highlights is the summer festival that takes place in May. It is dedicated to Lord Servarayan, the supreme god of the ranges and gives visitors a glimpse into the rich heritage of this region.
            </p>
        </Col>
    </Row>
  </Container><br></br><br></br>
  <Container>
    <Row><Col><h2>Must Visit Place In Yercaud</h2></Col></Row>
  </Container><br></br>
  
  <Container>
    <Row>
        <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./yercaud...(1).jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Pagoda Point</Card.Title>
        <Card.Text>
        Located in the eastern part of the Yercaud Hills, Pagoda point is a beautiful viewpoint where one is treated...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./yercaud1 (2).jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Botanical Garden</Card.Title>
        <Card.Text>
        Any tourist who is interested in gods gift to this planet, the wondrous flora, and in knowing about various...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./yercaud1.(3).jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Emerald Lake</Card.Title>
        <Card.Text>
        The most alluring aspect of Yercaud is its big yet natural lake very popularly known as the Emerald Lake...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./yercaud1.(4).jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Lady’s Seat</Card.Title>
        <Card.Text style={{}}>
        Lady's Seat is a viewpoint that overlooks the winding ghat road and offers a spectacular view of Mettur Dam...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
  </Container><br></br><br></br><br></br>

  <Container id="Theni">
    <Row><Col className="text-start"><h2>09. Theni</h2></Col></Row>
    <Row>
        <Col className="text-start"><img src="./Theni.jpeg" style={{ width : '550px' }}></img></Col>
        <Col>
            <h5 className="text-start"><br></br>"A little hamlet in Tamil Nadu"</h5>
            <p>&emsp;&emsp;&emsp;&emsp;Theni Tourism Dotted by luscious patches of greenery and beautiful waterfalls, Theni is a little hamlet on the Western Ghats. The topography of Theni mainly consists of hills and ranges. It has plenty of rivers and dams and is an abode to 27 forests hence filled with unparalleled greenery.</p>
            <p>&emsp;&emsp;&emsp;&emsp;There temples like Kamatchi Amman Temple, Vellappar Temple, and Balasubramanya Temple which are brimming with devotees from all around the country throughout the year. The vibrant local markets of Theni are shoppers' paradise. The local handloom products and agricultural products are the best buys at these markets. The aroma filled tea estates in Theni are a paradise. The Kolukkamalai Tea estate is often deemed to be the world's highest organic tea estate. The Suruli Falls and the Kumbakarai Falls are the crown jewels of Theni.
            </p>
        </Col>
    </Row>
  </Container><br></br><br></br>
  <Container>
    <Row><Col><h2>Must Visit Place In Theni</h2></Col></Row>
  </Container><br></br>
  
  <Container>
    <Row>
        <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./theni1.(1).jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Chinna Suruli Falls</Card.Title>
        <Card.Text>
        Located in the lap of wild, green forests, Chinna Suruli Falls is a picturesque destination to visit from Theni...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./theni1 (2).jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Kumbakkarai Falls</Card.Title>
        <Card.Text>
        Located in Dindigul district near Theni in Tamil Nadu, Kumbakkarai Falls is a mesmerising waterfall that...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./theni1.(3).jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Meghamalai</Card.Title>
        <Card.Text>
        Tucked within the Western Ghats of Tamil Nadu, Meghamalai in Theni district is the kind of hidden paradise...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./theni1.(4).jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Suruli Falls</Card.Title>
        <Card.Text style={{}}>
        Suruli Falls is a beautiful waterfall in the Theni district of Tamil Nadu and one of the major tourist attractions of....
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
  </Container><br></br><br></br><br></br>

  <Container id="Hogenakkal">
    <Row><Col className="text-start"><h2>10. Hogenakkal</h2></Col></Row>
    <Row>
        <Col className="text-start"><img src="./Hogenakkal.jpeg" style={{ width : '550px' }}></img></Col>
        <Col>
            <h5 className="text-start"><br></br>"The one that will take your breath away"</h5>
            <p>&emsp;&emsp;&emsp;&emsp;Hogenakkal Tourism Hogenakkal is a waterfall located in Dharmapuri district of Tamil Nadu where the Kaveri river splits into multiple streams of waterfalls. Located at a distance of 180 km from Bangalore, Hogenakkal has water throughout the year. The carbonite rocks, the coracle (basket boat) rides, freshwater fish, oil massages by locals make it a perfect one day trip or a weekend getaway from Bangalore.</p>
            <p>&emsp;&emsp;&emsp;&emsp;Sometimes referred to as the "Niagara Falls of India," it is also known for the medicinal baths. Also known at Marikottayam, Hoge actually means smoke and Kal means rock. Recently, the place has been found to be littered with plastic bags and garbage and the fish market outside the waterfall might stink. Weekends can be crowded. Keep all these points in mind before visiting.
            </p>
        </Col>
    </Row>
  </Container><br></br><br></br>
  <Container>
    <Row><Col><h2>Must Visit Place In Hogenakkal</h2></Col></Row>
  </Container><br></br>
  
  <Container>
    <Row>
        <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./hogenakkal1.jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Theerthamalai Temple</Card.Title>
        <Card.Text>
        Theerthamalai is a popular pilgrim centre close to Hogenakkal. One of its most popular destinations is the....
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./hogenakkal2..jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Hogenakkal Falls</Card.Title>
        <Card.Text>
        Hogenakkal Falls is a scintillating waterfall that is located on river Kaveri in the Dharmapuri district of...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./hogenakkal3.jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Pennagram Village</Card.Title>
        <Card.Text>
        The village is located about 20 km away from Hogenakkal and is famous for its weekly fair that it holds every....
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>

    <Col>
        <Card style={{ width: '16rem' }}>
      <Card.Img variant="top" src="./hokenakkal4..jpeg" />
      <Card.Body className="text-start">
        <Card.Title>Mettur Dam</Card.Title>
        <Card.Text style={{}}>
        Mettur Dam, situated 30 miles from Salem in a small Mettur Village, is one of the largest dams in India. Built...
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
  </Container>
  </>
    );
}

export default Home;
