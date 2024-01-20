import { FastifyInstance } from "fastify";
import { prisma } from "./lib/prisma";
import { z } from "zod";

export async function appRoutes(app: FastifyInstance) {
  app.get("/student", async (request) => {
    console.log(request.query)
    const createStudentBody = z.object({
      email: z.string(),
    });

    const { email } = createStudentBody.parse(request.query);

    const student = prisma.student.findUnique({
      where: {
        email: email,
      },
    });

    return student;
  });

  // app.post("/newStudent", async (request) => {
  //   const newStudent = prisma.student.create({
  //     data: {
  //       name: request.body
  //     }
  //   })
  // })
}
