import PrismaClient from "@prisma/client";  

const prisma = new PrismaClient.PrismaClient();

async function main(){

    const user = await prisma.user.upsert({
        where:{ email:"ameyawarang203@gmail.com" },
        update:{},
        create:{
            name:"Ameya Warang",
            email:"ameyawarang203@gmail.com",
            password:"hashedpassword",
            projects:[
                {
                    id:1,
                    name:"agoraBlockchain",
                    shortDEscription:"A decentralized social media platform built on blockchain technology, empowering users with ownership and control over their data and content.",
                    techStack:["Next.js","Tailwind CSS","Prisma","PostgreSQL"],
                    problemStatement:"Traditional social media platforms often exploit user data and lack transparency. Agora Blockchain aims to address these issues by leveraging blockchain technology to create a decentralized social media platform that gives users ownership and control over their data and content.",
                    solution:"By utilizing blockchain technology, Agora Blockchain ensures that user data is securely stored and controlled by the users themselves. The platform allows users to monetize their content directly, without intermediaries, fostering a more equitable and transparent social media ecosystem.",
                    landingPageImage:"image",
                    githubLink:"https://github.com/BANKAAIII/agora",
                    liveLink:"https://agora-beta-three.vercel.app/",
                    userId:1
                }
            ]
        }
    })

}