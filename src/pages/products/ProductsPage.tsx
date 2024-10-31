import ProducerProductComponent from "../../components/products/Producer/ProducerProductComponent";
import ConsumerProductComponent from "../../components/products/consumer/ConsumerProductComponent";

const ProductsPage = () => {
  const user = {
    name: "producer",
  };

  return (
    <div>
      {user.name === "producer" ? (
        <ProducerProductComponent />
      ) : (
        <ConsumerProductComponent />
      )}
    </div>
  );
};

export default ProductsPage;
