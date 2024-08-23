import { Container, Filters, ProductCard, ProductsGroupList, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-8">
        <Title text="все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">

          {/* фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: 'Маргарита',
                    price: 500,
                    items: [{ price: 550 }],
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D612FC7B7FCA5BE822752BEE1E5.avif"
                  },

                ]}
              />
              <ProductsGroupList
                title="Десерты"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: 'Сырники с малиновым вареньем',
                    price: 149,
                    items: [{ price: 149 }],
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EE7D61B7B71E8AA288725FC097A7BE.avif"
                  },
                ]}
              />
            </div>
          </div>

        </div>
      </Container>
    </>
  );
}
