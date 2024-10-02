import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

/**
 * Testing API end points on http://httpbin.org
 */
@Component({
  selector: 'app-test-api',
  standalone: true,
  imports: [],
  templateUrl: './test-api.component.html',
  styleUrl: './test-api.component.css'
})
export class TestAPIComponent {
  apiRoot: string = "http://httpbin.org"; 

  constructor(private http: HttpClient) { }  

  //simple get function on Http client, returns observable, subscribe to, print to console
  doGET() {
    console.log("GET");
    let url = `${this.apiRoot}/get`;
    this.http.get(url).subscribe((data) => console.log(data));
  }
 
//get method with query parameters
doGETQ() {
  console.log("GET");
  let url = `${this.apiRoot}/get`;
  this.http.get(url, {params: new HttpParams({fromObject: { 'foo': 'moo', limit: '25' }})}).subscribe((data) => console.log(data));
}

async doGETAsPromise() {
  console.log("GET AS PROMISE");
  let url = `${this.apiRoot}/get`;

  var promise = new Promise((resolve, reject) => { //inner function takes two arguments
    this.http.get(url).subscribe(data => {    
      if(data)
        resolve('done');
    else
        reject('error');
    })
});  
const res = await promise.then(   //promise chaining
  (res) => console.log(res),
  (err) => console.error(err)
).catch((err) => console.error(err));
}

// This code prints out "Error!",
doGETAsPromiseError() {
  console.log("GET AS PROMISE ERROR");
  let url = `${this.apiRoot}/get`;
  let error = true;
  let promise = new Promise((resolve, reject) => { //inner function takes two arguments
    this.http.get(url).subscribe(error => {    
      if(error)
        reject("Error occured");
      else
        resolve("done");
    })
});

promise.then(   //promise chaining
  (val) => console.log(val)
).catch((err) => console.error(err)
).finally(() => console.log('All done'));
}

//using async await
// This code prints out "Error!",
doGETAsPromiseErrorAsync() {
  console.log("GET AS PROMISE Async ERROR");
  let url = `${this.apiRoot}/get`;
  let error = true;
  let promise = new Promise((resolve, reject) => { //inner function takes two arguments
    this.http.get(url).subscribe(error => {    
      if(error)
        reject("Error occured");
      else
        resolve('done');
    })
  });
  return promise;
}

async DemoPromise(){
  try{
    let message = await this.doGETAsPromiseErrorAsync();
    console.log(message);
  }catch(error){
    console.error(error);
  }
}


//This code prints out status: 405, statusText: "METHOD NOT ALLOWED",
doGETAsObservableError() {
  console.log("GET AS OBSERVABLE ERROR");
  let url = `${this.apiRoot}/post`;
  this.http.get(url).subscribe({
    next: (res)=> console.log(res),
    error: (msg) => console.error(`Error: ${msg.status} ${msg.statusText}`)
});
}

//request with headers
doGETWithHeaders() {
  console.log("GET WITH HEADERS");
  let url = `${this.apiRoot}/get`;
  const httpOptions = new HttpHeaders({Authorization: btoa("username:password")});
  this.http.get(url, {headers:httpOptions}).subscribe({
    next: (res)=> console.log(res),
    error: (msg) => console.error(`Error: ${msg.status} ${msg.statusText}`)
});
};

doPOST() {
    console.log("POST");
    let url = `${this.apiRoot}/post`;
    this.http.post(url, {params: new HttpParams({fromObject: {'moo':'foo', 'goo':'loo'}})},).subscribe((data) => console.log(data));
  }

doPUT() {
    console.log("PUT");
    let url = `${this.apiRoot}/put`;
    let search = new URLSearchParams();
    search.set('foo','moo');
    search.set('limit', '25');
    this.http.put(url, {params: new HttpParams({fromObject: {'moo':'foo', 'goo':'loo'}})},{params: new HttpParams({fromObject: {'foo':'moo', limit: '25'}})}).subscribe((data) => console.log(data));
  }

doDELETE() {
    console.log("DELETE");
    let url = `${this.apiRoot}/delete`;
    this.http.delete(url, {params: new HttpParams({fromObject: {'moo':'foo', limit: '25'}})},).subscribe((data) => console.log(data));
  }

}


