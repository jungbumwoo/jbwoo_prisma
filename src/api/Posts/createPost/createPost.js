import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        createPost: async(_, args) => {
            const { title, subtitle, content, imgurl } = args;
        }
    }
}