import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigation } from "react-router-dom";


const AppLayOut = () =>{
	const navigation = useNavigation();
	console.log(navigation);

	if(navigation.state === "loading"){
		return <h1>Loading....</h1>
	}
	return (
		<>
			<Header/>
			<Outlet/>
			<Footer/>
		</>
	)
}
export default AppLayOut;

