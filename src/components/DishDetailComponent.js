import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
        
    }

    renderComments(dish) {
        if(dish.comments != null) {
            const showComments = dish.comments.map((comment) => {
                return (
                    <ul key={comment.id} className="list-unstyled">
                        <li className="comment">{comment.comment}</li>
                        <li className="author">--{comment.author},
                        &nbsp;
                        {
                            new Intl.DateTimeFormat(
                                'en-US',
                                {
                                    year: 'numeric',
                                    month: 'short',
                                    day: '2-digit'
                                }
                            ).format(new Date(Date.parse(comment.date)))
                        }
                        </li>
                    </ul>
                )
            });
    
            return(
                <div className='col-12 col-md-5 m-1'>
                    <h4> Comments </h4>
                    <div>{showComments}</div>
                </div>
            );
        } else {
            return(
                <div></div>
            )
        }
        
    }

    render() {
        if(this.props.dish != null) {
            return(
                <div className='container'>
                    <div className="row">
                        {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            );
        } else {
            return(
                <div></div>
            )
        }
        
    }
}

export default DishDetail;