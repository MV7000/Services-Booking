import getCategoryCards from '@/app/functions/GetData/getCategoryCards';
import ServiceCardList from '@/components/ServiceCardList/ServiceCardList';

const CategoryService = async ({ params }: any) => {
  const categoryService = params.category.replace(/[%26]+/gi, '&'),
    categoryServiceCards = await getCategoryCards(categoryService);

  return (
    <div>
      <ServiceCardList dataServiceCards={categoryServiceCards} />
    </div>
  );
};

export default CategoryService;
