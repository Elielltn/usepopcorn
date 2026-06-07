type mainProps = {
  children: React.ReactNode;
};

function Main({ children }: mainProps) {
  return <main className="main">{children}</main>;
}

export default Main;
