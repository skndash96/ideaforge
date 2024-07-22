type Idea = {
    category: string,
    body: string,
    keywords: string
}

type IdeaFilterOptions = {
    category?: string,
    words?: string[],
    take?: number,
    skip?: number
};