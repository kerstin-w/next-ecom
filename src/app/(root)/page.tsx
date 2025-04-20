import ProductList from '@/components/shared/product/product-list';
import sampleData from '../../../db/sample-data';

const Homepage = () => {
  return (
    <>
      <ProductList data={sampleData.products} limit={4} title="New Arrivals" />
    </>
  );
};

export default Homepage;
