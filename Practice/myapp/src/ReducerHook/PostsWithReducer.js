
    const INITIAL_STATE={
        loading:false,
        post:[],
        // post:{},
        error:false
    }
    const postReducer=(state,action)=>{
        console.log(state,action)
   switch(action.type){
    case "FETCH_START":
        return{
            loading:true,
            post:{},
            error:false
        }
    case "FETCH_SUCCESS":
        return{
            ...state,
            loading:false,
            post:action.payload,
            error:false
        }
    case "FETCH_ERROR":
        return{
            ...state,
            loading:false,
            post:{},
            error:true
        }
        default:return state
   }
    }



export  {postReducer,INITIAL_STATE}