import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const tweetsRouter = router({
    getAllTweets: publicProcedure.query(async (opts) => {
        const { ctx: {db} } = opts;
        let tweets = await db.getAllTweets();
        return tweets;
    })
})