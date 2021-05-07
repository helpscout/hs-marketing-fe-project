import React from 'react';
import Badge from '../Badge/Badge';
import './Styles/Card.css'

const Card = ({title,slug,img,permalink,subtitle}) => (
	<div className="card text-center">
		<div className="card-header">
			<Badge>Plus</Badge>
		</div>
		<div className="card-body">
			<div className="card-inner">
				<img alt="" className="brand-image" src={img}/>
				<p className="card-text">{subtitle}</p>
			</div>	
		</div>
		<div className="card-footer text-muted">
			<a className="card-link" href={permalink}>Learn More &gt; </a>
		</div>
	</div>
);

export default Card;
