import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.update({
    data: {
      email: "alicepen@13.com",
    },
    where: {
      email: "alicd@124.com",
    },
  });

  // const users = await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "Alice",
  //       email: "alicd@124.com",
  //       age: 23,
  //     },
  //   ],
  // });

  // const users = await prisma.user.findMany({
  //   where: {
  //     name: "Alice",
  //   },
  //   // take: 1, //? take 1 record
  //   // skip: 1, //? skip 1 record
  //   orderBy: {
  //     age: "desc", //? order by age ascending or descending
  //   },
  // });

  // const users = await prisma.user.findMany({
  //   where: {
  //     // name: {
  //     //   equals: "Alice", //? equal to Alice
  //     //   not: "Alice", //? not equal to Alice
  //     //   in: ["Alice", "Bob"], //? gives all the users in the array
  //     //   notIn: ["Alice", "Bob"], //? gives all the users not in the array
  //     // },
  //     age: {
  //       lt: 30, //? less than 30
  //     },
  //     email: {
  //       contains: "alic", //? contains alic in the email
  //       endsWith: "124.com", //? ends with 124.com
  //     },
  //   },
  // });

  console.log(users);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
