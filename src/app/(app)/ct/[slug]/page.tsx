import Store from "@/features/Store/Store";

export const revalidate = 1

//dynamicParams: true:
//Next.js будет генерировать страницы для маршрутов, которые не были заранее указаны в generateStaticParams.
//Если пользователь запросит неизвестный путь, страница будет сгенерирована на сервере в режиме реального времени (on-demand server rendering).
//Это полезно, если ваши данные регулярно изменяются и вы не можете заранее знать все маршруты.
//dynamicParams: false:
//Next.js пререндерит только те маршруты, которые вы явно укажете в функции generateStaticParams.
//Если пользователь запрашивает неизвестный маршрут (не указанный в generateStaticParams), Next.js вернёт ошибку 404.
//Это хорошо для статичных сайтов, где маршруты определены заранее и их полный список известен.
export const dynamicParams = true


export default async function ProductsByCategoryPage({
    params,
    searchParams,
}: {
    params: Promise<{ slug: string }>,
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const param = await searchParams;
  const categoryDynamicParam = await params
  return (<Store
    isBannerClose={true}
    param={param}
    dynamicParam={categoryDynamicParam}
    />);
}

