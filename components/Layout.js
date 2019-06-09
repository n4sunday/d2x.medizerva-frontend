import Header from './Header';
const Layout = (props) => {
	return (
		<div>
			<Header t="barTransparent" c="barBlack" />
			{props.children}
		</div>
	);
};
export default Layout;
