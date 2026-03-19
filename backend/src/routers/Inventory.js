import express from "express";
const router = express.Router();

// get endpoint
router.get ("/", (req, res) => { 
    res.status(200).send("We have fetched the text Sniggers");
});

// POST endpoint
router.post("/", (req, res) => {
    res.status(201).send("POST request received at /AI");
});

// PUT endpoint
router.put("/id", (req, res) => {
    res.status(200).send("PUT request received at /AI");
});

// DELETE endpoint
router.delete("/:id", (req, res) => {
    res.status(200).send("DELETE request received at /AI");
});

export default router;