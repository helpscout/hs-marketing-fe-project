import React from 'react';
import Badge from '../Badge/Badge';

const Card = ({title,slug,img,permalink,subtitle}) => (
	<div className="card text-center">
		<div className="card-header">
			<Badge>Plus</Badge>
		</div>
		<div className="card-body">
			<div>
				<img alt="" className="brand-image" src={img}/>
			</div>
			<p className="card-text">{subtitle}</p>
		</div>
		<div className="card-footer text-muted">
			<a className="card-link" href={permalink}>Learn More &gt; </a>
		</div>
	</div>
);

export default Card;
