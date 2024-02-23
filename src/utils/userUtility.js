

export const getcookie = (req) => {
    const cookie = req.headers.cookie;
    // user=someone; session=mySessionID
    return cookie?.split("; ");
};

export const getUID = (req, res) => {
    const tokenHeader = req.headers["authorization"];
    const token = tokenHeader && tokenHeader.split(" ")[1];

    if (!token) {
        return res.sendStatus(401).json({ message: "No token found" }); // Unauthorized
    }
    return token;
};
