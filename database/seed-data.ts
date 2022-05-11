import { Blog } from "../interfaces/blog"

interface SeedData {
    posts: Blog[]
} 

export const seedData: SeedData = {
    posts: [
        {
            title: "How to become good",
            slug: "ghfg",
            content: "Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsum"
        },
        {
            title: 'How to make cheese',
            slug: '1',
            content: 'Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsum'
        },
        {
            title: 'Developing hell',
            slug: '2',
            content: 'Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsumLorem impsumLorem impsumLorem impsumLorem impsumLorem impsum'
        }
    ]
}