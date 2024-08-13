import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-zoomcallback',
  templateUrl: './zoomcallback.component.html',
  styleUrls: ['./zoomcallback.component.css']
})
export class ZoomcallbackComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      if (code) {
        this.authService.handleZoomCallback(code).subscribe({
          next: (response) => {
            const accessToken = response.accessToken;
            console.log(accessToken);
            localStorage.setItem('zoomAccessToken', accessToken);

            // Redirect to the doctor's dashboard after successful Zoom authorization
            this.router.navigate(['/doctor/dashboard']);
            this.toastr.success('Zoom authorization successful');
          },
          error: (err) => {
            this.toastr.error('Failed to obtain Zoom access token');
            this.router.navigate(['/login']);
          }
        });
      } else {
        this.toastr.error('Zoom authorization failed');
        this.router.navigate(['/login']);
      }
    });
  }
}
