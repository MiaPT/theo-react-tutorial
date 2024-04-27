import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages() {
    const user = auth()

    if (!user.userId) throw new Error("unauthorized!");


    const images = await db.query.images.findMany({
        where: (model, { eq }) => eq(model.userID, user.userId),
        orderBy: (model, {desc}) => desc(model.id),
    });
    return images;
}