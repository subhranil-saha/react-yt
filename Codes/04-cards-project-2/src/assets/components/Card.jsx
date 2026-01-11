import React from 'react'

const Card = (props) => {
	return (
		<div className="card">
        <div className="top">
          <div className="top-row">
						{props.status && <h4 className="status">{props.status}</h4>}
						<h3 className="pay">{props.pay}</h3>
					</div>

          <div className="avatar">
            <img
              src={props.image}
              alt="icon"
            />
          </div>
        </div>



        <div className="center">
          <h2>{props.name}</h2>
          <p>{props.role}</p>
          <div>
            <h4>{props.skills[0]}</h4>
            <h4>{props.skills[1]}</h4>
            <h4>{props.skills[2]}</h4>
            <h4>{props.skills[3]}</h4>
          </div>
          <p>{props.about}</p>
        </div>

        <div className="bottom">
          <button className="view-profile">VIEW PROFILE</button>
        </div>
      </div>
	)
}

export default Card