function  emailVerificationTempalte(token){
 return `<div>
 <img src=https://i.ibb.co/ByGM6bv/OREBI.png alt="" style=width:100px>
 <h1 style=font-size:40px;color:teal>WellCome TO Orebi Ecomarce</h1>
 <p style=font-size:18px;font-family:sans-serif>Please Verify your Email</p>
 <a href="" style="text-decoration:none;padding:10px 20px;background-color:#262626;color:#f0f8ff;font-size:14px;font-weight:700">Confirm Your Email</a>
 </div>,${token}`
}
module.exports=emailVerificationTempalte;