const { all } = require('../app');
const db = require('../db/dbConfig');

const getAllArtPieces = async () => {
    try {
        const allArtPieces = await db.any('SELECT * FROM art_pieces');
        return allArtPieces;
    } catch (e) {
        return e;
    }
}

const getAnArtPiece = async (id) => {
    try {
        const artPiece = await db.one('SELECT * FROM art_pieces WHERE id=$1', id);
        return artPiece;
    } catch (e) {
        return e;
    }
}

const createArtPiece = async (artPieceToAdd) => {
    try {
        const newArtPiece = await db.one(
            'INSERT INTO art_pieces (title, artist, medium, year_created, image_url, is_favorite) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [
                artPieceToAdd.title,
                artPieceToAdd.artist,
                artPieceToAdd.medium,
                artPieceToAdd.year_created,
                artPieceToAdd.image_url,
                artPieceToAdd.is_favorite
            ]
        );
        return newArtPiece;
    } catch (e) {
        return e;
    }
}

const deleteArtPiece = async (id) => {
    try {
        const deletedArtPiece = await db.one('DELETE FROM art_pieces where id=$1 RETURNING *', id);
        return deletedArtPiece;
    } catch (e) {
        return e;
    }
}

const updateArtPiece = async (id, artPiece) => {
    try {
        const updatedArtPiece = await db.one('UPDATE art_pieces SET title=$1, artist=$2, medium=$3, year_created=$4, image_url=$5, is_favorite=$6 WHERE id=$7 RETURNING *',
        [
            artPiece.title,
            artPiece.artist,
            artPiece.medium,
            artPiece.year_created,
            artPiece.image_url,
            artPiece.is_favorite,
            id
        ]);
        return updatedArtPiece;
    } catch (e) {
        return e;
    }
}

module.exports = {
    getAllArtPieces,
    getAnArtPiece,
    createArtPiece,
    deleteArtPiece,
    updateArtPiece
};