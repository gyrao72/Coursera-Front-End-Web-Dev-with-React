import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {

    renderComments(comments) {
        if (comments != null) {
        return comments.map(comment => (
            <ul key={comment.id} className="list-unstyled">
                <li className="mb-2">{comment.comment}</li>
                <li> -- {comment.author}{" "}{(comment.date).substring(0,10)}
                </li>
            </ul>
        ));
        } else return <div />;
  }

  render() {

    const { dish } = this.props;
    
    return (
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>

            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {this.renderComments(dish.comments)}
            </div>
        </div>
      );
    }
  }
  
  export default DishDetail;