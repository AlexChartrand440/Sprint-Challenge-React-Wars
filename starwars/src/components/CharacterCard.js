import React from "react";
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import CharacterModal from './CharacterModal';

class CharacterCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            data: props.data

        };
    }

    redirect() { window.location = '/learn/' + this.state.date; }

    render() {

        return (<>
            <div>
                <Card style={{ maxWidth: '250px' }}>
                    <CardBody>
                        <CardTitle>{this.state.data.name}</CardTitle>
                        <CardSubtitle>{this.state.data.gender}</CardSubtitle>
                        {/* <Button onClick={() => this.redirect()}>Learn more</Button> */}
                        <CharacterModal data={this.state.data} />
                    </CardBody>
                </Card>
            </div>
        </>);

    }

};

export default CharacterCard;