import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
    form: any;
    contactForm: FormGroup;
    submitted = false;

    constructor( 
        private formBuilder: FormBuilder,
        private snackBar: MatSnackBar,
        private router: Router,
        private route: ActivatedRoute,
        ) { }

    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            fullName: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9]*[a-zA-Z]+[a-zA-Z0-9]*$')]],
            email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            comment: ['', [Validators.required]],
        });
    }

    get f() { return this.contactForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.contactForm.invalid) {
            return;
        }

        this.submitted = true;
        console.log(this.contactForm.value);

        this.snackBar.open("Query Submitted", "Ok", {
            duration: 8000,
        });

        setTimeout(() => {
            let data:any = this.contactForm.value;
            this.router.navigate(['./contact-data'],{
                queryParams: { data:btoa(JSON.stringify(data)) }
            });
            this.snackBar.open("Check your submitted query!!", "Ok", {
                duration: 5000,
            });
        }, 5000);
    }
}
