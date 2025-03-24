const bookmodel=require('../models/book')

// get the books
exports.getbook=async(req,res,)=>{
    try{
        const book=await bookmodel.find();
        return res.status(200).json(book);


    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};


// get books by id

exports.getsinglebook=async(req,res)=>{
    try{
        const book=await bookmodel.findById(req.params.id);
        if(!book){
            return res.status(400).json({
                message:"Bokk not found"
            })
        }
        res.status(200).json(book);


    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};

//create a book

exports.createbook=async(req,res)=>{
    try{
        const{title,author,price,publishyear}=req.body;
        const newbook=new bookmodel({title,author,price,publishyear});
        await newbook.save();

        res.json(newbook);
        res.status(200).json({
            message:"Book stored succesfully"
            
        });

    }catch(error){
        res.status(400).json({
            message:error.message
        });
    }
};


// update an book

exports.updatebook=async(req,res)=>{
    try{

        const updateb=await bookmodel.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        });
        if(!updateb){
            return res.status(400).json({
                message:"Book not found"
            });
        }
        res.json(updateb)
        res.status(200).json({
            message:"Book updayes succesfully"
            
        });
       
    }catch(error){
        res.status(400).json({message:error.message});
    }
};


// delete a book

exports.deletebook=async(req,res)=>{
    try{
        const deleteb=await bookmodel.findByIdAndDelete(req.params.id);
        if(!deleteb){
            return res.status(400).json({
                message:"Book not found"
            });
        }
        res.json({
            message:"Book deleted succesfully"
        });
    }catch(error){
        res.status(500).json({message:error.message});
    }
};



