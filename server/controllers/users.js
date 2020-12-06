import Users from '../models/users.js';
const checkDuplicateValue = async (req, res) => {
    try {
        const { field, value } = req.params;        
        const user = await Users.findOne({
            [field]: value
        });
        console.log(user);
        if (user) {
            res.status(400).json({
                message: "field reserved"
            });
        }

        else {
            res.status(200).json({
                message: "field avaliable"
            });
        }

    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: 'error'
        });
    }
};

export {
    checkDuplicateValue
};