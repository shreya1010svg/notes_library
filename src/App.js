import logo from './logo.svg';
import './App.css';
import JSONDATA from './MOCK_DATA.json'

function App() {
  return (
	<div className="App">
		<input type="text" placeholder="Search..."/>
		{JSONDATA.map((val,key)=>{
			return (
				<div className="file" key={key}>
					<p>{val.title}</p>
				</div>
				);
		})}
	</div>
	);
}

export default App;
