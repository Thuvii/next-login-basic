import * as bcrypt from 'bcrypt';
import {SALT_ROUNDS} from "@/lib/auth"

const password = "123456";

bcrypt.hash(password, SALT_ROUNDS)
  .then((hash: string) => {
    console.log('Hashed password:', hash);
  })
  .catch((err: Error) => {
    console.error('Error hashing password:', err.message);
  });