const likeCounter = require('../models/likes.models');


// retrieving likes
async function getLikes(req, res) {
    try {
        let counter = await likeCounter.findOne();
        if (!counter) {
            counter = await likeCounter.create({ count: 0 });
        } else {
            res.status(200).json({ count: counter.count });
        } 
    } catch {
        res.status(500).json({ error: err.message });
    }
};

// adding likes
async function addLikes(req, res) {
    try {
        let counter = await likeCounter.findOne();
        if (!counter) {
            counter = await likeCounter.create({ count: 1 });
        } else {
            counter.count += 1;
            await counter.save();
        }
        res.status(200).json({ count: counter.count });
    } catch (err) { 
        res.status(500).json({ error: err.message });
    }
}


// removing likes
async function removeLikes(req, res) { 
    try { 
        let counter = await likeCounter.findOne();
        if (!counter || counter.count <= 0) { 
            counter = await likeCounter.create({ count: 0 });
        } else {
            counter.count -= 1;
            await counter.save();
        }
        res.status(200).json({ count: counter.count });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { getLikes, addLikes, removeLikes };