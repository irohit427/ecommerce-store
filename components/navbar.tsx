import Link from "next/link";
import Container from "@/components/ui/container";
import { getCategories } from "@/actions/getCategories";
import MainNavigation from "@/components/mainNavigation";
import { Category } from "@/types";
import NavbarActions from "./navbarActions";
import getStore from "@/actions/getStore";
import Image from "next/image";

const Navbar = async () => {
  const categories: Category[] = await getCategories();
  const store = await getStore();
  
  return ( 
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <div className="flex flex-row justify-center items-center">
              <Image src="/logo.png" alt="logo" width={36} height={36} />
              <p className="font-bold text-xl">{store.name}</p>
            </div>
          </Link>
          <MainNavigation data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;