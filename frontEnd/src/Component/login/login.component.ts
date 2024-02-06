// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthenticationService } from '../../Services/authentication.service'; 
// import { RouterService } from '../../Services/router.service'; 

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   loginForm: FormGroup;
//   errorMessage: string = '';

//   constructor(
//     private formBuilder: FormBuilder,
//     private authService: AuthenticationService,
//     private routerService: RouterService
//   ) {
//     this.loginForm = this.formBuilder.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

//   ngOnInit(): void {
//     // Check if user is already authenticated, then redirect to dashboard
//     if (this.authService.isUserAuthenticated()) {
//       this.routerService.toDashboard();
//     }
//   }

//   loginSubmit(): void {
//     if (this.loginForm.valid) {
//       const { username, password } = this.loginForm.value;
//       this.authService.authenticateUser({ username, password }).subscribe(
//         (response: { token: string; }) => {
//           if (response && response.token) {
//             // Authentication successful, save token and navigate to dashboard
//             this.authService.setBearerToken(response.token);
//             this.routerService.toDashboard();
//           } else {
//             // Authentication failed, display error message
//             this.errorMessage = 'Invalid credentials';
//           }
//         },
//         (error: any) => {
//           // Handle different types of errors and set appropriate error messages
//           this.handleError(error);
//         }
//       );
//     } else {
//       // Display error message for invalid form fields
//       this.errorMessage = 'Please fill in all fields.';
//     }
//   }

//   handleError(error: any): void {
//     if (error.status === 403) {
//       this.errorMessage = 'Unauthorized Access !!!';
//     } else if (error.status === 404) {
//       this.errorMessage = 'Unable to access server. Please try again later.';
//     } else {
//       this.errorMessage = 'Internal Server Error. Please try again later.';
//     }
//   }
// }
