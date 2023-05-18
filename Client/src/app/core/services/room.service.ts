import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, IConfig } from '@core/config/config.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoomService {
    private apiUrl!: string;

    constructor(@Inject(APP_CONFIG) config: IConfig, private http: HttpClient) {
        this.apiUrl = `${config.apiURL}api/rooms`;
    }

    public createRoom(): Observable<IRoom> {
        return this.http.post<IRoom>(`${this.apiUrl}`, null);
    }
}

export interface IRoom {
    roomId: string;
}
