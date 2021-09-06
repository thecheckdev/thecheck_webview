import {Route, Switch, useHistory} from "react-router-dom";
import Index from "views/Index";
import Question from "views/Question";
import { Link } from "react-router-dom";

function App() {
	const history = useHistory();
	return (
		<>
			<Link to="/">랜딩페이지</Link> <br/>
			<Link to="/Question">Question</Link>
			<Switch>
				<Route path="/" component={Index} exact={true}/>
				<Route path="/Question" component={Question} exact={true}/>
				<Route path="/*" render={()=> history.push("/")} />
			</Switch>
			<h1>test</h1>
		</>
	);
}

export default App;
