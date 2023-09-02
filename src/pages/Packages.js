import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import "./Packages.css"
import Navbarr from "./Navbarr";

const Packages = () => {
    const cr = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Chennai to Rameshwaram Packages</Popover.Header>
                <Popover.Body>
                <h6>Places</h6>
                <ul>
                    <li style={{color : 'Green', fontWeight:'600'}}>Ramanathasamy Temple</li>
                    <li style={{color : 'Green', fontWeight:'600'}}>Dr.Apj.Abdul Kalam Memorial</li>
                    <li style={{color : 'red', fontWeight:'600'}}>Agni Theertham</li>
                    <li style={{color : 'red', fontWeight:'600'}}>Pamban Bridge</li>
                    <li style={{color : 'red', fontWeight:'600'}}>kunthukal Beach</li>
                </ul><br></br>

                <h6>Foods to Serve</h6>
                <ul>
                    <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Crab soup</li><li>Veg Meals</li>
                </ul><br></br>
                <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
                <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
                </Popover.Body>
        </Popover>)

const cko = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Chennai to Kodaikanal Packages</Popover.Header>
            <Popover.Body>
            <h6>Places</h6>
            <ul>
                <li style={{color : 'Green', fontWeight:'600'}}>Kodaikanal Lake</li>
                <li style={{color : 'Green', fontWeight:'600'}}>Pine Forest</li>
                <li style={{color : 'red', fontWeight:'600'}}>Pillar Rocks</li>
                <li style={{color : 'red', fontWeight:'600'}}>Poombarai Village View</li>
                <li style={{color : 'red', fontWeight:'600'}}>Mannavanur Lake</li>
            </ul><br></br>

            <h6>Foods to Serve</h6>
            <ul>
                <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Chicken Thandoori</li><li>Chicken Cury</li>
            </ul><br></br>
            <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
            <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
            </Popover.Body>
    </Popover>)

const co = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Chennai to Ooty Packages</Popover.Header>
            <Popover.Body>
            <h6>Places</h6>
            <ul>
                <li style={{color : 'Green', fontWeight:'600'}}>Botanical Garden</li>
                <li style={{color : 'Green', fontWeight:'600'}}>Pykara Lake</li>
                <li style={{color : 'red', fontWeight:'600'}}>Government Rose Garden</li>
                <li style={{color : 'red', fontWeight:'600'}}>Doddabetta Peak</li>
                <li style={{color : 'red', fontWeight:'600'}}>Avalance Lake</li>
            </ul><br></br>

            <h6>Foods to Serve</h6>
            <ul>
                <li>Chicken Meals</li><li>Parotta</li><li>Fish Fry</li><li>Veg Briyani</li><li>Veg Meals</li>
            </ul><br></br>
            <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
            <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
            </Popover.Body>
    </Popover>)

const cka = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Chennai to Kanyakumari Packages</Popover.Header>
            <Popover.Body>
            <h6>Places</h6>
            <ul>
                <li style={{color : 'Green', fontWeight:'600'}}>Vivekananda Rock Memorial</li>
                <li style={{color : 'Green', fontWeight:'600'}}>Sri Lanka view point</li>
                <li style={{color : 'red', fontWeight:'600'}}>Thiruvallur Statue</li>
                <li style={{color : 'red', fontWeight:'600'}}>Our Lady of Ramsom Church</li>
                <li style={{color : 'red', fontWeight:'600'}}>Tsunami Monument</li>
            </ul><br></br>

            <h6>Foods to Serve</h6>
            <ul>
                <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Crab soup</li><li>Veg Meals</li>
            </ul><br></br>
            <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
            <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
            </Popover.Body>
    </Popover>)

const cku = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Chennai to Kumbakonam Packages</Popover.Header>
            <Popover.Body>
            <h6>Places</h6>
            <ul>
                <li style={{color : 'Green', fontWeight:'600'}}>Airavatesvara Temple</li>
                <li style={{color : 'Green', fontWeight:'600'}}>Adi Kumbeswarar Temple</li>
                <li style={{color : 'red', fontWeight:'600'}}>Sarangapani Temple</li>
                <li style={{color : 'red', fontWeight:'600'}}>Kampasheswarar Temple</li>
                <li style={{color : 'red', fontWeight:'600'}}>Patteeswaram Temple</li>
            </ul><br></br>

            <h6>Foods to Serve</h6>
            <ul>
                <li>Sambar Meals</li><li>Veg Pakoda</li><li>Veg Briyani</li><li>Puliyotharai</li><li>Full Meals</li>
            </ul><br></br>
            <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
            <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
            </Popover.Body>
    </Popover>)

const cm = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Chennai to Madurai Packages</Popover.Header>
            <Popover.Body>
            <h6>Places</h6>
            <ul>
                <li style={{color : 'Green', fontWeight:'600'}}>Meenatchi Amman Temple</li>
                <li style={{color : 'Green', fontWeight:'600'}}>Thirumali Nayakkar Mahal</li>
                <li style={{color : 'red', fontWeight:'600'}}>Azhagar Temple</li>
                <li style={{color : 'red', fontWeight:'600'}}>Thirupparangundram Murugan Temple</li>
                <li style={{color : 'red', fontWeight:'600'}}>Aayiram Kaal Mandabam</li>
            </ul><br></br>

            <h6>Foods to Serve</h6>
            <ul>
                <li>Sambar Meals</li><li>Veg Briyani</li><li>Chicken Curry</li><li>Mutton Chukka</li><li>Veg Meals</li>
            </ul><br></br>
            <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
            <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
            </Popover.Body>
    </Popover>)

const cy = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Chennai to Yercaud Packages</Popover.Header>
            <Popover.Body>
            <h6>Places</h6>
            <ul>
                <li style={{color : 'Green', fontWeight:'600'}}>Peeku Park</li>
                <li style={{color : 'Green', fontWeight:'600'}}>Pagoda Point</li>
                <li style={{color : 'red', fontWeight:'600'}}>Shevaroy Temple</li>
                <li style={{color : 'red', fontWeight:'600'}}>Big Lake</li>
                <li style={{color : 'red', fontWeight:'600'}}>Karadiyur View point</li>
            </ul><br></br>

            <h6>Foods to Serve</h6>
            <ul>
                <li>Sambar Meals</li><li>Chicken Curry</li><li>Veg Briyani</li><li>Parotta</li><li>Veg Meals</li>
            </ul><br></br>
            <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
            <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
            </Popover.Body>
    </Popover>)

const ct = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Chennai to Theni Packages</Popover.Header>
            <Popover.Body>
            <h6>Places</h6>
            <ul>
                <li style={{color : 'Green', fontWeight:'600'}}>Suruli Falls</li>
                <li style={{color : 'Green', fontWeight:'600'}}>Meghamalai</li>
                <li style={{color : 'red', fontWeight:'600'}}>Vaigai Dam</li>
                <li style={{color : 'red', fontWeight:'600'}}>Saneeswarara Bahawan Temple</li>
                <li style={{color : 'red', fontWeight:'600'}}>Gowmariammn Temple</li>
            </ul><br></br>

            <h6>Foods to Serve</h6>
            <ul>
                <li>Sambar Meals</li><li>Veg Briyani</li><li>Varity Rice</li><li>Chicen Curry</li><li>Veg Meals</li>
            </ul><br></br>
            <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
            <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
            </Popover.Body>
    </Popover>)

const ch = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Chennai to Hogenakkal Packages</Popover.Header>
            <Popover.Body>
            <h6>Places</h6>
            <ul>
                <li style={{color : 'Green', fontWeight:'600'}}>Mettur Dam</li>
                <li style={{color : 'Green', fontWeight:'600'}}>Hogenakkal Falls</li>
                <li style={{color : 'red', fontWeight:'600'}}>Pennagram Village</li>
                <li style={{color : 'red', fontWeight:'600'}}>Theerthamail Temple</li>
                <li style={{color : 'red', fontWeight:'600'}}>Melagiri Hills</li>
            </ul><br></br>

            <h6>Foods to Serve</h6>
            <ul>
                <li>Sambar Meals</li><li>Fish Curry</li><li>Veg Briyani</li><li>Chicken Curry</li><li>Veg Meals</li>
            </ul><br></br>
            <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
            <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
            </Popover.Body>
    </Popover>)

const rc = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Rameshwaram to Chennai Packages</Popover.Header>
            <Popover.Body>
            <h6>Places</h6>
            <ul>
                <li style={{color : 'Green', fontWeight:'600'}}>Kapaleeshwarar Temple</li>
                <li style={{color : 'Green', fontWeight:'600'}}>VGP snow Kingdom</li>
                <li style={{color : 'red', fontWeight:'600'}}>Marina Beach</li>
                <li style={{color : 'red', fontWeight:'600'}}>Besant Nagar Beach</li>
                <li style={{color : 'red', fontWeight:'600'}}>Shiradi Sai Baba Temple</li>
            </ul><br></br>

            <h6>Foods to Serve</h6>
            <ul>
                <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Crab soup</li><li>Veg Meals</li>
            </ul><br></br>
            <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
            <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
            </Popover.Body>
    </Popover>)

const rko = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Rameshwaram to Kodaikanal Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Kodaikanal Lake</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pine Forest</li>
            <li style={{color : 'red', fontWeight:'600'}}>Pillar Rocks</li>
            <li style={{color : 'red', fontWeight:'600'}}>Poombarai Village View</li>
            <li style={{color : 'red', fontWeight:'600'}}>Mannavanur Lake</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Chicken Thandoori</li><li>Chicken Cury</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const ro = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Rameshwaram to Ooty Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Botanical Garden</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pykara Lake</li>
            <li style={{color : 'red', fontWeight:'600'}}>Government Rose Garden</li>
            <li style={{color : 'red', fontWeight:'600'}}>Doddabetta Peak</li>
            <li style={{color : 'red', fontWeight:'600'}}>Avalance Lake</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Chicken Meals</li><li>Parotta</li><li>Fish Fry</li><li>Veg Briyani</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const rka = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Rameshwaram to Kanyakumari Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Vivekananda Rock Memorial</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Sri Lanka view point</li>
            <li style={{color : 'red', fontWeight:'600'}}>Thiruvallur Statue</li>
            <li style={{color : 'red', fontWeight:'600'}}>Our Lady of Ramsom Church</li>
            <li style={{color : 'red', fontWeight:'600'}}>Tsunami Monument</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Crab soup</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const rku = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Rameshwaram to Kumbakonam Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Airavatesvara Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Adi Kumbeswarar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Sarangapani Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Kampasheswarar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Patteeswaram Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Pakoda</li><li>Veg Briyani</li><li>Puliyotharai</li><li>Full Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const rm = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Rameshwaram to Madurai Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Meenatchi Amman Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Thirumali Nayakkar Mahal</li>
            <li style={{color : 'red', fontWeight:'600'}}>Azhagar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Thirupparangundram Murugan Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Aayiram Kaal Mandabam</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Briyani</li><li>Chicken Curry</li><li>Mutton Chukka</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const ry = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Rameshwaram to Yercaud Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Peeku Park</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pagoda Point</li>
            <li style={{color : 'red', fontWeight:'600'}}>Shevaroy Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Big Lake</li>
            <li style={{color : 'red', fontWeight:'600'}}>Karadiyur View point</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Chicken Curry</li><li>Veg Briyani</li><li>Parotta</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const rt = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Rameshwaram to Theni Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Suruli Falls</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Meghamalai</li>
            <li style={{color : 'red', fontWeight:'600'}}>Vaigai Dam</li>
            <li style={{color : 'red', fontWeight:'600'}}>Saneeswarara Bahawan Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Gowmariammn Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Briyani</li><li>Varity Rice</li><li>Chicen Curry</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const rh = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Rameshwaram to Hogenakkal Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Mettur Dam</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Hogenakkal Falls</li>
            <li style={{color : 'red', fontWeight:'600'}}>Pennagram Village</li>
            <li style={{color : 'red', fontWeight:'600'}}>Theerthamail Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Melagiri Hills</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Veg Briyani</li><li>Chicken Curry</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)


const kor = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Kodaikanal to Rameshwaram Packages</Popover.Header>
            <Popover.Body>
            <h6>Places</h6>
            <ul>
                <li style={{color : 'Green', fontWeight:'600'}}>Ramanathasamy Temple</li>
                <li style={{color : 'Green', fontWeight:'600'}}>Dr.Apj.Abdul Kalam Memorial</li>
                <li style={{color : 'red', fontWeight:'600'}}>Agni Theertham</li>
                <li style={{color : 'red', fontWeight:'600'}}>Pamban Bridge</li>
                <li style={{color : 'red', fontWeight:'600'}}>kunthukal Beach</li>
            </ul><br></br>

            <h6>Foods to Serve</h6>
            <ul>
                <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Crab soup</li><li>Veg Meals</li>
            </ul><br></br>
            <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
            <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
            </Popover.Body>
    </Popover>)

const koc = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kodaikanal to Chennai Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Kapaleeshwarar Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>VGP snow Kingdom</li>
            <li style={{color : 'red', fontWeight:'600'}}>Marina Beach</li>
            <li style={{color : 'red', fontWeight:'600'}}>Express Avenue Mall</li>
            <li style={{color : 'red', fontWeight:'600'}}>Shiradi Sai Baba Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Chicken Thandoori</li><li>Chicken Cury</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const koo = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kodaikanal to Ooty Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Botanical Garden</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pykara Lake</li>
            <li style={{color : 'red', fontWeight:'600'}}>Government Rose Garden</li>
            <li style={{color : 'red', fontWeight:'600'}}>Doddabetta Peak</li>
            <li style={{color : 'red', fontWeight:'600'}}>Avalance Lake</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Chicken Meals</li><li>Parotta</li><li>Fish Fry</li><li>Veg Briyani</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const koka = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kodaikanal to Kanyakumari Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Vivekananda Rock Memorial</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Sri Lanka view point</li>
            <li style={{color : 'red', fontWeight:'600'}}>Thiruvallur Statue</li>
            <li style={{color : 'red', fontWeight:'600'}}>Our Lady of Ramsom Church</li>
            <li style={{color : 'red', fontWeight:'600'}}>Tsunami Monument</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Crab soup</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const koku = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kodaikanal to Kumbakonam Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Airavatesvara Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Adi Kumbeswarar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Sarangapani Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Kampasheswarar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Patteeswaram Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Pakoda</li><li>Veg Briyani</li><li>Puliyotharai</li><li>Full Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const kom = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kodaikanal to Madurai Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Meenatchi Amman Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Thirumali Nayakkar Mahal</li>
            <li style={{color : 'red', fontWeight:'600'}}>Azhagar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Thirupparangundram Murugan Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Aayiram Kaal Mandabam</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Briyani</li><li>Chicken Curry</li><li>Mutton Chukka</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const koy = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kodaikanal to Yercaud Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Peeku Park</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pagoda Point</li>
            <li style={{color : 'red', fontWeight:'600'}}>Shevaroy Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Big Lake</li>
            <li style={{color : 'red', fontWeight:'600'}}>Karadiyur View point</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Chicken Curry</li><li>Veg Briyani</li><li>Parotta</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const kot = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kodaikanal to Theni Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Suruli Falls</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Meghamalai</li>
            <li style={{color : 'red', fontWeight:'600'}}>Vaigai Dam</li>
            <li style={{color : 'red', fontWeight:'600'}}>Saneeswarara Bahawan Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Gowmariammn Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Briyani</li><li>Varity Rice</li><li>Chicen Curry</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const koh = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kodaikanal to Hogenakkal Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Mettur Dam</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Hogenakkal Falls</li>
            <li style={{color : 'red', fontWeight:'600'}}>Pennagram Village</li>
            <li style={{color : 'red', fontWeight:'600'}}>Theerthamail Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Melagiri Hills</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Veg Briyani</li><li>Chicken Curry</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)


const or = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Ooty to Rameshwaram Packages</Popover.Header>
            <Popover.Body>
            <h6>Places</h6>
            <ul>
                <li style={{color : 'Green', fontWeight:'600'}}>Ramanathasamy Temple</li>
                <li style={{color : 'Green', fontWeight:'600'}}>Dr.Apj.Abdul Kalam Memorial</li>
                <li style={{color : 'red', fontWeight:'600'}}>Agni Theertham</li>
                <li style={{color : 'red', fontWeight:'600'}}>Pamban Bridge</li>
                <li style={{color : 'red', fontWeight:'600'}}>kunthukal Beach</li>
            </ul><br></br>

            <h6>Foods to Serve</h6>
            <ul>
                <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Crab soup</li><li>Veg Meals</li>
            </ul><br></br>
            <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
            <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
            </Popover.Body>
    </Popover>)

const oko = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Ooty to Kodaikanal Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Kodaikanal Lake</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pine Forest</li>
            <li style={{color : 'red', fontWeight:'600'}}>Pillar Rocks</li>
            <li style={{color : 'red', fontWeight:'600'}}>Poombarai Village View</li>
            <li style={{color : 'red', fontWeight:'600'}}>Mannavanur Lake</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Chicken Thandoori</li><li>Chicken Cury</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const oc = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Ooty to Chennai Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Kapaleeshwar Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>VGP snow Kingdom</li>
            <li style={{color : 'red', fontWeight:'600'}}>Marina Beach</li>
            <li style={{color : 'red', fontWeight:'600'}}>Express Avenue Mall</li>
            <li style={{color : 'red', fontWeight:'600'}}>Shiradi Sai Baba Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Chicken Meals</li><li>Parotta</li><li>Fish Fry</li><li>Veg Briyani</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const oka = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Ooty to Kanyakumari Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Vivekananda Rock Memorial</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Sri Lanka view point</li>
            <li style={{color : 'red', fontWeight:'600'}}>Thiruvallur Statue</li>
            <li style={{color : 'red', fontWeight:'600'}}>Our Lady of Ramsom Church</li>
            <li style={{color : 'red', fontWeight:'600'}}>Tsunami Monument</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Crab soup</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const oku = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Ooty to Kumbakonam Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Airavatesvara Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Adi Kumbeswarar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Sarangapani Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Kampasheswarar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Patteeswaram Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Pakoda</li><li>Veg Briyani</li><li>Puliyotharai</li><li>Full Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const om = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Ooty to Madurai Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Meenatchi Amman Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Thirumali Nayakkar Mahal</li>
            <li style={{color : 'red', fontWeight:'600'}}>Azhagar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Thirupparangundram Murugan Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Aayiram Kaal Mandabam</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Briyani</li><li>Chicken Curry</li><li>Mutton Chukka</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const oy = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Ooty to Yercaud Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Peeku Park</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pagoda Point</li>
            <li style={{color : 'red', fontWeight:'600'}}>Shevaroy Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Big Lake</li>
            <li style={{color : 'red', fontWeight:'600'}}>Karadiyur View point</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Chicken Curry</li><li>Veg Briyani</li><li>Parotta</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const ot = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Ooty to Theni Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Suruli Falls</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Meghamalai</li>
            <li style={{color : 'red', fontWeight:'600'}}>Vaigai Dam</li>
            <li style={{color : 'red', fontWeight:'600'}}>Saneeswarara Bahawan Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Gowmariammn Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Briyani</li><li>Varity Rice</li><li>Chicen Curry</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const oh = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Ooty to Hogenakkal Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Mettur Dam</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Hogenakkal Falls</li>
            <li style={{color : 'red', fontWeight:'600'}}>Pennagram Village</li>
            <li style={{color : 'red', fontWeight:'600'}}>Theerthamail Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Melagiri Hills</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Veg Briyani</li><li>Chicken Curry</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const kar = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Kanyakumari to Rameshwaram Packages</Popover.Header>
            <Popover.Body>
            <h6>Places</h6>
            <ul>
                <li style={{color : 'Green', fontWeight:'600'}}>Ramanathasamy Temple</li>
                <li style={{color : 'Green', fontWeight:'600'}}>Dr.Apj.Abdul Kalam Memorial</li>
                <li style={{color : 'red', fontWeight:'600'}}>Agni Theertham</li>
                <li style={{color : 'red', fontWeight:'600'}}>Pamban Bridge</li>
                <li style={{color : 'red', fontWeight:'600'}}>kunthukal Beach</li>
            </ul><br></br>

            <h6>Foods to Serve</h6>
            <ul>
                <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Crab soup</li><li>Veg Meals</li>
            </ul><br></br>
            <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
            <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
            </Popover.Body>
    </Popover>)

const kako = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kanyakumari to Kodaikanal Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Kodaikanal Lake</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pine Forest</li>
            <li style={{color : 'red', fontWeight:'600'}}>Pillar Rocks</li>
            <li style={{color : 'red', fontWeight:'600'}}>Poombarai Village View</li>
            <li style={{color : 'red', fontWeight:'600'}}>Mannavanur Lake</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Chicken Thandoori</li><li>Chicken Cury</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const kao = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kanyakumari to Ooty Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Botanical Garden</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pykara Lake</li>
            <li style={{color : 'red', fontWeight:'600'}}>Government Rose Garden</li>
            <li style={{color : 'red', fontWeight:'600'}}>Doddabetta Peak</li>
            <li style={{color : 'red', fontWeight:'600'}}>Avalance Lake</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Chicken Meals</li><li>Parotta</li><li>Fish Fry</li><li>Veg Briyani</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const kac = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kanyakumari to Chennai Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Kapaleeshwarar Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>VGP snow Kingdom</li>
            <li style={{color : 'red', fontWeight:'600'}}>Marina Beach</li>
            <li style={{color : 'red', fontWeight:'600'}}>Express Avenue Mall</li>
            <li style={{color : 'red', fontWeight:'600'}}>Shiradi Sai Baba Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Crab soup</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const kaku = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kanyakumari to Kumbakonam Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Airavatesvara Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Adi Kumbeswarar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Sarangapani Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Kampasheswarar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Patteeswaram Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Pakoda</li><li>Veg Briyani</li><li>Puliyotharai</li><li>Full Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const kam = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kanyakumari to Madurai Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Meenatchi Amman Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Thirumali Nayakkar Mahal</li>
            <li style={{color : 'red', fontWeight:'600'}}>Azhagar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Thirupparangundram Murugan Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Aayiram Kaal Mandabam</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Briyani</li><li>Chicken Curry</li><li>Mutton Chukka</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const kay = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kanyakumari to Yercaud Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Peeku Park</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pagoda Point</li>
            <li style={{color : 'red', fontWeight:'600'}}>Shevaroy Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Big Lake</li>
            <li style={{color : 'red', fontWeight:'600'}}>Karadiyur View point</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Chicken Curry</li><li>Veg Briyani</li><li>Parotta</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const kat = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kanyakumari to Theni Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Suruli Falls</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Meghamalai</li>
            <li style={{color : 'red', fontWeight:'600'}}>Vaigai Dam</li>
            <li style={{color : 'red', fontWeight:'600'}}>Saneeswarara Bahawan Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Gowmariammn Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Briyani</li><li>Varity Rice</li><li>Chicen Curry</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const kah = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kanyakumari to Hogenakkal Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Mettur Dam</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Hogenakkal Falls</li>
            <li style={{color : 'red', fontWeight:'600'}}>Pennagram Village</li>
            <li style={{color : 'red', fontWeight:'600'}}>Theerthamail Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Melagiri Hills</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Veg Briyani</li><li>Chicken Curry</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)


const kur = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Kumbakonam to Rameshwaram Packages</Popover.Header>
            <Popover.Body>
            <h6>Places</h6>
            <ul>
                <li style={{color : 'Green', fontWeight:'600'}}>Ramanathasamy Temple</li>
                <li style={{color : 'Green', fontWeight:'600'}}>Dr.Apj.Abdul Kalam Memorial</li>
                <li style={{color : 'red', fontWeight:'600'}}>Agni Theertham</li>
                <li style={{color : 'red', fontWeight:'600'}}>Pamban Bridge</li>
                <li style={{color : 'red', fontWeight:'600'}}>kunthukal Beach</li>
            </ul><br></br>

            <h6>Foods to Serve</h6>
            <ul>
                <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Crab soup</li><li>Veg Meals</li>
            </ul><br></br>
            <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
            <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
            </Popover.Body>
    </Popover>)

const kuko = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kumbakonam to Kodaikanal Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Kodaikanal Lake</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pine Forest</li>
            <li style={{color : 'red', fontWeight:'600'}}>Pillar Rocks</li>
            <li style={{color : 'red', fontWeight:'600'}}>Poombarai Village View</li>
            <li style={{color : 'red', fontWeight:'600'}}>Mannavanur Lake</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Chicken Thandoori</li><li>Chicken Cury</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const kuo = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kumbakonam to Ooty Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Botanical Garden</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pykara Lake</li>
            <li style={{color : 'red', fontWeight:'600'}}>Government Rose Garden</li>
            <li style={{color : 'red', fontWeight:'600'}}>Doddabetta Peak</li>
            <li style={{color : 'red', fontWeight:'600'}}>Avalance Lake</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Chicken Meals</li><li>Parotta</li><li>Fish Fry</li><li>Veg Briyani</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const kuka = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kumbakonam to Kanyakumari Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Vivekananda Rock Memorial</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Sri Lanka view point</li>
            <li style={{color : 'red', fontWeight:'600'}}>Thiruvallur Statue</li>
            <li style={{color : 'red', fontWeight:'600'}}>Our Lady of Ramsom Church</li>
            <li style={{color : 'red', fontWeight:'600'}}>Tsunami Monument</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Crab soup</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const kuc = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kumbakonam to Chennai Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Kapaleeshwarar Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>VGP Snow Kingdom</li>
            <li style={{color : 'red', fontWeight:'600'}}>Marina Beach</li>
            <li style={{color : 'red', fontWeight:'600'}}>Express Avenue Mall</li>
            <li style={{color : 'red', fontWeight:'600'}}>Shiradi Sai Baba Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Pakoda</li><li>Veg Briyani</li><li>Puliyotharai</li><li>Full Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const kum = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kumbakonam to Madurai Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Meenatchi Amman Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Thirumali Nayakkar Mahal</li>
            <li style={{color : 'red', fontWeight:'600'}}>Azhagar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Thirupparangundram Murugan Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Aayiram Kaal Mandabam</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Briyani</li><li>Chicken Curry</li><li>Mutton Chukka</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const kuy = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kumbakonam to Yercaud Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Peeku Park</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pagoda Point</li>
            <li style={{color : 'red', fontWeight:'600'}}>Shevaroy Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Big Lake</li>
            <li style={{color : 'red', fontWeight:'600'}}>Karadiyur View point</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Chicken Curry</li><li>Veg Briyani</li><li>Parotta</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const kut = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kumbakonam to Theni Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Suruli Falls</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Meghamalai</li>
            <li style={{color : 'red', fontWeight:'600'}}>Vaigai Dam</li>
            <li style={{color : 'red', fontWeight:'600'}}>Saneeswarara Bahawan Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Gowmariammn Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Briyani</li><li>Varity Rice</li><li>Chicen Curry</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const kuh = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Kumbakonam to Hogenakkal Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Mettur Dam</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Hogenakkal Falls</li>
            <li style={{color : 'red', fontWeight:'600'}}>Pennagram Village</li>
            <li style={{color : 'red', fontWeight:'600'}}>Theerthamail Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Melagiri Hills</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Veg Briyani</li><li>Chicken Curry</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const mr = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Madurai to Rameshwaram Packages</Popover.Header>
            <Popover.Body>
            <h6>Places</h6>
            <ul>
                <li style={{color : 'Green', fontWeight:'600'}}>Ramanathasamy Temple</li>
                <li style={{color : 'Green', fontWeight:'600'}}>Dr.Apj.Abdul Kalam Memorial</li>
                <li style={{color : 'red', fontWeight:'600'}}>Agni Theertham</li>
                <li style={{color : 'red', fontWeight:'600'}}>Pamban Bridge</li>
                <li style={{color : 'red', fontWeight:'600'}}>kunthukal Beach</li>
            </ul><br></br>

            <h6>Foods to Serve</h6>
            <ul>
                <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Crab soup</li><li>Veg Meals</li>
            </ul><br></br>
            <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
            <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
            </Popover.Body>
    </Popover>)

const mko = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Madurai to Kodaikanal Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Kodaikanal Lake</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pine Forest</li>
            <li style={{color : 'red', fontWeight:'600'}}>Pillar Rocks</li>
            <li style={{color : 'red', fontWeight:'600'}}>Poombarai Village View</li>
            <li style={{color : 'red', fontWeight:'600'}}>Mannavanur Lake</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Chicken Thandoori</li><li>Chicken Cury</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const mo = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Madurai to Ooty Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Botanical Garden</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pykara Lake</li>
            <li style={{color : 'red', fontWeight:'600'}}>Government Rose Garden</li>
            <li style={{color : 'red', fontWeight:'600'}}>Doddabetta Peak</li>
            <li style={{color : 'red', fontWeight:'600'}}>Avalance Lake</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Chicken Meals</li><li>Parotta</li><li>Fish Fry</li><li>Veg Briyani</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const mka = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Madurai to Kanyakumari Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Vivekananda Rock Memorial</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Sri Lanka view point</li>
            <li style={{color : 'red', fontWeight:'600'}}>Thiruvallur Statue</li>
            <li style={{color : 'red', fontWeight:'600'}}>Our Lady of Ramsom Church</li>
            <li style={{color : 'red', fontWeight:'600'}}>Tsunami Monument</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Crab soup</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const mku = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Madurai to Kumbakonam Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Airavatesvara Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Adi Kumbeswarar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Sarangapani Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Kampasheswarar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Patteeswaram Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Pakoda</li><li>Veg Briyani</li><li>Puliyotharai</li><li>Full Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const mc = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Madurai to Chennai Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Kapaleeshwar Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>VGP Snow Kingdom</li>
            <li style={{color : 'red', fontWeight:'600'}}>Marina Beach</li>
            <li style={{color : 'red', fontWeight:'600'}}>Express Avenue Mall</li>
            <li style={{color : 'red', fontWeight:'600'}}>Shiradi Sai Baba Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Briyani</li><li>Chicken Curry</li><li>Mutton Chukka</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const my = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Madurai to Yercaud Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Peeku Park</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pagoda Point</li>
            <li style={{color : 'red', fontWeight:'600'}}>Shevaroy Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Big Lake</li>
            <li style={{color : 'red', fontWeight:'600'}}>Karadiyur View point</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Chicken Curry</li><li>Veg Briyani</li><li>Parotta</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const mt = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Madurai to Theni Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Suruli Falls</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Meghamalai</li>
            <li style={{color : 'red', fontWeight:'600'}}>Vaigai Dam</li>
            <li style={{color : 'red', fontWeight:'600'}}>Saneeswarara Bahawan Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Gowmariammn Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Briyani</li><li>Varity Rice</li><li>Chicen Curry</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const mh = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Madurai to Hogenakkal Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Mettur Dam</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Hogenakkal Falls</li>
            <li style={{color : 'red', fontWeight:'600'}}>Pennagram Village</li>
            <li style={{color : 'red', fontWeight:'600'}}>Theerthamail Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Melagiri Hills</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Veg Briyani</li><li>Chicken Curry</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const yr = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Yercaud to Rameshwaram Packages</Popover.Header>
            <Popover.Body>
            <h6>Places</h6>
            <ul>
                <li style={{color : 'Green', fontWeight:'600'}}>Ramanathasamy Temple</li>
                <li style={{color : 'Green', fontWeight:'600'}}>Dr.Apj.Abdul Kalam Memorial</li>
                <li style={{color : 'red', fontWeight:'600'}}>Agni Theertham</li>
                <li style={{color : 'red', fontWeight:'600'}}>Pamban Bridge</li>
                <li style={{color : 'red', fontWeight:'600'}}>kunthukal Beach</li>
            </ul><br></br>

            <h6>Foods to Serve</h6>
            <ul>
                <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Crab soup</li><li>Veg Meals</li>
            </ul><br></br>
            <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
            <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
            </Popover.Body>
    </Popover>)

const yko = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Yercaud to Kodaikanal Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Kodaikanal Lake</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pine Forest</li>
            <li style={{color : 'red', fontWeight:'600'}}>Pillar Rocks</li>
            <li style={{color : 'red', fontWeight:'600'}}>Poombarai Village View</li>
            <li style={{color : 'red', fontWeight:'600'}}>Mannavanur Lake</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Chicken Thandoori</li><li>Chicken Cury</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const yo = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Yercaud to Ooty Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Botanical Garden</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pykara Lake</li>
            <li style={{color : 'red', fontWeight:'600'}}>Government Rose Garden</li>
            <li style={{color : 'red', fontWeight:'600'}}>Doddabetta Peak</li>
            <li style={{color : 'red', fontWeight:'600'}}>Avalance Lake</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Chicken Meals</li><li>Parotta</li><li>Fish Fry</li><li>Veg Briyani</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const yka = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Yercaud to Kanyakumari Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Vivekananda Rock Memorial</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Sri Lanka view point</li>
            <li style={{color : 'red', fontWeight:'600'}}>Thiruvallur Statue</li>
            <li style={{color : 'red', fontWeight:'600'}}>Our Lady of Ramsom Church</li>
            <li style={{color : 'red', fontWeight:'600'}}>Tsunami Monument</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Crab soup</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const yku = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Yercaud to Kumbakonam Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Airavatesvara Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Adi Kumbeswarar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Sarangapani Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Kampasheswarar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Patteeswaram Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Pakoda</li><li>Veg Briyani</li><li>Puliyotharai</li><li>Full Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const ym = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Yercaud to Madurai Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Meenatchi Amman Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Thirumali Nayakkar Mahal</li>
            <li style={{color : 'red', fontWeight:'600'}}>Azhagar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Thirupparangundram Murugan Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Aayiram Kaal Mandabam</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Briyani</li><li>Chicken Curry</li><li>Mutton Chukka</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const yc = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Yercaud to Chennai Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Kapaleeshwar Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>VGP Snow Kingdom</li>
            <li style={{color : 'red', fontWeight:'600'}}>Marina Beach</li>
            <li style={{color : 'red', fontWeight:'600'}}>Express Avenue Mall</li>
            <li style={{color : 'red', fontWeight:'600'}}>Shiradi Sai Baba Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Chicken Curry</li><li>Veg Briyani</li><li>Parotta</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const yt = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Yercaud to Theni Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Suruli Falls</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Meghamalai</li>
            <li style={{color : 'red', fontWeight:'600'}}>Vaigai Dam</li>
            <li style={{color : 'red', fontWeight:'600'}}>Saneeswarara Bahawan Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Gowmariammn Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Briyani</li><li>Varity Rice</li><li>Chicen Curry</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const yh = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Yercaud to Hogenakkal Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Mettur Dam</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Hogenakkal Falls</li>
            <li style={{color : 'red', fontWeight:'600'}}>Pennagram Village</li>
            <li style={{color : 'red', fontWeight:'600'}}>Theerthamail Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Melagiri Hills</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Veg Briyani</li><li>Chicken Curry</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)


const tr = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Theni to Rameshwaram Packages</Popover.Header>
            <Popover.Body>
            <h6>Places</h6>
            <ul>
                <li style={{color : 'Green', fontWeight:'600'}}>Ramanathasamy Temple</li>
                <li style={{color : 'Green', fontWeight:'600'}}>Dr.Apj.Abdul Kalam Memorial</li>
                <li style={{color : 'red', fontWeight:'600'}}>Agni Theertham</li>
                <li style={{color : 'red', fontWeight:'600'}}>Pamban Bridge</li>
                <li style={{color : 'red', fontWeight:'600'}}>kunthukal Beach</li>
            </ul><br></br>

            <h6>Foods to Serve</h6>
            <ul>
                <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Crab soup</li><li>Veg Meals</li>
            </ul><br></br>
            <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
            <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
            </Popover.Body>
    </Popover>)

const tko = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Theni to Kodaikanal Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Kodaikanal Lake</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pine Forest</li>
            <li style={{color : 'red', fontWeight:'600'}}>Pillar Rocks</li>
            <li style={{color : 'red', fontWeight:'600'}}>Poombarai Village View</li>
            <li style={{color : 'red', fontWeight:'600'}}>Mannavanur Lake</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Chicken Thandoori</li><li>Chicken Cury</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const to = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Theni to Ooty Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Botanical Garden</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pykara Lake</li>
            <li style={{color : 'red', fontWeight:'600'}}>Government Rose Garden</li>
            <li style={{color : 'red', fontWeight:'600'}}>Doddabetta Peak</li>
            <li style={{color : 'red', fontWeight:'600'}}>Avalance Lake</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Chicken Meals</li><li>Parotta</li><li>Fish Fry</li><li>Veg Briyani</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const tka = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Theni to Kanyakumari Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Vivekananda Rock Memorial</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Sri Lanka view point</li>
            <li style={{color : 'red', fontWeight:'600'}}>Thiruvallur Statue</li>
            <li style={{color : 'red', fontWeight:'600'}}>Our Lady of Ramsom Church</li>
            <li style={{color : 'red', fontWeight:'600'}}>Tsunami Monument</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Crab soup</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const tku = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Theni to Kumbakonam Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Airavatesvara Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Adi Kumbeswarar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Sarangapani Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Kampasheswarar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Patteeswaram Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Pakoda</li><li>Veg Briyani</li><li>Puliyotharai</li><li>Full Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const tm = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Theni to Madurai Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Meenatchi Amman Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Thirumali Nayakkar Mahal</li>
            <li style={{color : 'red', fontWeight:'600'}}>Azhagar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Thirupparangundram Murugan Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Aayiram Kaal Mandabam</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Briyani</li><li>Chicken Curry</li><li>Mutton Chukka</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const ty = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Theni to Yercaud Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Peeku Park</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pagoda Point</li>
            <li style={{color : 'red', fontWeight:'600'}}>Shevaroy Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Big Lake</li>
            <li style={{color : 'red', fontWeight:'600'}}>Karadiyur View point</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Chicken Curry</li><li>Veg Briyani</li><li>Parotta</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const tc = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Theni to Chennai Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Kapaleeshwar Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>VGP Snow Kingdom</li>
            <li style={{color : 'red', fontWeight:'600'}}>Marina Beact</li>
            <li style={{color : 'red', fontWeight:'600'}}>Express Avenue Mall</li>
            <li style={{color : 'red', fontWeight:'600'}}>Shiradi Sai Baba Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Briyani</li><li>Varity Rice</li><li>Chicen Curry</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const th = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Theni to Hogenakkal Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Mettur Dam</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Hogenakkal Falls</li>
            <li style={{color : 'red', fontWeight:'600'}}>Pennagram Village</li>
            <li style={{color : 'red', fontWeight:'600'}}>Theerthamail Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Melagiri Hills</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Veg Briyani</li><li>Chicken Curry</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const hr = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Hogenakkal to Rameshwaram Packages</Popover.Header>
            <Popover.Body>
            <h6>Places</h6>
            <ul>
                <li style={{color : 'Green', fontWeight:'600'}}>Ramanathasamy Temple</li>
                <li style={{color : 'Green', fontWeight:'600'}}>Dr.Apj.Abdul Kalam Memorial</li>
                <li style={{color : 'red', fontWeight:'600'}}>Agni Theertham</li>
                <li style={{color : 'red', fontWeight:'600'}}>Pamban Bridge</li>
                <li style={{color : 'red', fontWeight:'600'}}>kunthukal Beach</li>
            </ul><br></br>

            <h6>Foods to Serve</h6>
            <ul>
                <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Crab soup</li><li>Veg Meals</li>
            </ul><br></br>
            <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
            <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
            </Popover.Body>
    </Popover>)

const hko = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Hogenakkal to Kodaikanal Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Kodaikanal Lake</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pine Forest</li>
            <li style={{color : 'red', fontWeight:'600'}}>Pillar Rocks</li>
            <li style={{color : 'red', fontWeight:'600'}}>Poombarai Village View</li>
            <li style={{color : 'red', fontWeight:'600'}}>Mannavanur Lake</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Chicken Thandoori</li><li>Chicken Cury</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const ho = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Hogenakkal to Ooty Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Botanical Garden</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pykara Lake</li>
            <li style={{color : 'red', fontWeight:'600'}}>Government Rose Garden</li>
            <li style={{color : 'red', fontWeight:'600'}}>Doddabetta Peak</li>
            <li style={{color : 'red', fontWeight:'600'}}>Avalance Lake</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Chicken Meals</li><li>Parotta</li><li>Fish Fry</li><li>Veg Briyani</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const hka = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Hogenakkal to Kanyakumari Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Vivekananda Rock Memorial</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Sri Lanka view point</li>
            <li style={{color : 'red', fontWeight:'600'}}>Thiruvallur Statue</li>
            <li style={{color : 'red', fontWeight:'600'}}>Our Lady of Ramsom Church</li>
            <li style={{color : 'red', fontWeight:'600'}}>Tsunami Monument</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Fish Fry</li><li>Crab soup</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const hku = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Hogenakkal to Kumbakonam Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Airavatesvara Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Adi Kumbeswarar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Sarangapani Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Kampasheswarar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Patteeswaram Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Pakoda</li><li>Veg Briyani</li><li>Puliyotharai</li><li>Full Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const hm = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Hogenakkal to Madurai Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Meenatchi Amman Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Thirumali Nayakkar Mahal</li>
            <li style={{color : 'red', fontWeight:'600'}}>Azhagar Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Thirupparangundram Murugan Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Aayiram Kaal Mandabam</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Briyani</li><li>Chicken Curry</li><li>Mutton Chukka</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const hy = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Hogenakkal to Yercaud Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Peeku Park</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Pagoda Point</li>
            <li style={{color : 'red', fontWeight:'600'}}>Shevaroy Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Big Lake</li>
            <li style={{color : 'red', fontWeight:'600'}}>Karadiyur View point</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Chicken Curry</li><li>Veg Briyani</li><li>Parotta</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const ht = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Hogenakkal to Theni Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Suruli Falls</li>
            <li style={{color : 'Green', fontWeight:'600'}}>Meghamalai</li>
            <li style={{color : 'red', fontWeight:'600'}}>Vaigai Dam</li>
            <li style={{color : 'red', fontWeight:'600'}}>Saneeswarara Bahawan Temple</li>
            <li style={{color : 'red', fontWeight:'600'}}>Gowmariammn Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Veg Briyani</li><li>Varity Rice</li><li>Chicen Curry</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)

const hc = (
<Popover id="popover-basic">
    <Popover.Header as="h3">Hogenakkal to Chennai Packages</Popover.Header>
        <Popover.Body>
        <h6>Places</h6>
        <ul>
            <li style={{color : 'Green', fontWeight:'600'}}>Kapaleeshwar Temple</li>
            <li style={{color : 'Green', fontWeight:'600'}}>VGP Snow Kingdom</li>
            <li style={{color : 'red', fontWeight:'600'}}>Marina Beach</li>
            <li style={{color : 'red', fontWeight:'600'}}>Express Avenue Mall</li>
            <li style={{color : 'red', fontWeight:'600'}}>Shiradi Sai Baba Temple</li>
        </ul><br></br>

        <h6>Foods to Serve</h6>
        <ul>
            <li>Sambar Meals</li><li>Fish Curry</li><li>Veg Briyani</li><li>Chicken Curry</li><li>Veg Meals</li>
        </ul><br></br>
        <h6>Hotel to stay</h6><ul><li>Four star Hotel</li></ul>
        <Button variant="success">Pack1</Button>&nbsp;<Button variant="danger">Pack2</Button>&nbsp;<Button variant="primary">Both</Button>
        </Popover.Body>
</Popover>)




    return(
        <>
        <Navbarr />
        <br></br><br></br>
        <Container>
            <Row>
                <Col><img className="top-img" src="https://3.imimg.com/data3/TB/VA/MY-10512970/luxury-tourist-bus-service-500x500.jpg"></img></Col>
                <Col><h3 className="text-start">Best Packages to Visit Places</h3>
                <p><span></span>In this packages we have mentioned about full packages about district-vise visit to one places to another places. Based on that you can choose one place to go and we have some package details of that particular places in the district. For an example if you are chennai , now you are choosed the place Ooty means, we have provide some details about that packages in Ooty, with Food, Accomodation places, places to visity in that timings.</p>
                <p><span></span>You can get clear idea about how to visit places, because we are provide some place guides with your bookings. They will plan everything about your foods, places, Accomodation rooms, the only thing is you need to pay the full amount before you are going to visit the places. Then the person can see everything need for the tourists.Then we are also having a special packages also, for further deatails scroll down.</p>
                </Col>
            </Row>
        </Container><br></br><br></br><br></br>

        <Container>
            <h2>Best Packages To Purchase</h2>
            <h4>TAMILNADU TOURISM</h4>
        </Container><br></br><br></br><br></br>

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
            <h2 className="text-start">01.Chennai</h2>
        </Container><br></br>
        
        <Container>
            <Row>
                <Col>
                    <h3 className="text-start">Chennai to Other Place Visit</h3>
                    <p><span></span>The people from Chennai choose one the places of below districts based on that we are prodive tourists places based on the popularity of that district. If you are choosing the Madurai district, in that Temples like Thiruparangundram Murugan Temple, Meenatchi Amman Temple and etc, then Ayiram Kaal Mandabam in Maudrai districts like that we are provide places.</p>
                    <p><span></span>Based on the places count we are incresing the price of the whole trips, and days count. We have a package of minimum two days to maximum three days of district visit, and one day to return to starting place. The tourist guide will guide you in all places. So don't worry about places details. If you don't know about place details they will help you in any situation. One thing you need to follow, that is without inform, you can't able to any places. If you are going alone, finding you is difficult task some times.</p>
                </Col>
                <Col><img className="dist-images" src="https://upload.wikimedia.org/wikipedia/commons/3/32/Chennai_Central.jpg"></img></Col>
            </Row>
        </Container>

        
    
        <Container>  
            <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./rameshwarem2.jpeg" />
                            <Card.Body>
                                <Card.Title>Chennai To Rameshwaram</Card.Title>
                                    <Card.Text>
                                        <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4399</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6999</h5>
                                        <h5 className="text-center">Both - ₹9199</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={cr}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./Kanyakumari1 (1).jpeg" />
                            <Card.Body>
                                <Card.Title>Chennai To Kanyakumari</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹5500</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹7500</h5>
                                        <h5 className="text-center">Both - ₹8999</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={cka}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./Ooty1 (1).jpeg" />
                            <Card.Body>
                                <Card.Title>Chennai To Ooty</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4000</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6000</h5>
                                        <h5 className="text-center">Both - ₹8000</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={co}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
                

                <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./kodaikanal2.jpeg" />
                            <Card.Body>
                                <Card.Title>Chennai To Kodaikanal</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4400</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6600</h5>
                                        <h5 className="text-center">Both - ₹8800</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={cko}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./kumbakonam1.(2).jpeg" />
                            <Card.Body>
                                <Card.Title>Chennai To Kumbakonam</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹2599</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹4599</h5>
                                        <h5 className="text-center">Both - ₹6599</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={cku}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="madurai3.jpeg" />
                            <Card.Body>
                                <Card.Title>Chennai To Madurai</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3999</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5999</h5>
                                        <h5 className="text-center">Both - ₹7999</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={cm}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
                
                <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img style={{height : '215px'}} variant="top" src="./yercaud1.(3).jpeg" />
                            <Card.Body>
                                <Card.Title>Chennai To Yercaud</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3500</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5500</h5>
                                        <h5 className="text-center">Both - ₹7500</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={cy}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img style={{height :'215px'}} variant="top" src="./theni1.(4).jpeg" />
                            <Card.Body>
                                <Card.Title>Chennai To Theni</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4100</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6200</h5>
                                        <h5 className="text-center">Both - ₹7700</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={ct}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img style={{height :'215px'}} variant="top" src="./hogenakkal1.jpeg" />
                            <Card.Body>
                                <Card.Title>Chennai To Hogenakkal</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3250</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5250</h5>
                                        <h5 className="text-center">Both - ₹7500</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={ch}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
        </Container><br></br><br></br><br></br><br></br>
        

        <Container id="Rameshwaram">
            <h2 className="text-start">02.Rameshwaram</h2>
        </Container><br></br>
        
        <Container>
            <Row>
                <Col>
                    <h3 className="text-start">Rameshwaram to Other Place Visit</h3>
                    <p><span></span>The people from Rameshwaram choose one the places of below districts based on that we are prodive tourists places based on the popularity of that district. If you are choosing the Madurai district, in that Temples like Thiruparangundram Murugan Temple, Meenatchi Amman Temple and etc, then Ayiram Kaal Mandabam in Maudrai districts like that we are provide places.</p>
                    <p><span></span>Based on the places count we are incresing the price of the whole trips, and days count. We have a package of minimum two days to maximum three days of district visit, and one day to return to starting place. The tourist guide will guide you in all places. So don't worry about places details. If you don't know about place details they will help you in any situation. One thing you need to follow, that is without inform, you can't able to any places. If you are going alone, finding you is difficult task some times.</p>
                </Col>
                <Col><img className="dist-images" src="https://amazemytrip.com/wp-content/uploads/2019/02/Pamban-Bridge.jpg"></img></Col>
            </Row>
        </Container>

        
    
        <Container>  
            <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./chennai1.jpeg" />
                            <Card.Body>
                                <Card.Title>Rameshwaram To Chennai</Card.Title>
                                    <Card.Text>
                                        <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4250</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6660</h5>
                                        <h5 className="text-center">Both - ₹8699</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={rc}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./Kanyakumari1 (4).jpeg" />
                            <Card.Body>
                                <Card.Title>Rameshwaram To Kanyakumari</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹1000</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹3000</h5>
                                        <h5 className="text-center">Both - ₹5000</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={rka}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./Ooty1 (2).jpeg" />
                            <Card.Body>
                                <Card.Title>Rameshwaram To Ooty</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4001</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5550</h5>
                                        <h5 className="text-center">Both - ₹8019</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={ro}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
                

                <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./kodaikanal4.jpeg" />
                            <Card.Body>
                                <Card.Title>Rameshwaram To Kodaikanal</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4009</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6120</h5>
                                        <h5 className="text-center">Both - ₹8100</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={rko}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./kumbakonam1.(1).jpeg" />
                            <Card.Body>
                                <Card.Title>Rameshwaram To Kumbakonam</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4090</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6500</h5>
                                        <h5 className="text-center">Both - ₹8050</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={rku}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="madurai2.jpeg" />
                            <Card.Body>
                                <Card.Title>Rameshwaram To Madurai</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4100</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6200</h5>
                                        <h5 className="text-center">Both - ₹8100</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={rm}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
                
                <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img style={{height : '215px'}} variant="top" src="./yercaud1.(4).jpeg" />
                            <Card.Body>
                                <Card.Title>Rameshwaram To Yercaud</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4550</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6250</h5>
                                        <h5 className="text-center">Both - ₹8350</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={ry}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img style={{height :'215px'}} variant="top" src="./theni1.(3).jpeg" />
                            <Card.Body>
                                <Card.Title>Rameshwaram To Theni</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4101</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6020</h5>
                                        <h5 className="text-center">Both - ₹8180</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={rt}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img style={{height :'215px'}} variant="top" src="./hogenakkal2..jpeg" />
                            <Card.Body>
                                <Card.Title>Rameshwaram To Hogenakkal</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4250</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6450</h5>
                                        <h5 className="text-center">Both - ₹8120</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={rh}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
        </Container><br></br><br></br><br></br><br></br>

        <Container id="Kodaikanal">
            <h2 className="text-start">03.Kodaikanal</h2>
        </Container><br></br>
        
        <Container>
            <Row>
                <Col>
                    <h3 className="text-start">Kodaikanal to Other Place Visit</h3>
                    <p><span></span>The people from Kodaikanal choose one the places of below districts based on that we are prodive tourists places based on the popularity of that district. If you are choosing the Madurai district, in that Temples like Thiruparangundram Murugan Temple, Meenatchi Amman Temple and etc, then Ayiram Kaal Mandabam in Maudrai districts like that we are provide places.</p>
                    <p><span></span>Based on the places count we are incresing the price of the whole trips, and days count. We have a package of minimum two days to maximum three days of district visit, and one day to return to starting place. The tourist guide will guide you in all places. So don't worry about places details. If you don't know about place details they will help you in any situation. One thing you need to follow, that is without inform, you can't able to any places. If you are going alone, finding you is difficult task some times.</p>
                </Col>
                <Col><img className="dist-images" src="https://www.tusktravel.com/blog/wp-content/uploads/2022/08/Poombarai-Village-Kodaikanal-Tamil-Nadu.jpg"></img></Col>
            </Row>
        </Container>

        
    
        <Container>  
            <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./Rameshwaram3..jpeg" />
                            <Card.Body>
                                <Card.Title>Kodaikanal To Rameshwaram</Card.Title>
                                    <Card.Text>
                                        <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4150</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6350</h5>
                                        <h5 className="text-center">Both - ₹8100</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={kor}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./Kanyakumari1 (4).jpeg" />
                            <Card.Body>
                                <Card.Title>Kodaikanal To Kanyakumari</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4500</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5600</h5>
                                        <h5 className="text-center">Both - ₹7999</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={koka}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./chennai3...jpeg" />
                            <Card.Body>
                                <Card.Title>Kodaikanal To Chennai</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹5500</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹7120</h5>
                                        <h5 className="text-center">Both - ₹9300</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={koc}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
                

                <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./ooty1 (2).jpeg" />
                            <Card.Body>
                                <Card.Title>Kodaikanal To Ooty</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3150</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5350</h5>
                                        <h5 className="text-center">Both - ₹7569</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={koo}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./kumbakonam1.(2).jpeg" />
                            <Card.Body>
                                <Card.Title>Kodaikanal To Kumbakonam</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4100</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6300</h5>
                                        <h5 className="text-center">Both - ₹8400</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={koku}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="madurai3.jpeg" />
                            <Card.Body>
                                <Card.Title>Kodaikanal To Madurai</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4000</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6000</h5>
                                        <h5 className="text-center">Both - ₹8000</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={kom}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
                
                <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img style={{height : '215px'}} variant="top" src="./yercaud...(1).jpeg" />
                            <Card.Body>
                                <Card.Title>Kodaikanal To Yercaud</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3700</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5300</h5>
                                        <h5 className="text-center">Both - ₹7800</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={koy}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img style={{height :'215px'}} variant="top" src="./theni1.(4).jpeg" />
                            <Card.Body>
                                <Card.Title>Kodaikanal To Theni</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹2000</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹4000</h5>
                                        <h5 className="text-center">Both - ₹6250</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={kot}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img style={{height :'215px'}} variant="top" src="./hogenakkal1.jpeg" />
                            <Card.Body>
                                <Card.Title>Kodaikanal To Hogenakkal</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3555</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5500</h5>
                                        <h5 className="text-center">Both - ₹7799</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={koh}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
        </Container><br></br><br></br><br></br><br></br>


        <Container id="Ooty">
            <h2 className="text-start">04.Ooty</h2>
        </Container><br></br>
        
        <Container>
            <Row>
                <Col>
                    <h3 className="text-start">Ooty to Other Place Visit</h3>
                    <p><span></span>The people from Ooty choose one the places of below districts based on that we are prodive tourists places based on the popularity of that district. If you are choosing the Madurai district, in that Temples like Thiruparangundram Murugan Temple, Meenatchi Amman Temple and etc, then Ayiram Kaal Mandabam in Maudrai districts like that we are provide places.</p>
                    <p><span></span>Based on the places count we are incresing the price of the whole trips, and days count. We have a package of minimum two days to maximum three days of district visit, and one day to return to starting place. The tourist guide will guide you in all places. So don't worry about places details. If you don't know about place details they will help you in any situation. One thing you need to follow, that is without inform, you can't able to any places. If you are going alone, finding you is difficult task some times.</p>
                </Col>
                <Col><img className="dist-images" src="https://www.outlookindia.com/outlooktraveller/resizer.php?src=https://www.outlookindia.com/outlooktraveller/public/uploads/2017/03/featured-image-6.jpg&w=500&h=400"></img></Col>
            </Row>
        </Container>

        
    
        <Container>  
            <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./rameshwarem2.jpeg" />
                            <Card.Body>
                                <Card.Title>Ooty To Rameshwaram</Card.Title>
                                    <Card.Text>
                                        <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4450</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6500</h5>
                                        <h5 className="text-center">Both - ₹8000</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={or}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./Kanyakumari1 (1).jpeg" />
                            <Card.Body>
                                <Card.Title>Ooty To Kanyakumari</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3899</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6666</h5>
                                        <h5 className="text-center">Both - ₹8898</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={oka}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./chennai2.jpeg" />
                            <Card.Body>
                                <Card.Title>Ooty To Chennai</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4400</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5500</h5>
                                        <h5 className="text-center">Both - ₹8000</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={oc}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
                

                <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./kodaikanal2.jpeg" />
                            <Card.Body>
                                <Card.Title>Ooty To Kodaikanal</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹2560</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹4120</h5>
                                        <h5 className="text-center">Both - ₹5460</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={oko}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./kumbakonam1.(2).jpeg" />
                            <Card.Body>
                                <Card.Title>Ooty To Kumbakonam</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4000</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6000</h5>
                                        <h5 className="text-center">Both - ₹8000</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={oku}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="madurai3.jpeg" />
                            <Card.Body>
                                <Card.Title>Ooty To Madurai</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3500</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5500</h5>
                                        <h5 className="text-center">Both - ₹7777</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={om}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
                
                <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img style={{height : '215px'}} variant="top" src="./yercaud1.(3).jpeg" />
                            <Card.Body>
                                <Card.Title>Ooty To Yercaud</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹2699</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹4599</h5>
                                        <h5 className="text-center">Both - ₹7199</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={oy}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img style={{height :'215px'}} variant="top" src="./theni1.(4).jpeg" />
                            <Card.Body>
                                <Card.Title>Ooty To Theni</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3000</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5250</h5>
                                        <h5 className="text-center">Both - ₹7500</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={ot}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img style={{height :'215px'}} variant="top" src="./hogenakkal1.jpeg" />
                            <Card.Body>
                                <Card.Title>Ooty To Hogenakkal</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3250</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5100</h5>
                                        <h5 className="text-center">Both - ₹7200</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={oh}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
        </Container><br></br><br></br><br></br><br></br>

        <Container id="Kanyakumari">
            <h2 className="text-start">05.Kanyakumari</h2>
        </Container><br></br>
        
        <Container>
            <Row>
                <Col>
                    <h3 className="text-start">KanyaKumari to Other Place Visit</h3>
                    <p><span></span>The people from Kanyakumari choose one the places of below districts based on that we are prodive tourists places based on the popularity of that district. If you are choosing the Madurai district, in that Temples like Thiruparangundram Murugan Temple, Meenatchi Amman Temple and etc, then Ayiram Kaal Mandabam in Maudrai districts like that we are provide places.</p>
                    <p><span></span>Based on the places count we are incresing the price of the whole trips, and days count. We have a package of minimum two days to maximum three days of district visit, and one day to return to starting place. The tourist guide will guide you in all places. So don't worry about places details. If you don't know about place details they will help you in any situation. One thing you need to follow, that is without inform, you can't able to any places. If you are going alone, finding you is difficult task some times.</p>
                </Col>
                <Col><img className="dist-images" src="https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/kanyakumari-1656091428_cf69d9a9dbec82018046.jpg"></img></Col>
            </Row>
        </Container>

        
    
        <Container>  
            <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./rameshwarem2.jpeg" />
                            <Card.Body>
                                <Card.Title>Kanyakumari To Rameshwaram</Card.Title>
                                    <Card.Text>
                                        <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹1250</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹3350</h5>
                                        <h5 className="text-center">Both - ₹5550</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={kar}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./chennai2.jpeg" />
                            <Card.Body>
                                <Card.Title>Kanyakumari To Chennai</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹5000</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹7000</h5>
                                        <h5 className="text-center">Both - ₹9000</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={kac}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./Ooty1 (1).jpeg" />
                            <Card.Body>
                                <Card.Title>Kanyakumari To Ooty</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4500</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6900</h5>
                                        <h5 className="text-center">Both - ₹8800</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={kao}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
                

                <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./kodaikanal2.jpeg" />
                            <Card.Body>
                                <Card.Title>Kanyakumari To Kodaikanal</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4299</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6799</h5>
                                        <h5 className="text-center">Both - ₹8999</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={kako}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./kumbakonam1.(2).jpeg" />
                            <Card.Body>
                                <Card.Title>Kanyakumari To Kumbakonam</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3599</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹4599</h5>
                                        <h5 className="text-center">Both - ₹7599</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={kaku}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="madurai3.jpeg" />
                            <Card.Body>
                                <Card.Title>Kanyakumari To Madurai</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3999</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6399</h5>
                                        <h5 className="text-center">Both - ₹7999</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={kam}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
                
                <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img style={{height : '215px'}} variant="top" src="./yercaud1.(3).jpeg" />
                            <Card.Body>
                                <Card.Title>Kanyakumari To Yercaud</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4599</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5699</h5>
                                        <h5 className="text-center">Both - ₹8799</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={kay}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img style={{height :'215px'}} variant="top" src="./theni1.(4).jpeg" />
                            <Card.Body>
                                <Card.Title>Kanyakumari To Theni</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3999</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5399</h5>
                                        <h5 className="text-center">Both - ₹7899</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={kat}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img style={{height :'215px'}} variant="top" src="./hogenakkal1.jpeg" />
                            <Card.Body>
                                <Card.Title>Kanyakumari To Hogenakkal</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4000</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6000</h5>
                                        <h5 className="text-center">Both - ₹8000</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={kah}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
        </Container><br></br><br></br><br></br><br></br>

        <Container id="Kumbakonam">
            <h2 className="text-start">06.Kumbakonam</h2>
        </Container><br></br>
        
        <Container>
            <Row>
                <Col>
                    <h3 className="text-start">Kumbakonam to Other Place Visit</h3>
                    <p><span></span>The people from Kumbakonam choose one the places of below districts based on that we are prodive tourists places based on the popularity of that district. If you are choosing the Madurai district, in that Temples like Thiruparangundram Murugan Temple, Meenatchi Amman Temple and etc, then Ayiram Kaal Mandabam in Maudrai districts like that we are provide places.</p>
                    <p><span></span>Based on the places count we are incresing the price of the whole trips, and days count. We have a package of minimum two days to maximum three days of district visit, and one day to return to starting place. The tourist guide will guide you in all places. So don't worry about places details. If you don't know about place details they will help you in any situation. One thing you need to follow, that is without inform, you can't able to any places. If you are going alone, finding you is difficult task some times.</p>
                </Col>
                <Col><img className="dist-images" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/d8/60/3b/darasuram-airavateswara.jpg?w=500&h=-1&s=1"></img></Col>
            </Row>
        </Container>

        
    
        <Container>  
            <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./rameshwarem2.jpeg" />
                            <Card.Body>
                                <Card.Title>Kumbakonam To Rameshwaram</Card.Title>
                                    <Card.Text>
                                        <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4199</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5799</h5>
                                        <h5 className="text-center">Both - ₹7999</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={kur}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./Kanyakumari1 (1).jpeg" />
                            <Card.Body>
                                <Card.Title>Kumbakonam To Kanyakumari</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4299</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5299</h5>
                                        <h5 className="text-center">Both - ₹7899</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={kuka}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./Ooty1 (1).jpeg" />
                            <Card.Body>
                                <Card.Title>Kumbakonam To Ooty</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3799</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹4999</h5>
                                        <h5 className="text-center">Both - ₹7999</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={kuo}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
                

                <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./kodaikanal2.jpeg" />
                            <Card.Body>
                                <Card.Title>Kumbakonam To Kodaikanal</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3499</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹4566</h5>
                                        <h5 className="text-center">Both - ₹7899</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={kuko}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./chennai2.jpeg" />
                            <Card.Body>
                                <Card.Title>Kumbakonam To Chennai</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3299</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5299</h5>
                                        <h5 className="text-center">Both - ₹8299</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={kuc}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="madurai3.jpeg" />
                            <Card.Body>
                                <Card.Title>Kumbakonam To Madurai</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3399</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5699</h5>
                                        <h5 className="text-center">Both - ₹7899</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={kum}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
                
                <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img style={{height : '215px'}} variant="top" src="./yercaud1.(3).jpeg" />
                            <Card.Body>
                                <Card.Title>Kumbakonam To Yercaud</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3299</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹4899</h5>
                                        <h5 className="text-center">Both - ₹7899</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={kuy}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img style={{height :'215px'}} variant="top" src="./theni1.(4).jpeg" />
                            <Card.Body>
                                <Card.Title>Kumbakonam To Theni</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3699</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5699</h5>
                                        <h5 className="text-center">Both - ₹7899</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={kut}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img style={{height :'215px'}} variant="top" src="./hogenakkal1.jpeg" />
                            <Card.Body>
                                <Card.Title>Kumbakonam To Hogenakkal</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3499</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹8599</h5>
                                        <h5 className="text-center">Both - ₹7999</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={kuh}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
        </Container><br></br><br></br><br></br><br></br>

        <Container id="Madurai">
            <h2 className="text-start">07.Maudrai</h2>
        </Container><br></br>
        
        <Container>
            <Row>
                <Col>
                    <h3 className="text-start">Madurai to Other Place Visit</h3>
                    <p><span></span>The people from Madurai choose one the places of below districts based on that we are prodive tourists places based on the popularity of that district. If you are choosing the Madurai district, in that Temples like Thiruparangundram Murugan Temple, Meenatchi Amman Temple and etc, then Ayiram Kaal Mandabam in Maudrai districts like that we are provide places.</p>
                    <p><span></span>Based on the places count we are incresing the price of the whole trips, and days count. We have a package of minimum two days to maximum three days of district visit, and one day to return to starting place. The tourist guide will guide you in all places. So don't worry about places details. If you don't know about place details they will help you in any situation. One thing you need to follow, that is without inform, you can't able to any places. If you are going alone, finding you is difficult task some times.</p>
                </Col>
                <Col><img className="dist-images" src="https://img.onmanorama.com/content/dam/mm/en/food/features/images/2022/10/8/madurai-temple-1.jpg"></img></Col>
            </Row>
        </Container>

        
    
        <Container>  
            <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./rameshwarem2.jpeg" />
                            <Card.Body>
                                <Card.Title>Madurai To Rameshwaram</Card.Title>
                                    <Card.Text>
                                        <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3699</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5799</h5>
                                        <h5 className="text-center">Both - ₹8199</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={mr}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./Kanyakumari1 (1).jpeg" />
                            <Card.Body>
                                <Card.Title>Madurai To Kanyakumari</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3700</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹4800</h5>
                                        <h5 className="text-center">Both - ₹9100</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={mka}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./Ooty1 (1).jpeg" />
                            <Card.Body>
                                <Card.Title>Madurai To Ooty</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹2999</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5999</h5>
                                        <h5 className="text-center">Both - ₹7699</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={mo}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
                

                <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./kodaikanal2.jpeg" />
                            <Card.Body>
                                <Card.Title>Madurai To Kodaikanal</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹2500</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹4500</h5>
                                        <h5 className="text-center">Both - ₹7500</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={mko}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./kumbakonam1.(2).jpeg" />
                            <Card.Body>
                                <Card.Title>Madurai To Kumbakonam</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3699</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5699</h5>
                                        <h5 className="text-center">Both - ₹7399</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={mku}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="chennai3...jpeg" />
                            <Card.Body>
                                <Card.Title>Madurai To Chennai</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4599</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6999</h5>
                                        <h5 className="text-center">Both - ₹9699</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={mc}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
                
                <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img style={{height : '215px'}} variant="top" src="./yercaud1.(3).jpeg" />
                            <Card.Body>
                                <Card.Title>Madurai To Yercaud</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3299</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5666</h5>
                                        <h5 className="text-center">Both - ₹7899</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={my}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img style={{height :'215px'}} variant="top" src="./theni1.(4).jpeg" />
                            <Card.Body>
                                <Card.Title>Madurai To Theni</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹1200</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹3500</h5>
                                        <h5 className="text-center">Both - ₹6500</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={mt}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img style={{height :'215px'}} variant="top" src="./hogenakkal1.jpeg" />
                            <Card.Body>
                                <Card.Title>Madurai To Hogenakkal</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3699</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5969</h5>
                                        <h5 className="text-center">Both - ₹8199</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={mh}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
        </Container><br></br><br></br><br></br><br></br>

        <Container id="Yercaud">
            <h2 className="text-start">08.Yercaud</h2>
        </Container><br></br>
        
        <Container>
            <Row>
                <Col>
                    <h3 className="text-start">Yercaud to Other Place Visit</h3>
                    <p><span></span>The people from Yercaud choose one the places of below districts based on that we are prodive tourists places based on the popularity of that district. If you are choosing the Madurai district, in that Temples like Thiruparangundram Murugan Temple, Meenatchi Amman Temple and etc, then Ayiram Kaal Mandabam in Maudrai districts like that we are provide places.</p>
                    <p><span></span>Based on the places count we are incresing the price of the whole trips, and days count. We have a package of minimum two days to maximum three days of district visit, and one day to return to starting place. The tourist guide will guide you in all places. So don't worry about places details. If you don't know about place details they will help you in any situation. One thing you need to follow, that is without inform, you can't able to any places. If you are going alone, finding you is difficult task some times.</p>
                </Col>
                <Col><img className="dist-images" src="https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/yercaud-1655195956_933bcf09b795c911c7ed.webp"></img></Col>
            </Row>
        </Container>

        
    
        <Container>  
            <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./rameshwarem2.jpeg" />
                            <Card.Body>
                                <Card.Title>Yercaud To Rameshwaram</Card.Title>
                                    <Card.Text>
                                        <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3999</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5999</h5>
                                        <h5 className="text-center">Both - ₹8999</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={yr}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./Kanyakumari1 (1).jpeg" />
                            <Card.Body>
                                <Card.Title>Yercaud To Kanyakumari</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹5000</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹7000</h5>
                                        <h5 className="text-center">Both - ₹10000</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={yka}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./Ooty1 (1).jpeg" />
                            <Card.Body>
                                <Card.Title>Yercaud To Ooty</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹2999</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5639</h5>
                                        <h5 className="text-center">Both - ₹7599</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={yo}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
                

                <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./kodaikanal2.jpeg" />
                            <Card.Body>
                                <Card.Title>Yercaud To Kodaikanal</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3199</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹4699</h5>
                                        <h5 className="text-center">Both - ₹7199</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={yko}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./kumbakonam1.(2).jpeg" />
                            <Card.Body>
                                <Card.Title>Yercaud To Kumbakonam</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹2899</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹4999</h5>
                                        <h5 className="text-center">Both - ₹6999</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={yku}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="madurai3.jpeg" />
                            <Card.Body>
                                <Card.Title>Yercaud To Madurai</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3799</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5999</h5>
                                        <h5 className="text-center">Both - ₹8599</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={ym}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
                
                <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img style={{height : '215px'}} variant="top" src="./chennai2.jpeg" />
                            <Card.Body>
                                <Card.Title>Yercaud To Chennai</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4199</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5699</h5>
                                        <h5 className="text-center">Both - ₹7999</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={yc}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img style={{height :'215px'}} variant="top" src="./theni1.(4).jpeg" />
                            <Card.Body>
                                <Card.Title>Yercaud To Theni</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3599</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5969</h5>
                                        <h5 className="text-center">Both - ₹8459</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={yt}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img style={{height :'215px'}} variant="top" src="./hogenakkal1.jpeg" />
                            <Card.Body>
                                <Card.Title>Yercaud To Hogenakkal</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹2599</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹3599</h5>
                                        <h5 className="text-center">Both - ₹5555</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={yh}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
        </Container><br></br><br></br><br></br><br></br>

        <Container id="Theni">
            <h2 className="text-start">09.Theni</h2>
        </Container><br></br>
        
        <Container>
            <Row>
                <Col>
                    <h3 className="text-start">Theni to Other Place Visit</h3>
                    <p><span></span>The people from Theni choose one the places of below districts based on that we are prodive tourists places based on the popularity of that district. If you are choosing the Madurai district, in that Temples like Thiruparangundram Murugan Temple, Meenatchi Amman Temple and etc, then Ayiram Kaal Mandabam in Maudrai districts like that we are provide places.</p>
                    <p><span></span>Based on the places count we are incresing the price of the whole trips, and days count. We have a package of minimum two days to maximum three days of district visit, and one day to return to starting place. The tourist guide will guide you in all places. So don't worry about places details. If you don't know about place details they will help you in any situation. One thing you need to follow, that is without inform, you can't able to any places. If you are going alone, finding you is difficult task some times.</p>
                </Col>
                <Col><img className="dist-images" src="https://tourld.com/wp-content/uploads/2022/11/Untitled-design-69.jpg"></img></Col>
            </Row>
        </Container>

        
    
        <Container>  
            <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./rameshwarem2.jpeg" />
                            <Card.Body>
                                <Card.Title>Theni To Rameshwaram</Card.Title>
                                    <Card.Text>
                                        <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3899</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5199</h5>
                                        <h5 className="text-center">Both - ₹7599</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={tr}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./Kanyakumari1 (1).jpeg" />
                            <Card.Body>
                                <Card.Title>Theni To Kanyakumari</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4000</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6299</h5>
                                        <h5 className="text-center">Both - ₹8444</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={tka}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./Ooty1 (1).jpeg" />
                            <Card.Body>
                                <Card.Title>Theni To Ooty</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3499</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5499</h5>
                                        <h5 className="text-center">Both - ₹8199</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={to}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
                

                <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./kodaikanal2.jpeg" />
                            <Card.Body>
                                <Card.Title>Theni To Kodaikanal</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹1799</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹3299</h5>
                                        <h5 className="text-center">Both - ₹5555</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={tko}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./kumbakonam1.(2).jpeg" />
                            <Card.Body>
                                <Card.Title>Theni To Kumbakonam</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3799</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5699</h5>
                                        <h5 className="text-center">Both - ₹8799</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={tku}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="madurai3.jpeg" />
                            <Card.Body>
                                <Card.Title>Theni To Madurai</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹1299</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹3499</h5>
                                        <h5 className="text-center">Both - ₹5999</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={tm}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
                
                <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img style={{height : '215px'}} variant="top" src="./yercaud1.(3).jpeg" />
                            <Card.Body>
                                <Card.Title>Theni To Yercaud</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3499</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5999</h5>
                                        <h5 className="text-center">Both - ₹6777</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={ty}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img style={{height :'215px'}} variant="top" src="./chennai2.jpeg" />
                            <Card.Body>
                                <Card.Title>Theni To Chennai</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4567</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6789</h5>
                                        <h5 className="text-center">Both - ₹8999</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={tc}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img style={{height :'215px'}} variant="top" src="./hogenakkal1.jpeg" />
                            <Card.Body>
                                <Card.Title>Theni To Hogenakkal</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3299</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5677</h5>
                                        <h5 className="text-center">Both - ₹8929</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={th}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
        </Container><br></br><br></br><br></br><br></br>

        <Container id="Hogenakkal">
            <h2 className="text-start">10.Hogenakkal</h2>
        </Container><br></br>
        
        <Container>
            <Row>
                <Col>
                    <h3 className="text-start">Hogenakkal to Other Place Visit</h3>
                    <p><span></span>The people from Hogenakkal choose one the places of below districts based on that we are prodive tourists places based on the popularity of that district. If you are choosing the Madurai district, in that Temples like Thiruparangundram Murugan Temple, Meenatchi Amman Temple and etc, then Ayiram Kaal Mandabam in Maudrai districts like that we are provide places.</p>
                    <p><span></span>Based on the places count we are incresing the price of the whole trips, and days count. We have a package of minimum two days to maximum three days of district visit, and one day to return to starting place. The tourist guide will guide you in all places. So don't worry about places details. If you don't know about place details they will help you in any situation. One thing you need to follow, that is without inform, you can't able to any places. If you are going alone, finding you is difficult task some times.</p>
                </Col>
                <Col><img className="dist-images" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Hogenakkal_Falls_Close.jpg/640px-Hogenakkal_Falls_Close.jpg"></img></Col>
            </Row>
        </Container>

        
    
        <Container>  
            <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./rameshwarem2.jpeg" />
                            <Card.Body>
                                <Card.Title>Hogenakkal To Rameshwaram</Card.Title>
                                    <Card.Text>
                                        <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4999</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6999</h5>
                                        <h5 className="text-center">Both - ₹8999</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={hr}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./Kanyakumari1 (1).jpeg" />
                            <Card.Body>
                                <Card.Title>Hogenakkal To Kanyakumari</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹5999</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹7999</h5>
                                        <h5 className="text-center">Both - ₹9999</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={hka}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./Ooty1 (1).jpeg" />
                            <Card.Body>
                                <Card.Title>Hogenakkal To Ooty</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3799</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6799</h5>
                                        <h5 className="text-center">Both - ₹8599</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={ho}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
                

                <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./kodaikanal2.jpeg" />
                            <Card.Body>
                                <Card.Title>Hogenakkal To Kodaikanal</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4599</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹6699</h5>
                                        <h5 className="text-center">Both - ₹8888</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={hko}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="./kumbakonam1.(2).jpeg" />
                            <Card.Body>
                                <Card.Title>Hogenakkal To Kumbakonam</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3699</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5699</h5>
                                        <h5 className="text-center">Both - ₹7899</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={hku}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img variant="top" src="madurai3.jpeg" />
                            <Card.Body>
                                <Card.Title>Hogenakkal To Madurai</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹4199</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹7299</h5>
                                        <h5 className="text-center">Both - ₹9499</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={hm}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
                
                <Row className="pt-5"> 
                    <Col>
                    <Card style={{ width: '320px' }}>
                        <Card.Img style={{height : '215px'}} variant="top" src="./yercaud1.(3).jpeg" />
                            <Card.Body>
                                <Card.Title>Hogenakkal To Yercaud</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹2399</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹4299</h5>
                                        <h5 className="text-center">Both - ₹6199</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={hy}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                    </Col>
                    

                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img style={{height :'215px'}} variant="top" src="./theni1.(4).jpeg" />
                            <Card.Body>
                                <Card.Title>Hogenakkal To Theni</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3599</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹5399</h5>
                                        <h5 className="text-center">Both - ₹7899</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="right" overlay={ht}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card style={{ width: '320px' }}>
                        <Card.Img style={{height :'215px'}} variant="top" src="./chennai2.jpeg" />
                            <Card.Body>
                                <Card.Title>Hogenakkal To Chennai</Card.Title>
                                    <Card.Text>
                                    <h5 className="text-center" style={{color : 'Green'}}>Package1 - ₹3259</h5>
                                        <h5 className="text-center" style={{color : 'Red'}}>Package2 - ₹4569</h5>
                                        <h5 className="text-center">Both - ₹7999</h5>
                                    </Card.Text>
                                    <OverlayTrigger trigger="click" placement="left" overlay={hc}>
                                    <Button variant="primary">More Details</Button></OverlayTrigger>
                            </Card.Body>
                    </Card>
                </Col>
                </Row>
        </Container><br></br><br></br>

        </>
    )
}

export default Packages;