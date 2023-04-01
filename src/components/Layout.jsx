import Navbar from "./Navbar";

const Layout = ({ children, user }) => {
  return (
    <div className="min-h-screen  bg-gray-100 px-4 py-5 dark:bg-gray-800 sm:px-6 lg:px-8">
      {/* // <div className="py-5font-sans mx-auto w-full max-w-screen-sm px-4  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl"> */}
      <div className=" mx-auto w-full max-w-screen-sm font-sans  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">
        <Navbar user={user} />
      </div>
      <main className=" mx-auto w-full max-w-screen-sm font-sans  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-2xl">
        {children}
      </main>
    </div>
  );
};

export default Layout;
