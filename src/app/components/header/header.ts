import { Component, inject } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { LoginService } from "../../service/login/login.service";
import { Subscriber, Subscription } from "rxjs";

@Component({
    selector: 'app-header',
    imports: [RouterLink],
    templateUrl: './header.html' 
})

export class HeaderComponent {
    name!:string
    router=inject(Router)

    log=inject(LoginService)
    sub !: Subscription;

    ngOnInit() {
        this.sub = this.log.$name.subscribe(
            {next: a => this.name = a}
        )
    }

    unlog() {
        this.log.unlog()
        this.router.navigate(["/"])
    }

}