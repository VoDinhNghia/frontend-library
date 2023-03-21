import { io } from 'socket.io-client';
import { authHeaderNoBearer } from "./authHeader";

const URL = 'http://localhost:3002';

export const socket = io(URL, {
    autoConnect: true,
    transportOptions: {
        polling: {
          extraHeaders: authHeaderNoBearer(),
        },
    }
});