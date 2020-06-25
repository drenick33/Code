import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    template: `
        <StackLayout>
        <TextField [(ngModel)] hint="Email Address" keyboardType="email" autocorrect="false" autocapitalizationType="none"></TextField>
        <TextField hint="Password" secure="true"></TextField>
        <Button text="Sign in" class="submit-button"> (tap)="submit()"</Button>
        <Button text="Sign up for Groceries"></Button>
        </StackLayout>
    `,

    styleUrls: ['pages/login/login-common.css',
                'pages/login/login.css']
})
export class AppComponent {
    public email = "drenick1@binghamton.edu"


    public submit(){
        console.log("I Love Sasha")
    }
 }
