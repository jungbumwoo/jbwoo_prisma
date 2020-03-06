import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        createPost: async(_, args) => {
            const { title, subtitle, content, imgurl } = args;
            const post = await prisma.createPost({
                title,
                subtitle,
                content,
                imgurl
            });
            return post;
        }
    }
}