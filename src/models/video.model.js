import mongoose,{Schema} from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
const videoSchema = new Schema({

videoFile : {
    type : String , //cloudinary
    required : true, 
},

thumbnail : {
    type : String,
    required : true ,
},

title : {
     type : String,
    required : true ,
},

description : {
     type : String,
    required : true ,
},

duration : {
     type : Number,
    required : true ,
},

views : {
    type : Number , 
    default : 0,
},

isPublished : {
    type : Boolean , 
    required : true, 
},

owner : {
    type : Schema.Types.ObjectId,
    ref:"User"
},



    id : {
        type : String 
    }

},{timestamps : true})

videoSchema.plugin(mongooseAggregatePaginate)
//schema.plugin() in Mongoose is used to attach reusable functionality to a schema.
//it means:"Take everything defined inside mongooseAggregationPipeline and add it to the videoSchema."

export const Video = mongoose.mmodel("Video",videoSchema)