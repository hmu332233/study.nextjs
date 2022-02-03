import NavBar from "./NavBar";

type Props = {
  children: JSX.Element
};

function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      <div>
        {children}
      </div>
    </>
  );
}

export default Layout;