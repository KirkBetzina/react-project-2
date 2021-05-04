import React from 'react'
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import apiData from './apiData'
import {useState, useEffect} from 'react'

const Cards = (props) => {

  const apiUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=7elxdku9GGG5k8j0Xm8KWdANDgecHMV0'
  
  
  const [api, setApi] = useState(null)
  const getApi = async () => {
    const response = await fetch(apiUrl);    
    const data = await response.json();
    setApi(data);
    console.log(data._embedded.events[0].name)
  };
  useEffect(() => {
    getApi(api);
  }, []);

  

    const numArr = [1,2,3]
    return (
        <div className ='Cards'>
            {
                numArr.map((data, index) => (
                    <div>
                    <Card>
                      <CardImg top width="100%" src={`data._embedded.events[0].images[7]`} alt="Card image cap" />
                      <CardBody>
                        <CardTitle tag="h5"></CardTitle>
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