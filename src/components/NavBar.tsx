type navBarProps = {
  children: React.ReactNode;
};

function NavBar({ children }: navBarProps) {
  return (
    <nav className="nav-bar">
      {children}
    </nav>
  );
}

export default NavBar;
