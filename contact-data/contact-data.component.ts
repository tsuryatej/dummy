import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-contact-data',
  templateUrl: './contact-data.component.html',
  styleUrls: ['./contact-data.component.css']
})
export class ContactDataComponent implements OnInit {
    data:any;
    constructor( 
        private router: Router,
        private route: ActivatedRoute,
        private snackBar: MatSnackBar,
        ) { }

    ngOnInit() {
        this.route.queryParams.subscribe((params) =>{
        console.log(params);
        this.data = JSON.parse(atob(params.data));

        setTimeout(() => {
            this.router.navigate(['./home']);
            this.snackBar.open("You are in home page", "Ok", {
                duration: 5000,
            });
        }, 15000);
    });
}

}

