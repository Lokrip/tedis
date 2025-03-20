import DetailStore from "@/pages/DetailStore/DetailStore"

export default async function ProductDynamicPage({
  params
}: {
  params: Promise<{slug: string}>
}) {
  const slug = (await params).slug
  return <><DetailStore param={slug} /></>
}
