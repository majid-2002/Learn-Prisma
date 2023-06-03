import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      name: "majid",
      age: 18,
      email: "majid@test.com",
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
    include: { userPreference: true },
  });
  console.log(user);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
