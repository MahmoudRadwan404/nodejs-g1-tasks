const Cource=require('../models/cources')
const {body,validationResult}=require('express-validator')//middleware

const getallcources= async(req, res) => {
    //get all cources fom database using course model
   const cources=await Cource.find()
    res.json(cources)//sending jason
    }
const getcourse=async  (req, res) => {
     //   const courseId=+req.params.courceId//to make id dynamic
       //const course=cources.find((course)=>course.id===courseId)
    try{ let course=await Cource.findById(req.params.courceId)
       res.json(course);//send data as jason
    }
    catch(err){ res.status(400).json({message:"Error getting courses"})}
}


     const addcourse=async (req,res)=>{
//req.body  :the written reqwest data
     
    //console.log(req.body);
    //const errors=validationResult(req);//result of errors if happend
    //console.log(errors.json())//errors in jason shape
    //cources.push({id:cources.length+1,...req.body});
   const newcource= new Cource(req.body)
   await newcource.save();
    res.json(newcource)
    
     }
    const updatecourse=async(req,res)=>{
    //    let courceId=+req.params.courceId;
      //  let course=cources.find((course)=>course.id===courceId)
        //course={...course,...req.body}
        try{
       const updatedco=await Cource.updateOne({_id:req.params.courceId},{$set:{...req.body}})
    return res.status(200).json(updatedco);
        }
        catch(err){
            return res.status(400).json(err);
        }
    }
    const deletecourse=async(req,res)=>{
       // let courceId=+req.params.courceId;
        
       //cources=cources.filter((ele)=>{ele.id!==courceId});
const deleteddata=await Cource.deleteOne({_id:req.params.courceId})
        res.json({success:true,msg:deleteddata})
    }
    
    module.exports={getallcources,getcourse,deletecourse,updatecourse,addcourse}