import Link from 'next/link'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	Dropdown,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap'

class Header extends React.Component {
	state = {
		isOpen: false,
		isTop: true,
		srcLogo: '/static/img/Logo_td2x-w.png'
	}
	toggle = this.toggle.bind(this);
	componentDidMount() {
		if (this.props.t == 'barWhite')
					this.setState({ srcLogo: '/static/img/Logo_td2x-g.png' })
		document.addEventListener('scroll', () => {
			console.log(window.scrollY < 200);
			
			const isTop = window.scrollY < 200
			if (isTop === true && this.props.t!=='barWhite') {
				this.setState({ srcLogo: '/static/img/Logo_td2x-w.png' })
			}
			else if (isTop === false) {
				this.setState({ srcLogo: '/static/img/Logo_td2x-g.png' })
			}
			this.setState({ isTop })
		});
	}

	toggle() {
		this.setState({ isOpen: !this.state.isOpen });
	}
	render() {
		return (
			<div className="Header">
				<Navbar className="navbar navbar-expand-lg fixed-top" id={this.state.isTop ? this.props.t : this.props.c} dark>
					<Link href="/">
						<img className="logo" src={this.state.srcLogo} alt="image" />
					</Link>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav id="linkbar" className="ml-auto" navbar>
							<NavItem>
								<Link href="/">
									<a className="nav-item nav-link active px-15">หน้าหลัก</a>
								</Link>
							</NavItem>
							<NavItem>
								<Link href="/">
									<a className="nav-item nav-link  px-15">ชื้อยา</a>
								</Link>
							</NavItem>
							<NavItem>
								<Link href="/">
									<a className="nav-item nav-link  px-15">โรคระบบขับถ่าย</a>
								</Link>
							</NavItem>
							<NavItem>
								<Link href="/">
									<a className="nav-item nav-link  px-15">ติดต่อเรา</a>
								</Link>
							</NavItem><NavItem>
								<Link href="/help">
									<div className="help  px-25 bdr-5">ถามหมอ</div>
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		)
	}
}
export default Header