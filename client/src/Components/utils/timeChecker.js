
export const timeChecker = (el) => {
   let date = el.date;
   let x = new Date();
   let y = x.toLocaleDateString();
   const meet = Date.parse(date);
   const today = Date.parse(y);
 
   let fromtime = el.fromtime;
   let totime = el.totime;
   let now = new Date();
   let tn = now.toLocaleTimeString();
   const tnarr = tn.split(":"); // splitting the string by colon
   const nowsec = tnarr[0] * 3600 + tnarr[1] * 60 + +tnarr[2]; // converting
   //console.log("nowsec", nowsec);
 
   let dt = el.date.split(",");
   let ft = el.fromtime.split(",")[1].split(":");
   let ftt = ft.join(":");
   const frarr = ftt.split(":"); // splitting the string by colon
   const fromsec = frarr[0] * 3600 + frarr[1] * 60 + +frarr[2]; // converting
   //console.log("fromsec", fromsec);
 
   let tt = el.totime.split(",")[1].split(":");
   let ttt = tt.join(":");
   const ttarr = ttt.split(":"); // splitting the string by colon
   const tosec = ttarr[0] * 3600 + ttarr[1] * 60 + +ttarr[2]; // converting
   //console.log("ttsec", tosec);
 
   if (meet > today) {
     return "upcoming";
   }
   if (meet < today) {
     return "completed";
   }
   if (meet == today) {
     if (fromsec > nowsec) {
       return "upcoming";
     }
 
     if (tosec < nowsec) {
       return "completed";
     }
 
     if (fromsec < nowsec && nowsec < tosec) {
       return "ongoing";
     }
   }
 };
