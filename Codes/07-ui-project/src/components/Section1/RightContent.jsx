import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
	return (
		<div id='right' className='h-full overflow-x-auto flex flex-nowrap gap-10 p-6 w-2/3 rounded-4xl'>
			{props.users.map((elem, index) => (
				<div key={index} className='shrink-0'>
					<RightCard img={elem.img} intro={elem.intro} tag={elem.tag} id={elem.id} color={elem.color}/>
				</div>
			))}
		</div>
	)
}

export default RightContent