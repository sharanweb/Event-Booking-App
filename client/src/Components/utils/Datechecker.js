import { TimeChecker } from "./timeChecker"


export const DateChecker = (today, meet, from, to, now)=>{
    if(meet > today){
     return "upcoming"
    }
    if(meet<today){
     return "completed"
    }
    if(meet == today){
        if(from > now){
            return "upcoming"
           }
        
           if(to < now){
            return "completed"
           }
        
           if(from < now && now < to){
            return "ongoing"
           }
    }
  }