import { cats } from "../../../data";

const handler = (req, res) => {
    const { id } = req.query;
    const cat = cats.find((cat) => {
        return (cat.id === Number(id))
    });
    res.status(200).json(cat);
}

export default handler;