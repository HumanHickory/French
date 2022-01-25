import { Injectable } from "@angular/core";
import { Verb } from "../Models/Verb";
import { HttpClient, HttpParams } from '@angular/common/http'
import { ErrorModel } from "../Models/ErrorModel";

@Injectable({
    providedIn: 'root'
})
export class ErrorService {
    apiURL: string = "https://localhost:44311/api/";
    constructor(private http: HttpClient) {
    }

    reportError(error: ErrorModel) {
        return this.http.post<boolean>(this.apiURL + "error", error);
    }

}