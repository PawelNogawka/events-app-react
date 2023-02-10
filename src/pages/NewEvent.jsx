import React from "react";
import {json,redirect} from 'react-router-dom'

import Wrapper from "../components/Wrapper";
import EventForm from "../components/EventForm";

const NewEvent = () => {
  return (
    <section>
      <Wrapper>
        <EventForm />
      </Wrapper>
    </section>
  );
};

export default NewEvent;

export async function action({ request, params }) {
  const data = await request.formData();

  const eventData = {
    name: data.get("title"),
    img: data.get("img"),
    date: data.get("date"),
    desc: data.get("txt"),
    id: Math.random().toString(36).substr(2, 9)
  };

 const response =  await fetch(
    `https://events-5d2af-default-rtdb.europe-west1.firebasedatabase.app/events/.json`,
    {
      method: "POST",
      headers:{
        'Content-Type':"Application/json"
      },
      body:JSON.stringify(eventData)
    }
  );

  if(!response.ok){
    throw json({message:'could not save event'},{status:500})
  }

  return redirect('/events')
}
