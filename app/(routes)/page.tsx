import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("7ce97e47-0f7f-47b7-8a66-d4bc7d21a395");
  return (
    <div>
      <Container>
        <div className=" space-y-10 pb-10">
          <Billboard data={billboard} />
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
