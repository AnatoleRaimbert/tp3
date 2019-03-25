import React, { Component } from 'react';
import './App.css';
import './Components/Profil.css';
import Profil from "./Components/Profil";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from "react-bootstrap/es/FormControl";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";

const prof1 = {

    nom: 'Raimbert',
    prenom: 'Anatole',
    image: 'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/image-principale-919b9d.png',


}


const prof3 = {

    nom: 'Dupont',
    prenom: 'Jean-Jacques',
    image: 'https://i.skyrock.net/5080/52705080/pics/2127097087_1.jpg',


}
const prof2 = {
    nom: 'Poulain',
    prenom: 'Alexia',
    image: 'https://i.pinimg.com/236x/a2/24/e4/a224e418998703c3166b5ad1b0b45fa1.jpg',


}





class App extends Component {

    constructor(props){
        super(props);
        this.state={
            user: {

                nom: 'Raimbert',
                prenom: 'Anatole',
                image: 'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/image-principale-919b9d.png',

            },

        }
    }

    changeProfil(a){

        switch (a) {
            case 1 :
                this.setState({user : prof1});
                break;


        }

        switch (a) {
            case 2 :
                this.setState({user : prof2});
                break;


        }

        switch (a) {
            case 3 :
                this.setState({user : prof3});
                break;


        }



    }

    render() {
        return (
            <div className="App">

                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                    crossOrigin="anonymous"
                />

                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">FaceBook Lite</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Profil</Nav.Link>
                        <Nav.Link href="#features">Réglage</Nav.Link>
                        <Nav.Link href="#facebookpro">Facebook Pro</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>


                <ButtonGroup  variant="primary">
                    <Button
                        onClick={()=>{this.changeProfil(1)}}>Anatole
                    </Button>
                    <Button
                        onClick={()=>{this.changeProfil(2)}}>Jean-Jacques
                    </Button>
                    <Button
                        onClick={()=>{this.changeProfil(3)}}>Alexia
                    </Button>



                </ButtonGroup>

                <Profil profil={this.state.user} />

                <Card className="text-center">
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </div>
        );
    }
}

export default App;