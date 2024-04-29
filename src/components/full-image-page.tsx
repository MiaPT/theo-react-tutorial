import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "./ui/button";

export default async function FullPageImageView(props: { id: number }) {
  const idAsNumber = Number(props.id);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");
  const image = await getImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userID);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img
          src={image.url}
          alt={image.name}
          className="flex-shrink object-contain"
        />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>

        <div className="flex flex-col p-2">
          <span>Uploaded by</span>
          <span>{uploaderInfo.username}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Uploaded on</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex flex-col p-2">
          <form action={async () => {
            "use server";
            await deleteImage(idAsNumber)
          }}>
            <Button variant={"destructive"} type="submit">Delete</Button>
          </form>
        </div>

      </div>
    </div>
  );
}
