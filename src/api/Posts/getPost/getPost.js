import { prisma } from "../../../../generated/prisma-client"

export default {
    Query:{
        getPost: async(_, args) => {
            const { id } = args;
            return prisma.user({ id });
        }
    }
};