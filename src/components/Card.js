import React from 'react';

const Card = ({name}) => {
	return(
		<div className='bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${name}?size=200x200`}/>
			<div>
				<h2 className='f4'>{name}</h2>
			</div>
		</div>
		);
}

export default Card;