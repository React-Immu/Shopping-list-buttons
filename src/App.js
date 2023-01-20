import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';
import { useState } from 'react';

 
function App(props){
  
    const [listItems, setListItems]= useState([
      { id: 1, 
        value: 'Milk', 
        qty: 5, 
        unit: 'ltr' 
      },
      { id: 2, 
        value: 'Bananas', 
        qty: 6, 
        unit: 'pcs' 
      },
      { id: 3, 
        value: 'Bread', 
        qty: 3, 
        unit: 'x' 
      },
      { id: 4, 
        value: 'Eggs', 
        qty: 16, 
        unit: 'x' }
    ]);

    const onPiimäAddition = () => {
      console.log('OnPiimäaddition')
    let newListItems = [...listItems]

     //Etitäänkö onko piimä jo listalla 
    let foundIndex = listItems.findIndex(t => t.value === 'Piimä');
     console.log(foundIndex);
    
      // jos löytyy indeksillä niin tässä korvataan vanha elementti uudella
    if(foundIndex !== -1) {

      let newElement = {...newListItems[foundIndex]}
      newElement.qty = newElement.qty + Math.floor(Math.random()* 10)+1;
      newListItems[foundIndex] = newElement;

      setListItems(newListItems);
      //Jos ei löydy nii luodaan uusi
    }else {
      let newListItems = [...listItems, {
        id: listItems.length +1, 
        value: 'Piimä', 
        qty: Math.floor(Math.random()* 10)+1, 
        unit: 'ltr'
        }]; 
      setListItems(newListItems);
      } 
    }

    const onBeerAddition = () => {
      console.log('OnBeeraddition')
      let newListItems = [...listItems]

      //Etitäänkö onko tuote jo listalla 
      let foundIndex = listItems.findIndex(t => t.value === 'Beer');
      console.log(foundIndex);

      // jos löytyy indeksillä niin tässä korvataan vanha elementti uudella
      if(foundIndex !== -1) {

          let newElement = {...newListItems[foundIndex]}
          newElement.qty = newElement.qty + Math.floor(Math.random()* 10)+1;
          newListItems[foundIndex] = newElement;
    
          setListItems(newListItems);
          //Jos ei löydy nii luodaan uusi
      }else {
        let newListItems = [...listItems, {
          id: listItems.length +1, 
          value: 'Beer', 
          qty: Math.floor(Math.random()* 10)+1,
          unit: 'ltr'
          }]; 
        setListItems(newListItems);
        }
    }


    const onCarrotAddition = () => {
      console.log('OnCarrotaddition')

      let newListItems = [...listItems]

      //Etitäänkö onko tuote jo listalla 
      let foundIndex = listItems.findIndex(t => t.value === 'Carrot');
      console.log(foundIndex);

      // jos löytyy indeksillä niin tässä korvataan vanha elementti uudella
      if(foundIndex !== -1) {

        let newElement = {...newListItems[foundIndex]}
        newElement.qty = newElement.qty + Math.floor(Math.random()* 10)+1;
        newListItems[foundIndex] = newElement;
  
        setListItems(newListItems);
        //Jos ei löydy nii luodaan uusi
      }else {

          let newListItems = [...listItems, {
            id: listItems.length +1, 
            value: 'Carrot', 
            qty: Math.floor(Math.random()* 10)+1,
            unit: 'x'
          }]; 
        setListItems(newListItems);
      }
   }

    const onStrawberryAddition = () => {
      console.log('OnStrawberryaddition')

      let newListItems = [...listItems]

      //Etitäänkö onko tuote jo listalla 
      let foundIndex = listItems.findIndex(t => t.value === 'Strawberry');
      console.log(foundIndex);

      // jos löytyy indeksillä niin tässä korvataan vanha elementti uudella
      if(foundIndex !== -1) {

        let newElement = {...newListItems[foundIndex]}
        newElement.qty = newElement.qty + Math.floor(Math.random()* 10)+1;
        newListItems[foundIndex] = newElement;
  
        setListItems(newListItems);
        //Jos ei löydy nii luodaan uusi
      }else {
        let newListItems = [...listItems, {
          id: listItems.length +1, 
          value: 'Strawberry', 
          qty: Math.floor(Math.random()* 10)+1,
          unit: 'x'
        }]; 
        setListItems(newListItems);
      }
    }
  
  {
    const { applicationDescription, applicationName } = props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ listItems } />
      <button onClick={ onPiimäAddition}>Add Piimä!</button>
      <button onClick={ onBeerAddition}>Add Beer!</button>
      <button onClick={ onCarrotAddition}>Add Carrot!</button>
      <button onClick={ onStrawberryAddition}>Add Strawberry!</button>
    </div>
  }
}

export default App;