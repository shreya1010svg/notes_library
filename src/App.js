import logo from './logo.svg';
import './App.css';
import JSONDATA from './MOCK_DATA.json';
import {useState} from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
	<div className="App">
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
	);
}

export default App;
