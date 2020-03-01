import { pirsma } from "../../../../generated/prisma-client";

export default {
    Query: {
        allPosts: () => prisma.posts()
    }
}