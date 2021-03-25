import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";


// function RenderDish(props){}
function RenderDish({dish}) {
    if (dish) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle> {dish.name} </CardTitle>
                        <CardText> {dish.description} </CardText>
                    </CardBody>
                </Card>
            </div>    
        );
    } else {
        return (
            <div />
        );
    }
}

// function Rendercom(props){}
function RenderCom({com}) {
    if (com) {
            const cmnt = com.map((comment) => {
                return (
                    <ul key={comment.id} className="list-unstyled">
                        <li>
                            <p> {comment.comment} </p>
                            <p> -- {comment.author},{"      "}
                                {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: '2-digit'
                                }).format(new Date(Date.parse(comment.date)))}
                            </p>
                        </li>
                    </ul>
                );
            });

        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments: </h4>
                {cmnt}
            </div>
        );   
    } 
    else {
        return (
            <div />
        );
    }
}


const DishDetail = (props)=>{

    if (props.dish) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <hr />
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>    
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderCom com={props.dish.comments} />
                </div>    
            </div>
        );
    } 
    else {
        return (
            <div />
        );
    }
}

  
  export default DishDetail;