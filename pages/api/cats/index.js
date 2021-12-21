import {cats} from "../../../data";

const handler = (req, res) => {
    res.status(200).json(cats);
}

export default handler;