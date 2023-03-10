import ErrorMessage from "../components/errorMessage/ErrorMessage";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AppBanner from "../components/appBanner/AppBanner";
const Page404 = () => {
	console.log("Page404");
	return (
		<div>
			<Helmet>
				<meta name="description" content="404 error page" />
				<title>404 error page</title>
			</Helmet>
			<AppBanner />
			<ErrorMessage />
			<p style={{ textAlign: "center", fontWeight: "bold", fontSize: "24px" }}>
				Page doesn't exist
			</p>
			<Link
				style={{
					display: "block",
					textAlign: "center",
					fontWeight: "bold",
					fontSize: "24px",
					marginTop: "30px",
				}}
				to="/"
			>
				Back to main page
			</Link>
		</div>
	);
};
export default Page404;
