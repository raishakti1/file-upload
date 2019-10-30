import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map,tap} from 'rxjs/operators'
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fileToUpload: File = null;
  trigger:boolean=false;

  constructor(private http:HttpClient)
  {

  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

uploadFileToActivity() {
  this.postFile(this.fileToUpload).subscribe(data => {
    // do something, if upload success
    alert("success");
    }, error => {
      console.log(error);
    });
}

postFile(fileToUpload: File): Observable<boolean> {
  const endpoint = 'your-destination-url';
  const formData: FormData = new FormData();
  var httpHeaders = new HttpHeaders({
    'Content-Type' : 'multipart/form-data'
   });
  formData.append('image', fileToUpload, fileToUpload.name);
  return this.http
    .post("http://localhost:3000/api/upload", formData).pipe(
    map(() => { return true; })
    )
}

downloadfile()
{
  //this.http.get("http://localhost:3000/api/download/1",{responseType:'blob'}).subscribe((res)=>{window.open(window.URL.createObjectURL(res))});
  window.open("http://localhost:3000/api/download/1");
}

showfile()
{
  this.trigger=true;
}
}
