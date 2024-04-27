import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";


export default function ImageModal({
    params: { id: imageId },
} : {
    params: { id: string }
}) {
    const idAsNumber = Number(imageId)
    if (Number.isNaN(idAsNumber)) throw new Error("invalid photo ID")

    return (
        <Modal>
            <FullPageImageView id={idAsNumber} />
        </Modal>
    )
}