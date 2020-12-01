import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if(dish == null) {
            return (
                <div></div>
            );
        } else {
            return (
                <Card>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
    }

    renderComments(selectedDish) {
        if(selectedDish != null && selectedDish.comments != null) {
            const showcmnts = selectedDish.comments.map((cmnt) => {
                return (
                    <ul key={cmnt.id} className="list-unstyled">
                        <li className="comment">{cmnt.comment}</li>
                        <li className="author">--{cmnt.author},
                        &nbsp;
                        {
                            new Intl.DateTimeFormat(
                                'en-US',
                                {
                                    year: 'numeric',
                                    month: 'short',
                                    day: '2-digit'
                                }
                            ).format(new Date(Date.parse(cmnt.date)))
                        }
                        </li>
                    </ul>
                )
            });
    
            return(
                <div className='col-12 col-md-5 m-1'>
                    <h4> Comments </h4>
                    <div>{showcmnts}</div>
                </div>
            );
        } else {
            return(
                <div></div>
            )
        }
        
    }

    render() {
        return(
            <div className='row'>
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                {this.renderComments(this.props.selectedDish)}
            </div>
        );
    }
}

export default DishDetail;