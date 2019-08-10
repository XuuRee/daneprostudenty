import React from 'react'
import { Children } from '../../State/State'

type ChildrenListProps = {
    childrenList: Children[]
}

const ChildrenList: React.SFC<ChildrenListProps> = ({ childrenList }) => {

  return (
    <React.Fragment>      
      {
        childrenList.map(child => 
          <div>
            <p>{child.name}</p>
            <p>{child.surname}</p>
          </div>
        )
      }
    </React.Fragment>
  )
}

export default ChildrenList