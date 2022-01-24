import bcrypt from "bcryptjs";

const users = [
    {
        name:'Ansari Saboor',
        email:'saboor@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin:true,
    },
    {
        name:'John Doe',
        email:'jhon@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin:false,
    },
    {
        name:'Jack Doe',
        email:'doe@gmail.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin:false,
    },
]

export default users