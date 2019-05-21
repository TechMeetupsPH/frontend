import { Injectable } from "@angular/core";
import { environment } from "@env/environment";
import { Observable } from "rxjs";
import { GlobalObservableService } from "@core/shared/globals/global-observable";
import { SocketMessage } from "../models/message.model";
import * as io from "socket.io-client";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  private url = environment.baseUrl;
  private socket;

  constructor(private globalObservableService: GlobalObservableService) {}

  sendMessage(message: SocketMessage) {
    this.socket.emit("add-message", message);
  }

  notifyOnTyping(user) {
    this.socket.emit("typing", user);
  }

  stopTyping(user) {
    this.socket.emit("stopped-typing", user);
  }

  getMessages() {
    const _user = {
      userName: localStorage.getItem("userName"),
      userID: localStorage.getItem("userID")
    };
    let observable = new Observable(observer => {
      this.socket = io(this.url, { query: _user });
      // Trigger when new user is connected
      this.socket.on("onlineUsers", res => {
        this.globalObservableService.userStackObservable.next(res.onlineUsers);
      });

      // Trigger when user is typing
      this.socket.on("typing", res => {
        this.globalObservableService.isUserTyping.next(res);
      });
      // stop typing
      this.socket.on("stopped-typing", res => {
        this.globalObservableService.isUserTyping.next(res);
      });
      // Trigger on new message
      this.socket.on("message", res => {
        this.globalObservableService.isUserTyping.next(false);
        observer.next(res);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
}
