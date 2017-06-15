import React from 'react'

import './index.css'

const NavigationMenu = ({index, title, items, selectedMenuIndex, select}) => {

  const currentlySelected = selectedMenuIndex === index

  return (
    <li key={index} className={"navigation_menu_container"}>
      <div 
        className={"navigation_menu_button" + (currentlySelected ? " selected" : "")}
        onClick={ () => currentlySelected ? select(-1) : select(index) }
      >
        <span className={'title'}>{title}</span>
      </div>
      <div className={"navigation_menu_body" + (currentlySelected ? " selected" : "")}>
        {
          items.map( ({title, backgroundImage}) => {
            return (
              <div className='navigation_menu_item' key={title}>
                <backgroundImage/>
                {title} 
              </div> 
            )
          })
        }
      </div>
    </li>
  )
}

export default NavigationMenu