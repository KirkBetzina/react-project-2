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
    
  };
  useEffect(() => {
    getApi(api);
  }, []);

  

    const numArr = [1,2,3]


    return (
      <>
        <div className ='cards'>
            {
                numArr.map((data, index) => (
                    <div>
                    <Card color="faded" dark className= "mb-5">
                      <CardImg top width="100%" src={api?._embedded?.events[data]?.images[data]?.url} alt="Concert Poster" />
                      <CardBody>
                        <CardTitle tag="h5"> {api?._embedded?.events[data]?.name} </CardTitle>
                        <CardText> {api?._embedded?.events[data]?.dates?.start?.localDate} </CardText>
                        
                      </CardBody>
                    </Card>
                  </div>
                ))
            }
        </div>
      </>  
    )  
}

export default Cards