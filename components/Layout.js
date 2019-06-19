import Header from './Header';
const Layout = (props) => {
	return (
		<div>
			<Header t={props.t} c={props.c} />
			{props.children}
		</div>
	);
};
export default Layout;
