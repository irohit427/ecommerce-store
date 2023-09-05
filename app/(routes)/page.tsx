import getBillboard from "@/actions/getBillboards";
import getProducts from "@/actions/getProducts";
import Newsletter from "@/components/newsletter";
import ProductList from "@/components/productList";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

const HomePage = async () => {
  const tshirts = await getProducts({ isFeatured: true, categoryId: '0d7d72b9-a9a4-40e8-af31-6c51cff072b9' });
  const sneakers = await getProducts({ isFeatured: true, categoryId: 'ee11eb0a-fb06-48b8-bd84-a90935d8e48f' });
  const billboard = await getBillboard("93dc29ee-b556-4ab5-893d-eb2e806d38a6");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard 
          data={billboard}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products: Oversized T-Shirts" items={tshirts.slice(0,4)} />
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products: Sneakers" items={sneakers.slice(0,4)} />
        </div>
        <Newsletter />
      </div>
    </Container>
  )
}

export default HomePage;