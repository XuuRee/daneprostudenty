import React from 'react'
import { Children } from '../../State/State'
import children_url from "../../Images/children.png"

type ChildrenListProps = {
    childrenList: Children[]
}

const ChildrenList: React.SFC<ChildrenListProps> = ({ childrenList }) => {

  return (
    <React.Fragment>
      <div className="ui relaxed list">   
        {
          childrenList.map((child, index) => 
            <div key={index} className="item">
              <img alt="Dítě" className="ui avatar image" src={children_url}></img>
              <div className="content">
                <p className="header">{child.name} {child.surname}</p>
                <div className="description">s rodným číslem <b>{child.personal_id}</b>, počet měsíců {child.months}</div>
              </div>
            </div>
          )
        }
      </div>
      {childrenList.length !== 0 && <div className="line" />}
    </React.Fragment>
  )
}

export default ChildrenList