import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material";

@Injectable({
  providedIn: "root"
})
export class IconsService {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      "log-in",
      sanitizer.bypassSecurityTrustResourceUrl("assets/SVG/login.svg")
    );
    iconRegistry.addSvgIcon(
      "log-out",
      sanitizer.bypassSecurityTrustResourceUrl("assets/SVG/logout.svg")
    );

    iconRegistry.addSvgIcon(
      "alias",
      sanitizer.bypassSecurityTrustResourceUrl("assets/SVG/alias.svg")
    );
    iconRegistry.addSvgIcon(
      "cache",
      sanitizer.bypassSecurityTrustResourceUrl("assets/SVG/cache.svg")
    );
    iconRegistry.addSvgIcon(
      "chat",
      sanitizer.bypassSecurityTrustResourceUrl("assets/SVG/chat.svg")
    );
    iconRegistry.addSvgIcon(
      "jwt",
      sanitizer.bypassSecurityTrustResourceUrl("assets/SVG/jwt.svg")
    );
    iconRegistry.addSvgIcon(
      "lazy",
      sanitizer.bypassSecurityTrustResourceUrl("assets/SVG/lazy.svg")
    );
    iconRegistry.addSvgIcon(
      "sass",
      sanitizer.bypassSecurityTrustResourceUrl("assets/SVG/sass.svg")
    );
  }
}
