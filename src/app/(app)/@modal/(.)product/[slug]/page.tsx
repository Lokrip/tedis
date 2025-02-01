export default async function ProductDynamicPage({
  params
}: {
  params: Promise<{slug: string}>
}) {
  const slug = (await params).slug
  return <div style={{marginTop: "100px"}}>Hello world {slug}</div>
}
