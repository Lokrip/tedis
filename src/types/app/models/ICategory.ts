export interface ICategory {
    id: number
    title: string
    metaTitle: string
    slug: string
    children?: ICategory[]
}
