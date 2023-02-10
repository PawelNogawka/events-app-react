import React from "react";
import {useRouteLoaderData,json,redirect} from 'react-router-dom'
import Wrapper from "../components/Wrapper";
import EventForm from "../components/EventForm";

const EditEvent = () => {
  const event = useRouteLoaderData('event')
  return (
    <section>
      <Wrapper>
        <EventForm event={event}/>
      </Wrapper>
    </section>
  );
};

export default EditEvent;


export async function action({ request, params }) {
  const data = await request.formData();

  const eventData = {
    name: data.get("title"),
    img: data.get("img"),
    date: data.get("date"),
    desc: data.get("txt"),
  };

 const response =  await fetch(
    `https://events-5d2af-default-rtdb.europe-west1.firebasedatabase.app/events/${params.id}.json`,
    {
      method: "PATCH",
      headers:{
        'Content-Type':"Application/json"
      },
      body:JSON.stringify(eventData)
    }
  );

  console.log(response)

  if(!response.ok){
    throw json({message:'could not edit event'},{status:500})
  }

  return redirect('/events')
}
