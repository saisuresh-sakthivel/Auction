import React from 'react';
import Header from "./Header";
import { useLocation } from 'react-router-dom';

export default function Home(Props) {
  const location = useLocation();
  const username = location.state?.name;
  
  return (
    <div>
      <Header page="home"></Header>
      <div>
        <h1>{`Welcome ${username}`}</h1>
      </div>
    </div>
  )
}
