import express from "express";
const app=express();
import mongoose from "mongoose";
import connectDB from "./db.js";

        
    //     schedule:[{
    //          completedTest:{
    //              TestName: {
    //                            type:String,
    //                            required:true,
    //                       },
    //              Unit    :{
    //                            type:String,
    //                            required:true,
    //                       },
    //              ExamDate: {
    //                              type:String,
    //                              required:true,
    //                 },
    //              Mark    : {
    //                              type:String,
    //                              required:true,
    //                        },
    //              Result  : {
    //                              type:String,
    //                              required:true,
    //                 },
    //          },
    //          upcommingTest:{
    //              TestName: {
    //                               type:String,
    //                               required:true,
    //                 },
    //              Unit    :{
    //                              type:String,
    //                              required:true,
    //                 },
    //              ExamDate: {
    //                              type:String,
    //                              required:true,
    //                 },
    //              Session :{
    //                              type:String,
    //                              required:true,
    //                 },                    
    //          },
    //          completedTask:{
    //              TestName     :{
    //                             type:String,
    //                             required:true,
    //                 },
    //              Unit         :{
    //                              type:String,
    //                              required:true,
    //                 },
    //              completedDate: {
    //                              type:String,
    //                             required:true,
    //                 },
    //          },
    //          upcommingTask:{
    //              TestName: {
    //                              type:String,
    //                              required:true,
    //                 },
    //              Unit    :{
    //                              type:String,
    //                              required:true,
    //                 },
    //              ExamDate: {
    //                              type:String,
    //                              required:true,
    //                 },
    //              Session : {
    //                              type:String,
    //                              required:true,
    //                 },                    
    //          },
    //     }]
    const completedTestSchema=mongoose.Schema({
        TestName: {
           type:String,
           required:true,
           },
          Unit    :{
           type:String,
           required:true,
           },
         ExamDate: {
             type:String,
             required:true,
           },
        Mark    : {
             type:String,
             required:true,
              },
        Result  : {
             type:String,
             required:true,
       }
  })
  const upcommingTestSchema=mongoose.Schema({
     upcommingTest:{
        TestName: {
                         type:String,
                         required:true,
           },
        Unit    :{
                        type:String,
                        required:true,
           },
        ExamDate: {
                        type:String,
                        required:true,
           },
        Session :{
                        type:String,
                        required:true,
           },                    
    }
  })
  const completedTaskSchema=mongoose.Schema({
     completedTask:{
             TestName:{
                       type:String,
                       required:true,
                      },
                 Unit:{
                        type:String,
                        required:true,
           },
        completedDate:{
                        type:String,
                       required:true,
           },
    }
  })
       const upcommingTaskSchema=mongoose.Schema({
        upcommingTask:{
           TestName: {
                           type:String,
                           required:true,
              },
           Unit    :{
                           type:String,
                           required:true,
              },
           ExamDate: {
                           type:String,
                           required:true,
              },
           Session : {
                           type:String,
                           required:true,
              },                    
       }
       })
      
    const scheduleSchema=mongoose.Schema({
        type:completedTestSchema,
        
       },
      {
        type:upcommingTestSchema,
        
      },
      {
        type:completedTaskSchema,
        
      },
      {
        type:upcommingTaskSchema,
    
      
   })
    const  subjectSchema=mongoose.Schema(
        {
            subjectName   : {
                    type:String,
                    required:true,
                    },
    
            subjectTeacher: {
                    type:String,
                    required:true,
                    },
             schedule:{
                schedule:scheduleSchema,
        
             }       
            
        })
    //    const scheduleSchema=mongoose.Schema({
    //                 type:completedTestSchema,
    //                 required:true
    //                },
    //               {
    //                 type:upcommingTestSchema,
    //                 required:true
    //               },
    //               {
    //                 type:completedTaskSchema,
    //                 required:true
    //               },
    //               {
    //                 type:upcommingTaskSchema,
    //                 required:true
                  
    //            })
    // const completedTestSchema=mongoose.Schema({
    //       TestName: {
    //          type:String,
    //          required:true,
    //          },
    //         Unit    :{
    //          type:String,
    //          required:true,
    //          },
    //        ExamDate: {
    //            type:String,
    //            required:true,
    //          },
    //       Mark    : {
    //            type:String,
    //            required:true,
    //             },
    //       Result  : {
    //            type:String,
    //            required:true,
    //      }
    // })
    // const upcommingTestSchema=mongoose.Schema({
    //    upcommingTest:{
    //       TestName: {
    //                        type:String,
    //                        required:true,
    //          },
    //       Unit    :{
    //                       type:String,
    //                       required:true,
    //          },
    //       ExamDate: {
    //                       type:String,
    //                       required:true,
    //          },
    //       Session :{
    //                       type:String,
    //                       required:true,
    //          },                    
    //   }
    // })
    // const completedTaskSchema=mongoose.Schema({
    //    completedTask:{
    //            TestName:{
    //                      type:String,
    //                      required:true,
    //                     },
    //                Unit:{
    //                       type:String,
    //                       required:true,
    //          },
    //       completedDate:{
    //                       type:String,
    //                      required:true,
    //          },
    //   }
    // })
    //      const upcommingTaskSchema=mongoose.Schema({
    //       upcommingTask:{
    //          TestName: {
    //                          type:String,
    //                          required:true,
    //             },
    //          Unit    :{
    //                          type:String,
    //                          required:true,
    //             },
    //          ExamDate: {
    //                          type:String,
    //                          required:true,
    //             },
    //          Session : {
    //                          type:String,
    //                          required:true,
    //             },                    
    //      }
    //      })
        
     var Subject = mongoose.model('Subject', subjectSchema);
subjectSchema.plugin(Subject);

connectDB();
const subject=[
    {
       subjectName   : "Tamil",
       subjectTeacher: "Mr.Damodaran",
       schedule:[{
            completedTest:{
                TestName: "Tamil",
                Unit    :"2",
                ExamDate: "02-06-2022",
                Mark    : "60/100",
                Result  : "Pass",
            },
            upcommingTest:{
                TestName: "Tamil",
                Unit    :"3",
                ExamDate: "06-07-2022",
                Session :"AfterNoon",                    
            },
            completedTask:{
                TestName     : "Tamil",
                Unit         :"2",
                completedDate: "02-06-2022",
            },
            upcommingTask:{
                TestName: "Tamil",
                Unit    :"3",
                ExamDate: "06-07-2022",
                Session : "AfterNoon"                    
            },
       }]
       
    },
    {
        subjectName   : "English",
        subjectTeacher: "Mr.Damodaran",
        schedule:[{
            completedTest:{
                TestName: "English",
                Unit    :"2",
                ExamDate: "02-06-2022",
                Mark    : "60/100",
                Result  : "Pass",
            },
            upcommingTest:{
                TestName: "English",
                Unit    :"3",
                ExamDate: "06-07-2022",
                Session :"AfterNoon",                    
            },
            completedTask:{
                TestName     : "English",
                Unit         :"2",
                completedDate: "02-06-2022",
            },
            upcommingTask:{
                TestName: "English",
                Unit    :"3",
                ExamDate: "06-07-2022",
                Session : "AfterNoon"                    
            },
       }]
    },
    {
        subjectName   : "Maths",
        subjectTeacher: "Mr.Damodaran",
        schedule:[{
            completedTest:{
                TestName: "Maths",
                Unit    :"2",
                ExamDate: "02-06-2022",
                Mark    : "60/100",
                Result  : "Pass",
            },
            upcommingTest:{
                TestName: "Maths",
                Unit    :"3",
                ExamDate: "06-07-2022",
                Session :"AfterNoon",                    
            },
            completedTask:{
                TestName     : "Maths",
                Unit         :"2",
                completedDate: "02-06-2022",
            },
            upcommingTask:{
                TestName: "Maths",
                Unit    :"3",
                ExamDate: "06-07-2022",
                Session : "AfterNoon"                    
            },
       }]
    },
    {
        subjectName   : "Science",
        subjectTeacher: "Mr.Damodaran",
        schedule:[{
            completedTest:{
                TestName: "Science",
                Unit    :"2",
                ExamDate: "02-06-2022",
                Mark    : "60/100",
                Result  : "Pass",
            },
            upcommingTest:{
                TestName: "Science",
                Unit    :"3",
                ExamDate: "06-07-2022",
                Session :"AfterNoon",                    
            },
            completedTask:{
                TestName     : "Science",
                Unit         :"2",
                completedDate: "02-06-2022",
            },
            upcommingTask:{
                TestName: "Science",
                Unit    :"3",
                ExamDate: "06-07-2022",
                Session : "AfterNoon"                    
            },
       }]
    },
    {
        subjectName   : "History",
        subjectTeacher: "Mr.Damodaran",
        schedule:[{
            completedTest:{
                TestName: "History",
                Unit    :"2",
                ExamDate: "02-06-2022",
                Mark    : "60/100",
                Result  : "Pass",
            },
            upcommingTest:{
                TestName: "History",
                Unit    :"3",
                ExamDate: "06-07-2022",
                Session :"AfterNoon",                    
            },
            completedTask:{
                TestName     : "History",
                Unit         :"2",
                completedDate: "02-06-2022",
            },
            upcommingTask:{
                TestName: "History",
                Unit    :"3",
                ExamDate: "06-07-2022",
                Session : "AfterNoon"                    
            },
       }]
    }
]
app.use(express.json());
app.get("/api/subject",(req,res)=>{
    try{
        res.status(200).send(subject);
    }catch(error)
    {
        res.json({message:"unable to create"});

    }

});
app.post("/api/subject",async(req,res)=>{
    try{
        const details= [
            {
               subjectName   : req.body.subjectName,
               subjectTeacher: req.body.subjectTeacher,
               schedule:[{
                    completedTest:{
                        TestName: req.body.TestName,
                        Unit    : req.body.Unit,
                        ExamDate: req.body.ExamDate,
                        Mark    : req.body.Mark,
                        Result  : req.body.Result,
                    },
                    upcommingTest:{
                        TestName: req.body.TestName,
                        Unit    :req.body.Unit,
                        ExamDate: req.body.ExamDate,
                        Session :req.body.Session,                    
                    },
                    completedTask:{
                        TestName     : req.body.TestName,
                        Unit         :req.body.Unit,
                        completedDate: req.body.completedDate,
                    },
                    upcommingTask:{
                        TestName: req.body.TestName,
                        Unit    :req.body.Unit,
                        ExamDate: req.body.ExamDate,
                        Session : req.body.Session                    
                    },
               }]
               
            }];
        console.log(details);
        const subject=new Subject(details);
const subjectCreated=await subject.save();
if(subjectCreated){
    console.log("created");
res.status(201).json({message:"successfully created"});
}
else{
    res.status(401);
    throw new error("not found ");
}
}catch(err){
    return res.status(500).json({message:err.message});
}}
);
//update
app.put('/api/subject/:id',(req,res)=>{
    console.log(req.params.id);
    Subject.findOneAndUpdate({_id:req.params.id},{
        $set:{
        
            
                   subjectName   : req.body.subjectName,
                   subjectTeacher: req.body.subjectTeacher,
                   schedule:[{
                        completedTest:{
                            TestName: req.body.TestName,
                            Unit    : req.body.Unit,
                            ExamDate: req.body.ExamDate,
                            Mark    : req.body.Mark,
                            Result  : req.body.Result,
                        },
                        upcommingTest:{
                            TestName: req.body.TestName,
                            Unit    :req.body.Unit,
                            ExamDate: req.body.ExamDate,
                            Session :req.body.Session,                    
                        },
                        completedTask:{
                            TestName     : req.body.TestName,
                            Unit         :req.body.Unit,
                            completedDate: req.body.completedDate,
                        },
                        upcommingTask:{
                            TestName: req.body.TestName,
                            Unit    :req.body.Unit,
                            ExamDate: req.body.ExamDate,
                            Session : req.body.Session                    
                        },
                   }]
                   
                }
            
            })
            .then(result=>{
                res.status(200).json({
                    updated_subject:result       
                 })
            })
            .catch(err=>{
                console.log(err)
                res.status(500).json({
                    error:err
                })
            })
    })

    //delete
    app.delete('/api/subject/:id',(req,res)=>{
        console.log(req.params.id);
        Subject.findByIdAndRemove({_id:req.params.id},{
            $set:{
               
                subjectName   : req.body.subjectName,
                   subjectTeacher: req.body.subjectTeacher,
                   schedule:[{
                        completedTest:{
                            TestName: req.body.TestName,
                            Unit    : req.body.Unit,
                            ExamDate: req.body.ExamDate,
                            Mark    : req.body.Mark,
                            Result  : req.body.Result,
                        },
                        upcommingTest:{
                            TestName: req.body.TestName,
                            Unit    :req.body.Unit,
                            ExamDate: req.body.ExamDate,
                            Session :req.body.Session,                    
                        },
                        completedTask:{
                            TestName     : req.body.TestName,
                            Unit         :req.body.Unit,
                            completedDate: req.body.completedDate,
                        },
                        upcommingTask:{
                            TestName: req.body.TestName,
                            Unit    :req.body.Unit,
                            ExamDate: req.body.ExamDate,
                            Session : req.body.Session                    
                        },
                   }]
           
                
            }
        })
        .then(result=>{
            res.status(200).json({
                Deleted_subjectDetails:result       
             })
        })
        .catch(err=>{
            console.log(err)
            res.status(500).json({
                error:err
            })
        })
        })
        const port=5000;
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
    console.log(subject);
});
