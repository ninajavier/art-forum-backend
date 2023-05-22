const express = require("express");
const artPieces = express.Router();
const { checkRequest, checkId } = require("../validation/checkArtPieces");

const {
  getAllArtPieces,
  getAnArtPiece,
  createArtPiece,
  deleteArtPiece,
  updateArtPiece,
} = require("../queries/artPieces.js");

artPieces.get("/", async (req, res) => {
  const allArtPieces = await getAllArtPieces();
  if (allArtPieces) {
    res.status(202).json(allArtPieces);
  } else {
    res.status(202).json({ error: "Server Error" });
  }
});

artPieces.get("/:id", async (req, res) => {
  const { id } = req.params;
  const artPiece = await getAnArtPiece(id);
  if (artPiece) {
    res.status(200).json(artPiece);
  } else {
    res.status(404).json({ error: "Art Piece not found" });
  }
});

artPieces.post("/", checkRequest, async (req, res) => {
  const newArtPiece = req.body;
  try {
    const addedArtPiece = await createArtPiece(newArtPiece);
    res.status(200).json(addedArtPiece);
  } catch (error) {
    res.status(202).json({ error: "Could not create Art Piece" });
  }
});

artPieces.delete("/:id", checkId, async (req, res) => {
  const { id } = req.params;
  const deletedArtPiece = await deleteArtPiece(id);
  if (deletedArtPiece.id) {
    res.status(200).json(deletedArtPiece);
  } else {
    res.status(400).json({ error: "Could not delete" });
  }
});

artPieces.put("/:id",checkRequest, async (req, res) =>{
    const {id} = req.params;
    const updatedArtPiece = await updateArtPiece(id, req.body);
    if(updatedArtPiece.id){
        res.status(200).json(updatedArtPiece);
    }else {
        res.status(404).json("Show not found")
    }
    });

module.exports = artPieces;
