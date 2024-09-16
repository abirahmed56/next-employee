import Link from "next/link";
import { useRouter } from "next/router";
import { GrUserManager } from "react-icons/gr";
import { IoMdPersonAdd } from "react-icons/io"
import { IoHome } from "react-icons/io5"

const NavItem = ({ text, url, Icon }) => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <Link href={url} className="w-full">
      <div
        className={`w-full hover:border-l-black hover:border-l-[2px] text-sm p-3 bg-white border-gray-200 border flex items-center gap-2 ${
          pathname == url && "border-l-black border-l-[2px]"
        }`}
      >
        {Icon && <Icon className="text-lg" />}
        {text}
      </div>
    </Link>
  );
};

export const Layout = ({ children }) => {
  return (
    <>
      <header className="flex items-center p-3 h-[70px] border-b border-gray-200">
        <h1 className="text-lg text-gray-700 font-bold">
          EMPLOYEE MANAGEMENT SYSTEM
        </h1>
      </header>
      <main className="flex w-screen h-[calc(100vh-70px)] overflow-hidden">
        <aside className="w-64 border-r p-4 h-full flex gap-3 flex-col items-center border-gray-200">
        <NavItem text="Home" url="/home" Icon={IoHome} />
          <NavItem text="Employees" url="/" Icon={GrUserManager} />
          <NavItem text="Add Employees" url="/new" Icon={IoMdPersonAdd} />
        </aside>
        <section className="flex-1 p-4 w-full h-full overflow-hidden">
          {children}
        </section>
      </main>
    </>
  );
};

