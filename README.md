# Project Overview

## Project Links

- [ github repo link](https://github.com/freakiestkirk/react-project-2.git)
- [ deployment link](https://competent-bassi-408bb3.netlify.app/)

## Project Description

I want the end user to be able to search with confidence and make informed, concious decisions about where the might travel to see their favorite bands. Since there really havent been any concerts due to the pandemic we all know and love, 'looks like conerts are on the menu!' in 2021!

## API

From the returned data we will be able to see country, date, price, venues. I chose ticketmaster.com's api because it looked interesting to me at the time. i hope i feel this optimistic later in the week. 


```
"dates": {
          "start": {
            "localDate": "2021-05-29",
            "localTime": "22:30:00",
            "dateTime": "2021-05-29T20:30:00Z",
            "dateTBD": false,
            "dateTBA": false,
            "timeTBA": false,
            "noSpecificTime": false
          },
```


## Wireframes

Wireframes and React Architechture 

- [ link to  wireframes](https://www.figma.com/file/VpndDHiNv65YIYEUZQ4wD7/Wireframing-(Copy)?node-id=0%3A102)
- [Link to React Architecture](https://docs.google.com/drawings/d/1maJLHOoEtZfDVVDJ3KDm-dL3FSajQDNr9jLrNOq8llA/edit)



### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Link to external for tavel planning

#### PostMVP EXAMPLE

- connect a 2nd api from health organizations about covid case numbers in that region
- purchase from my app

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav in tablet and desktop media queries| 
| Footer | This will render the header include the nav for mobile only | 
| Cards | This is where the concert, covid, and links to travel data are displayed. Displayed for all media queries.| 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Working with API | H | 5hrs| 8hrs | 8hrs |
| Working with Nav | H | 5hrs| 5hrs | 5hrs |
| Styling | H | 5hrs | 5hrs | 5hrs |
| Bulding Base App structure| H | 5hrs | 6hrs | 6hrs |
| PostMVP Stuff| L | 4hrs | 3hrs | 3hrs |
| Project Planning | H | 6hrs | 6hrs | 6hrs- |
| Total | H | 35hrs| 33hrs | 33hrs |

## Additional Libraries
Reactstrap
As of now. may grow or change at the flow of the project.

## Code Snippet

This code snippet dynamically generates 3 cards. Im proud of it because I was able to make it work.

```
const numArr = [1,2,3]
    return (
     
        <div className ='cards'>
              {            
                numArr.map((data, index) => (
                    <div className="card-container">
                    <Card color="faded" dark>
                      <CardImg top width="100%" src={api?._embedded?.events[data]?.images[0]?.url} alt="Concert Poster" />
                      <CardBody>
                        <CardTitle tag="h5"> {api?._embedded?.events[data]?.name} </CardTitle>
                        <CardText> {api?._embedded?.events[data]?.dates?.start?.localDate} </CardText>                        
                      </CardBody>
                    </Card>
                  </div>
                ))
              }
        </div>
        
    )  
}
```