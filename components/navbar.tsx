import Link from "next/link";
import Container from "@/components/ui/container";
import { getCategories } from "@/actions/getCategories";
import MainNavigation from "@/components/mainNavigation";
import { Category } from "@/types";
import NavbarActions from "./navbarActions";

const Navbar = async () => {
  const categories: Category[] = await getCategories();

  return ( 
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">[Store Name]</p>
          </Link>
          <MainNavigation data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;