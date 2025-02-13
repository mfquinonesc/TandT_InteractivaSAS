import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root',
})
export class MediaService {

  path: string = environment.url_base;

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<any> {
    return this.http.get(`${this.path}/api/get-companies/`);
  }

  getBanners(): Observable<any> {
    return this.http.get(`${this.path}/api/get-banners/`);
  }

  getTravels(): Observable<any> {
    return this.http.get(`${this.path}/api/get-travels/`);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.path}/api/get-categories/`);
  }

  getPartners(): Observable<any> {
    return this.http.get(`${this.path}/api/get-partners/`);
  }

  getTags(): Observable<any> {
    return this.http.get(`${this.path}/api/get-tags/`);
  }

  getBlogs(): Observable<any> {
    return this.http.get(`${this.path}/api/get-blogs/`);
  }

  getCustomerExperiences(): Observable<any> {
    return this.http.get(`${this.path}/api/get-customer_experiences/`);
  }

  setQuotation(data: any): Observable<any> {
    return this.http.post(`${this.path}/api/set-quotations/`, data);
  }
  
  setNewsletter(data: any): Observable<any> {
    return this.http.post(`${this.path}/api/set-newsletter/`, data);
  }
  
}
