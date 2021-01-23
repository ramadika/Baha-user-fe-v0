// Dependencies
import React, { Component } from 'react'
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
// Internals
import 'components/About-Page/Team/index.css'
import WCard1 from "assets/images/brandon-erlinger-ford-xmrL-yps7gI-unsplash.jpg";
import WCard2 from "assets/images/creaslim-F7eJxHoR1lg-unsplash.jpg";
import WCard3 from "assets/images/brandon-erlinger-ford-2wSe9hhfpnM-unsplash.jpg";
import WCard4 from "assets/images/tarun-anand-giri-wXtszuirc64-unsplash.jpg";

export default class index extends Component {
    render() {
        return (
            <div className="team">
              <CardDeck className="mx-1">
                <Card className="text-center">
                  <CardImg variant="top" src={WCard1} />
                  <Card.Body>
                    <Card.Title>Emmanuel</Card.Title>
                    <Card.Text>Founder</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="card text-center">
                  <CardImg variant="top" src={WCard2} />
                  <Card.Body>
                    <Card.Title>Jack</Card.Title>
                    <Card.Text>Co-Founder</Card.Text>
                  </Card.Body>
                </Card>
                <Card className="card text-center">
                  <CardImg variant="top" src={WCard3} />
                  <Card.Body>
                    <Card.Title>Santiago</Card.Title>
                    <Card.Text>
                      El Presidente
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="card text-center">
                  <CardImg variant="top" src={WCard4} />
                  <Card.Body>
                    <Card.Title>James</Card.Title>
                    <Card.Text>Money Man</Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </div>
        )
    }
}
