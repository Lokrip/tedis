export interface ICategory {
    id: number
    title: string
    metaTitle: string
    slug: string | null,
    icon: string
    children?: ICategory[]
}
