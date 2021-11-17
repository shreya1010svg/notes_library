import React from 'react';
import JSONDATA from '/home/shreya/notes-library/src/MOCK_DATA.json';
import {useState} from 'react';

const SearchMaterial = () => {
const [searchTerm, setSearchTerm] = useState('')
return (
	<div>
	<div
	style={{
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
	<h1>Search for Course Materials here.</h1>
	</div>
	<div className="SearchMaterial">
		<input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
		{JSONDATA.filter((val) =>
				{
					if(searchTerm == "")
					{
						return val
					}
					else if(val.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
						val.keywords.toLowerCase().includes(searchTerm.toLowerCase()))
					{
						return val
					}
				}).map((val,key)=>{
			return (
				<div className="file" key={key}>
					<h5><a href={val.link_to_pdf}>{val.title}</a></h5>
					<p>{val.keywords}</p>
				</div>
				);
		})}
	</div>
	</div>
	);
};

export default SearchMaterial;
