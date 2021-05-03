import React from 'react'
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const Cards = (props) => {



    const numArr = [1,2,3]
    return (
        <div className ='Cards'>
            {
                numArr.map((number, index) => (
                    <div>
                    <Card>
                      <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                      <CardBody>
                        <CardTitle tag="h5">Card Title</CardTitle>
                        <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                        <CardText>
                          <small className="text-muted">Put some text here</small>
                        </CardText>
                      </CardBody>
                    </Card>
                  </div>
                ))
            }
        </div>
    )  
}

export default Cards