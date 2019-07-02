import { Component, OnInit, OnDestroy } from "@angular/core";
import { ChatService } from "./services/chat.service";
import { GlobalObservableService } from "@core/shared/globals/global-observable";
import { Howl } from "howler";
import { AuthService } from "@core/authentication-module/services/auth.service";
import { SocketMessage } from "./models/message.model";
@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"]
})
export class ChatComponent implements OnInit, OnDestroy {
  public messages = [];
  public onlineUsers = [];
  public connection$: any;
  public message: string = "";
  public userID: string;
  public sound: any;
  public typingState: any;
  public isTyping: boolean = false;

  constructor(
    private chatService: ChatService,
    private auth: AuthService,
    private globalObservableService: GlobalObservableService
  ) {
    this.sound = new Howl({
      src: ["assets/sound/to-the-point.mp3"]
    });
  }

  sendMessage() {
    const socketMsg: SocketMessage = {
      text: this.message,
      currentTime: new Date(),
      userName: this.auth.getUserName,
      userID: this.auth.getUserID
    };
    this.chatService.sendMessage(socketMsg);
    this.message = "";
  }

  userIsTyping($event) {
    const currentUser = {
      userID: this.userID,
      userName: localStorage.getItem("userName")
    };
    if ($event) {
      this.chatService.notifyOnTyping(currentUser);
    }

    const stop = () => this.chatService.stopTyping(currentUser);
    setTimeout(stop, 1500);
  }
  ngOnInit() {
    this.userID = localStorage.getItem("userID");

    // subcribe typing events
    this.globalObservableService.isUserTyping.subscribe(res => {
      this.typingState = res._user;
      this.isTyping = res.type == "typing";
    });

    // subscribe new users connected
    this.globalObservableService.userStackObservable.subscribe(onlineUsers => {
      this.onlineUsers = onlineUsers;
      this.onlineUsers.length == 1 ? (this.messages = []) : null;
    });
    // subcribe new messages
    this.connection$ = this.chatService
      .getMessages()
      .subscribe((message: SocketMessage) => {
        if (message.userID != this.userID) {
          this.sound.play();
        }

        this.messages.push(message);
      });
  }

  ngOnDestroy() {
    this.connection$.unsubscribe();
  }
}
