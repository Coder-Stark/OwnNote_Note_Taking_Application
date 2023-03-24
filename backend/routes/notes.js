const express = require('express');
const Note = require('../models/Note');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

//Route1 - Get all the Notes using :GET "localhost:5000/api/auth/fetchallnotes" , Login required
router.get('/fetchallnotes',fetchuser,
async(req,res)=>{
    try {
        const notes = await Note.find({user: req.user.id});
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//Route2 - Add a new Note using :POST "localhost:5000/api/notes/addnote" , Login required
router.post('/addnote',fetchuser,[
    body('title','Enter a valid title').isLength({min:3}),
    body('description','Description must be 5 characters').isLength({ min: 5 }),
],
async (req, res)=>{
    try {
            const {title , description , tag} = req.body;
            //if there are errors , return bad request and errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const saveNote = await note.save()
            
            res.json(saveNote);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })
    
//Route3 - Update an existing Note using :PUT "localhost:5000/api/notes/updatenote/:id" , Login required
router.put('/updatenote/:id',fetchuser,
async (req, res)=>{
    try {
        const {title,description,tag} = req.body;
        //create a newNote object
        const newNote = {};
        if(title){newNote.title = title};
        if(description){newNote.description = description};
        if(tag){newNote.tag = tag};
    
        //find the note to be updated and update it
        let note = await Note.findById(req.params.id);
        if(!note){return res.status(404).send("Not Found")};
        if(note.user.toString() != req.user.id){
            return res.status(401).send("Not Allowed");
        }
    
        note = await Note.findByIdAndUpdate(req.params.id,{$set: newNote},{new: true})
        res.json({note});
    }  catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


//Route4 - Delete an existing Note using :DELETE "localhost:5000/api/notes/deletenote/:id" , Login required
router.delete('/deletenote/:id',fetchuser,
async (req, res)=>{
    try {
        //find the note to be updated and delete it
        let note = await Note.findById(req.params.id);
        if(!note){return res.status(404).send("Not Found")};
    
        //Allow deletion only if user owns this Note
        if(note.user.toString() != req.user.id){
            return res.status(401).send("Not Allowed");
        }
    
        note = await Note.findByIdAndDelete(req.params.id);
        res.json({"Success": "Note has been deleted", note: note});
    }  catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;
    