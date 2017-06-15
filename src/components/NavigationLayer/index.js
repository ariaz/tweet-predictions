import React from 'react';
import { compose, withReducer, withState, withHandlers } from 'recompose'

import NavigationMenu from './NavigationMenu'

import './index.css'
import makeUpRemover from '../../../public/makeUpRemover.svg'
import faceMask from '../../../public/faceMask.svg'
import steamer from '../../../public/steamer.svg'
import placeholder from '../../../public/steamer.svg'

import { MakeupRemover } from './assets'

const menuItems =
[
  {
    index: 0,
    title: 'Products',
    items: [
      {
        title: 'Make up remover',
        backgroundImage: MakeupRemover
      },
      {
        title: 'Face Mask',
        backgroundImage: faceMask
      },
      {
        title: 'Steamer',
        backgroundImage: steamer
      }
    ]
  },
  {
    index: 1,
    title: 'About',
    items: [
      {
        title: 'Get to know Popo',
        backgroundImage: placeholder
      },
      {
        title: 'The roots of Infusions',
        backgroundImage: placeholder
      }
    ]    
  },
  {
    index: 2,
    title: 'News',
    items: [
      {
        title: 'Popita inteview with Vogue',
        backgroundImage: placeholder
      },
      {
        title: 'Why you should be masking',
        backgroundImage: placeholder
      },
      {
        title: 'Becoming aware of your face',
        backgroundImage: placeholder
      }
    ]
  },
  {
    index: 3,
    title: 'Contact Us',
    items: [
      {
        title: 'Locations',
        backgroundImage: placeholder
      },
      {
        title: 'Help Center',
        backgroundImage: placeholder
      },
      {
        title: 'Information',
        backgroundImage: placeholder
      },
      {
        title: 'Careers',
        backgroundImage: placeholder
      }
    ]
  }  
]


const withSelectedMenuIndex = compose(
  withReducer('selectedMenuIndex', 'dispatch', (state, action) => {
    switch (action.type) {
      case 'SELECT':
        return action.index
      default:
        return state
    }
  }, -1),
  withHandlers({
    select: ({dispatch}) => index => dispatch(({type: 'SELECT', index}))
  })
)


export const NavigationLayer = withSelectedMenuIndex(
  ({selectedMenuIndex, select}) =>
    <div className="menu-layer-container">
      {
        menuItems.map( props =>
          <NavigationMenu key={props.index} {...Object.assign(props, {selectedMenuIndex, select})} />
        )
      }  
    </div>
)