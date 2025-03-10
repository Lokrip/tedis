export interface ICategory {
    id: number
    title: string
    metaTitle: string
    slug: string
    icon: string
    children?: ICategory[]
}
