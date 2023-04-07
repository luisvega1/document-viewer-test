export interface IPage {
    page: number;
    file: string;
}

export interface IAnnotation {
    id: string;
    page: number
    x: number
    y: number
    content: string
    color: string
    opacity: number
    width: number
    height: string
    image: string
}