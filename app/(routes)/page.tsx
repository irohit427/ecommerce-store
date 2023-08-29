import getBillboard from "@/actions/getBillboards";
import getProducts from "@/actions/getProducts";
import ProductList from "@/components/productList";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("ffd7f45e-cf25-403d-a60c-3d199db92281");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard 
          data={billboard}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage;