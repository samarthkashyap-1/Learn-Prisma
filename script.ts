import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.user.deleteMany()
   const user = await prisma.user.create({
    data:{
        name:"Dexter",
        email:"test@test.com",
        age: 20,
        UserPreference :{
            create:{
                emailUpdates:true,
            }
        }
    },
    include:{
        UserPreference:true
    }
    })
    console.log(user)
}

main().catch(e=>{
    console.error(e.message)
    
}).finally(async()=>{
    await prisma.$disconnect()
}
)
