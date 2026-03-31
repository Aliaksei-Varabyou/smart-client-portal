"use server";

import bcrypt from "bcrypt";
import { prisma } from "@/lib/db/prisma";

export async function registerUser(email: string, password: string) {
  const hashedPassword = bcrypt.hash(password, 10);

  await prisma.user.create({
    email,
    password: hashedPassword
  })
}
