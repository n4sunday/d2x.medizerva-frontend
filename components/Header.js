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
        isTop: true
	}
	toggle = this.toggle.bind(this);
    componentDidMount() {
		document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 200;
      
			if (isTop !== this.state.isTop) {
				this.setState({ isTop });
			}
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
						<img className="logo" src="/static/img/Logo_td2x.svg" alt="image" />
					</Link>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav id="linkbar" className="ml-auto" navbar>
							<NavItem>
								<Link href="/">
									<a className="nav-item nav-link active px-3">หน้าหลัก</a>
								</Link>
							</NavItem>
							<NavItem>
								<Link href="/">
									<a className="nav-item nav-link  px-3">ถามหมอ</a>
								</Link>
							</NavItem>
							<NavItem>
								<Link href="/">
									<a className="nav-item nav-link  px-3">ชื้อยา</a>
								</Link>
							</NavItem>
							<NavItem>
								<Link href="/">
									<a className="nav-item nav-link  px-3">โรคระบบขับถ่าย</a>
								</Link>
							</NavItem>
							<NavItem>
								<Link href="/">
									<a className="nav-item nav-link  px-3">ติดต่อเรา</a>
								</Link>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<div id="toggledrop">
									<DropdownToggle nav caret>
										จัดการบัญชีผู้ใช้
									</DropdownToggle>
									<div id="drop">
										<DropdownMenu>
											<DropdownItem>
												<Link href="/">
													<a>ข้อมูลผู้ใช้</a>
												</Link>
											</DropdownItem>
											<DropdownItem>
												<Link href="/">
													<a>ลงชื่อเข้าใช้</a>
												</Link>
											</DropdownItem>
											<DropdownItem>
												<Link href="/">
													<a>สมัครสมาชิก</a>
												</Link>
											</DropdownItem>
											<DropdownItem divider />
											<DropdownItem>
												<Link href="/">
													<a>ออกจากระบบ</a>
												</Link>
											</DropdownItem>
										</DropdownMenu>
									</div>
								</div>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		)
	}
}
export default Header